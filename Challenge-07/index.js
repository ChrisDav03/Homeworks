class Persona {
    constructor(nombre, edad, ciudad) {
      this.nombre = nombre;
      this.edad = edad;
      this.ciudad = ciudad;
    }
  }
  
  class Ciudad {
    constructor(nombre) {
      this.nombre = nombre;
      this.residentes = [];
    }
  
    agregarResidente(persona) {
      this.residentes.push(persona);
    }
  }
  
  class Grafo {
    constructor() {
      this.personas = new Set();
      this.ciudades = new Set();
    }
  
    agregarPersona(persona) {
      this.personas.add(persona);
    }
  
    agregarCiudad(ciudad) {
      this.ciudades.add(ciudad);
    }
  
    imprimirResidentes(nombreCiudad) {
      const ciudad = [...this.ciudades].find((c) => c.nombre === nombreCiudad);
      if (!ciudad) {
        console.log(`No se encontró una ciudad llamada ${nombreCiudad}.`);
        return;
      }
  
      console.log(`Personas que viven en ${nombreCiudad}:`);
      for (const persona of ciudad.residentes) {
        console.log(`Nombre: ${persona.nombre}, Edad: ${persona.edad}`);
      }
    }
  }
  
  
  const persona1 = new Persona("Alice", 25, "Nueva York");
  const persona2 = new Persona("Bob", 30, "Los Ángeles");
  const persona3 = new Persona("Charlie", 28, "Nueva York");
  
  
  const ciudad1 = new Ciudad("Nueva York");
  const ciudad2 = new Ciudad("Los Ángeles");
  

  ciudad1.agregarResidente(persona1);
  ciudad1.agregarResidente(persona3);
  ciudad2.agregarResidente(persona2);
  
 
  const grafo = new Grafo();
  grafo.agregarPersona(persona1);
  grafo.agregarPersona(persona2);
  grafo.agregarPersona(persona3);
  grafo.agregarCiudad(ciudad1);
  grafo.agregarCiudad(ciudad2);
  
 
  grafo.imprimirResidentes("Nueva York");
  