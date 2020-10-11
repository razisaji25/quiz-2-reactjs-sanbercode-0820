class BangunDatar{
    constructor(nama){
        this.bangunDatar=nama;
    }
    get cnam() {
        return this.bangunDatar;
      }
    set cnam(x) {
        this.bangunDatar = x;
      }
    luas(){
        return ""
    }
    Keliling(){
        return ""
    }
}

class Lingkaran extends BangunDatar {
    constructor(nama, r) {
      super(nama);
      this.jari2 = r;
    }
    luas(){
        return 3.14*this.jari2*this.jari2
    }
    Keliling(){
        return 3.14*this.jari2*2
    }
  }

  class Persegi extends BangunDatar {
    constructor(nama, s1,s2) {
      super(nama);
      this.sisi1 = s1;
      this.sisi2 = s2;
    }
    luas(){
        return this.sisi1*this.sisi2
    }
    Keliling(){
        return 2*this.sisi1+2*this.sisi2
    }
  }

hitungan1 = new Persegi("Persegi", 2,3);
hitungan2 = new Lingkaran("Lingkaran", 2,3);
bangundatar = new BangunDatar("Lingkaran");

console.log(bangundatar.luas());
console.log(hitungan1.luas());
console.log(hitungan1.Keliling());

bangunDatar = new BangunDatar("Lingkaran");
bangunDatar.cnam = "Persegi"; 
console.log(bangunDatar.cnam);