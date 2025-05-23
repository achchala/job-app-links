function copyToClipboard(text) {
  navigator.clipboard.writeText(text).then(() => {
    const confirmation = document.getElementById("confirmation");
    confirmation.style.display = "block";
    setTimeout(() => {
      confirmation.style.display = "none";
    }, 1500);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("btn-portfolio").addEventListener("click", () => {
    copyToClipboard("https://www.achchala.com");
  });

  document.getElementById("btn-github").addEventListener("click", () => {
    copyToClipboard("https://github.com/achchala");
  });

  document.getElementById("btn-linkedin").addEventListener("click", () => {
    copyToClipboard("https://linkedin.com/in/achchala");
  });
});
