function initialSetup () {
    if (document.getElementById("sqthree") != null) {
        setTimeout(function() {
            document.getElementById('sqthree').style.display = 'none';
        }, 2000);
    }
}

export default initialSetup;