/**/
//pegando o html e consolidando como variaveis em js 
let botao = document.getElementById("botao");
let input = document.getElementById("input-tarefa");
let tarefas = document.getElementById("tarefas");

botao.addEventListener('click', function() {
  if (input.value.trim() !== "") {
    let li = document.createElement("li");

    // Texto da tarefa
    let span = document.createElement("span");
    span.textContent = input.value;

    // Alternar risco ao clicar
    span.addEventListener("click", function() {
      if (span.style.textDecoration === "line-through") {
        span.style.textDecoration = "";
      } else {
        span.style.textDecoration = "line-through";
      }
    });

    // Botão de remover
    let remover = document.createElement("button");
    remover.textContent = "Remover";
    remover.classList.add("remover");

    remover.addEventListener("click", function() {
      li.remove();
      alert("Tarefa removida!");
    });

    li.appendChild(span);
    li.appendChild(remover);
    tarefas.appendChild(li);

    input.value = "";
  }
});