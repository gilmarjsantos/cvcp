/*  veiculos_list.html
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
	$("#detalhes_veiculo").hide();
  	$("#aetc_veiculo").hide();
	
	
	
	var Nome = localStorage.getItem('Nome');
	var nome = "Nome: " + Nome + "<br>";
	var Codigo = localStorage.getItem('Cod');
    	var codigo = "Código: " + Codigo + "<br>";
    
    	$("#Nome").html(nome);
	$("#Codigo").html(codigo);

  listagem();
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
	


function listagem(){  // CONSULTA VEICULOS GERAL

    var cod_pessoa=localStorage.getItem('Cod');
    var id=0;
    
    $.ajax({
        url:'http://179.131.10.28/ccp_pmpinda/lista_veiculos.php',
        dataType:'json',
		type:'POST',
		data:{idPessoa: cod_pessoa},
		   
        success: function(r) {
        	
            var total = r.length;
            var i;
            var postagens = "";
            
            for(i=0;i<total;i++){
               //  console.log(r[i].id_veiculo);
				postagens+="<table width='90%' border='0' align='center' cellpadding='0' cellspacing='0' >";
    	postagens+="<tr>";
	postagens+="<td width='25%'><div align='center'><span class='style8'>" + r[i].id_veiculo + "</span></div></td>";
    	postagens+="<td width='25%'><div align='center'><span class='style8'>" + r[i].placa + "</span></div></td>";
    	postagens+="<td width='25%'><div align='center'><span class='style8'>" + r[i].toneladas + "</span></div></td>";
	postagens+="<td width='25%'><div align='center'><button name='btn190' id='btn190' type='button' class='ui-btn ui-shadow ui-corner-all ui-icon-eye ui-btn-icon-notext' onclick='detalhar(" + r[i].id_veiculo + ")'>Detalhes</button></td>";
	postagens+="</tr>"; 
    	postagens+="</table>";
	
          				
             $("#lista").html(postagens);
             $("#lista").show();
             localStorage.setItem('Veiculo',r[i].id_veiculo);
	     localStorage.setItem('Placadoveiculo',r[i].placa);
			 
			                          
            } 
	
        
    },
        error:function(e){
        window.alert('Houve um erro de conexão com o banco de dados!!')
    }
    })
	
	     $("#listab").show();
}

function detalhar(veiculo){
     $("#topo_lista").hide();
	 $("#lista").hide();
	 $("#listab").hide();
	console.log(veiculo);
	
    var cod_pessoa=localStorage.getItem('Cod');
    var id=0;
    var veiculo1 = veiculo;
    $.ajax({
        url:'http://179.131.10.28/ccp_pmpinda/veiculos_detalhes.php',
        dataType:'json',
		type:'POST',
		data:{idPessoa: cod_pessoa,
		       idveiculo: veiculo},
		   
        success: function(d) {
        	
            var totald = d.length;
            var x;
            var postagensd1 = "";
			
            for(x=0;x<totald;x++){
                // console.log(d[x].id_veiculo);
				
	
			postagensd1+="<table width='80%' border='0' align='center'>";
			postagensd1+="<tr><td><span class='style8'>Veículo: "+d[x].id_veiculo+" </span></td></tr>";
            postagensd1+="<tr><td><span class='style8'>Lic. em Pindamonhangaba ?  ( "+d[x].licenciado_Pinda+" )</span></span></td></tr>";
            postagensd1+="<tr><td><span class='style8'>Placa: "+d[x].placa+"</span></td></tr>";
            postagensd1+="<tr><td><span class='style8'>Max Toneladas: "+d[x].toneladas+"</span></td></tr>";
            postagensd1+="<tr><td>&nbsp;</td></tr>";
            postagensd1+="</table>";	
			postagensd1+="<table width='80%' border='0' align='center'>";
            postagensd1+="<tr><td><span class='style8'>Renavan: "+d[x].renavam+"</span></td></tr>";
            postagensd1+="<tr><td><span class='style8'>Espécie / Tipo: "+d[x].especie_tp+"</span></td></tr>";
            postagensd1+="<tr><td><span class='style8'>Ano de Fabricação: "+d[x].ano_fabricacao+"</span></td></tr>";
            postagensd1+="<tr><td><span class='style8'>Marca / Modelo: "+d[x].marca_mod+"</span></td></tr>";
            postagensd1+="<tr><td><span class='style8'>Categoria: "+d[x].categoria+"</span></td></tr>";
            postagensd1+="</table>";
			postagensd1+="<table width='80%' border='0' align='center'>";
            postagensd1+="<tr>";
            postagensd1+="<td> <div align='center'>";
            postagensd1+="<button name='btn8' id='btn8' onClick='javascript:location.href=\"veiculos_list.html\"'>";
			postagensd1+="Voltar para a lista</button> <br><br>";
			postagensd1+="<button name='btn9' id='btn9' onClick='montaformaetc("+d[x].id_veiculo+")'>";
			postagensd1+="Solicitar A.E.T.C para o veículo</button>";
            postagensd1+="</div>";
	        postagensd1+="</td>";
            postagensd1+="</tr>";
            postagensd1+="</table>";
		
			
             $("#detalhes_veiculo").show();
			 $("#ficha_veiculo").html(postagensd1);
			 $("#rodape").hide();
			
            } 
        
    },
        error:function(e){
        window.alert('Houve um erro de conexão com o banco de dados!!');
    }
    })
}

function montaformaetc(veiculo){
     $("#topo_lista").hide();
	 $("#lista").hide();
	 $("#listab").hide();
	
	var cod_pessoa1=localStorage.getItem('Cod');
    var id=0;
    var veiculo2 = veiculo;
    $.ajax({
        url:'http://179.131.10.28/ccp_pmpinda/veiculos_detalhes.php',
        dataType:'json',
		type:'POST',
		data:{idPessoa: cod_pessoa1,
		       idveiculo: veiculo},
		   
        success: function(a) {
        	
            var totalz = a.length;
            var z;
            var formSolicitaAETC = "";

            for(z=0;z<totalz;z++){
 
	formSolicitaAETC+= "<table width='90%' border='0' align='center'>";
    	formSolicitaAETC+= "<tr><td class='style8'>Código do veículo: "+a[z].id_veiculo+"</td>";
	formSolicitaAETC+= "<td class='style8'>Placa: "+a[z].placa+"</td></tr>";
	formSolicitaAETC+= "<tr>";
    	formSolicitaAETC+= "<td><label>";
	formSolicitaAETC+= "<input name='textplaca' type='hidden' id='textplaca' value='"+a[z].placa+"' 'placeholder='Placa'>";
	formSolicitaAETC+= "</label></td>";
    	formSolicitaAETC+= "<td>&nbsp;</td>";
    	formSolicitaAETC+= "</tr>";
	formSolicitaAETC+= "<tr>";
	formSolicitaAETC+= "<td><span class='style8'>Tipo de A.E.T.C. </span></td>";
	formSolicitaAETC+= "<td>&nbsp;</td>";
    	formSolicitaAETC+= "</tr>";
	formSolicitaAETC+= "<tr>";
	formSolicitaAETC+= "<td colspan='2'>";
	formSolicitaAETC+= "</td>";
    	formSolicitaAETC+= "</tr>";
    	formSolicitaAETC+= "<tr>";
    	formSolicitaAETC+= "<td></td>";
    	formSolicitaAETC+= "</tr>";
    	formSolicitaAETC+= "</table>";
/*	formSolicitaAETC+= "<table width='80%' border='0' align='center'>";
    	formSolicitaAETC+= "<tr>";
    	formSolicitaAETC+= "<td width='20%' align='left'>Normal</td>";
    	formSolicitaAETC+= "<td width='10%' align='left'><input type='radio' name='RadioTipoAETC' id='RadioTipoAETC_1' value='1'>";
    	formSolicitaAETC+= "</td>";
    	formSolicitaAETC+= "<td width='70%' align='left'><h6>(Placa outra Cidade)</h6></td>";
    	formSolicitaAETC+= "</tr>";
    	formSolicitaAETC+= "<tr>";
    	formSolicitaAETC+= "<td align='left'>Especial</td>";
    	formSolicitaAETC+= "<td><input type='radio' name='RadioTipoAETC' id='RadioTipoAETC_2' value='2'></td>";
    	formSolicitaAETC+= "<td align='left'><h6>(Placa de Pinda)</h6></td>";
	formSolicitaAETC+= "</tr>";
	formSolicitaAETC+= "<tr>";
	formSolicitaAETC+= "<td><input name='txtTipoAETC' id='txtTipoAETC' type='hidden' value='0'></td>";
    	formSolicitaAETC+= "</tr>";
    	formSolicitaAETC+= "</table>";
*/
	formSolicitaAETC+= "<div id='selectpaetc'>";
	formSolicitaAETC+= "<table width='80%' border='0' align='center'>";
    	formSolicitaAETC+= "<tr>";
    	formSolicitaAETC+= "<td width='100%' align='left'><h6><span class='style8'>Normal";
    	formSolicitaAETC+= "<input type='radio' name='RadioTipoAETC' id='RadioTipoAETC_1' value='1' onClick=mostra_aetc2()>";
       	formSolicitaAETC+= "(Placa de outra Cidade)</span></h6></td>";
    	formSolicitaAETC+= "</tr>";
    	formSolicitaAETC+= "<tr>";
    	formSolicitaAETC+= "<td align='left'><h6><span class='style8'>Especial";
    	formSolicitaAETC+= "<input type='radio' name='RadioTipoAETC' id='RadioTipoAETC_2' value='2' onClick=mostra_aetc2()>";
    	formSolicitaAETC+= "(Placa de Pindamonhangaba)</span></h6></td>";
	formSolicitaAETC+= "</tr>";
	formSolicitaAETC+= "<tr>";
	formSolicitaAETC+= "<td><input name='txtTipoAETC' id='txtTipoAETC' type='hidden' value='0'></td>";
    	formSolicitaAETC+= "</tr>";
    	formSolicitaAETC+= "</table>";
	formSolicitaAETC+= "</div>";
	formSolicitaAETC+= "<div id='selectpaetc2'>";
    	formSolicitaAETC+= "<table width='80%' border='0' align='center'>";
    	formSolicitaAETC+= "<tr>";
    	formSolicitaAETC+= "<td class='style8'>CNH do Motorista </td>";
    	formSolicitaAETC+= "</tr>";
    	formSolicitaAETC+= "<tr>";
    	formSolicitaAETC+= "<td><label>";
    	formSolicitaAETC+= "<input name = 'texcnhmotorista' type='text' id='texcnhmotorista'>";
    	formSolicitaAETC+= "</label></td>";
    	formSolicitaAETC+= "</tr>";
    	formSolicitaAETC+= "<tr>";
    	formSolicitaAETC+= "<td>Data do Evento </td>";
    	formSolicitaAETC+= "</tr>";
    	formSolicitaAETC+= "<tr>";
    	formSolicitaAETC+= "<td><label>";
    	formSolicitaAETC+= "<input type='date' name='textdataevento' id='textdataevento'>";
    	formSolicitaAETC+= "</label></td>";
    	formSolicitaAETC+= "</tr>";
    	formSolicitaAETC+= "<!-- <tr>";
    	formSolicitaAETC+= "<td>Hora do Evento</td>";
    	formSolicitaAETC+= "</tr> --> ";
    	formSolicitaAETC+= "<tr>";
    	formSolicitaAETC+= "<td><label>";
    	formSolicitaAETC+= "<input type='hidden' name='texthoraevento' id='texthoraevento'>";
    	formSolicitaAETC+= "</label></td>";
    	formSolicitaAETC+= "</tr>";
    	formSolicitaAETC+= "<tr>";
    	formSolicitaAETC+= "<td>Peso Máx. em toneladas(Composição)</td>";
    	formSolicitaAETC+= "</tr>";
    	formSolicitaAETC+= "<tr>";
    	formSolicitaAETC+= "<td><label>";
    	formSolicitaAETC+= "<input type='text' name='textpeso' id='textpeso'>";
    	formSolicitaAETC+= "</label></td>";
    	formSolicitaAETC+= "</tr>";
	formSolicitaAETC+= "</table>";
    	formSolicitaAETC+= "<!-- aqui comeca a rotina que manda a foto da nota -->";
	formSolicitaAETC+= "<div id='mandaafotodanota'>";
	formSolicitaAETC+= "</div>";
	formSolicitaAETC+= "<!--  aqui termina a rotina que manda a foto da nota -->";
    	formSolicitaAETC+= "<table width='80%' border='0' align='center'>	";
    	formSolicitaAETC+= "<tr>";
    	formSolicitaAETC+= "<td></td>";
    	formSolicitaAETC+= "</tr>";
    	formSolicitaAETC+= "<tr>";
    	formSolicitaAETC+= "<td> </td>";
    	formSolicitaAETC+= "</tr>";
    	formSolicitaAETC+= "<tr>";
    	formSolicitaAETC+= "<td>  </td>";
    	formSolicitaAETC+= "</tr>";
    	formSolicitaAETC+= "<tr>";
    	formSolicitaAETC+= "<td>  </td>";
    	formSolicitaAETC+= "</tr>";
    	formSolicitaAETC+= "<tr>";
    	formSolicitaAETC+= "<td> </td>";
    	formSolicitaAETC+= "</tr>"; 
    	formSolicitaAETC+= "<tr>";
    	formSolicitaAETC+= "<td>  </td>";
    	formSolicitaAETC+= "</tr>";
    	formSolicitaAETC+= "<tr>";
    	formSolicitaAETC+= "<td>   </td>";
    	formSolicitaAETC+= "</tr> ";
    	formSolicitaAETC+= "</table>";
    	formSolicitaAETC+= "</div>";
    	formSolicitaAETC+= "<label><br>";
    	formSolicitaAETC+= "</label>";
    	formSolicitaAETC+= "<table width='70%' border='0' align='center'>";
    	formSolicitaAETC+= "<tr>";
    	formSolicitaAETC+= "<td>&nbsp;</td>";
    	formSolicitaAETC+= "<td><div align='center' id='btnsv'>";
    	formSolicitaAETC+= "<button name='btn3' id='btn3' onClick='pre_cadastro("+a[z].id_veiculo+")'>Prosseguir</button><button name='btn5' id='btn5'";         
	formSolicitaAETC+= "onClick='javascript:location.href=\"login.html\"'>Voltar</button> ";
    	formSolicitaAETC+= "</div></td>";
    	formSolicitaAETC+= "<td>&nbsp;</td>";
    	formSolicitaAETC+= "</tr>";
    	formSolicitaAETC+= "<tr>";
    	formSolicitaAETC+= "<td>&nbsp;</td>";
    	formSolicitaAETC+= "<td>&nbsp;</td>";
    	formSolicitaAETC+= "<td><span id='pub'></div></td>";
    	formSolicitaAETC+= "</tr>";
    	formSolicitaAETC+= "</table>";
	formSolicitaAETC+= "</div>";

    $("#detalhes_veiculo").hide();
	
	$("#aetc_veiculo").show();
	$("#form_aetc").html(formSolicitaAETC);
	$("#selectpaetc2").hide();
	$("#btnsv").hide();
		
	}
	
	
	
},
        error:function(e){
        window.alert('Houve um erro de conexão com o banco de dados!!')
    }
    })
}

function mostra_aetc2(){

	$("#selectpaetc2").show();
	$("#btnsv").show();

}

function pre_cadastro(veiculo_cod){
				var formSolicitaAETC2 = "";
				var veiculo=veiculo_cod;
				// console.log(veiculo);
	formSolicitaAETC2+= "<!-- Teste da Foto ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc  -->";
	formSolicitaAETC2+= "<table width = '80%' border = '0' align = 'center'>";
	formSolicitaAETC2+= "<tr>";
    formSolicitaAETC2+= "<td>Foto Nota Fiscal ou Conhecimento de Carga</td>";
    formSolicitaAETC2+= "</tr>";
    formSolicitaAETC2+= "<td>"
    formSolicitaAETC2+= "<div id='foto' class='margem-topo'>"
    formSolicitaAETC2+= "<div align='center'><img name='exibeFoto' id='exibeFoto'></div>"
    formSolicitaAETC2+= "</div>"
    formSolicitaAETC2+= "</td>"
    formSolicitaAETC2+= "<!-- Teste da Foto  ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc -->";
    formSolicitaAETC2+= "<tr>";
    formSolicitaAETC2+= "<td height = '19'>";
	formSolicitaAETC2+= "<div align='center'><button type='button' data-icon='check' name='btnenviaclrv' id='btnenviaclrv' onClick = 'publicar()'>Tirar Foto da NF</button></div></td>";
	formSolicitaAETC2+= "</tr>";
    formSolicitaAETC2+= "<tr>";
    formSolicitaAETC2+= "<td height = '19'>";
    formSolicitaAETC2+= "<input type='hidden' name='foto_nota' id='foto_nota'/>";
    formSolicitaAETC2+= "</td>";
    formSolicitaAETC2+= "</tr>";
    formSolicitaAETC2+= "<tr>";
    formSolicitaAETC2+= "<td><span id = 'pub'> </span> </td>";
	formSolicitaAETC2+= "</tr>";
	formSolicitaAETC2+= "<tr>";
    formSolicitaAETC2+= "<td><span id = 'foto'> </span> </td>";
	formSolicitaAETC2+= "</tr>";
    formSolicitaAETC2+= "<tr>";
    formSolicitaAETC2+= "<td height = '19'><div align = 'center'><p><button type = 'button' data-icon = 'check' ";
    formSolicitaAETC2+= "id = 'btnUpload' onClick = 'cadastroaetc("+ veiculo +")' style = 'width:90%; margin-left: auto;margin-right: auto'>Salvar</button>";
    formSolicitaAETC2+= "</tr>";
    formSolicitaAETC2+= "</table>";	
	formSolicitaAETC2+= "<!-- Teste da Foto  ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc -->";
    $("#mandaafotodanota").html(formSolicitaAETC2);
	$("#mandaafotodanota").show();
	$("#btnUpload").hide();
	$("#btn3").hide();
	//$("#btn5").hide(); 
	
}
// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// PROCESSA O PEDIDO DE AETC
function cadastroaetc(veiculo_cod){
	          var veiculoid = '';
			  var Placa='';
		      var txtTipoAETC='';
		      var texcnhmotorista='';
	          var textdataevento='';
		      var texthoraevento='';
		      var textpeso='';
	          var foto_nota='';
			  var id_pesso='';
			  
	$.ajax({
        url:'http://179.131.10.28/ccp_pmpinda/autorizacao_add.php',
        dataType:'json',
        type:'POST',
        data:{veiculoid: veiculo_cod,
			  Placa: $("#textplaca").val(),
		  txtTipoAETC: $("#txtTipoAETC").val(),
		   texcnhmotorista: $("#texcnhmotorista").val(),
	     textdataevento: $("#textdataevento").val(),
		  texthoraevento: $("#texthoraevento").val(),
		       textpeso: $("#textpeso").val(),
	      foto_nota: $("#foto_nota").val(),
		  descricao:"FotoNF",
		  id_pessoa: localStorage.getItem('Cod')}
		 
	   });
	
	
	uploadN();   // chama a funcao que envia a foto
	
		
}
            
function fazFotonota(){
    
     var opFoto = {
     quality:50,
     sourceType:Camera.PictureSourceType.CAMERA,
     destinationType:Camera.DestinationType.FILE_URI,
     saveToPhotoAlbum:true,
     encodingType:Camera.EncodingType.JPEG,
     mediaType:Camera.MediaType.PICTURE,
     targetWidth:1200,
     targetHeight:800
     }
            
     navigator.camera.getPicture(fotoSucesso,fotoErro,opFoto);            
}
            
function fotoSucesso(foto) {

    $("#foto").show();
    $("#exibeFoto").attr('src',foto);
    localStorage.setItem('foto',foto);
	$("#fotodanota").html("<img src='" + foto + "' width=150px height=150px>");
    nomeFoto();
	
	$("#btnUpload").show();
	$("#btnenviaclrv").html('Trocar Foto do CLRV/Documentos');  // Muda o nome do botão
	$("#btn3").hide();
		            
}


function fotoErro(e) {
    window.alert('Erro ao tentar acessar a câmera! Tente Novamente!');
}


function abrirGaleria(){
            
    var opFoto = {
    quality:50,
    sourceType:Camera.PictureSourceType.PHOTOLIBRARY,
    destinationType:Camera.DestinationType.FILE_URI,
    mediaType:Camera.MediaType.PICTURE
    }
            
    navigator.camera.getPicture(galeriaSucesso,galeriaErro, opFoto);
}


            
function galeriaSucesso(foto){
    $("#exibeFoto").attr('src', foto);
    $("#foto").show();
    $("#exibeFoto").attr('src',foto);
    
    localStorage.setItem('foto',foto);
    nomeFoto();	
	$("#btnUpload").show();
	$("#btnenviaclrv").html('Trocar Foto do CLRV/Documentos');  // Muda o nome do botão
    $("#btn3").hide();
       
}
            
function galeriaErro(e) {
    window.alert('Houve um erro ao tentar acessar a galeria! Tente Novamente!');
}


function nomeFoto() {
    var letras = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz';
    var nomeFoto = '';
    for (var i = 0; i < 55; i++) {
        var rnum = Math.floor(Math.random() * letras.length);
        nomeFoto += letras.substring(rnum, rnum + 1);
		
    }
	
	// nomeFoto += $("#textplaca").val();

    localStorage.setItem('nomeFoto',nomeFoto+'.jpg');
	document.getElementById('foto_nota').value = nomeFoto+'.jpg'; // Grava no campo oculto para depois enviar para o db 
}

function uploadN(){
 
 var foto = localStorage.getItem('foto');   
 var nomeFoto = localStorage.getItem('nomeFoto');
 var cod = localStorage.getItem('Cod');
 var veic=localStorage.getItem('Placadoveiculo');
 
    
 var options = new FileUploadOptions();
 options.fileKey="file";
 options.fileName=nomeFoto;
 options.mimeType="image/jpeg";
    
 var params = new Object();
 params.value1=cod;
 params.value2="Foto_NF";
 params.value3=veic;
 
 options.params = params;
 options.chunkedMode = false;

var ft1 = new FileTransfer();
 ft1.upload(foto, "http://179.131.10.28/ccp_pmpinda/publica.php", function(){
     $("#foto").hide();
	 
	  window.alert('Foto enviada com sucesso!');
	  window.alert('AETC cadastrada com sucesso!!');
	  
	   $("#mandaafotodanota").html("");
	   $("#mandaafotodanota").hide();
	   $("#btnUpload").hide();
	  
				}, function(){
 
     window.alert('Erro ao tentar publicar! Tente Novamente!');
            
 }, options);
 
 $("#btnenviaclrv").hide();
 $("#btnUpload").hide();
 $("#mandaafotodanota").hide();	
 $("#aetc_veiculo").hide();	
 $("#form_aetc").hide();
 $("#topo_lista").show();	
 $("#lista").show();
 $("#listab").show();
  
}

function publicar(){
    navigator.notification.confirm(
    'Nova foto ou abrir a galeria?',
    resposta,
    'Publicação',
    ['Galeria','Câmera']
    )
}
            
function resposta(r){
            
    if (r==2){
        fazFotonota();
    }
	else if(r==1){
		abrirGaleria();
    }
}
