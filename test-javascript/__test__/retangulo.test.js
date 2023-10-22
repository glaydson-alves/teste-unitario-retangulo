const Retangulo = require("../retangulo");

test("Dimensão será verdadeira caso valores de largura e altura forem maiores que 0", () => {
  const retanguloObj = Object.create(Retangulo)

  let largura = 5
  let altura = 6
  const resultado = retanguloObj.definirDimensoes(largura, altura)

  expect(resultado).toBe(true)
  expect(retanguloObj.largura).toBe(largura)
  expect(retanguloObj.altura).toBe(altura)
})
