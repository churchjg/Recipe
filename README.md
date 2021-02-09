# React Recipe App
## Description

This app allows the user to view recipes from an API sourced from edamam.com. It has additional features such as search navigation and buttons that help filter by food type. I plan on adding links to the actual recipes for added convenience. As of now each recipe has a title, amount of calories, image, and ingredients.

## How It Was Done

This was built using an API from edamam.com, data is fetched with a simple fetch call using an ID and Key. The frontend uses React with 2 components (Recipe.js and Search-Filter.js). The search features were built in App.js using the methods: e.target.value, a 'for' loop to query a list, and then some filtering of the returned list data. The React Hook 'useEffect' was utilized to query recipe data and speed up the rendering of the array. The recipes are then mapped and rendered using the 'useState' Hook. 

### Starting the app
1) Clone this repository using ```git clone https://github.com/churchjg/Recipe```
2) From the command line, ```cd``` into the submission file directory. And open the project in your text editor of choice. 
2) Install necessary dependencies by running ```npm install``` in the command line.
3) At the root of the submission directory, run the app using ```npm start```.
4) If your browser does not automatically open, please manually open your browser and navigate to ```localhost:3000``` once the command line shows that the project has "compiled successfully".
