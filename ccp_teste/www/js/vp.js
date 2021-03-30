/*  veiculos_autorizados.html
********************************************************
********** Autor: Gilmar Jesus dos Santos     **********
********** Url: http://www.gilmarjesus.com    **********
********** Email: gilmarjsantos@gmail.com     **********
********************************************************
*/
window.onload = function () {
	$("#Nome").show();
    $("#Codigo").show();
 	$("#mostra_user").show();
	$("#lista").show();

    	
 	var Nome = localStorage.getItem('Nome');
    var nome = "Nome: " + Nome + "<br>";
	var Codigo = localStorage.getItem('Cod');
    var codigo = "Código: " + Codigo + "<br>";
    
    $("#Nome").html(nome);
	$("#Codigo").html(codigo);

  listagem();
}

function verificaAETC(){
   var codigoPessoa=localStorage.getItem('Cod');
    var id=0; 
	
    $.ajax({
        url:'http://179.131.10.28/ccp_pmpinda/autorizacao_consulta.php',
        dataType:'json',
        type:'POST',
        data:{codigo_pessoa: codigoPessoa},
        success:function(t){
            if (t.Resp==0) {
              window.alert('Não constam veículos autorizados!!');
            }
            
            else if(r.Resp==1){
				localStorage.setItem('id_veiculo',t.id_veiculo);
                localStorage.setItem('placa',t.placa);
				localStorage.setItem('toneladas',t.toneladas);
                localStorage.setItem('marca_modelo',t.marca_modelo);
			    localStorage.setItem('pessoa',t.id_pessoa);			           		   
		 	
			//inicio();

			}
            
        },
        error:function(e){
          window.alert('Erro de conexão com o banco de dados!!');
        }
    })
    
}


function sair(){
    
  window.confirm(
    'Deseja sair?',
    respostaSair,
    'Sair',
    ['Não','Sim']
    )
    
}


function respostaSair(r){
    
    if (r==1) {
        
        localStorage.clear();

        $("#user").hide();
        $("#logon").show();
    }
  
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
	


function listagem(){
    
    var cod_pessoa=localStorage.getItem('Cod');
    var id=0;
    
    $.ajax({
		url:'http://179.131.10.28/ccp_pmpinda/consultaVeiculos_vp.php',
        dataType:'json',
		type:'POST',
		data:{idPessoa: cod_pessoa},
		   
        success: function(r) {
        	
            var total = r.length;
            var i;
            var postagens = "";
            
            for(i=0;i<total;i++){
                console.log(r[i].id_veiculo);
				postagens+="<table width='90%' border='0' align='center' cellpadding='0' cellspacing='0' >";
    postagens+="<tr>";
	postagens+="<td width='10%'><div align='center'><span id='texidaetc' class='style17'>" + r[i].id_aetc + "</span></div></td>";
	postagens+="<td width='10%'><div align='center'><span class='style17'>" + r[i].id_veiculo + "</span></div></td>";
    postagens+="<td width='24%'><div align='center'><span class='style17'>" + r[i].placa + "</span></div></td>";
    postagens+="<td width='19%'><div align='center'><span class='style17'>" + r[i].toneladas + "</span></div></td>";
	postagens+="<td width='20%'><div align='center'><span class='style17'><button name='btn10' id='btn10' type='button' class='ui-btn ui-shadow ui-corner-all ui-icon-eye ui-btn-icon-notext' onclick='exibe_aetc("+r[i].id_aetc+")'>Exibir</button></span></div></td>";
    postagens+="</tr>";
	//postagens+="<div id='btnvoltamenu' align='center'>";
	//postagens+="<button type='button' data-icon='check' name='btn52' id='btn52' onClick='javascript:location.href=\"login.html\"' style='width:90%; margin-left: auto;margin-right: auto'>Voltar ao Menu</button>";
	//postagens+="</div>";
	
    postagens+="</table>";
          				
              $("#lista_autorizados").html(postagens);
              $("#lista_autorizados").show();
                        
            } 
        
    },
        error:function(e){
        window.alert('Houve um erro de conexão com o banco de dados!!')
    }
    })
}

function exibe_aetc(valor){
	
    var codaetc1=valor;
	
	// console.log(codaetc);
	
    $.ajax({
        url:'http://179.131.10.28/ccp_pmpinda/consulta_aetc.php',
        dataType:'json',
		type:'POST',
		data:{codaetc:codaetc1},
		   
        success: function(f) {
        	var totalf = f.length;
			var b;
			var aetctxt = "";
			
            for(b=0;b<totalf;b++){
                console.log(f[b].id_aetc);

				aetctxt+="<table width='98%' border='0' align='center'>";
                aetctxt+="<tr>";
                aetctxt+="<td><div align='center'>Secretaria Municipal de Segurança Pública </div></td>";
                aetctxt+="</tr>";
                aetctxt+="<tr>";
                aetctxt+="<td>&nbsp;</td>";
                aetctxt+="</tr>";
                aetctxt+="<tr>";
                aetctxt+="<td><div align='center'>AUTORIZAÇÃO ESPECIAL DE TRÂNSITO DE CARGA (AETC)</div></td>";
                aetctxt+="</tr>";
                aetctxt+="</table>";
                aetctxt+="<div class='clear'></div>";
                aetctxt+="<hr class='no-desktop'>";
                aetctxt+="<div class='dados'>";
                aetctxt+="<div class='row'>";
                aetctxt+="<div class='col-md-6'>";
                aetctxt+="<span style='font-size: 1em'><b>AETC Nr:</b></span>"+f[b].id_aetc+"<br>";
                aetctxt+="</div>";
				aetctxt+="<div class='col-md-6'>";
                aetctxt+="<span style='font-size: 1em'><b>CPF/CNPJ:</b></span>"+f[b].cpfcnpj+"<br>";
                aetctxt+="</div>";
		        aetctxt+="</div>";
                aetctxt+="<div class='col-md-6'>";
                aetctxt+="<span style='font-size: 1em'><b>CNH:</b></span>"+f[b].cnh+"<br>";
                aetctxt+="</div>";
                aetctxt+="<div class='row'>";
                aetctxt+="<div class='col-md-12'>";
                aetctxt+="<span style='font-size: 1em'><b>Nome:</b></span>"+f[b].Nome+"<br>";
                aetctxt+="</div>";
                aetctxt+="</div>";
                aetctxt+="<div class='col-md-12'>";
                aetctxt+="<span style='font-size: 1em'><b>Placa:</b></span>"+f[b].placa+"<br>";
                aetctxt+="</div>";
                aetctxt+="</div>";
                aetctxt+="<!-- <div class='col-md-6'>Peso máximo: "+f[b].placa+"<br></div> -->";
                aetctxt+="<div class='row'>";
                aetctxt+="<div class='col-md-6'>RENAVAN: "+f[b].renavan+"<br></div>";
                aetctxt+="</div>";
                aetctxt+="<div class='col-md-6'>ESPÉCIE/TIPO: "+f[b].especie+"<br></div>";
                aetctxt+="<div class='row'>";
                aetctxt+="<div class='col-md-6'>COMPOSIÇÃO: "+f[b].toneladas+" Toneladas<br></div>";
                aetctxt+="</div>";
				// aetctxt+="<p>&nbsp;</p>";
				aetctxt+="<br>";
                aetctxt+="<div class='atencao'>";
                aetctxt+="O Veículo acima está <b>AUTORIZADO</b> a trafegar nas Zona de Restrição Máxima de Circulação (ZRMC) e Zona de Restrição Especial de Circulação (ZREC) conforme decreto 5635/19, respeitando o Horário de Restrição de Tráfego das 7:00 às 9:00 horas e das 17:00 às 19:00 e também os limites estabelecidos pela sinalização de trânsito conforme CTB.";
                aetctxt+="<br>";             
                aetctxt+="</div>";
                aetctxt+="<div class='row obs'>";
                aetctxt+="<div class='col-md-12'>&nbsp;</div>";
                aetctxt+="</div>";
                aetctxt+="<div class='row validade'>";
                aetctxt+="<div class='col-md-6'><b>Validade:</b>"+f[b].dia+"<br></div>";
                aetctxt+="</div>";
                aetctxt+="<small class='atencao'>";
                aetctxt+="<strong>TÍTULO PRECÁRIO</strong> - Pode ser revogado em caso de infração da autorização ou ";
                aetctxt+="divergência nos dados informados.</small>";
                aetctxt+="<div class='no-print no-mobile text-center'>";
                aetctxt+="<table width='99%' border='0' align='center'>";
                aetctxt+="<tr>";
                aetctxt+="<td><!-- <a onClick='window.print()' class='btn btn-warning'>Imprimir página</a> --> </td>";
                aetctxt+="<td><button type='button' data-icon='check' name='btn55' id='btn55' onClick='voltarlista()' style='width:90%; margin-left: auto;margin-right: auto'>Voltar á Lista</button></td>";
                aetctxt+="</tr>";
                aetctxt+="</table>";
                aetctxt+="</div>";
                aetctxt+="</div>";

          	  $("#lista_autorizados").hide();
			  $("#tabelatopo").hide();
			  $("#rodape").hide(); 
              $("#mostrar_aetc").show();
			  $("#btnvoltamenu").hide();
              $("#mostrar_aetc").html(aetctxt);
			  
            
                                    }
			
                          }, 
       
    })
}

function voltarlista(){
	          $("#lista_autorizados").show();
			  $("#tabelatopo").show();
			  $("#rodape").show(); 
              $("#mostrar_aetc").hide();
              $("#mostrar_aetc").html("");
			  $("#btnvoltamenu").show();
	
}
          

