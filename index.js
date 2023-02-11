const CONTENT = 
    "<br>"+
    "<h1>Stay tuned</h1>" +
    "<p>Our site is making now!</p>" +
    "<p></p>" +
    "<br>" +
    "<h4>Happy life!</h4>" +
    "<p>love u.</p>" +
    "<br>";

const CONTENT_BOX = document.getElementById("content");

CONTENT_BOX.innerHTML = "<!--\n\tContent\n\tbegin\n-->\n\n" + CONTENT + "\n\n<!--\n\tend.\n-->";

/*
<h1>Stay tuned</h1>
			<p>Our site is making now!</p>
			<p></p>
			<br>
			<h4>Happy life!</h4>
			<p>love u.</p>
*/