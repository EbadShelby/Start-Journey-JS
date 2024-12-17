const inputElement = document.querySelector(".js-first-list");
const dateInputElement = document.querySelector(".js-date");

const listItems = JSON.parse(localStorage.getItem("list")) || [];
renderList();

function renderList() {
  let listItemHTML = "";
  for (let i = 0; i < listItems.length; i++) {
    const item = listItems[i];
    // const name = item.name;
    // const dueDate = item.dueDate;
    const { name, dueDate } = item;

    const html = `
      <p class="item">
        ${name}
      </p>
      <p class="due-date">
        ${dueDate}
      </p>
      <button class="red-button" onclick="
        deleteItem(${i});
        ">Delete
      </button>
    `;
    listItemHTML += html;
  }
  document.querySelector(".js-item-list").innerHTML = listItemHTML;
}

function addItem() {
  const item = inputElement.value;
  const dueDate = dateInputElement.value;
  listItems.push({
    name: item,
    dueDate,
  });
  localStorage.setItem("list", JSON.stringify(listItems));
  inputElement.value = "";
  dateInputElement.value = "";

  renderList();
}

function deleteItem(index) {
  listItems.splice(index, 1);

  localStorage.setItem("list", JSON.stringify(listItems));
  renderList();
}
