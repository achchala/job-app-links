function copyToClipboard(text) {
  navigator.clipboard.writeText(text).then(() => {
    const confirmation = document.getElementById("confirmation");
    confirmation.style.display = "block";
    setTimeout(() => {
      confirmation.style.display = "none";
    }, 1500);
  });
}
