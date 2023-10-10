const one = document.querySelector(".section200vh");
const two = document.querySelector(".section100vh");

const firstWP = new Waypoint({
  element: one,
  handler: function (direction) {
    if (direction == "down") {
      alert(
        `Are you sure ? 
Things are wild down there`
      );
    }
  },
  offset: "-95%",
});

const secondWP = new Waypoint({
  element: two,
  handler: function (direction) {
    if (direction == "up") {
      alert("I told you ! ");
    }
  },
});
