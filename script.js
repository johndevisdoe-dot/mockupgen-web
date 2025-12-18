const upload = document.getElementById("upload");
const grid = document.getElementById("grid");

function generateMockups() {
  grid.innerHTML = "";

  const file = upload.files[0];
  if (!file) {
    alert("Upload an image first");
    return;
  }

  const reader = new FileReader();
  reader.onload = function (e) {
    const src = e.target.result;

    for (let i = 0; i < 10; i++) {
      const card = document.createElement("div");
      card.className = "mockup";

      const img = document.createElement("img");
      img.src = src;

      const scale = 1 + Math.random() * 0.1;
      const rotate = Math.random() * 4 - 2;

      img.style.transform =
        `scale(${scale}) rotate(${rotate}deg)`;

      img.style.boxShadow =
        "0 15px 30px rgba(0,0,0,0.15)";

      card.appendChild(img);
      grid.appendChild(card);
    }
  };

  reader.readAsDataURL(file);
    }
