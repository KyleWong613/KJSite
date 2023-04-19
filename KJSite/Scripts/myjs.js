$(document).ready(function () {
    //bored api
    let boredapi = 'https://www.boredapi.com/api/activity'
    let type = 'education'

    $.ajax({
        url: boredapi + "?type=" + type,
        contentType: "application/json",
        dataType: 'json',
        success: function (boredthing) {
            $('.bored-activity').html(boredthing.activity);
         }
    });
});


var currentYear = new Date().getFullYear(); 
$('.currentyear').text(currentYear);

//back to Homepage
function backToHome()
{
    location.href(window.location.host);
}


