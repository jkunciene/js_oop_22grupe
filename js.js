console.log('labas');

class Person {
    constructor(name, lasname, cardId, address, phoneNumber){
        this.name = name;
        this.lastname = lasname;
        this.cardId = cardId;
        this.address = address;
        this.phoneNumber = phoneNumber;
        this.books = [];
    }

    info(){
        return this.name + " " + this.address + " " + this.phoneNumber
    }
    booksforreading(book){
        this.books.push(book);
    }
    booksinfo(){
        console.log(this.name + " paimtos knygos yra:")
        for(let i=0; i <this.books.length; i++){
            console.log(this.books[i]);
        }
    }
  
}

//registruojamas naujas bibliotekos lankytojas-klientas
//konkretaus objekto sukurimas klases pagrindu
const klientas_1 = new Person("Jefas", "Josefino", 123456789, "Laisves al., Kaunas", "+37060012345");
const klientas_2 = new Person("One", "Onauskiene", 098765, "Kaimas Rugpieniu", 869988888);
//sukurti antra klienta ir jo paimtas knygas, isspausdinti informacija pilna 

//console.log(klientas_1.info());

//pasikeite kliento tel nr
klientas_1.phoneNumber = "768686868686";

console.log("kliento info: " + klientas_1.info());
//knygos pridejimas klientui, skaitytojui
klientas_1.booksforreading("Nuostabi atmintis");
klientas_1.booksforreading("Svajoniu galia");
klientas_1.booksinfo();

klientas_2.booksforreading("antro kliento pirma knyga");
klientas_2.booksforreading("antro kliento antra knyga");
console.log(klientas_2.info());
klientas_2.booksinfo();

