function App() {
  this.hamburger = document.querySelector(".hamburger");
  this.nav = document.querySelector(".nav");
}
const app = new App();
app.hamburger.onclick = () => {
  app.nav.classList.toggle("nav--closed");
}