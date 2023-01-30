# Project & Portfolio 

* **Research Notes - Milestone 4**
* **Nicholas Cruz**
* **01/29/2023**

<br>

## Topic

This document contains general notes related to Production Plans

<br>

## ESLint
Brief overview of research. 

* I have the ESLint extension installed in VSCode and ran the npm command globally. However, I still am not using it correctly A .eslintrc file is required with configuration to be used correctly.
* It detects errors before the code is ran.
* Many of the errors it detects has to do with syntax but can also pick up some other ones like if propTypes have been declared or not in a React component.

<br>

## CSS Modules
Brief overview of research. 

* A dynamic way of styling components specifically while also following Don't Repeat Yourself (DRY) practice.
* The composes keyword allows us to bind multiple class styling declarations to one element.
* You are forced to think about what may happen when writing your styles.

<br>

## Deployment
Brief overview of research. I am looking at free options other than Heroku because of the recent removal of Heroku's free tier.

* I am researching doing this on Render and it seems similar to Heroku. You have to create a web service to host your backend/server on and a static site for hosting the frontend.
* The scripts we add at the root level of the application build out both ends of the application when it is hosted.
* In the static site you create to host the front end, you will have to add your routes to the Redirect/Rewrite section to ensure your frontend calls to the server are read correctly. Check in your code if an environment variable is production, if so then target an environment variable name of your choice for the deployed link to be stored in. You will create that environment variable in Render when deploying.

    
<br>

## Reference Links
Use this section to highlight your own independent research. Replace the example references below with your own links and recommended resources. For example...

**Resource 1: Render Deployment (free tier) of MERN App**  
[Render Deployment (free tier) of MERN App](https://dev.to/gregpetropoulos/render-deployment-free-tier-of-mern-app-52mk): I learned about deployment in Render.

**Resource 2: What are CSS Modules and why do we need them?**    
[What are CSS Modules and why do we need them?](https://css-tricks.com/css-modules-part-1-need/): I learned about CSS Modules.

**Resource 3: How ESLint Makes Me a Better React Developer**    
[How ESLint Makes Me a Better React Developer](https://itnext.io/how-eslint-makes-me-a-better-react-developer-237fb14c00ae): I learned how to properly take advantage of ESLint.

<br>

**Note:**  
Resource 1 helped me find another resource to deploy my portfolio projects freely on similar to Heroku.