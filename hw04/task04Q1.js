var divideNumber = {
	number: +prompt('Введите число от 0 до 999'),
	units: 0,
	tens: 0,
	hundreds: 0,
};

if (divideNumber.number <= 9) {
	divideNumber.units = digit.number;
} else if (divideNumber.number <= 999) {
	divideNumber.units = Math.floor(divideNumber.number % 10);
	divideNumber.tens = Math.floor(divideNumber.number / 10 % 10);
	divideNumber.hundreds = Math.floor(divideNumber.number / 100 % 10);
} else {
	divideNumber.number = 0;
	console.log('Вы ввели число за диапазоном 0 - 999');
	alert('Вы ввели число за диапазоном 0 - 999');
}
console.log(divideNumber);


