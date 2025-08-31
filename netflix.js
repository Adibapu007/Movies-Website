const directionLeft = document.querySelector(".direction-left");
const directionRight=document.querySelector(".direction-right");
const cards = document.querySelectorAll(".card-1");

cards.forEach((card,index)=>{
    if(index>=5){
        card.classList.add("hidden");
    }
});
let cardNo=true;
directionLeft.disabled=false;
directionLeft.addEventListener('click', () => {
    if (cardNo) {
      // Hide first 5 and show last 5
      cards.forEach((card, index) => {
        if (index < 5) {
          card.classList.add('hidden');
        } else {
          card.classList.remove('hidden');
        }
      });
    } else {
      // Show first 5 and hide last 5
      cards.forEach((card, index) => {
        if (index < 5) {
          card.classList.remove('hidden');
        } else {
          card.classList.add('hidden');
        }
      });
    }
    directionLeft.disabled=true;
    directionRight.disabled=false;
  });


directionRight.addEventListener('click', () => {
    if (cardNo) {
      // Hide first 5 and show last 5
      cards.forEach((card, index) => {
        if (index >=5) {
          card.classList.add('hidden');
        } else {
          card.classList.remove('hidden');
        }
      });
    } else {
      // Show first 5 and hide last 5
      cards.forEach((card, index) => {
        if (index >=5) {
          card.classList.remove('hidden');
        } else {
          card.classList.add('hidden');
        }
      });
    }
    directionLeft.disabled=false;
    directionRight.disabled=true;
  
  });

const faqCard = document.querySelectorAll(".faq-card");
const faqSection=document.querySelector(".faq-section");

// Array of different answers for each faq-card
const answers = [
  "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more.",
  "You can watch Netflix through a web browser, mobile app, smart TVs, and many other devices.",
  "Netflix offers various subscription plans depending on video quality and number of screens.",
  "Yes, you can download select titles to watch offline on your mobile devices.",
  "You can cancel your Netflix membership anytime without extra fees.",
  "The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space."
  
]

faqCard.forEach((card, index) => {
  card.addEventListener('click', function() {
    console.log(`Button ${index + 1} clicked`);

    // Check if answer-box already exists next to the clicked card
    let nextSibling = card.nextElementSibling;
    if (nextSibling && nextSibling.classList.contains('answer-box')) {
      // If it exists, remove it
      nextSibling.remove();
    } else {
      // Else, create and add it
      let answerBox = document.createElement("div");
      let answerBoxPara = document.createElement("p");

      answerBox.className = "answer-box";
      answerBoxPara.className = "answer-box-p";
      answerBoxPara.textContent = answers[index];

      answerBox.appendChild(answerBoxPara);
      card.parentNode.insertBefore(answerBox, card.nextSibling);
      faqSection.style.height = "45rem";
    }
  });
});

const signBtn=document.querySelector("#sign-in");

signBtn.addEventListener("click",()=>{

  console.log("Sign-btn was clicked");
  window.location.href="sign_in.html";


})




