let mesaj = 
`
Oba Market'e Xosgeldiniz
Money Kartiniz Varmi ?
1-Beli
2-Xeyr
`;

const urunler = [

    {
        urunIsmi: 'Pendir',
        fiyat: 12
    },
    {
        urunIsmi: 'Un',
        fiyat: 6
    },
    {
        urunIsmi: 'Su',
        fiyat: 1
    }
    
]

//! true ve ya false
let sonuc = confirm(mesaj);
let odenecekTutar;

if(sonuc) {

    //! Money Karti Vardir
    let isim = prompt("Adinizi Giriniz: ");
    let soyIsim = prompt("Soyadinizi Giriniz: ");
    const musteri = new Musteri(isim, soyIsim, sonuc, urunler);
    odenecekTutar = musteri.hesapla();

    alert(
        `Musteri Bilgileri: ${isim} ${soyIsim}
        Odenecek Tutar: ${odenecekTutar}
        `);

}
else {

    //! Money Karti Yoxdur
    const musteri = new Musteri(null, null, sonuc, urunler);
    odenecekTutar = musteri.hesapla();
    alert(`Odenecek Tutar: ${odenecekTutar}`);

}