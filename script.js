const filterButtons = document.querySelectorAll(".filter-btn");
const cards = document.querySelectorAll(".project-card");

filterButtons.forEach(button => {

button.addEventListener("click", () => {

const filter = button.id.replace("-filter","");

cards.forEach(card => {

if(filter === "all"){
card.style.display="flex";
return;
}

if(card.dataset.type === filter){
card.style.display="flex";
}else{
card.style.display="none";
}

});

});

});