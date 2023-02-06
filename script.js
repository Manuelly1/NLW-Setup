const form = document.querySelector("#form-habits")
const nlwSetup = new NLWSetup(form) 
const button = document.querySelector("header button")

button.addEventListener("click", add)
form.addEventListener("change", save)

function add() {
  const today = new Date().toLocaleDateString("pt-br").slice(0, -5)
  const dayExists = nlwSetup.dayExists(today)

  if (dayExists) {
    alert("Dia já incluso 🔴")
    return
  }

  alert("Adicionado com sucesso ✅")
  nlwSetup.addDay(today)
}

function save() {
  localStorage.setItem("NLWSetup@habits", JSON.stringify(nlwSetup.data)) //armazena informações na memória do browser; o primeiro argumento é o nome da chave, em seguida adiciona-se um dado em string (JSON...), onde o dado "nlwSetup.data" será transformado em string quando salvar 
}

const data = JSON.parse(localStorage.getItem("NLWSetup@habits")) || {}
nlwSetup.setData(data)
nlwSetup.load()
