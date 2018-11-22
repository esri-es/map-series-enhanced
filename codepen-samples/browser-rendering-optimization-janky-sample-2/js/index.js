
var comments = null;
var commentsContainer = document.querySelector('.comments');
var switchLayout = document.querySelector('.control a.switch');
var output = document.querySelector('.output');
var count = 0;
var words = ['Boursin',
             'the big cheese',
             'fromage frais',
             'Babybel',
             'hard cheese',
             'feta',
             'ricotta',
             'camembert de normandie',
             'pecorino',
             'blue castello',
             'danish fontina',
             'Melted cheese',
             'croque monsieur',
             'cheese strings',
             'taleggio',
             'macaroni cheese',
             'cut the cheese',
             'paneer',
             'cheese and wine',
             'roquefort',
             'edam',
             'mozzarella',
             'rubber cheese',
             'brie',
             'cream cheese'];

var left = document.querySelector('body .left');
var right = document.querySelector('body .right');
var state = 0;
var anim = 0;

function generateComment(num) {
  var randTime = Math.round(Math.random() * Date.now());
  var comment = '';
  var commentLength = 20 + Math.round(Math.random() * 10);
  for (var m = 0; m < commentLength; m++) {
    comment += words[Math.floor(Math.random() * words.length)] + ' ';
  }
  
  return {
    author: 'Person ' + num,
    date: new Date(randTime),
    text: comment 
  };
}

function onSwitchLayoutClick(e) {
//   document.body.classList.toggle('wide');
  
  state = 1 - state;
}

function totesLayingOutYo() {
  
  anim += (state - anim) * 0.1;
  
  left.style.width = Math.floor(30 + ((anim) * 70)) + '%';
  right.style.width = Math.floor((1 - anim) * 70) + '%';
  
  var x = left.offsetWidth;
  
  requestAnimationFrame(totesLayingOutYo);
}

requestAnimationFrame(totesLayingOutYo);

function onPopulateFastClick() {
  
  var comments = '';
  for (var i = 0; i < 1000; i++) {
    var comment = generateComment(i+1);
    var commentText = '<div class="comment"><a href="#">' + 
        '<div class="author">' + comment.author + '</div>' + 
        '<div class="datetime">13th August</div>' + 
        '<div class="text">' + comment.text + '</div>' +
        '</a></div>';
    
    comments += commentText;
    
    if (i === 0)
      output.innerHTML = comment.text;
  }
  commentsContainer.innerHTML = comments; 
}

(function init() {
  switchLayout.addEventListener('click', onSwitchLayoutClick);
  onPopulateFastClick();
})();