
window.addEventListener('DOMContentLoaded', datafetch);


function datafetch()
{
    fetch('http://localhost:3000/users')
        .then((response) => {
            return(response.json());
        })
        .then((data)=>{
            data.forEach(d => {
               document.getElementById("container").innerHTML+= d.id+" : " ;
               document.getElementById("container").innerHTML+= `username: ${d.username}  &nbsp &nbsp &nbsp &nbsp &nbsp , `;
               document.getElementById("container").innerHTML+= `name: ${d.name}&nbsp &nbsp &nbsp &nbsp &nbsp, `;
               document.getElementById("container").innerHTML+= `phone number: ${d.phone}&nbsp &nbsp &nbsp &nbsp &nbsp, `;
               document.getElementById("container").innerHTML+= `Email: ${d.email} , </br>  `;

            });
            // document.getElementById("container").innerHTML+=JSON.parse(JSON.stringify(data));
            // console.log(data);
        });
}