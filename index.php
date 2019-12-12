<html>
    <head>
    <script  src="ajax.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    
    </head>
    <body>
        <form name="form"> 
            <table>
                <tr><td>Name:</td><td><input type="text" name="nam" id="name" onkeypress="num_valid(event)"></td><td><p id="id_name" ></p></td></tr>  
                <tr><td>Email:</td><td><input type="email" name="emai" id="email" onkeypress="em_valid()"></td><td><p id="id_email"></p></td></tr>
                <tr><td>Mobile:</td><td><input type="text" name="mobil" id="mobile" onkeypress="mob_valid(event)"></td><td><p id="id_mobile"></p></td></tr>   
                <tr><td>Message:</td><td><textarea name="messag" cols="25" rows="5" id="message"></textarea></td><td><p id="id_msg"></p></td></tr>    
                <tr><td>Mode of communication:</td>
                <td><input type="checkbox" name="moc[]" class="check">Phone</td>
                <td><input type="checkbox" name="moc[]" class="check">Email</td>
                <td><input type="checkbox" name="moc[]" class="check">Letter</td></tr>       
                <tr><td><button type="button" onclick="insert()">Click</button></td></tr>  
            </table>
        </form>
    </body>
    
</html>

