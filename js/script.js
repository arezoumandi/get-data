
window.addEventListener('DOMContentLoaded', datafetch);
let el = document.querySelector(".user-data");
uri = 'http://localhost:3000/users';


document.getElementById("search").addEventListener('click', filter)
document.getElementById("id-filter").addEventListener('keydown',function(event){
    if (event.key === "Enter")
    {
        filter()
    }
})
document.getElementById("name-filter").addEventListener('keydown',function(event){
    if (event.key === "Enter")
    {
        filter();
    }
})

function datafetch() {
    let temp = `
        <tr>
            <th>id</th>
            <th>username</th>
            <th>name</th>
            <th>phome</th>
            <th>email</th>
        </tr>`;
    fetch(uri)
        .then((response) => {
            console.log(response)
            return (response.json());
        })
        .then((data) => {
            data.forEach(user => {
                temp += `
                    <tr class=rows>
                        <td>${user.id}</td>
                        <td>${user.usernam}</td>
                        <td>${user.name}</td>
                        <td>${user.phone}</td>
                        <td>${user.email}</td>
                    </tr>
                
                
                `
                el.innerHTML = temp;


            });

        });

        fetch("http://localhost:3000/users?_page=2&_limit=7").then((response)=>{
            return response;
        });
}

function filter() {
    let temp = `
        <tr>
            <th>id</th>
            <th>username</th>
            <th>name</th>
            <th>phome</th>
            <th>email</th>
        </tr>`;
    let id = document.getElementById("id-filter").value;
    let name = document.getElementById("name-filter").value;
    let filterUrl = uri + "?";
    if (id) {
        filterUrl += `id=${id}`
    }
    if (name) {
        filterUrl += `&name_like=${name}`;
    }
    fetch(filterUrl).then((response) => {
        return (response.json());
    }).then((result) => {
       if(( Object.keys( result ).length )>0) {

           result.forEach(user => {
               temp += `
                   <tr class=rows>
                       <td>${user.id}</td>
                       <td>${user.usernam}</td>
                       <td>${user.name}</td>
                       <td>${user.phone}</td>
                       <td>${user.email}</td>
                   </tr>                        
               `
              
           });
       }else{
        temp += "";
       }
       el.innerHTML = temp;
    });
    id="";
    name="";
}