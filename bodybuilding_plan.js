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
	$("#muscle_map img").remove();
	$("#muscle_map").append('<img src="img/body_muscle_ Abdominals.png">');
},function(){
	$("#muscle_map img").replaceWith('<img src="img/body_muscle.png">');
});

var Obliques = $("#Obliques");
Obliques.hover(function(){
	$("#muscle_map img").remove();
	$("#muscle_map").append('<img src="img/body_muscle_ Obliques.png">');
},function(){
	$("#muscle_map img").replaceWith('<img src="img/body_muscle.png">');
});

var Serratus = $('#Serratus\\ anterior');
Serratus.hover(function(){
	$("#muscle_map img").remove();
	$("#muscle_map").append('<img src="img/body_muscle_ Serratus anterior.png">');
},function(){
	$("#muscle_map img").replaceWith('<img src="img/body_muscle.png">');
});

var Biceps=$("#Biceps");
Biceps.hover(function(){
	$("#muscle_map img").remove();
	$("#muscle_map").append('<img src="img/body_muscle_ Biceps.png">');
},function(){
	$("#muscle_map img").replaceWith('<img src="img/body_muscle.png">');
});

var Forearms=$("#Forearms");
Forearms.hover(function(){
	$("#muscle_map img").remove();
	$("#muscle_map").append('<img src="img/body_muscle_ Forearms.png">');
},function(){
	$("#muscle_map img").replaceWith('<img src="img/body_muscle.png">');
});

var Triceps = $("#Triceps");
Triceps.hover(function(){
	$("#muscle_map img").remove();
	$("#muscle_map").append('<img src="img/body_muscle_ Triceps.png">');
},function(){
	$("#muscle_map img").replaceWith('<img src="img/body_muscle.png">');
});

var Anterior = $('#Anterior\\ delts');
Anterior.hover(function(){
	$("#muscle_map img").remove();
	$("#muscle_map").append('<img src="img/body_muscle_ Anterior delts.png">');
},function(){
	$("#muscle_map img").replaceWith('<img src="img/body_muscle.png">');
});

var Lateral = $("#Lateral\\ delts");
Lateral.hover(function(){
	$("#muscle_map img").remove();
	$("#muscle_map").append('<img src="img/body_muscle_ Lateral delts.png">');
},function(){
	$("#muscle_map img").replaceWith('<img src="img/body_muscle.png">');
});

var Posterior = $("#Posterior\\ delts");
Posterior.hover(function(){
	$("#muscle_map img").remove();
	$("#muscle_map").append('<img src="img/body_muscle_ Posterior delts.png">');
},function(){
	$("#muscle_map img").replaceWith('<img src="img/body_muscle.png">');
});

var Erector = $("#Erector\\ spinae");
Erector.hover(function(){
	$("#muscle_map img").remove();
	$("#muscle_map").append('<img src="img/body_muscle_ Erector spinae.png">');
},function(){
	$("#muscle_map img").replaceWith('<img src="img/body_muscle.png">');
});

var Infraspinatus = $("#Infraspinatus");
Infraspinatus.hover(function(){
	$("#muscle_map img").remove();
	$("#muscle_map").append('<img src="img/body_muscle_ Infraspinatus.png">');
},function(){
	$("#muscle_map img").replaceWith('<img src="img/body_muscle.png">');
});

var Latissimus = $("#Latissimus\\ dorsi");
Latissimus.hover(function(){
	$("#muscle_map img").remove();
	$("#muscle_map").append('<img src="img/body_muscle_ Lats.png">');
},function(){
	$("#muscle_map img").replaceWith('<img src="img/body_muscle.png">');
});

var Teres  = $("#Teres");
Teres.hover(function(){
	$("#muscle_map img").remove();
	$("#muscle_map").append('<img src="img/body_muscle_ Teres.png">');
},function(){
	$("#muscle_map img").replaceWith('<img src="img/body_muscle.png">');
});

var Trapezius = $("#Trapezius");
Trapezius.hover(function(){
	$("#muscle_map img").remove();
	$("#muscle_map").append('<img src="img/body_muscle_ Trapezius.png">');
},function(){
	$("#muscle_map img").replaceWith('<img src="img/body_muscle.png">');
});

var Pectoralis = $("#Pectoralis");
Pectoralis.hover(function(){
	$("#muscle_map img").remove();
	$("#muscle_map").append('<img src="img/body_muscle_Pectoralis.png">');
},function(){
	$("#muscle_map img").replaceWith('<img src="img/body_muscle.png">');
});

var Calves = $("#Calves");
Calves.hover(function(){
	$("#muscle_map img").remove();
	$("#muscle_map").append('<img src="img/body_muscle_ Calves.png">');
},function(){
	$("#muscle_map img").replaceWith('<img src="img/body_muscle.png">');
});

var Hamstrings = $("#Hamstrings");
Hamstrings.hover(function(){
	$("#muscle_map img").remove();
	$("#muscle_map").append('<img src="img/body_muscle_ Hamstrings.png">');
},function(){
	$("#muscle_map img").replaceWith('<img src="img/body_muscle.png">');
});

var Quads = $("#Quads");
Quads.hover(function(){
	$("#muscle_map img").remove();
	$("#muscle_map").append('<img src="img/body_muscle_ Quads.png">');
},function(){
	$("#muscle_map img").replaceWith('<img src="img/body_muscle.png">');
});

var Sartorius = $("#Sartorius");
Sartorius.hover(function(){
	$("#muscle_map img").remove();
	$("#muscle_map").append('<img src="img/body_muscle_Sartorius.png">');
},function(){
	$("#muscle_map img").replaceWith('<img src="img/body_muscle.png">');
});

var Tibialis = $("#Tibialis_anterior");
Tibialis.hover(function(){
	$("#muscle_map img").remove();
	$("#muscle_map").append('<img src="img/body_muscle_ Tibialis_anterior.png">');
},function(){
	$("#muscle_map img").replaceWith('<img src="img/body_muscle.png">');
});

var adductors = $("#Hip\\ adductors");
adductors.hover(function(){
	$("#muscle_map img").remove();
	$("#muscle_map").append('<img src="img/body_muscle_ Hip adductors.png">');
},function(){
	$("#muscle_map img").replaceWith('<img src="img/body_muscle.png">');
});

var Flexors = $("#Hip\\ Flexors");
Flexors.hover(function(){
	$("#muscle_map img").remove();
	$("#muscle_map").append('<img src="img/body_muscle_ Hip Flexors.png">');
},function(){
	$("#muscle_map img").replaceWith('<img src="img/body_muscle.png">');
});

var Tensor=$("#Tensor\\ fasciae\\ latae");
Tensor.hover(function(){
	$("#muscle_map img").remove();
	$("#muscle_map").append('<img src="img/body_muscle_ Tensor fasciae latae.png">');
},function(){
	$("#muscle_map img").replaceWith('<img src="img/body_muscle.png">');
});

var medius = $("#Gluteus\\ medius");
medius.hover(function(){
	$("#muscle_map img").remove();
	$("#muscle_map").append('<img src="img/body_muscle_ Gluteus medius.png">');
},function(){
	$("#muscle_map img").replaceWith('<img src="img/body_muscle.png">');
});

var maximus = $("#Gluteus\\ maximus");
maximus.hover(function(){
	$("#muscle_map img").remove();
	$("#muscle_map").append('<img src="img/body_muscle_ Gluteus maximus.png">');
},function(){
	$("#muscle_map img").replaceWith('<img src="img/body_muscle.png">');
});