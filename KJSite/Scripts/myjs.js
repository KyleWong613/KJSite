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

function Introduction(header, job, about, contact, name, certs) {
    this.header = header;
    this.jobTitle = job;
    this.aboutMe = about;
    this.contactMe = contact;
    this.myName = name;
    this.myCerts = certs;
}
function Socials(fb, mail, twitter, github, linkedin, phone) {
    this.fb = fb;
    this.mail = mail;
    this.twitter = twitter;
    this.github = github;
    this.linkedin = linkedin;
    this.phone = phone;
}

const Me = new Introduction("Kai Jeng", "Software Developer", "About Me", "Contact Me", "Kai Jeng", "My Certifications");
const socials = new Socials("", "kaijengre2@gmail.com", "", "KyleWong613", "LinkedIn", "017-5597576");
//new title
Introduction.prototype.softeng = "Software Engineer";

$(".top-title").html(Introduction.header);
$(".softeng").html(Introduction.prototype.softeng);
$(".about-me").html(Me.aboutMe);
$(".contact-me").html(Me.contactMe); 
var contact = Me.contactMe.split(" ")[0];
$(".contact").html(contact);
$(".myName").html(Introduction.myName);
$(".my-certifications").html(Introduction.myCerts);


//Socials
$(".gmail").html(Socials.mail);
$(".github").html(Socials.github);
$(".linkedin").html(Socials.linkedin);
$(".phone-no").html(Socials.phone);


//This year
var currentYear = new Date().getFullYear(); 
$('.currentyear').text(currentYear);

//back to Homepage
function backToHome()
{
    location.href(window.location.host);
}


