import users from "./users.js";

//Получить массив имен всех пользователей (поле name).
const getUserNames = (users) => {
  return users.map((user) => user.name);
};
console.log(getUserNames(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]

//Получить массив объектов пользователей по цвету глаз (поле eyeColor).
const getUserWithEyeColor = (users, color) => {
  return users.filter((user) => user.eyeColor === color);
};
console.log(getUserWithEyeColor(users, "blue")); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]

//Получить массив имен пользователей по полу (поле gender).
const getUsersWithGender = (users, gender) => {
  return users
    .filter((user) => user.gender === gender)
    .map((user) => user.name);
};
console.log(getUsersWithGender(users, "male")); //// [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]

//Получить массив только неактивных пользователей (поле isActive).
const getInactiveUsers = (users) => {
  return users.filter((user) => !user.isActive).map((user) => user.name);

  //return users.filter((user) => !user.isActive);
};
console.log(getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]

//Получить пользоваля (не массив) по email (поле email, он уникальный).
const getUsersWithEmail = (users, email) => {
  return users.find((user) => user.email === email);
};
console.log(getUsersWithEmail(users, "shereeanthony@kog.com")); // {объект пользователя Sheree Anthony}
console.log(getUsersWithEmail(users, "elmahead@omatom.com")); // {объект пользователя Elma Head}

//Получить массив пользователей попадающих в возрастную категорию от min до max лет (поле age).
const getUsersWithAge = (users, min, max) => {
  return users.filter((user) => user.age > min && user.age < max);
};
console.log(getUsersWithAge(users, 20, 30)); // [объект Ross Vazquez, объект Elma Head, объект Carey Barr]
console.log(getUsersWithAge(users, 30, 40)); // [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]

//Получить общую сумму баланса (поле balance) всех пользователей.
const calculateTotalBalance = (users) => {
  return users.reduce((totalBalance, user) => totalBalance + user.balance, 0);
};
console.log(calculateTotalBalance(users)); // 20916

//Массив имен всех пользователей у которых есть друг с указанным именем.
const getUserWithFriends = (users, friendName) => {
  return users
    .filter((user) => user.friends.includes(friendName))
    .map((user) => user.name);
};
console.log(getUserWithFriends(users, "Briana Decker")); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUserWithFriends(users, "Goldie Gentry")); // [ 'Elma Head', 'Sheree Anthony' ]

//Массив имен (поле name) людей, отсортированных в зависимости от количества их друзей (поле friends)
const getNamesSortedByFriendsCount = (users) => {
  // const SortedByFriendsCount = (a, b) => a.friends.length - b.friends.length;
  // return users.sort(SortedByFriendsCount).map((user) => user.name);

  return users
    .sort(function (a, b) {
      return a.friends.length - b.friends.length;
    })
    .map((user) => user.name);
};
console.log(getNamesSortedByFriendsCount(users)); // [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]

//Получить массив всех умений всех пользователей (поле skills), при этом не должно быть повторяющихся умений и они должны быть отсортированы в алфавитном порядке.
const getSortedUniqueSkills = (users) => {
  const getSkills = (users) =>
    users.reduce((allSkills, user) => {
      allSkills.push(...user.skills);

      return allSkills;
    }, []);
  console.log(getSkills(users));

  const unique = getSkills(users).reduce((accumulator, element) => {
    if (!accumulator.includes(element)) {
      accumulator.push(element);
    }
    return accumulator;
  }, []);
  console.log(unique);
  return unique.sort();
};
console.log(getSortedUniqueSkills(users)); // [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]
