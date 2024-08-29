interface User {
   id: number;
   name: string;
   username: string;
   email: string;
   address: Address;
   phone: string;
   website: string;
   company: Company;
}
 
 interface Company {
   name: string;
   catchPhrase: string;
   bs: string;
 }
 
 interface Address {
   street: string;
   suite: string;
   city: string;
   zipcode: string;
   geo: Geo;
 }
 
interface Geo {
   lat: string;
   lng: string;
}

const apiList = document.getElementById("apiList") as HTMLUListElement;

fetch("https://jsonplaceholder.typicode.com/users")
   .then((response) => response.json())
   .then((users: User[]) => {
      users.forEach((user) => {
         const li = document.createElement("li");
         li.textContent = `${user.name} - ${user.email} - ${user.phone} - ${user.address.city}`;
         apiList.appendChild(li);
      });
   });


