// FUNCTION DECLARATION

// let mahasiswa = {
//     nama: "Sathosi",
//     energi: 10,
//     makan: function (porsi) {
//         this.energi = this.energi + porsi;
//         console.log(`Halo ${this.nama} selamat makan, energi kamu sekarang sebanyak ${this.energi}`);
//     }
// }

// let mahaSiswa = {
//     nama: "Neva",
//     energi: 80,
//     makan: function (porsi) {
//         this.energi = this.energi + porsi;
//         console.log(`Halo ${this.nama} selamat makan, energi kamu sekarang sebanyak ${this.energi}`);
//     }
// }

// FUNCTION (LUPA)

// function Mahasiswa (nama, energi) {
//     this.nama = nama;
//     this.energi = energi;

//     this.makan = function(porsi) {
//         this.energi += porsi;
//         console.log(`Halo ${this.nama} selamat makan, sekarang energi kamu menjadi ${this.energi}`);
//     }
//     this.main = function(jam) {
//         this.energi -= jam;
//         console.log(`Karena kamu sudah main energimu berkurang menjadi ${this.energi}`);
//     }
// }

// let sathosi = new Mahasiswa("Sathosi", 90);
// let neva = new Mahasiswa("Neva", 80);

// LOGIN

// let begin = prompt("who's there?");

// if (begin === "admin" || begin === "Admin", 'anda') {
//     let password = prompt("Password?");
//     if (password === "TheMaster") {
//         alert("Welcome!");
//     } else if (password === "" || password === null) {
//         alert("Canceled")
//     } else {
//         alert("Wrong Password!!")
//     }
// } else if (begin === "" || begin === null) {
//     alert("Canceled");
// } else {
//     alert("i dnt knw u");
// }

// SYNTAX CEPAT IF ELSE
// let age = prompt("masukkan umur");
// let message = (age < 12) ? "hi baby!" : 
// (age >= 12 && age < 20) ? "hi boy!" : 
// (age > 20) ? "dah gede lu" : 
// "umur lu berapa?"
// alert(message);