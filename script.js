const searchForm = document.querySelector("form");
const searchResultDiv = document.querySelector(".search_result");
const container = document.querySelector(".container");
const url = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchInputTxt}`;

searchForm.addEventListener("click", async () => {
  let response = await axios.get(
    `https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchInputTxt}`
  );
  const data = await response.json();
  console.log(data);
  searchResultDiv.innerHTML = `<img src="${data.avatar_url}" alt="${data.login}">`;
  container.style.display = "block";
});
