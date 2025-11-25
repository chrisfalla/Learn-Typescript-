//my model of data
type userProfile = {
    name: string;
    age: number;
    hobbies: string[];
    suscription: [string, Date]
}

const myProfile: userProfile = {
    name: "Christofer",
    age: 20,
    hobbies: ["play guitarr", "play games", "watch movies"],
    suscription: ["platinium", new Date("25/11/2025")]
}
// console.table(myProfile);

//for clasic - when you need index 
const numbers: number[] = [1, 2, 3, 4, 5];
for (let i = 0; i < numbers.length; i++)
    console.log(i)
        ;

//for of - when just need values
for (const id of numbers) {
    console.log(`yours numbers are..${id}`)
};

//for in - with object

interface carrito {
    orange: number;
    banana: number;
    apple: number
}

const carrito = {
    orange: 2,
    banana: 20,
    apple: 5
};
for (const fruits in carrito) {
    console.log(`${fruits}: ${carrito[fruits as keyof carrito]} units`)
};

//while when don´t know amount iterations
let count: number = 1;
while (count <= 2) {
    console.log(`review list in ${count}`);
    count++;
}

