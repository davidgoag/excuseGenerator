function randomItem(list1) {
    //Recibe un arreglo y retorna uno solo aleatorio

    let position = Math.floor(Math.random() * list1.length);
    let item = list1[position];

    return item;
}


function generateExcuse() {
    let who = ['The dog','My grandma','His turtle','My bird'];
    let action = ['ate','peed','crushed','broke'];
    let what = ['my homework', 'the keys', 'the car'];
    let when = ['before the class','right on time','when I finished','during my lunch','while I was praying'];
    
    let excuse = "";

        excuse = randomItem(who) +  " " + randomItem(action) + " " + randomItem(what) + " " + randomItem(when)

    return excuse; 
}

function modifyExcuse() {
    const excuseContainer = document.querySelector("#excuse");
    excuseContainer.innerHTML = generateExcuse();
}

const changeExcuseButton = document.querySelector("#generatorButton")
changeExcuseButton.addEventListener("click", modifyExcuse);