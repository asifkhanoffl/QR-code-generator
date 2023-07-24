const frm = document.querySelector("#frm");
const output = document.querySelector(".output");
const spnning = document.querySelector("#loader");
const qrcodeElement = document.querySelector("#qrcode");
const btn_save = document.querySelector("#btn-save");

function generateQRCode(e) {
  e.preventDefault();
  const url = document.querySelector("#url").value;
  const size = document.querySelector("#size").value;
  const clrDark = document.querySelector("#dark").value;
  const clrLight = document.querySelector("#light").value;
  if (url === "") {
    alert("please enter valid url");
  } else {
    //show spinner
    spnning.style.display = "flex";
    setTimeout(() => {
      spnning.style.display = "none";
      qrcodeElement.innerHTML = "";

      const qrcode = new QRCode("qrcode", {
        text: url,
        width: size,
        height: size,
        colorDark: clrDark,
        colorLight: clrLight,
        correctLevel: QRCode.CorrectLevel.H,
      });
    }, 1000);
    createDownloadLink();
  }
}

function createDownloadLink() {
  const imgsrc = qrcodeElement.querySelector("img").src;
  btn_save.href = imgsrc;
}
frm.addEventListener("submit", generateQRCode);

btn_save.addEventListener("click", () => {
  setTimeout(() => {
    btn_save.download = "qrcode";
  }, 50);
});
