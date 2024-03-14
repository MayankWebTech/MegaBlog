# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh



//1- install dependencies 
  
   react-hook-form react-redux react-router-dom @reduxjs/toolkit @tinymce/tinymce-react appwrite html-react-parser


//2- Create .env and .env.sample file in the root of  project to collect environment Variables .
add .env to git ignore.

//3- create a project in appwrite
and take required ids url from their and  set the values accordingly in th .env file.

//4- create a new folder inside src and name it "conf" inside it create a new file and name it "conf.js" , it is created to convert the accesed data values of the .env file into string .

//5- create a new folder inside src and name it "appwrite" and inside appwrite create a file named "auth.js" for authentication services.

//6- now create new file inside appwrite and name it "config.js" 
 