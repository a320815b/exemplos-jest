test('Divisao', () => {
    let a = 9 
    let b = 3
    let resultado = divisao(a,b)
    expect(resultado).toBe(3) 
});
function divisao(a,b){
    return a/b 
}
