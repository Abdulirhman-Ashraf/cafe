let review = document.querySelectorAll(".review-box");
let btn = document.querySelectorAll(".review .btn");
btn[0].addEventListener("click",function(){

    for(let i=0;i<9;i++){

        if(review[i].classList.contains("1")){
            review[i].classList.remove("hidden")
        }else{
            review[i].classList.add("hidden")
        }     
}



})
btn[1].addEventListener("click",function(){
    for(let i=0;i<9;i++){

        if(review[i].classList.contains("2")){

            review[i].classList.remove("hidden")
        }else{
            review[i].classList.add("hidden")
        }       
}}
)
btn[2].addEventListener("click",function(){

         for(let i=0;i<9;i++){
        if(review[i].classList.contains("3")){
            review[i].classList.remove("hidden")
        }else{
            
            review[i].classList.add("hidden")
        }
}
})

