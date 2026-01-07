document.addEventListener("DOMContentLoaded", () => {
  const video1 = document.getElementById("bg-video1");
  const video2 = document.getElementById("bg-video2");

  // Apenas cargue el primero, arranca y programamos el fade
  video1.addEventListener("playing", () => {
    setTimeout(() => {
      const source = document.createElement("source");
      source.src = "./assets/background2.mp4";
      source.type = "video/mp4";
      video2.appendChild(source);
      video2.load();
      video2.play();
    }, 2000);

    setTimeout(() => {
      video1.style.transition = "opacity 1s ease"; // 1 segundo de desvanecimiento
      video1.style.opacity = "0";
    }, 4320); // 4.3 segundos
  });
});
