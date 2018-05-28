var btn = document.querySelector('button');
var colorBlock = document.querySelector('#color-block');
var sectionOfInterest = document.querySelector('#totes-promoted');

btn.addEventListener('click', function() {
  
  var r = Math.floor(Math.random() * 255);
  var g = Math.floor(Math.random() * 255);
  var b = Math.floor(Math.random() * 255);
  
  colorBlock.style.background = 'rgb(' + r + ', ' + g + ', ' + b + ')';
  
  sectionOfInterest.style.background = 'rgba(0,0,0,0.1)';
});