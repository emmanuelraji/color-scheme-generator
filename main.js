const getColorBtn = document.querySelector("button");
const colorsWrapper = document.getElementById("colors-wrapper");

onload = () => getColors("000000", "monochrome");

getColorBtn.addEventListener("click", (e) => {
  const colorInput = document.getElementById("color");
  const hexColor = colorInput.value.substring(1, colorInput.value.length);
  const selectorInput = document.querySelector("select").value;

  getColors(hexColor, selectorInput);
});

function getColors(hex, mode) {
  fetch(`https://www.thecolorapi.com/scheme?hex=${hex}&mode=${mode}&count=5`)
    .then((response) => response.json())
    .then((data) => renderColors(data.colors));
}

function renderColors(colors) {
  let html = "";
  for (let color of colors) {
    html += `
        <img src=${color.image.bare} alt="${color.name.value} background" />
        <p>${color.hex.value.toUpperCase()}</p>
    `;
  }
  colorsWrapper.innerHTML = html;
}
