// 1. Write a function that accepts an array of numbers. Return a new array with all elements doubled
// Ex: double([1,2,3]) => [2,4,6]
function Array(a) {
  return a.map((double)=>double*2)
}
const b=[1,2,3]
console.log(Array(b))

// 2. Write a function that accepts an array of numbers. Return a new array with only elements that are even number
// Ex: filterEven([1,2,3,4,5,6]) => [2,4,6]
function Newarray(numbers) {
  return numbers.filter(number => number % 2 == 0)
}
const n=[1,2,3,4,5,6]
console.log(Newarray(n))
// 3. Write a function that accepts an array of student object. Each student object will have a name property. Return those students that has name length larger than 5
// Ex: const students = [{name: "abc"}, {name: "Umer Khan"}, {name: "Duy Nguyen"}]
//     filterStudent(students) => [{name: "Umer Khan"}, {name: "Duy Nguyen"}]
function Student(students) {
  return students.filter((student) => student.name.length > 5)
}
const c = [{name: "abc"}, {name: "Umer Khan"}, {name: "Duy Nguyen"}]
console.log(Student(c))
// 4. Write a function that accepts an unlimited amount of arguments. The arguments are of type number. Return the largest number
// Ex: largest(1,2,3,4,5,6) => 6
// Hint: use Math.max()
function Number(all) {

  return Math.max(...all)
}
const d= [1,2,3,4,5,6]
console.log(Number(d))
// 5. Write a function that accepts an unlimited amount of arguments. The arguments are of type number. Return the sum of all of them
// Ex: sum(1,2,3,4,5) => 15
function Sum(all) {
  var sum = 0;
  all.forEach(function (number) {
    sum += number;
  });
  return sum;
}
const e= [1,2,3,4,5,]
console.log(Sum(e))
// 6. You have a list of products
const products = [
  { name: 'Paint', category: 'household' },
  { name: 'Phone', category: 'communication' },
  { name: 'Car', category: 'transportation' },
  { name: 'Laptop', category: 'computer' },
]
// Target the ul element in index.html and render the above list
let ul = document.querySelector(".product-list")
products.forEach(function (list)
 {
  let n = document.createElement('li')
  n.appendChild(document.createTextNode(list.name))
  ul.appendChild(n)
})
console.log(ul)

// 7. Target the button in index.html, attach an event listener to it. Every time we click
// on the button, it will toggle the product list. Show => hide, hide => show
 function button(){
   var p=document.getElementById("toggleButton")
   if (p.style.display === "none") {
    p.style.display = "block";
  } else {
    p.style.display = "none";
  }
}
  let product = document.getElementsByClassName("product-list")[0]
   for(i=0;i<products.length;i++)
   {
     const list=products[i]
     let lists=document.createElement("li")
     lists.appendChild(document.createTextNode(list.name))
     product.append(lists);
    }
  
   
// 8. Target the input element and attach an event listener to it.
// Once we click search button, you need to use the text input to search for the relevant product name from the list above
// and show it in the <span> tag


let submitBtn = document.querySelector(".submitBtn")
submitBtn.addEventListener('click', function (e) {
e.preventDefault();
  let inputVal = document.querySelector('.search-input').value
  console.log("Input Value", inputVal)
  let result = products.filter(product => product.name.toLowerCase().includes(inputVal));
  console.log("result", result)
  result.length != 0 ? document.querySelector(".result").innerHTML = result[0].name :
  document.querySelector(".result").innerHTML = "not found"
}); 


          

  

   
