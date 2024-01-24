# Practicing Node.js for the first time and it is looking good. I've caught hold of it and going on a good workflow. Indeed, it is a lot to learn. But, that is the fun part :)

### My background is from .Net Development using ASP.Net Core 8 MVC 5. It was not hard to pick up because I've had prior knowledge of C# and JavaScript.

### I'm looking forward in building a more robust and intuitive application onwards.

## Technologies used:
  - Node.js
  - Express
  - ejs 
  
## node_modules used:
  - nodemon
  - browser-sync
  - concurrently
  - body-parser

### Journal
* I've made use of Chrome browser's and JavaScript's built it object 'sessionStorage' to store items details in a JSON string format.
   - I used JSON.stringify(cartObj) to store object (cart) in Application in string format -> Storage -> SessionStorage
   - Then used JSON.parse(cartStringified) to retrieve saved cart details -> by converting it back to a (cart object) in JavaScript to access the saved items details and display it back onto HTML page in the cartDetailsContainer, where:
   - I've manipulated DocumentObjectModel by creating individual childElements and appending to parentElement. Child element textContent, innerHTML got set to different cart details by iterating over the cart.items[] array. And, this helped me to dynamically display user interaction on the front-end.
   - the back-end is validated with the help of Express server's domain, and by consuming user requests through GET methods and giving them feedbacks with the help of URL navigation, or POST methods.
    
* Customised scrollbar for the website using the Chrome's supported '-webkit-scrollbar' on the element which has overflow. And setting properties to each -webkit-scrollbar properties like main::-webkit-scrollbar-thumb, main::-webkit-scrollbar-thumb:hover (changes background-color when user hover mouse on the scrollbar) and many more UI improvements.


### I'm enthusiastic and energetic to further improve my skills on this given area of Node.js tech-stack as it is a new technology to me, but it has somewhat similar fundamentals to what I've experienced in developing on AspNet Core MVC project, where I've used routings, getting user requests, and providing them with responses(GET,POST, PUT, DELETE) Web API fundamentals.
