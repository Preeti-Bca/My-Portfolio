//javascript for navigation bar effects on scroll
window.addEventListener("scroll", function(){
  const header = document.querySelector("header");
  header.classList.toggle('sticky', window.scrollY > 0);
});

//javascript for responsive navigation sidebar menu
const menuBtn = document.querySelector(".menu-btn");
const navigation = document.querySelector(".navigation");
const navigationItems = document.querySelectorAll(".navigation a")

menuBtn.addEventListener("click",  () => {
  menuBtn.classList.toggle("active");
  navigation.classList.toggle("active");
});

navigationItems.forEach((navigationItem) => {
  navigationItem.addEventListener("click", () => {
    menuBtn.classList.remove("active");
    navigation.classList.remove("active");
  });
});

//javascript for scroll to top button
const scrollBtn = document.querySelector(".scrollToTop-btn");

window.addEventListener("scroll", function(){
  scrollBtn.classList.toggle("active", window.scrollY > 500);
});

//javascript for scroll back to top on click scroll-to-top button
scrollBtn.addEventListener("click", () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

//javascript for reveal website elements on scroll
window.addEventListener("scroll", reveal);

function reveal(){
  var reveals = document.querySelectorAll(".reveal");

  for(var i = 0; i < reveals.length; i++){
    var windowHeight = window.innerHeight;
    var revealTop = reveals[i].getBoundingClientRect().top;
    var revealPoint = 50;

    if(revealTop < windowHeight - revealPoint){
      reveals[i].classList.add("active");
    }
  }
}


var instagramLink = document.getElementById('instagramLink');

    // Add event listener to handle click
    instagramLink.addEventListener('click', function(event) {
        // Prevent default link behavior
        event.preventDefault();
        
        // Get the URL from the anchor element
        var url = instagramLink.getAttribute('href');
        
        // Open the Instagram link in a new tab
        window.open(url, '_blank');
    });

  var linkedinLink = document.getElementById('linkedinLink');

    // Add event listener to handle click
    linkedinLink.addEventListener('click', function(event) {
        // Prevent default link behavior
        event.preventDefault();
        
        // Get the URL from the anchor element
        var url = linkedinLink.getAttribute('href');
        
        // Open the LinkedIn link in a new tab
        window.open(url, '_blank');
    });
