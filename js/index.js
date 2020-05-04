var widget = "https://discordapp.com/api/guilds/367648314184826880/widget.json";

var openInvite = function (data) {
    $(".text").text(JSON.parse(data)["instant_invite"]);
    window.location = JSON.parse(data)["instant_invite"];
};

$.get(widget, openInvite, 'text');
