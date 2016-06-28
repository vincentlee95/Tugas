var com3 = function(){
	var nama = document.getElementById("nama");
	var comments = document.getElementById("comments");
	var konten = document.getElementById("comment");
	var div = document.createElement("div");
	div.setAttribute("class","com1");
	var div2 = document.createElement("div");
	div2.setAttribute("class","com2");
	div2.appendChild(document.createTextNode(nama.value +" : "+comments.value));
	div.appendChild(div2);
	konten.appendChild(div);
	nama.value = "";
	comments.value="";
	
}