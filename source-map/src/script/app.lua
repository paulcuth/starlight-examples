-- app.lua

local Star = require('Star')

local canvas = window.document:getElementById('canvas')
local body = window.document.body

function createRandomStar()
  local config = {
    left = math.random() * body.clientWidth,
    top = math.random() * body.clientHeight,
    scale = math.random() * .9 + .1,
    opacity = math.random() * .7 + .1,
    rotation = math.random(360),
  }

  local star = Star:new(config)
  canvas:appendChild(star:getElement())
end

window:setInterval(createRandomStar, 100)