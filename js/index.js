//Variables Globales
let categoria;
let pokemonChoiceCategory;
let user;
let responseFalse = 0;
let responseTrue = 0;

//Aqui dentro de este Array vacio, se almacenan todas las preguntas que carga el usuario
const arrayQuestions = [];

//Array Random con las opciones de Juego
const arrayRandom = ['1', '2', '3'];

//Preguntas Facil
const facilQuestion1="¿Cual es el Pokemon principal de la saga?";
const facilResponse1=2;
const facilQuestion2="¿Cual es el protagonista de la serie?";
const facilResponse2=3;
const facilQuestion3="¿De que pueblo es el protagonista?";
const facilResponse3=1;
let intFacilQuestion1;
let intFacilQuestion2;
let intFacilQuestion3;

//Preguntas Dificil
const dificilQuestion1="¿Cual es el Pokemon número 15 segun la Pokedex?";
const dificilResponse1=1;
const dificilQuestion2="¿A que pokemon evoluciona Onix?";
const dificilResponse2=1;
const dificilQuestion3="¿Cual de estos es un Pokemon legendario?";
const dificilResponse3=1;
let intDificilQuestion1;
let intDificilQuestion2;
let intDificilQuestion3;


//Clase de la estructura de incorporar Preguntas
class Questions{
    constructor(question, choiceFalse, choiceFalse1, choiceFalse2, answerTrue){
        this.question = question;
        this.choiceFalse = choiceFalse;
        this.choiceFalse1 = choiceFalse1;
        this.choiceFalse2 = choiceFalse2;
        this.answerTrue = answerTrue;
    }
}

const saludar = () =>{
    user = prompt(`¡Bienvenido al Quiz de entretenimiento con diferentes preguntas sobre Videojuegos,Series y Peliculas!\n\nIngresa tu nombre o apodo para jugar:\n `);
    while (user ==="" || user === null) {
        alert("No ingresaste nada\nPara poder jugar necesitas ingresar tu nombre o apodo");
        user = prompt("Ingrese su nombre o apodo para jugar");
    }
    return user;
}

const menuPrincipal = () => {
    categoria = (prompt(`Hola ${user} :)\nIngresa el numero correspondiente al quiz que quieras elegir.\n(Solo Pokemon funciona)\n\n(1) - Quiz de Pokemon\n(2) - Quiz de Marvel\n(3) - Quiz de Harry Potter\n(4) - Sube tu pregunta relacionada a alguna seccion\n(5) - Random (Pokemon-Marvel-Harry Potter)\n(6) - SALIR o CANCELAR\n `));
    switch (categoria) {
        case '1':
            playPokemon();
        case '2':
            playMarvel();
        case '3':
            playHarryPotter();
        case '4':
            playAddQuestions();
            break;
        case '5':
            choiceRandom();
            break;
        case '6':
            break;
        case null:
            break;
        default:
            alert("Solo ingrese un numero del 1 al 6");
            return menuPrincipal();
    }
}
const playPokemon = () =>{
    pokemonChoiceCategory = parseInt(prompt(`Bien ${user}\nAntes de comenzar elige la dificultad del quiz\n(1)-Facil\n(2)-Dificil`));
    while (isNaN(pokemonChoiceCategory) || pokemonChoiceCategory > 2) {
        alert("Dificultad no existente, elija nuevamente");
        pokemonChoiceCategory = parseInt(prompt(`Bien ${user}\nAntes de comenzar elige la dificultad del quiz\n(1)-Facil\n(2)-Dificil`));
    }
    return pokemonChoiceCategory, questions();
}

const questions = () =>{
    if (pokemonChoiceCategory ==1) {
        alert("Elegiste Facil\nComenzemos!\nIngresa el NUMERO correspondiente a la respuesta");
        intFacilQuestion1 = parseInt(prompt(facilQuestion1 + "\n\n1 - Charmander\n2 - Pikachu\n3 - Bulbasaur"));
            while (isNaN(intFacilQuestion1) || intFacilQuestion1 > 3) {
                alert("Opcion invalida, elija una opcion del 1 al 3");
                intFacilQuestion1 = parseInt(prompt(facilQuestion1 + "\n\n1 - Charmander\n2 - Pikachu\n3 - Bulbasaur"));
            }
            intFacilQuestion2 = parseInt(prompt(facilQuestion2 + "\n\n1 - John\n2 - Pipo\n3 - Ash"));
            while (isNaN(intFacilQuestion2) || intFacilQuestion2 > 3) {
                alert("Opcion invalida, elija una opcion del 1 al 3");
                intFacilQuestion2 = parseInt(prompt(facilQuestion2 + "\n\n1 - John\n2 - Pipo\n3 - Ash"));
            }
            intFacilQuestion3 = parseInt(prompt(facilQuestion3 + "\n\n1 - Paleta \n2 - Raiz\n3 - Manzano"));
            while (isNaN(intFacilQuestion3) || intFacilQuestion3 > 3) {
                alert("Opcion invalida, elija una opcion del 1 al 3");
                intFacilQuestion3 = parseInt(prompt(facilQuestion3 + "\n\n1 - Paleta \n2 - Raiz\n3 - Manzano"));
            }
            return intFacilQuestion1, intFacilQuestion2, intFacilQuestion3, score();
    }
    else if(pokemonChoiceCategory ==2){
        alert("Elegiste Dificil\nComenzemos!\nIngresa el NUMERO correspondiente a la respuesta");
        intDificilQuestion1 = parseInt(prompt(dificilQuestion1 + "\n\n1 - Beedrill\n2 - Ratatta\n3 - Pidgey"));
            while (isNaN(intDificilQuestion1) || intDificilQuestion1 > 3) {
                alert("Opcion invalida, elija una opcion del 1 al 3");
                intDificilQuestion1 = parseInt(prompt(dificilQuestion1 + "\n\n1 - Beedrill\n2 - Ratatta\n3 - Pidgey"));
            }
            intDificilQuestion2 = parseInt(prompt(dificilQuestion2 + "\n\n1 - Steelix\n2 - Vulpix\n3 - Cloyster"));
            while (isNaN(intDificilQuestion2) || intDificilQuestion2 > 3) {
                alert("Opcion invalida, elija una opcion del 1 al 3");
                intDificilQuestion2 = parseInt(prompt(dificilQuestion2 + "\n\n1 - Steelix\n2 - Vulpix\n3 - Cloyster"));
            }
            intDificilQuestion3 = parseInt(prompt(dificilQuestion3 + "\n\n1 - Rayquaza\n2 - Raydon\n3 - Dragonite"));
            while (isNaN(intDificilQuestion3) || intDificilQuestion3 > 3) {
                alert("Opcion invalida, elija una opcion del 1 al 3");
                intDificilQuestion3 = parseInt(prompt(dificilQuestion3 + "\n\n1 - Rayquaza\n2 - Raydon\n3 - Dragonite"));
            }
            return intDificilQuestion1,intDificilQuestion2,intDificilQuestion3, score();
    }
}

const playMarvel = () =>{
    alert(`Quiz aún no disponible ${user}`);
    return menuPrincipal();
};

const playHarryPotter = ()=>{
    alert(`Quiz aún no disponible ${user}`);
    return menuPrincipal();
};

const playAddQuestions = () =>{
    do {
        listQuestions = prompt('Escriba la pregunta que quiera sugerir o escriba "salir" para terminar','¿?');
        if ( listQuestions.toLowerCase() == "salir"){
            break;
        }else if ( listQuestions === "" || listQuestions === "¿?"){
            alert('Escriba la pregunta que quiera sugerir');
        }
        else{
                question = listQuestions;
            alert('Ahora ingrese 3 respuestas falsas y finalmente la verdadera')
            let choiceFalse = prompt('Ingrese respuesta falsa numero 1');
            while (choiceFalse === "") {
                alert('Respuesta, no valida intentelo de nuevo');
                choiceFalse = prompt('Ingrese respuesta falsa numero 1');
            }
            let choiceFalse1 = prompt('Ingrese respuesta falsa numero 2');
            while (choiceFalse1 === "") {
                alert('Respuesta, no valida intentelo de nuevo');
                choiceFalse1 = prompt('Ingrese respuesta falsa numero 2');
            }
            let choiceFalse2 = prompt('Ingrese respuesta falsa numero 3');
            while (choiceFalse2 === "") {
                alert('Respuesta, no valida intentelo de nuevo');
                choiceFalse2 = prompt('Ingrese respuesta falsa numero 3');
            }
            let answerTrue = prompt('Ingrese la respuesta Correcta');
            while (answerTrue === "") {
                alert('Respuesta, no valida intentelo de nuevo');
                answerTrue = prompt('Ingrese la respuesta correcta');
            }
            arrayQuestions.push(new Questions(question, choiceFalse, choiceFalse1, choiceFalse2, answerTrue));
        }
    } while (listQuestions.toLowerCase() == "salir");

    alert(`Gracias por aportar ${arrayQuestions.length} preguntas, si alguna coincide con una opcion del quiz la tendremos en cuenta para incorporarla`);
    //Informacion de dia y horario en cual ingreso la informacion.
    document.write(`<center><h6>La informacion enviada quedo registrada el dia: ${new Date()}</h6></center>`);
    arrayQuestions.forEach((questions, indice) => {
        document.write(`<center><h4>Pregunta Nº: ${indice + 1} ==> ${questions.question}</h4><h5>Respuesta FALSA es: <b style='color:red'>${questions.choiceFalse}</h5></b><h5>Respuesta FALSA es: <b style='color:red'>${questions.choiceFalse1}</h5></b><h5>Respuesta FALSA es: <b style='color:red'>${questions.choiceFalse2}</h5></b><h5>Respuesta CORRECTA es: <b style='color:greenyellow'>${questions.answerTrue}</h5></b></center>`)
    ;});
}

const sumar = (a,b) =>{
    if (a == b) {
        responseTrue ++;
    }
    else{
        responseFalse ++;
    }
}

const score = () =>{
    if (pokemonChoiceCategory ===1) {
        sumar(intFacilQuestion1,facilResponse1);
        sumar(intFacilQuestion2,facilResponse2);
        sumar(intFacilQuestion3,facilResponse3);   
    }
    else if (pokemonChoiceCategory ===2) {
        sumar(intDificilQuestion1,dificilResponse1);
        sumar(intDificilQuestion2,dificilResponse2);
        sumar(intDificilQuestion3,dificilResponse3);
    }
    switch (responseTrue) {
        case 3:
            titulo="Pokemaniaco";
            break;
        case 2:
            titulo="Estas familiarizado con la saga";
            break;
        case 1:
            titulo="Sabes algo";
            break;
        default:
            titulo="Nunca interactuaste con Pokemon en tu vida";
            break;
    }
    alert(`Listo ${user}, Haz terminado el Quiz!!!\nTu resultado:\nRespuestas Correctas: ${responseTrue}\nRespuestas Incorrectas: ${responseFalse}\nNivel:----> ${titulo} <----`);
    return choices();
}

const choices = () =>{
    choice = prompt(`${user}¿ "Quieres volver a intentarlo?\n--> Pon SI, si quieres intentarlo nuevamente\nEn el caso de que no, solo pulsa Cancelar`);
    if (choice.toLowerCase() == "si") {
        return menuPrincipal();
    }else if(choice.toLowerCase() != ("si", null)){
        msj = alert(`${user} Por favor ingrese una opcion correcta!`);
        return choices();
    }
}

const choiceRandom = () => {
    let choice = Math.floor((Math.random()*arrayRandom.length)+1);
    if(choice == '1'){
        playPokemon();
        return menuPrincipal();
    }else if(choice == '2'){
        playMarvel();
    }else if(choice == '3'){
        playHarryPotter();
    }
}

const init = () =>{
    saludar();
    menuPrincipal();
}
init();