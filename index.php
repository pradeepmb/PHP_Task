<html>
    <head>
    <script  src="ajax.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    
    </head>
    <body>
        <div id = "formm">
        <form name="form"> 
            <table>
                <tr><td>Name:</td><td><input type="text" name="nam" id="name" onkeypress="num_valid(event)"></td><td><p id="id_name" ></p></td></tr>  
                <tr><td>Email:</td><td><input type="email" name="emai" id="email" onkeypress="em_valid()"></td><td><p id="id_email"></p></td></tr>
                <tr><td>Mobile:</td><td><input type="text" name="mobil" id="mobile" onkeypress="mob_valid(event)"></td><td><p id="id_mobile"></p></td></tr>   
                <tr><td>Message:</td><td><textarea name="messag" cols="25" rows="5" id="message"></textarea></td><td><p id="id_msg"></p></td></tr>    
                <tr><td>Role:</td><td><select id="role">
                <option value="none">None</option>
                <option value="UI-Developer">UI-Developer</option>
                <option value="UX-Developer">UX-Design</option>
                <option value="PHP-Developer">PHPH-Developer</option>
                <option value="Angularjs-Developer">Angularjs-Developer</option>
                </select></td></tr>
                <tr><td>Mode of communication:</td>
                <td><input type="checkbox" name="moc[]" class="check" value="Phone">Phone</td>
                <td><input type="checkbox" name="moc[]" class="check" value="Email">Email</td>
                <td><input type="checkbox" name="moc[]" class="check" value="Letter">Letter</td></tr> 
                <tr><td><button id = "bt" type="button" onclick="insert()">Click</button></td>
            <td><button id="update" onclick="upda()" style = "visibility:hidden">Update</button></td></tr>   

                <tr><td></td><td><select id="search">
                <option value="none">None</option>
                <option value="UI-Developer">UI-Developer</option>
                <option value="UX-Developer">UX-Design</option>
                <option value="PHP-Developer">PHPH-Developer</option>
                <option value="Angularjs-Developer">Angularjs-Developer</option>
                </select></td><td><button type="button" onclick="get()">Search</button></td></tr>   
            </table>
        </form>
        </div>
        <div id = 'table'>
            <?php
            include("conn.php");
            $count = 0;
               $query = "select * from task_1 where flag ='N'";
               $res = mysqli_query($conn, $query);
               if(mysqli_num_rows($res)>0)
               {    
                   echo "<table border='1' id='load'>";
                   echo "<tr><th>Name</th><th>Mobile</th><th>Email</th><th>Message</th><th>Mode_of_Communication</th><th>Role</th><th>Delete</th><th>Edit</th></tr>";
                    while($row = mysqli_fetch_assoc($res))
                    {
                        $id = $row['id'];
                        echo"<tr>
                        <td id='t_name'>".$row['Name']."</td>
                        <td id='t_mobile'>".$row['Mobile']."</td>
                        <td id='t_mail'>".$row['Email']."</td>
                        <td id='t_msg'>".$row['Message']."</td>
                        <td id='t_moc'>".$row['Mode_of_Communication']."</td>
                        <td>".$row['Role']."</td>
                        <td><button onclick='remove($id)'>Delete</button></td>
                        <td><button onclick='edit($row[id])'>EDIT</button></td>
                        </tr>";
                    }
                    echo "</table>";
               }
            ?>        
        </div>
    </body>
</html>

