import Assignment4 from "../images/Assignment4.png"
import ReactNative_Exercise from "../images/ReactNative_Exercise.png";
import QuillAndInk from "../images/QuillAndInk.png"
import Kanedifol from "../images/kanedifol.png"
import RayExpressLogo from "../images/RayExpressLogo.png"
import DevelopHers from "../images/DevelopHers.png"


const ProjectList = [
        {
           name: "Ray Express App",
           summary: "In our User-Centered Design class, my groupmates and I tackled the issues we noticed in Public Transit applications. For new users of the public transit system, we addressed the confusion behind navigation and designed a solution for them.",
           image: RayExpressLogo ,
           url: "https://lnkd.in/exTMiFRG",
           why: "Our class was charged with creating an idea we wished to develop into an application. This involved planning and iterating through multiple prototypes. One noted the issue we had with public transportation — many people who had never ridden it before were completely unsure what to do. And some applications don’t make the process clear or trip planning easy. And so we came together in order to develop Ray Express, which addresses the issue including lack of information, unclear payment methods, and confusing navigations.",
           challenge: "There had been plenty of research done before we developed the prototype, and that came to be the most challenging aspect. We needed to introduce something new to the application, or a different application of the issue, to compete with other applications on the market. Along with the tutorial, we also wanted to ensure that we create a clear navigation that users could understand. We tackled the latter by performing several user walkthroughs and task analyses throughout the process. We brought in a user who had never used the application before and asked them to navigate it to complete a goal. Any feedback we receive, we make sure to consider and adjust the prototype until we addressed the major concerns. We showcase the final High-Fidelity Prototype and the research that went into creating the design.",
            conclusion: "We created an application that delivers solutions to some of the many problems new transit users face. And we present it in a clear and interesting user interface. Our ultimate goal was to see whether it is possible to design solutions to the problems we encounter when navigating applications and to understand how the masses can benefit from them. "
        },
        {
           name: "DevelopHers",
           summary: "A site developed during a project challenge at Girls Who Code. Dedicated to women in STEM, it would provide a platform for women to network, connect, and display their projects in an easy to view manner. ",
           image: DevelopHers ,
           url: "",
           why: "Our group tackled the idea of having a platform to display Portfolio Works. An easy way to display your profile and live sites all in one place, while also having the feature of connecting with other women in the STEM field. It is both a portoflio and a networking site with shared common interests.",
           challenge: "For a majority of the group, it was our first time combining Front-End and Backend development. Tying in a secure login  for returning users, to displaying public user information based on their personalized portfolio site was difficult. It took much collaboration, discussion, and troubleshooting. But as we all worked together, we found different solutions, which we ultimately combined to seemesly combine the front-end and back-end together in a clear manner.",
            conclusion: "We presented a site that has several intriging visuals, with the possibility of different templates to personalize the user's page. Users can also look at other's portfolios and see their works. If this site were to become reality, we can include a messaging feature, more filters in the search, and more templates for users to style."
        },

        {
            name: "Game Review Page",
            summary: "In my Mobile Development class, I was tasked to create a Game Review Page using PhP. Pulling information from a database, I created a functional login page.",
            image: Assignment4,
            url: "https://students.gaim.ucf.edu/~ly165030/dig3134c/labs/assignments/assignment04/admin.php",
            why: "This project tested our ability to pull information form phpMyAdmin. Two separate databases were created: the user database and the reviews database. One saved every user's information, including their name, username, and passwords. For safety, these passwords were encrypted through MP5.",
            challenge: "Ensuring that the password encryption worked properly. I needed to be sure that the passwords are hidden in phpMyAdmin, while still being able to use the original passwords when login in.",
            conclusion: "The project allowed me to gain a better understanding of the relationship between client-side and server-side servers, and how I am to gather information from each. Knowing how login information could be stored drives me to user safety, and how a user's information can be protected and hidden for everyone else.",
            display() {
                if (!this.name) {
                    return `There is no description at the moment`
                }
            }
        },
        
        {
            name: "React Native Exercise App",
            summary: "Developed using React Native, I created a mockup of an exercise app, with a variety of functions that the user can use, best viewed using a mobile emulator.",
            image: ReactNative_Exercise,
            url: "https://lyanisbarreto-mercado.github.io/ReactNative-Exercise-App/",
            why: "The project allowed me to learn how to code in React Native, taking the skills required to change screens, include interactivity, and design a compelling layout. The applications has three different funtions for different exercises.",
            challenge: "I had to adjust to what I was used to in React, and learn the new syntax for a mobile platform. Switching screens was a particular challenge, as I needed to be sure that the images and exercises are linked to the button the user presses.",
            conclusion: "It was my next step in development, as I understand how applications are formed. With the differing format from typical web pages, gaining knowledge on how to create both broadens my horizons and skillset."
        },
        {
            name: "'Quill & Ink' - Digital Media Project Management",
            summary: "Learning Project Management, My group created this site for a fictional bookstore. I developed the events calendar and some of the icons, including the site logo.",
            image: QuillAndInk,
            url: "https://lyanisbarreto-mercado.github.io/nVision-quill-and-ink-bookstore-copy/index.html",
            why: "We wished to create a site that is focused to benefit the community. Small business in particular often need a site as a method of marketing and as a display of the products they hold, especially if they have a system of e-commerse. A bookstore will allow us to understand how to create a login, a commerse page, and an events page for the store's local events.",
            challenge: "The group divided the work into different tasks, which would then be consolidated later on. While most of the site was divided, the overlapping segments required more precise communication to ensure it synced up fully. In these cases, arrange a time to meet up and work on the project together to discuss these possible issues, and to ensure that the overall site is unified both visually and functionally.",
            conclusion: "Managing a set schedule to plan and develop a site proved to be an exciting challenge. Many aspects needed to be planned for before development was to begin, to ensure that things go smoothly as we implement key features. Understanding how to manage our time, a budget, and develop a final result that delivers is a vital skill that we worked well to demonstrate."
        },
        {
            name: "'Kanedifols' - Front-End Design Project",
            summary: "This site takes together several HTML and CSS styling commands to create this site, along with Javascript interactivity. It is in ongoing development for my personal use and practice.",
            image: Kanedifol,
            url: "https://lyanisbarreto-mercado.github.io/kanedifol/",
            why: "When beginning to understand how to develop sites, I wished to grab at an interest of mine. Something I knew well and wished to put together into a concise site for easy reference. The Kanedifols are characters that I have developed and created in a long time, as a fun hobby and challenge to understand the different elements needed to create a new species.",
           challenge: "Most of the story is told through the characters themselves, so I needed to be sure to display each one in a concise manner. Organizing each piece of information in a modal was a new skill I was learning at the time, and I struggled with developing it. Knowing how to condense the space and keeping the text within is an important aspect of the design.",
            conclusion: "Creating an informational site had been an exciting, and I enjoyed being able to gather my passion onto an easy to view format. As I continue to develop more sites, I am capable of developing them quickly and precisely."
        }
]

export default ProjectList;