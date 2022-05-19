class ExtendedDate extends Date {
  constructor(date) {
    super();
    this._date = new Date(date);
  }

  textDate() {
    let resultNumb
    let todayDate = this._date.getDate().toString();

    let month = [
      "Января",
      "Февраля",
      "Марта",
      "Апреля",
      "Мая",
      "Июня",
      "Июля",
      "Августа",
      "Сентября",
      "Октября",
      "Ноября",
      "Декабря"
    ];
    let numb1 = [
      "первое",
      "второе",
      "третье",
      "четвёртое",
      "пятое",
      "шестое",
      "седьмое",
      "восьмое",
      "девятое",
      "десятое"
    ];
    let numb2 = [
      "один",
      "две",
      "три",
      "четыр",
      "пят",
      "шест",
      "сем",
      "восем",
      "девят"
    ];
    let numb3 = ["двадцать", "тридцать"];
    let numb4 = ["двадцатое", "тридцатое"];

    if (this._date.getDate() < 11) resultNumb = numb1[this.date.getDate() - 1];
    else if (this._date.getDate() < 20)
      resultNumb = numb2[this._date.getDate() - 11] + "надцатое";
    else if (this._date.getDate() === 20 || this._date.getDate() === 30)
      resultNumb = numb4[todayDate[0] - 2];
    else if (this._date.getDate() <= 31)
      resultNumb = numb3[todayDate[0] - 2] + " " + numb1[todayDate[1] - 1];

    return (
      "Дата: " +
      resultNumb.slice(0, 1).toUpperCase() +
      resultNumb.slice(1) +
      " " +
      month[this._date.getMonth()] +
      " " +
      this._date.getFullYear()
    );
  }

  checkLeapYear() {
    let year = this._date.getFullYear();
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0)
      return "Високосный";
    else return "Не високосный";
    console.log(this._date.getFullYear());
  }
  nextDay() {
    this._date.setDate(this._date.getDate() + 1);
    return "Завтра:" + this.textDate().replace("Дата:", "");
  }

  checkDay() {
    return this._date >= this ? "Это будущая дата " : "Это прошедшая дата";
  }
}

let date = new ExtendedDate("05.18.2022");
console.log(date.textDate());
console.log(date.checkDay());
console.log(date.checkLeapYear());
console.log(date.nextDay());