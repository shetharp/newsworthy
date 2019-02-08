import axios from "axios";

const settings = {
  apiKey: "e3766a4e9c53493092fc2b4b263454d6",
  pageSize: 10
};

const newsapi = axios.create({
  baseURL: "https://newsapi.org/",
  params: {
    apiKey: settings.apiKey
  }
});

/**
 * Returns a Promise for the API response containing a list of articles
 * @param {string} queryTerm Keywords or phrases to search for. Must be URL-encoded.
 * @param {number} page Used to page through the results. Value must be >= 1
 */
const getEverything = async (queryTerm, page) => {
  const topHeadlinesURL = "/v2/everything";
  const topHeadlinesResponse = await newsapi.get(topHeadlinesURL, {
    params: {
      q: queryTerm,
      page: page,
      pageSize: settings.pageSize
    }
  })
  return topHeadlinesResponse;
};

const newsService = {
  settings,
  newsapi,
  getEverything
};
export default newsService;
