// Toggle the Tip Amount Field
function tipAmount()
{
	document.getElementById("tip-amount").classList.add("active");
	document.getElementById("tip-percentage").classList.remove("active");
	document.querySelector('#tip-percentage input[type = "text"]').value = "";
}

// Toggle the Tip Percentage Field
function tipPercent()
{
	document.getElementById("tip-amount").classList.remove("active");
	document.getElementById("tip-percentage").classList.add("active");
	document.querySelector('#tip-amount input[type = "text"]').value = "";
}

// Toggle the No Tip Field
function noTip()
{
	document.getElementById("tip-amount").classList.remove("active");
	document.getElementById("tip-percentage").classList.remove("active");
	document.querySelector('#tip-amount input[type = "text"]').value = "";
	document.querySelector('#tip-percentage input[type = "text"]').value = "";
}

// Toggle the New Group Field
function newGroup()
{
	document.getElementById("new-group").classList.add("active");
	document.getElementById("old-group").classList.remove("active");
}

// Toggle the Old Group Field
function oldGroup()
{
	document.getElementById("new-group").classList.remove("active");
	document.getElementById("old-group").classList.add("active");
}

var group = [

	{
		"ID": 1,
		"name": "Friends",
		"members": ["Jason", "Chris", "Cameron", "Radhen", "Kenil"]
	},
	{
		"ID": 2,
		"name": "Family",
		"members": ["Cameron", "Meghan", "Braeden"]
	},
	{
		"ID": 3,
		"name": "Co-Workers",
		"members": ["Steve", "Amy", "Melissa", "Sandra"]
	}
];


//onChange Event to find which group is selected and collect all members of that group for display
function selectedGroup()
{
	//Colect group selected text value
	var selectedGroup = document.getElementById("group_select")
	var selectedGroupText = selectedGroup.options[selectedGroup.selectedIndex].text

	//delete an li elements holding group members, should one have already been selected.
	const deleteLi = document.querySelector('#groupDetails ul');
	if (deleteLi.firstChild)
	{
		deleteLi.innerHTML = '';
	}
	//Cycle through the groups until the group that matches the selected is found
	for (i = 0; i < group.length; i++)
	{
		if (group[i]['name'] === selectedGroupText)
		{
			//for each member is the selected group, add to html.
			for (var m = 0; m < group[i].members.length; m++)
			{
				const li = document.createElement('li')
				const icon = document.createElement('ion-icon')
				const memberName = document.createElement('span')
				const amountOwing = document.createElement('span')
				const list = document.querySelector('#groupDetails ul')

				amountOwing.textContent = '$0.00'
				amountOwing.id = "total"
				li.id = "member"
				icon.name = 'logo-usd'
				memberName.textContent = group[i].members[m]

				li.appendChild(icon)
				li.appendChild(memberName)
				li.appendChild(amountOwing)

				console.log(li)
				list.appendChild(li)
			}
		}
	}
}

//calculate the split amount
function calculateSplit()
{
	//Collect Bill Amount
	var billAmount = document.querySelector('input[type = "text"]').value
	var tipPercent = document.querySelector('#tip-percentage input[type = "text"]').value
	var tipAmount = document.querySelector('#tip-amount input[type = "text"]').value
	if (billAmount != "0" && billAmount != "")
	{
		if (document.getElementById("notTip").checked || (tipAmount != "0" && tipAmount != "") || (tipPercent != "0" && tipPercent != ""))
		{
			function calculateEachBill(numberOfGroupMembers)
			{
				if (document.getElementById("amount").checked)
				{
					splitAmount = (parseInt(billAmount) + parseInt(tipAmount)) / numberOfGroupMembers
					console.log(splitAmount)
					return splitAmount

				}
				else if (document.getElementById("percent").checked)
				{
					console.log(tipPercent)
					var splitAmount = (parseFloat(billAmount) * (1 + (parseFloat(tipPercent) / 100))) / numberOfGroupMembers
					console.log(splitAmount)
					return splitAmount

				}
				else
				{
					var splitAmount = parseFloat(billAmount) / numberOfGroupMembers
					console.log(splitAmount)
					return splitAmount
				}
			}

			//Collect Group Type, New or Existing
			if (document.getElementById("new").checked || document.getElementById("existing").checked)
			{
				if (document.getElementById("new").checked)
				{
					//delete an li elements holding group members, should one have already been selected.
					const deleteLi = document.querySelector('#groupDetails ul');
					if (deleteLi.firstChild)
					{
						deleteLi.innerHTML = '';
					}

					//Get number of group members and display the bill split amount for each person
					var newGroup = document.querySelector('#new-group input[type = "text"]').value
					if (newGroup != "0" && newGroup != "" && newGroup != null)
					{
						const li = document.createElement('li')
						const icon = document.createElement('ion-icon')
						const memberName = document.createElement('span')
						const amountOwing = document.createElement('span')
						const list = document.querySelector('#groupDetails ul')

						//call CalculateEachBill to calculate the split, passing the number of people
						amountOwing.textContent = '$' + calculateEachBill(newGroup).toFixed(2)
						amountOwing.id = "total"
						icon.name = 'logo-usd'
						memberName.textContent = "Each person owes: "

						li.appendChild(icon)
						li.appendChild(memberName)
						li.appendChild(amountOwing)

						console.log(li)
						list.appendChild(li)
					}
					else
					{
						alert("Please enter a valid Number of People")
					}
				}
				else
				{
					//if a group is selected, then find out which group
					var selectedGroup = document.getElementById("group_select")
					var selectedGroupText = selectedGroup.options[selectedGroup.selectedIndex].text
					if (selectedGroupText != "Choose your group...")
					{
						//display each member in the group with their new bill split amount
						for (i = 0; i < group.length; i++)
						{
							if (group[i]['name'] === selectedGroupText)
							{
								for (var m = 0; m < group[i].members.length; m++)
								{
									console.log(group[i].members[m])

									document.getElementById('member').remove();

									console.log(group[i].members[m])
									const li = document.createElement('li')
									const icon = document.createElement('ion-icon')
									const memberName = document.createElement('span')
									const amountOwing = document.createElement('span')
									const list = document.querySelector('#groupDetails ul')

									//call CalculateEachBill to calculate the split, passing the number of group members
									amountOwing.textContent = '$' + calculateEachBill(group[i].members.length).toFixed(2)
									amountOwing.id = "total"
									li.id = "member"
									icon.name = 'logo-usd'
									memberName.textContent = group[i].members[m]

									li.appendChild(icon)
									li.appendChild(memberName)
									li.appendChild(amountOwing)

									console.log(li)
									list.appendChild(li)
								}
							}
						}
					}
					else
					{
						alert("Please select a Group")
					}
				}
			}
			else
			{
				alert("Please enter a New or Existing Group")
			}
		}
		else
		{
			alert("Please enter a Tip or select No Tip")
		}
	}
	else
	{
		alert("Please select a Bill Amount")
	}
}