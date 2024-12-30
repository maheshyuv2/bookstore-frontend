import axios from 'axios';

const API_URL = "http://localhost:8080/api/books";  // Replace with actual backend URL

const getBooks = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.error("Error fetching books:", error);
        return [];
    }
};

export const bookService = {
    getBooks
};