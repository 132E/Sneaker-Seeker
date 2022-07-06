const searchForm = document.querySelector("form");
const searchResultDiv = document.querySelector(".search_result");
const container = document.querySelector(".container");

const API_ID = "1";
const API_key = "1";

let searchQuery = "";

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  searchQuery = e.target.querySelector("input").value;
  fetchAPI();
});

async function fetchAPI() {
  const baseURL = `www.themealdb.com/api/json/v1/1/search.php?s=Chicken&api_id=${API_ID}&api_key=${API_key}`;
  const response = await fetch(baseURL);
  console.log(response);
}
