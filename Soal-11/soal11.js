function filterBooksPromise(colorful,amountOfPage){
    return new Promise(function(resolve,reject){
        var books = [
            {nama: "shinchan", totalPage:"50", isColorful: true},
            {nama: "kalkulus", totalPage:"250", isColorful: false},
            {nama: "doraemon", totalPage:"40", isColorful: true},
            {nama: "algoritma", totalPage:"300", isColorful: false},
            ]
        if (amountOfPage > 0){
            resolve(books.filter(x=>x.totalPage >= amountOfPage && x.isColorful == colorful));
        } else{
            var reason = new Error("maaf parameter salah")
            reject(reason);
        }

    });
}

//Menjalankan promise

var filterBook = filterBooksPromise(colorful,amountOfPage)
function askBook(){
    filterBook
        .then(function(fulfilled){
            console.log(fulfilled);
        })
        .catch(function(error){
            console.log(error.message);
        });
}

var colorful = true
var amountOfPage = 50
askBook()