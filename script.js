*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}

body{
    display:flex;
    justify-content:center;
    align-items:center;
    height:100vh;
    background:#000;
    overflow:hidden;
}

.heart{
    width:120px;
    height:120px;
    background:red;
    transform:rotate(-45deg);
    animation:beat 1s infinite;
    position:relative;
    box-shadow:0 0 50px red;
}

.heart::before,
.heart::after{
    content:"";
    width:120px;
    height:120px;
    background:red;
    border-radius:50%;
    position:absolute;
}

.heart::before{
    top:-60px;
    left:0;
}

.heart::after{
    left:60px;
    top:0;
}

@keyframes beat{
    0%{
        transform:rotate(-45deg) scale(1);
    }
    50%{
        transform:rotate(-45deg) scale(1.2);
    }
    100%{
        transform:rotate(-45deg) scale(1);
    }
}
