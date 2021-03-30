/*  veiculos_consulta_autorizacoes.html
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
    	
 	var Nome = localStorage.getItem('Nome');
    	var nome = "Nome: " + Nome + "<br>";
	var Codigo = localStorage.getItem('Cod');
    	var codigo = "Código: " + Codigo + "<br>";
    
    	$("#Nome").html(nome);
	$("#Codigo").html(codigo);
	
	var a1="<button type=\"button\" data-icon=\"check\" name=\"bautorizadas\" id=\"bautorizadas\" onClick=\"mudapagina(0)\" style=\"width:90%; margin-left: auto;margin-right: auto; font-size:9px\">Aprovadas</button>";
	var a2="<button type=\"button\" data-icon=\"check\" name=\"b\" id=\"b\" onClick=\"mudapagina(0)\" style=\"width:90%; margin-left: auto;margin-right: auto; font-size:10px; background-color:#9999FF\">Aprovadas</button>";
	
	var p1="<button type=\"button\" data-icon=\"check\" name=\"bpendentes\" id=\"bpendentes\" onClick=\"mudapagina(1)\" style=\"width:90%; margin-left: auto;margin-right: auto; font-size:9px\">Pendentes</button>";
	var p2="<button type=\"button\" data-icon=\"check\" name=\"bpendentes\" id=\"bpendentes\" onClick=\"mudapagina(1)\" style=\"width:90%; margin-left: auto;margin-right: auto; font-size:10px; background-color:#9999FF\">Pendentes</button>";
	
	var r1="<button type=\"button\" data-icon=\"check\" name=\"brejeitadas\" id=\"brejeitadas\" onClick=\"mudapagina(2)\" style=\"width:90%; margin-left: auto;margin-right: auto; font-size:9px\">Rejeitadas</button>";
	var r2="<button type=\"button\" data-icon=\"check\" name=\"brejeitadas\" id=\"brejeitadas\" onClick=\"mudapagina(2)\" style=\"width:90%; margin-left: auto;margin-right: auto; font-size:10px; background-color:#9999FF\">Rejeitadas</button>";
	$("#sit").html("Situação: ");
	$("#sit").show();
	$("#ba0").html(a1);
	$("#ba0").show();
	$("#bp1").html(p1);
	$("#bp1").show();
	$("#br2").html(r1);
	$("#br2").show();
	
	
listagem();

}

function mudapagina(novaopcao){
	
				if(novaopcao=='0'){
				listagem();
				};
	
	if(novaopcao=='1'){
		listagem_pendentes();
	};
	
				if(novaopcao=='2'){
				listagem_rejeitados();
				};
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
		 	
			}
            
        },
        error:function(e){
          window.alert('Erro de conexão com o banco de dados!!');
        }
    })
    
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
	var a2="<button type=\"button\" data-icon=\"check\" name=\"bautorizadas\" id=\"bautorizadas\" onClick=\"mudapagina(0)\" style=\"width:90%; margin-left: auto;margin-right: auto; font-size:9px; background-color:#66FF66\">Aprovadas</button>";
	var p1="<button type=\"button\" data-icon=\"check\" name=\"bpendentes\" id=\"bpendentes\" onClick=\"mudapagina(1)\" style=\"width:90%; margin-left: auto;margin-right: auto; font-size:9px\">Pendentes</button>";
	var r1="<button type=\"button\" data-icon=\"check\" name=\"brejeitadas\" id=\"brejeitadas\" onClick=\"mudapagina(2)\" style=\"width:90%; margin-left: auto;margin-right: auto; font-size:9px\">Rejeitadas</button>";
	var txttopoA = "";
	txttopoA+="<table width='95%' border='0' align='center' cellpadding='0' cellspacing='0' class='style17'>";    
	txttopoA+="<tr>";                                                                                             
	txttopoA+="<td width='12%'><div align='center'><span class='style17'>Nr AETC</span></div></td>";              
	txttopoA+="<td width='12%'><div align='center'><span class='style17'>Cód Veic</span></div></td>";             
	txttopoA+="<td width='15%' align='center'><div><span class='style17'>Placa</span></div></td>";                
	txttopoA+="<td width='13%'><div align='center'><span class='style17'>Data_Evento</span></div></td>";            
	txttopoA+="<td width='15%'><div align='center'><span class='style17'>Exibir</span></div></td>";               
	txttopoA+="<td width='15%'><div align='center'><span class='style17'>Reagendar</span></div></td>";            
	txttopoA+="</tr>";                                                                                            
	txttopoA+="</table>";                                                                                        

    $.ajax({
		url:'http://179.131.10.28/ccp_pmpinda/consultaVeiculos.php',
        dataType:'json',
		type:'POST',
		data:{idPessoa: cod_pessoa},
		   
        success: function(ra) {
        if(!ra){
				
				 	window.alert("Não possui AETC aprovada(s)!!");
	
						
					};	
            var total = ra.length;
					
            var i;
            var postagensa = "";
            
            for(i=0;i<total;i++){
                	console.log(ra[i].id_veiculo);
					console.log(ra[i].dt_original);
				
		postagensa+="<table width='95%' border='0' align='center' cellpadding='0' cellspacing='0' >";
    	postagensa+="<tr>";
		postagensa+="<td width='12%' align='center'><div><span id='texidaetc' class='style17'>" + ra[i].id_aetc + "</span></div></td>";
		postagensa+="<td width='12%' align='center'><div><span class='style17'>" + ra[i].id_veiculo + "</span></div></td>";
    	postagensa+="<td width='15%' align='center'><div><span class='style17'>" + ra[i].placa + "</span></div></td>";
    	postagensa+="<td width='13%' align='center'><div><span class='style17' id='ddd'>" + ra[i].dt_original + "</span></div></td>";
		postagensa+="<td width='15%' align='center'><div><span class='style17'><button name='btn101' id='btn101' type='button' class='ui-btn ui-shadow ui-corner-all ui-icon-eye ui-btn-icon-notext' onclick='exibe_aetc("+ra[i].id_aetc+")'>Exibir</button></span></div></td>";
		postagensa+="<td width='15%' align='center'><div><span class='style17'><button name='btn10' id='btn10' type='button' class='ui-btn ui-shadow ui-corner-all ui-icon-ok ui-btn-icon-notext' onclick='reagendar("+ra[i].id_aetc+");teste("+ra[i].dt_original+");'>Reagendar</button></span></div>";
		postagensa+="<input name='dt_orig' id='dt_orig' type='hidden' value='"+ra[i].dt_original+"'></td>";
    	postagensa+="</tr>";
    	postagensa+="</table>";
		
		$("#lista_autorizados").html(postagensa);
	  	$("#tabelatopo").html(txttopoA)
		$("#lista_autorizados").show();
		$("#lista_rejeitados").hide();
		$("#lista_pendentes").hide();
		$("#reagenda").hide();
		$("#sit").show();
		$("#ba0").html(a2);
		$("#ba0").show();
		$("#bp1").html(p1);
		$("#bp1").show();
		$("#br2").html(r1);
		$("#br2").show();
		
       // localStorage.setItem('dataoriginal',ra[i].dt_original);                
            } 
        
    },
        error:function(e){
        window.alert('Houve um erro de conexão com o banco de dados!!')
    }
    })
}
function listagem_pendentes(){
    
    	var cod_pessoa=localStorage.getItem('Cod');
    	var id=0;
	var p;
	var a1="<button type=\"button\" data-icon=\"check\" name=\"bautorizadas\" id=\"bautorizadas\" onClick=\"mudapagina(0)\" style=\"width:90%; margin-left: auto;margin-right: auto; font-size:9px\">Aprovadas</button>";
	var p2="<button type=\"button\" data-icon=\"check\" name=\"bpendentes\" id=\"bpendentes\" onClick=\"mudapagina(1)\" style=\"width:90%; margin-left: auto;margin-right: auto; font-size:9px; background-color:#FFFF33\">Pendentes</button>";
	var r1="<button type=\"button\" data-icon=\"check\" name=\"brejeitadas\" id=\"brejeitadas\" onClick=\"mudapagina(2)\" style=\"width:90%; margin-left: auto;margin-right: auto; font-size:9px\">Rejeitadas</button>";
	var txttopoP = "";
	txttopoP+="<table width='95%' border='0' align='center' cellpadding='0' cellspacing='0' class='style17'>";    
	txttopoP+="<tr>";                                                                                             
	txttopoP+="<td width='10%'><div align='center'><span class='style17'>Nr AETC</span></div></td>";              
	txttopoP+="<td width='10%'><div align='center'><span class='style17'>Cód Veic</span></div></td>";             
	txttopoP+="<td width='24%' align='center'><div><span class='style17'>Placa</span></div></td>";                
	txttopoP+="<td width='10%'><div align='center'><span class='style17'>Toneladas</span></div></td>";            
	txttopoP+="<td width='20%'><div align='center'><span class='style17'>Exibir</span></div></td>";               
	txttopoP+="</tr>";                                                                                            
	txttopoP+="</table>"; 
	
    $.ajax({
		url:'http://179.131.10.28/ccp_pmpinda/consultaVeiculos_vp.php',
        dataType:'json',
		type:'POST',
		data:{idPessoa: cod_pessoa},
		   
        success: function(p) {
			if(!p){
				
				 	window.alert("Não possui AETC pendente(s)!!");
					
					
						
					};
			
            var totalp = p.length;
			
			
            var j;
            var postagensp = "";
            
            for(j=0;j<totalp;j++){
                // console.log(p[j].id_veiculo);
				postagensp+="<table width='90%' border='0' align='center' cellpadding='0' cellspacing='0' >";
    	postagensp+="<tr>";
	postagensp+="<td width='10%'><div align='center'><span id='texidaetc' class='style17'>" + p[j].id_aetc + "</span></div></td>";
	postagensp+="<td width='10%'><div align='center'><span class='style17'>" + p[j].id_veiculo + "</span></div></td>";
    	postagensp+="<td width='24%'><div align='center'><span class='style17'>" + p[j].placa + "</span></div></td>";
    	postagensp+="<td width='19%'><div align='center'><span class='style17'>" + p[j].pesomax + "</span></div></td>";
	postagensp+="<td width='20%'><div align='center'><span class='style17'><button name='btn10' id='btn10' type='button' class='ui-btn ui-shadow ui-corner-all ui-icon-eye ui-btn-icon-notext' onclick='exibe_aetc("+p[j].id_aetc+")'>Exibir</button></span></div></td>";
    	postagensp+="</tr>";
    	postagensp+="</table>";
          				
              $("#lista_autorizados").html(postagensp);
			  $("#tabelatopo").html(txttopoP)
              $("#lista_autorizados").show();
			  	$("#lista_rejeitados").hide();
			  	$("#lista_pendentes").hide();
			  	$("#sit").show();
				$("#ba0").html(a1);
				$("#ba0").show();
				$("#bp1").html(p2);
				$("#bp1").show();
				$("#br2").html(r1);
				$("#br2").show();
                        
            } 
        
    },
        error:function(e){
        window.alert('Houve um erro de conexão com o banco de dados!!')
    }
    })
}
function listagem_rejeitados(){
    
    var cod_pessoa=localStorage.getItem('Cod');
    var id=0;
	var a1="<button type=\"button\" data-icon=\"check\" name=\"bautorizadas\" id=\"bautorizadas\" onClick=\"mudapagina(0)\" style=\"width:90%; margin-left: auto;margin-right: auto; font-size:9px\">Aprovadas</button>";
	var p1="<button type=\"button\" data-icon=\"check\" name=\"bpendentes\" id=\"bpendentes\" onClick=\"mudapagina(1)\" style=\"width:90%; margin-left: auto;margin-right: auto; font-size:9px\">Pendentes</button>";
	var r2="<button type=\"button\" data-icon=\"check\" name=\"brejeitadas\" id=\"brejeitadas\" onClick=\"mudapagina(2)\" style=\"width:90%; margin-left: auto;margin-right: auto; font-size:9px; background-color:#FF0000\">Rejeitadas</button>";
	var txttopoR = "";
	txttopoR+="<table width='95%' border='0' align='center' cellpadding='0' cellspacing='0' class='style17'>";    
	txttopoR+="<tr>";                                                                                             
	txttopoR+="<td width='10%'><div align='center'><span class='style17'>Nr AETC</span></div></td>";              
	txttopoR+="<td width='10%'><div align='center'><span class='style17'>Cód Veic</span></div></td>";             
	txttopoR+="<td width='24%' align='center'><div><span class='style17'>Placa</span></div></td>";                
	txttopoR+="<td width='10%'><div align='center'><span class='style17'>Toneladas</span></div></td>";            
	txttopoR+="<td width='20%'><div align='center'><span class='style17'>Exibir</span></div></td>";               
	txttopoR+="</tr>";                                                                                            
	txttopoR+="</table>"; 
    
    $.ajax({
		url:'http://179.131.10.28/ccp_pmpinda/consultaVeiculos_vr.php',
        dataType:'json',
		type:'POST',
		data:{idPessoa: cod_pessoa},
		   
        success: function(re) {
        if(!re){
				
				 	window.alert("Não possui AETC rejeitada(s)!!");
						
					};	
            var totalre = re.length;
			
			
            var k;
            var postagensre = "";
            
            for(k=0;k<totalre;k++){
                // console.log(re[k].id_veiculo);
	postagensre+="<table width='90%' border='0' align='center' cellpadding='0' cellspacing='0' >";
    	postagensre+="<tr>";
	postagensre+="<td width='10%'><div align='center'><span id='texidaetc' class='style17'>" + re[k].id_aetc + "</span></div></td>";
	postagensre+="<td width='10%'><div align='center'><span class='style17'>" + re[k].id_veiculo + "</span></div></td>";
    	postagensre+="<td width='24%'><div align='center'><span class='style17'>" + re[k].placa + "</span></div></td>";
    	postagensre+="<td width='19%'><div align='center'><span class='style17'>" + re[k].toneladas + "</span></div></td>";
	postagensre+="<td width='20%'><div align='center'><span class='style17'><button name='btn10' id='btn10' type='button' class='ui-btn ui-shadow ui-corner-all ui-icon-eye ui-btn-icon-notext' onclick='exibe_aetc("+re[k].id_aetc+")'>Exibir</button></span></div></td>";
    	postagensre+="</tr>";
	postagensre+="</table>";
          				
              			$("#lista_rejeitados").html(postagensre);
			  	$("#tabelatopo").html(txttopoR)
              			$("#lista_rejeitados").show();
			  	$("#lista_autorizados").hide();
			  	$("#lista_pendentes").hide();
			    	$("#sit").show();
               			$("#ba0").html(a1);
				$("#ba0").show();
				$("#bp1").html(p1);
				$("#bp1").show();
				$("#br2").html(r2); 
				$("#br2").show();
            } 
        
    },
        error:function(e){
        window.alert('Houve um erro de conexão com o banco de dados!!')
    }
    })
}



function exibe_aetc(valor){
	
    var codaetc1=valor;
	
    $.ajax({
        url:'http://179.131.10.28/ccp_pmpinda/consulta_aetc.php',
        dataType:'json',
		type:'POST',
		data:{codaetc:codaetc1},
		   
        success: function(f) {
        	var totalf = f.length;
			var b;
			var aetctxt = "";
			var txtatencao="";
			

			
            for(b=0;b<totalf;b++){
               // console.log(f[b].id_aetc);
     		   // console.log(f[b].dia);
				// SE O VALOR FOR 0(ZERO) - STATUS PENDENTE
				if(f[b].aprovado=='0'){
		txtatencao+="<div class='atencao'>";
                txtatencao+="SEU PEDIDO DE EMISSÃO DE AUTORIZAÇÃO ESPECIAL PARA TRANSITO DE CARGA AINDA NÃO FOI ANALISADO";
               	txtatencao+="<br>";             
                txtatencao+="</div>";
		txtatencao+="<strong>Faça uma nova consulta mais tarde, pois seu pedido está na fila para análise.</strong><br>";
                txtatencao+="<p>Obrigado!</p></small>";
                txtatencao+="<div class='no-print no-mobile text-center'>"; 	
									 };
						// SE O VALOR FOR 1(UM) - STATUS APROVADO
						if(f[b].aprovado=='1'){
				txtatencao+="<div class='atencao'>";
                		txtatencao+="<p align='justify'>O veículo acima descrito está AUTORIZADO a trafegar na Zona de Restrição ao Tráfego de Caminhões – ZRTC e nas Rotas de Controle de Cargas Pesadas – RCCP, de acordo com o Decreto Municipal nº 5635 de 12 de março de 2019, respeitando os limites estabelecidos pela sinalização de trânsito conforme o Código de Trânsito Brasileiro.</p>";
               		 	txtatencao+="<br>"; 
				txtatencao+="<strong>Observações:</strong><BR>"+f[b].Anotacao+"</small>";
                		txtatencao+="</div>";
				txtatencao+="<strong>Data da Solicitação:</strong>"+f[b].dia+"<br>";
				txtatencao+="<strong>Validade:</strong>"+f[b].dt_validade+"<br>";
				txtatencao+="<strong>TÍTULO PRECÁRIO</strong> - Pode ser revogado em caso de infração da autorização ou ";
                		txtatencao+="divergência nos dados informados.</small>";
                		txtatencao+="<div class='no-print no-mobile text-center'>";	
				txtatencao+="<p>&nbsp;</p>";
              			txtatencao+="<p align='center'><strong>José Vidal de Souza França</strong> <br>";
                		txtatencao+="Secretário Adjunto de  Segurança Pública<br>";
                		txtatencao+="Autoridade de Trânsito do  Município de Pindamonhangaba<br>";
                		txtatencao+="(Assinado eletronicamente)</p>";
              			txtatencao+="<p align='left'><!-- Nº --><br>";
                  		txtatencao+="<strong>Expedido  por: </strong>"+f[b].Autori+"</p>";
					
											 };
											 // SE O VALOR FOR 2(DOIS) - STATUS REJEITADO
											 if(f[b].aprovado=='2'){
											txtatencao+="<div class='atencao'>";
                							txtatencao+="Seu pedido de AETC foi rejeitado, conforme justificativa anotada abaixo. Por favor regularize a pendencia apontada e solicite nova autorização.";
               		 						txtatencao+="<br>";             
                							txtatencao+="</div>";
									txtatencao+="<strong>ANOTAÇÃO:<BR></strong>"+f[b].Anotacao+"</small>";
                							txtatencao+="<div class='no-print no-mobile text-center'>";	
											 };
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
                aetctxt+="<!-- <div class='col-md-6'>Peso máximo: "+f[b].peso_toneladas+"<br></div> -->";
                aetctxt+="<div class='row'>";
                aetctxt+="<div class='col-md-6'>RENAVAN: "+f[b].renavan+"<br></div>";
                aetctxt+="</div>";
                aetctxt+="<div class='col-md-6'>ESPÉCIE/TIPO: "+f[b].especie+"<br></div>";
                aetctxt+="<div class='row'>";
                aetctxt+="<div class='col-md-6'>COMPOSIÇÃO: "+f[b].composicao+" Toneladas<br></div>";
                aetctxt+="</div>";
		aetctxt+="<br>";
                aetctxt+="<div class='row obs'>";
                aetctxt+="<div class='col-md-12'>&nbsp;</div>";
                aetctxt+="</div>";
                aetctxt+="<small class='atencao'>";
		aetctxt+="<span id='msg_status'></span>";
		aetctxt+="<table width='99%' border='0' align='center'>";
                aetctxt+="<tr>";
                aetctxt+="<td>&nbsp;</td>";
                aetctxt+="<td><button type='button' data-icon='check' name='btn55' id='btn55' onClick='voltarlista()' style='width:90%; margin-left: auto;margin-right: auto'>Voltar á Lista</button></td>";
                aetctxt+="</tr>";
                aetctxt+="</table>";
                aetctxt+="</div>";
                aetctxt+="</div>";
				
				
          	  		$("#lista_autorizados").hide();
			  	$("#lista_pendentes").hide();
			  	$("#lista_rejeitados").hide();
			  	$("#tabelatopo").hide();
			  	$("#rodape").hide(); 
			  	$("#btnvoltamenu").hide();
              			$("#mostrar_aetc").show();
              			$("#mostrar_aetc").html(aetctxt);
			  	$("#msg_status").html(txtatencao);
			  	$("#msg_status").show();
				$("#sit").hide();
				$("#ba0").hide();
				$("#bp1").hide();
				$("#br2").hide();
                                    }
			
                          }, 
       
    })
}

function voltarlista(){
			$("#tabelatopo").show();
			$("#rodape").show(); 
			$("#mostrar_aetc").hide();
			$("#mostrar_aetc").html("");
			$("#lista_autorizados").show();
			$("#lista_pendentes").hide();
			$("#lista_rejeitados").hide();
			$("#btnvoltamenu").show();
			  
			listagem();
	
}
          
function reagendar(aetc) {
	var txtreagenda="";
	var controle = aetc;
	var diaorig = localStorage.getItem('data_antiga');
	  console.log(aetc);
	  console.log(diaorig);
				txtreagenda+="<table width='90%' border='0' align='center'>";
				txtreagenda+="<tr>";
				txtreagenda+="<td>Nr da AETC: "+aetc+"</td>";
				txtreagenda+="</tr>";
				txtreagenda+="<tr>";
				txtreagenda+="<td>Data Original:  <span id='dataold'> </span></td>";
				txtreagenda+="</tr>";
				txtreagenda+="<tr>";
				txtreagenda+="<td>Data Reagendada:  <input type='date' name='novadata' id='novadata'></td>";
				txtreagenda+="</tr>";
				txtreagenda+="<tr>";
				txtreagenda+="<td colspan='2'>Justificativa:";
				txtreagenda+="<textarea name='textfield6' cols='35' rows='4' id='textfield6' style='border:solid'></textarea></td>";
				txtreagenda+="</tr>";
				txtreagenda+="<tr>";
				txtreagenda+="<td colspan='2'><button name='btn10' id='btn10' type='button' class='ui-btn ui-shadow ";
				txtreagenda+="ui-corner-all ui-icon-eye' onclick='reagenda("+controle+")'>Confirmar</button></td>";
				txtreagenda+="</tr>";
				txtreagenda+="<tr>";
				txtreagenda+="<td colspan='2'>&nbsp;</td>";
				txtreagenda+="</tr>";
				txtreagenda+="</table>";

				$("#lista_autorizados").hide();
			    	$("#lista_pendentes").hide();
			    	$("#lista_rejeitados").hide();
				$("#tabelatopo").hide();
				$("#menu_situacao").hide();
				$("#reagenda").html(txtreagenda);
				$("#reagenda").show();
				
}

function reagenda(ida){
	var par=ida;
	var controle;
	var ndta=document.getElementById('novadata').value;
	var opcao3=document.getElementById('textfield6').value;
	var data_antes;
	// var data_antes = document.getElementById('dt_orig').value;	
	console.log(data_antes);
	$.ajax({
        url:'http://179.131.10.28/ccp_pmpinda/reagenda.php',
        dataType:'json',
		type:'POST',
		data:{controle:par
				,opcao1:opcao3
				,dtnova:ndta
				,datavelha:document.getElementById('dt_orig').value},
		
       success:function(w){  
		  
	},
		
	    error:function(e){
	  	  
	   }
})
	
	window.alert("Solicitação efetuado com sucesso!! Aguardar a aprovação.");
	
	listagem();
}

function teste(vr){
   var data1 = document.getElementById('dt_orig').value;
   // window.alert(data1);
   
   localStorage.setItem('data1',+new Date);
   
   $("#dataold").html(data1);    
	
}

