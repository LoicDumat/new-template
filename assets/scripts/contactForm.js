(function() {

    const FORM = document.querySelector(".form")

    FORM.addEventListener("submit", submitHandler)
    
    function validate(element) {
        
    }

    function submitHandler(event) {

        event.preventDefault()

        Array.from(event.target)
        .forEach(element => validate(element)) 
    }


})()