const prompt = require("prompt-sync")();
const dayjs = require("dayjs");
const fs = require("fs");

let books = [];

const showBooks = () => {
    console.clear();

    for (const book of books){
        console.log(`${book.title} (${book.interest})`);
        console.log(`Rp${book.price}`);
        console.log(book.added + "\n");
    }
    prompt("Press Enter to Continue....");
}

const addBook = () => {
    console.clear();

    const title = prompt("Insert book title: ");
    const interest = prompt("Insert yout interest: ");
    const price = prompt("Insert the price: ");
    const added = dayjs().format("DD/MM/YYYY HH:mm:ss" );

    books.push({
        title,
        interest,
        price,
        added
    });

    console.log(books)

    prompt("Press Enter to Continue.............")
};

const getBooks = () => {
    const data = fs.readFileSync("favorite.json");
    const books = JSON.parse(data);

    return books;
};


const save = () => {
    fs.writeFileSync("favorite.json", JSON.stringify(books));
};

let running = true;

books = getBooks();

while(running){
    console.log("Favorite Books Library");
    console.log("1. Show book");
    console.log("2. Add a book");
    console.log("3. Save & Exit")

    const choice = prompt("What do you want to do? ")

    if(choice == 1){
        showBooks();
    }else if(choice == 2){
        addBook();
    }else if(choice == 3){
        save();
        running = false;
    }else{
        console.log("Menu tidak tersedia");
    }
}
