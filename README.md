# tipon
  ![Top Language](https://img.shields.io/github/languages/top/daejo/tipon)
  ![GitHub Language count](https://img.shields.io/github/languages/count/daejo/tipon)
  ![License](https://img.shields.io/badge/license-MIT_License-green.svg)

  ## Description 

  _Create users, add friends, post thoughts, and react to thoughts in this social media api route made in node.js with the help of express and mondodb packages._
 
  ## Table of Contents

  * [Installation](#installation)
  * [Usage](#usage)
  * [Packages](#credits)
  * [Questions](#questions)
  

  ## Installation

    * _Make sure you have cloned the repository files from [here](https://github.com/daejo/tipon)._
    * _You will also need an API development environment software [Insomnia](https://insomnia.rest/)._
    * _Once everything is set up you can continue the rest of the installation process._
      * _Open terminal and get to the specific root file where your saved clone file is._
        * _Run your server by typing: ```npm start```_

  * _After running the installation process keep your terminal running and then open your preferred API development environment._


  ## Usage 

  * Add a new request. Click the (```+```) button and create a new request.
    * To search for an info into the database for:
      * TO SHOW ALL: Select ```GET``` then paste ```http://localhost:3001/api/(EDIT THIS)``` into the search bar then click ```Send```. [VIDEO](https://drive.google.com/file/d/1EBJo5DjReDEHIA6BOjsfdgmd_ykckKJ-/view)
        * ```(EDIT THIS)``` could be either ```users``` or ```thoughts```. 

      * TO SHOW ONE: Select ```GET``` then paste ```http://localhost:3001/api/(EDIT THIS)/:userId``` into the search bar then click ```Send```. [VIDEO](https://drive.google.com/file/d/1hTv9oJaB-jfUgXqJmgtK5qx_2mk1js8q/view)
      
      * TO CREATE A USER: Select ```POST``` then paste ```http://localhost:3001/api/users``` into the search bar then
      change ```BODY``` into ```JSON``` then type in the info you are adding then click ```Send```. [VIDEO](https://drive.google.com/file/d/1vKRTXaKn0ft0DIizLOCQ8lHUWJN1b9DP/view)

      * TO EDIT A USER: Select ```PUT``` then paste ```http://localhost:3001/api/users/:userId``` into the search bar then
      change ```BODY``` into ```JSON``` then type in the info you are adding then click ```Send```. [VIDEO](https://drive.google.com/file/d/1_dTajHcKCZpP67mVvdADqkYEPm2i5G2U/view)

      * TO DELETE A USER: Select ```DELETE``` then paste ```http://localhost:3001/api/users/:userId``` into the search bar then click ```Send```. [VIDEO](https://drive.google.com/file/d/1-jvJIQTJclmDNYRFhFk5z9cHl3GTmwMn/view)

      * TO CREATE A THOUGHT: Select ```POST``` then paste ```http://localhost:3001/api/thoughts/:userId``` into the search bar then
      change ```BODY``` into ```JSON``` then type in the info you are adding then click ```Send```. [VIDEO](https://drive.google.com/file/d/1nNu0Ne7HRtq9Q3ZuOHNy9jtQ8Z4D2s1X/view)

      * TO EDIT A THOUGHT: Select ```PUT``` then paste ```http://localhost:3001/api/thoughts/:thoughtId``` into the search bar then
      change ```BODY``` into ```JSON``` then type in the info you are adding then click ```Send```. [VIDEO](https://drive.google.com/file/d/1tl8LaCY2BaGqkwjQuzK-hbFR8w4P5Rer/view)

      * TO DELETE A THOUGHT: Select ```DELETE``` then paste ```http://localhost:3001/api/thoughts/:userId/:thoughtId``` into the search bar then click ```Send```. [VIDEO](https://drive.google.com/file/d/1p6u-IJ-2CVBod36Aci94kKwfUS3BjvFb/view)

      * TO ADD A FRIEND: Select ```POST``` then paste ```http://localhost:3001/api/users/:userId/friends/:friendId``` into the search bar then
      change ```:userId``` into a specific user's id then change ```:friendId``` to another user's id, then click ```Send```. [VIDEO](https://drive.google.com/file/d/1hsMins93XnH5KMckDuvMSawjk8-3mOXM/view)

      * TO DELETE A FRIEND: Select ```DELETE``` then paste ```http://localhost:3001/api/users/:userId/friends/:friendId``` into the search bar then
      change ```:userId``` into a specific user's id then change ```:friendId``` to another user's id, then click ```Send```. [VIDEO](https://drive.google.com/file/d/13rcnH2cy0UR50_H458H3jrkypJTPO26b/view)

      * TO ADD A REACTION TO A THOUGHT: Select ```POST``` then paste ```http://localhost:3001/api/thoughts/:thoughtId/reactions``` into the search bar then
      change ```BODY``` into ```JSON``` then type in the info you are adding then click ```Send```. [VIDEO](https://drive.google.com/file/d/1tVgSV3-ZIs1NS0endc1VrgZRfZK3nlrK/view)

      * TO DELETE A REACTION TO A THOUGHT: Select ```DELETE``` then paste ```http://localhost:3001/api/thoughts/:thoughtId/reactions/:reactionId``` into the search bar then click ```Send```. [VIDEO](https://drive.google.com/file/d/1zik2sIwk6I5G_haCFcZTtSIXDObbg_ii/view)


  ## Packages

  * _Express_
  * _MongoDb_


  ---
  ## Questions?
  _Contact me:_
  _[@daejo](github.com/daejo)_  
  _[https://github.com/daejo/tipon](https://github.com/daejo/tipon)_  
  
