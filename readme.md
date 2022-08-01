`--------------------------------------- General Inforamtion: ----------------------------------`

:milky_way: Project: Forum application

:milky_way: Project Title: "Friends"

:milky_way: Project Description: Social forum to communicate with people over the internet.

:milky_way: Forum doesn't contain any particular theme

:milky_way: Project Author: Kasparas Balys



`----------------------------------------------- Tools Used: -----------------------------------`


:spades::spades::spades::spades::spades::spades:`~~BACKEND~~`:spades::spades::spades::spades::spades::spades:

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



:clubs::clubs::clubs::clubs::clubs::clubs::clubs::clubs:`~~FRONTEND~~`:clubs::clubs::clubs::clubs::clubs::clubs::clubs::clubs::clubs:

:clubs: : HTML

:clubs: : CSS

:clubs: : TypeScript

:clubs: : React



`--------------------------------------- How to Launch Project: -------------------------------------------`


:diamonds::diamonds::diamonds::diamonds::diamonds:`~~BACKEND~~`:diamonds::diamonds::diamonds::diamonds::diamonds:

:diamonds: Step 1 : Clone the Repository,

:diamonds: Step 2 : `cd Server` to navigate to Server,

:diamonds: Step 3 : `npm i` to install Server dependencies from package.json,

:diamonds: Step 4 : create a `.env` file,

:diamonds: Step 4.1 : add 3 values :
     
      PORT : Your Desired Port ( CORS will be configured for 3001. )
     
      DB_URI: MongoDB connection link,
     
      SECRET_KEY: For Json Web Token,

:diamonds: Step 5 : `npm run dev` to initialize Server.



:diamonds::diamonds::diamonds::diamonds::diamonds:`~~FRONTEND~~`:diamonds::diamonds::diamonds::diamonds::diamonds::diamonds:

:diamonds: Step 6: Open new Terminal window.

:diamonds: Step 7: `cd Client` to navigate to Client,

:diamonds: Step 8: `npm i` to install Client dependencies,

:diamonds: Step 9: `npm start` to initialize Client Side.



:boom::boom::boom::boom::boom::boom::boom::boom::boom:`API ENDPOINTS`:boom::boom::boom::boom::boom::boom::boom::boom::boom:

`USERS`


:ok_man: `/register` Registering A New User -- POST METHOD

:ok_man: `/login` Login as User -- POST METHOD

`POSTS`


:eye_speech_bubble: `/` Get All Posts -- GET METHOD

:eye_speech_bubble: `/posts/:id` Get Single Post -- GET METHOD

:eye_speech_bubble: `/posts/create` Create A New Post -- POST METHOD // `NEEDS AUTHENTICATION`

:eye_speech_bubble: `/posts/:id` Delete A Post -- DELETE METHOD // `NEEDS AUTHENTICATION`

:eye_speech_bubble: `/post/:id` Update A Post -- PATCH METHOD  // `NEEDS AUTHENTICATION`
