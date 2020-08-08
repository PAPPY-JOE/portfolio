<?php
    session_start();
    // include_once 'includes/db.php'
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=7">
    <meta name="description" content="FATOYE, Joseph. I design and develop websites that people love to use">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/index.css">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
    <link href="https://fonts.googleapis.com/css2?family=Inconsolata:wght@200;300;400;500;577;600;700;800;900&family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Open+Sans+Condensed:ital,wght@0,300;0,700;1,300&family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&family=Oswald:wght@200;300;400;469;500;600;700&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
    <title>Joseph Fatoye | Building perfect websites just for you</title>
    <style>
        
.menu-body{
    position: fixed;
    margin-top: 15px;
    margin-left: 25px;
    height: 40px;
    width: 40px;
    background-color: rgb(233, 232, 232);
    text-align: center;
    border-radius: 5px;
    padding: 0 1px;
    transition: .5s  ease;
    z-index: 50;
    display: flex;
    align-items: center;
    justify-content: center;
}

#menu #menu-body:hover{
    box-shadow: 1px 3px 2px 2px rgb(154, 152, 152) inset;
    
}

 #menu #menu-body i{
    font-size: 14px;
    color: red;
    cursor: pointer;

}

    </style>
    <script src="scripts/onload.js"></script>
</head>
<body onload="onload()">
    <div id="onload">
        <h1><span style="color: white;">Joseph</span> Fatoye</h1>
    </div>
    
    <div id="menu">
        <a href="index"> 
            <div class="menu-body" id="menu-body">
                <i class="fa fa-chevron-left"></i>
            </div>
        </a>
    </div>