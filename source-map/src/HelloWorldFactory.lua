-- HelloWorldFactory.lua

return {

  -- create a new Hello World of a given colour and add to page
  create = function (colour)
    local h1 = document:createElement('h1')
    h1.textContent = 'Hello world!!'
    h1.style.color = colour
    document.body:appendChild(h1)
  end

}
