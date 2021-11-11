 var selamverFonksiyonu = function selamver(){
    console.log("selam");
}

selamverFonksiyonu();

const selamFonksiyonu2= () =>{
    console.log("merhaba 2");

}

selamFonksiyonu2();


const selamFonksiyonu3= (mesaj)=>{
    console.log(mesaj);
}

selamFonksiyonu3("hello world");

var topla=(sayi1,sayi2)=>{
    return sayi1+sayi2;
}

let toplam=topla(3,4);
console.log(toplam)