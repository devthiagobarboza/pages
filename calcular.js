function calcularMediaPonderada(){
    var n1 = parseFloat(document.getElementById("n1").value);
    var n2 = parseFloat(document.getElementById("n2").value);
    var resultadoMediaPonderada = (parseFloat((n1 * 0.4) + (n2 * 0.6))).toFixed(2);
    var situacaoDoAluno = parseFloat(((n1*0.4+n2*0.6)/0.4+0.6) - resultadoMediaPonderada).toFixed(2);
    if (resultadoMediaPonderada >= 6.0){ 
        document.getElementById("resultado").setAttribute("value",resultadoMediaPonderada);
        document.getElementById("txtmedia").setAttribute("value", "Parabéns!! Você foi aprovado!!!");
        document.getElementById("validaimagem").src = "imagens/aprovado.jpg"; 
        document.getElementById('resultado').style.color = 'blue';
        document.getElementById('txtmedia').style.color = 'blue';
    
    } else if (resultadoMediaPonderada > 3 && resultadoMediaPonderada < 6) {
        document.getElementById("resultado").setAttribute("value",resultadoMediaPonderada);
        document.getElementById("txtmedia").setAttribute("value", "hmmmm... você está em recuperação");
        document.getElementById("txtchances").setAttribute("value", "SOLUÇÃO: Seu objetivo na N2-Sub é obter: " + situacaoDoAluno);
        document.getElementById("validaimagem").src = "imagens/recuperacao.jpg";
        document.getElementById('resultado').style.color = 'yellow';
        document.getElementById('txtmedia').style.color = 'yellow';
    } else {
        document.getElementById("resultado").setAttribute("value",resultadoMediaPonderada);
        document.getElementById("txtmedia").setAttribute("value", "Lamento! Mas você está reprovado!");
        document.getElementById("validaimagem").src = "imagens/reprovado.jpg"; 
        document.getElementById('resultado').style.color = 'red';
        document.getElementById('txtmedia').style.color = 'red';
    }
}
