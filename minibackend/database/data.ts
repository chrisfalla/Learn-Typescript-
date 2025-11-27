import { Instrument } from "../model/Instrument";
import { User } from "../model/User";


export const users: User[] = [
    {
        id: 1,
        name: "Christofer Falla",
        email: "chris@gmail.com",
        typeId: "Cedula",
        higth: 1.82,
        married: false
    },
    {
        id: 2,
        name: "Lucia Ropero",
        email: "luci@gmail.com",
        typeId: "Cedula",
        higth: 1.75,
        married: false
    },
    {
        id: 3,
        name: "Laura Ropero",
        email: "lau@gmail.com",
        typeId: "Cedula",
        higth: 1.70,
        married: true
    },
    {
        id: 4,
        name: "Jhon Torres",
        email: "jhon@gmail.com",
        typeId: "Cedula",
        higth: 1.72,
        married: true
    },
];


 export const instruments: Instrument[] = [
    {
        id: 1,
        name: "Guitarr",
        color: "Coffe-Caoba",
        type: "Strings",
        inStock: true,
        price: 500
    },
    {
        id: 2,
        name: "Flaute",
        color: "White",
        type: "Wind",
        inStock: false,
        price: 80
    },
    {
        id: 3,
        name: "Piano",
        color: "Black-White",
        type: "Armonic",
        inStock: true,
        price: 1000
    },
    {
        id: 4,
        name: "Bass",
        color: "Orange-Dark",
        type: "Strings",
        inStock: false,
        price: 750
    },
];