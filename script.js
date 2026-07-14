const heart = document.getElementById("heart");

let output = "";

for (let y = 1.5; y > -1.5; y -= 0.05) {
    let line = "";

    for (let x = -1.5; x < 1.5; x += 0.025) {

        let a = x * x + y * y - 1;

        if (a * a * a - x * x * y * y * y <= 0) {

            line += "I love you ";

        } else {

            line += "           ";

        }

    }

    output += line + "\n";

}

heart.textContent = output;
