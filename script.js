const demo = document.getElementById("demo")
const inpeso = document.getElementById("peso")
const inaltura = document.getElementsByClassName("altura")
const inidade = document.getElementsByClassName("idade")

    let p;
    var a;
    var i;
    p = inpeso.value
    a = inaltura.value
    i = inidade.value
function calcular() {
   // p.push(inpeso.value)
  //  a.push(inaltura.value)
  //  i.push(inidade.value)
  p = inpeso.value
  a = inaltura.value
  i = inidade.value
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
    demo.innerHTML = calresult
}