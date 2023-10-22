const Retangulo = require("../retangulo");

test("Dimensão será verdadeira caso valores de largura e altura sejam maiores que 0", () => {
  const retanguloObj = Object.create(Retangulo)

  let largura = 5
  let altura = 6
  const resultado = retanguloObj.definirDimensoes(largura, altura)

  expect(resultado).toBe(true)
})


test("Area estará correta caso a soma dos valores de largura e altura seja 11", () => {
  const retanguloObj = Object.create(Retangulo)

  retanguloObj.definirDimensoes(5, 6)

  const area = retanguloObj.calcularArea()

  expect(area).toBe(11)
})


test("Perimetro estará correto caso a soma da altura e largura multiplicada por dois seja 22", () => {
  const retanguloObj = Object.create(Retangulo)

  retanguloObj.definirDimensoes(5, 6)

  const perimetro = retanguloObj.calcularPerimetro()
  
  expect(perimetro).toBe(22)
})

