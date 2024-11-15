let interns = ["Iqbal", "Ayan ", "Faheem", "Taoseeq"];
let choice;
var start = '0'
do {
  console.log("Representing interns list");
  for (let i = 0; i < interns.length; i++) {
    console.log(interns[i]);
  }

  choice = prompt(
    "Enter 1 to re run again : Enter 2 To Add intern : Enter 3 to Remove Intern"
  );
  if (choice === "1") {
    console.log("Re run the program");
  } else if (choice === "2") {
    let newintern = prompt("Enter The Name of the New Intern ");
    interns.push(newintern)
    console.log(newintern +"Has been added");
  } else if (choice === "3") {
    let Internidx = prompt("Enter the intern number to remove");
    if (Internidx > 0 && Internidx < interns.length) {
      let removeintern = interns.splice(Internidx, 1);
      console.log(removeintern + "Has been removed from the list");
      console.log(Internidx + "Has been removed")
    } else {
      console.log("Enter valid number");
    }
  }
  start = prompt('0 for stop, 1 for continue')
} while (start === '1');
console.log("Exiting Program");
