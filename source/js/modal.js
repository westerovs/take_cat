// Краткое ТЗ:
// Сверстать макет кроссбраузерно (поддержка ie11 не требуется), валидно и адаптивно. На мобильной версии самостоятельно реализовать мобильное меню. По клику на кнопку "Обратная связь" всплывает модальное окно с формой (имя, телефон, кнопка).

let modalWrap = document.querySelector('.modal-wrap');
// let modal

document.querySelectorAll('.modal-show').forEach(function (element) {
  element.onclick = showModal;
});

document.querySelectorAll('.modal-close').forEach(function (element) {
  //закрываем окно по кнопке закрыть
  element.onclick = closeModal;
});

document.querySelectorAll('.modal-wrap').forEach(function (element) {
  //закрыть окно на клике в области вокруг
  modalWrap.onclick = closeModal;
});

function showModal() {
  let modalId = this.dataset.modal;
  document.querySelector(modalId).classList.remove('hide');
  document.onkeydown = function (event) {
    // клавиша Esc
    if (event.keyCode == 27) closeModal();
  }
}

function closeModal() {
  document.querySelectorAll('.modal-wrap').forEach(function (element) {
    element.classList.add('hide');
  });
  document.onkeydown = null;
}

// запрет закрытия окна
document.querySelector('.modal').onclick = function () {
  event.stopPropagation();
}

