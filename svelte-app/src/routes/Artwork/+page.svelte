<script>
    import {base} from '$app/paths';
</script>

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
    height: 530vh;
   
}

.line1 {
    font-family: "Verdana", Sans-serif;
        position: absolute;
        top: 45%;
        left: 10%;
        font-weight: bold;
        font-size: 30px;
        color: rgb(255, 255, 255);
}


.guy1 {
         position: absolute;
         top: 70%;
         left: 15%;
         width: 350px;
         z-index: 1;
         transition: transform 0.3s ease;
        
    }

    .guy1:hover {
        transform:scale(1.3);
    }

    .guy2 {
         position: absolute;
         top: 70%;
         left: 40%;
         width: 350px;
         z-index: 1;
         transition: transform 0.3s ease;
        
    }

    .guy2:hover {
        transform:scale(1.3);
    }

    .guy3 {
         position: absolute;
         top: 70%;
         right: 15%;
         width: 350px;
         z-index: 1;
         transition: transform 0.3s ease;
        
    }

    .guy3:hover {
        transform:scale(1.3);
    }

    .line2 {
        font-family: "Verdana", Sans-serif;
        position: absolute;
        top: 118%;
        left: 15%;
        font-weight: bold;
        font-size: 30px;
        color: rgb(255, 255, 255);
}

    .background1 {
         position: absolute;
         top: 140%;
         left: 10%;
         width: 600px;
         z-index: 1;
         transition: transform 0.3s ease;
        
    }

    .background1:hover {
        transform:scale(1.3);
    }

    .background2 {
         position: absolute;
         top: 142%;
         right: 10%;
         width: 700px;
         z-index: 1;
         transition: transform 0.3s ease;
        
    }

    .background2:hover {
        transform:scale(1.3);
    }


    .line3 {
        font-family: "Verdana", Sans-serif;
        position: absolute;
        top: 195%;
        left: 10%;
        font-weight: bold;
        font-size: 30px;
        color: rgb(255, 255, 255);
}

    .chicken {
         position: absolute;
         top: 210%;
         left: 15%;
         width: 370px;
         z-index: 1;
         transition: transform 0.3s ease;
        
    }

    .chicken:hover {
        transform:scale(1.3);
    }

    .wheat {
         position: absolute;
         top: 210%;
         left: 40%;
         width: 400px;
         z-index: 1;
         transition: transform 0.3s ease;
        
    }

    .wheat:hover {
        transform:scale(1.3);
    }

    .cow {
         position: absolute;
         top: 210%;
         right: 15%;
         width: 400px;
         z-index: 1;
         transition: transform 0.3s ease;
        
    }

    .cow:hover {
        transform:scale(1.3);
    }

    .line4 {
        font-family: "Verdana", Sans-serif;
        position: absolute;
        top: 260%;
        left: 7%;
        font-weight: bold;
        font-size: 30px;
        color: rgb(255, 255, 255);
}

.boat {
         position: absolute;
         top: 290%;
         left: 15%;
         width: 400px;
         z-index: 1;
         transition: transform 0.3s ease;
        
    }

    .boat:hover {
        transform:scale(1.3);
    }

    .fish {
         position: absolute;
         top: 300%;
         right: 10%;
         width: 900px;
         z-index: 1;
         transition: transform 0.3s ease;
        
    }

    .fish:hover {
        transform:scale(1.3);
    }

    .line5 {
        font-family: "Verdana", Sans-serif;
        position: absolute;
        top: 330%;
        left: 10%;
        font-weight: bold;
        font-size: 30px;
        color: rgb(255, 255, 255);
}

    .zombie1 {
         position: absolute;
         top: 355%;
         left: 15%;
         width: 500px;
         z-index: 1;
         transition: transform 0.3s ease;
        
    }

    .zombie1:hover {
        transform:scale(1.3);
    }

    .zombie2 {
         position: absolute;
         top: 355%;
         left: 38%;
         width: 500px;
         z-index: 1;
         transition: transform 0.3s ease;
        
    }

    .zombie2:hover {
        transform:scale(1.3);
    }

    .zombie3 {
         position: absolute;
         top: 355%;
         right: 15%;
         width: 500px;
         z-index: 1;
         transition: transform 0.3s ease;
        
    }

    .zombie3:hover {
        transform:scale(1.3);
    }

    .line6 {
        font-family: "Verdana", Sans-serif;
        position: absolute;
        top: 412%;
        left: 25%;
        font-weight: bold;
        font-size: 30px;
        color: rgb(255, 255, 255);
}

.rat1 {
         position: absolute;
         top: 435%;
         left: 15%;
         width: 750px;
         z-index: 1;
         transition: transform 0.3s ease;
        
    }

    .rat1:hover {
        transform:scale(1.3);
    }

    .rat2 {
         position: absolute;
         top: 435%;
         right: 15%;
         width: 750px;
         z-index: 1;
         transition: transform 0.3s ease;
        
    }

    .rat2:hover {
        transform:scale(1.3);
    }

    
    .line7 {
        font-family: "Verdana", Sans-serif;
        position: absolute;
        top: 499%;
        left: 7%;
        font-weight: bold;
        font-size: 30px;
        color: rgb(255, 255, 255);
}





</style>

<div class= "background" style="background-image: url('{base}/cloud.jpg');"></div>
<h1>Artwork</h1>
<div id="line1" class="line1"> This page will showcase some artwork ive done for assignments/projects.<br> I havent done a lot of digital art in college but i will show the small 
    amount that i have done!
</div>
<img src= "{base}/guy1.png" alt= "guy drawing" class= "guy1"/>
<img src= "{base}/guy2.png" alt= "guy drawing" class= "guy2"/>
<img src= "{base}/guy3.png" alt= "guy drawing" class= "guy3"/>
<div id="line2" class="line2">These are some character varients i created as the player character for a game.</div>
<img src= "{base}/background1.png" alt= "background drawing" class= "background1"/>
<img src= "{base}/background2.png" alt= "background drawing" class= "background2"/>
<div id="line3" class="line3"> These are two background designs i did to showcase a character design and an animation.</div>
<img src= "{base}/wheat.png" alt= "wheat drawing" class= "wheat"/>
<img src= "{base}/chicken.png" alt= "chicken drawing" class= "chicken"/>
<img src= "{base}/cow.png" alt= "cow drawing" class= "cow"/>
<div id="line4" class="line4"> These are some assests i created for a farming game i was making which i will show in the games <br> section of my site and you can see these drawings
    being used in game! </div>
<img src= "{base}/fishing boat.png" alt= "boat drawing" class= "boat"/>
<img src= "{base}/fish sprite.png" alt= "fish sprite drawing" class= "fish"/>
<div id="line5" class="line5">These are some assets i made for a fishing game i created. The fish is a sprite sheet <br> which i created in aseprite and was then
    used in my game to make the fish have an animation.
</div>
<img src= "{base}/zombie1.png" alt= "zombie drawing" class= "zombie1"/>
<img src= "{base}/zombie2.png" alt= "zombie drawing" class= "zombie2"/>
<img src= "{base}/zombie3.png" alt= "zombie drawing" class= "zombie3"/>
<div id="line6" class="line6">These are some colour varients i made of a zombie that <br> was going to be used as an enemy in a game. </div>
<img src= "{base}/rat1.png" alt= "rat drawing" class= "rat1"/>
<img src= "{base}/rat2.png" alt= "rat drawing" class= "rat2"/>
<div id="line7" class="line7">These are two characters i designed for my final art project. The rat on the right was the player <br> character and the other one
    was the enemy. These were really fun to design and draw!
</div>