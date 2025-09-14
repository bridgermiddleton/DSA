//Node stores a piece of data - val
//reference to next node - next

//Big O
    //Insertion O(1)
    //Removal (depends... O(1) or O(N))
    //Searching - O(N)
    //Access - O(N)

//Recap
    //SLL are an excellent alternative to arrays when insertion and deletion at the beginning are
    //frequently required
    //Arrays contain a built in index whereas LL do not
    //The idea of a list data structure that consists of nodes is the foundation
    //for other data structures like Stacks and Queues


class Node {

    //Instantiate the node
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList{

    //Instantiate the list
    constructor(){
        this.length = 0;
        this.head = null;
        this.tail = null;
    }
//Add a node
    push(val) {
       var newNode = new Node(val);

       if (!this.head) {

            this.head = newNode;
            this.tail = newNode;
       }
       else {
        this.tail.next = newNode;
        this.tail = newNode;
       }
       this.length += 1;
       return this;
    }

    // traverse() {
    //     var current = this.head;
    //     while (current) {
    //         console.log(current.val);
    //         current = current.next;
    //     }
    // }

    //Remove last node
    pop() {
        if (!this.head) {
            return undefined;
        }
        var current = this.head;
        var newTail = current;

        while(current.next) {
            newTail = current;
            current = current.next;
        }
        // console.log(current.val);
        // console.log(newTail.val);
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return current;
    }
//Remove first node
    shift(){
        if (!this.head) return undefined;

        var currentHead = this.head;

        this.head = currentHead.next;

        this.length--;

        if (this.length === 0) {
            this.tail = null;
        }

        return currentHead;

    }

    //Add node to the front
    unshift(val) {
        var newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode
        }
        else {

            newNode.next = this.head;
            this.head = newNode;
        }

        this.length++;

        return this;

    }

    get(index) {
        if(index < 0 || index >= this.length) return null;

        var counter = 0;
        var current = this.head;

        while (counter !== index) {
            current = current.next;
            counter++;

        }
        return current;
    }
    set(index, val) {
        var foundNode = this.get(index);

        if (foundNode) {
            foundNode.val = val;
            return true;
        }
        return false;
    }


    //Insert at a new node at specified index
    insert(index, val) {
        if (index < 0 || index > this.length) return false;

        if (index === this.length) {
            return !!this.push(val);
        }
        if (index === 0) {
            return !!this.unshift(val);
        }
        var newNode = new Node(val);
        var prev = this.get(index - 1);
        var temp = prev.next
        prev.next = newNode;
        newNode.next = temp;
        this.length++;
        return true;
        

    }

    //Remove a node at a specific position

    remove(index) {
        if (index < 0 || index >= this.length) return undefined;

        if (index === this.length - 1) {
            return this.pop();
        }

        if (index === 0) {
            return this.shift();
        }
        var previousNode = this.get(index - 1);

        var removed = previousNode.next;

        previousNode.next = removed.next;

        this.length--;

        return removed;
    }

    print() {
        var arr = [];
        var current = this.head;
        while (current) {
            arr.push(current.val);
            current = current.next
        }
        console.log(arr);
    }

    //Reverse the linked list in place

    reverse() {

        var node = this.head;
        this.head = this.tail;
        this.tail = node;
        var next;
        var prev = null;

        for (var i = 0; i < this.length; i++) {
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }
        return this;
            
    }






}

// var first = new Node("Hi!");
// first.next = new Node("Hi there");
// first.next.next = new Node("how are you");


var list = new SinglyLinkedList();
list.push("HI");
console.log(list);
list.push("Hello!");
console.log(list);

console.log("shift() method:", list.shift());