const userName = document.getElementById("userName");
const age = document.getElementById('age');
const konum = document.getElementById('konum');
console.log(konum);



function addUser() {
  let Users = JSON.parse(localStorage.getItem("Users")) || [];

  const user = {username: userName.value, age: age.value, location: konum.value};
  Users.push(user);

    localStorage.setItem('Users', JSON.stringify(Users));
}








function displayUsers () {
    let Users = JSON.parse(localStorage.getItem("Users")) || {};
    console.log(Users);

}