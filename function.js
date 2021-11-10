// function person(name,age,gender){
//     this.name = name
//     this.age = age
//     this.gender = gender
// }
// var person1= new person("ravi","23","male")
// var person2= new person("mahesh","45","male")
// // console.log(person2)


var student={
    name : "ravi",
    age : "21",
    gender : "male",
    rollNumber : 316,
    getNamae : function(){
        return this.name
    },
    getAge : function(){
        return this.age
    },
    getgender : function(){
        return this.gender
    },
    getrollnumber : function(){
        return this.rollNumber
    },
 
}
console.log(student.getAge())
