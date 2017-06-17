/**
 * Created by chintan on 6/13/17.
 */

var names = ['Mike', 'Steven', 'Elon'];
//
// names.forEach(function(name){
//     console.log("Anon function output :- " + name);
// });
//
// console.log("-------------------------------------");
// names.forEach((name) => {
//     console.log("Arrow function output :- " + name);
// });
//
// console.log("-------------------------------------");
// names.forEach((name)=> console.log("Single line arrow function output :- " + name)) ;
//
// var returnMe = (name) => name + '!' ;
// console.log(returnMe("Sam"));

var person = {
    name : 'Jen',
    greet : function(){
        names.forEach((name) => {
            console.log(this.name + " says hello to " + name);
        });
    }
}

person.greet();