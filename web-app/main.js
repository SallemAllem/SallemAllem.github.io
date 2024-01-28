



const button = document.querySelector('.bt1');
const button2 = document.querySelector('.bt2');
const container = document.querySelector('.container');
const container2 = document.querySelector('.container2');

button.addEventListener('click', () => {
  if (container.classList.contains('container--active')) {
    container.classList.remove('container--active');
    container.style.maxHeight = 0;
  } else {
    container.classList.add('container--active');
    container.style.maxHeight = container.scrollHeight + 'px';
  }
});

button2.addEventListener('click', () => {
    if (container2.classList.contains('container--active')) {
      container2.classList.remove('container--active');
      container2.style.maxHeight = 0;
    } else {
      container2.classList.add('container--active');
      container2.style.maxHeight = container2.scrollHeight + 'px';
    }
  });

