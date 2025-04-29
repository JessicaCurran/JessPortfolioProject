

<nav>
    <ul>
        <li><a href= "/My CV">My CV</a></li>
        <li><a href= "/About me">About me</a></li>
        <li><a href= "/My work">My work</a></li>
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
        background-color: rgb(247, 188, 215);
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
        top: 10%;
        text-decoration: none;
        font-family: "Verdana", Sans-serif;
        font-weight: bold;
        font-size: 2rem;
        transition: color 0.3s ease;
    }

    nav ul li a:hover {
        color: rgb(255, 255, 255);
    }

    @media (max-width: 768px) {
        nav ul {
            flex-direction: column;
            height: auto;
            padding: 10px 0;
        }

        nav ul li {
            margin: 10px 0;
        }
    }

    </style>












