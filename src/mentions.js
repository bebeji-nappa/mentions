import { createMentionList } from "./mentionList.js"
import { mentionUpdate, mentionOptionalUpdate } from "./metionEvent.js"
class Mentions {
  constructor({
    values = [],
    trigger = "@",
  }) {
    this.list = values;
    this.settings = {
      trigger: trigger,
    };
  }

  attach(element) {
    const listElement = createMentionList(this.list, element);
    element.style.setProperty("position", "relative");
    element.parentNode.insertBefore(listElement, element.nextElementSibling);
  }

  search(element) {
    mentionUpdate(element, document.getElementById("mentions-js-list-wrap"), this.list, this.settings.trigger);
  }

  optionalSearch(element) {
    mentionOptionalUpdate(element, document.getElementById("mentions-js-list-wrap"), this.list, element.value, () => {}, this.settings.trigger);
  }
}

export default Mentions;
