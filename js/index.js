const widget = "https://discord.com/api/guilds/762644745511239690/widget.json";
const link = document.getElementById("link");

const openInvite = function (data) {
    link.href = JSON.parse(data)["instant_invite"];
    //window.location = invite;
};

fetch(widget)
    .then(function(response) {
            response.text().then(openInvite);
        }, function (error) {
            console.log(error);
        }
    );
