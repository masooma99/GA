console.log('intro to dom lesson')

//const mainHeader = document.querySelector('#main-header')

//console.log(mainHeader)

const newMainHeader = document.querySelector('#main-header');

console.log(newMainHeader)


//to change any attribute just do .attribute

console.log('intro to dom lesson')

// cache element
const mainHeader = document.querySelector('#main-header')

const googleLink = document.querySelector('#google-link')

console.log(googleLink)


mainHeader.textContent = 'Changed website header Masooma'
mainHeader.innerHTML = '<li>hi</li> Changed website header Masooma';


//attribute: id, class, src, alt, href, style

// to change ANY attribute just do .attribute
//googleLink.attribute ="";

googleLink.href = 'https://google.com'

const catImage = document.querySelector('#cat-image')

catImage.src ='https://img.freepik.com/free-photo/portrait-beautiful-purebred-pussycat-with-shorthair-orange-collar-neck-sitting-floor-reacting-camera-flash-scared-looking-light-indoor_8353-12551.jpg?semt=ais_hybrid&w=740&q=80';

catImage.alt = 'cat image';
console.log(catImage)

catImage.className = 'cat-image-all'
console.log(catImage)

catImage.style.hight = '60 px';
catImage.style.width = '60 px';

googleLink.style.color = 'red';

const todoElements= document.querySelectorAll('.todo-item')

console.log(todoElements)


//THIS PART WORK
// todoElements[0].style.color = 'blue';
// todoElements[1].style.color = 'blue';
// todoElements[3].style.color = 'red';


// FOR SOME REASONE THIS PART DOES NOT WORK
for(let i=0;i<todoElements.length;i++){
    todoElements[i].style.color= 'green';
}




function handleclick(){
    console.log('you clicked the button')
}
catImage.addEventListener('click', handleclick)


//(what type of event it is, what is the function I want to call when I click on it)
//type of events: onclick, 
//catImage.addEventListener(onclick, handleclick()) //this way it will call the methon and expect a return which this method does not have so remove ()
myLastButton = document.querySelector('#my-button')

function buttonClicked(){
    console.log('button has been clicked')
}
myLastButton.addEventListener('click', buttonClicked)



// <p> has a number and wr increase it by 3
pCounting = document.querySelector('.p-counting')

pCounting.textContent = Number(pCounting.textContent)+3;

console.log(typeof Number(pCounting.textContent))
console.log( Number(pCounting.textContent))

// Exercise 3:
// 1. cache all 3 elements: count, plus, minus using querySelector
// 2. create 2 functions: handlePlus, handleMinus
// 3. each function should increase count by 1 and decrease count by 1
// 4. add a event listener on the plus button and the minus button so when they're clicked the count will go up by 1 or down by
// HINT (.textContent = Number(count.textContent))

//count, plus, minus

myPlusButton = document.querySelector('#plus')
myMinusButton = document.querySelector('#minus')

pCounting.textContent = Number(pCounting.textContent)+3;
/*
function handlePlus(){
    pCounting.textContent = Number(pCounting.textContent)+1;
}
function handleMinus(){
    if(Number(pCounting.textContent)>0)
    {pCounting.textContent = Number(pCounting.textContent)-1;}
}
*/
//function that handle both + & -
function plusMinus(event){
    if(event.target.id ==='plus'){
        pCounting.textContent = Number(pCounting.textContent)+1;

    }
    else{
        if(Number(pCounting.textContent)>0)
        {
            pCounting.textContent = Number(pCounting.textContent)-1;
        }
    }
    
}

myPlusButton.addEventListener('click', plusMinus)
myMinusButton.addEventListener('click', plusMinus)
