const modalOverlay = document.querySelector(".modal-overlay");
const cards = document.querySelectorAll(".card");
const modal = modalOverlay.querySelector(".modal");

for(let card of cards){
    card.addEventListener("click",  function(){
        const videoId = card.getAttribute("id");
        modalOverlay.classList.add("active");
        modalOverlay.querySelector("iframe").src = `https://rocketseat.com.br/${videoId}`;
    });
}

document.querySelector(".close-modal").addEventListener("click", function(){
    modalOverlay.classList.remove("active");
    modalOverlay.querySelector("iframe").src = "";
    modal.classList.remove("active-maximize");
});




document.querySelector(".maximize-modal").addEventListener("click", function(){
    let contem = modal.classList.contains("active-maximize");
    
    if(!contem){
        modal.classList.add("active-maximize");
    }else{
        modal.classList.remove("active-maximize");
    }
});



