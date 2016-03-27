local fibonacci = require('fibonacci')
window.extract()


local ui = {
  input = document:querySelector('input'),
  button = document:querySelector('button'),
  result = document:querySelector('.result'),
}

ui.button:addEventListener('click', function () 
  local result = fibonacci(tonumber(ui.input.value))
  ui.result.textContent = 'Result: '..result
end)
