// window.addEventListener("scroll", function() {
//     let lines = document.querySelectorAll(".animated-line path");
//     lines.forEach(line => {
//         let linePos = line.getBoundingClientRect().top;
//         let screenPos = window.innerHeight;
      
//         if (linePos < screenPos) {
//           let drawLength = line.getTotalLength();
//           line.style.strokeDashoffset = drawLength;
//         }
//     })
// });