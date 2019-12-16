<?php
include("conn.php");
$crud = $_POST['crud'];
if($crud == "select")
{
    
    $response['name'] = $_POST['Name'];
    $response['mobile'] = $_POST['Mobile'];
    $response['email'] = $_POST['Email'];
    $response['msg'] = $_POST['Msg'];
    $response['moc'] = $_POST['Moc'];
    $name = $_POST['Name'];
    $role = $_POST['Role'];
    $mobile = $_POST['Mobile'];
    $email = $_POST['Email'];
    $msg = $_POST['Msg'];
    $moc = $_POST['Moc'];
    $date = date("d-m-y");
    $time = date("H:i:sa");
    $query = "Insert into task_1(Name,Mobile,Email,Message,Mode_of_Communication, Created_Date, Create_Time, Role) values('$name','$mobile','$email','$msg','$moc',
    '$date','$time', '$role')";
    if(mysqli_query($conn,$query))
    {
        echo json_encode($response); 
    }
   
}

if($crud == "get")
{
    $key = $_POST['Key'];
    $query = "Select * from task_1 where Role = '$key'";
    $query2 = "SELECT email FROM task_1 where Role = 'UI-developer'";
    $mail = mysqli_query($conn, $query2);
    $res =  mysqli_query($conn, $query);
    if(mysqli_num_rows($res)>0)
    {
        while($row = mysqli_fetch_assoc($res))
        {
            $date['name'] = $row['Name'];
            $date['mobile'] = $row['Mobile'];
            $date['email'] = $row['Email'];
            $date['msg'] = $row['Message'];
            $date['moc'] = $row['Mode_of_Communication'];
            $date['role'] = $row['Role'];
            echo json_encode($date);
            //return json_encode($date);
        }    
    }
}
if($crud =="delete")
{
    $key = $_POST['ID'];
    $query = "Update task_1 set flag = 'Y' where id = '$key'";
    mysqli_query($conn, $query);
    echo "Deleted";
}

if($crud == "edit")
{
    $id = $_POST['ID'];
    $query = "Select * from task_1 where id = '$id'";
    $res = mysqli_query($conn, $query);
    if(mysqli_num_rows($res)>0)
    {
        while($row = mysqli_fetch_assoc($res))
        {
            $response['name'] = $row['Name'];
            $response['email'] = $row['Email'];
            $response['mobile'] = $row['Mobile'];
            $response['message'] = $row['Message'];
            $response['moc'] = $row['Mode_of_Communication'];
            echo json_encode($response);
        }
    }
}

if($crud == "upda")
{
    $name = $_POST['Name'];
    $role = $_POST['Role'];
    $mobile = $_POST['Mobile'];
    $email = $_POST['Email'];
    $msg = $_POST['Msg'];
    $moc = $_POST['Moc'];
    $date = date("d-m-y");
    $time = date("H:i:sa");
    $id = $_POST['ID'];
    $query = "Update task_1 set Name='$name',
    Mobile='$mobile',
    Email='$email',
    Message='$msg',
    Mode_of_Communication='$moc',
    Created_Date = '$date',
    Create_Time='$time'
    where id = '$id'";
    mysqli_query($conn, $query);
    echo "Updated";
}
?>