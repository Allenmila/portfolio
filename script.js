// Toggle mobile menu
const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');

menuToggle.addEventListener('click', () => {
  navMenu.classList.toggle('show');
});

// Typewriter Effect
const typewriter = document.getElementById('typewriter');
const words = ["Phoenix Code", "a Web Developer", "a Software Engineer", "a Tech Enthusiast"];
let wordIndex = 0;
let letterIndex = 0;
let isDeleting = false;
let currentWord = "";

function type() {
  currentWord = words[wordIndex];
  if (isDeleting) {
    typewriter.textContent = currentWord.substring(0, letterIndex--);
    if (letterIndex < 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
    }
  } else {
    typewriter.textContent = currentWord.substring(0, letterIndex++);
    if (letterIndex > currentWord.length) {
      isDeleting = true;
    }
  }
  setTimeout(type, isDeleting ? 100 : 200);
}

type();

// Scroll Reveal
const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
  for (let i = 0; i < reveals.length; i++) {
    const windowHeight = window.innerHeight;
    const revealTop = reveals[i].getBoundingClientRect().top;
    const revealPoint = 150;

    if (revealTop < windowHeight - revealPoint) {
      reveals[i].classList.add("active");
    }
  }
});

// Theme Toggle
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');
  themeToggle.textContent = document.body.classList.contains('dark-theme') ? '☀️' : '🌙';
});

// JavaScript to update the percentage dynamically
document.addEventListener("DOMContentLoaded", function () {
    const skills = document.querySelectorAll(".skill");
  
    skills.forEach(skill => {
      const progress = skill.querySelector("progress");
      const percentageLabel = skill.querySelector(".skill-percentage");
  
      // Calculate the percentage and update the label
      const percentage = Math.round((progress.value / progress.max) * 100);
      percentageLabel.textContent = `${percentage}%`;
    });
  });
  
