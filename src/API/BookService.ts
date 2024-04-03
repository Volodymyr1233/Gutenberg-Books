import axios from "axios";

export default class BookService {
    static async getAll() {
        const response = await axios.get("https://gutendex.com/books/?sort=ascending");

        return response;
    }
}