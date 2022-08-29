console.log("script");
document.querySelectorAll("a").forEach((selector) => {
  selector.addEventListener(
    "click",
    function (e) {
      e.preventDefault();
      const linkArr = e.target.getAttribute("href").split("/");
      const link = linkArr[linkArr.length - 1]
      const player = new Player(link);
        player.createFrame()
    },
    false
  );
});
