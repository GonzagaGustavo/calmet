/*const demo = document.getElementById("demo")
const inpeso = document.getElementById("peso")
const inaltura = document.getElementsByClassName("altura")
const inidade = document.getElementsByClassName("idade")

let p;
let a;
let i;
function calcular() {
    p.push(inpeso.value)
    a.push(inaltura.value)
    i.push(inidade.value)
    inpeso.value = ""
    inaltura.value = ""
    inidade.value = ""
    render()
}
function render() {
    let calp = p = 13.75 * p
    let cala = a = 5 * a
    let cali = i = 6.8 * i
    let calresult  = calp + cala - cali + 66.5
    demo.appendChild("calresult")
}*/
const peso  = document.querySelector("#peso")
const altura  = document.querySelector("#altura")
const idade = document.querySelector("#idade")

function calcular() {
    alert(p + 1)
}