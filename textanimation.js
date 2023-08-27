function startTextAnimation() {
    const textElement = document.querySelector('.personal_info .Text');
   
    const text = " Frontend Developer";
    let charIndex = 0;

    function animateText() {
      if (charIndex < text.length) {
        const char = text[charIndex];
        textElement.textContent += char;
        charIndex++;
        setTimeout(animateText, 100);
      } else {
        setTimeout(() => {
          textElement.textContent = ''; // Clear the text
          charIndex = 0; // Reset character index
          animateText(); // Start animation again
        }, 1000); // Delay before restarting animation
      }
    }

    animateText();
  }

  startTextAnimation();
function startTextAnimation2() {
    const textElement = document.querySelector('.inside_container .Text');
   
    const text = " Frontend Developer";
    let charIndex = 0;

    function animateText() {
      if (charIndex < text.length) {
        const char = text[charIndex];
        textElement.textContent += char;
        charIndex++;
        setTimeout(animateText, 100);
      } else {
        setTimeout(() => {
          textElement.textContent = ''; // Clear the text
          charIndex = 0; // Reset character index
          animateText(); // Start animation again
        }, 1000); // Delay before restarting animation
      }
    }

    animateText();
  }

  startTextAnimation2();