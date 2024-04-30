test('Subtração', () => {
    let a = 50
    let b = 20
    let resultado = sub(a,b)
    expect(resultado).toBe(30)
});
function sub(a,b) {
    return a-b
}