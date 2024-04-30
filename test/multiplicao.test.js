test('multiplicacao', () => {
    let a = 5
    let b = 9
    let resultado = multiplicacao(a,b)
    expect(resultado).toBe(45)

});

function multiplicacao(a,b){
    return a*b
}