AFRAME.registerComponent("base", {
    schema: {
      radius: { type: "number", default: 140 },
      height: { type: "number", default: 4 }
    },
    init: function() {
      this.el.setAttribute("geometry", {
        primitive: "cylinder",
        radius: this.data.radius,
        height: this.data.height
      });
      this.el.setAttribute("material", { color: "#1769aa" });
    }
});