
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */
    //
    // var person = {};
    // console.log(person.firstName = 'Joshua');
    // console.log(person.lastName = 'Marchand');
    //
    //
    // /**
    //  * TODO:
    //  * Add a sayHello method to the person object that returns a greeting using
    //  * the firstName and lastName properties.
    //  * console.log the returned message to check your work
    //  *
    //  * Example
    //  * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
    //  */
    //
    // person.sayHello = function () {
    //     console.log('Hello from ' + person.firstName + ' ' + person.lastName);
    // }
    //
    // person.sayHello();
    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    var shoppers = [
        {name: 'Cameron', amount: 180}, //0

        {name: 'Ryan', amount: 250}, //1

        {name: 'George', amount: 320} //2
    ];
    // for (var i=0;i<3;i++){
    //     if (shoppers[i].amount > 200){
    //         console.log(shoppers[i].name + ' needs to pay ' + shoppers[i].amount * .88);
    //     }
    // }



    console.log('For each Star');

    // shoppers.forEach(function (element, index) {
    //     if (shoppers[index].amount > 200){
    //         console.log(shoppers[index].name + ' needs to pay ' + shoppers[index].amount * .88);
    //     }
    // });

    //toFixed(2)

    shoppers.forEach(function (element, index) {
        if (element.amount > 200){
            console.log(element.amount + ': ' + element.name + ' needs to pay ' + element.amount * .88);
        } else {
            console.log(element.amount + ': ' + element.name + ' needs to pay ' + element.amount);
        }
    });

    console.log('For each end');



    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */

    var books = [];

    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */

    // books.forEach(function (book) {
    //     console.log('Book # ' + (books.indexOf(book) + 1));
    //     console.log(book.title);
    //     console.log(book.author.firstName + ' ' + book.author.lastName);
    // });

    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */

    books.createBook = function (t, first, last) {
        books.push(
            {
                title: t,
                author: {
                    firstName: first,
                    lastName: last,
                }
            }
        )
    }

    books.createBook('New Book', 'Melanie', 'Marchand');



    console.log(books[books.length - 1]);

    books.showBookInfo = function (abook) {
        console.log('Book # ' + (books.indexOf(abook) + 1));
        console.log(abook.title);
        console.log(abook.author.firstName + ' ' + abook.author.lastName);
    };

    books.forEach(function (book) {
      books.showBookInfo(book);
    });

    var whatever = [function () {
    return 5;
    }];


    var bookArray = [
        {
            //book object
        },
        {
            //book object
        },
        {
            //function
        }

    ];

