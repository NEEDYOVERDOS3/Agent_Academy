<?php
session_start();

// Dados de conexão com o banco
$servidor = "localhost";
$user = "root";
$senha= "";
$bd = "cadlogin";

// Conectar ao banco de dados
$conn = new mysqli($servidor, $user, $senha, $bd);
if ($conn->connect_error) {
    die("Erro de conexão: " . $conn->connect_error);
}

// Verifica se o formulário foi enviado
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST["email"] ?? '';
    $senha = $_POST["senha"] ?? '';

    // Consulta no banco (sem criptografia)
    $stmt = $conn->prepare("SELECT * FROM usuario WHERE email = ? AND senha = ?");
    $stmt->bind_param("ss", $email, $senha);
    $stmt->execute();
    $resultado = $stmt->get_result();

    if ($resultado->num_rows === 1) {
        $usuario = $resultado->fetch_assoc();

        // Armazena os dados na sessão
        $_SESSION["usuario_id"] = $usuario["id"];
        $_SESSION["usuario_nome"] = $usuario["nome"];

        // Redireciona para uma página HTML após login
        header("Location: entrada/index.html"); // <- altere para o nome da sua página HTML
        exit;
    } else {
        echo "<p style='color:red; text-align:center;'>E-mail ou senha incorretos.</p>";
    }

    $stmt->close();
}

$conn->close();
?>
