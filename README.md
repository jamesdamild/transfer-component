# Getting Started with Transfer component

The goal of this exercice, is to create a transfer component.

The initial template has 2 lists, on the right the list of persons that can be added, the one on the left is the list of persons that can be removed. 

Instructions
-
- The list on the left should have an "Add" action button. When clicked, the item moves to the list on the right and becomes highlighted with a green background. You can use `#e9efeb` or any other of your choice. 
- The list on the right should have a "Remove" action button. When clicked, the item moves to the list on the left and becomes highlighted with a red background color. You can use `#fee3e2` or any other of your choice.
- When searching on either one of the list, the results should be filtered based on the search criterias. Implement the search of your choice. 
- When clicking on "Reset" button, a confirmation modal should be displayed with a "Cancel" and "Reset" button, if the action is confirmed, the lists should go back to the initial state. 
- When clicking the save button, the button should start loading and after few seconds, display 2 messages in the console. "Items Added: [...]" and "Items removed: [...]"
- Optional: Make the component reusable with other types of Data. You can use `DataSet2` to test. 

Hints
- 
- You can use external libraries to make a sophisticated search 
- Use dynamic types to have a safe reusable component
- Split your components and keep your files focused on one part of the logic. 



## Available Scripts

In the project directory, you can run:

#### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

#### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.


