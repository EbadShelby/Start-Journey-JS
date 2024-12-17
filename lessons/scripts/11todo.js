const inputElement = document.querySelector(".js-first-list");
const dateInputElement = document.querySelector(".js-date");

const listItems = [{ name: "eat", dueDate: "2024-15-11" }];
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
        listItems.splice(${i}, 1);
        renderList();
        
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
  inputElement.value = "";
  dateInputElement.value = "";

  renderList();
}
