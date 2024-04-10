class MigrosBase {

    indirimOrani = 20;

    constructor(isim, soyIsim, kartVarmi, urunler) {

        this.isim = isim;
        this.soyIsim = soyIsim;
        this.kartVarmi = kartVarmi;
        this.urunler = urunler;

    }

    hesapla() {

        let odenecekTutar = 0;

        if(this.urunleriKontorlEt(this.urunler)) {

            //! Sebetim Dolu
            if(this.kartVarmi) {

                //! Money Karti Vardir
                this.urunler.forEach((urun) => {
                    odenecekTutar += (urun.fiyat * (100 - this.indirimOrani) / 100);
                });

            }
            else {
                //! Money Karti Yoxdur
                this.urunler.forEach((urun) => {
                    odenecekTutar += urun.fiyat;
                });
            }

        }
        else {
            alert('Sebetinizde Hec Bir Mehsul Yoxdur ! En Az 1 mehsul satin almalisiniz.');
        }

        return odenecekTutar;

    }

    urunleriKontorlEt(urunler) {

        if(urunler != null && urunler.length > 0) {
            return true;
        }
        return false;

    }

}