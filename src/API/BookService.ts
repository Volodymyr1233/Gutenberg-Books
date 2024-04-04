import axios from "axios";

export default class BookService {
    static async getAll(page: number) {
        const response = await axios.get("https://gutendex.com/books?sort=ascending&page="+page);
        return response;
    }

}