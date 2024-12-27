
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting){
            entry.target.classList.add('show');   
            observer.unobserve(entry.target); 
        }
    });
});



const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));


document.addEventListener('DOMContentLoaded', function() {
  const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              // When the skills section is visible
              const bars = entry.target.querySelectorAll('.chart__bar');
              bars.forEach(bar => {
                  bar.classList.add('animate');
              });
              
              observer.disconnect();
          }
      });
  }, {
      threshold: 0.1 
  });

  const skillsSection = document.getElementById('skillsSection');
  if (skillsSection) {
      observer.observe(skillsSection);
  }
});
