let buttonSubmit1 = $('#button1');
let checkbox1 = $('#checkbox1');

let badResponse = document.getElementById("badresponse");
let goodResponse = document.getElementById('goodresponse')
let linebreak = document.createElement("br");

let score = 0

        //After click on button, check if good answers is checked, if yes "score ++", if not "bad answer" **
$(buttonSubmit1).click(function (event){
    if($(checkbox1).prop('checked')) {
        score ++;
        alert("Bonne réponse, " + "vous avez " + score + " point(s)");
    } else {
        badResponse.innerHTML = "Question 1: La réponse à la question: Quelle est la capitale de la France?" +
            " était Paris";
        badResponse.appendChild(linebreak);
        alert("mauvaise réponse");
    }
    $('#question1').fadeOut(0);
    $('#question2').slideDown();
});


        //**same

let buttonSubmit2 = $('#button2');
let checkbox2 = $('#checkbox2');

$(buttonSubmit2).click(function (event){
    if($(checkbox2).prop('checked')) {
        score ++;
        alert("Bonne réponse, " + "vous avez " + score + " point(s)");
    } else {
        alert("mauvaise réponse");
        badResponse.innerHTML += "Question 2: La réponse à la question: Qui a gagner la coupe du monde 1998 de football?" +
            " était France";
        badResponse.appendChild(linebreak);
    }
    $('#question2').fadeOut(0);
    $('#question3').slideDown();
});


    //**

let buttonSubmit3 = $('#button3');
let checkbox3 = $('#checkbox3');

$(buttonSubmit3).click(function (event){
    if($(checkbox3).prop('checked')) {
        score ++;
        alert("Bonne réponse, " + "vous avez " + score + " point(s)");
    } else {
        alert("mauvaise réponse");
        badResponse.innerHTML += "Question 3: La réponse à la question: L'abus d'alcool est dangereux pour la santé?" +
            " était Oui";
        badResponse.appendChild(linebreak);
    }
    $('#question3').fadeOut(0);
    $('#question4').slideDown();
});


        //**

let buttonSubmit4 = $('#button4');
let checkbox4 = $('#checkbox4');

$(buttonSubmit4).click(function (event){
    if($(checkbox4).prop('checked')) {
        score ++;
        alert("Bonne réponse, " + "vous avez " + score + " point(s)");
    } else {
        alert("mauvaise réponse");
        badResponse.innerHTML += 'Question 4: La réponse à la question: A quel écrivain doit-on "les Mémoires d ' +
            'outres-tombes"? était Chateaubrilland'
        badResponse.appendChild(linebreak);
    }
    $('#question4').fadeOut(0);
    $('#question5').slideDown();
});


    //**

let buttonSubmit5 = $('#button5');
let checkbox5 = $('#checkbox5');

$(buttonSubmit5).click(function (event){
    if($(checkbox5).prop('checked')) {
        score ++;
        alert("Bonne réponse, " + "vous avez " + score + " point(s)");
    } else {
        alert("mauvaise réponse");
        badResponse.innerHTML += "Question 5: La réponse à la question: Aux USA, quelle est la principale base de" +
            " lancement d'engins spatiaux? était Cap Canaveral";
        badResponse.appendChild(linebreak);
    }
    $('#question5').fadeOut(0);
    $('#question6').slideDown();
});


//**

let buttonSubmit6 = $('#button6');
let checkbox6 = $('#checkbox6');

$(buttonSubmit6).click(function (event){
    if($(checkbox6).prop('checked')) {
        score ++;
        alert("Bonne réponse, " + "vous avez " + score + " point(s)");
    } else {
        alert("mauvaise réponse")
        badResponse.innerHTML += "Question 6: La réponse à la question: Avec qui Jean Dujardin formait il le duo " +
            "un gars, une fille? était Alexandra Lamy";
        badResponse.appendChild(linebreak);
    }
    $('#question6').fadeOut(0);
    $('#question7').slideDown();
});


//**

let buttonSubmit7 = $('#button7');
let checkbox7 = $('#checkbox7');

$(buttonSubmit7).click(function (event){
    if($(checkbox7).prop('checked')) {
        score ++;
        alert("Bonne réponse, " + "vous avez " + score + " point(s)");
    } else {
        alert("mauvaise réponse");
        badResponse.innerHTML += "Question 7: La réponse à la question: De quel groupe Jim Morisson était il le " +
            "chanteur? était The Doors";
        badResponse.appendChild(linebreak);
    }
    $('#question7').fadeOut(0);
    $('#question8').slideDown();
});


//**

let buttonSubmit8 = $('#button8');
let $checkbox8 = $('#checkbox8');

$(buttonSubmit8).click(function (event){
    if($($checkbox8).prop('checked')) {
        score ++;
        alert("Bonne réponse, " + "vous avez " + score + " point(s)");
    } else {
        alert("mauvaise réponse");
        badResponse.innerHTML += "Question 8: La réponse à la question: De quel pays Tirana est elle la capitale?" +
            " était Albanie";
        badResponse.appendChild(linebreak);
    }
    $('#question8').fadeOut(0);
    $('#question9').slideDown();
});

//**

let buttonSubmit9 = $('#button9');
let $checkbox9 = $('#checkbox9');

$(buttonSubmit9).click(function (event){
    if($($checkbox9).prop('checked')) {
        score ++;
        alert("Bonne réponse, " + "vous avez " + score + " point(s)");
    } else {
        alert("mauvaise réponse");
        badResponse.innerHTML += "Question 9: La réponse à la question: Quel club un golfeur utilise-t'il sur le" +
            " green? était un putter";
        badResponse.appendChild(linebreak);
    }
    $('#question9').fadeOut(0);
    $('#question10').slideDown();
});

//**

let buttonSubmit10 = $('#button10');
let $checkbox10 = $('#checkbox10');

$(buttonSubmit10).click(function (event){
    if($($checkbox10).prop('checked')) {
        score ++
        alert("Bonne réponse, " + "vous avez " + score + " point(s)");
    } else {
        alert("mauvaise réponse");
        badResponse.innerHTML += "Question 10: La réponse à la question: Quel est le numéro du departement du" +
            " Finistère? était 29";
        badResponse.appendChild(linebreak);
    }
    $('#question10').fadeOut(0);
    $('#result').slideDown();
    goodResponse.innerHTML = "Votre score est de " + score + "/10"
    goodResponse.style.marginBottom = "2rem"
});