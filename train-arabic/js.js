let text = ''; // Переменная для хранения текста
let textReset = ''; // Переменная для хранения текста
let text2 = [];
let currWord = '';
let currentIndex = 0;
let currIndex = 0;
let lettersCount = 0;
let withSpace = false;

window.onload = function() {
    text = document.getElementById('textDiv').innerText.split(" "); // Сохранение текста при загрузке страницы
    textReset = document.getElementById('textDiv').innerText; // Сохранение текста при загрузке страницы
    text2 = document.getElementById('textDiv').innerText.split(" "); // Сохранение текста при загрузке страницы
    currWord = text[0]
    console.log(text)
  };

function hideText(n) {
  const buttons = document.querySelectorAll(`#id${n}`);
  hideButton = document.querySelectorAll(`#idHide${n}`);
  hideButton.forEach(button => {
    button.disabled = true; // Делаем кнопку активной
    // Можно также добавить другие операции с кнопками здесь, если нужно
});

// Преобразуем полученные элементы в массив и делаем их активными
buttons.forEach(button => {
    button.disabled = false; // Делаем кнопку активной
    // Можно также добавить другие операции с кнопками здесь, если нужно
});


  text = document.getElementById(n).innerText.split(" "); // Сохранение текста при загрузке страницы
    textReset = document.getElementById(n).innerText; // Сохранение текста при загрузке страницы
    text2 = document.getElementById(n).innerText.split(" "); // Сохранение текста при загрузке страницы
    currWord = text[0]
    console.log(text)
    // document.getElementById('textP').style.display = 'none';
    document.getElementById(n).innerText = ""

    
}

function reset(n) {
  document.getElementById(n).innerText = textReset
  text = textReset.split(" ");
  currWord = text[0]
  text2 = textReset.split(" ");
  currentIndex = 0;
  currIndex = 0;
  lettersCount = 0;
  withSpace = false;
}

function revealLetter(n) {
    // if (text[currIndex] == " ") {
    //   withSpace = true
    //   text2.shift()
    //   currIndex++
    //   lettersCount = 0
    //   return
    // }
    if (currWord.length == 1) {
      withSpace = true
      document.getElementById(n).innerText += currWord[0]
      text.shift()
      currWord = text[0]
      if (text.length == 0) {
        revealAll(n)
      }
      return
    }
    if (withSpace) {
      withSpace = false
      document.getElementById(n).innerText += " " + currWord[0]
      currWord = currWord.substring(1)
      if (text.length == 0) {
        revealAll(n)
      }
      return
    } else {
      document.getElementById(n).innerText += currWord[0]
      currWord = currWord.substring(1)
      if (text.length == 0) {
        revealAll(n)
      }
      return
    }
    
}

function revealWord(n) {
  if (currWord.length == 1) {
    withSpace = true
    document.getElementById(n).innerText += currWord
    text.shift()
    currWord = text[0]
    if (text.length == 0) {
      revealAll(n)
    }
    return
  }
  if (withSpace) {
    withSpace = true
    document.getElementById(n).innerText += " " + currWord
    text.shift()
    currWord = text[0]
    if (text.length == 0) {
      revealAll(n)
    }
    return
  } else {
    withSpace = true
    document.getElementById(n).innerText += currWord
    text.shift()
    currWord = text[0]
    if (text.length == 0) {
      revealAll(n)
    }
    return
  }
}

function revealAll(n) {
  document.getElementById(n).innerText = textReset
  text = textReset.split(" ");
  currWord = text[0]
  text2 = textReset.split(" ");
  currentIndex = 0;
  currIndex = 0;
  lettersCount = 0;
  withSpace = false;

  const buttons = document.querySelectorAll(`#id${n}`);
  hideButton = document.querySelectorAll(`#idHide${n}`);
  hideButton.forEach(button => {
    button.disabled = false; // Делаем кнопку активной
    // Можно также добавить другие операции с кнопками здесь, если нужно
});

// Преобразуем полученные элементы в массив и делаем их активными
buttons.forEach(button => {
    button.disabled = true; // Делаем кнопку активной
    // Можно также добавить другие операции с кнопками здесь, если нужно
});
}
