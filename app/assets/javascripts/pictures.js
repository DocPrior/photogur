// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
// You can use CoffeeScript in this file: http://coffeescript.org/
document.addEventListener('DOMContentLoaded', function() {
  var cardList = document.querySelectorAll('.card');
  var activeButton = document.querySelectorAll('.active-state-trigger.button.button-primary');
  for (var i = 0; i < activeButton.length; i++){
    var button = activeButton[i];
    button.addEventListener('click', function(e) {
        e.preventDefault();
        this.parentElement.setAttribute('class', 'active');
    })
  }


      // var countDeck = document.querySelector('.deck-count');
      //   var count = 0;
      // function upCount() {
      //     count += 1
      //     return count
      // }
      // countDeck.innerHTML = upCount();


})
