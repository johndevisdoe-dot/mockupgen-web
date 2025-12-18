const uploadInput = document.getElementById("upload");
const previewDiv = document.getElementById("preview");

function generateMockups() {
  previewDiv.innerHTML = "";

  const file = uploadInput.files[0];
  if (!file) {
    alert("Please upload an image first");
    return;
  }

  const reader = new FileReader();
  reader.onload = function (e) {
    const imageSrc = e.target.result;

    // 10 mockups generate kar rahe hain (fake AI look but professional)
    for (let i = 1; i <= 10; i++) {
      const img = document.createElement("img");
      img.src = imageSrc;

      // Thoda thoda random styling = different mockups
      img.style.transform = `rotate(${Math.random() * 4 - 2}deg) scale(${1 + Math.random() * 0.05})`;
      img.style.boxShadow = `0 10px 30px rgba(0,0,0,0.${i})`;
      img.style.background = "#fff";
      img.style.padding = "10px";

      previewDiv.appendChild(img);
    }
  };

  reader.readAsDataURL(file);
        }
