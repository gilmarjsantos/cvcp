/*  veiculos_autoriza_aetc.html
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
    	
    var Nome=localStorage.getItem('Nome');
    var nome="Nome: " + Nome + "<br>";
	var Codigo=localStorage.getItem('Cod');
    var codigo="Código: " + Codigo + "<br>";
    
    $("#Nome").html(nome);
	$("#Codigo").html(codigo);
	$("#titbtn").html("Limpar");
	
	autoriza();
	
}


function inicio(){
    
    $("#user").show();
    $("#logon").hide();
    
    var Nome = localStorage.getItem('Nome');
    var nome = "Nome: " + Nome + "<br>";
	var Codigo = localStorage.getItem('Cod');
    var codigo = "Código: " + Codigo + "<br>";
    
    $("#Nome").html(nome);
	$("#Codigo").html(codigo);
    }
	


function autoriza(){
	
    var cod_pessoa1 = localStorage.getItem('Cod');
   
    $.ajax({
        url:'http://179.131.10.28/ccp_pmpinda/aetc_analisar.php',
        dataType:'json',
		type:'POST',
		data:{pessoa: cod_pessoa1},
		   
        success: function(p) {
           var totaln = p.length;
		if(totaln!=0){
		    var h = "";
            var postagensnz = "";
            
            for(h=0;h<totaln;h++){
                console.log(p[h].id_veiculo);
				postagensnz+="<table width='90%' border='0' align='center' cellpadding='0' cellspacing='0' >";
                postagensnz+="<tr>";
	            postagensnz+="<td width='10%'><div align='center'><span class='style17'>" + p[h].id_aetc + "</span></div>";
				postagensnz+="<input name='id_aetc' type='hidden' id='id_aetc' size='10' maxlength='8' value='" + p[h].id_aetc + "'></td>";
                postagensnz+="<td width='30%'><div align='center'><span class='style17'>" + p[h].placa + "</span></div></td>";
				postagensnz+="<td width='30%'><div align='center'><span class='style17'>" + p[h].dia + "</span></div></td>";
				postagensnz+="<td width='30%'><div align='center'><button name='btn190' id='btn190' type='button' class='ui-btn ui-shadow ui-corner-all ui-icon-eye ui-btn-icon-notext' onclick=detalharv(" + p[h].id_aetc + ")>Exibir</button></div>";
           		postagensnz+="</tr>";
                postagensnz+="</table>";
          				
			$("#topo_adm").show();			
              $("#lista_adm").html(postagensnz);
              $("#lista_adm").show();
			  
			  // 	$("#titbtn").html("Nova Pesquisa");
			  
                                 };  // fecha o for
			           } // fecha o if
              if (totaln==0){
				  
				window.alert('Não existe autorização para a placa pesquisada!');  
			                 };
                          }, 
        error:function(e){
        window.alert('Houve um erro de conexão com o banco de dados!!');
    }
    })
}

function detalharv(id_aetc_veiculo){
	
     $("#topo_adm").hide();
	 $("#lista_adm").hide();
	 $("#listab").hide();
	 console.log(id_aetc_veiculo);
	  
  var parametro01=id_aetc_veiculo;
  
    $.ajax({
        url:'http://179.131.10.28/ccp_pmpinda/aetc_consulta.php',
        dataType:'json',
		type:'POST',
		data:{id_aetc:parametro01},
		   
        success: function(u) {
			// var u;
            var totalu=u.length;
            var x;
            var postagensd1a="";
			var postagens_rejeita="";

            for(x=0;x<totalu;x++){
                console.log(u[x].id_aetc);
			 postagens_rejeita+="<div align='center'>";	
			 postagens_rejeita+="Anotação: <br>";	
			//  postagens_rejeita+="<input type='text' id='txtobsrejeita' name='txtobsrejeita' cols='40' rows='4' /> </div><br>";
			 postagens_rejeita+="<textarea name='txtobsrejeita' id='txtobsrejeita' cols='30' rows='3' autofocus></textarea>";
			 // postagens_rejeita+="<p>&nbsp;</p>";
			 postagensd1a+="<table width='85%' border='0' align='center'>";
             postagensd1a+="<tr>";
             postagensd1a+="<td align='center' height='80' colspan='3'>";
	         postagensd1a+="<div id='galeria' class='galeria'>";
             postagensd1a+="<ul class='fotos'>"; 
			 // FOTO DA NOTA FISCAL
	         postagensd1a+="<li><a href='http://179.131.10.28/ccp_pmpinda/uploads/"+u[x].fotoNF+"' title='"+u[x].id_aetc+"'  target='_blank'><img src=";
	         postagensd1a+="'http://179.131.10.28/ccp_pmpinda/uploads/"+u[x].fotoNF+"' alt=''><span><img "; 
			 postagensd1a+="src='http://179.131.10.28/ccp_pmpinda/uploads/"+u[x].fotoNF+"' alt=''></span></a></li>";
			 // FOTO DO CRLV
	         postagensd1a+="<li><a href='http://179.131.10.28/ccp_pmpinda/uploads/"+u[x].foto_CRLV+"' title='"+u[x].id_aetc+"'  target='_blank'><img src= ";
			 postagensd1a+="'http://179.131.10.28/ccp_pmpinda/uploads/"+u[x].foto_CRLV+"' alt=''><span><img "; 
			 postagensd1a+="src='http://179.131.10.28/ccp_pmpinda/uploads/"+u[x].foto_CRLV+"' alt=''></span></a></li>";
            postagensd1a+="</ul>";
            postagensd1a+="</div><!-- <div class='img-aqui' id='img-aqui'></div>  -->	</td>";
            postagensd1a+="</tr>";
            postagensd1a+="</table>";
			postagensd1a+="<table width='80%' border='0' align='center'>";
			postagensd1a+="<tr><td><span class='style8'>Veículo: "+u[x].id_veiculo1+" </span></td></tr>";
			postagensd1a+="<tr><td><span id='par' class='style8'>AETC nr: "+u[x].id_aetc+"</span></td></tr>";
            postagensd1a+="<tr><td><span class='style8'>Lic. em Pindamonhangaba ?  ( "+u[x].licenciado_Pinda+" )</span></td></tr>";
            postagensd1a+="<tr><td><span class='style8'>Placa: "+u[x].placa+"</span></td></tr>";
            postagensd1a+="<tr><td><span class='style8'>Max Toneladas: "+u[x].toneladas+"</span></td></tr>";
            postagensd1a+="<tr><td>&nbsp;</td></tr>";
            postagensd1a+="</table>";	
			postagensd1a+="<table width='80%' border='0' align='center'>";
            postagensd1a+="<tr><td><span class='style8'>Renavan: "+u[x].renavam+"</span></td></tr>";
            postagensd1a+="<tr><td><span class='style8'>Espécie / Tipo: "+u[x].especie_tp+"</span></td></tr>";
            postagensd1a+="<tr><td><span class='style8'>Ano de Fabricação: "+u[x].ano_fabricacao+"</span></td></tr>";
            postagensd1a+="<tr><td><span class='style8'>Marca / Modelo: "+u[x].marca_mod+"</span></td></tr>";
            postagensd1a+="<tr><td><span class='style8'>Categoria: "+u[x].categoria+"</span></td></tr>";
            postagensd1a+="</table>";
			postagensd1a+="<table width='80%' border='0' align='center'>";
            postagensd1a+="<tr>";
            postagensd1a+="<td> <div align='center'>";
			postagensd1a+="<span id='obsrejeita'></span>";
			postagensd1a+="</td>";
			postagensd1a+="</tr>";
			postagensd1a+="</table>";
			postagensd1a+="<table width='80%' border='0' align='center'>";
            postagensd1a+="<tr>";
            postagensd1a+="<td> <div align='center'>";
            postagensd1a+="<p>&nbsp;</p>";    
			postagensd1a+="<button name='btn9' id='btn9' onClick='aprova("+u[x].id_aetc+")'>";
			postagensd1a+="Aprovar</button>&nbsp;&nbsp;&nbsp;&nbsp;";
			postagensd1a+="<button name='btn10' id='btn10' onClick='rejeita("+u[x].id_aetc+")'>";
			postagensd1a+="Rejeitar</button>";
            postagensd1a+="<p><div id='msgautoriza'></div></p>";
			postagensd1a+="<!-- <button name='btn18' id='btn18' onClick='visualizar("+u[x].Cod+")'>";
			postagensd1a+="Pesquisar fotos</button> -->"; 
            postagensd1a+="<button name='btn8' id='btn8' onClick='javascript:location.href=\"veiculos_autoriza_aetc.html\"'>";
			postagensd1a+="Voltar para a lista</button>";    
            postagensd1a+="</div>";
	        postagensd1a+="</td>";
            postagensd1a+="</tr>";
            postagensd1a+="</table>";
			
			$("#detalhes_veiculos").show();
			$("#botao_voltar").hide();
			$("#ficha_veiculos").html(postagensd1a);
			$("#obsrejeita").html(postagens_rejeita);
	        $("#obsrejeita").show();
			// document.getElementById('obsrejeita').focus();
			
			                        }
			        
                             },
       
    })
	
               }

function limpar(){
		$("#lista").html('');
        $("#lista").hide();
		$("#topo").hide();
		document.getElementById('buscaplaca').value = "";	
		$("#titbtn").html("Limpar");
}

function aprova(id){
	var par=id;
	var comando;
	var Aprova=localStorage.getItem('Nome');
	var opcao3=document.getElementById('txtobsrejeita').value;
	$.ajax({
        url:'http://179.131.10.28/ccp_pmpinda/aetc_aprova.php',
        dataType:'json',
		type:'POST',
		data:{comando:par
				,opcao1:opcao3
				,aprovador:Aprova},
		
       success:function(w){  
		 console.log(par);
		 console.log(aprovador);
	},
		
	    error:function(e){
	  window.alert('Aprovado por '+Aprova+' com sucesso!');
	  $("#btn9").hide();
	  $("#btn10").hide();
	  $("#msgautoriza").html("A P R O V A D O");
	  $("#obsrejeita").hide(); 
	  
	   }
})
}

function rejeita(idr){
	var par2=idr;
	var comando2;
	var Rejeita=localStorage.getItem('Nome');
	var opcao2;
	var opcao4=document.getElementById('txtobsrejeita').value;
	$.ajax({
        url:'http://179.131.10.28/ccp_pmpinda/aetc_rejeita.php',
        dataType:'json',
		type:'POST',
		data:{comando2:par2
				,opcao2:opcao4
				,aprovador:Rejeita},
		   
       success:function(y){  
		 console.log(par2);
   	},
		              
	   error:function(e){
 	   window.alert('Rejeitado por '+Rejeita+' com sucesso!');
	   $("#btn9").hide();
	  $("#btn10").hide();
	  $("#msgautoriza").html("R E J E I T A D O");
	  $("#obsrejeita").hide(); 
	
	  
	  
	   }
})

	
}
function pesquisafoto(idautorizacao){
 console.log(idautorizacao);
	  
  var parametro02 = idautorizacao;
  
    $.ajax({
        url:'http://179.131.10.28/ccp_pmpinda/aetc_galeria.php',
        dataType:'json',
		type:'POST',
		data:{idautorizacao: parametro02},
		   
        success: function(t) {
            var totalt = t.length;
		
            var n;
            var postagenfoto = "";
            for(n=0;n<totalt;n++){
                console.log(t[n].idautorizacao);
				
	        postagenfoto+="<table width='30%' height='85' border='1'  align='center'>";
            postagenfoto+="<tr>";
            postagenfoto+="<td height='91'><img src='http://179.131.10.28/ccp_pmpinda/uploads/"+t[n].nome_arquivo+"' width='142' height='111' onClick='mostra_foto01()'></td>";
            postagenfoto+="</tr>";
            postagenfoto+="</table>";
			                       }
                             },
    })
}
function mostra_foto01(){
	
	formSolicitaAETC += "<div align='center'><img name='exibeFoto' id='exibeFoto'></div>"
	
	
}
function visualizar(pessoa){
	  
  var parametro02=pessoa;
  
    $.ajax({
        url:'http://179.131.10.28/ccp_pmpinda/aetc_consulta_foto.php',
        dataType:'json',
		type:'POST',
		data:{id_pess:parametro02},
		   
        success: function(uf) {
            var totaluf=uf.length;
            var x2;
            var postagensd1a2="";
			
            for(x2=0;x2<totaluf;x2++){
                console.log(uf[x2].id_pessoa);
			
			postagensd1a2+="<table width='85%' border='0' align='center'>";
            postagensd1a2+="<tr>";
            postagensd1a2+="<td align='center' height='80' colspan='3'>";
	        postagensd1a2+="<div id='galeria' class='galeria'>";
            postagensd1a2+="<ul class='fotos'>"; 
	        postagensd1a2+="<li><a href='http://179.131.10.28/ccp_pmpinda/uploads/"+uf[x2].Arquivo+"'  title='"+uf[x2].Arquivo+"'  target='_blank'><img src=";
	        postagensd1a2+="'http://179.131.10.28/ccp_pmpinda/uploads/"+uf[x2].Arquivo+"' alt=''><span><img "; 
			postagensd1a2+="src='http://179.131.10.28/ccp_pmpinda/uploads/"+uf[x2].Arquivo+"' alt=''></span></a></li>";
            postagensd1a2+="</ul>";
            postagensd1a2+="</div>";
            postagensd1a2+="</tr>";
            postagensd1a2+="</table>";
			
			$("#exibir_fotos").html(postagensd1a2);
			$("#exibir_fotos").show();
			$("#botao_voltar").hide();
		
			                        }
			        
                             },
       
    })
	
               }

