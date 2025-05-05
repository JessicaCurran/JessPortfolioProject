<script>
    import {base} from '$app/paths';
</script>

<nav>
<a href ="{base}/College work" class="collegework">College Work</a>
<a href ="{base}/At home work" class="homework">At home Work</a>
</nav>

<style>

h1 {
        font-family: "Verdana", Sans-serif;
        position: absolute;
        top: 4%;
        left: 40%;
        text-align: center;
        font-weight: bold;
        font-size: 70px;
        color: rgb(131, 38, 139);
    }


.background {
         background-size: cover;
         background-position: center;
         background-repeat: no-repeat;
         height: 100vh;
   
}

.collegework {
        color: rgb(115, 11, 124);
        text-decoration: none;
        font-family: "Verdana", Sans-serif;
        font-weight: bold;
        font-size: 40px;
        top: 80%;
        left: 25%;
        position: absolute;
        transition: color 0.3s ease;
}

.collegework:hover {
        color: rgb(255, 255, 255);
    }

.homework {
        color: rgb(115, 11, 124);
        text-decoration: none;
        font-family: "Verdana", Sans-serif;
        font-weight: bold;
        font-size: 40px;
        top: 80%;
        right: 25%;
        position: absolute;
        transition: color 0.3s ease;
}

.homework:hover {
        color: rgb(255, 255, 255);
    }

    .colourblock {
         position: absolute;
         top: 40%;
         left: 20%;
         width: 450px;
         z-index: 1;
         transition: transform 0.3s ease;
        
    }

    .colourblock:hover {
        transform:scale(1.3);
    }

    .skeleton {
         position: absolute;
         top: 40%;
         right: 25%;
         width: 320px;
         z-index: 1;
         transition: transform 0.3s ease;
        
    }

    .skeleton:hover {
        transform:scale(1.3);
    }



</style>

<div class= "background" style="background-image: url('{base}/cloud.jpg');"></div>
<h1>My work</h1>
<img src= "{base}/colourblock collage.png" alt= "colourblock collage" class= "colourblock"/>
<img src= "{base}/skeleton.png" alt= "skeleton drawing" class= "skeleton"/>