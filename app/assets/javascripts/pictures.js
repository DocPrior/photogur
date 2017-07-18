// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
// You can use CoffeeScript in this file: http://coffeescript.org/
document.addEventListener('DOMContentLoaded', function() {
  var cardList = document.querySelectorAll('.card');
  var activeButton = document.querySelectorAll('.active-state-trigger.button.button-primary');
  var count = 0;
  // var cardTable = document.querySelectorAll('.cards-list')
  // for (var x = 0; x < cardTable.length; x++){
    for (var i = 0; i < activeButton.length; i++){
      // if (cardTable[x].classList.contains('card')) {
        var button = activeButton[i];
        button.addEventListener('click', function(e) {
            e.preventDefault();
            this.parentElement.classList.add('active');
            // this.parentElement.prepend();
        })
      }
      function upCount() {
          count += 1
          return count
      }

      for (var x = 0; x < activeButton.length; x++) {
        var button = activeButton[x];
        button.addEventListener('click', function(e) {
            e.preventDefault();
            var countDeck = document.querySelector('#deckCount');
            countDeck.innerHTML = upCount()
        })
      }

      // else {
      //   var activeCards = document.querySelectorAll('.active');
      //   var deactivate = document.querySelectorAll('.active-state-trigger.button.button-primary');
      //   for(var a = 0; a < activeButton.length; a++) {
      //     var unButton = activeButton[a];
      //     unButton.addEventListener('click', function(e) {
      //       this.parentElement.setAttribute('class', 'card')
      //     })
      //   }
      // }

    })
