//Потрібно створити функцію яка буде приймати 2 параметри
//1 параметр це масив всіх юзерів
//2 параметр це масив з іменами чоловічими
// Функція повина повертати масив з індексами імен.
// const men = ["Artem", "Maksim", "David", "Roman"];
// const users = [
//   "Artem",
//   "Anna",
//   "Larisa",
//   "Maksim",
//   "Svetlana",
//   "David",
//   "Roman",
//   "Olga",
// ];

// function sortUsres(users, men) {
//   for (const user of users) {
//     if (!mens.includes(user)) {
//       const women = [];
//       women.push(user);
//     }
//     return women;
//   }
// }
// console.log(sortUsres(users, mens));

//создаем цикл
//входит ли значение в массив
//если входят - ничего не делаем
//если не входит - то создать новый массив
//

//TAsk2
// потрібно  порахувати за скільки днів Равлик зможе виповзти з колодязя
// в день Равлик проповзає на 7 м в гору, а за ніч опускається на 2 м в низ
// 42 м, виповзе за 8 днів
// 17 м, виповзе за 3 дні
// 18 м, виповзе за 4 дні

// function calculateDays(depth) {
//   //створити 2 змінні daySpeed=7 nightSpeed=2
//   const daySpeed = 7;
//   const nightSpeed = 2;
//   let total = 0;
//   let days = 0;
//   розрахувати скільки проповз totalDistance=0
//  countDays створити зміну, яка рахує кількість днів в дорозі
//   глибина менше за ту дистанцію яку ми пройшли
//   while (depth > total) {
//     total += daySpeed;
//     days += 1;
//     if (depth > total) {
//       total -= nightSpeed;
//     }
//   }
//   console.log(total, days);
// }

//calculateDays(42);
//calculateDays(17);
// calculateDays(18);

//task3

// Потрібно створити функцію яка буде находити в масиві елементи що дублюються і потім ці елменти добавляти в новий масив
// const numbers = [1, 2, 3, 2, 1, 17, 19];
//1.Створюємо функцію

// function newArray(arr) {
//   console.log(arr);
//створили пустий массив
//   const arr2 = [];
//створили цикл перебору значень i
//   for (let i = 0; i < arr.length; i += 1) {
//  console.log("значення", arr[i]);
//створили цикл перебору значень j наступних значень
//  for (let j = i + 1; j < arr.length; j += 1) {
// console.log("кожне наступне значення", arr[j]);
//порівняння чи дорівнює елемент кожному наступному
// if (arr[i] === arr[j]) {
//створення нового массиву
//         arr2.push(arr[j]);
//       }
//     }
//   }
//   console.log(arr2);
//2.Перебираємо массив
//}

//newArray(numbers);

// //Видалити дубльовані елементи
// const numbers = [1, 2, 3, 2, 1, 1, 17, 19];
// //1.Створюємо функцію

// function newArray(arr) {
//   console.log(arr);
//   //створили пустий массив
//   const arr2 = [];
//   //створили цикл перебору значень i
//   for (let i = 0; i < arr.length; i += 1) {
//     console.log("значення", arr[i]);
//     //створили цикл перебору значень j наступних значень
//     for (let j = i + 1; j < arr.length; j += 1) {
//       console.log("кожне наступне значення", arr[j]);
//       //порівняння чи дорівнює елемент кожному наступному
//       if (arr[i] === arr[j]) {
//         //створення нового массиву
//         arr.splice(j, 1);
//         j -= 1;
//       }
//     }
//   }
//   console.log(arr);
//   //2.Перебираємо массив
// }

// newArray(numbers);
//Перебираємо масив с кінця до початку
//Видалити дубльовані елементи
// const numbers = [1, 2, 3, 2, 1, 1, 17, 19];
// //1.Створюємо функцію

// function newArray(arr) {
//   console.log(arr);
//   //створили пустий массив
//   const arr2 = [];
//   //створили цикл перебору значень i
//   for (let i = arr.length - 1; i >= 0; i -= 1) {
//     console.log("значення", arr[i]);
//     //створили цикл перебору значень j наступних значень
//     for (let j = i - 1; j >= 0; j -= 1) {
//       console.log("кожне наступне значення", arr[j]);
//       //порівняння чи дорівнює елемент кожному наступному
//       if (arr[i] === arr[j]) {
//         //створення нового массиву
//         arr.splice(i, 1);
//       }
//     }
//   }
//   console.log(arr);
//   //2.Перебираємо массив
// }

// newArray(numbers);

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   // Change code below this line
//   const newArr = [];
//   for (const product of products) {
//     const keys = Object.keys(product);

//     for (const key of keys) {
//       if (propName === key) {
//         newArr.push(product[key]);
//       }
//     }
//   }
//   return newArr;
//   // Change code above this line
// }
// console.log(getAllPropValues("price"));

// const film = {
//   title: "Matrix",
//   description: "Lorem ipsun sit",
//   raiting: 4,
//   actors: ["Aiden", "Mason", "Jimmy"],
//   isAdult: true,
//   //   location: {
//   //     country: "Jamaica",
//   //     city: "Ocho Rios",
//   //   },
// };

// // film.raiting = 5;

// // //чтоб доавить обьект в объект

// // film.location = {
// //   country: "Jamaica",
// //   city: "Ocho Rios",
// // };

// const userLocation = "location";
// film[userLocation] = {
//   country: "Jamaica",
//   city: "Ocho Rios",
// };

// film["preview"] = "./img/img.jpeg";

// console.log(film);
// const courses = [
//   "js",
//   "nodejs",
//   "html",
//   "css",
//   "html",
//   "js",
//   "nodejs",
//   "css",
//   "react",
//   "js",
//   "nodejs",
//   "react",
// ];
// const stats = {};

// for (const course of courses) {
//   if (stats[course]) {
//     stats[course] += 1;
//   } else {
//     stats[course] = 1;
//   }
// }
// console.log(stats);

// function makeTask(data) {
//   const completed = false;
//   const category = "General";
//   const priority = "Normal";
//   // Change code below this line
//   const newObject = {
//     completed,
//     category,
//     priority,
//     ...data,
//   };

//   return newObject;
//   // Change code above this line
// }
// console.log(makeTask({}));
// console.log(
//   makeTask({
//     category: "Homemade",
//     priority: "Low",
//     text: "Take out the trash",
//   })
// );
// console.log(makeTask({ category: "Finance", text: "Take interest" }));
// console.log(makeTask({ priority: "Low", text: "Choose shampoo" }));
// console.log(makeTask({ text: "Buy bread" }));

// Change code below this line
// function addOverNum(a, ...args) {
//   let total = 0;
//   for (let i = 0; i < args.length; i += 1) {
//     if (args[i] > a) {
//       total += args[i];
//       continue;
//     }
//   }

//   return total;
//   // Change code above this line
// }

// console.log(addOverNum(50, 15, 27));
// console.log(addOverNum(10, 12, 4, 11, 48, 10, 8));
// console.log(addOverNum(15, 32, 6, 13, 19, 8));
// console.log(addOverNum(20, 74, 11, 62, 46, 12, 36));

// const bookShelf = {
//   books: ["The last kingdom", "Haze", "The guardian of dreams"],
//   updateBook(oldName, newName) {
//     // Change code below this line
//     for (const book of this.books) {
//       if (oldName === book) {
//         this.books.splice(this.books.indexOf(book), 1, newName);
//       }
//     }
//     return this.books;
//     // Change code above this line
//   },
// };
// console.log(bookShelf.updateBook("Haze", "Dungeon chronicles"));
// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],
//   // Change code below this line
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
//     for (const { name } of this.potions) {
//       console.log(name);
//       if (name === newPotion.name) {
//         return `Error! Potion ${newPotion.name} is already in your inventory!`;
//       }
//     }
//     this.potions.push(newPotion);
//   },
//   removePotion(potionName) {
//     for (const potion of this.potions) {
//       if (potion.name === potionName) {
//         this.potions.splice(this.potions.indexOf(potion), 1);
//         continue;
//       }
//     }
//     return this.potions;
//   },
//   updatePotionName(oldName, newName) {
//     // Change code below this line
//     for (const potion of this.potions) {
//       console.log(potion);
//       if (oldName === potion.name) {
//         potion.name = newName;
//       }
//     }
//     return this.potions;
//   },

//   // Change code above this line
// };

// console.log(atTheOldToad.updatePotionName("Dragon breath", "Polymorth"));
// console.log(atTheOldToad.getPotions());

// Значение свойства atTheOldToad.updatePotionName это метод объекта
// Для исходного объекта после вызова метода atTheOldToad.updatePotionName("Dragon breath", "Polymorth"), в свойстве potions будет массив [{ name: "Speed potion", price: 460 }, { name: "Polymorth", price: 780 }, { name: "Stone skin", price: 520 } ]
// Для исходного объекта после вызова метода atTheOldToad.updatePotionName("Stone skin", "Invulnerability potion"), в свойстве potions будет массив [{ name: "Speed potion", price: 460 }, { name: "Dragon breath", price: 780 }, { name: "Invulnerability potion", price: 520 } ]

// const pizzaPalace = {
//   pizzas: ["Ultracheese", "Smoked", "Four meats"],
//   order(pizzaName, onSuccess, onError) {
//     const isInclude = this.pizzas.includes(pizzaName);
//     console.log(isInclude);
//     if (!isInclude) {
//       onError(`There is no pizza with a name ${pizzaName} in the assortment.`);
//       return;
//     }
//     onSuccess(pizzaName);
//   },
// };
// // Change code above this line

// // Callback for onSuccess
// function makePizza(pizzaName) {
//   return `Your order is accepted. Cooking pizza ${pizzaName}.`;
// }

// // Callback for onError
// function onOrderError(error) {
//   return `Error! ${error}`;
// }

// // Method calls with callbacks

// //pizzaPalace.order("Smoked", makePizza, onOrderError);
// pizzaPalace.order("Four meats", makePizza, onOrderError);
// pizzaPalace.order("Big Mike", makePizza, onOrderError);
// // pizzaPalace.order("Vienna", makePizza, onOrderError);

// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male",
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female",
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male",
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female",
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male",
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male",
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female",
//   },
// ];

// const getTotalFriendCount = (users) => {
//   return users.reduce((total, user) => {
//     const arrayLenght = user.friends;
//     return total + arrayLenght.length;
//   }, 0);
// };

// console.log(getTotalFriendCount(users));

// class Storage {
//   constructor(items) {
//     this.items = items;
//   }
//   getItems() {
//     return this.items;
//   }
//   addItem(newItem) {
//     return this.items.push(newItem);
//   }
//   removeItem(itemToRemove) {
//     return this.items.splice(this.items.indexOf(itemToRemove), 1);
//   }
// }

// // Change code above this line
// const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
// storage.addItem("Droid");
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
// storage.removeItem("Prolonger");
// console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

// class StringBuilder {
//   constructor(value) {
//     this.value = value;
//   }

//   getValue() {
//     return this.value;
//   }

//   padEnd(str) {
//     this.value = this.value + str;
//     return this.value;
//   }

//   padStart(str) {
//     this.value = str + this.value;
//     return this.value;
//   }

//   padBoth(str) {
//     this.value = str + this.value + str;
//     return this.value;
//   }
// }

// // Change code above this line
// const builder = new StringBuilder(".");
// console.log(builder.getValue()); // "."
// builder.padStart("^");
// console.log(builder.getValue()); // "^."
// builder.padEnd("^");
// console.log(builder.getValue()); // "^.^"
// builder.padBoth("=");
// console.log(builder.getValue()); // "=^.^="

// let count = 0;

// function cc(card) {
//   // Змініть код лише під цим рядком
//   switch (card) {
//     case 2:
//     case 3:
//     case 4:
//     case 5:
//     case 6:
//       count -= 1;
//       break;

//     case 10:
//     case "J":
//     case "Q":
//     case "К":
//     case "A":
//       count -= 1;
//       break;
//   }

//   if (count > 0) {
//     return count + " Bet";
//   }
//   return count + " Hold";
//   // Змініть код лише над цим рядком
// }
