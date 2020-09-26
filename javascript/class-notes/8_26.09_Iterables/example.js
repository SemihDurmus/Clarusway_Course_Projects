console.log("--------EXAMPLE------------");

const data = [
    {
      id: 0,
      title: "Tempor aute aliqua excepteur ad id.",
      desc: "Amet qui qui est sit culpa aliqua consequat in esse nisi mollit elit pariatur ipsum. Nulla do tempor ut sit qui. Laborum amet eiusmod Lorem dolor. Voluptate fugiat ipsum non ipsum proident reprehenderit adipisicing do anim ad cillum.",
      readCount: 2310,
    },
    {
      id: 1,
      title: "Qui duis tipsum anim ipsum sit.",
      desc: "Qui proident culpa excepteur elit minim nostrud nostrud sit ea ad proident labore Lorem. Et et elit et sint nisi sint aliqua velit exercitation sint mollit labore. Commodo pariatur deserunt aliquip sit in reprehenderit occaecat excepteur fugiat amet quis labore tempor ex.",
      readCount: 3200,
    },
    {
      id: 2,
      title: "Sint est sint.",
      desc: "Sit officia enim culpa voluptate enim amet. Sunt eiusmod elit sit ipsum. Ad consequat magna cillum ut tempor commodo.",
      readCount: 1390,
    },
    {
      id: 3,
      title: "Incididunt  sint.",
      desc: "Magna eiusmod ex incididunt Lorem ipsum commodo enim id incididunt quis. Ut reprehenderit elit consectetur deserunt est consequat sunt duis elit et et commodo qui. Eiusmod nulla aliqua excepteur Lorem reprehenderit dolor. Eiusmod sunt ut qui non culpa enim quis. Officia consequat cillum labore nulla labore ipsum exercitation ullamco mollit laborum Lorem. Lorem dolore aliquip ea cillum labore duis adipisicing ex sit reprehenderit.",
      readCount: 3420,
    },
    {
      id: 4,
      title: "Eiusmoa cupidatat mollit.",
      desc: "Do culpa ea occaecat pariatur amet magna. Elit culpa id voluptate reprehenderit nulla tempor eu adipisicing mollit. Voluptate magna nisi veniam esse elit. Ex ullamco culpa velit sint ex aute culpa eu ea do laboris non irure.",
      readCount: 230,
    },
  ];

  function loadArticles(readingCount) {
    let articleData = data;
    const articles = document.querySelector("#articles");
    if (readingCount != undefined) {
      articles.innerHTML = "";
      articleData = data.filter((art) => readingCount < art.readCount);
    }
    articleData.forEach((d) => {
      const articleElement = document.createElement("div");
      articleElement.classList.add("article");
      articleElement.innerHTML = `
      <p class="title">${d.title}</p>
      <p>${d.desc}</p>
      <p class="reading_count">Reading: ${d.readCount}</p>
    `;
      articles.appendChild(articleElement);
    });
  }
  function filterArticles() {
    const countValue = document.querySelector("#count_input").value;
    loadArticles(countValue);
  }
  document
    .querySelector("#search_button")
    .addEventListener("click", filterArticles);
  loadArticles();