const coisa = document.querySelector("#coisa");

function cadastrar() {
    var email = document.getElementById("email").value;
    var senha = document.getElementById("senha").value;
    var nome = document.getElementById("nome").value;
    var idade = document.getElementById("idade").value;
    var crm = document.getElementById("crm").value;
    var sexo = document.getElementsByName("sexo");

    for(var i=0, sexo1=sexo.length; i<sexo1; i++) {
        if(sexo[i].checked) {
            var mostrar = sexo[i].value;
            console.log(mostrar);

            var infoDoc = {
                Nome: String(nome),
                Idade: String(idade),
                Sexo: String(mostrar),
                CRM: String(crm),
                Email: String(email)
            }
            firebase.auth().createUserWithEmailAndPassword(email, senha).then(function (novoUsuario) {
                novoUsuario = 1;
                console.log("Novo usuário cadastrado");
                if (novoUsuario == 1) {
                    db.collection("Profissionais").doc(String(nome)).set(infoDoc);
                    console.log("Salvo no Cloud Firebase");
                }else{
                    console.log("Não salvou no Cloud Firebase");
                }
            }).catch(function(erro) {
                console.log(erro.message);
            });
        }
    }

}