<?php



    $username = $_ENV['DB_USER'];
    $servername = $_ENV['DB_HOST'];
    $password = $_ENV['DB_PASS'];

    // Create connection
    $conn = mysqli_connect($servername, $username, $password);

    // Check connection
    if (!$conn) {
        die("Connection failed: " . mysqli_connect_error());
    }
    echo "Connected successfully";  



    // mysqli_close($conn);



?>