const student = {
    name:"Omil",
    age:21,
};

console.log(JSON.stringify(student));
const student1 = `{"name":"Abhishek","age":"20"}`;
const newStudent = JSON.parse(student1);
console.log(newStudent);
console.log(newStudent.name);