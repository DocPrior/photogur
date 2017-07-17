// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
// You can use CoffeeScript in this file: http://coffeescript.org/
document.addEventListener('DOMContentLoaded', function() {
  var cardList = document.querySelectorAll('.card');
  var activeButton = document.querySelectorAll('.active-state-trigger.button.button-primary');
    var count = 0;
  for (var i = 0; i < activeButton.length; i++){
    var button = activeButton[i];
    button.addEventListener('click', function(e) {
        e.preventDefault();
        this.parentElement.setAttribute('class', 'active');
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




})
