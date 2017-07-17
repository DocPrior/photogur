// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
// You can use CoffeeScript in this file: http://coffeescript.org/
document.addEventListener('DOMContentLoaded', function() {
  var activeButton = document.querySelector('.active-state-trigger.button.button-primary');
  activeButton.addEventListener('click', function(e) {
      e.preventDefault();
      var activeCard= document.querySelector('.card');
      activeCard.setAttribute('class', 'active');
    })
})
