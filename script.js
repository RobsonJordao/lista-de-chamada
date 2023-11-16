function adicionarAluno() {
  var matricula = document.getElementById("matricula").value;
  var nome = document.getElementById("nome").value;
  var email = document.getElementById("email").value;
  var address = document.getElementById("address").value;

  if (matricula && nome) {
    var tabela = document
      .getElementById("lista-chamada")
      .getElementsByTagName("tbody")[0];

    var novaLinha = tabela.insertRow(tabela.rows.length);
    var celulaMatricula = novaLinha.insertCell(0);
    var celulaNome = novaLinha.insertCell(1);
    var celulaEmail = novaLinha.insertCell(2);
    var celulaAddress = novaLinha.insertCell(3);

    celulaMatricula.innerHTML = matricula;
    celulaNome.innerHTML = nome;
    celulaEmail.innerHTML = email;
    celulaAddress.innerHTML = address;

    // Limpar os campos do formulário após adicionar o aluno
    document.getElementById("matricula").value = "";
    document.getElementById("nome").value = "";
    document.getElementById("email").value = "";
    document.getElementById("address").value = "";
  } else {
    alert("Por favor, preencha todos os campos.");
  }
}
