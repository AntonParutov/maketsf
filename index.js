// Массив картинок с ключ\значениями
const imagesWithParam = [
  {
    url: "./slider_images/image1.png",
    linkCity: "ROSTOV-ON-DON, ADMIRAL",
    city: "Rostov-on-Don<br> LCD admiral",
    apartArea: "81 m2",
    repTime: "3.5 months",
    repCost: "Upon request",
  },
  {
    url: "./slider_images/image2.png",
    linkCity: "SOCHI THIEVES",
    city: "Sochi<br> Thieves",
    apartArea: "105 m2",
    repTime: "4 months",
    repCost: "Upon request",
  },
  {
    url: "./slider_images/image3.png",
    linkCity: "ROSTOV-ON-DON, PATRIOTIC",
    city: "Rostov-on-Don<br> Patriotic",
    apartArea: "93 m2",
    repTime: "3 months",
    repCost: "Upon request",
  },
];

// Функция работы слайдера
function sliderEngine(imagesWithParam) {
  if (!imagesWithParam || !imagesWithParam.length) return;

  // const sliderWrapper = document.querySelector(".completed_projects");
  const sliderImages = document.querySelector(".projects__image");
  const sliderArrows = document.querySelector(".vector_elements");

  initImages();
  function initImages() {
    imagesWithParam.forEach((image, index) => {
      let imageElement = document.createElement("div");
      imageElement.className = `image n${index} ${index ? "" : "active"}`;
      imageElement.dataset.index = index;
      imageElement.style.backgroundImage = `url(${image.url})`;
      sliderImages.appendChild(imageElement);
    });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  sliderEngine(imagesWithParam);
});
