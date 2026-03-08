let textOutput = document.querySelector(".text_output");

fetch(
  "https://cors-anywhere.herokuapp.com/https://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=ru",
)
  .then((response) => response.json())
  .then((result) => {
    let text = result.quoteText;
    for (let i = 0; i < text.length; i++) {
      setTimeout(
        () => {
          textOutput.innerText = text.slice(0, i + 1);
        },
        100 * (i + 1),
      );
    }
  });

//https://cors-anywhere.herokuapp.com/corsdemo - временный доступ к серваку который выдает эти гениальные цитаты,
//для коректной работы скрипта надо прожать кнопку с надписью: Request temporary access to the demo server
//и тогда все заработает