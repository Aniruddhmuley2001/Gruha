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
  console.log(x);
  if (iterativeFunction(arr, x, 0, arr.length-1)) {
    //console.log("Element found!");

    //This part added so that even if the first search result is not a part of data taken, we get the required result by implementing the remove and add functionality
    const first1bhk = document.createElement("div");
    first1bhk.id = "prop-container";
    first1bhk.insertAdjacentHTML("afterbegin", "<h6></h6>")
    document.getElementById("property-container").appendChild(first1bhk);

    if(x === '16,00,000'){
      document.getElementById("property-container").removeChild(document.getElementById("prop-container"));
      const first1bhk = document.createElement("div");
      first1bhk.id = "prop-container";
      first1bhk.insertAdjacentHTML("afterbegin", 
      "<h2>Umiya Estate</h2> <img src='D://Projects/Gruha/img/property1.jpg' alt='property image' style='display: inline-block; position: relative; width: 50%; height: 35vh; float: right; max-width: 100%;'> <br> <h5><strong>Carpet Area: </strong>664 sq. ft.</h5> <br> <h5><strong>Floor: </strong>3rd of 8</h5> <br> <h5><strong>Price: </strong>Rs. 16,00,000/- + GST</h5> <br> <h5><strong>EMI: </strong>Rs. 12,140(approx.)</h5> <br> <h5><strong>Address: </strong>Dindoli, Surat</h5> <br> <h5><strong>Property Age: </strong>1 year</h5> <br> <h5><strong>Furnishing: </strong>Fully furnished</h5> <br> <h5><strong>Amenities: </strong>Lift, Park, Security Personnal</h5>")
      document.getElementById("property-container").appendChild(first1bhk);
    }
    else if(x == '18,00,000'){
      document.getElementById("property-container").removeChild(document.getElementById("prop-container"));
      const second1bhk = document.createElement("div");
      second1bhk.id = "prop-container";
      second1bhk.insertAdjacentHTML("afterbegin", 
      "<h2>Asopalav Apartments</h2> <img src='D://Projects/Gruha/img/oldprop4.jpeg' alt='property image' style='display: inline-block; position: relative; width: 50%; height: 35vh; float: right; max-width: 100%;'> <br> <h5><strong>Carpet Area: </strong>800 sq. ft.</h5> <br> <h5><strong>Floor: </strong>2nd of 10</h5> <br> <h5><strong>Price: </strong>Rs. 18,00,000/- + GST</h5> <br> <h5><strong>EMI: </strong>Rs. 14,377(approx.)</h5> <br> <h5><strong>Address: </strong>Tadwadi, Surat</h5> <br> <h5><strong>Property Age: </strong>10+ years</h5> <br> <h5><strong>Furnishing: </strong>Semi-Furnished</h5> <br> <h5><strong>Amenities: </strong>Lift, Park, Visitor Parking, Piped Gas</h5>")
      document.getElementById("property-container").appendChild(second1bhk);
    }
    else if(x == '19,00,000'){
      document.getElementById("property-container").removeChild(document.getElementById("prop-container"));
      const third1bhk = document.createElement("div");
      third1bhk.id = "prop-container";
      third1bhk.insertAdjacentHTML("afterbegin", 
      "<h2>Sugat Residency</h2> <img src='D://Projects/Gruha/img/property2.jpg' alt='property image' style='display: inline-block; position: relative; width: 50%; height: 35vh; float: right; max-width: 100%;'> <br> <h5><strong>Carpet Area: </strong>370 sq. ft.</h5> <br> <h5><strong>Floor: </strong>5th of 5</h5> <br> <h5><strong>Price: </strong>Rs. 19,00,000/- + GST</h5> <br> <h5><strong>EMI: </strong>Rs. 16,293(approx.)</h5> <br> <h5><strong>Address: </strong>Bhatha, Surat</h5> <br> <h5><strong>Property Age: </strong>Under Construction (Possession in Dec 2024)</h5> <br> <h5><strong>Furnishing: </strong>Unfurnished</h5> <br> <h5><strong>Amenities: </strong>Lift, CCTV Camera, RO System, Power Backup</h5>")
      document.getElementById("property-container").appendChild(third1bhk);
    }
    else if(x == '20,00,000'){
      document.getElementById("property-container").removeChild(document.getElementById("prop-container"));
      const fourth1bhk = document.createElement("div");
      fourth1bhk.id = "prop-container";
      fourth1bhk.insertAdjacentHTML("afterbegin", 
      "<h2>Green Paradise</h2> <img src='D://Projects/Gruha/img/property3.jpg' alt='property image' style='display: inline-block; position: relative; width: 50%; height: 35vh; float: right; max-width: 100%;'> <br> <h5><strong>Carpet Area: </strong>671 sq. ft.</h5> <br> <h5><strong>Floor: </strong>4th of 12</h5> <br> <h5><strong>Price: </strong>Rs. 20,00,000/- + GST</h5> <br> <h5><strong>EMI: </strong>Rs. 15,279(approx.)</h5> <br> <h5><strong>Address: </strong>Jahangirabad, Surat</h5> <br> <h5><strong>Property Age: </strong>Under Construction</h5> <br> <h5><strong>Furnishing: </strong>Unfurnished</h5> <br> <h5><strong>Amenities: </strong>Parking, East facing, Vitrificial Flooring, Lift, Power Backup</h5>")
      document.getElementById("property-container").appendChild(fourth1bhk);
    }
    else if(x == '22,00,000'){
      document.getElementById("property-container").removeChild(document.getElementById("prop-container"));
      const fifth1bhk = document.createElement("div");
      fifth1bhk.id = "prop-container";
      fifth1bhk.insertAdjacentHTML("afterbegin", 
      "<h2>Ramaa Residency</h2> <img src='D://Projects/Gruha/img/property5.jpg' alt='property image' style='display: inline-block; position: relative; width: 50%; height: 35vh; float: right; max-width: 100%;'> <br> <h5><strong>Carpet Area: </strong>736 sq. ft.</h5> <br> <h5><strong>Floor: </strong>7th of 15</h5> <br> <h5><strong>Price: </strong>Rs. 22,00,000/- + GST</h5> <br> <h5><strong>EMI: </strong>Rs. 17,341(approx.)</h5> <br> <h5><strong>Address: </strong>Jahangirabad, Surat</h5> <br> <h5><strong>Property Age: </strong>Under Construction (Possession in Jan 2022)</h5> <br> <h5><strong>Furnishing: </strong>Unfurnished</h5> <br> <h5><strong>Amenities: </strong>Lift, Park, Swimming Pool, Club House</h5>")
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
    second1bhk.insertAdjacentHTML("afterbegin", "<h3>No Result found</h3>")
    document.getElementById("property-container").appendChild(second1bhk);
  }
}
