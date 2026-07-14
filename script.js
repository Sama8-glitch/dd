*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}

body{
    background:#000;
    overflow:hidden;
    display:flex;
    justify-content:center;
    align-items:center;
    height:100vh;
    font-family:Courier New, monospace;
}

#heart{
    color:#ff4d6d;
    font-size:12px;
    line-height:12px;
    white-space:pre;
    text-shadow:0 0 8px #ff4d6d;
    animation:pulse 2s infinite;
}

@keyframes pulse{
    0%{
        transform:scale(1);
    }

    50%{
        transform:scale(1.08);
    }

    100%{
        transform:scale(1);
    }
}
