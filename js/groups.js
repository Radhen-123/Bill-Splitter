/*
  Authors Jason Auger & Cameron Mcinnes
*/

/**********************************************CAMERONS CODE ********************************************/
const groups = document.getElementById("group_select");
//const checkValue = groups.options[groups.selectedIndex].value;
//const checkText = groups.options[groups.selectedIndex].text;

groups.addEventListener("change", (e) => {
    const value = e.target.value;
    const text = groups.options[groups.selectedIndex].text;
   
    if (value) {
      document.getElementById("add-to-group").classList.add("active");
      document.getElementById("submit-to-group").classList.add("active");

    } 
});
/*GROUP */
var newMember;
var newGroup;
var result;
var tester;
var groupDrop = document.getElementById('group_select');
var group = [

{
    "ID":1,
    "name":"Friends",
    "members":["Jason", "Chris","Cameron","Radhen","Kenil"]
},
{
    "ID":2,
    "name":"Family",
    "members":["Cameron", "Meghan", "Braeden"]
},
{
    "ID":3,
    "name":"Co-Workers",
    "members":["Steve", "Amy", "Melissa","Sandra"]
}
];
console.log("Group: "+ group);
/* Display all group names and members */
setInfo();

/* populate drop down list with group names */
for (var i=0; i<group.length; i++) {
groupDrop.innerHTML = groupDrop.innerHTML +
    '<option value="' + group[i].ID + '">' + group[i].name + '</option>';
}
/**submit Functions */

const addForm = document.forms['add-member'];
/**Add New Member to Existing group */
/*************************/
function addNewMember(){
    //set needed variables
    var lastID = group[group.length-1].ID;
    var dropSelection = groupDrop.options[groupDrop.selectedIndex].value
    //get text input value
      var submitInput = addForm.querySelector('input[type="text"]').value;
      console.log("submitInput: "+submitInput);
      console.log("lastID"+lastID);
      console.log("DropSelection: "+dropSelection);  
      console.log(group[1].members); 
      addMember(dropSelection,submitInput);
}
function addMember(id,newMember){

  console.log("starting AddMember");
  console.log("groupLenght"+group.length);
  for (var i=0; i<group.length + 1; i++) 
  {
    console.log("id "+id);
    console.log("groupID: " + group[i].ID);
    if(group[i].ID == id){
      console.log("selecting members from array");
      
      updatedMembers = group[i].members
      console.log("members are: " + updatedMembers);
      updatedMembers.push(newMember);
      console.log("Updated entry: " + group[i].members);
      setInfo();
      break;
    
}
  }
  return;
}

/**Open Options for creating New Group**/
function newGroupInfo(){
  document.getElementById("new-group").classList.add("active");
  document.getElementById("new-group-members").classList.add("active");
  document.getElementById("new-group-submit").classList.add("active");
  document.getElementById("submit-to-group").classList.remove("active");
  document.getElementById("add-to-group").classList.remove("active");
  document.getElementById("group-select").classList.remove("active");
}
/**Submit New Group Info**/
function addNewGroup(){
  alert("New group");
  var groupNameSubmit = document.getElementById("group-name-to-add").value;
  var groupMembersSubmit = document.getElementById("group-members-to-add").value;
newGroup(groupNameSubmit,groupMembersSubmit);
}
/**Add New Group to options */
function newGroup(newGroup,newMembers){
      var newGroupID = group.length  
      group.push({ "ID": newGroupID, "name":newGroup , "members" :[newMembers]});
    console.log("new group update" + group);
setInfo();
}

/**Set Info of all groups and members */
    function setInfo(){
      console.log("Result setInfo: "+result);
      result ='<li>GROUPS</li>';
      for (var i=0; i<group.length; i++) {
        document.querySelector("#userInfo").innerHTML = result;
          result += '<li>' + group[i].name + '</li>'
          result+= '<li>' + group[i].members + '</li>'
         
      }
      console.log("Result setInfo: "+result);
    }
/**Add New Group to options */
function newGroup(newGroup,newMembers){
  var newGroupID = group.length  
  group.push({ "ID": newGroupID, "name":newGroup , "members" :[newMembers]});
 console.log("new group update" + group);
setInfo();
}