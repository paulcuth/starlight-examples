window.extract()
local counter = 0

local ui = {
  button = document:getElementsByTagName('button')[1],
  result = document:querySelector('.result'),
}


function updateUI ()
  ui.result.textContent = counter
end


function increment ()
  counter = counter + 1
  updateUI()
end


function init () 
  updateUI()
  ui.button:addEventListener('click', increment)
end

init()