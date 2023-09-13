// Define una clase para las tareas (TODO)
class Tarea {
    constructor(titulo, descripcion, siguienteTarea = null) {
      this.titulo = titulo;
      this.descripcion = descripcion;
      this.siguienteTarea = siguienteTarea;
    }
  
   
    mostrar() {
      console.log(`Título: ${this.titulo}`);
      console.log(`Descripción: ${this.descripcion}`);
      if (this.siguienteTarea) {
        console.log(`Siguiente Tarea: ${this.siguienteTarea.titulo}`);
      } else {
        console.log("No hay siguiente tarea");
      }
      console.log("-------------------------");
    }
  }
  
  
  const tarea1 = new Tarea("Tarea 1", "Tarea 1");
  const tarea2 = new Tarea("Tarea 2", "Tarea 2");
  const tarea3 = new Tarea("Tarea 3", "Tarea 3");
  

  tarea1.siguienteTarea = tarea2;
  tarea2.siguienteTarea = tarea3;
  
  function imprimirTodasLasTareas(tarea) {
    while (tarea !== null) {
      tarea.mostrar();
      tarea = tarea.siguienteTarea;
    }
  }
  

  imprimirTodasLasTareas(tarea1);
  