var library = [
    {
        title: 'The Digital Fortress',
        author: 'Dan Brown',
        availability: true,
        holder: ''
    },
    {
        title: 'The Davinci Code',
        author: 'Dan Brown',
        availability: false,
        holder: 'John Smith'
    },
    {
        title: 'Long Eagle',
        author: 'Anonymous',
        availability: true,
        holder: ''
    },
    {
        title: 'Atomic Habits',
        author: 'James Clair',
        availability: false,
        holder: 'Aline'
    },
    {
        title: 'Think and Grow Rich',
        author: 'Napoleon Hill',
        availability: true,
        holder: ''
    },
];


const borrow = (bookName, holder) => { 
    const bookFound=library.find(book=>book.title===bookName);
    if(!bookFound){
        console.log('Book not found');
    }else{

    var theAvailableBook = {};
    library.forEach(book => {
        if (book.title === bookName && book.availability === true) {
            theAvailableBook = book;
            book.availability = false;
            book.holder = holder;
            console.log("The book is available for borrowing!");
            return;
        }
    });

    //console.log(theAvailableBook);

    if (theAvailableBook.availability || theAvailableBook.availability === false) {
        console.log(library);
    } else {
        console.log('That book is not available');
    }
}};
const returnBook = (bookName) => {
    for (const book of library) {
        if (book.title === bookName && !book.availability) {
            book.availability = true;
            book.holder = '';
            console.log("Book returned successfully!");
            console.log(library);
            return; 
        }
    }
}


borrow('Atomic Habits', 'John Smith');
returnBook('Long Eagle');