/**
 * js oop
 */


//---- 寄生组合式继承 -------------------------
function inheritProto(child, parent) {
  var proto = Object.create(parent.prototype);
  proto.constructor = child;
  child.prototype = proto;
}

var Animal = function(type){
  this.type = type || '';
  this.colors = ['black', 'white'];
}
Animal.prototype = {
  say: function(){
    console.log('my type is ' + this.type)
  }
}

var Dog = function(name, age){
  Animal.call(this, 'dog');
  this.name = name || '';
  this.age = age || 0;
}
inheritProto(Dog, Animal);
Dog.prototype.talk = function(){
  this.say()
  console.log('I am ' + this.name + ', age ' + this.age)
  console.log(this.colors.join(','))
  console.log(this instanceof Dog)
}

var dogA = new Dog('A', 1);
var dogB = new Dog('B', 2);
dogA.type = 'cat';
dogA.colors.push('red');
dogA.talk()
dogB.talk()

//---- ES6 继承 --------------------------------
class Animal {
    colors = ['black', 'white'];
    constructor(type) {
        this.type = type;
    }
    say() {
        console.log('my type is ' + this.type)
    }
}
class Dog extends Animal {
    constructor(name, age) {
        super('dog');
        this.name = name || '';
        this.age = age || 0;
    }
    talk() {
        super.say()
        console.log('I am ' + this.name + ', age ' + this.age)
        console.log(this.colors.join(','))
    }
}

var dogA = new Dog('A', 1);
var dogB = new Dog('B', 2);
dogA.type = 'cat';
dogA.colors.push('red');
dogA.talk()
dogB.talk()