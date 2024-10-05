// var
// variables  (değişkenler)
// undefined:değişkene değer atanmamış değişken sadece tanımlanmış.
var tanım; // sadece tanımlandı hafızada yer kaplamaz
console.log(names); // çıktısı undefined
tanım= ""  // hafızada yer kaplar boş " " olsa bir değeri var yani oluşturuldu




var names="Bedir" // değişkenin ismi name,  değişkenin değeri ise bedir
console.log(names);

// alert("merhaba"+ names)
/*var names="4505"
console.log("names değiskeninin değeri:" + 4505);*/

// Aynı isimle değişken oluşturup projemizi bozabiliriz
// var names=4505;
// console.log(names);
// var ile tanımlanan değişkenın değeri program boyunca değiştirilebilir
// yukarıda tanımladığımız değişkenın değerini değiştirdik.
names="hayrunnısa";
console.log(names);

// birleştirme oparatörü + metinleri birleştirmek için
// let
let yas=20;
console.log("yas değiskeninin değeri:" + yas); //20

yas=21;
console.log("bir yıl geçti yeni yas:" + yas) //21

//alert("merhaba " + names + " şuanda " + yas + " yasındasınız.");

//aynı block-scoped içerisinde let ile tanımlanan değişken ismi ile tekrar
// değişken tanımlanamaz . vardan ayırt eden özelliği 
//let yas=40 // bunu yapamıyoruz


// const
// sabit yani değişken değil tanımlandığında değeri atanmak zorunda 
// değeri program boyunca değiştirilemez
// const -> constant -> sabit

const tckn = "12345678900";
console.log("tc kimlik no " + tckn);


// tckn="98753648392" // sabiitin değeri değiştirilemediği için programda hata veriyor
//console.log(tckn);

// const ile tanımlanan sabitlerde aynı isimle tekrar tanımlanamaz
// const tckn = "98765678941"

// personel

var isim;
var soyisim;
let personelYas;
let tel;
const personelTcKimlikNo = "12345678900"

isim="nurgül";
soyisim="yılmaz";
personelYas=20;
tel="0541 456 0191";



console.log("Personel ad: " + isim);
console.log("Personel Soyadı: " + soyisim);
console.log("Personel Yaş: " + personelYas);
console.log("Personel Tel: " + tel);
console.log("Personel TcKimlik: " + personelTcKimlikNo);

// oparatörler
// ekleme " + " metinlerde birleştirme yapar numara tiplerınde toplama yapar 
// eğer bi taraf metin bi taraf numara ise birleştirme yapar
const sayi1=20;
const sayi2=5;
 let toplam= 5+7
 toplam = sayi1 + sayi2;
 console.log("Toplam: " + toplam);

 // çıkarma " - " sayısal(numara-number) tiplerde çıkarma işlemi yapar



 const cikarma=20-15;
console.log("çıkarma: " + cikarma);


// çarpma " * " sayısal (numara-numara) tiplerde çarpma işlemi yapar
const carpma = sayi1 * sayi2 ;
console.log("çarpma: " + carpma);

// bölme "/" sayısal (numara-number) tiplerde bölme işlemi yapar
const bolme = sayi1 / sayi2;
console.log(" bölme: " + bolme);

// mod "%" sayılsa (numara-number) tiplerde bölümden kalanı hesaplar
const mod = 5 % 2
console.log("mod:" + mod);

// artırma "++" ve azaltma "--"  sayısal (numara-number) tiplerde 
// artırma ve azaltma işlemi değişkeni 1 artırır yada bir azaltır

let sayi3 = 18
const arttir = ++sayi3;
console.log("arttırılmış Sayı:" + arttir);

const azalt= --sayi3;
console.log("cikarilmişsayı:" + sayi3);
// exponentiation üst alma
// kare alma "**" sayısal (numara-number) tiplerde üssü olarak alır

let x = 5;
let y = x ** 3;
console.log("x üzer 3: " + y);

// ÖN EKLEME VE ÖN EKSİ İŞLEMİ
// z nin eksi değeri ile eşittirin sağındaki sayıyı  toplar ve z yeni değer olarak atanır
let z = 5; 
z = z + 1; // çıktısı=6
z += 3 ; // çıktısı = 9 (uzun yazılmış hali: z=z+3)
console.log(" z nin değeri; " , z);


let a = 10;
a = a + 5; // a += 5; çıktı: 15
a = a - 3; // a -= 3; çıktı: 12
a = a / 2; // a /= 2; çıktı: 6 
console.log("a nin değeri:" , a );

// atama "=" eşitliğin sağındaki değeri solundaki değişkene atar

function topla() {
      let numara1 = 200;
      let numara2 = 250;
      let toplam = numara1 + numara2;
      

      document.getElementById("sonuc").innerHTML= toplam;

}
function cikar() {
    let num1 = 300;
    let num2 = 200;
    let cikar = num1 - num2;
    document.getElementById("sonuc").innerHTML= cikar;
}

function çarp() {
    let num3 = 12;
    let num4 = 14;
    let çarp = num3*num4;
    document.getElementById("sonuc").innerHTML= çarp;
}
function bolme1() {
    let num5 = 250;
    let num6 = 25;
    let bolme = num5/num6;
    document.getElementById("sonuc").innerHTML= bolme;
}








