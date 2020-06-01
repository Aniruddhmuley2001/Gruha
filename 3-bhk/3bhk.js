/* Toggle between adding and removing the "responsive" class to myTopnav when the user clicks on the icon */
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
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
let arr = [6100000, 6500000, 7000000, 8500000, 8700000]; 
let x = price; 
// console.log(x);
if (iterativeFunction(arr, x, 0, arr.length-1)) {
  if(x == 6100000){
    // document.getElementById("property-container").removeChild(document.getElementById("prop-container"));
    const myNode = document.getElementById("property-container");
    while (myNode.lastElementChild) {
      myNode.removeChild(myNode.lastElementChild);
    }
    const first1bhk = document.createElement("div");
    first1bhk.id = "prop-container";
    first1bhk.style.color = "#F5F5F5";
    first1bhk.insertAdjacentHTML("afterbegin", 
    "<h2 style='font-size: 4rem'>Rajhans Platinum Residency</h2> <img src='./rajhans-platinum-residency-1-20140904165957.jpg' alt='property image' style='display: inline-block; position: relative; float: right; max-width: 100%;'> <br> <h5 style='font-size: 2rem'><strong>Carpet Area: </strong>1585 sq ft.</h5> <br> <h5 style='font-size: 2rem'><strong>Floor: </strong>4th of 5</h5> <br> <h5 style='font-size: 2rem'><strong>Price: </strong>Rs. 61,00,000/- + GST</h5> <br> <h5 style='font-size: 2rem'><strong>EMI: </strong>Rs. 48,721(approx.)</h5> <br> <h5 style='font-size: 2rem'><strong>Address: </strong>Palanpur, Surat</h5> <br> <h5 style='font-size: 2rem'><strong>Property Age: </strong>2 years</h5> <br> <h5 style='font-size: 2rem'><strong>Furnishing: </strong>Fully furnished</h5> <br> <h5 style='font-size: 2rem'><strong>Amenities: </strong>Lift, Park, Club House, Shopping Center, Fire Alarm</h5> <br> <button class='btn btn-success' onclick='thankingMessage()'>Interested</button>")
    document.getElementById("property-container").appendChild(first1bhk);
  }

  else if(x == 6500000){
    // document.getElementById("property-container").removeChild(document.getElementById("prop-container"));
    const myNode = document.getElementById("property-container");
    while (myNode.lastElementChild) {
      myNode.removeChild(myNode.lastElementChild);
    }
    const second1bhk = document.createElement("div");
    second1bhk.id = "prop-container";
    second1bhk.style.color = "#F5F5F5";
    second1bhk.insertAdjacentHTML("afterbegin", 
    "<h2 style='font-size: 4rem'>Santvan Kreon</h2> <img src='./kreon.jpg' alt='property image' style='display: inline-block; position: relative; float: right; max-width: 100%;'> <br> <h5 style='font-size: 2rem'><strong>Carpet Area: </strong>1721 sq ft.</h5> <br> <h5 style='font-size: 2rem'><strong>Floor: </strong>8th of 13</h5> <br> <h5 style='font-size: 2rem'><strong>Price: </strong>Rs. 65,00,000/- + GST</h5> <br> <h5 style='font-size: 2rem'><strong>EMI: </strong>Rs. 51,516(approx.)</h5> <br> <h5 style='font-size: 2rem'><strong>Address: </strong>Palanpur, Surat</h5> <br> <h5 style='font-size: 2rem'><strong>Property Age: </strong>Under Construction</h5> <br> <h5 style='font-size: 2rem'><strong>Furnishing: </strong>Unfurnished</h5> <br> <h5 style='font-size: 2rem'><strong>Amenities: </strong>Lift, Park, Club House, Swimming Pool, Fire Alarm, WiFi connectivity</h5> <br> <button class='btn btn-success' onclick='thankingMessage()'>Interested</button>")
    document.getElementById("property-container").appendChild(second1bhk);
  }

  else if(x == 7000000){
    //document.getElementById("property-container").removeChild(document.getElementById("prop-container"));
    const myNode = document.getElementById("property-container");
    while (myNode.lastElementChild) {
      myNode.removeChild(myNode.lastElementChild);
    }
    const third1bhk = document.createElement("div");
    third1bhk.id = "prop-container";
    third1bhk.style.color = "#F5F5F5";
    third1bhk.insertAdjacentHTML("afterbegin", 
    "<h2 style='font-size: 4rem'>Shubh Lakshmi Heights</h2> <img src='./shubh.jpg' alt='property image' style='display: inline-block; position: relative; float: right; max-width: 100%;'> <br> <h5 style='font-size: 2rem'><strong>Carpet Area: </strong>1766 sq ft.</h5> <br> <h5 style='font-size: 2rem'><strong>Floor: </strong>1st of 13</h5> <br> <h5 style='font-size: 2rem'><strong>Price: </strong>Rs. 70,00,000/- + GST</h5> <br> <h5 style='font-size: 2rem'><strong>EMI: </strong>Rs. 55,909(approx.)</h5> <br> <h5 style='font-size: 2rem'><strong>Address: </strong>Bhatha, Surat</h5> <br> <h5 style='font-size: 2rem'><strong>Property Age: </strong>4 years</h5> <br> <h5 style='font-size: 2rem'><strong>Furnishing: </strong>Furnished</h5> <br> <h5 style='font-size: 2rem'><strong>Amenities: </strong>Lift, Park, Club House, Swimming Pool, Piped gas</h5> <br> <button class='btn btn-success' onclick='thankingMessage()'>Interested</button>")
    document.getElementById("property-container").appendChild(third1bhk);
  }

  else if(x == 8500000){
    //document.getElementById("property-container").removeChild(document.getElementById("prop-container"));
    const myNode = document.getElementById("property-container");
    while (myNode.lastElementChild) {
      myNode.removeChild(myNode.lastElementChild);
    }
    const fourth1bhk = document.createElement("div");
    fourth1bhk.id = "prop-container";
    fourth1bhk.style.color = "#F5F5F5";
    fourth1bhk.insertAdjacentHTML("afterbegin", 
    "<h2 style='font-size: 4rem'>Sun Residency</h2> <img src='./sunResidency.jpg' alt='property image' style='display: inline-block; position: relative; float: right; max-width: 100%;'> <br> <br> <h5 style='font-size: 2rem'><strong>Carpet Area: </strong>671 sq. ft.</h5> <br> <h5 style='font-size: 2rem'><strong>Floor: </strong>4th of 12</h5> <br> <h5 style='font-size: 2rem'><strong>Price: </strong>Rs. 85,00,000/- + GST</h5> <br> <h5 style='font-size: 2rem'><strong>EMI: </strong>Rs. 67,890(approx.)</h5> <br> <h5 style='font-size: 2rem'><strong>Address: </strong>Adajan, Surat</h5> <br> <h5 style='font-size: 2rem'><strong>Property Age: </strong>5 years</h5> <br> <h5 style='font-size: 2rem'><strong>Furnishing: </strong>Furnished</h5> <br> <h5 style='font-size: 2rem'><strong>Amenities: </strong>Lift, Park, Modular Kitchen, Fire Alarm</h5> <br> <button class='btn btn-success' onclick='thankingMessage()'>Interested</button>")
    document.getElementById("property-container").appendChild(fourth1bhk);
  }

  else if(x == 8700000){
    //document.getElementById("property-container").removeChild(document.getElementById("prop-container"));
    const myNode = document.getElementById("property-container");
    while (myNode.lastElementChild) {
      myNode.removeChild(myNode.lastElementChild);
    }
    const fifth1bhk = document.createElement("div");
    fifth1bhk.id = "prop-container";
    fifth1bhk.style.color = "#F5F5F5";
    fifth1bhk.insertAdjacentHTML("afterbegin", 
    "<h2 style='font-size: 4rem'>Rajhans Synfonia</h2> <img src='./synfonia.jpg' alt='property image' style='display: inline-block; position: relative; float: right; max-width: 100%;'> <br> <h5 style='font-size: 2rem'><strong>Carpet Area: </strong>2018 sq ft.</h5> <br> <h5 style='font-size: 2rem'><strong>Floor: </strong>6th of 13</h5> <br> <h5 style='font-size: 2rem'><strong>Price: </strong>Rs. 87,00,000/- + GST</h5> <br> <h5 style='font-size: 2rem'><strong>EMI: </strong>Rs. 69,484(approx.)</h5> <br> <h5 style='font-size: 2rem'><strong>Address: </strong>Vesu, Surat</h5> <br> <h5 style='font-size: 2rem'><strong>Property Age: </strong>Under Construction</h5> <br> <h5 style='font-size: 2rem'><strong>Furnishing: </strong>Unfurnished</h5> <br> <h5 style='font-size: 2rem'><strong>Amenities: </strong>Lift, Park, Club House, Swimming Pool, Fire Alarm</h5> <br> <button class='btn btn-success' onclick='thankingMessage()'>Interested</button>")
    document.getElementById("property-container").appendChild(fifth1bhk);
  }
} 
else{
  //This part added so that even if the first search result is not a part of data taken, we get the required result by implementing the remove and add functionality
  const first1bhk = document.createElement("div");
  first1bhk.id = "prop-container";
  first1bhk.insertAdjacentHTML("afterbegin", "<h6></h6>")
  document.getElementById("property-container").appendChild(first1bhk);

  document.getElementById("property-container").removeChild(document.getElementById("prop-container"));
  const second1bhk = document.createElement("div");
  second1bhk.id = "prop-container";
  second1bhk.style.color = "#F5F5F5";
  second1bhk.insertAdjacentHTML("afterbegin", "<h3>No Result found</h3>")
  document.getElementById("property-container").appendChild(second1bhk);
}
}
