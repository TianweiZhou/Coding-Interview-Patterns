/**
Task: Write a JavaScript function called reverseWords that takes a sentence as input and returns the sentence with the order of words reversed.

Input Format: The input will be a string representing the sentence.

Constraints:

The sentence will contain only alphanumeric characters and spaces.
There will be no leading or trailing spaces.
The sentence will have at least one word.
Output Format: The output will be a string representing the sentence with the words reversed.

Sample Input: JavaScript is awesome

Sample Output: awesome is JavaScript
 */

const reverseWords = (sentence) => {
    let result;
    if(sentence){
        const words = sentence.split(' ');
        const reversedWords = words.reverse();
        result = reversedWords.join(' ');
    }
    return result;
}

const test = reverseWords('JavaScript is awesome');
console.log(test)

/**
Task: Write a JavaScript function called findNthLargest that takes an array of numbers and an integer n as input, and returns the nth largest element from the array.

Input Format

The input will be an array of numbers.
An additional integer n will be provided.
Constraints

The array will contain at least n elements.
The array may have duplicates.
The values in the array can be both positive and negative.
Output Format: The output will be the nth largest element as a number.

Sample Input:

const numbers = [10, 5, 3, 8, 2];

const n = 3;

Sample Output: 5
 */

const findNthLargest = (nums, n) => {
    const distinctNums = [...new Set(nums)];
    const sortedNums = distinctNums.sort((a, b)=>b - a);
    if(n > 1){
         return sortedNums[n - 1] ?? null;
    }
   return null;
}

const test1 = findNthLargest([10, 5, 3, 8, 2], 3);
console.log(test1);

/**
Task: Implement a Linked List in JavaScript with the following operations:

insert(value): Inserts a new node with the given value at the end of the list.
delete(value): Removes the first occurrence of the node with the given value from the list.
search(value): Returns true if a node with the given value exists in the list, false otherwise.
 */

class Node {
    constructor(value) {
        this.value = value
        this.next = null;
    }
} 

class MyLinkedList{
    constructor(){
        this.head = null;
    }

    insert(value){
        const newNode = new Node(value);
        if(!this.head){
            this.head = newNode;
        }else{
            const current = this.head;
            while(current.next){
                current = current.next;
            }
            current.next = newNode;
        }
        
    }

    delete(value){
        let current = this.head;
        if(!this.head){
            return;
        }
        if(current.value === value){
            this.head = this.head.next;
            return;
        }
        while(current.next){
            if(current.next.value === value){
                current.next = current.next.next;
                return;
            }
            current = current.next;
        }

    }

    search(value){
        let current = this.head
        while (current) {
            if(current.value === value){
                return true
            }
            current = current.next;
        }
        return false
    }
}

const myLinkedList = new MyLinkedList();
myLinkedList.insert(1);
myLinkedList.insert(2);
console.log(myLinkedList.search(2));
myLinkedList.delete(2);
console.log(myLinkedList.search(2));
console.log(myLinkedList);
