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

//hover

var Abdominals = $("#Abdominals");
Abdominals.hover(function(){
	document.getElementById("muscle_map").style.backgroundPosition = 0 + "px " + -496 + "px";
},function(){
	document.getElementById("muscle_map").style.backgroundPosition = 0 + "px " + 0 + "px";
});

var Obliques = $("#Obliques");
Obliques.hover(function(){
	document.getElementById("muscle_map").style.backgroundPosition = 0 + "px " + -992 + "px";
},function(){
	document.getElementById("muscle_map").style.backgroundPosition = 0 + "px " + 0 + "px";
});

var Serratus = $('#Serratus\\ anterior');
Serratus.hover(function(){
	document.getElementById("muscle_map").style.backgroundPosition = 0 + "px " + -1488 + "px";
},function(){
	document.getElementById("muscle_map").style.backgroundPosition = 0 + "px " + 0 + "px";
});

var Biceps=$("#Biceps");
Biceps.hover(function(){
	document.getElementById("muscle_map").style.backgroundPosition = 0 + "px " + -1984 + "px";
},function(){
	document.getElementById("muscle_map").style.backgroundPosition = 0 + "px " + 0 + "px";
});

var Forearms=$("#Forearms");
Forearms.hover(function(){
	document.getElementById("muscle_map").style.backgroundPosition = 0 + "px " + -2480 + "px";
},function(){
	document.getElementById("muscle_map").style.backgroundPosition = 0 + "px " + 0 + "px";
});

var Triceps = $("#Triceps");
Triceps.hover(function(){
	document.getElementById("muscle_map").style.backgroundPosition = 0 + "px " + -2976 + "px";
},function(){
	document.getElementById("muscle_map").style.backgroundPosition = 0 + "px " + 0 + "px";
});

var Anterior = $('#Anterior\\ delts');
Anterior.hover(function(){
	document.getElementById("muscle_map").style.backgroundPosition = 0 + "px " + -3472 + "px";
},function(){
	document.getElementById("muscle_map").style.backgroundPosition = 0 + "px " + 0 + "px";
});

var Lateral = $("#Lateral\\ delts");
Lateral.hover(function(){
	document.getElementById("muscle_map").style.backgroundPosition = 0 + "px " + -3968 + "px";
},function(){
	document.getElementById("muscle_map").style.backgroundPosition = 0 + "px " + 0 + "px";
});

var Posterior = $("#Posterior\\ delts");
Posterior.hover(function(){
	document.getElementById("muscle_map").style.backgroundPosition = 0 + "px " + -4464 + "px";
},function(){
	document.getElementById("muscle_map").style.backgroundPosition = 0 + "px " + 0 + "px";
});

var Erector = $("#Erector\\ spinae");
Erector.hover(function(){
	document.getElementById("muscle_map").style.backgroundPosition = 0 + "px " + -4960 + "px";
},function(){
	document.getElementById("muscle_map").style.backgroundPosition = 0 + "px " + 0 + "px";
});

var Infraspinatus = $("#Infraspinatus");
Infraspinatus.hover(function(){
	document.getElementById("muscle_map").style.backgroundPosition = 0 + "px " + -5456 + "px";
},function(){
	document.getElementById("muscle_map").style.backgroundPosition = 0 + "px " + 0 + "px";
});

var Latissimus = $("#Latissimus\\ dorsi");
Latissimus.hover(function(){
	document.getElementById("muscle_map").style.backgroundPosition = 0 + "px " + -5952 + "px";
},function(){
	document.getElementById("muscle_map").style.backgroundPosition = 0 + "px " + 0 + "px";
});

var Teres  = $("#Teres");
Teres.hover(function(){
	document.getElementById("muscle_map").style.backgroundPosition = 0 + "px " + -6448 + "px";
},function(){
	document.getElementById("muscle_map").style.backgroundPosition = 0 + "px " + 0 + "px";
});

var Trapezius = $("#Trapezius");
Trapezius.hover(function(){
	document.getElementById("muscle_map").style.backgroundPosition = 0 + "px " + -6944 + "px";
},function(){
	document.getElementById("muscle_map").style.backgroundPosition = 0 + "px " + 0 + "px";
});

var Pectoralis = $("#Pectoralis");
Pectoralis.hover(function(){
	document.getElementById("muscle_map").style.backgroundPosition = 0 + "px " + -7440 + "px";
},function(){
	document.getElementById("muscle_map").style.backgroundPosition = 0 + "px " + 0 + "px";
});

var Calves = $("#Calves");
Calves.hover(function(){
	document.getElementById("muscle_map").style.backgroundPosition = 0 + "px " + -7936 + "px";
},function(){
	document.getElementById("muscle_map").style.backgroundPosition = 0 + "px " + 0 + "px";
});

var Hamstrings = $("#Hamstrings");
Hamstrings.hover(function(){
	document.getElementById("muscle_map").style.backgroundPosition = 0 + "px " + -8432 + "px";
},function(){
	document.getElementById("muscle_map").style.backgroundPosition = 0 + "px " + 0 + "px";
});

var Quads = $("#Quads");
Quads.hover(function(){
	document.getElementById("muscle_map").style.backgroundPosition = 0 + "px " + -8928 + "px";
},function(){
	document.getElementById("muscle_map").style.backgroundPosition = 0 + "px " + 0 + "px";
});

var Sartorius = $("#Sartorius");
Sartorius.hover(function(){
	document.getElementById("muscle_map").style.backgroundPosition = 0 + "px " + -9424 + "px";
},function(){
	document.getElementById("muscle_map").style.backgroundPosition = 0 + "px " + 0 + "px";
});

var Tibialis = $("#Tibialis_anterior");
Tibialis.hover(function(){
	document.getElementById("muscle_map").style.backgroundPosition = 0 + "px " + -9920 + "px";
},function(){
	document.getElementById("muscle_map").style.backgroundPosition = 0 + "px " + 0 + "px";
});

var adductors = $("#Hip\\ adductors");
adductors.hover(function(){
	document.getElementById("muscle_map").style.backgroundPosition = 0 + "px " + -10416 + "px";
},function(){
	document.getElementById("muscle_map").style.backgroundPosition = 0 + "px " + 0 + "px";
});

var Flexors = $("#Hip\\ Flexors");
Flexors.hover(function(){
	document.getElementById("muscle_map").style.backgroundPosition = 0 + "px " + -10912 + "px";
},function(){
	document.getElementById("muscle_map").style.backgroundPosition = 0 + "px " + 0 + "px";
});

var Tensor=$("#Tensor\\ fasciae\\ latae");
Tensor.hover(function(){
	document.getElementById("muscle_map").style.backgroundPosition = 0 + "px " + -11408 + "px";
},function(){
	document.getElementById("muscle_map").style.backgroundPosition = 0 + "px " + 0 + "px";
});

var medius = $("#Gluteus\\ medius");
medius.hover(function(){
	document.getElementById("muscle_map").style.backgroundPosition = 0 + "px " + -11904 + "px";
},function(){
	document.getElementById("muscle_map").style.backgroundPosition = 0 + "px " + 0 + "px";
});

var maximus = $("#Gluteus\\ maximus");
maximus.hover(function(){
	document.getElementById("muscle_map").style.backgroundPosition = 0 + "px " + -12400 + "px";
},function(){
	document.getElementById("muscle_map").style.backgroundPosition = 0 + "px " + 0 + "px";
});