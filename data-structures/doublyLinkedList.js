//Doubly Linked List
    //Same as Singly Linked List, however now there's a previous node pointer
    //Takes up more memory
        //More memory === more flexibility, a very common tradeoff in CS

 
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        
        var newNode = new Node(val);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            var oldTail = this.tail;

            oldTail.next = newNode;
            newNode.prev = oldTail;
            this.tail = newNode;

        }

        this.length++;
        return this;
    }

    pop() {

        if (!this.head) return undefined;

        var removed = this.tail;

        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        }
        else {
            this.tail = removed.prev;
            this.tail.next = null;
            removed.prev = null;
        }
        this.length--;
        return removed.val;

    }

    shift() {
        if (!this.head) {
            return undefined;
        }
        var oldHead = this.head;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = oldHead.next;
            this.head.prev = null;
            oldHead.next = null;
        }

        this.length--;
        return oldHead;
        
    }
}


var myList = new DoublyLinkedList();

myList.push(2);
myList.push(5);
console.log(myList.push(7));
console.log(myList.pop());
console.log(myList.length);