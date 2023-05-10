let displayedValue = "";
let result = "";
let welcome= "";

// Para el mensaje de bienvenida
function welcomeMessage(welcome){
    let screen = document.getElementById("screen");
    welcome= screen.value
  if (welcome === "") {
    showValues("welcome!")
  }
 
}
welcomeMessage(welcome)

//Para mostrar los valores presionados o en los que se hizo clic en la pantalla
function showValues(val){
    let screen = document.getElementById("screen");
   
    if(screen.value == "welcome!"){
        screen.value = val
    }
    else{
        displayedValue += val
        updateValues(val)
    }

}

//Para actualizar el valor de la pantalla incluso cuando se agregan más números
function updateValues(input = ""){
    let screen = document.getElementById("screen");
    if (input) {
        screen.value += input;
      } else {
        screen.value = "";
      }  
}

//Evalúe los valores y obtenga también el resultado deseado, detecte e imprima posibles errores
function calculate(){
    try{
        let screen = document.getElementById("screen");
        result = eval(screen.value);
        screen.value = result;
        if(result + "*"){
            console.log("what")
        }
    }
   
    catch (e) {
        if (e instanceof SyntaxError) {
            document.getElementById("screen").value  = e.message + ", try again!";
        } else {
            throw e;
        }
    }

}

function clearAll(){
    displayedValue = "";
    welcome = ""
    updateValues("")
    //taking advantage of the already written function to clear by changing the value of it's argument to an empty string
}


//Cambiar el modo y/o diseño con el toggle
function switchModes(){
    document.body.classList.toggle("toggle");
    let  buttons =  document.querySelectorAll("button")
    buttons.forEach(button => {
        button.classList.toggle("toggle");
    });
    document.getElementById("screen").classList.toggle("toggle");
    document.getElementById("calculator-container").classList.toggle("toggle");
}
