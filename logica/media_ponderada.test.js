
import {calcularMedia,verificaPresenca,verificaSituacao  } from "media_ponderada.js";

describe('Media verificaSituacao', () => {
    test.only('caso de teste 01 seja 8,10,5,5 ', () => {
    
        var notas= [8, 8, 8, 8]

        var resultado= verificaSituacao(...notas)

        expect(resultado).toBe("Aprovado")
    });
    test('caso de teste 02 seja 8,9,5,5 ', () => {
        // preparaçao 
        var n1= 6;
        var n2= 9;
        var n3= 5;
        var n4= 5;
        var p1=1,p2=2,p3=3,p4=4;
        var resultado= verificaSituacao(n1,n2,n3,n4,p1,p2,p3,p4)

        expect(resultado).toBe("Reprovado")
    });
    test('caso de teste 03 seja 8.5,8,7,6.5 ', () => {
        var n1= 8.5;
        var n2= 8;
        var n3= 7;
        var n4= 6.5;

        var resultado= verificaSituacao(n1,n2,n3,n4)
        expect(resultado).toBe("Aprovado")
    });

    test("caso de teste 04 seja '7','8','9','10 ", () => {

        var n1= '7';
        var n2= '8';
        var n3= '9';
        var n4= '10';

        var resultado= verificaSituacao(n1, n2, n3, n4)

        expect(resultado).toBe("Aprovado")
    });

    test('caso de teste 05 seja ', () => {

        var n1= '1';
        var n2= '1';
        var n3= '1';
        var n4= '10';

        var media= calcularMedia(n1, n2, n3, n4);

        expect(media).toBe("3.25")
    });
    test('caso de teste 05 seja ', () => {

        var n1= '1';
        var n2= '1';
        var n3= '1';
        var n4= '10';

        var resultado= verificaSituacao(n1, n2, n3, n4);

        expect(resultado).toBe("Reprovado")
    });
    test('caso de teste 07 seja ', () => {

        var n1= '1';
        var n2= '1';
        var n3= '1';
        var n4= '10';

        var resultado= verificaSituacao(n1, n2, n3, n4);

        expect(resultado).toBe("Reprovado")
    });
    
});


describe ("Presenca", ()=> {
    test('caso de test 01 de presenca' ,()=>{
        var n1= 1;
        var n2= 1;
        var n3= 1;
        var n4= 10;
        var presenca = 0.65
        var res = verificaPresenca(n1,n2,n3,n4,presenca)
        expect(res).toBe("Reprovado")
    })
});

describe ("Presenca", ()=> {
    test('caso de test 02 de presenca' ,()=>{
        var n1= 8.5;
        var n2= 8;
        var n3= 7;
        var n4= 6.5;
        var presenca = 0.88
        var res = verificaPresenca(n1,n2,n3,n4,presenca)
        expect(res).toBe("Aprovado")
    })   
})

describe ("Presenca", ()=> {
    test('caso de test 03 de presenca' ,()=>{
        var n1= 7;
        var n2= 8;
        var n3= 9;
        var n4= 10;
        var presenca = 0.75
        var res = verificaPresenca(n1,n2,n3,n4,presenca)
        expect(res).toBe("Aprovado")
    })   
})
describe ("Presenca", ()=> {
    test('caso de test 04 de presenca' ,()=>{
        var n1= 7;
        var n2= 8;
        var n3= 9;
        var n4= 10;
        var presenca = 0.75
        var res = verificaPresenca(n1,n2,n3,n4,presenca)
        expect(res).toBe("Aprovado")
    })   
})

