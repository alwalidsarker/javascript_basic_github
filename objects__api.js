var course = {
  courseName: "JS",
  price: "500TaKa",
  courseTeacher: "Al Walid",
};
// course.courseName
let { courseTeacher: nameOfTeacher } = course; //way to have a value as a variable
console.log(nameOfTeacher);
// {
//     "name" : "walid",
//     "courseName" : "cola",
// } // this is json (key == string, value == string)
[{}, {}, {}];