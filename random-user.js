// https://randomuser.me/api/
const getUser = () => {
  fetch("https://randomuser.me/api/?gender=female")
    .then((res) => res.json())
    .then((data) => displayUser(data.results[0]));
};
const displayUser = (data) => {
  const container = document.getElementById("card-container");
  container.innerHTML = `
    <div class="card w-full lg:w-96 bg-base-100 shadow-xl">
    <figure>
      <img
        src="${data.picture.large}"
        alt="Shoes" class="rounded-full"
      />
    </figure>
    <div class="card-body">
      <h2 class="card-title">Name: ${
        data.name.first + " " + data.name.last
      }</h2>
      <p>Gender: <span class=" font-semibold">${data.gender}</span> </p>
      <p>Email: <span class="font-semibold">${data.email}</span></p>
      <p>Phone: <span class="font-semibold">${data.phone}</span></p>
      <p class="border-b-2"></p>
      <h2 class="text-2xl font-bold">Get Location</h2>
      <h2 >City: <span class="text-lg font-semibold">${
        data.location.city
      }</span></h2>
      <h2 >Country: <span class="text-xl font-semibold">${
        data.location.country
      }</span> </h2>
      <div class="card-actions justify-end">
  
<label for="my-modal" class="btn btn-primary">Call Now</label>


<input type="checkbox" id="my-modal" class="modal-toggle" />
<div class="modal">
  <div class="modal-box">
    <h3 class="font-bold text-lg">ওরেহ!! আশা কত আবার কল করতে চায় &#x1F60E;</h3>
    <p class="py-4">প্রেম পিড়িতির কথা বাদ দিয়ে লাইফ নিয়ে ভাবুন। আশা কত আহা &#x1F609;</p>
    <div class="modal-action">
      <label for="my-modal" class="btn">মাফ চাই</label>
    </div>
  </div>
</div>
        
      </div>
    </div>
  
  </div>
    `;
  const btn = document.getElementById("btn");
  document.body.insertBefore(container, btn);
};
getUser();
