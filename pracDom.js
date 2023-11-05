const plus=document.querySelector("#plus")
const minus=document.querySelector("#minus")
const para=document.querySelector("#p")
var increase=20


function big(){
   para.style.fontSize = `${++increase}px`
   para.style.color="red"
   para.style.backgroundColor="blue"
    
}

function small(){
    document.getElementById("p").style.fontSize =`${--increase}px`
    para.style.color="gold"
   para.style.backgroundColor="green"
}