
function sorting (){
    const state = ['Hello','World','Nancy','Daisy'];
    console.log(state.sort());
    console.log(state.reverse());
}
sorting()


function checkElements() {
    let array =array.forEach(number => {
       if (number > 0) {
         console.log("positive");
       } else if (number < 0) {
         console.log("negative");
       } else {
         console.log("zero");
       }
    });
}

let employee = [
    { id: 1 },
    { name: "Jack" },
    { salary: [2500, 3500, 4500, 15000] },
  ];
    employee.sort(function(c, d) {
    return c.salary - (d.salary);
  });
  employee.forEach((person) => console.log(employee.salary));
 console.log(employee);


 
 function multiplication(numbers) {
    numbers.forEach((item) => {
       console.log(item * 2);
    });
   }
   multiply([5, 6, 7, 8]);

    
   
   function arr(Arr) {
    const firstFour = Arr.slice(0, 4).map(item => item * 8);
    const lastTwo = Arr.slice(-2).map(item => item + 5);
    const changedArr = firstFour.concat(lastTwo);
    console.log(changedArr);
   }
   arr([40,50,60,70,80,90,100]);











