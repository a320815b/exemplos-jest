export function calcularMedia(n1, n2, n3, n4, p1=1, p2=1, p3=1, p4=1) {
    var media = (n1*p1+n2*p2+n3*p3+n4*p4) /(p1+p2+p3+p4);
    return media;
}
export function verificaPresenca(media,presenca = 0.75) {
    var media = media(n1,n2,n3,n4,p1,p2,p3,p4);
    return media >=7 && presenca >= 0.75 ? "Aprovado" : "Reprovado"
    }
export function verificaSituacao(n1,n2,n3,n4,p1,p2,p3,p4) {
        var media = calcularMedia(n1, n2, n3, n4, p1=1, p2=1, p3=1, p4=1);
        var res = verificaPresenca(media,presenca)
        return res
        }