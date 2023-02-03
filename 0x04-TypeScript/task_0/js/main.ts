// Student Interface
interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;

}

const student1: Student = {
    firstName: "Shukurani",
    lastName: "Rhova",
    age: 19,
    location: "Nairobi",
  };

  const student2: Student = {
    firstName: "Athman",
    lastName: "Dodoe",
    age: 28,
    location: "Kilifi",
  };


  const  studentList:Student[] = [student1, student2];
  const table = document.createElement("table");

  studentList.forEach((student) => {
    const row = document.createElement("tr");
    const firstNameCell = document.createElement("td");
    const locationCell = document.createElement("td");
    firstNameCell.textContent = student.firstName;
    locationCell.textContent = student.location;
    row.appendChild(firstNameCell);
    row.appendChild(locationCell);
    table.appendChild(row);
  });
document.body.appendChild(table);
