// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-projects",
          title: "Projects",
          description: "Some projects I am working on or have worked on.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-research-and-publications",
          title: "Research and Publications",
          description: "My ongoing research and publications by categories in reversed chronological order.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/research/";
          },
        },{id: "nav-blog",
          title: "Blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-a-simple-inline-announcement",
          title: 'A simple inline announcement.',
          description: "",
          section: "News",},{id: "news-a-long-announcement-with-details",
          title: 'A long announcement with details',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_2/";
            },},{id: "news-a-simple-inline-announcement-with-markdown-emoji-sparkles-smile",
          title: 'A simple inline announcement with Markdown emoji! :sparkles: :smile:',
          description: "",
          section: "News",},{id: "projects-ai-playssnake",
          title: 'AI-PlaysSnake',
          description: "Implemented the game Snake and a genetic neuro-evolving reinforcement learning model to beat it, including implementations for the underlying physics engine and graphics for the game.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/ai_plays_snake/";
            },},{id: "projects-cat-g-an",
          title: 'Cat(G)AN',
          description: "Implemented a Generative Adversarial Network (GAN) with 3.5 million parameters from scratch in NumPy, TensorFlow, and Keras to generate cat images.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/catgan/";
            },},{id: "projects-host-management-system",
          title: 'Host Management System',
          description: "Architected an EC2 host management system leveraging cryptographic techniques for secure user authentication and session management. Implemented features encompassing host monitoring, dynamic fleet scaling, and controlled termination, employing encryption protocols to safeguard against potential man-in-the-middle attacks.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/host_management_system/";
            },},{id: "projects-resumegpt",
          title: 'ResumeGPT',
          description: "Designed and deployed a Streamlit application with LangChain, ChatOpenAI, and ChromaDB that uses LLMs to answer questions about me, including customized underlying vector DB logic.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/resumegpt/";
            },},{id: "projects-signature",
          title: 'Signature',
          description: "Designed a multi-platform desktop application that lets you create an e-signature from a photograph with custom implementations for image recognition logic that combined normalization and thresholding approaches to extract signatures.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/signature/";
            },},{id: "projects-start-journey",
          title: 'Start Journey',
          description: "Designed a full-stack stable diffusion-based image generator with PyTorch, CUDA, HuggingFace, and FastAPI for the backend and React in TypeScript for the front end.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/start_journey/";
            },},{id: "projects-tau-compiler",
          title: 'Tau Compiler',
          description: "Developed an LL1 Recursive Descent compiler for Tau, comprising of a lexer, parser, decorator, and generator including syntax analysis, scoping, type checking, optimization, and memory management.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/tau_compiler/";
            },},{id: "projects-taylorgpt",
          title: 'TaylorGPT',
          description: "Designed a 1.4 million parameter character-level transformer decoder model to generate Taylor Swift lyrics from scratch using PyTorch, including custom implementations for masking, multi-head attention, and transformer blocks along with model profiling, logging, and multi-GPU training.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/taylorgpt/";
            },},{id: "projects-tomcat",
          title: 'TomCat',
          description: "ToMCAT is comprised of a set of local agents (one for each human teammate) equipped with cameras and microphones to capture facial expressions and speech, as well as virtual sensors that record the local environment, the actions performed by human teammates, and chat exchanges between them. The local agents communicate with their respective humans, as well as with a global agent that performs coordination and global team optimization. The ToMCAT project is funded by a 4.5 year, $7.5M DARPA grant as part of the Artificial Social Intelligence for Successful Teams (ASIST) program.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/tomcat/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%61%62%61%6E%65%72%6A%65%65@%61%72%69%6F%7A%6E%61.%65%64%75", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/Adi-UA", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/adi-ua", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
