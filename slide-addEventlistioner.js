const set=document.querySelector("#khan")
const btn=document.querySelector("#search")
set.addEventListener("click" , function(){
   console.log("you click me");
   set.style.color="red"
   set.style.backgroundColor="blue"
})

btn.addEventListener("click",function(){
    btn.classList.add('red')
    btn.style.backgroundColor="blue"
})

