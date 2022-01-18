import rickmorty from "./assets/images/rick_y_morty.jpg";
import todolist from "./assets/images/todolist.jpg";
import lucky from "./assets/images/lucky.jpg";
import pokemon from "./assets/images/pokemon.jpg";
import diving from "./assets/images/buceo.jpg"


const workData = [
    {
        title: "Lucky",
        image: lucky ,
        description: "Proyecto grupal realizado con React , aplicación de adopción de mascotas, versión mobile. ",
        link: "https://project-lucky.netlify.app/",
    },
    {
        title: "LuckyApi",
        image: lucky ,
        description: "Api del Proyecto grupal realizado con NodeJs, aplicación de adopción de mascotas, versión mobile. ",
        link: "https://github.com/DavidDlp/project-lucky-api",
    },
    {
        title: "Diving paradise",
        image: diving,
        description: "Landing page, realizado con React & Material UI. Elige tu destino favorito para disfrutar de tu hobby.",
        link: "https://divingparadise.netlify.app/",
    },
    {
        title: "Todo List",
        image: todolist,
        description: "Proyecto Todo list realizado con JavaScripts.",
        link: "https://daviddlp.github.io/js-todolist/",
    },
    {
        title: "Pokedex",
        image: pokemon,
        description: "Proyecto sobre pokemon, uso del DOM y el fetch, realizado con JavaScripts.",
        link: "https://daviddlp.github.io/Pokemon-js/",
    },
    {
        title: "Rick&Morty",
        image: rickmorty,
        description: "Proyecto realizado con Angular y Bootstrap, sobre la serie de animacion Rick and Morty.",
        link: "https://github.com/DavidDlp/rick-morty-angular",
    },
    
];

export default workData;