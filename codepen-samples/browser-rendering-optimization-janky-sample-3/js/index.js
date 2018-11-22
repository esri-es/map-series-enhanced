var time = 0;
var radiiInterval = 0;
var animating = false;
var animatingRadii = false;
var isolated = false;
var boxes = document.querySelectorAll('.box');
var animateButton = document.querySelector('#animate');

for (var b = 0; b < boxes.length; b++) {
    boxes[b].classList.toggle('shadow');
  }

animateButton.addEventListener('click', function() {
  
  for (var b = 0; b < boxes.length; b++) {
    boxes[b].classList.toggle('middle');
    
    if (!boxes[b].classList.contains('middle')) {
      boxes[b].style.webkitTransform = makeTransform(b, true);
    }
  }
  
  animating = boxes[0].classList.contains('middle');
 
  webkitRequestAnimationFrame(update);
});

function update() {
  
  if (!animating)
    return;
  
  time += 0.01;
  for (var b = 0; b < boxes.length; b++) {
    boxes[b].style.webkitTransform = makeTransform(b); 
  }
  
  webkitRequestAnimationFrame(update);
}

function makeTransform(b, zeroed) {
  
  var left = Math.sin(time + b * 0.05) * 200 + 'px';
  var top = Math.cos(time + b * 0.05) * 200 + 'px';
  
  if (zeroed) {
    left = '0px';
    top = '0px';
  }
  
  return isolated ?
    'translate3d(' + left + ', ' + top + ', 0)' :     
    'translate(' + left + ', ' + top + ')';    

}