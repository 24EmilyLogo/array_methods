//length
var numbers = [1, 20, 5]
var arrayLength = numbers.length;
console.log(arrayLength)

//push
var names = ["Beep", "boop", "gloop", "Ploop"];
names.push("Bloop");
console.log(names)
    //not quite the way they want :/ :(
var boop = ["gloop", "bloop", "blop"]
for (var i = 0; i < 1; i++){
    boopBop = boop + ",bop"
}
console.log(boopBop)

//pop
var names1 = ["Beep", "boop", "gloop", "Ploop", "Bloop"];
names1.pop();
console.log(names1)

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