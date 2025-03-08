class Radio {
  constructor({ label, id, group, position = "right", disabled = false }) {
    this.template = document.getElementById("radio-template").content.cloneNode(true);
    this.radio = this.template.querySelector("input");
    this.labelElement = this.template.querySelector(".radio-label");

    // Assign attributes
    this.id = id;
    this.name = group;
    this.disabled = disabled;
    this.labelElement.textContent = label;

    // Adjust label position
    if (position === "left") {
      this.labelElement.before(this.radio);
    } else if (position === "none") {
      this.labelElement.remove();
    }

    // Append to container
    document.getElementById("radio-container").appendChild(this.template);
  }
}

// Example Usage
new Radio({ label: "", id: "radio-nolabel", group: "topcoat", position: "none" });
new Radio({ label: "Left label", id: "radio-left", group: "topcoat", position: "left" });
new Radio({ label: "Right label", id: "radio-right", group: "topcoat", position: "right" });
new Radio({ label: "Disabled", id: "radio-disabled", group: "topcoat", disabled: true });