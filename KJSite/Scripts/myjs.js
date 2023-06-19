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

function Introduction(job, about, contact, name) {
    this.jobTitle = job;
    this.aboutMe = about;
    this.contactMe = contact;
    this.myName = name;
}
const Me = new Introduction("Software Developer", "About Me", "Contact Me", "Kai Jeng");
//new title
Introduction.prototype.softeng = "Software Engineer";

$(".softeng").html(Introduction.prototype.softeng);
$(".about-me").html(Me.aboutMe);
$(".contact-me").html(Me.contactMe); 
var contact = Me.contactMe.substring(0, contact.length - 'Me'.length);
$(".contact").html(contact);
$(".myName").html(Introduction.myName);


var currentYear = new Date().getFullYear(); 
$('.currentyear').text(currentYear);

//back to Homepage
function backToHome()
{
    location.href(window.location.host);
}


