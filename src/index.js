const init = () => {
  let form = document.querySelector("form");
  let userInput = document.querySelector("searchByID");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    let userInput = event.target.searchByID.value;
    fetch(`http://localhost:3000/movies/${userInput}`)
      .then((response) => response.json())
      .then((data) => {
        let h4 = document.querySelector("h4");
        let p = document.querySelector("p");
        p.innerHTML = `Summary:${data.summary}`;
        h4.innerHTML = `Title:${data.title}`;
      });

  });
};

document.addEventListener("DOMContentLoaded", init);

