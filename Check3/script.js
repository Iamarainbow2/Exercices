const userName = document.getElementById("userName").value;
const age = document.getElementById('age').value;
const konum = document.getElementById('konum').value;
console.log(konum);



function addUser() {
  let Users = JSON.parse(localStorage.getItem("Users")) || [];

  const user = {username: userName, age: age, location: konum};
  Users.push(user);

    localStorage.setItem('Users', JSON.stringify(Users));
}








function displayUsers () {
    let Users = JSON.parse(localStorage.getItem(user)) || {};

}