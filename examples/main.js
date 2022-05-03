import Mentions from "./src/index.js";

const mention = new Mentions({
  values: [
    {key: "aaa", value: "AAA"},
    {key: "bbb", value: "BBB"},
    {key: "ccc", value: "CCC"},
  ] 
});

const textarea = document.getElementById("textArea");
mention.attach(textarea);

textarea.addEventListener("input", () => {
  mention.search(textarea);
  console.log(textarea.selectionStart)
})
