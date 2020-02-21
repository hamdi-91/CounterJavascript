let counter=document.querySelector('.counter');
const  addCount=document.querySelector('#addCount');
const  lowerCount=document.querySelector('#lowerCount');7
let count=0;

addCount.addEventListener('click',incrementCounter)
function incrementCounter() {
count++;
counter.innerHTML=count;
if (counter.innerHTML>'0'){
    counter.style.color='green';
}
else if (counter.innerHTML==='0'){
    counter.style.color='white';
}
counter.animate([{opacity:'0.2'},{opacity:'1.0'}],{duration:500,fill:'forwards'})
}


lowerCount.addEventListener('click',decrementCounter)
function decrementCounter(){
count--;
counter.innerHTML=count;

if (counter.innerHTML<'0'){
    counter.style.color='red';
}
else if (counter.innerHTML==='0'){
    counter.style.color='white';
}
counter.animate([{opacity:'0.2'},{opacity:'1.0'}],{duration:1000,fill:'forwards'})
}