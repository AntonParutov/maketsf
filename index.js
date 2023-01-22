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

function sliderEngine(imagesWithParam, options) {
  if (!imagesWithParam || !imagesWithParam.length) return;

  options = options || {
    dots: false,
  };
  const sliderWrapper = document.querySelector(".slider_wrapper");
  const sliderImages = sliderWrapper.querySelector(".projects__image");
  const sliderArrows = document.querySelector(".vector_elements");
  const cityLinks = document.querySelector(".projects_list");
  const dotsWrapper = document.querySelector(".vector_elements_center");
  const cityBlock = document.querySelector(".city_block");
  const apartArea = document.querySelector(".apart_area");
  const repair = document.querySelector(".repair_time");
  const repCost = document.querySelector(".repair_cost");

  initImages();
  initArrows();
  initCityLink();

  if (options.dots) {
    initDots();
  }

  function initImages() {
    imagesWithParam.forEach((image, index) => {

      let imageElement = `<div class="image n${index} ${
        index ? "" : "active"
      }" style="background-image: url(${
        image.url
      })" data-index="${index}"></div>`;
      sliderImages.innerHTML += imageElement;

      let cityLink = `<li class="projects_item n${index} ${
        index ? "" : "active"
      }" data-index="${index}"><a href="javascript:;">${
        imagesWithParam[index].linkCity
      }</a></li>`;
      cityLinks.innerHTML += cityLink;

      let cityProject = `<span class="projects_span n${index} ${
        index ? "" : "active"
      }" data-index="${index}">${imagesWithParam[index].city}</span>`;
      cityBlock.innerHTML += cityProject;

      let apartment = `<span class="projects_span n${index} ${
        index ? "" : "active"
      }" data-index="${index}">${imagesWithParam[index].apartArea}</span>`;
      apartArea.innerHTML += apartment;

      let repairTime = `<span class="projects_span n${index} ${
        index ? "" : "active"
      }" data-index="${index}">${imagesWithParam[index].repTime}</span>`;
      repair.innerHTML += repairTime;

      let repairCost = `<span class="projects_span n${index} ${
        index ? "" : "active"
      }" data-index="${index}">${imagesWithParam[index].repCost}</span>`;
      repCost.innerHTML += repairCost;

    });
  }

  function initCityLink() {
    cityLinks.querySelectorAll(".projects_item").forEach((city) => {
      city.addEventListener("click", function () {
        moveSlider(this.dataset.index);
        cityLinks.querySelector(".active").classList.remove("active");
        this.classList.add("active");
      });
    });
  }

  function initArrows() {
    let lastIndex = imagesWithParam.length - 1;
    sliderArrows.querySelectorAll(".vector_elements_arrow").forEach((arrow) => {
      arrow.addEventListener("click", function () {
        let curNumber = +sliderImages.querySelector(".active").dataset.index;
        let nextNumber;
        if (arrow.classList.contains("left")) {
          nextNumber = curNumber === 0 ? lastIndex : curNumber - 1;
        } else {
          nextNumber = curNumber === lastIndex ? 0 : curNumber + 1;
        }
        moveSlider(nextNumber);
      });
    });
  }

  function moveSlider(num) {
    sliderImages.querySelector(".active").classList.remove("active");
    sliderImages.querySelector(`.n${num}`).classList.add("active");

    dotsWrapper.querySelector(".active").classList.remove("active");
    dotsWrapper.querySelector(`.n${num}`).classList.add("active");

    cityLinks.querySelector(".active").classList.remove("active");
    cityLinks.querySelector(`.n${num}`).classList.add("active");

    cityBlock.querySelector(".active").classList.remove("active");
    cityBlock.querySelector(`.n${num}`).classList.add("active");

    apartArea.querySelector(".active").classList.remove("active");
    apartArea.querySelector(`.n${num}`).classList.add("active");

    repair.querySelector(".active").classList.remove("active");
    repair.querySelector(`.n${num}`).classList.add("active");

    repCost.querySelector(".active").classList.remove("active");
    repCost.querySelector(`.n${num}`).classList.add("active");
  }

  function initDots() {
    imagesWithParam.forEach((image, index) => {
      let dot = document.createElement("div");
      dot.className = `slider_dot n${index} ${index ? "" : "active"}`;
      dot.dataset.index = index;
      dot.addEventListener("click", function () {
        moveSlider(this.dataset.index);
        dotsWrapper.querySelector(".active").classList.remove("active");
        this.classList.add("active");
        
      });
      dotsWrapper.appendChild(dot);
    });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  let sliderDots = {
    dots: true,
  };
  sliderEngine(imagesWithParam, sliderDots);
});
