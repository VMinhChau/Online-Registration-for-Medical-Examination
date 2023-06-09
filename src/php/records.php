<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");

include 'DbConnect.php';
$objDb = new DbConnect;
$conn = $objDb->connect();

$method = $_SERVER['REQUEST_METHOD'];
switch($method) {
    case "POST":
        $path = explode('/', $_SERVER['REQUEST_URI']);
        $product = json_decode( file_get_contents('php://input') );     
        
        switch($path[6]) {
            case "lookup":
                $userID = $product -> userID;
                $sql = "SELECT * FROM records WHERE userID = '$userID'";
                $stmt = $conn->prepare($sql);
                $stmt->execute();
                $order = $stmt->fetchAll(PDO::FETCH_ASSOC);
                echo json_encode($order);
                // if($stmt->execute()) {
                //     $response = ['Status' => '200'];
                // } else {
                //     $response = ['message' => 'Failed to update record.'];
                // }
                break;
            case "save":
                $userID = $product -> userID;
                $patientID = $product -> patientID;
                $specialization = $product -> specialization;
                $doctor = $product -> doctor;
                $date = $product -> date;
                $time = $product -> time;
                $period = $product -> period;
                $sql = "INSERT INTO records (userID, patientID, specialization, doctor, date, time, period) VALUES ('$userID', '$patientID', '$specialization', '$doctor', '$date','$time','$period')";
                echo $sql;
                $stmt = $conn->prepare($sql);
                
                break;   
        }
        if($stmt->execute()) {
            $response = ['Status' => '200'];
        } else {
            $response = ['message' => 'Failed to update record.'];
        }
    }
        
?>