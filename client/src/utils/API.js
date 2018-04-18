import axios from "axios";
// import filterParams from "./filterParams";

export default {
  saveBand: function(bandData) {
    return axios.post("/bands", bandData);
  },
  // Gets articles from the NYT API
  getBands: function(params) {
    return axios.get("/bands");
  }
  // // Gets all saved articles
  // getSavedArticles: function() {
  //   return axios.get("/api/articles");
  // },
  // // Deletes the saved article with the given id
  // deleteArticle: function(id) {
  //   return axios.delete("/api/articles/" + id);
  // },
  // // Saves an article to the database
  // saveArticle: function(articleData) {
  //   return axios.post("/api/articles", articleData);
  // }
};
