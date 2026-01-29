const form = document.querySelector("form");
const colorsContainer = document.querySelector("#colors-container");

fetch("https://www.thecolorapi.com/scheme?hex=00000")
  .then((response) => response.json())
  .then((data) => renderColorScheme(data.colors));

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(form);
  const data = Object.fromEntries(formData);

  fetch(
    `https://www.thecolorapi.com/scheme?hex=${data.hex.substring(1)}&mode=${data.mode}`,
  )
    .then((response) => response.json())
    .then((data) => renderColorScheme(data.colors));
});

function renderColorScheme(colors) {
  let html = "";

  colors.forEach((color) => {
    const hex = color.hex.value;
    html += `
    <div class="color" style="background-color: ${hex};"></div>
    <p>${hex.toUpperCase()}</p>
    `;
  });

  colorsContainer.innerHTML = html;
}
