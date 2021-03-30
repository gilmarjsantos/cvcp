/*
********************************************************
********** Autor: Gilmar Jesus dos Santos     **********
********** Url: http://www.gilmarjesus.com    **********
********** Email: gilmarjsantos@gmail.com     **********
********************************************************
*/
window.onload = function () {

	// mostrar o nome do usuario logado
	
 	var Nome = localStorage.getItem('Nome');
    var nome = "Nome: " + Nome + "<br>";
	var Codigo = localStorage.getItem('Cod');
    var codigo = "Código: " + Codigo + "<br>";
    
    $("#Nome").html(nome);
	$("#Codigo").html(codigo);
		
}


function combo(){
							   
    var cod_pessoa=localStorage.getItem('Cod');
    var id=0;
    
    $.ajax({
        url:'http://179.131.10.28/ccp_pmpinda/consultaVeiculos.php',
        dataType:'json',
		type:'POST',
		data:{idPessoa: cod_pessoa},
		   
        success: function(r) {
        	
            var total = r.length;
            var i;
            var postagens1 = "";
			var postagens2 = "";
			var postagens3 = "";
			
			 postagens1+="<select name='SelecPlaca' size='1' id='SelecPlaca'>";
             postagens1+="<option selected value='1'>Selecione uma Placa</option>";
			 

                  for(i=0;i<total;i++){
              // console.log(r[i].id_veiculo);
   	               
				    postagens2+="<option value='" + r[i].id_veiculo + "'>" + r[i].placa + "</option>"+ "<br>";
			                          }
			      postagens3+="</select>";
				 $("#Selecao").html(postagens1 + postagens2 + postagens3);
                              },
        error:function(e){
        window.alert('Houve um erro de conexão com o banco de dados!!');
             }
	     })
                 }

function cadastroaetc(){
	$.ajax({
        url:'http://179.131.10.28/ccp_pmpinda/autorizacao_add.php',
        dataType:'json',
        type:'POST',
        data:{hiddenplaca: $("#hiddenplaca").val(),
			  SelecPlaca: $("#SelecPlaca").val(),
		  txtTipoAETC: $("#txtTipoAETC").val(),
		   texcnhmotorista: $("#texcnhmotorista").val(),
	     textdataevento: $("#textdataevento").val(),
		  texthoraevento: $("#texthoraevento").val(),
		       textpeso: $("#textpeso").val(),
	      foto_nota: $("#foto_nota").val()}
			 
	   });	
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


function respostaSair(r){
    
    if (r==1) {
        
        localStorage.clear();

        $("#user").hide();
        $("#logon").show();
    }
  
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
	
	window.alert(localStorage.getItem('nomeFoto'));
	
	// upload();
	            
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
    //$("#pub").hide();
     $("#foto").show();
    $("#exibeFoto").attr('src',foto);
    
    localStorage.setItem('foto',foto);
    nomeFoto();	
	
// 	upload();
            
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

    localStorage.setItem('nomeFoto',nomeFoto+'.jpg');
	document.getElementById('foto_nome').value='nomeFoto',nomeFoto1+'.jpg';
}

function uploadNF(){
 
 var foto = localStorage.getItem('foto');   
 var nomeFoto = localStorage.getItem('nomeFoto');
 var cod = localStorage.getItem('Cod');
    
 var options = new FileUploadOptions();
 options.fileKey = "file";
 options.fileName = nomeFoto;
 options.mimeType = "image/jpeg";
    
 var params = new Object();
 params.value1 = cod;
 params.value2 = "Foto";
 params.value3 = "Foto";
 
 options.params = params;
 options.chunkedMode = false;

var ft1 = new FileTransfer();
 ft1.upload(foto, "http://179.131.10.28/ccp_pmpinda/publica.php", function(){
     $("#foto").hide();

	 
 }, function(){
 
     window.alert('Erro ao tentar publicar! Tente Novamente!');
            
 }, options);
}


function publicacoes(){
    
    var cod=localStorage.getItem('Cod');
    var id=0;
    
    $.ajax({
        url:'http://179.131.10.28/ccp_pmpinda/consultaVeiculos.php',
        dataType:'json',
        success: function(r) {
            //console.log(r);
            var total = r.length;
            var i;
            var postagens = "";
            
            for(i=0;i<total;i++){
                console.log(r[i].id_pessoa);
                postagens+="<div style='width=100%;text-align:center;margin-top:20px'><img class='perfil' src='http://179.131.10.28/ccp_pmpinda/uploads/" + r[i].img_user + "'>";
                postagens+="<br>" + r[i].usuario + "</div>";
                postagens+="<div style='width:100%'><img src='http://179.131.10.28/ccp_pmpinda/uploads/" + r[i].imagem + "' width=100%></div>";
                
                if (cod==r[i].id_pessoa) {
                        id=r[i].id_foto;
                        postagens+="<div style='width=100%;margin-top:5px'><a href='#' class='ui-btn ui-shadow ui-corner-all ui-icon-delete ui-btn-icon-notext' onclick=excluir(" +id + ")>Delete</a></div>"; 
                    }
                
                postagens+="<div style='width:100%;text-align:center;margin-top:10px'><span>" + r[i].descricao + "</span></div>";
                
                $("#pub").html(postagens);
                $("#pub").show();
        
                
            }
        
    },
        error:function(e){
        window.alert('Houve um erro de conexão com o banco de dados!!')
    }
    })
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

