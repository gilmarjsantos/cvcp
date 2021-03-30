function renavam() // Se for usar favor citar o autor: 
                           // Gilmar Jesus gilmarjsantos@gmail.com
{
// Completa com zeros a esquerda se for no padrao antigo de 9 digitos
// renavam = 00639884962
    var renavam = '623456789';
	var renavam_len = renavam.length;
	if(renavam_len == 9){
 renavam = "00" + renavam;
 }
	

	if(renavam_len>8) 
	{
		var renavam5 	= renavam.substring(0,1);
		var renavam4 	= renavam.substring(1,1);
		var renavam3 	= renavam.substring(2,1);
		var renavam2 	= renavam.substring(3,1);
		
		var soma 		= (renavam5*5)+(renavam4*4)+(renavam3*3)+(renavam2*2);	
					
		var divimulti 	= intval((soma/11))*11;		
		var resultado 	= soma-divimulti;
		
		// echo $resultado;
		$("#rena").html(renavam);
	
	}
	else {
	
		return false;	
		//echo "erro";
	}
	
}

//  echo renavam("623456789");

