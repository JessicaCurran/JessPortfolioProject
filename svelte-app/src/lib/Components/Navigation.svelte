<script>
    import {base} from '$app/paths';
</script>

<nav>
    <a href="{base}/" class="home">
        <img src="{base}/home.png" alt="home">
    </a>

    <ul>
        <li><a href= {`${base}/MyCV`}>My CV</a></li>
        <li><a href= {`${base}/Aboutme`}>About me</a></li>
        <li><a href= {`${base}/Mywork`}>My work</a></li>
    </ul>
   
</nav>


<style>
    nav {
        width: 95.8%;
        height: 85px;
        position: absolute;
        top: 22%;
        left: 2.1%;
        z-index: 1000;
        background-color: rgb(250, 220, 233);
        display: flex;
        align-items: center;
        justify-content: space-evenly;
    }

    nav .home {
        position: absolute;
        top: 2px;
        left: 60px;
    }

    nav .home img {
        height: 80px;
        transition: transition 0.3s ease, opacity 0.3s ease;
    }

    nav .home img:hover {
        transform: scale(1.2);
        color: rgb(255, 255, 255);
    }


    nav ul {
        margin: 0;
        padding: 0;
        list-style: none;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 60px;
    }

    nav ul li {
        margin: 0 40px;
    }

    nav ul li a {
        color: rgb(115, 11, 124);
        text-decoration: none;
        font-family: "Verdana", Sans-serif;
        font-weight: bold;
        font-size: 2rem;
        transition: color 0.3s ease;
    }

    nav ul li a:hover {
        color: rgb(255, 255, 255);
    }

    @media (max-width: 800px) {
        nav ul {
            flex-direction: column;
            height: auto;
            padding: 20px 0;
        }

        nav ul li {
            margin: 20px 0;
        }
    }

    </style>












