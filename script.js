const dropBox = document.querySelector(".drop-box");
const imgInput = document.querySelector(".img-input");
const uploadImgs = document.querySelector(".upload-imgs");

// 드래그 앤 드롭 이벤트 처리
dropBox.addEventListener("dragover", (e) => {
  e.preventDefault();
  dropBox.style.backgroundColor = "#eee";
});

dropBox.addEventListener("dragleave", () => {
  dropBox.style.backgroundColor = "#fff";
});

dropBox.addEventListener("drop", (e) => {
  e.preventDefault();
  dropBox.style.backgroundColor = "#fff";
  const files = Array.from(e.dataTransfer.files);
  files.forEach((file) => {
    if (file.type.startsWith("image")) {
      displayImage(file);
    }
  });
});

// 파일 입력 필드 변경 이벤트 처리
imgInput.addEventListener("change", () => {
  const files = Array.from(imgInput.files);
  files.forEach((file) => {
    if (file.type.startsWith("image")) {
      displayImage(file);
    }
  });
});

// 이미지 표시 함수
function displayImage(file) {
  const reader = new FileReader();
  reader.onload = () => {
    const img = document.createElement("img");
    img.src = reader.result;
    img.alt = "업로드된 이미지";
    img.style.maxWidth = "300px";
    img.style.margin = "10px";
    uploadImgs.appendChild(img);
  };
  reader.readAsDataURL(file);
}
