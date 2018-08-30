import axios from "axios";

// The getArticles method retrieves articles from the server
// It accepts a "query" or term to search the NYT api for
export default {
  getArticles: function(query) {
    return axios.get("/api/articles", { params: { q: query } });
  }
};
