function showAndHide(n) {
    className = '.' + n
    const container = document.querySelector(className);
        if (container.classList.contains('container--active')) {
          container.classList.remove('container--active');
          container.style.maxHeight = 0;
        } else {
          container.classList.add('container--active');
          container.style.maxHeight = container.scrollHeight + 'px';
        }
}


