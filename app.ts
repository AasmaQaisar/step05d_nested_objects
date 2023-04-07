type Author = {
    firstName: string;
    lastName: string;
};

type Book = {
    author: Author;
    name: string;
};

const myBook : Book = {
    author: {
        firstName: "Aasma",
        lastName: "Chaudhary"
    },
    name: "My Best Book"
}