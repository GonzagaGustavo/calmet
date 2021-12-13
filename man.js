let result;
function croacia() {
    let peso = document.getElementById("peso").value
    let altura = document.getElementById("altura").value
    let idade = document.getElementById("idade").value

    peso = peso * 13.75
    altura = altura * 5
    idade = idade * 6.8
    
    result = peso + altura - idade + 66.5
    console.log(result)
    if(peso == "") {
        document.getElementById("mostrar").innerHTML = "Faltou os valores!"
    }
    if(peso != "")
    render()
}

function render() {
    peso.value = ""
    altura.value = ""
    idade.value = ""

    document.getElementById("mostrar").innerHTML = result + " calorias diárias"
}