const track = document.querySelector(".carousel-track");
const slides = [...track.children];
const panesNav = document.querySelector(".nav-panes");
const panes = [...panesNav.children];

// set slide width
const slideWidth = 3 * slides[0].getBoundingClientRect().width;

// arrange the slides next to one another
const setSlidePosition = (slide, index) => {
  slide.style.left = index * slideWidth + "px";
};
slides.forEach(setSlidePosition);

// Move the slide
const moveToSlide = (track, currentSlide, targetSlide) => {
  track.style.transform = "translateX(-" + targetSlide.style.left + ")";
  currentSlide.classList.remove("current-slide");
  targetSlide.classList.add("current-slide");
};

// Move to pane btn
const updatePaneBtn = (currentPane, targetPane) => {
  currentPane.classList.remove("pane--fill");
  targetPane.classList.add("pane--fill");
};

//move slide when pane button clicked
panesNav.addEventListener("click", (e) => {
  // what button was clicked
  const targetPane = e.target;
  const currentSlide = track.querySelector(".current-slide");
  const currentPane = panesNav.querySelector(".pane--fill");
  const targetIndex = panes.findIndex((pane) => pane === targetPane);
  const targetSlide = slides[targetIndex];

  // Move the slide
  moveToSlide(track, currentSlide, targetSlide);

  // Move to pane btn
  updatePaneBtn(currentPane, targetPane);
});
