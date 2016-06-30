$(document).ready(function(e) {
	var flag_footer=0;
	$('#fullpage').fullpage({
		verticalCentered:true,
		sectionsColor:['#000','#39445e', '#39445e', '#39445e'],
		navigation: true,
		navigationPosition: 'right',
		scrollBar: true,
		afterRender: function(){
			$('video').get(0).play();
			$('top_button').hide();
		},
		onLeave: function(index, nextIndex, direction){
		  var vid = document.getElementById("myVideo");
		  if(index == 1 || direction =='down'){
				vid.pause();
				$('#top_button').show();
				
			}
			else if(index == 2 && direction == 'up'){
				vid.play();
				$('.icons_left').hide();
				$('#top_button').hide();
			}
		},
		afterLoad: function(anchor, index){
			if (index==4) {
				$('#medal').css('animation','fadeDown ease-in-out 0.5s');
				$('#medal').css('animation-iteration-count','1');
			}
			else{
				$('#medal').css('animation','');
				$('#medal').css('animation-iteration-count','');
			}

			if (index==1) {
				$('.icons_left').hide();
				$('#top_button').hide();
			}
			else if(index==2){
				$('.icons_left').fadeIn(500);
				$('.pins').css('animation','poptop ease-in-out 3s');
				$('.pins').css('animation-iteration-count','1');

			}
			else{
				$('.icons_left').show();
				$('.pins').css('animation','');
				$('.pins').css('animation-iteration-count','');
			}
		}
		
	});
	$('#fp-nav').css('margin-top','0px');
	$('#fp-nav').css('width','19px');
	$('#fp-nav').css('height','19px');
	var x=1;
	$('#bottom_button').click(function() {
			if (x==1) {
				flag_footer=1;
				$(this).css('bottom','9%');
				$(this).css('transform','rotate(180deg)');
				$('.footer').css('bottom','-1%');

				x=2;
			}
			else{
				flag_footer=0;
				$(this).css('bottom','1%');
				$(this).css('transform','rotate(0deg)');
				$('.footer').css('bottom','-12%');
				x=1;
			}
	});

	$('#top_button').click(function() {
		$.fn.fullpage.moveTo(1);
	});

	});