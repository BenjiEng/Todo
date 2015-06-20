totalItems = 0;

var inputItemText = document.getElementById("input-text");
inputItemText.focus();
inputItemText.onkeyup = function(event) {
    if (event.which == 13) {
      var itemText = inputItemText.value;
      addNewItem(document.getElementById("todoList"), itemText);
      inputItemText.focus();
      inputItemText.select();
    }
};

function addNewItem (list, itemText) {
  totalItems++;

  var listItem = document.createElement("li");

  var check = document.createElement("input");
  check.type = "checkbox";
  check.id = "checkbox " + totalItems;
  check.onclick = crossOut;

  var span = document.createElement("span");
  span.id = "item " + totalItems;
  span.innerText = itemText;

  listItem.appendChild(check);
  listItem.appendChild(span);

  list.appendChild(listItem);
};

function crossOut () {
  var checkId = this.id.replace("checkbox ", "");
  var itemText = document.getElementById("item " + checkId);
  if (this.checked) {
    itemText.style.textDecoration = "line-through";
  } else {
    itemText.style.textDecoration = "none";
  }
};
