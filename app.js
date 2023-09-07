
const application = Stimulus.Application.start();

application.register("table", class extends Stimulus.Controller {
  static targets = ["row"]


  filter(event) {
    const query = event.target.value.toLowerCase();
    console.log()
    this.rowTargets.forEach((row) => {
      const text = row.textContent.toLowerCase();
      if (text.includes(query)) {
        row.style.display = "";
      } else {
        row.style.display = "none";
      }
    });
  }

});
