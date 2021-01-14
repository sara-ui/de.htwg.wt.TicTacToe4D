import { Workbox } from "workbox-window";

let wb;

if ("serviceWorker" in navigator) {
  console.log('test')
  wb = new Workbox(`${process.env.BASE_URL}/assets/service-worker.js`);

  wb.addEventListener("controlling", () => {
    window.location.reload();
  });

  wb.register();
} else {
  wb = null;
}

export default wb;