<nav>
    <a href ="/Artwork" class="artwork">Artwork</a>
    <a href ="/Games" class="games">Games</a>
    </nav>

<style>

h1 {
        font-family: "Verdana", Sans-serif;
        position: absolute;
        top: 4%;
        left: 32%;
        text-align: center;
        font-weight: bold;
        font-size: 70px;
        color: rgb(131, 38, 139);
    }

.background {
    background-image: url('cloud.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 100vh;
   
}

.artwork {
        color: rgb(115, 11, 124);
        text-decoration: none;
        font-family: "Verdana", Sans-serif;
        font-weight: bold;
        font-size: 40px;
        top: 80%;
        right: 27%;
        position: absolute;
        transition: color 0.3s ease;
}

.artwork:hover {
        color: rgb(255, 255, 255);
    }

    .games {
        color: rgb(115, 11, 124);
        text-decoration: none;
        font-family: "Verdana", Sans-serif;
        font-weight: bold;
        font-size: 40px;
        top: 80%;
        left: 27%;
        position: absolute;
        transition: color 0.3s ease;
}

.games:hover {
        color: rgb(255, 255, 255);
    }

    .city {
         position: absolute;
         top: 45%;
         right: 19%;
         width: 500px;
         z-index: 1;
         transition: transform 0.3s ease;
        
    }

    .city:hover {
        transform:scale(1.3);
    }

    .game {
         position: absolute;
         top: 45%;
         left: 23%;
         width: 300px;
         z-index: 1;
         transition: transform 0.3s ease;
        
    }

    .game:hover {
        transform:scale(1.3);
    }

</style>



<div class= "background"></div>
<h1>College Artwork</h1>
<img src= "city.png" alt= "city drawing" class= "city"/>
<img src= "games.png" alt= "game drawing" class= "game"/>