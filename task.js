'use strict'
function solveEquation(a, b, c) {
  let arr = [];
  if (a < 0) {
    return false;
  }
  let x1;
  let x2;
  let discriminant = (b ** 2 - 4 * a * c);

  if (discriminant < 0) {
    return arr;
  } else if (discriminant === 0) {
     x1 = arr.push((-b + Math.sqrt(discriminant)) / (2 * a));
     return x1
     
  } else if (discriminant > 0) {
    let answer = {};
    x1 = arr.push((-b + Math.sqrt(discriminant)) / (2 * a));
    x2 = arr.push((-b - Math.sqrt(discriminant)) / (2 * a));
    answer.firstRoot = x1;
    answer.SecondRoot = x2;
    return answer;

  }

  return arr; // array
}
	

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;
  let S = amount - contribution; 
  let P = percent / 100 / 12; 
  let date1 = new Date();
  let n = (date.getFullYear()*12 + date.getMonth()) - (date1.getFullYear()*12 + date1.getMonth());
  
  if ((percent < 0 ||  contribution < 0 || amount < 0 || n < 0 ) || 
  (isNaN(percent) === true|| isNaN(contribution) === true || isNaN(amount) === true || isNaN(date) === true)) {
      return "Ошибка данные введены неверно";
  }

  let monthAmount = S * ( P + P / (((1 + P) ** n) - 1));
   totalAmount = monthAmount * n;

  return totalAmount.toFixed(2);


}


