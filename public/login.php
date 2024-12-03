<?php
// Enable CORS headers
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

// Handle pre-flight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    exit(0);
}

// Start the session
session_start();

// Database connection variables
$host = "localhost";
$dbname = "dream_home";
$username = "root";  // Replace with your DB username
$password = "";      // Replace with your DB password

// Set up PDO for database connection
try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    if ($_SERVER['REQUEST_METHOD'] == 'POST') {
        // Get the posted username and password
        $posted_username = $_POST['username'];
        $posted_password = $_POST['password'];

        // Query to check the credentials
        $stmt = $pdo->prepare("SELECT * FROM owners WHERE username = :username AND password = :password");
        $stmt->execute(['username' => $posted_username, 'password' => $posted_password]);
        $user = $stmt->fetch(PDO::FETCH_ASSOC);

        // If user is found, return success response, else return error
        if ($user) {
            echo json_encode(['success' => true]);
        } else {
            echo json_encode(['success' => false, 'message' => 'Invalid credentials']);
        }
    }
} catch (PDOException $e) {
    // Handle connection error
    echo json_encode(['success' => false, 'message' => 'Database connection failed']);
}
?>
