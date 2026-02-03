const frame = document.getElementById("frame");
const totalFrames = 240;

window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;
  const docHeight = document.body.scrollHeight - window.innerHeight;
  const scrollFraction = scrollTop / docHeight;

  let frameIndex = Math.floor(scrollFraction * totalFrames) + 1;
  frameIndex = Math.min(totalFrames, Math.max(1, frameIndex));

  const frameNumber = String(frameIndex).padStart(3, "0");
  frame.src = `images/ezgif-frame-${frameNumber}.jpg`;
});
