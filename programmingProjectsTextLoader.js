var projectTitleElement = document.getElementsByClassName("projectTitle");
var projectDescriptionElement = document.getElementById("projectDescription");
var projectImagesElement = document.getElementById("projectImageBox");
var projectImageDisplayElement = document.getElementById("projectDisplayImage");
var projectDownloadElement = document.getElementById("projectDownload");
var projectListElement = document.getElementById("projectList");
//PROJECT class
class project
{
	constructor(_variableName, _projectTitle, _projectDownload, _numberOfImages, _versionNumber)
	{
		this.title = _projectTitle;
		this.description = "Projects/" + _projectTitle;
		this.imagesDirectory = "Projects/" + _projectTitle + "/";
		this.downloadFile = "Projects/" + _projectDownload;
		this.numberOfImages = _numberOfImages;
		this.versionNumber = _versionNumber;
		if (_variableName != "blankProject")
		{
			projectListElement.innerHTML += "<a onclick=\" loadProject("+ _variableName +")\"><span  style = 'background-Color: black; border-radius: 3px; -webkit-user-select: none; -ms-user-select: none; user-select: none; padding: 2px; border: 2px solid white'onmouseout = 'onUnHoverProjects(this)' onmouseover = 'onHoverProjects(this)' onclick=\"onClickProjects(this)\">" + _projectTitle + "</span></a><p></p>";
		}
	}
}
function onHoverProjects(_projectText)
{
	_projectText.style.color = "lime";
}
function onClickProjects(_projectText)
{
	_projectText.style.color = "red";
}
function onUnHoverProjects(_projectText)
{
	_projectText.style.color = "white";
}
//MAKE NEW PROJECT INSTANCES HERE V
var blankProject = new project("blankProject","No Project Selected","none.txt",0, "0.0.0");
var ghoulishInTheCrypt = new project("ghoulishInTheCrypt","Ghoulish In the Crypt","Ghoulish In the Crypt.zip",7, "DEV BUILD VER 0.2.1");
var highwayJumper = new project("highwayJumper","Highway Jumper","Highway Jumper.zip",3, "DEV BUILD VER 0.1.3");
var shipBuildingGame = new project("shipBuildingGame","Ship Building Proof Of Concept","Ship Making Game Prototype.zip",4, "DEV BUILD VER 0.1.3");
var pythonFindSorted = new project("pythonFindSorted","Python Sorted Random Index Module","findSorted.zip",1, "VER 1.0.0");
var noodlePy = new project("noodlePy","noodlePy Python Scripting Language","noodlePy.zip",2, "VER 2.5.1");
//end
var chosenProject = blankProject;
function changeImage(_image)
{
	projectImageDisplayElement.innerHTML = "<img style = 'max-height: 500px;' src = '" + _image.src + "' >";
	
}
function hoverImage(_image)
{
	_image.style.zIndex = 2;
	projectImagesElement.style.overflowY = "visible";
	projectImagesElement.style.overflowX = "auto";
	_image.style.webkitTransform = "scale(0.9)";
	_image.style.transition = "transform 0.25s ease";
	
}
function rescaleImage(_image)
{
	_image.style.zIndex = 0;
	_image.style.webkitTransform = "scale(1)";
	_image.style.transition = "transform 0.25s ease";
	projectImagesElement.style.overflowY = "visible";
	projectImagesElement.style.overflowX = "auto";
	_image.style.position = "relative";
}
function loadProject(_project)
{
	chosenProject = _project;
	projectTitleElement[0].innerHTML = chosenProject.title;
	projectImagesElement.innerHTML = "";
	projectDownloadElement.innerHTML = "";
	projectDescriptionElement.innerHTML = "";
	if (chosenProject != blankProject)
	{
		projectDownloadElement.innerHTML = "<div style = 'font-size: 200%; margin: 30px'><a href =\"" + chosenProject.downloadFile + "\" style = \"text-decoration:none\" download = \"" + chosenProject.title + "\"><span class = \"downloadButton\" style=\"color:green; padding:2px;\" >DOWNLOAD<a class = \"projectTitle\" style=\"font-family:'Courier'\"></a></span></a></div>";
		let checkingPost = chosenProject.description + ".txt";
		loadFileAndPrint(checkingPost);
		//images
		for (var i = 1; i <= chosenProject.numberOfImages; i++)
		{
			projectImagesElement.innerHTML += "<img style='position:relative' onmouseover=\"hoverImage(this)\" onclick=\"changeImage(this)\" onmouseout=\"rescaleImage(this)\" src=\"" + chosenProject.imagesDirectory + i + ".gif\" alt=\"" + i + "\" width=\"400\" height=\"200\">";
		}
		projectImageDisplayElement.innerHTML = "<img style = 'max-width:100%; max-height: 500px;' src = '" + chosenProject.imagesDirectory + "1.gif' >";
		projectTitleElement = document.getElementsByClassName("projectTitle");
		projectTitleElement[1].innerHTML = " - " + chosenProject.title + " - " + chosenProject.versionNumber;
	}
}
loadProject(blankProject);
//Text Loader
function checkFileExist(url) 
{ 
	if (http.status === 200) 
	{ 
		return true; 
	}
	else { 
		return false; 
	} 
}
async function loadFileAndPrint(url) {
fetch(url)
  .then(response => response.text())
  .then(data => {
  	// Do something with your data
  	console.log(data);
	data.onerror = function(){
		return;
	}
	sleep(10000000000000000);
	projectDescriptionElement.innerHTML += "<div style = 'margin: 5px'>" + data + "</div>";
	return data;
  }).catch((error) => {
  // Only network error comes here
  return;
});
}
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}