const categoryArr = [
  "миру",
  "Англии",
  "Франции",
  "Испании",
  "Исландии",
  "Гренладии",
  "Непалу",
  "Вьетнаму",
];
const continents = [
  "Европу",
  "Aзию",
  "Америку",
  "Арктику",
  "Антарктику",
  "Австралию и Океанию",
];
const wish = ["Путешествуй!", "Удивляйся!", "Живи!"];

const wishList = wish
  .map((wish) => {
    return `<li>${wish}</li>`;
  })
  .join("");

const cardWrapper = document.querySelector(".card-wrapper");
const aside = document.querySelector("aside");
const footerOl = document.querySelectorAll(".footer__point ol");
const footerUl = document.querySelector(".footer__list");

cardWrapper.insertAdjacentHTML(
  "beforeend",
  categoryArr
    .map((category) => {
      return `     
     <div class="card">
    <img
      src="https://avatars.mds.yandex.net/i?id=f985bb8a1cb1e9f7ec807fccaf91205da2d9155e-7975524-images-thumbs&n=13"
      alt="Travel"
    />
    <div class="card__header">Путешествуй по ${category}</div>
    <div class="card__content">
      «Никогда не бойтесь уехать прочь от морей, границ, стран и
      мыслей» – Амин Маалуф.
    </div>
  </div>
`;
    })
    .join("")
);
aside.insertAdjacentHTML(
  "beforeend",
  continents
    .map((continent) => {
      return `     
    <li>Путешествия в ${continent}</li>
    `;
    })
    .join("")
);

footerUl.insertAdjacentHTML("beforeend", wishList);

footerOl.forEach((ol) => {
  ol.insertAdjacentHTML("beforeend", wishList);
});
