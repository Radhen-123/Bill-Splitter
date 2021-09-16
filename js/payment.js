

let amount = document.querySelector('#amount_paid')
let paymentDate = document.querySelector('#date_paid')
let establishment = document.querySelector('#establishment')
let paymentSubmit = document.querySelector('#payment_submit')
let submitErrror = document.querySelector('#payment_error')


paymentSubmit.addEventListener('click', function (event) {

	event.preventDefault;

    // If the input of the amount box is not a number, or less than zero it will trigger an error
	if (!isNaN(amount.value) && amount.value > 0 && paymentDate.value !== "" && establishment.value !== "") {

        // Set the error code to be blank
		submitErrror.innerHTML = "";

        // Target the parent UL, and create & append a child LI element
        var paymentList = document.getElementById("payment_list")
        var createLi = document.createElement('LI')
        paymentList.appendChild(createLi)

        // Create the first SPAN element, append to it a TextNode value
        var createSpanOne = document.createElement('SPAN');
        var createSpanOneText = document.createTextNode("$" + amount.value)
        createSpanOne.appendChild(createSpanOneText)

        // Create the second SPAN element, append to it a TextNode value
        var createSpanTwo = document.createElement('SPAN');
        var createSpanTwoText = document.createTextNode(paymentDate.value)
        createSpanTwo.appendChild(createSpanTwoText)

        // Create the third SPAN element, append to it a TextNode value
        var createSpanThree = document.createElement('SPAN');
        var createSpanThreeText = document.createTextNode(establishment.value)
        createSpanThree.appendChild(createSpanThreeText)

        // Append the three created SPAN elements above to our created LI element
        createLi.appendChild(createSpanOne)
        createLi.appendChild(createSpanTwo)
        createLi.appendChild(createSpanThree)

        // Clear the input fields after successful submission
        amount.value = "";
        paymentDate.value = "";
        establishment.value = "";

	} else {

        // Error code if amount field is not correct
        submitErrror.innerHTML = "Information is not acceptable";

    }

});