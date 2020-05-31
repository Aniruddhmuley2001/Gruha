/* Toggle between adding and removing the "responsive" class to myTopnav when the user clicks on the icon */
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "myTopnav") {
    x.className += " responsive";
  } else {
    x.className = "myTopnav";
  }
}

function thankingMessage(){
  alert('Thank you for showing your interest. We will shortly share the contact details of the dealer with you, so that you can contact for further discussions')
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
let arr = [2500000, 3300000, 3600000, 3900000, 4200000]; 
let x = price; 
// console.log(x);
if (iterativeFunction(arr, x, 0, arr.length-1)) {
  if(x == 2500000){
    // document.getElementById("property-container").removeChild(document.getElementById("prop-container"));
    const myNode = document.getElementById("property-container");
    while (myNode.lastElementChild) {
      myNode.removeChild(myNode.lastElementChild);
    }
    const first2bhk = document.createElement("div");
    first2bhk.id = "prop-container";
    first2bhk.style.color = "#F5F5F5";
    first2bhk.insertAdjacentHTML("afterbegin", 
    "<h2 style='font-size: 4rem'>Umiya Estate</h2> <img src='./umiya.jpg' alt='property image' style='display: inline-block; position: relative; float: right; max-width: 100%;'> <br> <h5 style='font-size: 2rem'><strong>Carpet Area: </strong>1043 sq ft.</h5> <br> <h5 style='font-size: 2rem'><strong>Floor: </strong>3rd of 8</h5> <br> <h5 style='font-size: 2rem'><strong>Price: </strong>Rs. 25,00,000/- + GST</h5> <br> <h5 style='font-size: 2rem'><strong>EMI: </strong>Rs. 19,361(approx.)</h5> <br> <h5 style='font-size: 2rem'><strong>Address: </strong>Dindoli, Surat</h5> <br> <h5 style='font-size: 2rem'><strong>Property Age: </strong>1 year</h5> <br> <h5 style='font-size: 2rem'><strong>Furnishing: </strong>Fully furnished</h5> <br> <h5 style='font-size: 2rem'><strong>Amenities: </strong>Lift, Park, Security Personnal</h5> <br> <button class='btn btn-success' onclick='thankingMessage()'>Interested</button>")
    document.getElementById("property-container").appendChild(first2bhk);
  }

  else if(x == 3900000){
    // document.getElementById("property-container").removeChild(document.getElementById("prop-container"));
    const myNode = document.getElementById("property-container");
    while (myNode.lastElementChild) {
      myNode.removeChild(myNode.lastElementChild);
    }
    const second2bhk = document.createElement("div");
    second2bhk.id = "prop-container";
    second2bhk.style.color = "#F5F5F5";
    second2bhk.insertAdjacentHTML("afterbegin", 
    "<h2 style='font-size: 4rem'>Happy Home Nakshatra Nebula</h2> <img src='./nakshatra.jpg' alt='property image' style='display: inline-block; position: relative; float: right; max-width: 100%;'> <br> <h5 style='font-size: 2rem'><strong>Carpet Area: </strong>1219 sq ft.</h5> <br> <h5 style='font-size: 2rem'><strong>Floor: </strong>7th of 13</h5> <br> <h5 style='font-size: 2rem'><strong>Price: </strong>Rs. 39,00,000/- + GST</h5> <br> <h5 style='font-size: 2rem'><strong>EMI: </strong>Rs. 30,662(approx.)</h5> <br> <h5 style='font-size: 2rem'><strong>Address: </strong>Jahangirabad, Surat</h5> <br> <h5 style='font-size: 2rem'><strong>Property Age: </strong>1 year</h5> <br> <h5 style='font-size: 2rem'><strong>Furnishing: </strong>Furnished</h5> <br> <h5 style='font-size: 2rem'><strong>Amenities: </strong>Lift, Piped gas, park, Visitor Parking, swimming pool, Club house</h5> <br> <button class='btn btn-success' onclick='thankingMessage()'>Interested</button>")
    document.getElementById("property-container").appendChild(second2bhk);
  }

  else if(x == 3600000){
    //document.getElementById("property-container").removeChild(document.getElementById("prop-container"));
    const myNode = document.getElementById("property-container");
    while (myNode.lastElementChild) {
      myNode.removeChild(myNode.lastElementChild);
    }
    const third2bhk = document.createElement("div");
    third2bhk.id = "prop-container";
    third2bhk.style.color = "#F5F5F5";
    third2bhk.insertAdjacentHTML("afterbegin", 
    "<h2 style='font-size: 4rem'>Happy Elegance</h2> <img src='./happy.jpg' alt='property image' style='display: inline-block; position: relative; float: right; max-width: 100%;'> <br> <h5 style='font-size: 2rem'><strong>Carpet Area: </strong>1209 sq ft.</h5> <br> <h5 style='font-size: 2rem'><strong>Floor: </strong>9th of 13</h5> <br> <h5 style='font-size: 2rem'><strong>Price: </strong>Rs. 36,00,000/- + GST</h5> <br> <h5 style='font-size: 2rem'><strong>EMI: </strong>Rs. 32,553(approx.)</h5> <br> <h5 style='font-size: 2rem'><strong>Address: </strong>Vesu, Surat</h5> <br> <h5 style='font-size: 2rem'><strong>Property Age: </strong>Under Construction (Possession in Dec 2024)</h5> <br> <h5 style='font-size: 2rem'><strong>Furnishing: </strong>Unfurnished</h5> <br> <h5 style='font-size: 2rem'><strong>Amenities: </strong>Lift, Fire Fighting system, park, Visitor Parking, InterCom</h5> <br> <button class='btn btn-success' onclick='thankingMessage()'>Interested</button>")
    document.getElementById("property-container").appendChild(third2bhk);
  }

  else if(x == 3300000){
    //document.getElementById("property-container").removeChild(document.getElementById("prop-container"));
    const myNode = document.getElementById("property-container");
    while (myNode.lastElementChild) {
      myNode.removeChild(myNode.lastElementChild);
    }
    const fourth2bhk = document.createElement("div");
    fourth2bhk.id = "prop-container";
    fourth2bhk.style.color = "#F5F5F5";
    fourth2bhk.insertAdjacentHTML("afterbegin", 
    "<h2 style='font-size: 4rem'>Palladium Residency</h2> <img src='./palladium_res.jpg' alt='property image' style='display: inline-block; position: relative; float: right; max-width: 100%;'> <br> <h5 style='font-size: 2rem'><strong>Carpet Area: </strong>1207 sq ft.</h5> <br> <h5 style='font-size: 2rem'><strong>Floor: </strong>3rd of 14</h5> <br> <h5 style='font-size: 2rem'><strong>Price: </strong>Rs. 33,00,000/- + GST</h5> <br> <h5 style='font-size: 2rem'><strong>EMI: </strong>Rs. 29,361(approx.)</h5> <br> <h5 style='font-size: 2rem'><strong>Address: </strong>Althan, Surat</h5> <br> <h5 style='font-size: 2rem'><strong>Property Age: </strong>New construction</h5> <br> <h5 style='font-size: 2rem'><strong>Furnishing: </strong>Unfurnished</h5> <br> <h5 style='font-size: 2rem'><strong>Amenities: </strong>Lift, Gym, InterCom, Visitor Parking, Childrens’ play area</h5> <br> <button class='btn btn-success' onclick='thankingMessage()'>Interested</button>")
    document.getElementById("property-container").appendChild(fourth2bhk);
  }

  else if(x == 4200000){
    //document.getElementById("property-container").removeChild(document.getElementById("prop-container"));
    const myNode = document.getElementById("property-container");
    while (myNode.lastElementChild) {
      myNode.removeChild(myNode.lastElementChild);
    }
    const fifth2bhk = document.createElement("div");
    fifth2bhk.id = "prop-container";
    fifth2bhk.style.color = "#F5F5F5";
    fifth2bhk.insertAdjacentHTML("afterbegin", 
    "<h2 style='font-size: 4rem'>Rameshwaram Residency</h2> <img src='./rameshwaram.jpeg' alt='property image' style='display: inline-block; position: relative; float: right; max-width: 100%;'> <br> <h5 style='font-size: 2rem'><strong>Carpet Area: </strong>1043 sq. ft.</h5> <br> <h5 style='font-size: 2rem'><strong>Floor: </strong>6th of 11</h5> <br> <h5 style='font-size: 2rem'><strong>Price: </strong>Rs. 42,00,000/- + GST</h5> <br> <h5 style='font-size: 2rem'><strong>EMI: </strong>Rs. 33,546(approx.)</h5> <br> <h5 style='font-size: 2rem'><strong>Address: </strong>Adajan, Surat</h5> <br> <h5 style='font-size: 2rem'><strong>Property Age: </strong>4 years</h5> <br> <h5 style='font-size: 2rem'><strong>Furnishing: </strong>Unfurnished</h5> <br> <h5 style='font-size: 2rem'><strong>Amenities: </strong>Lift, Park</h5> <br> <button class='btn btn-success' onclick='thankingMessage()'>Interested</button>")
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
