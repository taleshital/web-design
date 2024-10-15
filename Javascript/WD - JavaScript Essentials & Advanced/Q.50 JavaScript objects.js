
//Q.50 What is the drawback of declaring methods directly in JavaScript objects ?

Declaring methods directly in JavaScript objects can have the following drawbacks, especially when working with multiple instances of objects:

1. Memory inefficiency:
When methods are declared directly in an object, each instance of the object gets its own copy of the method.This can lead to unnecessary memory consumption if many instances of the object are created.Each instance holds its own copy of the method, which is inefficient when all instances can share a single method.


function Person(name) {
    this.name = name;
    this.sayHello = function () {
        console.log("Hello, " + this.name);
    };
}

const person1 = new Person('Alice');
const person2 = new Person('Bob');

// person1 and person2 each have their own copy of sayHello, consuming extra memory.
2. Difficult to maintain:
When methods are directly added to each object, updating the method in all instances requires manual changes, which can be error - prone.If you need to change the behavior of a method, you'd have to change it in every instance where it's declared.

3. Loss of method sharing(no prototypal inheritance):
Declaring methods directly in objects doesn't take advantage of JavaScript's prototypal inheritance.Typically, methods are shared across instances by attaching them to the object's prototype, allowing all instances to refer to a single copy of the method. This is more efficient and adheres to JavaScript's inheritance model.



function Person(name) {
    this.name = name;
}

Person.prototype.sayHello = function () {
    console.log("Hello, " + this.name);
};

const person1 = new Person('Alice');
const person2 = new Person('Bob');
// Both person1 and person2 share the same sayHello method via the prototype.