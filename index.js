function saveData() {
   
    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;

    let userData = {
        name: name,
        age: age
    };

    localStorage.setItem("userData", JSON.stringify(userData));

    document.getElementById("userForm").reset();

    
    document.getElementById("displayArea").style.display = "block";
}

function retrieveData() {
   
    let storedData = localStorage.getItem("userData");

  
    let userData = JSON.parse(storedData);

   
    let table = document.getElementById("dataTable");
    table.innerHTML = "<tr><th>Name</th><th>Age</th></tr>";
    table.innerHTML += "<tr><td>" + userData.name + "</td><td>" + userData.age + "</td></tr>";
}