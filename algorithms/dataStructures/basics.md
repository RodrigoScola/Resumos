if you want a more in depth explanation,  you might want to check this out: [[Resumos/Programming Basics/arrays|arrays]]
typed arrays
     normally in js it gives you the right amount of memory, but if you want to really optimize it you want to not do that
     typed arrays are the solution to that, 
          Int8Array	1
          Uint8Array	1
          Uint8ClampedArray	1
          Int16Array	2
          Uint16Array	2
          Int32Array	4
          Uint32Array	4
          Float32Array	4
          Float64Array	8
if you want a 3 length array 
     const arr = new Int16Array(3); // [0,0,0];
you can create a buffer to assign how much data you want the array to take up;
     const size = 6 //needs to be multiple of 2 
     const buffer = new ArrayBuffer(size);
     const arr = new Int16Array(buffer);
     buffer.byteLength; // returns 6
     arr.byteLength; // returns 6
you cannot access buffers normally, you need to create a view 
     arr[0] = 42

typed arrays dont have pop and push

stacks are an one way data structure, first in first out
     class Stack  {
          constructor(initialData = []) {
               this.collection = initialData
          }
          print() {
               console.log(this.collection)
          }
          peek() {
               return this.collection[this.collection.length - 1]
          }
          push(item) {
               this.collection.push(item)
          }
          pop() {
               this.collection.pop()
          }
          isEmpty() {
               return this.collection.length == 0
          }
          clear() {
               this.collection = []
          }          
     }
priority queue 
     its a special type of queue in which items may have additional information which specifies the priority 
     