

const paragraphs = document.querySelectorAll("p");
 
const lines = [
  "someone is watching.",
  "you don't know who.",
  "they've been watching for a while.",
  "you felt it first in a crowd.",
  "then in an empty room.",
  "then in your own reflection.",
  "you tried to ignore it.",
  "you couldn't.",
  "someone is watching.",
  "someone is watching.",
  "someone is watching.",
];
 
paragraphs.forEach(function(p, i) {
  p.textContent = lines[i % lines.length];
});
 