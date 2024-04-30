describe("soma()", () => {
    describe("A soma da dois numeros devera resultar em um inteiros.", () => {
        test("soma de 2 e 2 ser 4", () => {
            expect(soma(2, 2)).toBe(4);
        });
        test("soma de 2 e 2 ser 12", () => {
            expect(soma(10, 2)).toBe(12);
        });
        test("soma de 0 e 0 ser 0", () => {
            expect(soma(0, 0)).toBe(0);
        });
    });
});
describe('soma de dois numeros literal deveras retornar um inteiros.', () => {
    describe('A soma de "2" e 2 devera ser 4', () => {
        test('soma de 2 e 2 ser 4', () => {
            expect(soma(2, 2)).toBe(4);
        });
        test('soma de duas strings deveras gera uma mensagem de erro', () => {
            expect (() => soma('de strings devera ser erro',)).toThow(Error);
        });
        test("soma de 0 e 0 ser 0", () => {
            expect(soma(0, 0)).toBe(0);
        });
    });
});
function soma(a, b) {
    let x = Number(a);
    let y = Number(b);
    if (isNaN(x) || isNaN(y)) throw Error("erro");
    return x + y;
}
