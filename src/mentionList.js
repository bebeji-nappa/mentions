export const createMentionList = (element, mentionList, trigger) => {
  const listWrap = document.createElement("div");
  listWrap.setAttribute("id", "mentions-js-list-wrap");
  listWrap.style.setProperty("position", "absolute");
  listWrap.style.setProperty("display", "none");
  mentionList.forEach((listData) => {
    const button = document.createElement("button");
    const li = document.createElement("li");
    button.innerHTML = listData.key;
    li.appendChild(button)
    listWrap.appendChild(li);
  });
  return listWrap;
}

export const changeMentionList = (element, mentionList, listWrap, mentionText, trigger) => {
  while(listWrap.firstChild){
    listWrap.removeChild(listWrap.firstChild);
  }
  mentionList.forEach((listData) => {
    const MENTION_REGEX = new RegExp(`^${trigger}${mentionText}.*$/g`)
    const button = document.createElement("button");
    const li = document.createElement("li");
    button.innerHTML = listData.key;
    button.addEventListener("click", () => {
      if (element.value === trigger) {
        element.value += listData.key;
        listWrap.style.setProperty("display", "none");
      } else if (mentionText) {
        element.value = element.value.replace(`${trigger}${mentionText}`, `${trigger}${listData.key}`);
        listWrap.style.setProperty("display", "none");
      }
    })
    li.appendChild(button)
    listWrap.appendChild(li);
  });
  return listWrap;
}
