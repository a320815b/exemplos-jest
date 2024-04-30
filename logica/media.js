var n1= 5
var n2=5.5
var n3=4.5
var n4=10
var media = calcularMedia(n1, n2, n3, n4)



function calcularMedia (n1, n2, n3, n4) {
    var media = (n1+n2+n3+n4) /4
    return media;
}


function verificarAprovacao(media) {
    if (media >= 7.0) {
        console.log("Voce foi aprovado com media:", media)
    } else {
        console.log("Voce foi reprovado com media:", media)
    }
} 
verificarAprovacao(media)
