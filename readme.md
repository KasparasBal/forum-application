:milky_way: Project: Forum application

:milky_way: Project Title: "Friends"

:milky_way: Project Description: Social forum to communicate with people over the internet.

:milky_way: Forum doesn't contain any particular theme

:milky_way: Project Author: Kasparas Balys



`-- Tools Used: --`


:spades:`~~BACKEND~~`:spades:

:spades: : Node.Js

:spades: : Express

:spades: : Body Parser

:spades: : Cors

:spades: : DotEnv

:spades: : MongoDb

:spades: : Mongoose

:spades: : Json Web Token

`Dev Dependencies:`

:spades: Nodemon



:clubs:`~~FRONTEND~~`:clubs:

:clubs: : HTML

:clubs: : CSS

:clubs: : TypeScript

:clubs: : React



`-- How to Launch the Project -- :`


:diamonds:`~~BACKEND~~`:diamonds:

:diamonds: Step 1 : Clone the Repository,

:diamonds: Step 2 : `cd Server` to navigate to Server,

:diamonds: Step 3 : `npm i` to install Server dependencies from package.json,

:diamonds: Step 4 : create a `.env` file,

:diamonds: Step 4.1 : add 3 values :
     
      PORT : Your Desired Port ( CORS will be configured for 3001. )
     
      DB_URI: MongoDB connection link,
     
      SECRET_KEY: For Json Web Token,

:diamonds: Step 5 : `npm run dev` to initialize Server.



:diamonds:`~~FRONTEND~~`:diamonds:

:diamonds: Step 6: Open new Terminal window.

:diamonds: Step 7: `cd Client` to navigate to Client,

:diamonds: Step 8: `npm i` to install Client dependencies,

:diamonds: Step 9: `npm start` to initialize Client Side.



:boom:`API ENDPOINTS`:boom:

`USERS`


:ok_man: `/register` Registering A New User -- POST METHOD

:ok_man: `/login` Login as User -- POST METHOD

`POSTS`


:eye_speech_bubble: `/` Get All Posts -- GET METHOD

:eye_speech_bubble: `/posts/:id` Get Single Post -- GET METHOD

:eye_speech_bubble: `/posts/create` Create A New Post -- POST METHOD // `NEEDS AUTHENTICATION`

:eye_speech_bubble: `/posts/:id` Delete A Post -- DELETE METHOD // `NEEDS AUTHENTICATION`

:eye_speech_bubble: `/post/:id` Update A Post -- PATCH METHOD  // `NEEDS AUTHENTICATION`
