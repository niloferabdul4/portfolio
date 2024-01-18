import ecommerce from "../../assets/ecommerce.png";
import facebook1 from '../../assets/facebook1.png' 
import recipe from '../../assets/recipes.png'
import youtube from '../../assets/youtube.png'
import quiz from '../../assets/quiz.png'
import tenzies from '../../assets/tenzies.jpg'
import realestate from '../../assets/properties.png'
import notes from '../../assets/notes.png'
import stackoverflow from '../../assets/stackoverflow.png'
import chatapp from '../../assets/chat-app.png'
import restaurant from '../../assets/restaurant-landing-page.png'

 const projects_data = [

    {
        id:1,
        title:'Stack Overflow Clone',
        description:'Built using MERN Stack.Introduced a chatbot feature using OpenAI API and subscription plans using Stripe Payment Gateway and user rewards system.',
        github:'https://github.com/niloferabdul4/stack-overflow-frontend.git',
        demo:'https://stackoverflow-clone-fullstack.netlify.app/'  ,
        image:stackoverflow
      
    },

    {
    id:2,
    title:'E-Commerce ',
    description:'Built an eCommerce app with React.js. Integrated Firebase for authentication.Added features like product filtering,calculate total amount etc',
    github: 'https://github.com/niloferabdul4/eshop.git', 
    demo:'https://ecommerce-app-fac17.web.app/'  ,
    image:ecommerce
  
},

{
    id:3,
    title:'Real-Time Chat App',
    description: 'Created a private one-to-one chat application using React.js, incorporating Firebase for secure database management and authentication.',
    github: 'https://github.com/niloferabdul4/chat_app.git',
    demo:'https://chat-app-2891c.web.app/',
    image:chatapp
   
},
{
    id:4,
    title:'Social Media Clone App ',
    description: 'Built a social media app in React.js with Firebase for authentication and database management. Added functionalities like likes,comment etc',
    github: 'https://github.com/niloferabdul4/facebookclone.git',
    demo:'https://socialmediaapp-d705d.web.app',
    image:facebook1
 
},
{
    id:5,
    title:'Youtube Clone',
    description: 'Developed a YouTube clone using React.js and Material-UI. Integrated Firebase for authentication and Rapid API for fetching data.',
    github: 'https://github.com/niloferabdul4/youtube_clone.git',
    demo:'https://youtube-clone-livid-two.vercel.app/',
    image:youtube
   
},


{
    id:6,
    title:'Real-Estate',
    description: 'Built a Real Estate Webpage in React.js with Firebase for authentication and database management. Added functionalities like save,filtering etc',
    github: 'https://github.com/niloferabdul4/real-estate-app.git',
    demo:'https://realestateapp-dd755.web.app/',
    image:realestate
   
},
{
    id:7,
    title:'Recipe Finder',
    description: 'Implemented using React Js core topics like Context API React Hooks,HTML and CSS',
    github: 'https://github.com/niloferabdul4/recipeapp.git',
    demo:'https://recipefinder-app.netlify.app/',
    image:recipe
   
},

{
    id:8,
    title:'Restaurant Landing Page',
    description: 'Implemented using React Js core topics like Context API React Hooks,HTML and CSS',
    github: 'https://github.com/niloferabdul4/restaurant-landing-page.git',
    demo:'https://restaurant-landing-web-page.netlify.app/',
    image:restaurant
   
},
{
    id:9,
    title:'Quiz App',
    description: 'Built using React Js core topics like Context API React Hooks',
    github: 'https://github.com/niloferabdul4/quiz_app.git',
    demo:'https://quizes-123.netlify.app/',
    image:quiz
  
},{
    id:10,
    title:'Tenzies Game',
    description: 'Built using React Js,HTML and  CSS',
    github: 'https://github.com/niloferabdul4/tenziesgame.git',
    demo:'https://tenzies-game-dfaaf.web.app',
    image:tenzies
 
},
{
    id:11,
    title:'Notes App',
    description:'Built using React Js,HTML and  CSS',
    github:'https://github.com/niloferabdul4/easynotesapp.git',
    demo:'https://notesapp-4ca19.web.app/',
    image:notes
    
}




];

export default projects_data;

