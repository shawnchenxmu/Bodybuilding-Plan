function initBackground () {
	var n = parseInt(Math.random() * 10 + 1)
	document.body.style.backgroundImage = "url(img/" + n + ".jpg";
}

initBackground();

var parts = $("#list_of_part ul li ul li");
parts.attr('class', 'btn btn-default');
parts.attr('disable', 'false');

$("#list_of_part ul li span").attr('class', 'btn btn-default');

function addPart(id){
	if (id) {
		var part = document.getElementById(id);
		var disable = part.getAttribute("disable");
		if (disable === "false") {
		var today = $("#today_workout .content");
		today.append("<li class='add " +id+"'>" + part.innerHTML + "<button type='button' name='"+id+"' class='close' aria-label='Close'><span aria-hidden='true'>&times;</span></button></li>");
		part.setAttribute("disable", "true");
		$("[name="+id+"]").click(function(e){
			e.target.closest('li').remove();
			var part = document.getElementById(id);
			part.setAttribute("disable", "false");
		});
	}else {
		return false;
	}

}
}

for (var i = 0; i < parts.length; i++){
	var id = parts[i].getAttribute("id");
	parts[i].setAttribute("onclick", "addPart('"+parts[i].id+"')");
	$("#"+id).addClass(id);
}


// add to history
var day = 1;
function addTo() {
	var adds = $(".add");
	if (adds.length === 0) {
		return false;
	};
	var history = $("#history");
	history.append("<h4>DAY" + day + ": "+getToday()+"</h4>");
	day++;
	for (var i = 0; i < adds.length; i++) {
		var text = adds[i].childNodes[0].nodeValue;
		var name = adds[i].childNodes[1].name;
		history.append("<p class='"+name+"'>"+text+"<p>");
		var part = document.getElementById(name);
		part.setAttribute("disable", "false");
		adds[i].remove();
	};

}

$("#addTo").click(function () {
	addTo();
});


//get Date
function getToday () {
	var today = new Date();
	var month = today.getMonth() + 1;
	var day = today.getDate();
	var year = today.getFullYear();
	var date = month + "/" + day + "/" + year;
	return date;
}
