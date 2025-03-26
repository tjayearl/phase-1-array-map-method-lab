// Array Destructuring

const person ={
    first_name : "john",
    gender : "male",
    occupation : "sofware engineer",
    address : {
        city: "nairobi",
        zipcode : "00100"
    },
    age : 40,
    language : function(){console.log("i speak french")},
    friends : ["alice", "benson", "philip"]
}

console.log(person.friends[2])
const {gender, first_name, age, language, friends: [a, b, c], address:{city, zipcode}} = person

console.log(zipcode)









