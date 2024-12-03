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

// Connect to the database
try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode(["error" => "Database connection failed: " . $e->getMessage()]);
    exit();
}


// Handle form submission (POST request)
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Handle POST request (form submission)
    $data = json_decode(file_get_contents("php://input"), true);

    // Validate input
    if (empty($data['name']) || empty($data['dateOfBirth']) || empty($data['mobileNumber']) || empty($data['address'])) {
        http_response_code(400);
        echo json_encode(["error" => "All fields are required."]);
        exit();
    }

    $name = htmlspecialchars($data['name']);
    $dateOfBirth = htmlspecialchars($data['dateOfBirth']);
    $mobileNumber = htmlspecialchars($data['mobileNumber']);
    $address = htmlspecialchars($data['address']);

    // Insert data into the database
    try {
        $stmt = $pdo->prepare("INSERT INTO customers_data (name, date_of_birth, mobile_number, address) VALUES (:name, :dateOfBirth, :mobileNumber, :address)");
        $stmt->bindParam(':name', $name);
        $stmt->bindParam(':dateOfBirth', $dateOfBirth);
        $stmt->bindParam(':mobileNumber', $mobileNumber);
        $stmt->bindParam(':address', $address);

        if ($stmt->execute()) {
            echo json_encode(["success" => "Data stored successfully."]);
        } else {
            http_response_code(500);
            echo json_encode(["error" => "Failed to store data."]);
        }
    } catch (PDOException $e) {
        http_response_code(500);
        echo json_encode(["error" => "Database error: " . $e->getMessage()]);
    }

}

// Handle fetching data for the dashboard (pagination, GET request)
if ($_SERVER['REQUEST_METHOD'] === 'GET' && isset($_GET['action']) && $_GET['action'] === 'getRecords') {
    // Pagination setup
    $limit = 100;
    $page = isset($_GET['page']) ? (int)$_GET['page'] : 1;
    $offset = ($page - 1) * $limit;

    // Query to fetch records for the dashboard with pagination
    $stmt = $pdo->prepare("SELECT * FROM customers_data LIMIT :limit OFFSET :offset");
    $stmt->bindParam(':limit', $limit, PDO::PARAM_INT);
    $stmt->bindParam(':offset', $offset, PDO::PARAM_INT);
    $stmt->execute();

    $records = $stmt->fetchAll(PDO::FETCH_ASSOC);

    // Get the total number of records for pagination
    $totalStmt = $pdo->prepare("SELECT COUNT(*) FROM customers_data");
    $totalStmt->execute();
    $totalRecords = $totalStmt->fetchColumn();
    $totalPages = ceil($totalRecords / $limit);

    echo json_encode([
        "records" => $records,
        "totalPages" => $totalPages,
        "currentPage" => $page
    ]);

    exit();
}
?>
