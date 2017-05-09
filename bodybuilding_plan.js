var part = $("#list_of_part ul li ul li");
part.attr('class', 'btn btn-default');

$("#list_of_part ul li span").attr('class', 'btn btn-default');

function addPart(id){
	if (id) {
		var part = document.getElementById(id).innerHTML;
		var today = $("#today_workout");
		today.append("<li class='add'>" + part + "<button type='button' class='close' aria-label='Close'><span aria-hidden='true'>&times;</span></button></li>");
	}else {
		return false;
	}

}

function remove(id){
	var re = "$('#"+id+"')";
	re.remove();
}

var allNode = $('#list_of_part ul li ul li');

for (var i = 0; i < allNode.length; i++) {
	var id = allNode[i].getAttribute("id");

};