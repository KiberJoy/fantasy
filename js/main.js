function GetValue () {
    var password = document.getElementById("New").value;
    var x = ValidateMinLength(password);
    StyleAdd(x);
}

function ValidateMinLength (password) {
    if ( password.length < 8 ) {
        return false;
    } else {
        return true
    }
};

function StyleAdd (x) {
    if (x == false) {
        document.getElementById("New").style.borderBottomColor = "red";
        document.getElementById("Labelnew").style.opacity = "1";
    } else {
        document.getElementById("New").style.borderBottomColor = "#fff";
        document.getElementById("Labelnew").style.opacity = "0";
    }
}

function passwordRepeat () {
    var password = document.getElementById("New").value;
    var passwordRepeat = document.getElementById("Repeat").value;
    if ( password !== passwordRepeat ) {
        document.getElementById("Repeat").style.borderBottomColor = "red";
        document.getElementById("Labelrepeat").style.opacity = "1";
    } else {
        document.getElementById("Repeat").style.borderBottomColor = "#fff";
        document.getElementById("Labelrepeat").style.opacity = "0";
    }
}