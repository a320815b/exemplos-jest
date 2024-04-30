// describe (media , ()=> {

//     test (caso 1, () =>

//     let n1;
//     let n2;
//     let n3;
//     let n4;

//     let resultado = stausdoestudante(n1,n2,n3,n4 );
//     expect(resultado) .tobe("Aprovado")
// });

import {mediaPonderada} from "../logica/media.js"
describe('Media Aritimetica', () => {
    test('caso de teste 1 seja (n1*p1 + n2*p2 +n3*p3 + n4*p4) / 10', () => {
        // preparaçao 
        var n1= 8;
        var n2= 10;
        var n3= 5;
        var n4= 5;
        var p1 = 8;
        var p2 = 8;
        var p3 = 8;
        var p4 = 8;

        var resultado= mediaPonderada(n1, n2, n3, n4, p1, p2, p3, p4)

        expect(resultado).toBe("Reprovado")
    });
});
    test('caso de teste 2 seja 8,9,5,5 ', () => {
        // preparaçao 
        var n1= 8;
        var n2= 9;
        var n3= 5;
        var n4= 5;

        var resultado= calcularMedia(n1, n2, n3, n4)

        expect(resultado).toBe("Reprovado")
    });
    test('caso de teste 3 seja 8.5,8,7,6.5 ', () => {
        var n1= 8.5;
        var n2= 8;
        var n3= 7.5;
        var n4= 6.5;

        var resultado= calcularMedia(n1, n2, n3, n4)

        expect(resultado).toBe("Aprovado")
    });

    test("caso de teste 4 seja '7','8','9','10 ", () => {

        var n1= '7';
        var n2= '8';
        var n3= '9';
        var n4= '10';

        var resultado= calcularMedia(n1, n2, n3, n4)

        expect(resultado).toBe("Aprovado")
});