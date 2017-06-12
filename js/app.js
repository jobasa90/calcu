var Calculadora = {

	pantalla: document.getElementById("display").innerHTML,
	decimal: 0,
	signo: 0,
	control: 8,
	stop: 0,
	num1: 0,
	opcion: 0,
	anum: 0,
	estado: 0,
	resultado: 0,

  inicio: (
		function(){
			this.EventosClick();
		}
	),
	animacion:function(tecla){
		document.getElementById(tecla).style.transform="scale(0.7)";
		setTimeout(function() {document.getElementById(tecla).style.transform="scale(1)";}, 200);
	},
	 mas: function(){
		  this.animacion("mas");
			this.num1 += Number(this.pantalla),
			this.pantalla = "",
			this.opcion = 1,
			this.estado = 0,
			this.signo = 0,
			this.anum = 0,
			this.estado = 0,
			this.decimal = 0,
			this.viewdisplay();
	},
		menos:function(){
		  this.animacion("menos");
			this.num1 = Number(this.pantalla);
			this.pantalla = "",
			this.opcion = 2,
			this.estado = 0,
			this.signo = 0,
			this.anum = 0,
			this.estado = 0,
			this.decimal = 0,
			this.viewdisplay();
	},
		por: function(){
		  this.animacion("por");
			this.num1 = Number(this.pantalla),
			this.pantalla = "",
			this.opcion = 3,
			this.estado = 0,
			this.signo = 0,
			this.anum = 0,
			this.estado = 0,
			this.decimal = 0,
			this.viewdisplay();
	},
		dividido: function(){
		  this.animacion("dividido");
			this.num1 = Number(this.pantalla),
			this.pantalla = "",
			this.opcion = 4,
			this.estado = 0,
			this.signo = 0,
			this.anum = 0,
			this.estado = 0,
			this.decimal = 0,
			this.viewdisplay();
	},
	  igual: function(){
		this.animacion("igual");
		switch(this.opcion){
			case 1:
					if(this.estado == 0){
						this.anum = Number(this.pantalla),
						this.pantalla = this.num1 + Number(this.pantalla),
						this.estado = 1,
						this.num1 = 0;
					}else{
						this.pantalla = Number(this.pantalla)+this.anum;
					}
				break;
			case 2:
					if(this.estado == 0){
						this.anum = Number(this.pantalla),
						this.pantalla = this.num1 - Number(this.pantalla),
						this.estado = 1,
						this.num1 = 0;
					}else{
						this.pantalla = Number(this.pantalla)-this.anum;
					}
				break;
			case 3:
					if(this.estado == 0){
						this.anum = Number(this.pantalla),
						this.pantalla = this.num1 * Number(this.pantalla),
						this.estado = 1,
						this.num1 = 0;
					}else{
						this.pantalla = Number(this.pantalla)*this.anum;
					}
				break;
			case 4:
					if(this.estado == 0){
						this.anum = Number(this.pantalla),
						this.pantalla = this.num1 / Number(this.pantalla),
						this.estado = 1,
						this.num1 = 0;
					}else{
						this.pantalla = Number(this.pantalla)/this.anum;
					}
				break;
			default:
				break;
		}
		this.viewdisplay();
	},
	EventosClick: function(){
		document.getElementById("0").addEventListener("click",function(){Calculadora.viewnum("0")});
		document.getElementById("1").addEventListener("click",function(){Calculadora.viewnum("1")});
		document.getElementById("2").addEventListener("click",function(){Calculadora.viewnum("2")});
		document.getElementById("3").addEventListener("click",function(){Calculadora.viewnum("3")});
		document.getElementById("4").addEventListener("click",function(){Calculadora.viewnum("4")});
		document.getElementById("5").addEventListener("click",function(){Calculadora.viewnum("5")});
		document.getElementById("6").addEventListener("click",function(){Calculadora.viewnum("6")});
		document.getElementById("7").addEventListener("click",function(){Calculadora.viewnum("7")});
		document.getElementById("8").addEventListener("click",function(){Calculadora.viewnum("8")});
		document.getElementById("9").addEventListener("click",function(){Calculadora.viewnum("9")});
		document.getElementById("on").addEventListener("click",function(){Calculadora.on("")});
		document.getElementById("sign").addEventListener("click",function(){Calculadora.sign()});
		document.getElementById("dividido").addEventListener("click",function(){Calculadora.dividido()});
		document.getElementById("menos").addEventListener("click",function(){Calculadora.menos()});
		document.getElementById("punto").addEventListener("click",function(){Calculadora.punto()});
		document.getElementById("igual").addEventListener("click",function(){Calculadora.igual()});
		document.getElementById("mas").addEventListener("click",function(){Calculadora.mas()});
		document.getElementById("por").addEventListener("click",function(){Calculadora.por()});
	},
	viewnum: function(valor){
		this.animacion(valor);
		if(this.signo == 1 && this.stop == 0){
			this.control += 1,
			this.stop = 1;
		}
		if(this.decimal == 1  && this.stop == 0){
			this.control += 1,
			this.stop = 1;
		}
		if(this.pantalla.length < this.control){
			if(this.pantalla != "0"){
				this.pantalla += valor;
			}else if(valor != 0){
				this.pantalla = "",
				this.pantalla += valor;
			}
			this.viewdisplay();
		}
	},
	sign: function(){
		this.animacion("sign");
		if(this.pantalla != 0){
			if(this.signo == 0){
				this.pantalla = "-" + this.pantalla,
				this.signo = 1;
			}else{
				this.pantalla = this.pantalla.slice(1);
				this.signo = 0;
			}
		}
		this.viewdisplay();
	},
	punto: function(){
		this.animacion("punto");
		if(this.decimal == 0){
			this.pantalla += ".";
		}
		this.decimal = 1,
		this.viewdisplay();
	},
	on: function(){
		this.animacion("on");
		this.pantalla = "0",
		this.decimal = 0,
		this.signo = 0,
		this.stop = 0,
		this.control = 8
		this.num1 = 0,
		this.estado = 0,
		this.anum = 0,
		this.opcion = 0,
		this.resultado = 0,
		this.viewdisplay();
	},
	viewdisplay: function(){
		if(this.pantalla.toString().length > this.control){
			this.pantalla = this.pantalla.toString().substring(0,8);
		}
		document.getElementById("display").innerHTML = this.pantalla;
	}
}
Calculadora.inicio();
