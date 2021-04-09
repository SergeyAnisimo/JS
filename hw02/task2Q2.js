var a = 1;
var b = 4;

if(a > 0 && b > 0){
	var c = b - a;
	console.log(c);
}else if(a < 0 && b < 0){
	var c = b * a;
	console.log(c);
} else if (a > 0 && b < 0 || a < 0 && b > 0){
	var c = a + b;
	console.log(c);
}