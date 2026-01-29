console.log("control flow file connected")
console.log(5>3) //if(5>3){echo "true";}
console.log(5<3)
// Drinving age i Bahrain
let myAge = 15;
if(myAge<18){
    console.log("you are not allowed to drive yet")
}
else if(myAge>=18){
    console.log("you can drive..")
}
else{//if the user enter an uneccepted value
    console.log("invaled age")
}

let color = "green";
if(color === "green"){
    console.log("Go")
}
else if(color === "yellow"){
    console.log("Slow")
}
else if(color === "red"){
    console.log("Stop")
}
else{
    console.log("Error")
}

//for loop
//for(startingPoints ; stopingPoints ; incrementation){}

for(let i=0;i<=5;i++){
    if(i === 3){
        i++;
    }
    console.log(i)
}

console.log("Exercise#2")

for(let i=0;i<=10;i++){
    if(i===9)
    {
        continue
    }
    console.log(i*2)
}