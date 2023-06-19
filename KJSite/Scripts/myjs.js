$(document).ready(function () {
    //bored api
    let boredapi = 'https://www.boredapi.com/api/activity'
    let education = 'education'
    let relaxation = 'relaxation'
    let cooking = 'cooking'
    let busywork = 'busywork'
    //education
    $.ajax({
        url: boredapi + "?type=" + education,
        contentType: "application/json",
        dataType: 'json',
        success: function (boredthing) {
            $('.education-activity').html(boredthing.activity);
        }
    });
    //relax
    $.ajax({
        url: boredapi + "?type=" + relaxation,
        contentType: "application/json",
        dataType: 'json',
        success: function (boredthing) {
            $('.relax-activity').html(boredthing.activity);
        }
    });
    //busywork
    $.ajax({
        url: boredapi + "?type=" + busywork,
        contentType: "application/json",
        dataType: 'json',
        success: function (boredthing) {
            $('.busywork-activity').html(boredthing.activity);
        }
    });
    //cooking
    $.ajax({
        url: boredapi + "?type=" + cooking,
        contentType: "application/json",
        dataType: 'json',
        success: function (boredthing) {
            $('.cooking-activity').html(boredthing.activity);
        }
    });
   
});

Object.prototype.softeng = "Software Engineer";
var se = {};
$(".softeng").html(se.softeng);
console.log(se.softeng); //5


var currentYear = new Date().getFullYear(); 
$('.currentyear').text(currentYear);

//back to Homepage
function backToHome()
{
    location.href(window.location.host);
}


