const burger=document.querySelector(".burger")
const categoriesList=document.querySelector(".categories-list")
const navlinks=document.querySelectorAll(".categories-list li");
//Hamburger Menu
burger.addEventListener('click',()=>{
    categoriesList.classList.toggle("opened")
    navlinks.forEach((li,index) =>{ 
        if (li.style.animation) 
            li.style.animation=''
        else {
        li.style.animation=`fade 0.3s forwards ease ${index/7 +0.3}s`;
        }   
    })
    navlinks.forEach(link => link.addEventListener('click',()=>{
        categoriesList.classList.toggle("opened")
        navlinks.forEach((li,index) =>{
            if (li.style.animation) 
                li.style.animation=''
            else {
            li.style.animation=`fade 0.3s forwards ease ${index/7 +0.3}s`;
            }        
        })
        burger.classList.toggle("clicked")
    }))  
   burger.classList.toggle("clicked")
});