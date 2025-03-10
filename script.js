//loop that create 256 squares


function SquaresNumberPromp() {
  var Prompt = prompt("Please enter grid size that you want:");
  if (Prompt === null) {
    alert("Por favor preencher os dados")
  
  } else if(Prompt> 100) {
    alert("Por favor preencher um valor abaixo de 100")


  } else {
    alert(Prompt)
  }

}




for (let i = 0; i < 256; i++) {
  const container = document.querySelector(".container");

  const div = document.createElement("div");
  container.appendChild(div);
  div.classList.add("square");
}
