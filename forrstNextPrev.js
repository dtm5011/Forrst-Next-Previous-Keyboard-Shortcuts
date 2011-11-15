var currentPost = -1;

$(document).keydown(function(event){
	var element = event.target.nodeName.toLowerCase();	
	if(event.which === 78){
		if (element != 'input' && element != 'textarea') {
			nextPost();
		}
	}
	if(event.which === 80){
		if (element != 'input' && element != 'textarea') {
			prevPost();
		}
	}
} );

function nextPost(){
	currentPost+=1;
	var numberOfPosts = $(".Post").length;
	
	if(!$(".Post").length){
		numberOfPosts = $(".post").length;
	}
	
	if(currentPost>numberOfPosts -1){
		currentPost=0;
		if($(".Post").length){
			window.location = "http://forrst.com" + $(".pagination a").attr("href");
		}
		else{
			window.location = window.location.pathname + $(".pagination a").attr("href");
		}
	}
	else{
		if($(".Post").length){
			$(".Post:eq(" + currentPost + ")").css("outline", "5px solid #223F17").siblings().css("outline", "none");
			window.scrollTo(0, $(".Post:eq(" + currentPost + ")").offset().top - 25);
		}
		else{
			$(".post:eq(" + currentPost + ")").css("outline", "5px solid #223F17").siblings().css("outline", "none");
			window.scrollTo(0, $(".post:eq(" + currentPost + ")").offset().top - 25);
		}
		
	}
}

function prevPost(){
	if(currentPost>0){
		currentPost-=1;
		if($(".Post").length){
			$(".Post:eq(" + currentPost + ")").css("outline", "5px solid #223F17").siblings().css("outline", "none");
			window.scrollTo(0, $(".Post:eq(" + currentPost + ")").offset().top - 25);
		}
		else{
			$(".post:eq(" + currentPost + ")").css("outline", "5px solid #223F17").siblings().css("outline", "none");
			window.scrollTo(0, $(".post:eq(" + currentPost + ")").offset().top - 25);
		}
	}
}