var i = 0;
var introText = "Hello there, welcome to my website!";
var introText2 = "Feel free to look around!";
var typingSpeed = 75;

function typeWriter() {
  if (i < introText.length) {
    document.getElementById("typing-text").innerHTML += introText.charAt(i);
    i++;
    setTimeout(typeWriter, typingSpeed);
  } else {
    i = 0;
    typeWriter2();
  }
}

function typeWriter2() {
  if (i < introText2.length) {
    document.getElementById("typing-text2").innerHTML += introText2.charAt(i);
    i++;
    setTimeout(typeWriter2, typingSpeed);
  }
}
