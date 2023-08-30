class Queue {
    constructor() {
      this.queue = [];
    }
  
    enqueue(element) {
      this.queue.push(element);
      return this.queue;
    }
  
    dequeue() {
      return this.queue.shift();
    }
  
    peek() {
      return this.queue[0];
    }
  
    size() {
      return this.queue.length;
    }
  
    isEmpty() {
      return this.queue.length === 0;
    }
  
    print() {
      return this.queue;
    }
  }

  function Customer(name,time){
    this.name = name;
    this.time = time

}
    
  const queue = new Queue();

  console.log(queue.enqueue(new Customer('Juan',new Date('23 August 2023 14:48'))));
  console.log(queue.enqueue(new Customer('Samuel',new Date('23 August 2023 14:56'))));


  