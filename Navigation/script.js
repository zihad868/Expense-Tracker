const para = document.createElement("p");
const text = document.createTextNode("Hello");

para.appendChild(text);

const element = document.getElementById('test');
element.appendChild(para)