const slider = (slider, slide, slideActive = "portfolio-item-active", dotsActive = "dot-active") => {
  const sliderBlock = document.querySelector(slider);
  const slides = document.querySelectorAll(slide);

  const timeInterval = 3000;

  let currentSlide = 0;
  let interval;
  let arrDots;

  const addDots = () => {
    const dotsBlock = document.querySelector(".portfolio-dots");

    for (let dot = 0; dot <= slides.length - 1; dot++) {
      const newDot = document.createElement("li");
      dotsBlock.append(newDot);
    }
    arrDots = Array.from(dotsBlock.querySelectorAll("li"));

    arrDots.forEach((dot, index) => {
      if (index === 0) {
        dot.classList.add("dot", "dot-active");
      } else {
        dot.classList.add("dot");
      }
    });
  };

  const prevSlide = (elems, index, strClass) => {
    elems[index].classList.remove(strClass);
  };

  const nextSlide = (elems, index, strClass) => {
    elems[index].classList.add(strClass);
  };

  const autoSlide = () => {
    prevSlide(slides, currentSlide, slideActive);
    prevSlide(arrDots, currentSlide, dotsActive);

    currentSlide++;

    if (currentSlide >= slides.length) {
      currentSlide = 0;
    }

    nextSlide(slides, currentSlide, slideActive);
    nextSlide(arrDots, currentSlide, dotsActive);
  };

  const startSlide = () => {
    if (
      document.querySelector(slider, slide) !== null
    ) {
      interval = setInterval(autoSlide, timeInterval);
    } else {
      return;
    }
  };

  const stopSlide = () => {
    clearInterval(interval);
  };

  const switchSlider = (e) => {
    e.preventDefault();

    if (!e.target.matches(".dot , .portfolio-btn")) {
      return;
    }
    prevSlide(slides, currentSlide, "portfolio-item-active");
    prevSlide(arrDots, currentSlide, "dot-active");

    if (e.target.matches("#arrow-right")) {
      currentSlide++;
    } else if (e.target.matches("#arrow-left")) {
      currentSlide--;
    } else if (e.target.classList.contains("dot")) {
      arrDots.forEach((dot, index) => {
        if (e.target === dot) {
          currentSlide = index;
        }
      });
    }

    if (currentSlide >= slides.length) {
      currentSlide = 0;
    }

    if (currentSlide < 0) {
      currentSlide = slides.length - 1;
    }

    nextSlide(slides, currentSlide, "portfolio-item-active");
    nextSlide(arrDots, currentSlide, "dot-active");
  };

  sliderBlock.addEventListener("click", switchSlider);
  sliderBlock.addEventListener(
    "mouseenter",
    (e) => {
      if (e.target.matches(".dot , .portfolio-btn")) {
        stopSlide();
      }
    },
    true
  );
  sliderBlock.addEventListener(
    "mouseleave",
    (e) => {
      if (e.target.matches(".dot , .portfolio-btn")) {
        startSlide(timeInterval);
      }
    },
    true
  );

  addDots();
  startSlide();
};

export default slider;
