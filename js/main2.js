// событие и вызов обработчика
let images = [...document.querySelectorAll('.slider__img')];
images.forEach(function(item) {
  item.addEventListener('click', e => handler(e.target))
});

// событие для стрелок
document.querySelectorAll('.arrow').forEach(function(button) {
  button.addEventListener('click', e => handlerButton(e.target));
});

let elem_prev, elem_next;
  
// обработчик на стрелки
function handlerButton(button) {
  let i = images.findIndex(item => item.classList.contains('big'));
  elem_prev = images[i];
  elem_prev.classList.remove('big');

  if (button.classList.contains('arrow__left')) {
    if (i == 0)
      elem_next = images[i];
    else
      elem_next = images[i - 1];
  } 
  
  if (button.classList.contains('arrow__right')) {
    if (i == images.length - 1)
      elem_next = images[i];
    else
      elem_next = images[i + 1];
  }
  
  changeOrder(elem_prev, elem_next);
}

// обработчик на клик по превью
function handler(elem_next) {
  let elem_prev = document.querySelector('.big');
  changeOrder(elem_prev, elem_next);
}

// меняем местами малую с большой
function changeOrder(elem_prev, elem_next) {
  elem_prev.classList.remove('big');
  elem_prev.style.order = window.getComputedStyle(elem_next).order;
  elem_next.classList.add('big');
}
