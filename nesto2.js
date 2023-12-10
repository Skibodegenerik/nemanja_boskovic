var komentari = [
]

function addComment() {
  const username = document.getElementById("username").value;
  const text = document.getElementById("comment-text").value;

  if (username && text) {
    const comment = { user: username, text: text };
    komentari.push(comment);

    displayComments();
    clearForm();
  }
}

function displayComments() {
  const container = document.getElementById("comments-container");
  container.innerHTML = "";

  komentari.forEach(comment => {
    const commentDiv = document.createElement("div");
    commentDiv.classList.add("comment");
    commentDiv.innerHTML = `<strong>${comment.user}:</strong> ${comment.text}`;
    container.appendChild(commentDiv);
  });
}

function clearForm() {
  document.getElementById("username").value = "";
  document.getElementById("comment-text").value = "";
}

function highlightSearch() {
  const searchInput = document.getElementById("search").value.toLowerCase();

  const container = document.getElementById("comments-container");
  const commentsDivs = container.getElementsByClassName("comment");

  Array.from(commentsDivs).forEach(commentDiv => {
    const commentText = commentDiv.textContent.toLowerCase();
    if (commentText.includes(searchInput)) {
      commentDiv.innerHTML = commentText.replace(
        new RegExp(searchInput, "gi"),
        match => `<span class="highlight">${match}</span>`
      );
    } else {
      commentDiv.innerHTML = commentText;
    }
  });
}

displayComments();