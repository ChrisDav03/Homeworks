class Stack {
    constructor() {
      this.stack = [];
    }
    
    push(element) {
      this.stack.push(element);
      return this.stack;
    }
    
    pop() {
      return this.stack.pop();
    }
    
    peek() {
      return this.stack[this.stack.length - 1];
    }
    
    size() {
      return this.stack.length;
    }
  
    print() {
      console.log(this.stack);
    }
  }
  
   function bookIndex(name,isbn,author,editorial){
        this.name = name;
        this.isbn = isbn;
        this.author = author;
        this.editorial = editorial;

    }
        

  

  const stack = new Stack();
  console.log(stack.push(new bookIndex('El principito',1234,'Antoine de Saint-Exupéry','Historias Graficas')))
  console.log(stack.push(new bookIndex('El señor de los anillos ',12345,'Autor','Editorial 1')))

  console.log(stack.size()); 
    stack.print();
  