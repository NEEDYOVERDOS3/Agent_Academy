<?php

//conexão com banco de dados

$servidor = "localhost";
$user = "root";
$senha = "";
$bd = "cadlogin";

$conn = new mysqli($servidor, $user, "", $bd);
if (!$conn){

    echo"<p style = 'color:red; text-align: center; font-size:25px;'> Erro de conexão</p>";

}


//verificar se o formulário foi submetido

if($_SERVER ["REQUEST_METHOD"]=="POST"){
    //recupera valores do formulário

    $nome = $_POST["nome"] ?? '';
    $sobrenome = $_POST["sobrenome"] ?? '';
    $email = $_POST["email"] ?? '';
    $senha = $_POST["senha"] ?? '';

    $sql = "SELECT * FROM usuario WHERE email = '$email'";
    $retorno = mysqli_query($conn, $sql);
    $row = mysqli_fetch_assoc($retorno);

    if($row){
        
         echo"<p style = 'color:red; text-align: center; font-size:25px;'>Usuário ou e-mail já registrado</p>";
        
    } else {

         $sql = "INSERT INTO usuario (nome, sobrenome, email, senha) values('$nome', '$sobrenome', '$email', '$senha')";
         $retorno = mysqli_query($conn, $sql);

    } if($retorno ===true){

        echo"<p style = 'color:green; text-align: center; font-size:25px;'>CADASTRO REALIZADO!! <br> Retorne para a tela de login.</p>";
        echo "<a href='index.html' style='display:inline-block; margin-top:20px; padding:10px 20px; background-color:#4CAF50; color:black; text-decoration:none; border-radius:5px;'>Ir para o Login</a>";

    } else {

         echo"<p style = 'color:red; text-align: center; font-size:25px;'>Erro ao cadastrar usuário.</p>;";
         

    }

    
}

$conn->close();


?>