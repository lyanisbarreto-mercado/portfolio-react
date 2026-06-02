import Assignment4 from "../images/Assignment4.png"
import ReactNative_Exercise from "../images/ReactNative_Exercise.png";
import QuillAndInk from "../images/QuillAndInk.png"
import Kanedifol from "../images/kanedifol.png"


const ProjectList = [
        {
            name: "Game Review Page",
            summary: "In my Mobile Development class, I was tasked to create a Game Review Page using PhP. Pulling information from a database, I created a functional login page.",
            image: Assignment4,
            url: "https://students.gaim.ucf.edu/~ly165030/dig3134c/labs/assignments/assignment04/admin.php",
            why: "This project tested our ability to pull information form phpMyAdmin. There were two separate databases created: theuser database, and the reviews database. One saved every user's information, including their name, username, and passwords. For safety, these passwords were encrypted through MP5.",
            challenge: "Ensuring that the password encryption worked properly. I needed to be sure that the passwords are hidden in phpMyAdmin, while still being able to use the original passwords when login in. ",
            conclusion: "The project allowed me to gain a better understanding of the relationship between client-side and server-side servers, and how I am to gather information from each. Knowing how login information could be stored drives me to user safety, and how a user's information can be protected and hidden for everyone else.",
            display() {
                if (!this.name) {
                    return `There is no description at the moment`
                }
            }
        },
        {
            name: "React Native Exercise App",
            summary: "Developed using React Native, I created a mockup of an exercise app, with a variety of functions that the user can use, best viewed using a mobile emulator",
            image: ReactNative_Exercise,
            url: "https://lyanisbarreto-mercado.github.io/ReactNative-Exercise-App/",
            why: "The project allowed me to learn how to code in React Native, taking the skills required to change screens, include interactivity, and design a compelling layout. The applications has three different funtions for different exercises.",
            challenge: "I had to adjust to what I was used to in React, and learn the new syntax for a mobile platform. Switching screens was a particular challenge, as I needed to be sure that the images and exercise is linked to the button the user presses."
        },
        {
            name: "'Quill & Ink' - Digital Media Project Management",
            summary: "Learning Project Management, My group created this site for a fictional bookstore. I developed the events calendar and some of the icons, including the site logo.",
            image: QuillAndInk,
            url: "https://lyanisbarreto-mercado.github.io/nVision-quill-and-ink-bookstore-copy/index.html",
            why: "We wished to create a site that is focused to benefit the community. Small business in particular often need a site as a method of marketing and as a display of the products they hold, especially if they have a system of e-commerse. A bookstore will allow us to understand how to create a login, a commerse page, and an events page for the store's local events.",
            challenge: "The group divided the work into different tasks, which would then be consolidated later on. While most of the site was divided, the overlapping segments required more precise communication to ensure it synced up fully. In these cases, arrange a time to meet up and work on the project together to discuss these possible issues, and to ensure that the overall site is unified both visually and functionally."
        },
        {
            name: "'Kanedifols' - Front-End Design Project",
            summary: "This site takes together several basic HTML and CSS styling commands to create this site. It also incorperates some Javascript for styling. It is in ongoing development for my personal use and practice.",
            image: Kanedifol,
            url: "https://lyanisbarreto-mercado.github.io/kanedifol/"
        }
]

export default ProjectList;