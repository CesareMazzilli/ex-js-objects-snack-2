//Snack 1

//const hamburger = { name: "Cheese Burger", weight: 250 };
//const secondBurger = hamburger;
//secondBurger.name = 'Double Cheese Burger';
//secondBurger.weight = 500;

//console.log(hamburger.name); // Double Cheese Burger
//console.log(secondBurger.name ); // Double Cheese Burger, anche qui

//Domanda1: viene stampata la stessa cosa, perchè abbiamo sostituito la proprietà name del primo oggetto
//Domanda2: 1

//Snack 2

//const hamburger = { 
//	name: "Cheese Burger", 
//	weight: 250,
//	ingredients: ["Cheese", "Meat", "Bread", "Tomato"]
//};

//const secondBurger = {...hamburger};
//secondBurger.ingredients[0] = "Salad";

//console.log(hamburger.ingredients[0]); //Salad
//console.log(secondBurger.ingredients[0]); //Salad

//Domanda1: 3 e non 4, perchè lo spread operator non copia oggetti annidati
//Domanda2: 2, uno per hamburger e uno per secondBurger

//Snack 3

//const hamburger = { 
//	name: "Cheese Burger", 
//	weight: 250,
//	maker: {
//		name: "Anonymous Chef",
//		restaurant: {
//			name: "Hyur's Burgers",
//			address: "Main Street, 123",
//			isOpen: true,
//		},
//		age: 29
//	}
//};

//const secondBurger = structuredClone(hamburger);
//const thirdBurger = structuredClone(hamburger);

//Domanda: per ogni oggetto "principale" (hamburger, secondBurger, thirdBurger) abbiamo 3 oggetti annidati, quindi 3*3=9 oggetti totali

//Snack 4

//const chef = {
//	name: "Chef Hyur",
//	age: 29,
//	makeBurger: (num = 1) => {
//		console.log(`Ecco ${num} hamburger per te!`);
//	},
//}

//const chefCopia = {...chef};
//console.log(chefCopia);

//const restaurant = {
//	name: "Hyur's Burgers",
//	address: {
//		street: 'Main Street',
//		number: 123,
//	},
//	openingDate: new Date(2025, 3, 11),
//	isOpen: false,
//};

//const restaurantCopy = structuredClone(restaurant);
//console.log(restaurantCopy);

//Domanda1: lo Spread operator, perchè è più semplice non avendo altri oggetti annidati
//Domanda2: structuredClone, perchè clona anche address (che è l'oggetto annidato di restaurant), avendo quindi un "nuovo" ristorante ed un "nuovo" indirizzo per un totale di 4 oggetti, invece che 3 -> clonando quindi restaurant nella sua interezza

//Snack 5 (Bonus)

//const hamburger = { 
//	name: "Cheese Burger", 
//	weight: 250,
//	maker: {
//		name: "Anonymous Chef",
//		restaurant: {
//			name: "Hyur's Burgers",
//			address: "Main Street, 123",
//			isOpen: true,
//		},
//		age: 29
//	}
//};

//const newRestaurant = {...hamburger.maker.restaurant};
//newRestaurant.name = "Hyur's II";
//newRestaurant.address = "Second Street, 12";
//const secondBurger = {...hamburger};
//secondBurger.maker.restaurant = newRestaurant;
//secondBurger.maker.name = "Chef Hyur";

//console.log(hamburger.maker.name); // Chef Hyur
//console.log(secondBurger.maker.name); // Chef Hyur
//console.log(hamburger.maker.restaurant.name); // Hyur's II
//console.log(secondBurger.maker.restaurant.name); // Hyur's II

//Domanda1: (vedi sopra)
//Domanda2: 5: hamburger, maker, restaurant, restaurant(dovuto a newRestaurant), hamburger(dovuto a secondBurger)
//[se avessimo usato il JSON.parse(JSON.stringfy()) ne avremmo avuti 7 (un altro maker e un altro restaurant)]

//Snack 6 (Bonus)

//const chef = {
//	name: "Chef Hyur",
//	age: 29,
//	makeBurger: (num = 1) => {
//		console.log(`Ecco ${num} hamburger per te!`);
//	},
//	restaurant: {
//		name: "Hyur's Burgers",
//		welcomeClient: () => {
//			console.log("Benvenuto!");
//		},
//		address: {
//			street: 'Main Street',
//			number: 123,
//			showAddress: () => {
//				console.log("Main Street 123");
//			}
//		},
//		isOpen: true,
//	}
//}

//const chefCopy = {
//    ...chef,
//    restaurant: {
//        ...chef.restaurant,
//        address: {
//            ...chef.restaurant.address
//        }
//    }
//}

//console.log(chefCopy);

//Domanda: usando tanti Spread Operator annidati, perchè lo Spread Operator è l'unico metodo che ci permette di copiare le funzioni

//Snack 7 (Bonus)
// usiamo una funzione ricorsiva, ovvero una funzione che richiama se stessa

//const chef = {
//	name: "Chef Hyur",
//	age: 29,
//	makeBurger: (num = 1) => {
//		console.log(`Ecco ${num} hamburger per te!`);
//	},
//	restaurant: {
//		name: "Hyur's Burgers",
//		welcomeClient: () => {
//			console.log("Benvenuto!");
//		},
//		address: {
//			street: 'Main Street',
//			number: 123,
//			showAddress: () => {
//				console.log("Main Street 123");
//			}
//		},
//		isOpen: true,
//	}
//}

//function deepCopy(obj){
//    if(typeof obj !== 'object'){
//        return obj;
//    }
//    const copy = {};
//    for(const key in obj){
//        const value = obj[key];
//        if(typeof value !== 'object'){
//            copy[key] = value;
//        }else{
//            copy[key] = deepCopy(value);
//        }
//    }
//    return copy;
//}

//const chefCopy = deepCopy(chef);
//console.log(chefCopy);