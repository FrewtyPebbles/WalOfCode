var NUMOFIMAGES = 17;
var imageSelectorElement = document.getElementById("imageSelector");
var displayImageElement = document.getElementById("displayImage");
function changeImage(_image)
{
	displayImageElement.src = _image.src;
}
function hoverImage(_image)
{
	_image.style.zIndex = 2;
	imageSelectorElement.style.overflowY = "visible";
	imageSelectorElement.style.overflowX = "auto";
	_image.style.webkitTransform = "scale(0.9)";
	_image.style.transition = "transform 0.25s ease";
	
}
function rescaleImage(_image)
{
	_image.style.zIndex = 0;
	_image.style.webkitTransform = "scale(1)";
	_image.style.transition = "transform 0.25s ease";
	imageSelectorElement.style.overflowY = "visible";
	imageSelectorElement.style.overflowX = "auto";
	_image.style.position = "relative";
}
for (var i = 1; i <= NUMOFIMAGES; i++)
{
	imageSelectorElement.innerHTML += "<img class = 'selectorImage' style='position:relative' onmouseover=\"hoverImage(this)\" onclick=\"changeImage(this)\" onmouseout=\"rescaleImage(this)\" src=\"Art/" + i + ".png\" alt=\"" + i + "\">";
}