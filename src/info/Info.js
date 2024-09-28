import self from "../img/self.png"
import mock1 from "../img/mock1.png"
import mock2 from "../img/mock2.png"
import mock3 from "../img/mock3.png"




export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];

export let singlePage = false;



export const info = {
    firstName: "Majma",
    lastName: "Anjum",
    initials: "S", 
    position: "Java Full Stack Developer",
    selfPortrait: self, 
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ 
       
        {
            emoji: '🌎',
            text: 'India'
        },
        {
            emoji: "💼",
            text: "Java Full Stack Developer"
        },
        {
            emoji: "📧",
            text: "anjummajma@gmail.com"
        }
    ],
    socials: [
       
        
        {
            link: "https://github.com/MajmaAnjum123",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://www.linkedin.com/in/majmaanjum/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=andr",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
        


    ],
    bio: "Hello! I'm Majma, As a passionate Java Fullstack Developer, I specialize in crafting robust, scalable, and high-performance web applications. With a solid foundation in both frontend and backend technologies, I thrive on transforming complex problems into elegant solutions.",
    skills:
        {
            proficientWith: ['HTML', 'CSS', 'JavaScript', 'React JS',],
            exposedTo: ['SQL', 'python', 'Java', 'Java DSA', 'MY SQL']
        }
    ,
    hobbies: [
        {
            label: 'Drawing',
            emoji: '📖'
        },
        {
            label: 'Sports',
            emoji: '⚽'
        },
        {
            label: 'Mehandhi',
            emoji: '💅'
        },
       

    ],
    portfolio: [ 
        {
            title: "Project 1",
            live: "https://vk-media.vercel.app/", 
            source: "https://github.com/vasanth27s/vk-media.git", 
            image: mock1
        },
        {
            title: "Project 2",
            live: "https://vk-chat-beta.vercel.app/",
            source: "https://github.com/vasanth27s/vk-chat.git",
            image: mock2
        },
        {
            title: "Project 3",
            live: "https://vk-weatherapp.vercel.app/",
            source: "https://github.com/vasanth27s/vk-weatherapp.git",
            image: mock3
        }
       
    ]
}
