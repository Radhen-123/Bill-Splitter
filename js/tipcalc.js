
const billAmount = document.querySelector("#bill_amount");
const submitButton = document.querySelector("#tip-submit");
submitButton.addEventListener("click", function (event)
{

    event.preventDefault;

	if (!isNaN(billAmount.value))
	{
		let amount = billAmount.value;
		document.querySelector("#tip_error").innerHTML = " "
		document.querySelector("#five-percent").innerHTML = "$ " + (amount * 0.05).toFixed(2).toString(10)
		document.querySelector("#ten-percent").innerHTML = "$ " + (amount * 0.1).toFixed(2).toString(10)
		document.querySelector("#fifteen-percent").innerHTML = "$ " + (amount * 0.15).toFixed(2).toString(10)
		document.querySelector("#twenty-percent").innerHTML = "$ " + (amount * 0.2).toFixed(2).toString(10)
		document.querySelector("#twenty-five-percent").innerHTML = "$ " + (amount * 0.25).toFixed(2).toString(10)
		document.querySelector("#thirty-percent").innerHTML = "$ " + (amount * 0.3).toFixed(2).toString(10)
		document.querySelector("#thirty-five-percent").innerHTML = "$ " + (amount * 0.35).toFixed(2).toString(10)
		document.querySelector("#forty-percent").innerHTML = "$ " + (amount * 0.4).toFixed(2).toString(10)
		document.querySelector("#forty-five-percent").innerHTML = "$ " + (amount * 0.45).toFixed(2).toString(10)
		document.querySelector("#fifty-percent").innerHTML = "$ " + (amount * 0.5).toFixed(2).toString(10)
	}
	else
	{
		document.querySelector("#tip_error").innerHTML = "Please Enter Number Only"
		document.querySelector("#five-percent").innerHTML = "$0.00"
		document.querySelector("#ten-percent").innerHTML = "$0.00"
		document.querySelector("#fifteen-percent").innerHTML = "$0.00"
		document.querySelector("#twenty-percent").innerHTML = "$0.00"
		document.querySelector("#twenty-five-percent").innerHTML = "$0.00"
		document.querySelector("#thirty-percent").innerHTML = "$0.00"
		document.querySelector("#thirty-five-percent").innerHTML = "$0.00"
		document.querySelector("#forty-percent").innerHTML = "$0.00"
		document.querySelector("#forty-five-percent").innerHTML = "$0.00"
		document.querySelector("#fifty-percent").innerHTML = "$0.00"
	}
})
