# source-map

* Source mapping is not yet on `master` branch. Use this example with the `source-map` branch of Starlight. *

An example that uses `grunt-starlight` to precompile a Lua script into a JavaScript file and associated source map.


## Instructions.

Navigate to the `source-map` directory in a terminal, then install dependencies and the build. 
This will compile `/src/app.lua` to `/dist/app.lua.js` and `/dist/app.lua.js.map`. 

```
npm install
grunt
```

When the build is successful, view `/index.html` in your browser and you should see "Hello world!!" repeated in different colours and instructions on how to see your Lua code in the browser debugger.
