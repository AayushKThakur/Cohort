let user = {
    name: "Aayush",
    age: 19,
    gender: "M"
}

// function greet(user){
//     console.log("Hello " + user.name + " Your age is " + user.age);//string concatination
// }
// greet(user);

function greet(user) {
    if (user.gender === "M") {
        console.log("Hi Mr. " + user.name + ", Your age is " + user.age);
    } else if (user.gender === "F") {
        console.log("Hi Mrs. " + user.name + ", Your age is " + user.age);
    } else {
        console.log("Hi " + user.name + ", Your age is " + user.age);
    }

    if (user.age >= 18) {
        console.log(user.name + ", you are eligible to vote.");
    } else {
        console.log(user.name + ", you are not eligible to vote.");
    }
}

greet(user);

//Assigment array of objects
const users = [
   
    {
        name: "Aayush",
        age: 21,
        Gender: "M"
    },{
        name: "Rutuja",
        age: 20,
        Gender: "F"
    },
    {
        name: "Kunal",
        age:11,
        Gender:"M"
    }
]

function MaleVoters(arr){
    let VotersMale = [];
    for (let i = 0; i <arr.length; i++) {
        if (arr[i].age > 18 && arr[i].Gender === "M") {
            VotersMale.push(arr[i]);
        }
    }
    return VotersMale;
        
    }

    const VotersMale = MaleVoters(users);
    console.log(VotersMale);

    //APPROACH 2 FILTER KEYWORD

    // function getEligibleMaleUsers(users) {
    //     return users.filter(user => user.age > 18 && user.gender === "M");
    // }
    
    // // Example Usage
    // const users = [
    //     { name: "Aayush", age: 19, gender: "M" },
    //     { name: "Riya", age: 17, gender: "F" },
    //     { name: "Rahul", age: 22, gender: "M" },
    //     { name: "Neha", age: 20, gender: "F" },
    //     { name: "Vikram", age: 16, gender: "M" }
    // ];
    
    // const eligibleMales = getEligibleMaleUsers(users);
    // console.log(eligibleMales);
    