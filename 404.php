<?php
    include_once 'includes/db.php'
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/index.css">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
    <style>
        .error{
            color: red;
        }
    </style>
    <title>BLINGZ VILLE</title>
    <style>
        .error{
            color: red;
        }
       body div{
            height: 100vh;
        }
        aside{
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
        }
       aside section{
            padding: 5%;
        }
    </style>
</head>
<body>
    
    <input type="checkbox" id="check" >
    <label for="check">
        <i class="fa fa-lightbulb-o" id="light"></i>
        <i class="fa fa-moon-o" id="dark"></i>
    </label>
        <div>
            <main>

                <h1>BLINGZ VILLE</h1>

                <p class="error">The page you are searching for does not exist</p>
                <br>
         
                <aside>
                    <section>
                        <p>Don't have an account?</p>
                        <p><a href="index.php">Sign Up</a></p>

                    </section>
                    
                    <section>
                        <p>Already have an account?</p>
                        <p><a href="login.php">Login</a></p>

                    </section>                
                


                </aside>
               
            </main> 
        </div>