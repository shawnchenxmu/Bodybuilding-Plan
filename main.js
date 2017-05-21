function initHistory () {
	var history = $("#history .content");
	for (var i = 1; i < localStorage.length; i++) {
		var list = localStorage[i].split(",");
		history.append("<h4>DAY " + i + " : "+ list[0] +"</h4>");
		for (var j = 1; j < list.length; j++) {
			history.append("<p>"+list[j]+"<p>");
		};

	};
}

initHistory();

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

function getDay () {
	if (localStorage["day"]) {
		return localStorage["day"];
	}else{
		return 1;
	}
}
function addTo() {
	var day = parseInt(getDay ());
	var adds = $(".add");
	if (adds.length === 0) {
		return false;
	};
	var history = $("#history .content");
	history.append("<h4>DAY " + day + " : "+getToday()+"</h4>");
	var text = [];
	for (var i = 0; i < adds.length; i++) {
		text.push(adds[i].childNodes[0].nodeValue);
		var name = adds[i].childNodes[1].name;
		history.append("<p class='"+name+"'>"+text[i]+"<p>");
		var part = document.getElementById(name);
		part.setAttribute("disable", "false");
		adds[i].remove();
	};
	text.unshift(getToday());
	window.localStorage.setItem(day, text);
	day++;
	window.localStorage.setItem("day", day);
};

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

// quotes
var quotes = {
	"1" : "Strong people are harder to kill than weak people and more useful in general.",
	"2" : "Biceps are like ornaments on a Christmas tree.",
	"3" : "Sell yourself short on nutrition and you’re selling yourself short on maximizing your physique development.",
	"4" : "Your love for what you do and willingness to push yourself where others aren't prepared to go is what will make you great.",
	"5" : "If you want something you’ve never had, you must be willing to do something you’ve never done.",
	"6" : "If a man tells you he doesn't lift because he doesn't want to get too bulky, then his testicles have been removed.",
	"7" : "The meaning of life is not simply to exist, to survive, but to move ahead, to go up, to achieve, to conquer.",
	"8" : "If you're capable of sending a legible text message between sets, you probably aren't working hard enough.",
	"9" : "Last time I checked, lifting theory has a PR of zero.",
	"10" : "Don’t have $100.00 shoes and a 10 cent squat.",
	"11" : "A champion is someone who gets up when they can’t.",
	"12" : "I'm the strongest bodybuilding who ever lived, I think.",
	"13" : "There is no such thing as over training, just under nutrition and under sleeping.",
	"14" : "The road to nowhere is paved with excuses.",
	"15" : "I don’t do this to be healthy, I do this to get big muscles.",
	"16" : "I'm not sold on one diet philosophy. I'm sold on whatever will work for you.",
	"17" : "I'm not the kind of guy who tries to run between the drops. Sometimes you gotta get a little wet to reach your destination",
	"18" : "Discipline is doing what you hate to do, but nonetheless doing it like you love it.",
	"19" : "Learn it all, then forget it all.",
	"20" : "Sacking up is 90%",
	"21" : "Mediocre athletes that tried like hell to get good are the best coaches.",
	"22" : "Strength does not come from physical capacity. It comes from an indomitable will.",
	"23" : "Most champions are built by punch the clock workouts rather than extraordinary efforts.",
	"24" : "If it is important to you, you will find a way. If not, you'll find an excuse.",
	"25" : "There's more to life than training, but training is what puts more in your life.",
	"26" : "There is no reason to be alive if you can't do the deadlift!",
	"27" : "Don’t measure yourself by what you have accomplished, but by what you should have accomplished with your ability.",
	"28" : "Nothing can stop the man with the right mental attitude from achieving his goal; nothing on earth can help the man with the wrong mental attitude.",
	"29" : "Stimulate don't Annihilate.",
	"30" : "There are no shortcuts. The fact that a shortcut is important to you means that you are a pussy",
	"31" : "Anyone under 200 pounds is a woman.",
	"32" : "Remember - If you want to beat the man, you've gotta out-eat the man!",
	"33" : "That's the classic nature of people, though. We'll skip the basics and get pissed when the sexy stuff doesn't work.",
	"34" : "I don’t eat for taste, I eat for function.",
	"35" : "If you think lifting weights is dangerous, try being weak. Being weak is dangerous.",
	"36" : "Trust me, if you do an honest 20 rep program, at some point Jesus will talk to you. On the last day of the program, he asked if he could work in.",
	"37" : "It's a rare individual who lets themselves be steered by what they feel is their own passion.",
	"38" : "That's a good weight...for a small woman",
	"39" : "I never think about losing.",
	"40" : "They can crack jokes. They can sit back and analyze and criticize and make all the fun they want. But I’m living my life, I’m doing it. What are you doing?",
	"41" : "On the Internet, everyone squats. In real life, the squat rack is always empty. You figure out what this means.",
	"42" : "I don't feel sorry for those who lack the discipline to eat more.",
	"43" : "When they get a 50-inch waist and a gorilla butt, it's ugly looking - and I think bodybuilding has become ugly looking.",
	"44" : "I’ve made many good friends in bodybuilding, though there are few I’d trust to oil my back.",
	"45" : "When I go out there onstage, I want to be more than just a blocky guy who waddles onto the posing platform. I want the girls to feel something.",
	"46" : "The question isn’t who is going to let me; it’s who is going to stop me.",
	"47" : "You may look good at 50 percent but 80 percent may look like shit",
	"48" : "You have to be smart in your training, and yes, you have to think it through and plan it",
	"49" : "The mind is the limit. As long as the mind can envision the fact that you can do something, you can do it, as long as you really believe 100 percent.",
	"50" : "Obsessed is the word the lazy use to describe the dedicated",
};

function randomQuote() {
	if ($("#quote p")) {
		$("#quote p").remove();
	};
	var n = parseInt(Math.random() * 50) + 1;
	$("#quote").append("<p class='quote' style='display:none'>" + quotes[n] + "</p>");
	$("#quote p").fadeIn();
}

randomQuote();

$("#next").click(function () {
	randomQuote();
});



// add clean history
function cleanHistory () {
	localStorage.clear();
	$("#history .content p,h4").remove();
}

$("#clean").click(function () {
	cleanHistory();
})
