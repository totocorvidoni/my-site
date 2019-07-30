export default [
  {
    name: "Pupe Lepú",
    links: {
      repo: "https://github.com/totocorvidoni/vue-crafts-store",
      live: "https://tomascorridoni.com/pupe-lepu/"
    },
    description:
      "<p>An online catalog for hand made products.</p> <p>The site was designed focusing on displaying the client's products in detail while at the same time letting her personality show.</p> <p>The admin section has been setup with Wordpress and uses WooCommerce for product management, this information is sent to the front end app through the WooCommerce REST API.</p>",
    tags: ["Store", "Vue", "Wordpress", "WooCommerce", "API"],
    images: [
      {
        thumb: require("@/assets/images/projects/lepu/01-thumb.jpg"),
        full: require("@/assets/images/projects/lepu/01.jpg"),
        alt: "Pupe Lepú logo, a rabbit in a grey circle."
      },
      {
        thumb: require("@/assets/images/projects/lepu/02-thumb.jpg"),
        full: require("@/assets/images/projects/lepu/02.jpg"),
        alt: "Several products placed in cards."
      },
      {
        thumb: require("@/assets/images/projects/lepu/03-thumb.jpg"),
        full: require("@/assets/images/projects/lepu/03.jpg"),
        alt:
          "The picture of a fox amigurumi leaning on a book and it's description to the right."
      },
      {
        thumb: require("@/assets/images/projects/lepu/04-thumb.jpg"),
        full: require("@/assets/images/projects/lepu/04.jpg"),
        alt: "An admin panel showing product details."
      }
    ]
  },
  {
    name: "Bounty Tea",
    links: {
      live: "https://bountytea.com.ar"
    },
    description:
      "<p>A site for artisan tea blends.</p> <p>The site is designed to let the visitors inspect and get to know all the tea blends the company offers. It also provides lets them naturally flow to their contact channels to make a purchase.</p> <p>In the first year of the site being live, their sales went up by a considerable margin and currently more than 40% of total sales come from the site.</p>",
    tags: ["Products", "HTML", "CSS"],
    images: [
      {
        thumb: require("@/assets/images/projects/bounty/01-thumb.jpg"),
        full: require("@/assets/images/projects/bounty/01.png"),
        alt: "Bounty Tea Logo and site links."
      },
      {
        thumb: require("@/assets/images/projects/bounty/02-thumb.jpg"),
        full: require("@/assets/images/projects/bounty/02.png"),
        alt: "Luna roja product view and the blend stripe above."
      },
      {
        thumb: require("@/assets/images/projects/bounty/03-thumb.jpg"),
        full: require("@/assets/images/projects/bounty/03.png"),
        alt: "Their 3 presentations Single, Tea Set, Samplers"
      },
      {
        thumb: require("@/assets/images/projects/bounty/04-thumb.jpg"),
        full: require("@/assets/images/projects/bounty/04.png"),
        alt:
          "Blend gallery where you can see their color, name and short description."
      }
    ]
  },
  {
    name: "Thou Shall Do",
    links: {
      repo: "https://github.com/totocorvidoni/todo-vue",
      live: "https://totocorvidoni.github.io/todo-vue/"
    },
    description:
      "<p>Made with Vue, it's my take on todo lists. </p><p>Taking advantage of the simplicity of a todo manager I payed special attention on refining and integrating additional features such as, priorities and due dates. It allowed me to mainly focus on logic and functions to manipulate and present data.</p>",
    tags: ["Todo", "Vue", "Vuex", "Sass"],
    images: [
      {
        thumb: require("@/assets/images/projects/todo/01-thumb.png"),
        full: require("@/assets/images/projects/todo/01.png"),
        alt: "Thou Shall Do logo."
      },
      {
        thumb: require("@/assets/images/projects/todo/02-thumb.png"),
        full: require("@/assets/images/projects/todo/02.png"),
        alt: "Quick mode todos."
      },
      {
        thumb: require("@/assets/images/projects/todo/03-thumb.png"),
        full: require("@/assets/images/projects/todo/03.png"),
        alt: "A full view with no project opened."
      },
      {
        thumb: require("@/assets/images/projects/todo/04-thumb.png"),
        full: require("@/assets/images/projects/todo/04.png"),
        alt: "A full view with a project and a todo selected."
      }
    ]
  },
  {
    name: "My Library",
    links: {
      repo: "https://github.com/totocorvidoni/myLibrary",
      live: "https://totocorvidoni.github.io/myLibrary/"
    },
    description:
      "<p>It lets you add books to a virtual library, allowing you to keep track of the read status.</p> <p>The best part of the project was figuring out how to implement all the needed features into the book cards. I wanted each element to feel natural on them and that forced me to find creative solutions for their implementations.</p>",
    tags: ["Books", "Vue"],
    images: [
      {
        thumb: require("@/assets/images/projects/library/01-thumb.png"),
        full: require("@/assets/images/projects/library/01.png"),
        alt: "Thou Shall Do logo."
      },
      {
        thumb: require("@/assets/images/projects/library/02-thumb.png"),
        full: require("@/assets/images/projects/library/02.png"),
        alt: "Quick mode todos."
      },
      {
        thumb: require("@/assets/images/projects/library/03-thumb.png"),
        full: require("@/assets/images/projects/library/03.png"),
        alt: "A full view with no project opened."
      },
      {
        thumb: require("@/assets/images/projects/library/04-thumb.png"),
        full: require("@/assets/images/projects/library/04.png"),
        alt: "A full view with a project and a library selected."
      }
    ]
  },
  {
    name: "Find Wally",
    links: {
      repo: "https://github.com/totocorvidoni/find-wally",
      live: "https://totocorvidoni.github.io/find-wally/"
    },
    description:
      "<p>Play \"Where's Wally?\" online! </p><p> On the front end we have a Vue app that let's you navigate the scene to find hidden characters, on the back end there is a Rails API that validates guesses and saves High Scores. </p><p> Figuring out the best way to validate guesses was my favorite part, my least favorite was finding Woof.</p>",
    tags: ["Game", "Vue", "Rails", "API"],
    images: [
      {
        thumb: require("@/assets/images/projects/wally/01-thumb.jpg"),
        full: require("@/assets/images/projects/wally/01.jpg"),
        alt:
          "General view of the site, the scene on the left and the character status on the right."
      },
      {
        thumb: require("@/assets/images/projects/wally/02.jpg"),
        full: require("@/assets/images/projects/wally/02.jpg"),
        alt: "Faces of the hidden characters and the score board with names."
      },
      {
        thumb: require("@/assets/images/projects/wally/03.jpg"),
        full: require("@/assets/images/projects/wally/03.jpg"),
        alt:
          "A wheel with characters faces circling around a semi-transparent square"
      },
      {
        thumb: require("@/assets/images/projects/wally/04-thumb.jpg"),
        full: require("@/assets/images/projects/wally/04.jpg"),
        alt:
          "A congratulations message telling how long it took to beat the game and asking for the user to put on it's name to save the score."
      }
    ]
  }
];
