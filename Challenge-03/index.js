// Define una clase para representar a una persona en la cola
class Persona {
    constructor(nombre, horaLlegada) {
      this.nombre = nombre;
      this.horaLlegada = horaLlegada;
    }
  }
  
  const colaATM = [];
 
  colaATM.push(new Persona("Juan", new Date()));
  colaATM.push(new Persona("Ana", new Date()));
  colaATM.push(new Persona("Carlos", new Date()));
  

  setTimeout(() => {
    colaATM.push(new Persona("Eva", new Date()));
  }, 2000);
  
  setTimeout(() => {
    colaATM.push(new Persona("Miguel", new Date()));
  }, 3000);
  
  
  function atenderSiguientePersona() {
    if (colaATM.length === 0) {
      console.log("No hay nadie en la cola.");
    } else {
      const siguientePersona = colaATM.shift();
      console.log(`Atendiendo a ${siguientePersona.nombre} (Hora de llegada: ${siguientePersona.horaLlegada})`);
    }
  }
  
 
  setInterval(atenderSiguientePersona, 1500);
  