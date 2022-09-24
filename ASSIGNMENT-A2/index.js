function hameed (gender){
    //OOP principle of Encapsulation for the school and course
  let school = "nile university"
   let course = "computer science"
return {

   tribe: "yoruba",
   location:"abuja",
   
    friends: ["john", "james"],

    apply: function (){
        return "program manager"
    },
   create: function (){
      return "zenithbank domiciliary account"
   },
   credential: {
    name: "hameed",
    gender: gender,
    school: school,
    course: course,
   
   },
}
}
let boy = new hameed("boy") // OOP principle of inheritance

function test (gender){
    let createNewAccount = hameed.call(this, gender)
    createNewAccount.create = function(){
        console.log("eco bank savings account") // OOP principle of polymorphism,the function was changed to eco bank savings account
    }
    return createNewAccount
}
 let newTest = new test('boy')
 newTest.create()         

console.log(boy.credential)  // OOP principle of abstraction, credential shows us only the essential attibutes