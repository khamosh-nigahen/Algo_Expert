// Single linked list Implementation

class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

class SingleLinkedList {
    constructor(head) {
        this.head = head;
    }

    insertAtHead(node) {
        if (!this.head) {
            this.head = node;
        } else {
            node.next = this.head;
            this.head = node;
        }
    }

    insertAtTail(node) {
        if (this.head) {
            let temp = this.head;
            while (temp.next != null) {
                temp = temp.next;
            }
            temp.next = node;
            node.next = null;
        } else {
            this.head = node;
        }
    }

    insertAfterNode(node, position) {

    }

    traverseLinkedList() {
        let temp = this.head;
        while (temp) {
            process.stdout.write(`${temp.value} -> `);
            temp = temp.next;
        }
    }
}

const sll = new SingleLinkedList(null);
sll.insertAtHead(new Node(1));
sll.insertAtHead(new Node(2));
sll.insertAtHead(new Node(3));
sll.insertAtHead(new Node(4));
sll.insertAtTail(new Node(0));
sll.traverseLinkedList();
// console.log(sll.head);
