let buttonSubmit1 = $('#button1')
let checkbox1 = $('#checkbox1')

let score = 0

let chekboxs = $('input')
console.log(chekboxs)

$(buttonSubmit1).click(function (event){
    if($(checkbox1).prop('checked')) {
        score ++
        alert("Bonne réponse, " + "vous avez " + score + " point(s)")
    } else {
        alert("mauvaise réponse")
    }
    $('#question1').fadeOut(0)
    $('#question2').slideDown()
})




let buttonSubmit2 = $('#button2')
let checkbox2 = $('#checkbox2')

$(buttonSubmit2).click(function (event){
    if($(checkbox2).prop('checked')) {
        score ++
        alert("Bonne réponse, " + "vous avez " + score + " point(s)")
    } else {
        alert("mauvaise réponse")
    }
    $('#question2').fadeOut(0)
    $('#question3').slideDown()
})




let buttonSubmit3 = $('#button3')
let checkbox3 = $('#checkbox3')

$(buttonSubmit3).click(function (event){
    if($(checkbox3).prop('checked')) {
        score ++
        alert("Bonne réponse, " + "vous avez " + score + " point(s)")
    } else {
        alert("mauvaise réponse")
    }
    $('#question3').fadeOut(0)
    $('#question4').slideDown()
})




let buttonSubmit4 = $('#button4')
let checkbox4 = $('#checkbox4')

$(buttonSubmit4).click(function (event){
    if($(checkbox4).prop('checked')) {
        score ++
        alert("Bonne réponse, " + "vous avez " + score + " point(s)")
    } else {
        alert("mauvaise réponse")
    }
    $('#question4').fadeOut(0)
    $('#question5').slideDown()
})


let buttonSubmit5 = $('#button5')
let checkbox5 = $('#checkbox5')

$(buttonSubmit5).click(function (event){
    if($(checkbox5).prop('checked')) {
        score ++
        alert("Bonne réponse, " + "vous avez " + score + " point(s)")
    } else {
        alert("mauvaise réponse")
    }
    $('#question5').fadeOut(0)
    $('#question6').slideDown()
})


let buttonSubmit6 = $('#button6')
let checkbox6 = $('#checkbox6')

$(buttonSubmit6).click(function (event){
    if($(checkbox6).prop('checked')) {
        score ++
        alert("Bonne réponse, " + "vous avez " + score + " point(s)")
    } else {
        alert("mauvaise réponse")
    }
    $('#question6').fadeOut(0)
    $('#question7').slideDown()
})



let buttonSubmit7 = $('#button7')
let checkbox7 = $('#checkbox7')

$(buttonSubmit7).click(function (event){
    if($(checkbox7).prop('checked')) {
        score ++
        alert("Bonne réponse, " + "vous avez " + score + " point(s)")
    } else {
        alert("mauvaise réponse")
    }
    $('#question7').fadeOut(0)
    $('#question8').slideDown()
})




let buttonSubmit8 = $('#button8')
let $checkbox8 = $('#checkbox8')

$(buttonSubmit8).click(function (event){
    if($($checkbox8).prop('checked')) {
        score ++
        alert("Bonne réponse, " + "vous avez " + score + " point(s)")
    } else {
        alert("mauvaise réponse")
    }
    $('#question8').fadeOut(0)
    $('#question9').slideDown()
})



let buttonSubmit9 = $('#button9')
let $checkbox9 = $('#checkbox9')

$(buttonSubmit9).click(function (event){
    if($($checkbox9).prop('checked')) {
        score ++
        alert("Bonne réponse, " + "vous avez " + score + " point(s)")
    } else {
        alert("mauvaise réponse")
    }
    $('#question9').fadeOut(0)
    $('#question10').slideDown()
})



let buttonSubmit10 = $('#button10')
let $checkbox10 = $('#checkbox10')

$(buttonSubmit10).click(function (event){
    if($($checkbox10).prop('checked')) {
        score ++
        alert("Bonne réponse, " + "vous avez " + score + " point(s)")
    } else {
        alert("mauvaise réponse")
    }
    $('#question10').fadeOut(0)
    $('#result').slideDown()
})