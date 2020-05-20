/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
}

// const property_1bhk = [
//   {
//     Name: "Green Paradise",
//     Cost: 2000000,
//     floor: "4 of 12",
//     Area: "671 sq. ft.",
//     property_age: "Under Construction",
//     furnishing: "Unfurnished",
//     EMI: 15279,
//     address: "Jahangirabad, Surat",
//     Amenities: "Parking, East-facing, Vitrified flooring, Partial power backup"
//   },
//   {
//     Name: "Asopalav Apartment",
//     Cost: 1800000,
//     floor: "2 of 10",
//     Area: "800 sq. ft.",
//     property_age: "10+ years",
//     furnishing: "Semi-furnished",
//     EMI: 14377,
//     address: "Tadwadi, Surat",
//     Amenities: "Visitor Parking, Park, Lift, Piped gas"
//   },
// ];

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
  console.log(x);
  if (iterativeFunction(arr, x, 0, arr.length-1)) {
    //console.log("Element found!");
    if(x == 1600000){
      const first1bhk = document.createElement("div");
      first1bhk.id = "prop-container";
      first1bhk.insertAdjacentHTML("afterbegin", 
      "<h2>Umiya Estate</h2> <br> <h5><strong>Carpet Area: </strong>664 sq. ft.</h5> <br> <h5><strong>Floor: </strong>3rd of 8</h5> <br> <h5><strong>Price: </strong>Rs. 16,00,000/- + GST</h5> <br> <h5><strong>EMI: </strong>Rs. 12,140(approx.)</h5> <br> <h5><strong>Address: </strong>Dindoli, Surat</h5> <br> <h5><strong>Property Age: </strong>1 year</h5> <br> <h5><strong>Furnishing: </strong>Fully furnished</h5> <br> <h5><strong>Amenities: </strong>Lift, Park, Security Personnal</h5>")
      //document.getElementById("property-container").appendChild(first1bhk);
    }
    else if(x == 1900000){
      const second1bhk = document.createElement("div");
      second1bhk.id = "prop-container";
      second1bhk.insertAdjacentHTML("afterbegin", 
      "<h2>Umiya Estate</h2> <br> <h5><strong>Carpet Area: </strong>664 sq. ft.</h5> <br> <h5><strong>Floor: </strong>3rd of 8</h5> <br> <h5><strong>Price: </strong>Rs. 16,00,000/- + GST</h5> <br> <h5><strong>EMI: </strong>Rs. 12,140(approx.)</h5> <br> <h5><strong>Address: </strong>Dindoli, Surat</h5> <br> <h5><strong>Property Age: </strong>1 year</h5> <br> <h5><strong>Furnishing: </strong>Fully furnished</h5> <br> <h5><strong>Amenities: </strong>Lift, Park, Security Personnal</h5>")
      //document.getElementById("property-container").appendChild(first1bhk);
    }
  } 
  else console.log("Element not found!"); 
}
