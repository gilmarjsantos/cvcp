/*  veiculos_autoriza_aetc.html
********************************************************
********** Autor: Gilmar Jesus dos Santos     **********
********** Url: http://www.gilmarjesus.com    **********
********** Email: gilmarjsantos@gmail.com     **********
********************************************************
*/
window.onload = function () {
	visualizar(374);
}

function visualizar(id_pessoa_veiculo){
	  
  var parametro01=id_pessoa_veiculo;
  
    $.ajax({
        url:'http://179.131.10.28/ccp_pmpinda/aetc_consulta_foto.php',
        dataType:'json',
		type:'POST',
		data:{id_pess:parametro01},
		   
        success: function(u) {
            var totalu=u.length;
            var x;
            var postagensd1a="";
			var postagens_rejeita="";

            for(x=0;x<totalu;x++){
                console.log(u[x].arquivo);
			postagens_rejeita+="<div align='center'>";	
			postagensd1a+="<table width='85%' border='0' align='center'>";
            postagensd1a+="<tr>";
            postagensd1a+="<td align='center' height='80' colspan='3'>";
	        postagensd1a+="<div id='galeria' class='galeria'>";
            postagensd1a+="<ul class='fotos'>"; 
	        postagensd1a+="<li><a href='#'><img src=";
	        postagensd1a+="'http://179.131.10.28/ccp_pmpinda/uploads/"+u[x].Arquivo+"' alt=''><span><img "; 
			postagensd1a+="src='http://179.131.10.28/ccp_pmpinda/uploads/"+u[x].Arquivo+"' alt=''></span></a></li>";
            postagensd1a+="</ul>";
            postagensd1a+="</div>";
            postagensd1a+="</tr>";
            postagensd1a+="</table>";
			postagensd1a+="</div>";
			
			$("#exibir_fotos").html(postagensd1a);
			$("#exibir_fotos").show();
			$("#botao_voltar").hide();
		
			                        }
			        
                             },
       
    })
	
               }



