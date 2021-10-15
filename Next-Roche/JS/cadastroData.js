const algo = document.querySelector("#algo");

function cadastrar() {
    var cpf = document.getElementById("cpf").value;
    var idade = document.getElementById("idade").value;
    var convenio = document.getElementById("convenio").value;
    var nome = document.getElementById("nome").value;
    var sexo = document.getElementsByName("sexo");

    for(var i=0, sexo1=sexo.length; i<sexo1; i++) {
        if(sexo[i].checked) {
            var mostrar = sexo[i].value;
            console.log(mostrar);

        db.collection("Pacientes").doc(String(cpf)).set({
            Nome: String(nome),
            Idade: String(idade),
            Sexo: String(mostrar),
            Convênio: String(convenio)
        }).catch(function(error) {
            console.log("ERRO");
        });
        console.log("Cadastrado");
        }
    }
}

function addData() {
    var cpf = document.getElementById("cpf").value;
    var bpm = document.getElementById("bpm").value;
    var remedios = document.getElementById("remedios").value;
    var animais = document.getElementById("animais").value;
    var outros = document.getElementById("outros").value;
    var dataTri = document.getElementById("dataTri").value;
    var pressao = document.getElementById("pressao").value;
    var temp = document.getElementById("temp").value;
    var obs = document.getElementById("obs").value;
    var datas = {
        Batimento_Cardíaco: String(bpm) + "bpm",
        Pressão: String(pressao),
        Temperatura: String(temp) + "°C",
        Observações: String(obs),
        Data: firebase.firestore.FieldValue.serverTimestamp()
    }
    var alergia = {
        Remédios: String(remedios),
        Animais: String(animais),
        Outros: String(outros)
    }
    db.collection("Pacientes").doc(String(cpf)).collection("Dados").doc("Dados Básicos").collection("Datas").doc(String(dataTri)).set(datas).catch(function(error) {
        console.log("ERRO");
    });
    db.collection("Pacientes").doc(String(cpf)).collection("Dados").doc("Alergias").set(alergia).catch(function(error) {
        console.log("ERRO");
    });
    console.log("Salvo");
    /*window.location.href = "Ficha.html";

    document.getElementById("pudim").innerHTML = "Nome: " + nome + "<br>Idade: " + idade + "<brCPF: >" + cpf +
    "<br>Convênio: " + convenio + "<br>Data da Triagem: " + dataTri + "<br>Temperatura: " + temp +
    "<br>Pressão: " + pressao + "<br>Batimentos Cardiacos: " + bpm + "<br>Observações: " + obs + "<br>Alergias: " +
    remedios + "<br>Animais: " + animais + "Outros: " + outros;*/
}