const tabItem = document.querySelectorAll('.tab-item');
const tabContItem = document.querySelectorAll('.tab-content-item');

function selectItem(e) {
  removeborder();
  removeShowClass();
  this.classList.add('tab-border');

  const tabContItems = document.querySelector(`#${this.id}-content`);
  console.log(this.id);
  tabContItems.classList.add('show');
}

function removeborder() {
  tabItem.forEach((item) => item.classList.remove('tab-border'));
}

function removeShowClass() {
  tabContItem.forEach((item) => item.classList.remove('show'));
}

tabItem.forEach((item) => item.addEventListener('click', selectItem));
