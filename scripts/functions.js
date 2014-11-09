$(document).ready(function(){
	var inputs = $('input'),
		output = $('#output'),
		panelStyle = $('#panelStyle'),
		multiplierinput = $('#multiplier'),
		rotateYinput = $('#rotateY'),
		rotateXinput  = $('#rotateX'),
		rotateZinput  = $('#rotateZ'),
		translateYinput  = $('#translateY'),
		translateXinput  = $('#translateX'),
		translateZinput  = $('#translateZ'),
		perspectiveinput  = $('#perspective'),
		tstyleinput = $('#tstyleinput'),
		bvisinput = $('#bvisinput'),
		styleArr = [
			'#container{\n perspective:',
			'', //1
			'px;\n --moz-transform-style:',
			'', //3
			';\n --webkit-transform-style:',
			'', //5
			';\n transform-style:',
			'', //7
			';\n} \n#panel{\n transform: \n  rotateY(',
			'', //9
			'deg) rotateX(',
			'', //11
			'deg) rotateZ(',
			'', //13
			'deg) \n  translateY(',
			'', //15
			'px) translateX(',
			'', //17
			'px) translateZ(',
			'', //19
			'px); \n backface-visibility:',
			'', //21
			';\n}' ];
	
	var updateDiv = function (){
		var styleStr, multiplier = multiplierinput.val() | 1,
			rotateY = rotateYinput.val() | 0,
			rotateX = rotateXinput.val() | 0,
			rotateZ = rotateZinput.val() | 0,
			translateY = translateYinput.val() | 0,
			translateX = translateXinput.val() | 0,
			translateZ = translateZinput.val() | 0,
			perspective = perspectiveinput.val() | 0,
			tstyle = tstyleinput.text(),
			bvis = bvisinput.text();
			
		styleArr[1] = perspective * multiplier;
		styleArr[3] = styleArr[5] = styleArr[7] = tstyle;
		styleArr[9] = rotateY * multiplier;
		styleArr[11] = rotateX * multiplier;
		styleArr[13] = rotateZ * multiplier;
		styleArr[15] = translateY * multiplier;
		styleArr[17] = translateX * multiplier;
		styleArr[19] = translateZ * multiplier;
		styleArr[21] = bvis;
		
		styleStr = styleArr.join('');
		
		panelStyle.html(styleStr);
		output.val(styleStr);
		
	};
	updateDiv();
	inputs
		.keydown(updateDiv)
		.keyup(updateDiv)
		.change(updateDiv);
	
	$('#tstyle').click(function(){
		var curTStyle = tstyleinput.text();
		if(curTStyle === 'preserve-3d'){
			tstyleinput.text('flat');
		}
		else{
			tstyleinput.text('preserve-3d');
		}
		updateDiv();
	});
	$('#bvis').click(function(){
		var curBVisStyle = bvisinput.text();
		if(curBVisStyle === 'visible'){
			bvisinput.text('hidden');
		}
		else{
			bvisinput.text('visible');
		}
		updateDiv();
	});
	
	$('.clearBtn').click(function(){
		var id = $(this).attr('data-idval');
		if(id != 'multiplier'){
			$('#'+id).val(0);
		}
		else{
			$('#'+id).val(1);
		}
		updateDiv();
	});
	
	$('#clearAll').click(function(){
		inputs.val(0);
		multiplierinput.val(1);
		tstyleinput.text('preserve-3d');
		bvisinput.text('visible');
		updateDiv();
	});
	
	$('#outputBtn').click(function(){
		var Copied = output.select();
		//var Copied = output.val().execCommand("Copy");
	});
});