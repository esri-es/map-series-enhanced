// noprotect
var comments = null;
var sortedComments = null;
var commentsContainer = document.querySelector('.comments');
var sortOne = document.querySelector('.sort-one');
var sortTwo = document.querySelector('.sort-two');
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

var table = document.createElement('table');

// Forgive me.
function bubbleSort() {
  
  function swap(arr, a, b) {
    var temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
  }
  
  for (var i = 0; i < sortedComments.length; i++) {
    for (var j = i+1; j < sortedComments.length - 1; j++) {
      if (sortedComments[i].word > sortedComments[j].word) {
        swap(sortedComments, i, j);
      }
    }
  }
}


function onSortOne(e) {
  sortedComments = comments.concat([]);
  bubbleSort();
  writeComments();
}

function onSortTwo(e) {
  sortedComments = comments.concat([]);
  sortedComments.sort(function(a, b) {
    return a.number - b.number;
  });
  writeComments();
}

function populate() {
  
  comments = [];
  for (var i = 0; i < 7000; i++) {
    comments.push({
      word: words[Math.floor(Math.random() * words.length)],
      number: Math.random()
    });
  }
  
  sortedComments = comments.concat([]);
}

function writeComments() {
  
  var thead = document.createElement('thead');
  var tbody = document.createElement('tbody');
  
  var tcontents = '';
  
  for (var c = 0; c < sortedComments.length; c++) {
    tcontents += '<tr>' + 
      '<td>' + sortedComments[c].word + '</td>' + 
      '<td>' + sortedComments[c].number + '</td>' + 
    '</tr>';
  }
  tbody.innerHTML = tcontents;
  table.innerHTML = '';
  
  table.appendChild(thead);
  table.appendChild(tbody);
  
  commentsContainer.innerHTML = '';
  commentsContainer.appendChild(table);
}

(function init() {
  sortOne.addEventListener('click', onSortOne);
  sortTwo.addEventListener('click', onSortTwo);
  populate();
  writeComments();
})();