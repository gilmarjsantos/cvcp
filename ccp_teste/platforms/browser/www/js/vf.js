/*  veiculos_fiscal.html
********************************************************
********** Autor: Gilmar Jesus dos Santos     **********
********** Url: http://www.gilmarjesus.com    **********
********** Email: gilmarjsantos@gmail.com     **********
********************************************************
*/
window.onload = function () {
	$("#Nome").show();
    $("#Codigo").show();
	$("#topo").hide();
	$("#lista").hide();
	$("#mostra_user").show();
    	
 	var Nome = localStorage.getItem('Nome');
    var nome = "Nome: " + Nome + "<br>";
	var Codigo = localStorage.getItem('Cod');
    var codigo = "Código: " + Codigo + "<br>";
    
    $("#Nome").html(nome);
	$("#Codigo").html(codigo);
	$("#titbtn").html("Limpar");
	
}

function sair(){
    
 if (window.confirm("Você realmente quer sair?")) { 
  
        $("#user").hide();
        $("#logon").show();
		document.getElementById('usuario').value='';
		document.getElementById('senha').value='';
		$("#botoes_usuario").hide();
		$("#botoes_fiscal").hide();
		$("#botoes_autoriza").hide();
        $("#botao_botoes").hide();
		window.open("sair.html", "");
    
}

}

function fiscaliza(){
	
    var cod_placa = document.getElementById('buscaplaca').value;
    
    $.ajax({
        url:'http://179.131.10.28/ccp_pmpinda/VeiculosFiscal.php',
        dataType:'json',
		type:'POST',
		data:{placa: cod_placa},
		   
        success: function(p) {
           var totalf = p.length;
		 if (totalf!= 0){

            var postagensf = "";
            
            for(h=0;h<totalf;h++){
                console.log(p[h].id_veiculo);
				postagensf+="<table width='90%' border='0' align='center' cellpadding='0' cellspacing='0' >";
                postagensf+="<tr>";
	            postagensf+="<td width='10%'><div align='center'><span class='style17'>" + p[h].id_aetc + "</span></div><input name='id_aetc' type='hidden' id='id_aetc' size='10' maxlength='8' value='" + p[h].id_aetc + "'></td>";
                postagensf+="<td width='30%'><div align='center'><span class='style17'>" + p[h].placa + "</span></div></td>";
				postagensf+="<td width='30%'><div align='center'><span class='style17'>" + p[h].dia + "</span></div></td>";
                postagensf+="<td width='30%'><div align='center'><button type='button' id='aetc' name='aetc' class='ui-btn ui-shadow ui-corner-all ui-icon-view ui-btn-icon-notext' onClick='emite_aetc(" + p[h].id_aetc + ")'></button></div>";
				postagensf+="</tr>";
                postagensf+="</table>";
          				
			$("#topo").show();			
              $("#lista").html(postagensf);
              $("#lista").show();
			  	$("#titbtn").html("Nova Pesquisa");
			  
                                 };  // fecha o for
			           } // fecha o if
              if (totalf== 0){
				  
				window.alert('Não existe autorização para a placa pesquisada!');  
			                 };
                          }, 
        error:function(e){
        window.alert('Houve um erro de conexão com o banco de dados!!');
    }
    })
}

function emite_aetc(parfiscal){
	
    var cod_aetc = parfiscal;
    
    $.ajax({
        url:'http://179.131.10.28/ccp_pmpinda/consulta_aetc.php',
        dataType:'json',
		type:'POST',
		data:{codaetc:cod_aetc},
		   
        success: function(a) {
        		var totala = a.length;
			if (totala != 0){
			
            var b = '' ;
            var postagensa = "";
            
            for(b=0;b<totala;b++){
                console.log(a[b].id_veiculo);

				postagensa+="<table width='98%' border='0' align='center'>";
                postagensa+="<tr>";
                postagensa+="<td><div align='center'>Secretaria Municipal de Segurança Pública </div></td>";
                postagensa+="</tr>";
                postagensa+="<tr>";
                postagensa+="<td>&nbsp;</td>";
                postagensa+="</tr>";
                postagensa+="<tr>";
                postagensa+="<td><div align='center'>AUTORIZAÇÃO ESPECIAL DE TRÂNSITO DE CARGA (AETC)</div></td>";
                postagensa+="</tr>";
                postagensa+="</table>";
                postagensa+="<div class='clear'></div>";
                postagensa+="<hr class='no-desktop'>";
                postagensa+="<div class='dados'>";
                postagensa+="<div class='row'>";
                postagensa+="<div class='col-md-6'>";
                postagensa+="<span style='font-size: 1em'><b>AETC Nr:</b></span>"+a[b].id_aetc+" - APROVADA <br>";
                postagensa+="</div>";
				postagensa+="<div class='col-md-6'>";
                postagensa+="<span style='font-size: 1em'><b>CPF/CNPJ:</b></span>"+a[b].cpfcnpj+"<br>";
                postagensa+="</div>";
		        postagensa+="</div>";
                postagensa+="<div class='col-md-6'>";
                postagensa+="<span style='font-size: 1em'><b>CNH:</b></span>"+a[b].cpfcnpj+"<br>";
                postagensa+="</div>";
                postagensa+="<div class='row'>";
                postagensa+="<div class='col-md-12'>";
                postagensa+="<span style='font-size: 1em'><b>Nome:</b></span>"+a[b].Nome+"<br>";
                postagensa+="</div>";
                postagensa+="</div>";
                postagensa+="<div class='col-md-12'>";
                postagensa+="<span style='font-size: 1em'><b>Placa:</b></span>"+a[b].placa+"<br>";
                postagensa+="</div>";
                postagensa+="</div>";
                postagensa+="<!-- <div class='col-md-6'>Peso máximo: "+a[b].peso+"<br></div> -->";
                postagensa+="<div class='row'>";
                postagensa+="<div class='col-md-6'>RENAVAN: "+a[b].renavan+"<br></div>";
                postagensa+="</div>";
                postagensa+="<div class='col-md-6'>ESPÉCIE/TIPO: "+a[b].especie+"<br></div>";
                postagensa+="<div class='row'>";
                postagensa+="<div class='col-md-6'>COMPOSIÇÃO: "+a[b].composicao+" Toneladas<br></div>";
                postagensa+="</div>";
				postagensa+="<br>";
                postagensa+="<div class='atencao'>";
                postagensa+="O veículo acima descrito está AUTORIZADO a trafegar na Zona de Restrição ao Tráfego de Caminhões – ZRTC e nas Rotas de Controle de Cargas Pesadas – RCCP, de acordo com o Decreto Municipal nº 5635 de 12 de março de 2019, respeitando os limites estabelecidos pela sinalização de trânsito conforme o Código de Trânsito Brasileiro.";
                postagensa+="<br>";
				postagensa+="<strong>Observações:</strong><BR>"+a[b].Anotacao+" ";
                postagensa+="</div>";
                postagensa+="<div class='row obs'>";
                postagensa+="<div class='col-md-12'>&nbsp;</div>";
                postagensa+="</div>";
                postagensa+="<div class='row validade'>";
				postagensa+="<div class='col-md-6'><b>Solicitação em:</b>"+a[b].dia+"<br></div>";
                postagensa+="<div class='col-md-6'><b>Validade:</b>"+a[b].dt_validade+"<br></div>";
                postagensa+="</div>";
                postagensa+="<small class='atencao'>";
                postagensa+="<strong>TÍTULO PRECÁRIO</strong> - Pode ser revogado em caso de infração da autorização ou ";
                postagensa+="divergência nos dados informados.</small>";
                postagensa+="<div class='no-print no-mobile text-center'>";
                postagensa+="<table width='99%' border='0' align='center'>";
                postagensa+="<tr>";
                postagensa+="<td><!-- <a onClick='window.print()' class='btn btn-warning'>Imprimir página</a> --> </td>";
                postagensa+="<td><!-- <button type='button' data-icon='check' name='btn55' id='btn55' onClick='voltarlista()' style='width:90%; margin-left: auto;margin-right: auto'>Voltar á Lista</button>--></td>";
                postagensa+="</tr>";
                postagensa+="</table>";
                postagensa+="</div>";
                postagensa+="</div>";
          				
			$("#topo").hide();			
              $("#lista").html(postagensa);
              $("#lista").show();
                              };
			}
             if (totala == 0){ 				  
				window.alert('Não existe autorização para a placa pesquisada!');  
			  };

                          }, 
        error:function(e){
        window.alert('Houve um erro de conexão com o banco de dados!!')
    }
    })
}


function limpar(){
		$("#lista").html('');
        $("#lista").hide();
		$("#topo").hide();
		document.getElementById('buscaplaca').value = "";	
		$("#titbtn").html("Limpar");
}

function maiuscula(z){
        v = z.value.toUpperCase();
        z.value = v;
    }