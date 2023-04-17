alert("Vamos brincar de adivinhação? Eu penso em um número e você tem que adivinhar qual é!")

alert('Pronto. Já pensei!')

function show(phrase) {
      document.getElementById("result").innerHTML = phrase;
      document.getElementById("reload").innerHTML = "Recarregue a página para jogar novamente!";
      document.getElementById("guess", "button").disabled = true;
}

function showText(text) {
    document.getElementById("sNum").innerHTML = text;
}

function showAttempts(number) {
    document.getElementById("numAttempts").innerHTML = number;
}

let attempts = 0;
let secretNum = Math.floor(Math.random() * 1000) + 1;

let input = document.querySelector("input");
input.focus();

document.getElementById("button").addEventListener("click", function nAttempts(){
        attempts++;
        document.getElementById("numAttempts").innerHTML = attempts;
 
});

document.getElementById("button").addEventListener("click", function check() {
        while(attempts <= 10) {
            if(input.value == secretNum) {
                show("ACERTOOOOU!! Parabéns.");
                showText("");
                showAttempts(`Você adivinhou na tentativa ${attempts}`);
                break;
            } else if(attempts == 10) {
                show("Não foi dessa vez.");
                document.getElementById("sNum").innerHTML = `Eu pensei no número ${secretNum}`;
                showAttempts("Acabou suas chances");
                break;
            } else if (!input.value) {
                showText("Você tem que digitar um número");
                break;
            } else if (input.value > secretNum) {
                showText(`O número é menor que ${input.value}. Tente outra vez`);
                break;
            } else {
                showText(`O número é maior que ${input.value}. Tente outra vez`);
                break;
            }
        } 
        input.value = "";
        input.focus();
  });