//console.log('Hello, world!');

let friuts=["Banana","mango","kiwi","pears","avocado"]; 

//console.log(friuts.length);

//console.log(friuts[3]);

// unshift
friuts.unshift("Watermelon");

//console.log(fruiits);

// shift
friuts.shift();
//console.log(friuts)

// pop
friuts.pop();
//console.log(friuts);

// spread operator(...)
let new_friuts=[...friuts, "Apple", "Pineapple"];
//console.log(new_friuts);
console.log(friuts);

let new_friuts_array=["orange", "blackberry", ...friuts];
console.log(new_friuts_array);

//object
let person={
    name:"John",//string
    gender:'male',
    age:34,//number of interger
    isActive:true,
    friends:["Brenda", "Elvis", "Collins", "Alice"]

};
console.log(person.age);
console.log(person.friends[2]);
function clicked(e){
    alert("I Have been clicked");

}
let btn=document.getElementById("click");
btn.addEventListener("click", clicked);
console.log(btn);

