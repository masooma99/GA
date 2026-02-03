console.log("Helloooooo")

let list = [1,2,3,4];

console.log(list.length)

for(let i=0;i<list.length;i++){
    console.log(list[i])
}

if(4>3){
    console.log("yaayyyy!")
}

function ifFalse(){}
function ifTrue(){
    console.log("it is truthy")
}

list ? ifTrue() : ifFalse() // which is true bec the list is not empty

console.log(list ? "true" : "false")

console.log(parseInt("45")+1) // same as Number()

console.log(+45 +3) // same as Number()

//dom document object model

let title = document.querySelector('#title');
title.setAttribute("class" , "blue")
title.remove()