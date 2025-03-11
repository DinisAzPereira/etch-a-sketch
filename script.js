


function SquaresNumberPromp() {
  var Prompt = prompt("Please enter grid size that you want:");
  if (Prompt === null) {
    alert("Por favor preencher os dados")
  
  } else if(Prompt> 100) {
    alert("Por favor preencher um valor abaixo de 100")


  } else {

    const sideLenghtSquare = 320 / Prompt;

    for (let i = 0; i < Prompt * Prompt; i++) {
      const container = document.querySelector(".container");
      const div = document.createElement("div");
      container.appendChild(div);
      div.classList.add("square");


      div.style.height = sideLenghtSquare + "px";
      div.style.width = sideLenghtSquare + "px"
      div.style.border = "0.5px solid black"

    }
      changeSquareBackground()
  }
    
}


function changeSquareBackground() {

  const list = document.querySelectorAll('.square');

  const randomColor = Math.floor(Math.random()*16777215).toString(16);


  list.forEach(el => {
    el.addEventListener('mouseover', (e) => {
        //code that affects the element you click on
        el.style.backgroundColor = "#" + randomColor
       
    });
  }); 
}
