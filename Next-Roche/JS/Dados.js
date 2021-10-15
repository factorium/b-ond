function Dados() {
    var nome = document.getElementById("nome");
    var senha = document.getElementById("senha");

    console.log(senha.value + senha.value);

    if(nome.value == "123" && senha.value == "123") {
        window.location.href = "index.html";
    }else{
        alert("Dados incorretos");
    }
}