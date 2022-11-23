/******************************/
/* CAROUSEL */
/******************************/

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

/******************************/
/* ACCORDION */
/******************************/

const faqHeading = document.querySelectorAll(".text");
const headings = [...faqHeading];
const faqIcon = document.querySelectorAll(".accordion-icon");
const icons = [...faqIcon];
const accordion = document.querySelector(".accordion");
const items = [...accordion.children];

function accordionToggle(item) {
  // togle staus of FAQ item
  const icon = item.children[1];
  item.classList.toggle("open");

  if (item.classList.contains("open")) {
    icon.classList.add("icon-up");
    icon.classList.remove("icon-down");
    icon.setAttribute("name", "chevron-up-outline");
  } else {
    icon.classList.add("icon-down");
    icon.classList.remove("icon-up");
    icon.setAttribute("name", "chevron-down-outline");
  }
}

document.addEventListener("click", (e) => {
  // what faq heading was clicked?
  if (e.target.matches(".accordion .text")) {
    const targetIndex = headings.findIndex((heading) => heading === e.target);
    accordionToggle(items[targetIndex]);
  }

  if (e.target.matches(".accordion .accordion-icon")) {
    const targetIndex = icons.findIndex((icon) => icon === e.target);
    accordionToggle(items[targetIndex]);
  }
});

/***Alternative but less efficient***/
// faqHeading.forEach((heading, i) => {
//   heading.addEventListener("click", (e) => {
//     accordionToggle(items[i]);
//   });

//   faqIcon[i].addEventListener("click", (e) => {
//     accordionToggle(items[i]);
//   });
// });

///////////////////////////////////////////////////////////
//Smooth scrolling animation

// select all anchor elements with the href property
const allLinks = document.querySelectorAll("a:link");

allLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const href = link.getAttribute("href");
    //Scroll back to top
    if (href === "#") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }

    //scrool to other links
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }
  });
});
