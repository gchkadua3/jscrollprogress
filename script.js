document.addEventListener("DOMContentLoaded", function() {
  const progressBar = document.querySelector(".progress-bar");

  
  const updateProgressBar= () => {
    const windowHeight = window.innerHeight;
    const totalScrollHeight = document.documentElement.scrollHeight - windowHeight;
    const currentScroll = window.scrollY;
    const scrollProgress = (currentScroll / totalScrollHeight) * 100;
    progressBar.style.width = scrollProgress + '%';
    progressBar.innerText = Math.round(scrollProgress) + '%'; 
  }

  
  window.addEventListener("scroll", updateProgressBar);
});
