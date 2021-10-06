document.writeln("<h2>Factorial Calculation</h2>");

var factorial = 1;

for (var i=1; i<11; i++) {
    factorial *= i;
    console.log(`${i} factorial is ${factorial}`);
    document.write(`<p>\t<strong>${i} factorial is ${factorial}.</strong></p>`);
}