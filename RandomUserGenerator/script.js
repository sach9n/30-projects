// const User = fetch('https://randomuser.me/api/');

// User.then(Response => Response.json())
// .then(data => console.log(data.results))

function fetchUser(){
  fetch('https://randomuser.me/api/')
  .then(res => res.json())
  .then((data)=>{
    displayUser(data.results[0]);
  })
}

function displayUser(user){
  const userDisplay = document.querySelector('.contents')
  if(user.gender === 'female'){

    document.body.style.backgroundColor = "blue";
  }else {
    document.body.style.backgroundColor = "blueviolet";
  }

 userDisplay.innerHTML = 
 `

   <img src="${user.picture.large}" alt="profileImg">
   
 <div class="Elements">
   <p><strong>Name</strong> : ${user.name.first} ${user.name.last}</p>
   <p><strong>Email</strong> : ${user.email}</p>
   <p><strong>Phone</strong> : ${user.phone}</p>
   <p><strong>Location</strong> : ${user.location.city} ${user.location.country}</p>
   <p><strong>Age</strong> : ${user.dob.age}</p>
 </div>
 
`    

}

document.querySelector('#generateUser').addEventListener('click', fetchUser);

fetchUser();