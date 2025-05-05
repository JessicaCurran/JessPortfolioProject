<script>
    import {base} from '$app/paths';
</script>

<nav>
    <a href ="{base}/Traditional" class="traditional">Traditional</a>
    <a href ="{base}/Digital" class="digital">Digital</a>
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
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        height: 100vh;
       
    }

    .traditional {
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

.traditional:hover {
        color: rgb(255, 255, 255);
    }

.digital {
        color: rgb(115, 11, 124);
        text-decoration: none;
        font-family: "Verdana", Sans-serif;
        font-weight: bold;
        font-size: 40px;
        top: 80%;
        left: 30%;
        position: absolute;
        transition: color 0.3s ease;
}

.digital:hover {
        color: rgb(255, 255, 255);
    }

    .naruto {
         position: absolute;
         top: 45%;
         left: 26%;
         width: 320px;
         z-index: 1;
         transition: transform 0.3s ease;
        
    }

    .naruto:hover {
        transform:scale(1.3);
    }

    .mountain {
         position: absolute;
         top: 41%;
         right: 24%;
         width: 300px;
         z-index: 1;
         transition: transform 0.3s ease;
        
    }

    .mountain:hover {
        transform:scale(1.3);
    }

    
    </style>
    
    
    
    <div class= "background" style="background-image: url('{base}/cloud.jpg');"></div>
    <h1>At Home Artwork</h1>
    <img src= "{base}/naruto.png" alt= "naruto drawing" class= "naruto"/>
    <img src= "{base}/mountain.jpg" alt= "mountain drawing" class= "mountain"/>