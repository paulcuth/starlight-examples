window.extract()

local colours = {
  '#000000',
  '#dd0000',
  '#00dd00',
  '#0000dd',
  '#dddd00',
  '#dd00dd',
  '#dddddd',
}

for _, colour in ipairs(colours) do
  local h1 = document:createElement('h1')
  h1.textContent = 'Hello world!!'
  h1.style.color = colour
  document.body:appendChild(h1)
end
