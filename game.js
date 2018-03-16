var app = new Vue({
  el: '#app',
  data: {
    ptsVidaJogador: 100,
    ptsVidaOponente: 100,
    vidaAtualJogador: 0,
    vidaAtualOponente: 0,
    numAtaqueJogador: 0,
    numAleatorioCurar: 0,
    numAtaqueOponente: 0,
    salvarJogo: [],
},

methods:{
  ataque: function () {
        this.vidaAtualJogador = this.ptsVidaJogador;
        this.vidaAtualOponente = this.ptsVidaOponente;
    if (this.ptsVidaOponente > 0 && this.ptsVidaJogador > 0) {
        this.numAtaqueJogador = Math.floor(Math.random() * 9 + 2);
        this.numAtaqueOponente = Math.floor(Math.random() * 8 + 1);
        this.ptsVidaJogador = this.ptsVidaJogador - this.numAtaqueOponente;
        this.ptsVidaOponente = this.ptsVidaOponente - this.numAtaqueJogador;
        if (this.ptsVidaOponente > 0 && this.ptsVidaJogador > 0) {
            this.salvarJogo = (this.vidaAtualJogador + this.vidaAtualOponente);
    }
  }
},

  recuperar: function() {
    if (this.ptsVidaJogador + this.numAleatorioCurar < 100) {
        this.numAtaqueOponente = Math.floor(Math.random() * 8) + 1;
        this.numAleatorioCurar = Math.floor(Math.random() * 5) + 3;
        this.ptsVidaJogador = this.ptsVidaJogador + this.numAleatorioCurar;
        this.ptsVidaJogador = this.ptsVidaJogador - this.numAtaqueOponente;
        this.salvarJogo  = (this.ptsVidaJogador + this.numptsVidaOponente);
        if (this.ptsVidaOponente > 0 && this.ptsVidaJogador > 0) {
            this.salvarJogo = this.numAtaqueJogador + this.numAtaqueOponente;
    }
  }
},

  reiniciar: function(){
        this.numAtaqueJogador = 0;
        this.numAleatorioCurar = 0;
        this.numAtaqueOponente = 0;
        this.ptsVidaJogador = 100;
        this.ptsVidaOponente = 100;
   },
  }
});
