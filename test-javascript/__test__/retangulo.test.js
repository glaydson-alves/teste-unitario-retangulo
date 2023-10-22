const Retangulo = require("../retangulo");

test("Dimensão será verdadeira caso valores de largura e altura sejam maiores que 0", () => {
  const retanguloObj = Object.create(Retangulo)

  let largura = 5
  let altura = 6
  const dimensao = retanguloObj.dimensoes(largura, altura)

  expect(dimensao).toBe(true)
})


test("Area estará correta caso a soma dos valores de largura e altura seja 11", () => {
  const retanguloObj = Object.create(Retangulo)

  retanguloObj.dimensoes(5, 6)

  const area = retanguloObj.area()

  expect(area).toBe(11)
})


test("Perimetro estará correto caso a soma da altura e largura multiplicada por dois seja 22", () => {
  const retanguloObj = Object.create(Retangulo)

  retanguloObj.dimensoes(5, 6)

  const perimetro = retanguloObj.perimetro()
  
  expect(perimetro).toBe(22)
})

