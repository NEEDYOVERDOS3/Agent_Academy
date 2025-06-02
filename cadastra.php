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
        
         echo "<script>
        alert('ERRO. E-MAIL JÁ REGISTRADO!');
        window.location.href = 'index.html'; 
    </script>";
        
    } else {

         $sql = "INSERT INTO usuario (nome, sobrenome, email, senha) values('$nome', '$sobrenome', '$email', '$senha')";
         $retorno = mysqli_query($conn, $sql);

    } if($retorno ===true){

        echo "<script>
        alert('CADASTRO REALIZADO!!');
        window.location.href = 'index.html'; 
    </script>";

    } else {

         echo"<p style = 'color:red; text-align: center; font-size:25px;'>Erro ao cadastrar usuário.</p>;";

    }

    
}

$conn->close();


?>