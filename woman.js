let result;
function croacia() {
    let peso = document.getElementById("peso").value
    let altura = document.getElementById("altura").value
    let idade = document.getElementById("idade").value

    peso = peso * 9.6
    altura = altura * 1.8
    idade = idade * 4.7
    
    result = peso + altura - idade + 665
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