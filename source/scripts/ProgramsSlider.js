function init() {
  const swiper = new Swiper(".swiper", {
    direction: "horizontal",
    breakpoints: {
      320: {
        spaceBetween: 30,
        grid: {
          fill: "row",
          rows: 2,
        },
        slidesPerView: 1,
      },
      768: {
        spaceBetween: 30,
        grid: {
          fill: "row",
          rows: 2,
        },
      },
      1440: {
        grid: {
          rows: 1,
        },
        slidesPerView: 2,
        spaceBetween: 80,
      },
    },
  });
}

export { init };
