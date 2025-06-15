<?php
header("Content-Type: application/json");

$DB_HOST = '{{DB_HOST}}';
$DB_USER = '{{DB_USER}}';
$DB_PASS = '{{DB_PASS}}';
$DB_NAME = '{{DB_NAME}}';

$conn = new mysqli($DB_HOST, $DB_USER, $DB_PASS, $DB_NAME);

if ($conn->connect_error) {
    http_response_code(500);
    die(json_encode(["error" => "Database connection failed"]));
}

$data = json_decode(file_get_contents("php://input"), true);

$projectName = $data['projectName'];

// Fetch user from database
$stmt = $conn->prepare("SELECT * FROM projectLinks WHERE name = ?");
$stmt->bind_param("s", $projectName);
$stmt->execute();
$result = $stmt->get_result();
$data = $result->fetch_all(MYSQLI_ASSOC);

http_response_code(200);
echo json_encode([
    'status' => 'success',
    'data'   => $data
]);

$stmt->close();
$conn->close();
?>