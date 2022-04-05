class Queue<T> {
    list: T[] = [];
    get length(): number{
        return this.list.length;
    }

    enqueue(item: T){
        this.list.push(item);
    }

    dequeue(): T | undefined {
        return this.list.shift();
    }
}

const queue: Queue<number>  = new Queue<number>();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());


