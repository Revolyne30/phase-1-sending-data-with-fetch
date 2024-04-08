function submitData(name, email) {
    let userData = {
      name: name,
      email: email
    };
  
    let configObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(userData)
    };
  
    return fetch("http://localhost:3000/users", configObj)
      .then(response => response.json())
      .then(data => {
        document.body.innerHTML += `<p>${data.id}</p>`;
      })
      .catch(error => {
        document.body.innerHTML += `<p>Error: ${error.message}</p>`;
      });
  }
np  
