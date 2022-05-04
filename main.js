function encriptar ( ){
    var texto = document.getElementById("input-original").value.toLowerCase();
    var txtCifrado = texto.replace(/e/igm,"enter")
    var txtCifrado = txtCifrado.replace(/o/igm,"ober")
    var txtCifrado = txtCifrado.replace(/i/igm,"imes")
    var txtCifrado = txtCifrado.replace(/a/igm,"ai")
    var txtCifrado = txtCifrado.replace(/u/igm,"ufat")

    document.getElementById("texto2").style.display = "show"
    document.getElementById("texto2").style.display = "inherit"
    document.getElementById("sinTexto").style.display = "none";
    document.getElementById("muñeco").style.display = "none";
    document.getElementById("texto2").innerHTML = txtCifrado;
    document.getElementById("copiar").style.display = "show"
    document.getElementById("copiar").style.display = "inherit";

}


function desencriptar ( ){
    var texto = document.getElementById("input-original").value.toLowerCase();
    var txtCifrado = texto.replace(/enter/igm,"e")
    var txtCifrado = txtCifrado.replace(/ober/igm,"o")
    var txtCifrado = txtCifrado.replace(/imes/igm,"i")
    var txtCifrado = txtCifrado.replace(/ai/igm,"a")
    var txtCifrado = txtCifrado.replace(/ufat/igm,"u")

    document.getElementById("sinTexto").style.display = "none";
    document.getElementById("muñeco").style.display = "none";
    document.getElementById("texto2").innerHTML = txtCifrado;
    document.getElementById("copiar").style.display = "flex"
    document.getElementById("copiar").style.display = "inherit";
}
function copiar (){
    var contenido = document.getElementById("texto2");
    contenido.select("texto2")
    document.execCommand("copy");
    textoEntrada.value = textoSalida.value;
    
     
    

}