const widget = "https://discord.com/api/guilds/367648314184826880/widget.json";
const text = document.getElementById("text");
text.textContent = "";

const openInvite = function (data) {
    const invite = JSON.parse(data)["instant_invite"];
    const item = document.createElement("a");
    item.textContent = invite;
    item.href = invite;
    text.appendChild(item);

    window.location = invite;
};

fetch(widget)
    .then(function(response) {
            response.text().then(openInvite);
        }, function (error) {
            console.log(error);
        }
    );