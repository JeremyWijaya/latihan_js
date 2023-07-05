//head
document.writeln("Kalkulator Sederhana")

//body
let num1 = prompt("Masukkan angka pertama: ");
let num2 = prompt("Masukkan angka kedua: ");

let result;

let operator = prompt("Masukkan operasi yang ingin Anda lakukan (+, -, *, /): ");

if(operator === '+'){
    result = parseInt(num1) + parseInt(num2);
} else if(operator === '-'){
    result = parseInt(num1) - parseInt(num2);
} else if(operator === '*'){
    result = parseInt(num1) * parseInt(num2);
} else if(operator === '/'){
    result = parseInt(num1) / parseInt(num2);
} else {
    alert("Hasil Tidak Diketahui!");
}

alert("Hasilnya adalah: " + result);