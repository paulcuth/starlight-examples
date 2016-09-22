-- app.lua

window.extract()
local helloWorldFactory = require('HelloWorldFactory')


-- Init colours
local colours = {
  '#000000',
  '#dd0000',
  '#00dd00',
  '#0000dd',
  '#dddd00',
  '#dd00dd',
  '#dddddd',
}

-- Loop colours to create Hello Worlds
for _, colour in ipairs(colours) do
  print(colour)
  helloWorldFactory.create(colour)
end
