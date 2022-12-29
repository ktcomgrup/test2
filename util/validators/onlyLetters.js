function onlyLetters(text) {
  return String(text).match(/^[A-Za-z]+$/);
}

export default onlyLetters;