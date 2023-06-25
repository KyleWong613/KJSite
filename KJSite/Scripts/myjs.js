$(document).ready(function () {
    //bored api
    let boredapi = 'https://www.boredapi.com/api/activity'
    let education = 'education'
    let relaxation = 'relaxation'
    let cooking = 'cooking'
    let busywork = 'busywork'
    //github api
    let githubrepo = 'https://api.github.com/repos/kylewong613/kjsite'

    $.ajax({
        url: githubrepo,
        contentType: "application/json",
        dataType: 'json',
        success: function (kjsite) {
            $('.kjsite-repo').html(kjsite.name);
            $('.kjsite-repo').attr('href', kjsite.html_url);
            $('.kjsite-repo').attr('target', '_blank');
        }
    });

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

function Introduction(job, about, contact, name, certs) {
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

const Me = new Introduction("Kai Jeng", "My Career", "About Me", "Contact Me", "Kai Jeng", "My Certifications");
const socials = new Socials("", "kaijengre2@gmail.com", "", "KyleWong613", "LinkedIn", "017-5597576");
//new title
Introduction.prototype.softeng = "Software Engineer";
Introduction.prototype.header = "My Site";

$(".top-title").html(Introduction.prototype.header);
$(".softeng").html(Introduction.prototype.softeng);
$(".about-me").html(Me.aboutMe);
$(".contact-me").html(Me.contactMe); 
var contact = Me.contactMe.split(" ")[0];
$(".contact").html(contact);
$(".myName").html(Introduction.myName);
$(".my-certifications").html(Introduction.myCerts);

//Socials
$(".gmail").html(socials.mail);
$(".github").html(socials.github);
$(".linkedin").html(socials.linkedin);
$(".phone-no").html(socials.phone);


//This year
var currentYear = new Date().getFullYear(); 
$('.currentyear').text(currentYear);

//back to Homepage
function backToHome()
{
    location.assign("/");
}


