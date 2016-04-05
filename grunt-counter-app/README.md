# grunt-counter-app

A simple example that uses `grunt-starlight` to precompile a Lua script into JavaScript and use in a webpage.


## Instructions.

Navigate to the `grunt-counter-app` directory in a terminal, then install dependencies and run the build. 
This will compile `/src/counter-app.lua` to `/dist/counter-app.js`. 

```
npm install
grunt
```

When the build is successful, view `/index.html` in your browser and you should see the app. 
Make sure you load the page through a local web server, as XHR requests will not work when viewed from your file system.
