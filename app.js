const about = document.querySelector(".about")
const btns = document.querySelectorAll(".tab-btn")
const articles = document.querySelectorAll(".content")

about.addEventListener("click", function(e){
const id = e.target.dataset.id
if(id){ //if the target has an id 
btns.forEach(function(btn){
    //firstly remove all the active class from all btn
    btn.classList.remove("active")
})
//then add the active class to whats being pressed
e.target.classList.add("active")

articles.forEach(function(article){
    //firstly remove all the active class from article
    article.classList.remove("active")
})
const element = document.getElementById(id)
//add active class to matching article
element.classList.add("active")

}

})