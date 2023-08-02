<?php
if(isset($_POST['dptname']) || isset($_POST['dname']) || isset($_POST['pname']) || isset($_POST['pemail'])  || isset($_POST['pdate']) || isset($_POST['ptime'])) {
    // Get values from form submission
    $dptname1 = $_POST['dptname'];
    $dname1 = $_POST['dname'];
    $pname1 = $_POST['pname'];
    $pemail1 = $_POST['pemail'];
    $pdate1 = $_POST['pdate'];
    $ptime1 = $_POST['ptime'];
    // Database connection
    $conn = new mysqli('localhost', 'root', '', 'appoint1');//*** */
    if($conn->connect_error) {
        echo "$conn->connect_error";
        die("Connection Failed : ". $conn->connect_error);
    } else {
        $stmt = $conn->prepare("INSERT INTO docapp1(dptname, dname, pname, pemail ,pdate ,ptime) VALUES (?, ?, ?, ?, ?, ?)");
        $stmt->bind_param("ssssss", $dptname1, $dname1, $pname1, $pemail1, $pdate1, $ptime1);
        $execval = $stmt->execute();
        if($execval) {
            echo "Registration successfully...";
        } else {
            echo "Error: ".$conn->error;
        }
        $stmt->close();
        $conn->close();
    }
}
?>