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
  let arr = [1600000, 1800000, 1900000, 2000000, 2200000]; 
  let x = price; 
  // console.log(x);
  if (iterativeFunction(arr, x, 0, arr.length-1)) {
    if(x == 1600000){
      // document.getElementById("property-container").removeChild(document.getElementById("prop-container"));
      const myNode = document.getElementById("property-container");
      while (myNode.lastElementChild) {
        myNode.removeChild(myNode.lastElementChild);
      }
      const first1bhk = document.createElement("div");
      first1bhk.id = "prop-container";
      first1bhk.style.color = "#F5F5F5";
      first1bhk.insertAdjacentHTML("afterbegin", 
      "<h2 style='font-size: 4rem'>Umiya Estate</h2> <img src='D://Projects/Gruha/img/umiya.jpg' alt='property image' style='display: inline-block; position: relative; float: right; max-width: 100%;'> <br> <h5 style='font-size: 2rem'><strong>Carpet Area: </strong>664 sq. ft.</h5> <br> <h5 style='font-size: 2rem'><strong>Floor: </strong>3rd of 8</h5> <br> <h5 style='font-size: 2rem'><strong>Price: </strong>Rs. 16,00,000/- + GST</h5> <br> <h5 style='font-size: 2rem'><strong>EMI: </strong>Rs. 12,140(approx.)</h5> <br> <h5 style='font-size: 2rem'><strong>Address: </strong>Dindoli, Surat</h5> <br> <h5 style='font-size: 2rem'><strong>Property Age: </strong>1 year</h5> <br> <h5 style='font-size: 2rem'><strong>Furnishing: </strong>Fully furnished</h5> <br> <h5 style='font-size: 2rem'><strong>Amenities: </strong>Lift, Park, Security Personnal</h5> <br> <button class='btn btn-success' onclick='thankingMessage()'>Interested</button>")
      document.getElementById("property-container").appendChild(first1bhk);
    }

    else if(x == 1800000){
      // document.getElementById("property-container").removeChild(document.getElementById("prop-container"));
      const myNode = document.getElementById("property-container");
      while (myNode.lastElementChild) {
        myNode.removeChild(myNode.lastElementChild);
      }
      const second1bhk = document.createElement("div");
      second1bhk.id = "prop-container";
      second1bhk.style.color = "#F5F5F5";
      second1bhk.insertAdjacentHTML("afterbegin", 
      "<h2 style='font-size: 4rem'>Asopalav Apartments</h2> <img src='D://Projects/Gruha/img/asopalav.jpg' alt='property image' style='display: inline-block; position: relative; float: right; max-width: 100%;'> <br> <h5 style='font-size: 2rem'><strong>Carpet Area: </strong>800 sq. ft.</h5> <br> <h5 style='font-size: 2rem'><strong>Floor: </strong>2nd of 10</h5> <br> <h5 style='font-size: 2rem'><strong>Price: </strong>Rs. 18,00,000/- + GST</h5> <br> <h5 style='font-size: 2rem'><strong>EMI: </strong>Rs. 14,377(approx.)</h5> <br> <h5 style='font-size: 2rem'><strong>Address: </strong>Tadwadi, Surat</h5> <br> <h5 style='font-size: 2rem'><strong>Property Age: </strong>10+ years</h5> <br> <h5 style='font-size: 2rem'><strong>Furnishing: </strong>Semi-Furnished</h5> <br> <h5 style='font-size: 2rem'><strong>Amenities: </strong>Lift, Park, Visitor Parking, Piped Gas</h5> <br> <button class='btn btn-success' onclick='thankingMessage()'>Interested</button>")
      document.getElementById("property-container").appendChild(second1bhk);
    }

    else if(x == 1900000){
      //document.getElementById("property-container").removeChild(document.getElementById("prop-container"));
      const myNode = document.getElementById("property-container");
      while (myNode.lastElementChild) {
        myNode.removeChild(myNode.lastElementChild);
      }
      const third1bhk = document.createElement("div");
      third1bhk.id = "prop-container";
      third1bhk.style.color = "#F5F5F5";
      third1bhk.insertAdjacentHTML("afterbegin", 
      "<h2 style='font-size: 4rem'>Sugat Residency</h2> <img src='D://Projects/Gruha/img/property2.jpg' alt='property image' style='display: inline-block; position: relative; float: right; max-width: 100%;'> <br> <h5 style='font-size: 2rem'><strong>Carpet Area: </strong>370 sq. ft.</h5> <br> <h5 style='font-size: 2rem'><strong>Floor: </strong>5th of 5</h5> <br> <h5 style='font-size: 2rem'><strong>Price: </strong>Rs. 19,00,000/- + GST</h5> <br> <h5 style='font-size: 2rem'><strong>EMI: </strong>Rs. 16,293(approx.)</h5> <br> <h5 style='font-size: 2rem'><strong>Address: </strong>Bhatha, Surat</h5> <br> <h5 style='font-size: 2rem'><strong>Property Age: </strong>Under Construction (Possession in Dec 2024)</h5> <br> <h5 style='font-size: 2rem'><strong>Furnishing: </strong>Unfurnished</h5> <br> <h5 style='font-size: 2rem'><strong>Amenities: </strong>Lift, CCTV Camera, RO System, Power Backup</h5> <br> <button class='btn btn-success' onclick='thankingMessage()'>Interested</button>")
      document.getElementById("property-container").appendChild(third1bhk);
    }

    else if(x == 2000000){
      //document.getElementById("property-container").removeChild(document.getElementById("prop-container"));
      const myNode = document.getElementById("property-container");
      while (myNode.lastElementChild) {
        myNode.removeChild(myNode.lastElementChild);
      }
      const fourth1bhk = document.createElement("div");
      fourth1bhk.id = "prop-container";
      fourth1bhk.style.color = "#F5F5F5";
      fourth1bhk.insertAdjacentHTML("afterbegin", 
      "<h2 style='font-size: 4rem'>Green Paradise</h2> <img src='D://Projects/Gruha/img/prop4.jpg' alt='property image' style='display: inline-block; position: relative; float: right; max-width: 100%;'> <br> <h5 style='font-size: 2rem'><strong>Carpet Area: </strong>671 sq. ft.</h5> <br> <h5 style='font-size: 2rem'><strong>Floor: </strong>4th of 12</h5> <br> <h5 style='font-size: 2rem'><strong>Price: </strong>Rs. 20,00,000/- + GST</h5> <br> <h5 style='font-size: 2rem'><strong>EMI: </strong>Rs. 15,279(approx.)</h5> <br> <h5 style='font-size: 2rem'><strong>Address: </strong>Jahangirabad, Surat</h5> <br> <h5 style='font-size: 2rem'><strong>Property Age: </strong>Under Construction</h5> <br> <h5 style='font-size: 2rem'><strong>Furnishing: </strong>Unfurnished</h5> <br> <h5 style='font-size: 2rem'><strong>Amenities: </strong>Parking, East facing, Vitrificial Flooring, Lift, Power Backup</h5> <br> <button class='btn btn-success' onclick='thankingMessage()'>Interested</button>")
      document.getElementById("property-container").appendChild(fourth1bhk);
    }

    else if(x == 2200000){
      //document.getElementById("property-container").removeChild(document.getElementById("prop-container"));
      const myNode = document.getElementById("property-container");
      while (myNode.lastElementChild) {
        myNode.removeChild(myNode.lastElementChild);
      }
      const fifth1bhk = document.createElement("div");
      fifth1bhk.id = "prop-container";
      fifth1bhk.style.color = "#F5F5F5";
      fifth1bhk.insertAdjacentHTML("afterbegin", 
      "<h2 style='font-size: 4rem'>Ramaa Residency</h2> <img src='D://Projects/Gruha/img/property3.jpg' alt='property image' style='display: inline-block; position: relative; float: right; max-width: 100%;'> <br> <h5 style='font-size: 2rem'><strong>Carpet Area: </strong>736 sq. ft.</h5> <br> <h5 style='font-size: 2rem'><strong>Floor: </strong>7th of 15</h5> <br> <h5 style='font-size: 2rem'><strong>Price: </strong>Rs. 22,00,000/- + GST</h5> <br> <h5 style='font-size: 2rem'><strong>EMI: </strong>Rs. 17,341(approx.)</h5> <br> <h5 style='font-size: 2rem'><strong>Address: </strong>Jahangirabad, Surat</h5> <br> <h5 style='font-size: 2rem'><strong>Property Age: </strong>Under Construction (Possession in Jan 2022)</h5> <br> <h5 style='font-size: 2rem'><strong>Furnishing: </strong>Unfurnished</h5> <br> <h5 style='font-size: 2rem'><strong>Amenities: </strong>Lift, Park, Swimming Pool, Club House</h5> <br> <button class='btn btn-success' onclick='thankingMessage()'>Interested</button>")
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
