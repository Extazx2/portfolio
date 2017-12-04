document.addEventListener("DOMContentLoaded", function(event) {
	$("#projets").hide();
	$("#experience").hide();
	$("#skills").hide();
	$("[data-name=index]").hide();
	$("#love").hide();

	var btn_expe = document.querySelectorAll("button[data-name=experience]"),
		btn_index = document.querySelectorAll("button[data-name=index],[class=logo]"),
		div_skill = document.querySelectorAll("div[class*=skill]"),
		btn_skill = document.querySelectorAll("button[data-name=skills]");
	[].forEach.call(btn_expe, function(elem){
		elem.addEventListener("click", launchExperience, false);
	});
	[].forEach.call(btn_index, function(elem){
		elem.addEventListener("click", launchIndex, false);
	});
	[].forEach.call(btn_skill, function(elem){
		elem.addEventListener("click", launchSkills, false);
	});

	[].forEach.call(div_skill, function(elem){
		$(elem).find("p").hide();
		elem.addEventListener("mouseenter", function(event){
			$(elem).find("p").show(50);
		});
		elem.addEventListener("mouseleave", function(event){
			$(elem).find("p").hide();
		});
	});
	//if you are lurking this, you should know that i'll upgrade this to react as soon as i can.
});

function launchExperience(){
	var btn_expe = document.querySelector("[data-name=experience]");
	var btn_index = document.querySelector("[data-name=index]");
	var btn_skill = document.querySelector("[data-name=skills]");
	$("#aboutme").hide(500);
	$("#skills").hide(500);
	$("#experience").show(500);
	$(btn_expe).hide();
	$(btn_skill).show();
	$(btn_index).show();
}

function launchIndex(){
	var btn_expe = document.querySelector("[data-name=experience]");
	var btn_index = document.querySelector("[data-name=index]");
	var btn_skill = document.querySelector("[data-name=skills]");
	$("#skills").hide(500);
	$("#aboutme").show(500);
	$("#experience").hide(500);
	$(btn_expe).show();
	$(btn_skill).show();
	$(btn_index).hide();
}

function launchSkills(){
	var btn_expe = document.querySelector("[data-name=experience]");
	var btn_index = document.querySelector("[data-name=index]");
	var btn_skill = document.querySelector("[data-name=skills]");
	$("#skills").show(500);
	$("#aboutme").hide(500);
	$("#experience").hide(500);
	$(btn_expe).show();
	$(btn_skill).hide();
	$(btn_index).show();
}
