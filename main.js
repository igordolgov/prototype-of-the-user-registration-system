'use strict';
//функция создает объект типа User, предназначенный для
//сохранения каждой отдельной записи о пользователе:
function User(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.regDate = new Date().toLocaleString();
}
//функция создает объект типа “список пользователей”:
function UserList() {
  //внутреннее свойство-массив, в которое будут попадать
  //объекты типа User:
  this.users = [];
  //метод получает в качестве параметра объект типа User
  //и сохраняет его в массив:
  this.add = function(user) {
    this.users.push(user);
  };
  //метод возвращает список пользователей из массива users:
  this.getAllUsers = function() {
    for (let i = 0; i<this.users.length;i++) {
      console.log(this.users[i].firstName);
      console.log(this.users[i].lastName);
      console.log(this.users[i].regDate)
    }
  };
}
//создаем новый экземпляр объекта UserList:
let userList = new UserList();

let newUser;

//выводим  prompt и повторяем его, пока пользователь не нажмет “Отмена”:
while (newUser = prompt("Введите Ваше имя и фамилию через пробел", "")) {
  //разбиваем строку на массив по разделителю "Пробел":
  let userName = newUser.split(' ');

  if (userName.length === 2) {
    let user = new User(userName[0], userName[1]);
   // Созданный экземпляр объекта сохраняется в свойство-массив users созданного ранее объекта типа UserList:
    userList.add(user);
  } else {
    alert("Введите Ваше имя и фамилию через пробел");
  }
}

userList.getAllUsers();
