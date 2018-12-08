
const app = document.getElementById('root');//proper use of variables

const logo = document.getElementById('logo');

const container = document.createElement('div');
container.setAttribute('class', 'container');



app.appendChild(logo);
app.appendChild(container);

var request = new XMLHttpRequest();
request.open('GET', 'https://ghibliapi.herokuapp.com/films', true);
request.onload = function(){


  var data = JSON.parse(this.response);//using object constructor
  if (request.status >= 200 && request.status < 400) {
    data.forEach(person => {//using arrays to store and manipulate using loop
      const card = document.createElement('div');//proper use of const variable
      card.setAttribute('class', 'card');
	  
      const h2 = document.createElement('h2');
      h2.textContent = person.title;

      const p = document.createElement('p');
      p.textContent = "Release Year: " + person.release_date;//use of object with key value pair
	  
	  const covername = person.id + ".jpg" ;//use of string manipulation
	  
	  const cover = document.createElement('img');
		cover.setAttribute("src",covername);
		cover.setAttribute("title",covername);
	  
	  const d = document.createElement('p');
	d.textContent = `Director: ${person.director}`;//use of custom object
													//use of template literals
	
		card.appendChild(cover);
		container.appendChild(card);
	
	var i = 0; 	
	card.onclick=()=>{//use of arrow functions
	  i=i+1
	  if((i%2)==0){//use of conditional logic and value comparison
	  var y = 0;
	    card.removeChild(d);
		card.removeChild(p);
		card.removeChild(h2);
		card.appendChild(cover);
		card.setAttribute('style','background:white');
			}else{
				card.removeChild(cover);
				card.appendChild(h2);
				card.appendChild(d);
				card.appendChild(p);
				card.setAttribute('style','background:black');
			}
	  };
	});
  } else {
    const errorMessage = document.createElement('marquee');
    errorMessage.textContent = `Gah, it's not working!`;
    app.appendChild(errorMessage);
  }

}


request.send();

var myModule = require('./core.js');
alert(myModule);
