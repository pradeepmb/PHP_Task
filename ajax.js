var flag = 0; // flag is to find all fields has valid data
function insert() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var mobile = document.getElementById('mobile').value;
    var msg = document.getElementById('message').value;
    var role = document.getElementById('role').value;
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
    if (role == "none") {
        alert("Role is Emplty");
        // document.getElementById('role').innerHTML = "* Field is required";
        // document.getElementById('role').style.color = "red";
    }
    else {
        flag++;
    }

    //Checking the flag value if it is true then ajax call 
    if (flag == 6) {
        $.ajax({
            url:"http://localhost/PHP_Task/crud.php",
            type: "post", 
            dataType: 'json',
           data: { crud:"select", Name:name, Email:email, Mobile:mobile, Moc:moc, Msg:msg, Role:role},
           success: function(response){
            //    document.getElementById('table').innerHTML;
            //$('#table').load("#load");
            document.location.reload(document.getElementById('table'));
           }
        })
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



}


function em_valid() {
    document.getElementById('id_email').style.visibility = "hidden";
}

function get(){
    var key = document.getElementById('search').value;
    $.ajax({
       url:"http://localhost/PHP_Task/crud.php",
            type: "post", 
            dataType: 'json',
           data: { crud:"get", Key:key},
           success: function(date){
            
           }
        
    })
    


}

function remove(id){
    var con = confirm("Do You Want to Delete This Record");
    if(con == true)
    {
    $.ajax({
        url:"http://localhost/PHP_Task/crud.php",
             type: "post", 
             dataType: 'json',
            data: { crud:"delete", ID:id},
            success: function(){
                //document.location.reload(document.getElementById('table'));
            }
            
         
     })
    
     //$(document).$load('#table');
     document.location.reload(document.getElementById('table'));
    }
    
    
}
var update_key= "hhhh";
function edit(id)
{
 update_key = id;  
 
    $.ajax({
        url:"http://localhost/PHP_Task/crud.php",
        type: "post", 
        dataType: 'json',
       data: { crud:"edit", ID:id},
       success: function(response){
        //    document.getElementById('table').innerHTML;
        //$('#table').load("#load");
        //document.location.reload(document.getElementById('table'));
        document.getElementById('name').value = response.name;
        document.getElementById('mobile').value = response.mobile;
        document.getElementById('email').value = response.email;
        document.getElementById('message').value = response.message;
        document.getElementById('update').style.visibility = "visible";
       }
    })
}

function upda(){
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var mobile = document.getElementById('mobile').value;
    var msg = document.getElementById('message').value;
    var role = document.getElementById('role').value;
    var check = document.getElementsByClassName('check');
    var moc = "";
    for (var i = 0; i < 3; i++) {
        if (check[i].checked == true) {
            moc += check[i].value + " ";
        }
    }
    $.ajax({
        url:"http://localhost/PHP_Task/crud.php",
        type: "post", 
        dataType: 'json',
       data: { crud:"upda", ID:update_key,Name:name, Email:email, Mobile:mobile, Moc:moc, Msg:msg, Role:role},
       success: function(response){
            console.log("OK");
       }
    })
    document.location.reload(document.getElementById('table'));
}


