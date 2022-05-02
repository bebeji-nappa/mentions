import { changeMentionList } from "./mentionList.js"

export const mentionUpdate = (
  element,
  listElement, 
  list,
  trigger
) => {
  let mode = 0;
  const trigger_mode = 1;
  const text = element.value
  let mentionText = "";

  if (text === "") {
    listElement.style.setProperty("display", "none");
  }
  for (const char of text) {
    if(char.match(trigger)) {
      mode = trigger_mode;
      listElement.style.setProperty("display", "block");
    } else if (char.match(/\s[\r\n|\n|\r]/)) {
      mode = 0;
      listElement.style.setProperty("display", "none");
    } else {
      if(mode === trigger_mode) {
        mentionText += char
      }
    }
    if(mode === trigger_mode) {
      const SEARCH_REGEX = new RegExp(`^${mentionText}.*$`)
      const searchRes = Object.values(list).filter(val => val.key.match(SEARCH_REGEX))
      changeMentionList(element, searchRes ? searchRes : list, listElement, mentionText, trigger);
    }
  }
}

export const mentionOptionalUpdate = (
  element,
  listElement, 
  list,
  textValue = "",
  func = () => {},
  trigger
) => {
  let mode = 0;
  const trigger_mode = 1;
  const text = textValue ? textValue : element.value
  let mentionText = "";

  if (text === "") {
    listElement.style.setProperty("display", "none");
  }
  for (const char of text) {
    if(char.match(trigger)) {
      mode = trigger_mode;
      listElement.style.setProperty("display", "block");
    } else if (char.match(/\s[\r\n|\n|\r]/)) {
      mode = 0;
      listElement.style.setProperty("display", "none");
    } else {
      if(mode === trigger_mode) {
        mentionText += char
      }
    }
    if(mode === trigger_mode) {
      const SEARCH_REGEX = new RegExp(`^(?=.*${mentionText}).*$`)
      const searchRes = Object.values(list).filter(val => val.key.match(SEARCH_REGEX))
      changeMentionList(element, searchRes ? searchRes : list, listElement, mentionText, trigger);
    }
  }
}
