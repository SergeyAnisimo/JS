console.log('Task 2-3');
let basket = [
	
	{product:'torch', price:35},
	{product:'shovel', price:40},
	{product:'sword', price:100},
]



function countBasketPrice(basket) {
            let finalBasketPrice = 0;
            for (let prod of basket){
                finalBasketPrice += prod.price;
            }
            return finalBasketPrice;
        }
console.log("Стоимость корзины: " + countBasketPrice(basket) + "$");