var hearts = document.querySelectorAll(".fa-heart");
for (let i=0;i<hearts.length;i++){
hearts[i].addEventListener("click",function(){
    if (hearts[i].style.color=="red"){
        hearts[i].style.color="black";
    }
    else{  
        hearts[i].style.color="red";  
    }  
} )
}
    


var remvs =document.querySelectorAll(".fa-times")
for (let el of remvs){
    el.addEventListener("click", function(){
       console.log(el.parentNode.parentNode.parentNode.remove());
    })
}



