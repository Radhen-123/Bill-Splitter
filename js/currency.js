

const select = document.querySelectorAll("select");
const input = document.querySelectorAll("input");
const API_URL =
  "https://v6.exchangerate-api.com/v6/462d97c906775392bc3f15b9/latest/USD";
let html = "";

async function currency() {
  // Establish a connection with the API
  const res = await fetch(API_URL);
  // Retrieve the data provided from the API in JSON format
  const data = await res.json();
  // Grab the conversion_rates key from the provided JSON format
  const arrKeys = Object.keys(data.conversion_rates);
  // Set the rates to a variable
  const rates = data.conversion_rates;

  // Map all the keys retrieved from conversion_rates to an option tag element within the HTML
  arrKeys.map((item) => {
    return (html += `<option value=${item}>${item}</option>`);
  });

  // Using a foreach loop we will assign each of the mapped values to our select drop down menus
  for (let i = 0; i < select.length; i++) {
    select[i].innerHTML = html;
  }

  // This function will make it so when we type in either input box, the event listener will update the
  // input thats not in focus with the apporopriate arithmetic that corresponds to the currency value
  // that was chosen from the drop downs
  function currencyConversion(a, b) {
    input[a].value = (input[b].value * rates[select[a].value]) / rates[select[b].value];
  }

  // These are the event listeners that will call the above function with the predefined indexes of the
  // specific elements
  input[0].addEventListener("keyup", () => currencyConversion(1, 0));
  input[1].addEventListener("keyup", () => currencyConversion(0, 1));
  select[0].addEventListener("change", () => currencyConversion(1, 0));
  select[1].addEventListener("change", () => currencyConversion(0, 1));
}

// Initiate our method
currency();
