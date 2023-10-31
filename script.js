//length
var numbers = [1, 20, 5]
var arrayLength = numbers.length;
console.log(arrayLength)

//push
    // var names = ["Beep", "boop", "gloop", "Ploop"];
    // names.push("Bloop");
    // console.log(names)

var boop = ["gloop", "bloop", "blop"]
    //boopBop = boop + ",boop"
boop[boop.length] = "boop"
console.log(boop)

//pop
var names1 = ["Beep", "boop", "gloop", "Ploop", "Bloop"];
names1.pop();
console.log(names1)

var blep = ["ploop", "bloop", "boop", "beep"]
 function popButNot(blep){
     let beep = []
     for (let i = 0; i < blep.length - 1; i++){
         beep [i] = blep[i]
     }
};
console.log(beep)

//toString
var names2 = ["Beep", "boop", "gloop", "Ploop", "Bloop"];
var stringNames = names2.toString();
console.log(stringNames)

//join
var names3 = ["Beep", "boop", "gloop", "Ploop", "Bloop"];
    //picks what to seperate the string with
var arrayElements = names3.join("/");
console.log(arrayElements)

//concat
var names4 = ["Beep", "boop", "gloop", "Ploop", "Bloop"];
var numbers2 = [3, 1, 7];
var newArray = names4.concat(numbers2);
console.log(newArray)