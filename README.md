# About me 

This application was developed with [React-Node/Express-MongoDB](https://github.com/Roohanjyot/NomisoPro). it interacts with the [Open Weather API](https://openweathermap.org/api) to retrieve weather data which is stored using a **MongoDB Atlas** server. This app was deployed using a **AWS EC2.micro** instance (please shot me a text if you want me to rerun the instance).

This app was is made responsive to be easily accessable by both a desktop screen as well as a mobile screen:

![app resizing](https://j.gifs.com/xnQqkP.gif)

All of the store data can be seen in a table format, which is fully editable (expect the last modified cell) to repersent full CRUD functionality: 

![table view](https://j.gifs.com/zv0Pm2.gif)

This app is also capable of repersenting the stored data in an interactive chart format:

![chart view](https://j.gifs.com/jZyQqy.gif)

Click below to access the full video:

[![full video](https://img.youtube.com/vi/ihMjjb-BlI8/0.jpg)](https://youtu.be/ihMjjb-BlI8)




# Available Scripts

In the project directory, you can run:

## `npm run react-dev`

Runs the bundler (Webpack) to output bundle.js(optimized for JSX,CSS, JSON, and JS file) .\
Will output all feedback on the terminal.

The page if developed to keep component rerender in mind instead for whole page reload.\
You will also see any lint errors in the console.

## `npm run live-server`

Launches the nodemon extension in the interactive watch mode.\
See the section about [running running program].

## `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!
