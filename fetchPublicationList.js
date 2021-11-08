function createPublicationsList(userid) {
	const path = 'localhost/cernyPapers.json';
	const Http = new XMLHttpRequest();
	const elementId = 'autopub'
	Http.open("GET", path);
	Http.send();

	Http.onreadystatechange = (e) => {
		var list = JSON.parse(Http.responseText);
		var element = document.getElementById(elementId);
		for (let i = 0; i < list.length; i++) {
		  var publicationElement = document.createElement("div");
		  var text = list[i].listofauthors + ', "' + list[i].title + '", ' + list[i].publisher;
		  if(list[i].year != '')
		  	text += ', ' + list[i].year;
		  if(list[i]. pages != '')
		  	text += ', ' + list[i].pages;
		  publicationElement.appendChild(text);
		  element.appendChild(publicationElement);
		}

	}
}