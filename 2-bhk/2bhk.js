/* Toggle between adding and removing the "responsive" class to myTopnav when the user clicks on the icon */
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "myTopnav") {
    x.className += " responsive";
  } else {
    x.className = "myTopnav";
  }
}



// Iterative function to implement Binary Search 
let iterativeFunction = function (arr, x) { 
 
let start=0, end=arr.length-1; 
      
// Iterate while start not meets end 
while (start<=end){ 

    // Find the mid index 
    let mid=Math.floor((start + end)/2); 

    // If element is present at mid, return True 
    if (arr[mid] == x) 
      return true; 

    // Else look in left or right half accordingly 
    else if (arr[mid] < x)  
         start = mid + 1; 
    else
         end = mid - 1; 
} 

return false; 
} 

// Driver code 
function search_value() {
const price = document.querySelector("input").value;
let arr = ['16,00,000', '18,00,000', '19,00,000', '20,00,000', '22,00,000']; 
let x = price; 
// console.log(x);
if (iterativeFunction(arr, x, 0, arr.length-1)) {
  if(x === '16,00,000'){
    // document.getElementById("property-container").removeChild(document.getElementById("prop-container"));
    const myNode = document.getElementById("property-container");
    while (myNode.lastElementChild) {
      myNode.removeChild(myNode.lastElementChild);
    }
    const first2bhk = document.createElement("div");
    first2bhk.id = "prop-container";
    first2bhk.style.color = "#F5F5F5";
    first2bhk.insertAdjacentHTML("afterbegin", 
    "<h2 style='font-size: 4rem'>Umiya Estate</h2> <img src='D://Projects/Gruha/img/property1.jpg' alt='property image' style='display: inline-block; position: relative; width: 50%; height: auto; float: right; max-width: 100%;'> <br> <h5 style='font-size: 2rem'><strong>Carpet Area: </strong>664 sq. ft.</h5> <br> <h5 style='font-size: 2rem'><strong>Floor: </strong>3rd of 8</h5> <br> <h5 style='font-size: 2rem'><strong>Price: </strong>Rs. 16,00,000/- + GST</h5> <br> <h5 style='font-size: 2rem'><strong>EMI: </strong>Rs. 12,140(approx.)</h5> <br> <h5 style='font-size: 2rem'><strong>Address: </strong>Dindoli, Surat</h5> <br> <h5 style='font-size: 2rem'><strong>Property Age: </strong>1 year</h5> <br> <h5 style='font-size: 2rem'><strong>Furnishing: </strong>Fully furnished</h5> <br> <h5 style='font-size: 2rem'><strong>Amenities: </strong>Lift, Park, Security Personnal</h5>")
    document.getElementById("property-container").appendChild(first2bhk);
  }

  else if(x == '18,00,000'){
    // document.getElementById("property-container").removeChild(document.getElementById("prop-container"));
    const myNode = document.getElementById("property-container");
    while (myNode.lastElementChild) {
      myNode.removeChild(myNode.lastElementChild);
    }
    const second2bhk = document.createElement("div");
    second2bhk.id = "prop-container";
    second2bhk.style.color = "#F5F5F5";
    second2bhk.insertAdjacentHTML("afterbegin", 
    "<h2 style='font-size: 4rem'>Asopalav Apartments</h2> <img src='D://Projects/Gruha/img/oldprop4.jpeg' alt='property image' style='display: inline-block; position: relative; width: 50%; height: auto; float: right; max-width: 100%;'> <br> <h5 style='font-size: 2rem'><strong>Carpet Area: </strong>800 sq. ft.</h5> <br> <h5 style='font-size: 2rem'><strong>Floor: </strong>2nd of 10</h5> <br> <h5 style='font-size: 2rem'><strong>Price: </strong>Rs. 18,00,000/- + GST</h5> <br> <h5 style='font-size: 2rem'><strong>EMI: </strong>Rs. 14,377(approx.)</h5> <br> <h5 style='font-size: 2rem'><strong>Address: </strong>Tadwadi, Surat</h5> <br> <h5 style='font-size: 2rem'><strong>Property Age: </strong>10+ years</h5> <br> <h5 style='font-size: 2rem'><strong>Furnishing: </strong>Semi-Furnished</h5> <br> <h5 style='font-size: 2rem'><strong>Amenities: </strong>Lift, Park, Visitor Parking, Piped Gas</h5>")
    document.getElementById("property-container").appendChild(second2bhk);
  }

  else if(x == '19,00,000'){
    //document.getElementById("property-container").removeChild(document.getElementById("prop-container"));
    const myNode = document.getElementById("property-container");
    while (myNode.lastElementChild) {
      myNode.removeChild(myNode.lastElementChild);
    }
    const third2bhk = document.createElement("div");
    third2bhk.id = "prop-container";
    third2bhk.style.color = "#F5F5F5";
    third2bhk.insertAdjacentHTML("afterbegin", 
    "<h2 style='font-size: 4rem'>Sugat Residency</h2> <img src='D://Projects/Gruha/img/property2.jpg' alt='property image' style='display: inline-block; position: relative; width: 50%; height: auto; float: right; max-width: 100%;'> <br> <h5 style='font-size: 2rem'><strong>Carpet Area: </strong>370 sq. ft.</h5> <br> <h5 style='font-size: 2rem'><strong>Floor: </strong>5th of 5</h5> <br> <h5 style='font-size: 2rem'><strong>Price: </strong>Rs. 19,00,000/- + GST</h5> <br> <h5 style='font-size: 2rem'><strong>EMI: </strong>Rs. 16,293(approx.)</h5> <br> <h5 style='font-size: 2rem'><strong>Address: </strong>Bhatha, Surat</h5> <br> <h5 style='font-size: 2rem'><strong>Property Age: </strong>Under Construction (Possession in Dec 2024)</h5> <br> <h5 style='font-size: 2rem'><strong>Furnishing: </strong>Unfurnished</h5> <br> <h5 style='font-size: 2rem'><strong>Amenities: </strong>Lift, CCTV Camera, RO System, Power Backup</h5>")
    document.getElementById("property-container").appendChild(third2bhk);
  }

  else if(x == '20,00,000'){
    //document.getElementById("property-container").removeChild(document.getElementById("prop-container"));
    const myNode = document.getElementById("property-container");
    while (myNode.lastElementChild) {
      myNode.removeChild(myNode.lastElementChild);
    }
    const fourth2bhk = document.createElement("div");
    fourth2bhk.id = "prop-container";
    fourth2bhk.style.color = "#F5F5F5";
    fourth2bhk.insertAdjacentHTML("afterbegin", 
    "<h2 style='font-size: 4rem'>Green Paradise</h2> <img src='D://Projects/Gruha/img/prop4.jpg' alt='property image' style='display: inline-block; position: relative; width: 100%; height: auto; float: right; max-width: 100%;'> <br> <h5 style='font-size: 2rem'><strong>Carpet Area: </strong>671 sq. ft.</h5> <br> <h5 style='font-size: 2rem'><strong>Floor: </strong>4th of 12</h5> <br> <h5 style='font-size: 2rem'><strong>Price: </strong>Rs. 20,00,000/- + GST</h5> <br> <h5 style='font-size: 2rem'><strong>EMI: </strong>Rs. 15,279(approx.)</h5> <br> <h5 style='font-size: 2rem'><strong>Address: </strong>Jahangirabad, Surat</h5> <br> <h5 style='font-size: 2rem'><strong>Property Age: </strong>Under Construction</h5> <br> <h5 style='font-size: 2rem'><strong>Furnishing: </strong>Unfurnished</h5> <br> <h5 style='font-size: 2rem'><strong>Amenities: </strong>Parking, East facing, Vitrificial Flooring, Lift, Power Backup</h5>")
    document.getElementById("property-container").appendChild(fourth2bhk);
  }

  else if(x == '22,00,000'){
    //document.getElementById("property-container").removeChild(document.getElementById("prop-container"));
    const myNode = document.getElementById("property-container");
    while (myNode.lastElementChild) {
      myNode.removeChild(myNode.lastElementChild);
    }
    const fifth2bhk = document.createElement("div");
    fifth2bhk.id = "prop-container";
    fifth2bhk.style.color = "#F5F5F5";
    fifth2bhk.insertAdjacentHTML("afterbegin", 
    "<h2 style='font-size: 4rem'>Ramaa Residency</h2> <img src='D://Projects/Gruha/img/property5.jpg' alt='property image' style='display: inline-block; position: relative; float: right; max-width: 100%;'> <br> <h5 style='font-size: 2rem'><strong>Carpet Area: </strong>736 sq. ft.</h5> <br> <h5 style='font-size: 2rem'><strong>Floor: </strong>7th of 15</h5> <br> <h5 style='font-size: 2rem'><strong>Price: </strong>Rs. 22,00,000/- + GST</h5> <br> <h5 style='font-size: 2rem'><strong>EMI: </strong>Rs. 17,341(approx.)</h5> <br> <h5 style='font-size: 2rem'><strong>Address: </strong>Jahangirabad, Surat</h5> <br> <h5 style='font-size: 2rem'><strong>Property Age: </strong>Under Construction (Possession in Jan 2022)</h5> <br> <h5 style='font-size: 2rem'><strong>Furnishing: </strong>Unfurnished</h5> <br> <h5 style='font-size: 2rem'><strong>Amenities: </strong>Lift, Park, Swimming Pool, Club House</h5>")
    document.getElementById("property-container").appendChild(fifth2bhk);
  }
} 
else{
  //This part added so that even if the first search result is not a part of data taken, we get the required result by implementing the remove and add functionality
  const first2bhk = document.createElement("div");
  first2bhk.id = "prop-container";
  first2bhk.insertAdjacentHTML("afterbegin", "<h6></h6>")
  document.getElementById("property-container").appendChild(first2bhk);

  document.getElementById("property-container").removeChild(document.getElementById("prop-container"));
  const second2bhk = document.createElement("div");
  second2bhk.id = "prop-container";
  second2bhk.style.color = "#F5F5F5";
  second2bhk.insertAdjacentHTML("afterbegin", "<h3>No Result found</h3>")
  document.getElementById("property-container").appendChild(second2bhk);
}
}
