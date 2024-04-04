import React from "react";
import {Book} from "../../models/Book";
import CustomButton from "../../UI/CustomButton/CustomButton";
import cl from "./BookCard.module.css";
import {Link} from "react-router-dom";

interface Props {
    book: Book,
    changeStatus: (id: number) => void,
}
const BookCard = ({book, changeStatus}: Props) => {

    return (
        <div className={cl.bookCard}>
            <img src={book.img}/>
            <div className={cl.contentPart}>
                <div>
                    <h1>{book.title.length > 15 ? book.title.slice(0, 15) + "...": book.title}</h1>
                    <p>Authors: {book.authors.length > 15 ? book.authors.slice(0, 15) + "...": book.authors}</p>
                    <p>Languages: {book.languages}</p>
                    <p>Download count: {book.download_count}</p>
                </div>
                <div className={cl.buttonsGroup}>
                    <Link to={book.img === undefined
                        ? `https://www.gutenberg.org/cache/epub/${book.id}/pg${book.id}.txt.utf8`
                        : `https://www.gutenberg.org/ebooks/${book.id}.html.images`
                    }
                          target={"_blank"}>
                        <CustomButton className={cl.buttonStyle + " " + cl.bookBackground}>Read</CustomButton>
                    </Link>

                    {book.isFavourite
                    ? <CustomButton
                            className={cl.buttonStyle + " " + cl.favouriteBookBackground} onClick={() => changeStatus(book.id)}>
                             Unfavourite
                    </CustomButton>
                    : <CustomButton
                            className={cl.buttonStyle + " " + cl.bookBackground} onClick={() => changeStatus(book.id)}>
                            Favourite
                    </CustomButton>}
                </div>
            </div>
        </div>
    )
}

export default BookCard;