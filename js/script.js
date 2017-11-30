document.addEventListener("DOMContentLoaded", function(event) {
	$("#projets").hide();
	$("#skills").hide();
	$("#experience").hide();
	$("[data-name=index]").hide();

	var btn_expe = document.querySelectorAll("button[data-name=experience]"),
		btn_index = document.querySelectorAll("button[data-name=index],[class=logo]");
	[].forEach.call(btn_expe, function(elem){
		elem.addEventListener("click", launchExperience, false);
	});
	[].forEach.call(btn_index, function(elem){
		elem.addEventListener("click", launchIndex, false);
	});
	//if you are lurking this, you should know that i'll upgrade this to react as soon as i can.
});

function launchExperience(){
	var btn_expe = document.querySelector("[data-name=experience]");
	var btn_index = document.querySelector("[data-name=index]");
	$("#aboutme").hide(500);
	$("#experience").show(500);
	$(btn_expe).hide();
	$(btn_index).show();
}

function launchIndex(){
	var btn_expe = document.querySelector("[data-name=experience]");
	var btn_index = document.querySelector("[data-name=index]");
	$("#aboutme").show(500);
	$("#experience").hide(500);
	$(btn_expe).show();
	$(btn_index).hide();
}
