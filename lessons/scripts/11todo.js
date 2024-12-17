const inputElement = document.querySelector(".js-first-list");

const listItem = ["eat"];
renderList();

function renderList() {
  let listItemHTML = "";
  for (let i = 0; i < listItem.length; i++) {
    const item = listItem[i];
    const html = `<p>${item}</p>`;
    listItemHTML += html;
  }
  document.querySelector(".js-item-list").innerHTML = listItemHTML;
}

function addItem() {
  const item = inputElement.value;
  listItem.push(item);
  console.log(listItem);
  inputElement.value = "";

  renderList();
}
