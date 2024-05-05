function scrollingText(text) {
  return text
    .split("")
    .map((el, i) => (text.slice(i) + text.slice(0, i)).toUpperCase());
}

