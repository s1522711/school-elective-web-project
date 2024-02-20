const delay = ms => new Promise(res => setTimeout(res, ms));

const disableCloseButton = async () => {
    document.getElementById("nukeCloseButton").disabled=true;
    for (let i = 5.00; i > 0; i-=0.01) {
        document.getElementById("nukeCloseButton").innerHTML="Nuking in " + i.toFixed(2) + " seconds...";
        await delay(10);
    }
    document.getElementById("nukeCloseButton").disabled=false;
    document.getElementById("nukeCloseButton").innerHTML="Nuke";
}

const playExplosion = async () => {
    var audio = new Audio('/mp3/explosion.mp3');
    audio.play();
    var nukeModal = new bootstrap.Modal(document.getElementById('explosionModal'), options)
    nukeModal.hide();
}

