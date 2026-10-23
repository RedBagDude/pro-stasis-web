<?php
/**
 * Pro-Stasis Robotics - Backend API en PHP
 * Compatible con cualquier Hosting Apache / Nginx / cPanel / Plesk
 * Almacenamiento 100% local en archivos JSON (Sin necesidad de base de datos)
 */

// 1. Cabeceras CORS (Permite llamadas desde Angular en local y en producción)
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");
header("Content-Type: application/json; charset=UTF-8");

// Responder inmediatamente a las peticiones preflight OPTIONS
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Rutas de archivos de datos locales
$DATA_DIR = __DIR__ . '/data';
$MESSAGES_FILE = $DATA_DIR . '/messages.json';
$PRODUCTS_FILE = $DATA_DIR . '/products.json';
$GRIPS_FILE = $DATA_DIR . '/grips.json';

// 2. Extraer la ruta solicitada
$requestUri = $_SERVER['REQUEST_URI'];
$basePath = parse_url($requestUri, PHP_URL_PATH);

// Normalizar la ruta eliminando prefijos comunes
// (Funciona tanto en https://tudominio.com/api/contact como en localhost/api/contact)
$route = preg_replace('#^.*/api#', '', $basePath);
$route = trim($route, '/');
if (empty($route) && isset($_GET['route'])) {
    $route = trim($_GET['route'], '/');
}

$method = $_SERVER['REQUEST_METHOD'];

// 3. Enrutador de Endpoints
switch ($route) {

    // --- GET /api/health ---
    case 'health':
    case '':
        if ($method === 'GET') {
            echo json_encode([
                "status" => "ok",
                "service" => "Pro-Stasis PHP Backend API",
                "storage" => "Archivos JSON locales (sin base de datos)",
                "version" => "1.0.0",
                "timestamp" => gmdate('Y-m-d\TH:i:s\Z')
            ], JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT);
        } else {
            methodNotAllowed();
        }
        break;

    // --- GET /api/content?lang=es|en (Toda la información y textos de la web) ---
    case 'content':
        if ($method === 'GET') {
            $lang = (isset($_GET['lang']) && in_array(strtolower($_GET['lang']), ['es', 'en'])) ? strtolower($_GET['lang']) : 'es';
            $contentFile = $DATA_DIR . "/content_{$lang}.json";
            $contentData = file_exists($contentFile) ? json_decode(file_get_contents($contentFile), true) : [];
            echo json_encode([
                "success" => true,
                "lang" => $lang,
                "data" => $contentData
            ], JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT);
        } else {
            methodNotAllowed();
        }
        break;

    // --- GET /api/products ---
    case 'products':
        if ($method === 'GET') {
            $products = file_exists($PRODUCTS_FILE) ? json_decode(file_get_contents($PRODUCTS_FILE), true) : [];
            echo json_encode([
                "success" => true,
                "count" => count($products),
                "data" => $products
            ], JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT);
        } else {
            methodNotAllowed();
        }
        break;

    // --- GET /api/grips ---
    case 'grips':
        if ($method === 'GET') {
            $grips = file_exists($GRIPS_FILE) ? json_decode(file_get_contents($GRIPS_FILE), true) : [];
            echo json_encode([
                "success" => true,
                "count" => count($grips),
                "data" => $grips
            ], JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT);
        } else {
            methodNotAllowed();
        }
        break;

    // --- POST /api/contact ---
    case 'contact':
        if ($method === 'POST') {
            handleContactSubmission($MESSAGES_FILE);
        } else {
            methodNotAllowed();
        }
        break;

    // --- GET /api/contact/messages ---
    case 'contact/messages':
        if ($method === 'GET') {
            $messages = file_exists($MESSAGES_FILE) ? json_decode(file_get_contents($MESSAGES_FILE), true) : [];
            echo json_encode([
                "success" => true,
                "total" => is_array($messages) ? count($messages) : 0,
                "messages" => is_array($messages) ? $messages : []
            ], JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT);
        } else {
            methodNotAllowed();
        }
        break;

    default:
        http_response_code(404);
        echo json_encode([
            "success" => false,
            "error" => "Ruta no encontrada",
            "requestedRoute" => $route
        ], JSON_UNESCAPED_UNICODE);
        break;
}

// -------------------------------------------------------------
// Funciones auxiliares
// -------------------------------------------------------------

function handleContactSubmission($messagesFile) {
    // Leer el payload JSON del cuerpo de la petición
    $rawInput = file_get_contents('php://input');
    $data = json_decode($rawInput, true);

    if (!$data) {
        http_response_code(400);
        echo json_encode([
            "success" => false,
            "error" => "Cuerpo de solicitud inválido o no es JSON."
        ], JSON_UNESCAPED_UNICODE);
        return;
    }

    $name = isset($data['name']) ? trim($data['name']) : '';
    $email = isset($data['email']) ? trim($data['email']) : '';
    $phone = isset($data['phone']) ? trim($data['phone']) : null;
    $role = isset($data['role']) ? trim($data['role']) : 'particular';
    $message = isset($data['message']) ? trim($data['message']) : '';

    // Validaciones
    if (empty($name) || empty($email) || empty($message)) {
        http_response_code(400);
        echo json_encode([
            "success" => false,
            "error" => "Por favor completa los campos obligatorios (nombre, email y mensaje)."
        ], JSON_UNESCAPED_UNICODE);
        return;
    }

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        http_response_code(400);
        echo json_encode([
            "success" => false,
            "error" => "El formato de correo electrónico no es válido."
        ], JSON_UNESCAPED_UNICODE);
        return;
    }

    // Generar ID único de ticket
    $ticketId = 'MSG-' . strtoupper(base_convert(time(), 10, 36)) . strtoupper(substr(md5(uniqid()), 0, 4));

    $newEntry = [
        "id" => $ticketId,
        "name" => htmlspecialchars($name, ENT_QUOTES, 'UTF-8'),
        "email" => strtolower($email),
        "phone" => $phone ? htmlspecialchars($phone, ENT_QUOTES, 'UTF-8') : null,
        "role" => htmlspecialchars($role, ENT_QUOTES, 'UTF-8'),
        "message" => htmlspecialchars($message, ENT_QUOTES, 'UTF-8'),
        "createdAt" => gmdate('Y-m-d\TH:i:s\Z')
    ];

    // Leer mensajes existentes
    $messages = [];
    if (file_exists($messagesFile)) {
        $raw = file_get_contents($messagesFile);
        $messages = json_decode($raw, true) ?: [];
    }

    // Insertar el nuevo mensaje al inicio (más reciente primero)
    array_unshift($messages, $newEntry);

    // Guardar en disco
    $saved = file_put_contents($messagesFile, json_encode($messages, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT), LOCK_EX);

    if ($saved === false) {
        http_response_code(500);
        echo json_encode([
            "success" => false,
            "error" => "No se pudo guardar el mensaje. Revisa los permisos de escritura en la carpeta data/."
        ], JSON_UNESCAPED_UNICODE);
        return;
    }

    http_response_code(201);
    echo json_encode([
        "success" => true,
        "message" => "¡Gracias por contactar con Pro-Stasis! Hemos recibido tu solicitud y nuestro equipo se pondrá en contacto contigo.",
        "ticketId" => $ticketId
    ], JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT);
}

function methodNotAllowed() {
    http_response_code(405);
    echo json_encode([
        "success" => false,
        "error" => "Método no permitido"
    ], JSON_UNESCAPED_UNICODE);
}
