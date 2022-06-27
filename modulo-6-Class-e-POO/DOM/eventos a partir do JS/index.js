document.querySelector('select[name= "select-option"]').addEventListener('change', function() {
  alert(window.event.target.value)
})