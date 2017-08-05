//for (i=0; i < customers.length; i++){
let container = document.querySelector(".container");
// let cust  = document.createElement("div");
// let parent = document.createElement("main");
// let head = document.createElement("h1");
// let  headTest =document.createTextNode("INTERNAL COMPANY DIRECTORS");
// head.appendChild(headTest);
// cust.appendChild(head);
// body1.appendChild(head);
// body1.appendChild(parent);
// parent.appendChild(cust);
// cust.className = "block";
// parent.className = "parent"

//
// for ( i=0; i < customers.results.length; i++){
// let image1 = document.createElement("IMG");
// image1.setAttribute("src", customers.results[i].picture.large);
// cust.appendChild(image1);
//
// }


for (i=0; i < customers.results.length; i++){
  // let image1 = document.createElement("IMG");
  // image1.setAttribute("src", customers.results[i].picture.large);
  // cust.appendChild(image1);
  let cust  = document.createElement("div");
   let first = customers.results[i].name.first;
   let last = customers.results[i].name.last;
    let email = customers.results[i].email;
    let Street = customers.results[i].location.street;
    let city = customers.results[i].location.city;
    let state = customers.results[i].location.state;
    let postcode = customers.results[i].location.postcode;
    let mobile = customers.results[i].phone;
    let ss = customers.results[i].id.value;
    cust.innerHTML = `
    <article>
<img src="${customers.results[i].picture.large}">
<h3>${first} ${last}</h3>
<p>${email}</p>
<p>${Street}</p>
<p>${city} ${state} ${postcode}</p>
<p>${mobile}</p>
<p>${ss}</p>

</article>
  `;

container.appendChild(cust);
 // document.querySelector(".container").innerHTML = post;
 // document.write(post);

}
