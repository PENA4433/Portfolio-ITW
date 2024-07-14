function media() {
  let nome = window.prompt('Digite o seu nome do aluno?');
  let n1 = Number(window.prompt('Qual foi a primeira nota de ' + nome + '?'));
  let n2 = Number(window.prompt('Além de ' + n1 + ', qual foi a outra nota de ' + nome + '?'));
  let n3 = Number(window.prompt('Além de ' + n2 + ' e ' + n1 + ', qual foi a outra nota de ' + nome + '?'));
  let n4 = Number(window.prompt('Além de ' + n3 + ', qual foi a outra nota de ' + nome + '?'));
  let n5 = Number(window.prompt('Além de ' + n4 + ', qual foi a outra nota de ' + nome + '?'));
  let n6 = Number(window.prompt('Além de ' + n5 + ', qual foi a outra nota de ' + nome + '?'));
  let n7 = Number(window.prompt('Além de ' + n6 + ', qual foi a outra nota de ' + nome + '?'));
  let n8 = Number(window.prompt('Além de ' + n7 + ', qual foi a outra nota de ' + nome + '?'));
  let n9 = Number(window.prompt('Além de ' + n8 + ', qual foi a outra nota de ' + nome + '?'));

  let media = (n1 + n2 + n3 + n4 + n5 + n6 + n7 + n8 + n9) / 9;

  let mensagem;

  if (media >= 9.5) {
    mensagem = 'Parabéns!!! Pode concorrer ao ensino superior!!';
  } else {
    mensagem = 'Não pode concorrer ao ensino superior'; 
  }

  let res = document.getElementById('situacao');
  res.innerHTML = '<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Calcular a média final de: ' + nome + '.</p>';
  res.innerHTML += '<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;As notas obtidas foram: ' + n1 + ', ' + n2 + ', ' + n3 + ', ' + n4 + ', ' + n5 + ', ' + n6 + ', ' + n7 + ', ' + n8 + ' e ' + n9 + '.</p>';
  res.innerHTML += '<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;A média final será: <em style="color:black;">' + media.toFixed(2) + '</em>.</p>';
  res.innerHTML += '<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Logo, <u style="color:black;">' + mensagem + '</u></p>';
}


media(); 