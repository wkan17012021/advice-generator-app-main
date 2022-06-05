// Info to reach API
const adviceSlipUrl = "https://api.adviceslip.com/advice";
const adviceNumber = document.getElementById("advice-num");
const randQuote = document.querySelector(".quote-wrapper");
const quoteBtn = document.getElementById("quote-generator");
const handleClick = quoteBtn.addEventListener("click", () => {
  //   console.log("click");
  getRandQuote();
});

const getRandQuote = async () => {
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
    }
  } catch (error) {
    alert(error);
  }
};


