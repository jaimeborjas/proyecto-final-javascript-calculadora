// calculadora
var calculadora = {
  //propiedades
  pnValor1: 0,
  pnValor2: 0,
  pnResult: 0,
  pcOperac: "",
  plPunto: false,
  //funciones de operacion
  suma: function(){return this.pnValor1 + this.pnValor2},
  rest: function(){return this.pnValor1 - this.pnValor2},
  mult: function(){return this.pnValor1 * this.pnValor2},
  divi: function(){return this.pnValor1 / this.pnValor2},
  //funcion de asignación de valores
  asig: function (p_nValor){
    if (this.pnValor1 === 0) {
      this.pnValor1 = parseFloat(p_nValor);
     } else {
      this.pnValor2 = parseFloat(p_nValor);
    }
  },
    //cálculo
  calc : function() {
    if (this.pcOperac == "mas") {
      this.pnResult = this.suma();
    }else if (this.pcOperac == "menos") {
      this.pnResult = this.rest();
    }else if (this.pcOperac == "por") {
      this.pnResult = this.mult();
    }else if (this.pcOperac == "dividido") {
      this.pnResult = this.divi();
    }
    this.pnValor1 = 0;
    this.pnValor2 = 0;
  }
};

