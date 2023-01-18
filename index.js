const slider = document.querySelector("#slider");
const sliderItems = Array.from(slider.children);
const btnNext = document.querySelector("#btnNext");
const btnPrev = document.querySelector("#btnPrev");

sliderItems.forEach(function (slide, index) {
  if (index !== 0) slide.classList.add("hidden");

  // добавляем индексы
  slide.dataset.index = index;

  // добавляем data атрибут active для первого/активного слайда
  sliderItems[0].setAttribute("data-active", "");

  // клик по слайду
  slide.addEventListener("click", function () {
    // скрываем текущий слайд
    slide.classList.add("hidden");
    slide.removeAttribute("data-active");

    // рассчитываем индекс след слайда
    let nextSlideIndex = index + 1 === sliderItems.length ? 0 : index + 1;

    // находим след слайд
    const nextSlide = slider.querySelector(`[data-index='${nextSlideIndex}']`);

    // отображаем след слайд
    nextSlide.classList.remove("hidden");
    nextSlide.setAttribute("data-active", "");
  });
});

btnNext.onclick = function () {
  // скрываем текущий слайд
  const currentSlide = slider.querySelector("[data-active]");
  const currentSlideIndex = +currentSlide.dataset.index;

  currentSlide.classList.add("hidden");
  currentSlide.removeAttribute("data-active");

  // показываем след слайд
  let nextSlideIndex = currentSlideIndex + 1 === sliderItems.length ? 0 : currentSlideIndex + 1;
  const nextSlide = slider.querySelector(`[data-index='${nextSlideIndex}']`);

  nextSlide.classList.remove('hidden');
  nextSlide.setAttribute('data-active', '');
};

btnPrev.onclick = function () {
  // скрываем текущий слайд
  const currentSlide = slider.querySelector("[data-active]");
  const currentSlideIndex = +currentSlide.dataset.index;

  currentSlide.classList.add("hidden");
  currentSlide.removeAttribute("data-active");

  // показываем пред слайд
  let nextSlideIndex =
    currentSlideIndex === 0 ? sliderItems.length - 1 : currentSlideIndex - 1;
  const nextSlide = slider.querySelector(`[data-index='${nextSlideIndex}']`);

  nextSlide.classList.remove("hidden");
  nextSlide.setAttribute("data-active", "");
};
