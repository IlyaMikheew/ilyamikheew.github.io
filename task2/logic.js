function quadEquation(){
	var a = document.getElementsByName('A')[0].value;
	var b = document.getElementsByName('B')[0].value;
	var c = document.getElementsByName('C')[0].value;

	var d = Math.pow(b, 2) - (4 * a * c);

	if(d >= 0) {
		var x1 = (-(b) + Math.sqrt(d))/(2 * a);
		var x2 = (-(b) - Math.sqrt(d))/(2 * a);
	} else {
		x1 = "D < 0";
		x2 = "D < 0";
	}

	var tabel1 = document.getElementById('tb1');
	var row = document.createElement("TR");
	row.classList.add("thDel")
	row.onclick = function() {
		this.parentNode.removeChild(row);
	}

	row.innerHTML = "<td>" + a + 
				    "</td><td>" + b + 
				    "</td><td>" + c + 
				    "</td><td>" + x1 + 
				    "</td><td>" + x2 + "</td>";
	tabel1.appendChild(row);
}