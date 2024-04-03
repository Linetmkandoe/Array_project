
function reverseStringInArray(arr){
  const reversedStrings = arr.map(str =>[...str].reverse().join(''));
  console.log(reversedStrings);
}
reverseStringInArray(["Hello","world","Nancy","Daisy"])



function checkElement(array,index){
  const number = array[index];

  if(number > 0){
    return number + "is positive";
  }else if(number <0){
    return number + "is negative";
  }else{
    return number + "is Zero"
  }
}
const numbers =[1,3,6,8,9,10]
console.log(checkElement(numbers,3))

function sortBySalary(employees){
  return employees.sort((a,b)=> a.salary -b.salary)
}
const employees =[
  {id:1,name:'Jane',salary:60000},
  {id:2,name:'Josh',salary: 10000},
  {id:3,name:'Nancy',salary:30000}
];
const sortedEmployees = sortBySalary(employees)
console.log(sortedEmployees);

 
 
function multiplication(numbers) {
    numbers.forEach((item) => {
       console.log(item * 2);
    });
   }
   multiplication([5, 6, 7, 8]);

    
   
   function arr(Arr) {
    const firstFour = Arr.slice(0, 4).map(item => item * 8);
    const lastTwo = Arr.slice(-2).map(item => item + 5);
    const changedArr = firstFour.concat(lastTwo);
    console.log(changedArr);
   }
   arr([40,50,60,70,80,90,100]);











