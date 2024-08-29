<?php


    $servername = "sql6.freesqldatabase.com";
    $username = "sql6700012";
    $password = "D3gevjgE4F";

    // Host: 
    // Database name: sql6700012
    // Database user: 
    // Database password: 
    // Port number: 3306

    // Create connection
    $conn = mysqli_connect($servername, $username, $password);

    // Check connection
    if (!$conn) {
        die("Connection failed: " . mysqli_connect_error());
    }
    echo "Connected successfully";  



    // mysqli_close($conn);



?>