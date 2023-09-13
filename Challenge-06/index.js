
class Persona {
    constructor(nombreCompleto, fechaNacimiento) {
      this.nombreCompleto = nombreCompleto;
      this.fechaNacimiento = fechaNacimiento;
      this.hijos = [];
    }
  
    
    agregarHijo(hijo) {
      this.hijos.push(hijo);
    }
  
    
    preOrden() {
      console.log(this.nombreCompleto);
      for (const hijo of this.hijos) {
        hijo.preOrden();
      }
    }
  
    
    enOrden() {
      if (this.hijos.length > 0) {
        this.hijos[0].enOrden();
      }
      console.log(this.nombreCompleto);
      for (let i = 1; i < this.hijos.length; i++) {
        this.hijos[i].enOrden();
      }
    }
  
    
    posOrden() {
      for (const hijo of this.hijos) {
        hijo.posOrden();
      }
      console.log(this.nombreCompleto);
    }
  }
  
 
  const tu = new Persona("Christian", "Marzo");
  const mama = new Persona("Adriana", "Febrero");
  const papa = new Persona("Alexander", "Febrero");
  const abuela = new Persona("Natividad", "Diciembre");
  const abuelo = new Persona("Luis", "Febrero");
  
  
  tu.agregarHijo(mama);
  tu.agregarHijo(papa);
  mama.agregarHijo(abuela);
  mama.agregarHijo(abuelo);
  

  console.log("Recorrido en preorden:");
  tu.preOrden();
  
  console.log("\nRecorrido en orden:");
  tu.enOrden();
  
  console.log("\nRecorrido en posorden:");
  tu.posOrden();
  