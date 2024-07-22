import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="visibility"
export default class extends Controller {
  static values = {
    visible: Boolean
    // visible: { type: Boolean, default: false}
  }
  connect() {
    this.updateVisibility()
  }

  visibleValueChanged() {
    this.updateVisibility()
  }

  updateVisibility() {
    if (this.visibleValue)
      this.element.style.display = "block";
    else {
      this.element.style.display = "none";
    }
  }
}
