var flag = 0; // flag is to find all fields has valid data
function insert() {

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var mobile = document.getElementById('mobile').value;
    var msg = document.getElementById('message').value;
    var check = document.getElementsByClassName('check');
    var moc = "";
    for (var i = 0; i < 3; i++) {
        if (check[i].checked == true) {
            moc += check[i].value + " ";
        }
    }
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

    //Validating Email
    if (email != "") {

        if (reg.test(email) == true) {
            flag++;
        }
        else {
            document.getElementById('id_email').innerHTML = "* Invalid Email";
            document.getElementById('id_email').style.color = "red";
        }
    }
    else {
        document.getElementById('id_email').innerHTML = "* Field is required";
        document.getElementById('id_email').style.color = "red";
    }


    //Validating other fields
    if (name == "") {
        document.getElementById('id_name').innerHTML = "* Field is required";
        document.getElementById('id_name').style.color = "red";

    }
    else {
        flag++;
    }

    if (mobile == "") {
        document.getElementById('id_mobile').innerHTML = "* Field is required";
        document.getElementById('id_mobile').style.color = "red";
    }
    else {
        flag++;
    }

    if (moc == "") {
        document.getElementById('id_mobile').innerHTML = "* Field is required";
        document.getElementById('id_mobile').style.color = "red";
        console.log('moc');
    }

    else {
        flag++;
    }

    if (msg == "") {
        document.getElementById('id_mobile').innerHTML = "* Field is required";
        document.getElementById('id_mobile').style.color = "red";
    }
    else {
        flag++;
    }

    //Checking the flag value if it is true then ajax call 
    if (flag == 5) {
        $.axaj({
            url:"http://localhost/PHP_Task/crud.php",
            type: "post", 
            dataType: 'json',
           data: {Name:name, Email:email, Mobile:mobile, Moc:moc, Msg:msg}
        })
    }


}
function num_valid(event) {
    document.getElementById('id_name').style.visibility = "hidden";
    var name = document.getElementById('name').value;
    var char = String.fromCharCode(event.which);
    if (/[0-9]/.test(char)) {
        event.preventDefault();
    }
}

function mob_valid(event) {
    document.getElementById('id_mobile').style.visibility = "hidden";
    var email = document.getElementById('mobile').value;
    var char = String.fromCharCode(event.which)
    if (!/[0-9]/.test(char)) {
        event.preventDefault();
    }
}

function em_valid() {
    document.getElementById('id_email').style.visibility = "hidden";
}






