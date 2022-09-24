
let person = function(name){
    return {
    age: 100,
  fair: true,
  read: function(name){
    return name + " reads a book"
  },
  eat: function(){
   console.log("eat") 
  }
  }
}
let school = function(name){
 return person.call(this, name)
 
}  

let mySchool = new school("CHIDIOGO")
console.log(mySchool.read("CHIDIOGO"))
console.log(mySchool)
mySchool.eat()