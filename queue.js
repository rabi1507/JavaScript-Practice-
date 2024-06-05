class Queue{
    constructor(){
        this.items = []
    }
    enqueue(element){
        return this.items.push(element)
    }
    dequeue(){
        return this.items.shift()
    }
    isEmpty(){
        return this.items.length ===0
    }
    peek(){
        if(!this.isEmpty()){
            return this.items[0]
        }
        return null
    }
    size(){
        return this.items.length
    }
    print(){
        console.log(this.items.toString());
    }
}

const queue = new Queue();
// queue.enqueue(100);
// queue.enqueue(5);
// queue.enqueue(10)
// queue.print()
// queue.dequeue()
// queue.print()
// console.log(queue.size() );

let myArray=[1,[2,4],3];
 Object.freeze(myArray);
myArray[0]=123;
console.log(myArray);
myArray[1][1]=321;
// console.log(myArray);

class Queue {
    constructor(){
        this.items = {}
        this.rear = 0
        this.front = 0
    }
    enqueue(element){
       this.items[this.rear] = element
       this.rear++
    }
    dequeue(){
        const item = this.items[this.front]
        delete this.items[this.front]
    }
    
}