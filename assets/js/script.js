document.addEventListener('DOMContentLoaded', function() {

  const input = document.querySelector('input');
  const form = document.querySelector('form');

  input.addEventListener('keyup', function(e) {
    input.classList.remove('invalid');
    // remove invalid feedback, if any
    if (document.querySelector('.invalid-feedback')) {
      form.removeChild(document.querySelector('.invalid-feedback'));
    }
    
    // if, input value is not empty
    if (!e.target.value == '') {
      const pattern = /^([\w\.-]+)@([a-z\d]+).([a-z\d]{2,8})(.[a-z]{2,8})?$/;
      if (!pattern.test(e.target.value)) {

        // create invalid feedback
        let span = document.createElement('span');
        let spanText = document.createTextNode('Please provide a valid email address');
        span.appendChild(spanText);
        span.classList.add('invalid-feedback');
        
        form.insertBefore(span, input.nextSibling);
        input.classList.add('invalid')
      }      
    }

  })

})