// Hide filter menu initially
document.getElementById("filterContent").style.display = "none";

// SHOW / HIDE FILTER MNU
function showFilter() {

  let filterForm = document.getElementById("filterContent");
  let addForm = document.getElementById("newContent");

  // hide add form
  addForm.style.display = "none";

  // toggle filter
  if (filterForm.style.display === "none") {
    filterForm.style.display = "block";
  } else {
    filterForm.style.display = "none";
  }
}


// SHOW / HIDE FORM
function showAddNew() {

  let filterForm = document.getElementById("filterContent");
  let addForm = document.getElementById("newContent");

  // hide filter
  filterForm.style.display = "none";

  // toggle add form
  if (addForm.style.display === "none") {
    addForm.style.display = "flex";
  } else {
    addForm.style.display = "none";
  }
}


// FILTER ARTICLES
function filterArticles() {

  let opinionChecked = document.getElementById("opinionCheckbox").checked;
  let recipeChecked = document.getElementById("recipeCheckbox").checked;
  let updateChecked = document.getElementById("updateCheckbox").checked;

  let articles = document.querySelectorAll("#articleList article");

  articles.forEach(function(article) {

    if (article.classList.contains("opinion")) {
      article.style.display = opinionChecked ? "block" : "none";
    }

    if (article.classList.contains("recipe")) {
      article.style.display = recipeChecked ? "block" : "none";
    }

    if (article.classList.contains("update")) {
      article.style.display = updateChecked ? "block" : "none";
    }

  });
}


// ADDS A NEW ARTICLE
function addNewArticle() {

  let title = document.getElementById("inputHeader").value;
  let text = document.getElementById("inputArticle").value;

  let opinion = document.getElementById("opinionRadio").checked;
  let recipe = document.getElementById("recipeRadio").checked;
  let update = document.getElementById("lifeRadio").checked;

  if (title === "" || text === "") {
    alert("Please fill out all fields.");
    return;
  }

  let type = "";
  let labelText = "";

  if (opinion) {
    type = "opinion";
    labelText = "Opinion";
  }
  else if (recipe) {
    type = "recipe";
    labelText = "Recipe";
  }
  else if (update) {
    type = "update";
    labelText = "Update";
  }
  else {
    alert("Please select an article type.");
    return;
  }

  // create article element
  let newArticle = document.createElement("article");
  newArticle.classList.add(type);

  // marker
  let marker = document.createElement("span");
  marker.classList.add("marker");
  marker.innerText = labelText;

  // title
  let header = document.createElement("h2");
  header.innerText = title;

  // creates paragraph
  let paragraph = document.createElement("p");
  paragraph.innerText = text;

  // creates read more link
  let readMore = document.createElement("p");
  readMore.innerHTML = '<a href="moreDetails.html">Read more...</a>';

  // appends everything here
  newArticle.appendChild(marker);
  newArticle.appendChild(header);
  newArticle.appendChild(paragraph);
  newArticle.appendChild(readMore);

  document.getElementById("articleList").appendChild(newArticle);

  // clears form
  document.getElementById("inputHeader").value = "";
  document.getElementById("inputArticle").value = "";
  document.getElementById("opinionRadio").checked = false;
  document.getElementById("recipeRadio").checked = false;
  document.getElementById("lifeRadio").checked = false;

  // hides form after adding for cleanliness
  document.getElementById("newContent").style.display = "none";
}
