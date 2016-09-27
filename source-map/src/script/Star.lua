
local Star = {
  top = 0,
  left = 0,
  scale = 1,
  opacity = .8,
  rotation = 0,
}


function Star:new (config)
  config = config or {}

  local star = setmetatable (config, self)
  self.__index = self

  return star
end 


function Star:_createElement ()
  local el = window.document:createElement('div')
  el.className = 'star'
  el.style.transform = 'scale('..self.scale..') rotate('..self.rotation..'deg) translate('..self.left..'px, '..self.top..'px)';
  el.style.opacity = self.opacity
  self._element = el
end


function Star:getElement ()
  if not self._element then
    self:_createElement()
  end
	return self._element
end


return Star