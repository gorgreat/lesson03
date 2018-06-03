let yourBudget,
    nameYourStore,
    price = 1000; // цена чтобы проверить скидку

//запуск
function start() {
  yourBudget = prompt('Ваш бюджет на месяц?');
  while (isNaN(yourBudget) || yourBudget == '' || yourBudget == null) {
    yourBudget = prompt('Ваш бюджет на месяц?');
  }
  nameYourStore = prompt('Название вашего магазина?').toUpperCase();
  time = 21;
}

start();

let mainList = {
  budget: yourBudget,
  nameStore: nameYourStore,
  shopGoods: [],
  employers: {},
  open: false,
  discount: false
}

//выбор типов товаров
function chooseGoods() {
  for (let i = 0; i < 5; i++) {
    let a = prompt('Какой тип товара будем продавать?');

    if ((typeof (a)) === 'string' && (typeof (a)) !== null && a != '' && a.length < 50) {
      console.log('Все верно');
      mainList.shopGoods[i] = a;
    } else {
      console.log('Неверные данные введите по новой');
      i = --i; //обнуляет счетчик и нужно вводить 5 товаров по новой
    }
  };
}

chooseGoods();

//время работы
function workTime(time) {
  if (time < 0) {
    console.log('не может быть');
    } else if (time > 8 && time < 20) {
      console.log('время работать');
      } else if (time < 24) {
        console.log('Слишком поздно');
        } else {
          console.log('В сутках 24 часа');
        }
}

workTime(19);

//бюджет на день
function budgetDay(x) {
  let budgetDay = x / 30;
  console.log('Бюждет на день: ' + budgetDay);
}
budgetDay(mainList.budget);

//есть ли скидка
function getDiscount(x, price) {
  if (x === true) {
    mainList.discount = true; 
    price = price * 80 / 100;
    console.log(`Действует скидка. Ваша скидка ${price}`)    
  } else {
      console.log('Скидки нет');
    }
}
getDiscount(true, price);

//найм сотрудников
/*function getEmployers() {
  for (let i = 0; i < 4; i++) {
    let name = prompt('Имя сотрудника');  
    mainList.employers[i] = name;
  }  
}
getEmployers()*/


console.log(mainList);
