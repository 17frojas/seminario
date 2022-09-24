class Funcion{
	constructor(){

		this.emp = new Datos;
	}

	darDatos(){
		return this.emp;
	}

	modSalario(sal){
		this.emp.csalario(sal);
	}

	calcularEdad(ano1,mes1,dia1,ano2,mes2,dia2){
		this.emp.cedad(ano1,mes1,dia1,ano2,mes2,dia2);
	}

	calcularAntiguedad(ano3,mes3,dia3,ano2,mes2,dia2){
		this.emp.cantiguedad(ano3,mes3,dia3,ano2,mes2,dia2);
	}

	calcularPrestaciones(presS,presA){
		this.emp.cprestaciones(presS,presA);
	}

	
}

class Datos{
	constructor(nomre,apellido,sexo){
		this.nombre = nombre;
		this.apellido = apellido;
		this.sexo = sexo;
		this.nacimiento ;
		this.ingreso ;
		this.sala ;
		this.calculoEdad ;
		this.calculoAntiguedad ;
		this.calculoPrestaciones ;
		

	}

	darNombre(){
		return this.nombre;
	}

	darApellido(){
		return this.apellido;
	}

	darSexo(){
		return this.sexo;
	}

	darNacimiento(){
		return this.nacimiento;
	}

	darIngreso(){
		return this.ingreso;
	}

	darSalario(){
		return this.salario;
	}

	darCalculoEdad(){
		return this.calculoEdad;
	}

	darCalculoAntiguedad(){
		return this.calculoAntiguedad;
	}

	darCalculoPrestaciones(){
		return this.calculoPrestaciones;
	}

	

	csalario(sal){
		this.salario = sal;
	}

	cedad(ano1,mes1,dia1,ano2,mes2,dia2){
		let eda = ano2 - ano1;
		if (mes2 > mes1) {
			eda--;
	        this.calculoEdad = eda+1;
	    } else if (mes2 < mes1) {
	        	eda--;
	            this.calculoEdad = eda;
	        }else if(mes2 == mes1){
	        		if (dia2 < dia1) {
	        			eda--;
	            		this.calculoEdad = eda;
	    			} else{
	    				eda--;
	            		this.calculoEdad = eda+1;
	    			}
	    	}
	}

	cantiguedad(ano3,mes3,dia3,ano2,mes2,dia2){
		let anti = ano2 - ano3;
		if (mes2 > mes3) {
			anti--;
	        this.calculoAntiguedad = anti+1;
	    } else if (mes2 < mes3) {
	        	anti--;
	            this.calculoAntiguedad = anti;
	        }else if(mes2 == mes3){
	        		if (dia2 < dia3) {
	        			anti--;
	            		this.calculoAntiguedad = anti;
	    			} else{
	    				anti--;
	            		this.calculoAntiguedad = anti+1;
	    			}
	    	}
	}

	cprestaciones(presS,presA){
		this.calculoPrestaciones = (presS*presA)/12;
	
	
	}
}

let cal = new Funcion();

function salarioM(){
	let sala = document.getElementById('salario').value;
	cal.modSalario(parseInt(sala));
	const s = cal.darDatos().darSalario();
	alert('Nuevo salario $'+sala);
}

function calEdad(){
	let fechaNacimiento = document.getElementById("nacimiento").value;
    const anoNacimiento = parseInt(String(fechaNacimiento).substring(0, 4));
    const mesNacimiento = parseInt(String(fechaNacimiento).substring(5, 7));
    const diaNacimiento = parseInt(String(fechaNacimiento).substring(8, 10));

    const fechaActual = new Date();
    const anoActual = parseInt(fechaActual.getFullYear());
    const mesActual = parseInt(fechaActual.getMonth()) + 1;
    const diaActual = parseInt(fechaActual.getDate());

    cal.calcularEdad(anoNacimiento, mesNacimiento, diaNacimiento, anoActual, mesActual, diaActual);
    let e = cal.darDatos().darCalculoEdad();
    document.getElementById('cal_edad').value = e;   
}

function calAntiguedad(){
	let fechaIngreso = document.getElementById("ingreso").value;
    const anoIngreso = parseInt(String(fechaIngreso).substring(0, 4));
    const mesIngreso = parseInt(String(fechaIngreso).substring(5, 7));
    const diaIngreso = parseInt(String(fechaIngreso).substring(8, 10));

    const fechaActual = new Date();
    const anoActual = parseInt(fechaActual.getFullYear());
    const mesActual = parseInt(fechaActual.getMonth()) + 1;
    const diaActual = parseInt(fechaActual.getDate());

    cal.calcularAntiguedad(anoIngreso, mesIngreso, diaIngreso, anoActual, mesActual, diaActual);
    let a = cal.darDatos().darCalculoAntiguedad();
    document.getElementById('cal_anti').value = a;
}

function calPrestaciones(){
	let psal = document.getElementById("salario").value;
	let pant = document.getElementById("cal_anti").value;
	cal.calcularPrestaciones(psal, pant);
	const p = cal.darDatos().darCalculoPrestaciones();
	document.getElementById('cal_pres').value = p;
}








