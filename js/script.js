function inViewport (element) {
  if (!element) return false;
  if (1 !== element.nodeType) return false;

  var html = document.documentElement;
  var rect = element.getBoundingClientRect();

  return !!rect &&
    rect.bottom >= 0 &&
    rect.right >= 0 && 
    rect.left <= html.clientWidth &&
    rect.top <= html.clientHeight;
}
function inViewportCenterScrennY (el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= -jQuery(window).height()/2 &&
        rect.left >= 0 &&
        rect.top <= jQuery(window).height()/2 &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)

    );
}
function isOnScreen(elem) {
	// if the element doesn't exist, abort
	if( elem.length == 0 ) {
		return;
	}
	var $window = jQuery(window)
	var viewport_top = $window.scrollTop()-($window.height() *(3/4))
	var viewport_height = $window.height()
	var viewport_bottom = viewport_top + viewport_height
	var $elem = jQuery(elem)
	var top = $elem.offset().top
	var height = $elem.height()
	var bottom = top + height

	return (top >= viewport_top && top < viewport_bottom) ||
	(bottom > viewport_top && bottom <= viewport_bottom) ||
	(height > viewport_height && top <= viewport_top && bottom >= viewport_bottom)
}
var animatedTimeout;
console.log("tested By koushik");
jQuery(document).ready(function(e){
	console.log("tested By koushik2");
	jQuery("video").each(function(){
		jQuery(this).attr("playing","no");
		this.pause(); 
		//this.currentTime = 0;
	});
	
	window.addEventListener('scroll', function(e) {
		e.preventDefault();
		jQuery(".thb_video_bg").each(function(){
			//console.log(jQuery(this).find("video").attr("playing"));
		 if(inViewportCenterScrennY(this) && jQuery(this).find("video").attr("playing")=="no" ){
		 jQuery(this).find("video")[0].play();
		 jQuery(this).find("video").attr("playing","yes");
		 jQuery(this).addClass("playing-background");
		 console.log("triggering play");
		 //jQuery(this).attr("playing","yes");
		 //console.log(this.src);
/* 		 animatedTimeout = setTimeout(function(){
		 if (jQuery(".playing-background").length ==1)
		 jQuery('html, body').animate({	scrollTop: jQuery(".playing-background").offset().top }, 500, 'swing', function() {
			  clearTimeout(animatedTimeout);
			});
		},500); */
		window.scrollTo({ top: jQuery(".playing-background").offset().top, behavior: 'smooth' })
		 
		 }else if(jQuery(this).find("video").attr("playing")=="yes" && !inViewportCenterScrennY(this)){
				jQuery(this).find("video")[0].pause(); 
				jQuery(this).find("video").attr("playing","no");
				jQuery(this).removeClass("playing-background");
				//this.currentTime = 0;
				//jQuery(this).attr("playing","no");
		 }
		});
	});
});