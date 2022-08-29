class Player {
  // создать iframe, вставить на текущую страницу,
  // передать в iframe src
  constructor(link) {
    this.link = link;
    this.body = document.querySelector("body");
  }
  getLink() {
    console.log(this.link);
    console.log(this.body);
  }
  createFrame() {
    this.wrapper = document.createElement("section");
    this.wrapper.classList.add("playerWrapper");
    this.iframe = document.createElement("iframe");
    this.iframe.setAttribute("src", "http://localhost:3000");
    this.iframe.classList.add("playerFrame");
    this.wrapper.append(this.iframe);
    this.body.append(this.wrapper);
  }
}
