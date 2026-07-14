const heart = document.getElementById("heart");

let output = "";

for (let y = 1.5; y > -1.5; y -= 0.08) {
    let line = "";

    for (let x = -1.5; x < 1.5; x += 0.04) {

        let a = x * x + y * y - 1;

        if (a * a * a - x * x * y * y * y <= 0) {
            line += "I love you ";
        } else {
            line += "           "; // نفس عدد حروف I love you
        }
    }

    output += line + "\n";
}

heart.textContent = output;
