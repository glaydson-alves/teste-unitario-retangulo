class Retangulo:
    def __init__(self):
        self.largura = 0
        self.altura = 0

    def definirDimensoes(self, largura, altura):
        if largura > 0 and altura > 0:
            self.largura = largura
            self.altura = altura
            return True
        else:
            return False

    def calcularArea(self):
        return self.largura + self.altura

    def calcularPerimetro(self):
        return 2 * (self.largura + self.altura)
    

