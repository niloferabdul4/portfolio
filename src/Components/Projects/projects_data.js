import ecommerce from "../../assets/ecommerce.png";
import facebook1 from '../../assets/facebook1.png' 
import recipe from '../../assets/recipes.png'
import quiz from '../../assets/quiz.png'
import tenzies from '../../assets/tenzies.jpg'
import portfolio from '../../assets/portfolio.png'


 const projects_data = [{
    id:1,
    title:'E-Commerce App',
    description: 'Built using HTML and React JS core Concepts like Hooks, Router, Context API and styled components. Used Firebase for authentication and database.',
    url: 'https://github.com/niloferabdul4/eshop.git', 
    demo:'https://ecommerce-app-fac17.web.app/'  ,
    image:ecommerce
  
},{
    id:2,
    title:'Social Media Clone App ',
    description: 'Built using HTML and React JS core Concepts like Hooks, Router, Context API and styled components. Used Firebase for authentication and database.',
    url: 'https://github.com/niloferabdul4/facebookclone.git',
    demo:'https://socialmediaapp-d705d.web.app',
    image:facebook1
 
},
{
    id:3,
    title:'Personal Portfolio',
    description: 'Implemented using React Js core topics like Context API React Hooks',
    url: 'https://github.com/niloferabdul4/portfolio.git',
    demo:'https://its-a-portfolio.netlify.app/',
    image:portfolio
   
},

{
    id:4,
    title:'Recipe Finder App',
    description: 'Implemented using React Js core topics like Context API React Hooks',
    url: 'https://github.com/niloferabdul4/recipeapp.git',
    demo:'https://recipefinder-app.netlify.app/',
    image:recipe
   
},
{
    id:5,
    title:'Quiz App',
    description: 'Implemented using React Js core topics like Context API React Hooks',
    url: 'https://github.com/niloferabdul4/quiz_app.git',
    demo:'https://quizes-123.netlify.app/',
    image:quiz
  
},{
    id:6,
    title:'Tenzies Game',
    description: 'Implemented using React Js core topics like Context API React Hooks',
    url: 'https://github.com/niloferabdul4/tenziesgame.git',
    demo:'https://tenzies-game123.netlify.app',
    image:tenzies
 
},
];

export default projects_data;

