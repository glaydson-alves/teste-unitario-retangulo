
const Retangulo = {
  largura: 0,
  altura: 0,

  dimensoes: function(largura, altura) {
    
    if (largura > 0 && altura > 0) {
      this.largura = largura
      this.altura = altura
      return true
    } else {
      return false
    }
  },

  area: function() {
    return this.largura + this.altura
  },

  perimetro: function() {
    return 2 * (this.largura + this.altura)
  }
}
  

module.exports = Retangulo
  