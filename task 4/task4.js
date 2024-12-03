let choice;
let cars = ["Toyota", "Honda", "suzuki"];

//function to display cars list
function displaycars(cars) {
  for (let i = 1; i <= cars.length; i++) {
    console.log(val);
  }
}
//function to add car in list with specification
function addcar() {
  let carname = prompt("Enter The name of the car to add in list :");
  let carcolor = prompt("Enter the color of the car :");
  let carprice = prompt("Enter the price of the Car :");
  cars.push(carcolor, carname, carprice);
  console.log(`car ${carname} has been added successfully`);
}

//Function to search car
function searchcar() {
  let searchcar = prompt("Enter the name of a car to search:");
  let search = cars.find(function (find) {
    return search.searchcar === searchcar;
  });
  if (car) {
    console.log(carname);
    console.log(carcolor);
    console.log(carprice);
  }
}

//Delete car from list
function deletecar() {
  let deletename = prompt("Enter car name you want to delete");
  let index = cars.findIndex(function (index) {
    return index.deletename === deletename;
  });
  if (index !== 0 || index !== -1) {
    cars.splice(index, 1);
    console.log(`"${deletename}" deleted successfully`);
  } else {
    console.log(`"${deletename}" not Found`);
  }
}

//do while loop

do {
  choice = parseint(
    prompt(
      "1. Add a Car \n 2. Display All Cars \n 3. Search for a Car \n 4. Delete a Car \n 0. Exit"
    )
  );

  if (choice === 1) {
    addcar();
  } else if (choice === 2) {
    displaycars();
  } else if (choice === 3) {
    searchcar();
  } else if (choice === 4) {
    deletecar();
  } else if (choice === 0) {
    console.log("Exiting Program");
  } else {
    console.log("Invalid choice : Enter valid choice");
  }
} while (choice !== 0);
