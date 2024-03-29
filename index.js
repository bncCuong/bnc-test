/** @format */

const LINK_HEADER = [
  {
    id: 1,
    title: "Store Locator",
    icon: "",
    href: "#",
  },
  {
    id: 2,
    title: "Order Tracking",
    icon: "",
    href: "#",
  },
  {
    id: 3,
    title: "FAQs",
    icon: "",
    href: "#",
  },
];

const MENU_LIST_HEADER = [
  {
    id: 1,
    title: "Home",
    href: "#",
    icon: "fa-sharp fa-solid fa-chevron-down item-icon-header",
  },
  {
    id: 2,
    title: "Shop",
    href: "#",
    icon: "fa-sharp fa-solid fa-chevron-down item-icon-header",
  },
  {
    id: 3,
    title: "Product",
    href: "#",
    icon: "fa-sharp fa-solid fa-chevron-down item-icon-header",
  },
  {
    id: 4,
    title: "Page",
    href: "#",
    icon: "fa-sharp fa-solid fa-chevron-down item-icon-header",
  },
  {
    id: 5,
    title: "Blog",
    href: "#",
    icon: "fa-sharp fa-solid fa-chevron-down item-icon-header",
  },
  {
    id: 6,
    title: "Contact Us",
    href: "#",
    icon: "fa-sharp fa-solid fa-chevron-down item-icon-header",
  },
  { id: 7, title: "Buy Uminex!", href: "#", icon: "" },
];

const MENU_LIST_SIDEBAR = [
  {
    id: 1,
    title: "Computer & Destop",
    href: "#",
    icon: "fa-sharp fa-solid fa-chevron-right item-icon-slider",
  },
  {
    id: 2,
    title: "Laptop & Ipad",
    href: "#",
    icon: "fa-sharp fa-solid fa-chevron-right item-icon-slider",
  },
  {
    id: 3,
    title: "Cameras & Photo",
    href: "#",
    icon: "fa-sharp fa-solid fa-chevron-right item-icon-slider",
  },
  {
    id: 4,
    title: "Smart Phones & Tablets",
    href: "#",
    icon: "fa-sharp fa-solid fa-chevron-right item-icon-slider",
  },
  { id: 5, title: "Home & Kitchen", href: "#", icon: "" },
  {
    id: 6,
    title: "TV & Audios",
    href: "#",
    icon: "fa-sharp fa-solid fa-chevron-right item-icon-slider",
  },
  { id: 7, title: "Health & Beauty", href: "#", icon: "" },
  {
    id: 8,
    title: "Watchs & Eyewear",
    href: "#",
    icon: "fa-sharp fa-solid fa-chevron-right item-icon-slider",
  },
  { id: 9, title: "Top Deal", href: "#", icon: "" },
  { id: 10, title: "Top Selling Products", href: "#", icon: "" },
  { id: 11, title: "Top Featured Products", href: "#", icon: "" },
];

const PRODUCT_LIST = [
  {
    id: 1,
    src: "/access/product1.png",
    title: "Apple iPhone 12 Pro Max 128GB - Unlocked",
    href: "#",
    rate: "/access/rate.png",
    totalRate: 68,
    price: "$128.00",
    oldPrice: "$12.00",
    stock: "In stock 82 products",
    low: false,
    sale: true,
  },
  {
    id: 2,
    src: "/access/product2.png",
    title: "Apple Watch Aluminum Case Pride Edition",
    href: "#",
    rate: "/access/rate.png",
    totalRate: 68,
    price: "$1028.00",
    oldPrice: "",
    stock: "Only 2 left in stock",
    low: true,
    sale: false,
  },
  {
    id: 3,
    src: "/access/product3.png",
    title: "Apple iPhone 12 Pro Max 128GB - Unlocked",
    href: "#",
    rate: "/access/rate.png",
    totalRate: 68,
    price: "$128.00",
    oldPrice: "$12.00",
    stock: "In stock 82 products",
    low: false,
    sale: false,
  },
  {
    id: 4,
    src: "/access/product4.png",
    title: "Apple Watch Aluminum Case Pride Edition",
    href: "#",
    rate: "/access/rate.png",
    totalRate: 68,
    price: "$1028.00",
    oldPrice: "",
    stock: "Only 2 left in stock",
    low: true,
    sale: false,
    new: true,
  },
  {
    id: 5,
    src: "/access/product5.png",
    title: "Apple Watch Aluminum Case Pride Edition",
    href: "#",
    rate: "/access/rate.png",
    totalRate: 68,
    price: "$289.00",
    oldPrice: "",
    stock: "In stock 82 products",
    low: false,
    sale: false,
  },
  {
    id: 6,
    src: "/access/product6.png",
    title: "Apple iPhone 12 Pro Max 128GB - Unlocked",
    href: "#",
    rate: "/access/rate.png",
    totalRate: 68,
    price: "$128.00",
    oldPrice: "$12.00",
    stock: "Only 2 left in stock",
    low: true,
    sale: true,
  },
  {
    id: 7,
    src: "/access/product7.png",
    title: "Apple iPhone 12 Pro Max 128GB - Unlocked",
    href: "#",
    rate: "/access/rate.png",
    totalRate: 68,
    price: "$128.00",
    oldPrice: "$12.00",
    stock: "In stock 82 products",
    low: false,
    sale: true,
  },
  {
    id: 8,
    src: "/access/product8.png",
    title: "Apple iPhone 12 Pro Max 128GB - Unlocked",
    href: "#",
    rate: "/access/rate.png",
    totalRate: 68,
    price: "$128.00",
    oldPrice: "",
    stock: "Only 2 left in stock",
    low: true,
    sale: false,
  },
];

// render list link top-header
const listLink = document.getElementById("link-header");
const linkHTML = LINK_HEADER.map((item) => {
  const aElement = document.createElement("a");
  const liElement = document.createElement("li");
  aElement.textContent = item.title;
  aElement.href = item.href;
  liElement.appendChild(aElement);
  liElement.className = "item-link-header";
  return liElement;
});

linkHTML.forEach((item) => {
  listLink.appendChild(item);
});

// render list menu bottom-header
const menuList = document.getElementById("menu-btm-header");
const mobileMenuList = document.getElementById("mobile-menu-bar");

const menuHTML = MENU_LIST_HEADER.map((item) => {
  const aElement = document.createElement("a");
  const liElement = document.createElement("li");
  const iElement = document.createElement("i");
  aElement.textContent = item.title;
  iElement.className = item.icon;
  aElement.href = item.href;
  liElement.appendChild(aElement);
  liElement.appendChild(iElement);
  liElement.className = "item-menu-header";
  if (aElement.textContent === "Buy Uminex!") aElement.style.color = "red";
  return liElement;
});

menuHTML.forEach((item) => {
  menuList.appendChild(item);
});

const mobileMenuHTML = MENU_LIST_HEADER.map((item) => {
  const aElement = document.createElement("a");
  const liElement = document.createElement("li");
  const iElement = document.createElement("i");
  aElement.textContent = item.title;
  iElement.className = item.icon;
  aElement.href = item.href;
  liElement.appendChild(aElement);
  liElement.appendChild(iElement);
  liElement.className = "item-menu-header";
  if (aElement.textContent === "Buy Uminex!") aElement.style.color = "red";
  return liElement;
});

mobileMenuHTML.forEach((item) => {
  mobileMenuList.appendChild(item);
});

//render list menu sidebar
const menuSlider = document.getElementById("menu-sidebar");

const menuSliders = MENU_LIST_SIDEBAR.map((item) => {
  const aElement = document.createElement("a");
  const liElement = document.createElement("li");
  const iElement = document.createElement("i");
  aElement.textContent = item.title;
  iElement.className = item.icon;
  aElement.href = item.href;
  liElement.appendChild(aElement);
  liElement.appendChild(iElement);
  liElement.className = "item-menu-slider";

  return liElement;
});

menuSliders.forEach((item) => {
  menuSlider.appendChild(item);
});

//render list product

const group1 = document.getElementById("group1");

group1.innerHTML = PRODUCT_LIST.map((item) => {
  return item.id < 5
    ? `<div class="product-item">
        ${item.sale == true ? `<div class="product-sale">-20%</div>` : ""} 
        ${item.new == true ? `<div class="product-new">NEW</div>` : ""} 
        <img src="${item.src}" alt="product-image" />
        <h1 class="product-name">${item.title}</h1>
        <img src="${
          item.rate
        }" alt="rate-image" /> <span class="product-rate">(${
        item.totalRate
      })</span>
        <p class="product-price ${item.oldPrice ? "has-old-price" : ""}">${
        item.price
      } <span class="product-old-price">${item.oldPrice}</span></p>
        ${
          item.stock &&
          `<p class="${item.low == true ? "stock-low" : "stock-normal"}">
          <i class="fa-solid fa-check"></i>
          ${item.stock}</p>`
        }
    </div>`
    : "";
}).join("");

const group2 = document.getElementById("group2");

group2.innerHTML = PRODUCT_LIST.map((item) => {
  return item.id >= 5
    ? `<div class="product-item">
        ${item.sale == true ? `<div class="product-sale">-20%</div>` : ""} 
        ${item.new == true ? `<div class="product-new">NEW</div>` : ""} 
        <img src="${item.src}" alt="product-image" />
        <h1 class="product-name">${item.title}</h1>
        <img src="${
          item.rate
        }" alt="rate-image" /> <span class="product-rate">(${
        item.totalRate
      })</span>
        <p class="product-price ${item.oldPrice ? "has-old-price" : ""}">${
        item.price
      } <span class="product-old-price">${item.oldPrice}</span></p>
        ${
          item.stock &&
          `<p class="${item.low == true ? "stock-low" : "stock-normal"}">
          <i class="fa-solid fa-check"></i>
          ${item.stock}</p>`
        }
    </div>`
    : "";
}).join("");

const toggleBtn = document.getElementById("toggle-menu-bar");
const dropDownMenu = document.getElementById("mobile-menu-bar");
const toggleImg = document.querySelector("#toggle-menu-bar img");

toggleBtn.onclick = function () {
  dropDownMenu.classList.toggle("open");
  const isOpen = dropDownMenu.classList.contains("open");
  toggleImg.src = !isOpen ? "access/bar.png" : "access/X.png";
};
