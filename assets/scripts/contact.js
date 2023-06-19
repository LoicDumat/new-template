(function(){
    
    const FORM = document.querySelector(".form")
    
    const FORM_INPUT_NAME = FORM.querySelector("#inputName")
    const FORM_INPUT_EMAIL = FORM.querySelector("#inputEmail")
    const FORM_INPUT_TEXT = FORM.querySelector("#inputText")
    const FORM_MESSAGE = FORM.querySelector(".form__message")
    
    FORM.addEventListener("submit", function(event) {
        event.preventDefault()
    
        if(FORM_INPUT_NAME.value == ""){
            const FORM_MESSAGE = FORM.querySelector("#messageName")
            FORM_MESSAGE.innerHTML = "Skriv dit navn"
            
        }
          
        else if (FORM_INPUT_EMAIL.value == ""){
            const FORM_MESSAGE = FORM.querySelector("#messageEmail")
            FORM_MESSAGE.innerHTML = "Skriv din mail"
        }
        
        
        else if (FORM_INPUT_TLF.value == ""){
            const FORM_MESSAGE = FORM.querySelector("#messageText")
            FORM_MESSAGE.innerHTML = "Skriv os en besked"
        }
      
        else {
            FORM.submit()
        }
    })
    
    /*FORM.addEventListener("submit", function(event) {
        event.preventDefault()
        
        if (FORM_INPUT_TLF.value == ""){
            const FORM_MESSAGE = FORM.querySelector("#messageTlf")
            FORM_MESSAGE.innerHTML = "Telefonnummer er ikke udfyldt"
        }
        else if (FORM_INPUT_TLF.value){
            const FORM_MESSAGE = FORM.querySelector("#messageTlf")
            FORM_MESSAGE.innerHTML = ""
        }
        else {
            FORM.submit()
        }
    
    })
    
    FORM.addEventListener("submit", function(event) {
        event.preventDefault()
        
        if (FORM_INPUT_EMAIL.value == ""){
            const FORM_MESSAGE = FORM.querySelector("#messageEmail")
            FORM_MESSAGE.innerHTML = "Email er ikke udfyldt"
        }
        else if (FORM_INPUT_EMAIL.value){
            const FORM_MESSAGE = FORM.querySelector("#messageEmail")
            FORM_MESSAGE.innerHTML = ""
        }
        else {
            FORM.submit()
        }
    })  */
    
    //FORMEN ER SENDT
    const URL_STRING = window.location.href //vores form-værdier sættes i en string
    const URL_OBJECT = new URL(URL_STRING) // string konverteres til object
    
    
    if (URL_OBJECT.searchParams.get("navn")){
    
    
    let userName = URL_OBJECT.searchParams.get("navn")
    let userTlf = URL_OBJECT.searchParams.get("tlf")
    let userEmail = URL_OBJECT.searchParams.get("email")
    let thankYouMessage = `Hej ${userName}. Tak for din henvendelse. Vi ringer dig op på ${userTlf} snarest muligt`
    
    FORM.innerHTML = thankYouMessage
    
    }
    })()
    
    
    
    
    //document.body.innerHTML vil fjerne alt indhold på siden og hente nyt element, istedet for ny side
    
    /*FORM.addEventListener("submit", function(event){
        event.preventDefault()
        console.log("Form sendt")
        window.setTimeout(function(){  //TIMER
            FORM.submit()
        }, 3000)
    })*/