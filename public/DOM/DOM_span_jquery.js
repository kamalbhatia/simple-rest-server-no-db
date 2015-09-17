// JavaScript Document
$(document).ready(function(){
    displayList();
});

function displayList(){
	$('#checkList').on("click","li",function(e){
		var chk= $(this).find("input");
		//console.log(chk);
		//console.log(e.target.tagName);
		if(e.target.tagName !== 'INPUT'){
		   if(chk.prop('checked') === false){
		     chk.prop('checked',true);	
		   }
		   else{
		     chk.prop('checked',false);
		   }
		}
		var fruitSelected = chk.val();
		var clikdFruit = $('<li></li>').text(fruitSelected);
		//console.log(clikdFruit);
		//console.log(chk.prop('checked'));
		var displayList = $("#displayList");
		if(chk.prop('checked') === true){
		  displayList.append(clikdFruit);
		  //console.log(displayList);
		}
		else{
		  //console.log(chk.prop('value'));
		  var disp = $('#displayList').find('li');
		  //console.log(disp);
		  disp.each(function(i){
			 //console.log(disp[i]);
			 //console.log($(this).text());
		    if($(this).text() == chk.prop('value')){
			   $(this).remove();
			}
		  });// end of .each
		}
		
	});//end of callback function
};//end of displayList() function