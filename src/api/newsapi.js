import axios from 'axios';

const newsapi = axios.create({
    baseURL: 'https://newsapi.org/',
    params: {
        apiKey: 'e3766a4e9c53493092fc2b4b263454d6',
    }
});

const getEverything = async (query) => {
    const topHeadlinesURL = '/v2/everything';
    const topHeadlinesResponse = await newsapi.get(topHeadlinesURL, {
        params: {
            q: query
        }
    });
    return topHeadlinesResponse;
}


const newsService = {
    newsapi,
    getEverything
}
export default newsService;