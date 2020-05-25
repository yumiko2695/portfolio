import './Projects.css'
import './Projects'

let accordions = document.querySelectorAll("button.accordion");

for (let i=0; i<accordions.length;i++) {
  accordions[i].onclick=function() {
    this.classList.toggle("active");
    this.nextElementSibling.classList.toggle("show");
  }
}

