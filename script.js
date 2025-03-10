//loop that create 256 squares

function SquaresNumberPromp() {
  var Prompt = prompt("Please enter grid size that you want:");
  if (Prompt === null) {
    alert("Por favor preencher os dados")
  
  } else if(Prompt> 100) {
    alert("Por favor preencher um valor abaixo de 100")


  } else {
    for (let i = 0; i < Prompt * Prompt; i++) {
      const container = document.querySelector(".container");
    
      const div = document.createElement("div");
      container.appendChild(div);
      div.classList.add("square");
    }
    console.log(Prompt)
  }

}

const list = document.querySelectorAll('.square');



list.forEach(el => {
  el.addEventListener('click', (e) => {
      //code that affects the element you click on
      el.style.backgroundColor = "#a52a2a"
     
  });
}); 