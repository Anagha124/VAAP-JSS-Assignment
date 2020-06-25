function formValidation() {
    var fname = document.getElementById("First_Name");
    var lname = document.getElementById("Last_Name");
    var uadd = document.getElementById("Address");
    var uzip = document.getElementById("zip_code")
    var uemail = document.getElementById("email");
    console.log(fname);
    if (allLetter(fname)) {
        if (allLetter(lname)) {
            if (alphanumeric(uadd)) {
                if (allnumeric(uzip)) {
                    if (ValidateEmail(email)) {
                        return true;
                    }

                }
            }
        }

    }
    return false;
}

function alertPage() {
    var emailid = document.getElementById("email");
    if (ValidateEmail(emailid)) {
        alert("Message sent to the Email Id")
        return true;
    } else {
        alert("Enter valid email");
        return false;
    }
}

function regValidation() {
    var userid = document.getElementById("userid");
    var passid = document.getElementById("Password");
    var cpas = document.getElementById("cpass")
    if (userid_validation(userid, 5, 10)) {
        if (passid_validation(passid, 8, 20, cpas)) {
            if (passid == cpas) {
                location.replace("login3Page.html");
            }
        }
    }

    return false;
}

function reg2Validation() {
    var userid = document.getElementById("userid");
    var passid = document.getElementById("Password");
    if (userid_validation(userid, 5, 10)) {
        if (passid_validation1(passid, 8, 20)) {
            alert("Registered");
            return true;
        }
    } else {
        alert("Wrong Credentials");
        return false;
    }


    return false;
}

function userid_validation(uid, mx, my) {
    var uidre = /^[A-Za-za-za-za-z0-90-90-9]+$/;
    var uid_len = uid.value.length;
    if ((uid_len != 0 && uid_len <= my && uid_len > mx) && uid.value.match(uidre)) {
        return true;
    } else {
        alert("User Id should not be empty / length be between " + mx + " to " + my + " Eg:Abcd111");
        uid.focus();
        return false;
    }
    return true;
}

function passid_validation(passid, mx, my, cpass) {
    var passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/;
    if (passid.value.match(passw) && passid.value == cpass.value) {
        return true;
    } else {
        if (passid.value != cpass.value) {
            alert("Password not matching");
            cpass.focus();
            return false;
        } else {
            alert("Password should contain 1 uppercase, 1 special Character and 1 numeric");
            passid.focus();
            return false;
        }
        return false;
    }
    return true;
}

function passid_validation1(passid, mx, my) {
    var passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/;
    if (passid.value.match(passw)) {
        return true;
    } else {
        if (passid.value != cpass.value) {
            alert("Password not matching");
            cpass.focus();
            return false;
        } else {
            alert("Password should contain 1 uppercase, 1 special Character and 1 numeric");
            passid.focus();
            return false;
        }
        return false;
    }
    return true;
}

function allLetter(uname) {
    var letters = /^[A-Za-z]+$/;
    if (uname.value.match(letters)) {
        return true;
    } else {
        if (uname.value == "") {
            alert("No blank Values");
        }
        alert('Username must have alphabet characters only');
        uname.focus();
        return false;
    }
}

function alphanumeric(uadd) {
    var letters = /^[0-9 a-z A-Z]+$/;
    if (uadd.value.match(letters)) {
        return true;
    } else {
        alert('User address must have alphanumeric characters only');
        uadd.focus();
        return false;
    }
}

function allnumeric(uzip) {
    var numbers = /^[0-9]+$/;
    if (uzip.value.match(numbers)) {
        return true;
    } else {
        alert('ZIP code must have numeric characters only');
        uzip.focus();
        return false;
    }
}

function ValidateEmail(uemail) {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (uemail.value.match(mailformat)) {
        return true;
    } else {
        alert("You have entered an invalid email address!");
        uemail.focus();
        return false;
    }
}