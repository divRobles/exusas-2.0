let fraseFinal = document.querySelector("#excuse");
let random3;
let random4;
let random5;

const excusita = () => {
  let frase;
  frase = `${who[random4]} ${action[random4]} ${what[random3]} ${when[random5]}`;
  fraseFinal.innerHTML = frase;
};

let who = ["The dog", "My grandma", "His turtle", "My bird"];
let action = ["ate", "peed", "crushed", "broke"];
let what = ["my homework", "the keys", "the car"];
let when = [
  "before the class",
  "right on time",
  "when I finished",
  "during my lunch",
  "while I was praying"
];

window.addEventListener("load", e => {
  random3 = Math.floor(Math.random() * 3);
  random4 = Math.floor(Math.random() * 4);
  random5 = Math.floor(Math.random() * 5);

  excusita();
});
