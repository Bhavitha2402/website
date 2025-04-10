var sublist = document.getElementsByClassName("menu__sublist")[0];
var burger = document.getElementsByClassName("menu__menu-button")[0];
var counter = 0;

burger.addEventListener('click', function(){
	if(counter === 1){
		sublist.style.opacity = "0";
		sublist.addEventListener('transitionend', function f1(){
			sublist.style.visibility = "hidden";
			sublist.removeEventListener('transitionend', f1);
		})
		
		counter--;
		//console.log("Hidden!");
	}
	else if(counter === 0){
		sublist.style.visibility = "visible";
		if(window.getComputedStyle(sublist).visibility){
			sublist.style.opacity = "1";
		}
		
		counter++;
		//console.log("Visible!");
	}
})
document.querySelector("#MoodTracking").addEventListener('click', function() {
    window.location.href = 'https://bhavitha2402.github.io/Moodtracking/'; // Replace 'another-page.html' with the path to the page you want to navigate to
});

document.querySelector("#WellnessPlans").addEventListener('click', function() {
    window.location.href = 'https://bhavitha2402.github.io/WellnessPlans/'; // Replace 'another-page.html' with the path to the page you want to navigate to
});
document.querySelector("#SocialConnectivity").addEventListener('click', function() {
    window.location.href = 'https://bhavitha2402.github.io/Connectivity/'; // Replace 'another-page.html' with the path to the page you want to navigate to
});
document.querySelector("#SocialConnectivity").addEventListener('click', function() {
    window.location.href = 'https://bhavitha2402.github.io/Connectivity/'; // Replace 'another-page.html' with the path to the page you want to navigate to
});
document.querySelector("#Contact").addEventListener('click', function() {
    window.location.href = 'https://bhavitha2402.github.io/ContactUs/'; // Replace 'another-page.html' with the path to the page you want to navigate to
});
document.querySelector("#Btn1").addEventListener('click', function() {
    window.location.href = 'file:///C:/Users/MRCE%20DIGITAL.LIB/Desktop/connectivity/index.html'; // Replace 'another-page.html' with the path to the page you want to navigate to
});
document.querySelector("#reminder").addEventListener('click', function() {
    window.location.href = 'https://bhavitha2402.github.io/Reminders/'; // Replace 'another-page.html' with the path to the page you want to navigate to
});
document.querySelector("#AboutUs").addEventListener('click', function() {
    window.location.href = 'https://bhavitha2402.github.io/AboutUs-page/'; // Replace 'another-page.html' with the path to the page you want to navigate to
});
document.querySelector("#educationalResources").addEventListener('click', function() {
    window.location.href = 'https://bhavitha2402.github.io/educationalresources/'; // Replace 'another-page.html' with the path to the page you want to navigate to
});
document.querySelector("#PharmacyStore").addEventListener('click', function() {
    window.location.href = 'https://bhavitha2402.github.io/PharmacyStore/'; // Replace 'another-page.html' with the path to the page you want to navigate to
});
 
document.querySelector("#chatbot").addEventListener('click', function() {
    window.location.href = 'https://bhavitha2402.github.io/chatbot/'; // Replace 'another-page.html' with the path to the page you want to navigate to
});
document.querySelector("#Instagram").addEventListener('click', function() {
    window.location.href = 'https://www.instagram.com/glow.pathway_4?igsh=NjkwMHF3cHNwZ2xi'; // Replace 'another-page.html' with the path to the page you want to navigate to
});
document.querySelector("#Twitter").addEventListener('click', function() {
    window.location.href = 'https://x.com/GlowPathway?t=DplP2BaoBV7TlA7QYxLoJQ&s=09'; // Replace 'another-page.html' with the path to the page you want to navigate to
});
document.querySelector("#youtube").addEventListener('click', function() {
    window.location.href = 'https://bhavitha2402.github.io/chatbot/'; // Replace 'another-page.html' with the path to the page you want to navigate to
});
