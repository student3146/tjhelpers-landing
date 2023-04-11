const courses = [
  {
    title: "Вступ до програмування",
    description:
      "Цей курс допоможе вам зрозуміти основи програмування та надати вам можливість вивчити мову програмування, таку як Python. Ви дізнаєтеся, як створювати прості програми та взаємодіяти з різними іншими програмними продуктами.",
    category: "Program",
    difficulty: "Beginner",
    image: "../img/progr.jpg",
  },
  {
    title: "Основи фінансової грамотності",
    description:
      "Цей курс допоможе вам зрозуміти, як керувати своїми фінансами та планувати своє майбутнє. Ви дізнаєтеся, як ефективно використовувати свої гроші, як уникати боргів та як зберігати свої активи.",
    category: "Finance",
    difficulty: "Advanced",
    image: "../img/finance-1.jpg",
  },
  {
    title: "Маркетингова стратегія для онлайн бізнесу",
    description:
      "Цей курс допоможе вам зрозуміти, як розвивати та просувати ваш онлайн бізнес. Ви дізнаєтеся, як створювати стратегії маркетингу, використовувати соціальні медіа та інші інструменти для просування свого бренду та збільшення продажів.",
    category: "Finance",
    difficulty: "Intermediate",
    image: "../img/finance-2.jpg",
  },
  {
    title: "Математичний аналіз",
    description:
      "Цей курс охоплює основні поняття математичного аналізу, такі як диференціювання та інтегрування, а також їх застосування у фізиці та інженерії.",
    category: "Math",
    difficulty: "Intermediate",
    image: "../img/mathematics.jpg",
  },
  {
    title: "Англійська мова для науковців",
    description:
      "Цей курс надає практику англійської мови для науковців та студентів, включаючи наукове письмо, презентації та дискусії.",
    category: "Engl",
    difficulty: "Intermediate",
    image: "../img/engl.jpg",
  },
  {
    title: "Історія середньовічної Європи",
    description:
      "Цей курс охоплює політичну, культурну та релігійну історію Європи з 5 по 15 століття.",
    category: "History",
    difficulty: "Intermediate",
    image: "../img/history.jpg",
  },
];


const filterCourses = (category, difficulty) => {
    if (document.querySelector('#category')) {
            const courseList = document.getElementById("courses__item-list");
            courseList.innerHTML = "";

            const filteredCourses = courses.filter((course) => {
          if (category !== "all" && course.category !== category) {
            return false;
          }
      
          if (difficulty !== "all" && course.difficulty !== difficulty) {
            return false;
          }
      
          return true;
        });

        if (filteredCourses.length === 0) {
          const noResults = document.createElement("p");
          noResults.textContent = "No results found.";
          courseList.appendChild(noResults);
        } else {
          filteredCourses.forEach((course) => {
            const listItem = document.createElement("li");
            listItem.classList.add("courses__item-list--list");
      
            const title = document.createElement("h2");
            title.classList.add("courses__item-list--title");
            title.textContent = course.title;
      
            const description = document.createElement("p");
            description.classList.add("courses__item-list--description");
            description.textContent = course.description;
      
            const category = document.createElement("span");
            category.classList.add("courses__item-list--category");
            category.textContent = course.category;
      
            const difficulty = document.createElement("span");
            difficulty.classList.add("courses__item-list--difficulty");
            difficulty.textContent = course.difficulty;
      
            const image = document.createElement("img");
            image.classList.add("courses__item-list--image");
            image.setAttribute("src", course.image);
      
            listItem.appendChild(title);
            listItem.appendChild(description);
            listItem.appendChild(category);
            listItem.appendChild(difficulty);
            listItem.appendChild(image);
      
            courseList.appendChild(listItem);
          });
        }
    
    }
}

const categorySelect = document.querySelector("#category");
const difficultySelect = document.querySelector("#difficulty");

if(categorySelect, difficultySelect) {
    categorySelect.addEventListener("change", () => {
        const category = categorySelect.value;
        const difficulty = difficultySelect.value;
        filterCourses(category, difficulty);
      });
      
      difficultySelect.addEventListener("change", () => {
        const difficulty = difficultySelect.value;
        const category = categorySelect.value;
        filterCourses(category, difficulty);
      });
}

filterCourses('all', 'all');

    const searchInput = document.getElementById("search");
    const searchBtn = document.getElementById("searchBtn");

    searchBtn.addEventListener("click", () => {
    const keyword = searchInput.value.toLowerCase();
    const filteredCourses = courses.filter(course =>
        course.title.toLowerCase().includes(keyword) ||
        course.description.toLowerCase().includes(keyword) ||
        course.category.toLowerCase().includes(keyword) ||
        course.difficulty.toLowerCase().includes(keyword)
    );


  const courseList = document.querySelector('#courses__item-list');
    courseList.innerHTML = ``;
    console.log(Array.isArray(filteredCourses));
    return (
        filteredCourses.forEach(el => {
        const listItem = document.createElement("li");
        listItem.classList.add("courses__item-list--list");
  
        const title = document.createElement("h2");
        title.classList.add("courses__item-list--title");
        title.textContent = el.title;
  
        const description = document.createElement("p");
        description.classList.add("courses__item-list--description");
        description.textContent = el.description;
  
        const category = document.createElement("span");
        category.classList.add("courses__item-list--category");
        category.textContent = el.category;
  
        const difficulty = document.createElement("span");
        difficulty.classList.add("courses__item-list--difficulty");
        difficulty.textContent = el.difficulty;
  
        const image = document.createElement("img");
        image.classList.add("courses__item-list--image");
        image.setAttribute("src", el.image);
  
        listItem.appendChild(title);
        listItem.appendChild(description);
        listItem.appendChild(category);
        listItem.appendChild(difficulty);
        listItem.appendChild(image);
  
        courseList.appendChild(listItem);
    })
   )
});
  

