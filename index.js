// Info to reach API, DOM selectors
const adviceSlipUrl = "https://api.adviceslip.com/advice";
const adviceNumber = document.getElementById("advice-num");
const randQuote = document.querySelector(".quote-wrapper");
const quoteBtn = document.getElementById("quote-generator");
// event listener to fire API fetch
const handleClick = quoteBtn.addEventListener("click", function() {
  getRandQuote();
});

// set empty strings for the inner text properties
// to auto-populate when the data is obtained

const getRandQuote = async () => {
  regenId = "";
  regenQuote = "";
  adviceNumber.innerText = regenId;
  randQuote.innerText = regenQuote;
  try {
    const response = await fetch(adviceSlipUrl, { cache: "no-cache" });
    if (response.ok) {
      const jsonResponse = await response.json();
      //   console.log(jsonResponse);
      //   console.log(typeof(jsonResponse));
      let quoteId = jsonResponse.slip.id;
      // console.log(quoteId);
      let quote = jsonResponse.slip.advice;
      //   console.log(quote);
      adviceNumber.innerText += `${quoteId}`;
      randQuote.innerText += `${quote}`;
    }
  } catch (error) {
    alert(error);
  }
};
