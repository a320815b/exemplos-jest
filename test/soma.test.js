
describe('soma()',()=> {
    describe('A soma da dois numeros devera resultar em um inteiros.',()=>{
        test('soma de 2 e 2 ser 4', () => {
            expect(soma(2,2)).toBe(4)  
        }); 
        test('soma de 2 e 2 ser 12', () => {
            expect(soma(10,2)).toBe(12)  
        }); 
        test('soma de 0 e 0 ser 0', () => {
            expect(soma(0,0)).toBe(0)  
        }); 
    })

    describe('A soma da dois numeros devera resultar em um inteiros.',()=>{
        test('soma de "2" e 2 ser 4', () => {
            expect(soma('2',2)).toBe(4)  
        }); 
        test('soma de 0 e "2" ser 12', () => {
            expect(soma(0,"2")).toBe(12)  
        }); 
        test('soma de "abc" e "b" ser "ERRO:um ou mais paramentros comparanetros', () => {
            expect(soma("abc","b")).toBe("ERRO:um ou mais paramentros comparanetros")  
        }); 
    })
})
    describe('A de strings devera ser gera uma mensagem de erro.',()=>{
        test('soma de strings devera ser um erro', () => {
            expect(soma('abc',2)).toThrow(Error)  
        }); 
        test('soma de strings deveras ser gera uma mensagem de erro', () => {
            expect(soma("2")).toBe(12)  
        }); 
        test('soma de "abc" e "b" ser "ERRO:um ou mais paramentros comparanetros', () => {
            expect(soma("abc","b")).toBe("ERRO:um ou mais paramentros comparanetros")  
        }); 
    })


function soma(a,b){
let x = Number(a);
let y = Number(b);
if(isNaN(x) || isNaN (y))
throw Error("erro");
    return x + y;
}