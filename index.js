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

  const sliderWrapper = document.querySelector(".slider_wrapper");
  const sliderImages = sliderWrapper.querySelector(".projects__image");
  const sliderArrows = document.querySelector(".vector_elements");

  initImages();
  initArrows();

  function initImages() {
    imagesWithParam.forEach((image, index) => {
      let imageElement = document.createElement("div");
      imageElement.className = `image n${index} ${index ? "" : "active"}`;
      imageElement.dataset.index = index;
      imageElement.style.backgroundImage = `url(${image.url})`;
      sliderImages.appendChild(imageElement);
    });
  }

  function initArrows() {
    let lastIndex = imagesWithParam.length - 1;
    sliderArrows.querySelectorAll(".vector_elements_arrow").forEach((arrow) => {
      arrow.addEventListener("click", function () {
        let curNumber = +sliderImages.querySelector("active").dataset.index;
        let nextNumber;
        if (arrow.classList.containes("left")) {
          nextNumber = curNumber === 0 ? lastIndex : curNumber - 1;
        } else {
          nextNumber = curNumber === lastIndex ? 0 : curNumber + 1;
        }
        moveSlider(nextNumber);
      });
    });
  }

  function moveSlider(num){
    sliderImages.querySelector('.active').classList.remove('active');
    sliderImages.querySelector(`n${num}`).classList.add('active');
  }
}

document.addEventListener("DOMContentLoaded", () => {
  sliderEngine(imagesWithParam);
});
