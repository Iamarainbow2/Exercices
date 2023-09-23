function signUp() {
    const userName = document.getElementById('userName').value;
    const password = parseInt(document.getElementById('password').value);

    if (!userName || isNaN(password)) {
        alert('Please Enter Valid Username/Password!')
        return;
    }
    
    let users = JSON.parse(localStorage.getItem('users')) || [];
    const Usernameindex = users.findIndex(user => user.name === userName);

     if (Usernameindex !== -1) {
      users[Usernameindex].stock += password;
      } else {
      const user = { name: userName, password: password };
      users.push(user);
     }

    localStorage.setItem('users', JSON.stringify(users));
  
}

function displayuserName() {
    const userlist = document.getElementById('userlist');
    userlist.innerHTML = '';
  
    let users = JSON.parse(localStorage.getItem('users')) || [];
  
    for (let i = 0; i < users.length; i++) {
      const user = users[i];
      if (user.stock > 0) {
        const li = document.createElement('li');
        li.innerHTML = `<span>${user.name} (Stock: ${user.stock})</span>
                        <button onclick="sellCar(${i})">Sell One</button>`;
        userlist.appendChild(li);
      }
    }
  }

  function login() {
    const userName = document.getElementById('userName').value;
    const password = parseInt(document.getElementById('password').value);

    if (!userName || isNaN(password)) {
        alert('Please Enter Valid Username/Password!')
        return;
    }
    
    let users = JSON.parse(localStorage.getItem('users')) || [];
    const Usernameindex = users.findIndex(user => user.name === userName);

     if (Usernameindex !== -1) {
      users[Usernameindex].stock += password;
      } else {
      const user = { name: userName, password: password };
      users.push(user);
     }

    localStorage.setItem('userName', JSON.stringify(userName));
  
}