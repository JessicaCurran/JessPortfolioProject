<style>

h1 {
        font-family: "Verdana", Sans-serif;
        position: absolute;
        top: 4%;
        left: 43%;
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
        height: 160vh;
       
    }

    .cv {
         position: absolute;
         top: 45%;
         left: 10%;
         width: 1500px;
         z-index: 1;
         transition: transform 0.3s ease;
        
    }

    .cv:hover {
        transform:scale(1.1);
    }
    
    
    </style>
    
    <div class= "background"></div>
    <h1>My CV</h1>
    <img src= "cv.png" alt= "cv" class= "cv"/>