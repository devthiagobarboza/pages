function calcularMediaPonderada(){
    var n1 = parseFloat(document.getElementById("n1").value);
    var n2 = parseFloat(document.getElementById("n2").value);
    var resultadoMediaPonderada = parseFloat((n1 * 0.4) + (n2 * 0.6));
    var situacaoDoAluno = n2 + resultadoMediaPonderada
    if (resultadoMediaPonderada >= 6.0){ 
        document.getElementById("resultado").setAttribute("value",resultadoMediaPonderada);
        document.getElementById("txtmedia").setAttribute("value", "Parabéns!! Você foi aprovado!!!")
    } else if (resultadoMediaPonderada > 3 && resultadoMediaPonderada < 6) {
        document.getElementById("resultado").setAttribute("value",resultadoMediaPonderada);
        document.getElementById("txtmedia").setAttribute("value", "hmmmm... você está em recuperação")
        document.getElementById("txtchances").setAttribute("value", "Seu objetivo na N2-Sub é obter: " + (n2 + resultadoMediaPonderada))
    } else {
        document.getElementById("resultado").setAttribute("value",resultadoMediaPonderada);
        document.getElementById("txtmedia").setAttribute("value", "Lamento! Mas você está reprovado!")
    }
}
