//for
for (let i = 0; i < 5; i++) {
    console.log("0-4:", i, " (for)");
}

for (let i = 1; i <= 5; i++) {
    if (i % 2 !== 0) {
        console.log("1-5 (impar):", i, " (for)");
    }
}

let i2 = 1;
while(i2 <= 5) {
    console.log("while", i2);
    i2++;
}

let i3 = 10;
do {
    console.log("do");
} while(i3 < 10)