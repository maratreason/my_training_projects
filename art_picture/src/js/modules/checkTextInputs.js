const checkTextInputs = selector => {
  const txtInputs = document.querySelectorAll(selector)

  txtInputs.forEach(input => {
    input.addEventListener("keypress", event => {
      if (event.key.match(/[^а-яё 0-9]/gi)) {
        event.preventDefault()
      }
    })
  })
}

export default checkTextInputs

/**
 * Сделать возможность ставить знаки препинания
 *
 * Сделать невозможность вставить скопированную информацию на латинице.
 */
