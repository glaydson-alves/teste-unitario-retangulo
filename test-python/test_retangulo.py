from retangulo import Retangulo

def test_definir_dimensoes_validas():
    retangulo = Retangulo()
    assert retangulo.definirDimensoes(5, 10) is True
    assert retangulo.largura == 5
    assert retangulo.altura == 10

def test_nao_definir_dimensoes_invalidas():
    retangulo = Retangulo()
    assert retangulo.definirDimensoes(0, 10) is False
    assert retangulo.definirDimensoes(5, 0) is False
    assert retangulo.largura == 0
    assert retangulo.altura == 0

def test_calcular_area():
    retangulo = Retangulo()
    retangulo.definirDimensoes(5, 10)
    assert retangulo.calcularArea() == 15

def test_calcular_perimetro():
    retangulo = Retangulo()
    retangulo.definirDimensoes(5, 10)
    assert retangulo.calcularPerimetro() == 30