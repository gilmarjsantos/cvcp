/*
********************************************************
********** Autor: Gilmar Jesus dos Santos     **********
********** Url: http://www.gilmarjesus.com    **********
********** Email: gilmarjsantos@gmail.com     **********
********************************************************
*/
window.onload = function () {
	var SituacaoLog = localStorage.getItem('Situacao');

if(SituacaoLog=='1'){
	$("#ocultar").hide();
	$("#user").show();
	$("#confirma_cadastro").hide();
	$("#confirma_cadastro_veiculo").hide();
	$("#botoes_fiscal").hide();
	$("#botoes_autoriza").hide();
	$("#botoes_usuario").show();
	$("#btnsv").hide();
    	$("#btn333").hide();
   	$("#botaoenviarocrlv").hide();

	    
	inicio();
}else{  // fecha if abre else

    	$("#ocultar").hide();
 	$("#confirma_cadastro").hide();
    	$("#user").hide();
	$("#novocadastro").hide();
	$("#cadfisico").hide();
	$("#cadjuridico").hide();
    	$("#btnspf").hide();
	$("#btnspj").hide();
	$("#btnsv").hide();
	$("#licforadepinda").hide();
	$("#licempinda").hide();
	$("#txtCLRV").hide();
	$("#txtDoc").hide();
	$("#foto").hide();	
	$("#confirma_cadastro_veiculo").hide();
	$("#botoes_fiscal").hide();
	$("#botoes_autoriza").hide();
	$("#btn333").hide();
	
};  // fecha o else


	// mostrar o nome do usuario logado
	
 	var Nome = localStorage.getItem('Nome');
    var nome = "Nome: " + Nome + "<br>";
	var Codigo = localStorage.getItem('Cod');
    var codigo = "Código: " + Codigo + "<br>";
    
    $("#Nome").html(nome);
	$("#Codigo").html(codigo);
	
	// mostrar o nome do usuario logado	
  
  var verificafiscal =  localStorage.getItem('Tipo');
		
		if (!verificafiscal){  
	
	    $("#botoes_usuario").hide();
		$("#botoes_fiscal").hide();
		$("#botoes_autoriza").hide();
		$("#botao_botoes").hide();
		}                     
		

    $("#btn1").attr('disabled','disabled');
    
}


function verifica_versao(){
   var codigo_da_versao='1';
    $.ajax({
        url:'http://179.131.10.28/ccp_pmpinda/versao.php',
        dataType:'json',
        type:'POST',
        data:{c_versao: codigo_da_versao},
        success:function(t){
           var retorno = t.versao;
				localStorage.setItem('Versao',retorno);
                           },
        error:function(e){
          window.alert('Erro de conexão com o banco de dados!!');
                           }
            })
	
	
	var ver = 'V '+localStorage.getItem('Versao');
	
	$("#versaoapp").html(ver);
    
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

function verificaUsuario(){
    
    $.ajax({
        url:'http://179.131.10.28/ccp_pmpinda/consultaUser.php',
        dataType:'json',
        type:'POST',
        data:{usuario: $("#usuario").val(),
             senha: $("#senha").val()},
        success:function(r){
            if (r.Resp==0) {
              window.alert('Usuário e ou senha não encontrados!!');
            }
            
            else if(r.Resp==1){
				localStorage.setItem('Situacao',r.Resp);
                localStorage.setItem('Cod',r.Cod);
				localStorage.setItem('Tipo',r.Tipo);
                localStorage.setItem('Nome',r.Nome);
			    localStorage.setItem('Cpf_Cnpj',r.Cpf_Cnpj);
				localStorage.setItem('Cnh',r.Cnh);
				localStorage.setItem('Email',r.Email);
                localStorage.setItem('Telefone',r.Telefone);
				localStorage.setItem('Cep',r.Cep);
				localStorage.setItem('Endereco',r.Endereco);
				localStorage.setItem('Numero',r.Numero);
				localStorage.setItem('Complemento',r.Complemento);
				localStorage.setItem('Cidade',r.Cidade);
				localStorage.setItem('Estado',r.Estado);
				localStorage.setItem('Bairro',r.Bairro);
				localStorage.setItem('Senha',r.Senha);
				localStorage.setItem('Ativo',r.Ativo);
				localStorage.setItem('Nome_Repres',r.Nome_Repres);
				localStorage.setItem('Cpf_Repres',r.Cpf_Repres);
			           		   
		 	inicio();

			}
            
        },
        error:function(e){
          window.alert('Erro de conexão com o banco de dados!!','','Erro');
        }
    })
    
}



function nivel(){
		var verificafiscal =  localStorage.getItem('Tipo');
		
		if (!verificafiscal){
	
	    $("#botoes_usuario").hide();
        $("#botoes_fiscal").hide();
        $("#botoes_autoriza").hide();
		$("#botao_botoes").hide();
		}
		
    	if ( verificafiscal == '1'){
	
	    $("#botoes_usuario").show();
        $("#botoes_fiscal").hide();
        $("#botoes_autoriza").hide();
		$("#botao_botoes").show();
		}
		
			if ( verificafiscal == '2'){
	
        $("#botoes_usuario").show();
        $("#botoes_fiscal").hide();
        $("#botoes_autoriza").hide();
		$("#botao_botoes").show();
		}
	
	if ( verificafiscal == '3'){

        $("#botoes_usuario").hide();
        $("#botoes_fiscal").show();
        $("#botoes_autoriza").hide();
		$("#botao_botoes").show();

	                           }
							   
    if ( verificafiscal == '4'){

        $("#botoes_usuario").hide();
        $("#botoes_fiscal").show();
        $("#botoes_autoriza").show();
		$("#botao_botoes").show();
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
	$("#rodape").hide();
	
	
	
		nivel();
			   
                  }
	
function fim(){
    
    $("#user").hide();
    $("#logon").show();
    
  
	$("#rodape").show();
	
	var verificafiscal =  localStorage.getItem('Tipo');
    	if (!verificafiscal){
	
	    $("#botoes_usuario").hide();
        $("#botoes_fiscal").hide();
        $("#botoes_autoriza").hide();
		$("#botao_botoes").hide();
		}
		
    	if ( verificafiscal == '1'){
	
	    $("#botoes_usuario").show();
        $("#botoes_fiscal").hide();
        $("#botoes_autoriza").hide();
		$("#botao_botoes").show();
		}
		
			if ( verificafiscal == '2'){
	
        $("#botoes_usuario").show();
        $("#botoes_fiscal").hide();
        $("#botoes_autoriza").hide();
		$("#botao_botoes").show();
		}
	
	if ( verificafiscal == '3'){

        $("#botoes_usuario").hide();
        $("#botoes_fiscal").show();
        $("#botoes_autoriza").hide();
		$("#botao_botoes").show();

	                           }
							   
    if ( verificafiscal == '4'){

        $("#botoes_usuario").hide();
        $("#botoes_fiscal").show();
        $("#botoes_autoriza").show();
		$("#botao_botoes").show();
	                           }					
							   
                  }
	
function cadastraPessoaFisica(){
	
	if($("#txtnome1").val()=="" || $("#txtcpfcnpj1").val()=="" || $("#txtnrcnh1").val()=="" ||  $("#txtemailpf").val()=="" || $("#txttelefone1").val()=="" || $("#txtcep1").val()=="" ||  $("#txtlogradouro1").val()=="" || $("#txtnumero1").val()=="" || $("#txtcidade1").val()=="" || $("#txtestado1").val()=="" || $("#txtbairro1").val()=="" || $("#txtsenha1").val()=="") {
        
        window.alert("Existem campos em branco. Verifique dados cadastrados!!");
	
		return false;
    };

$.ajax({
        url:'http://179.131.10.28/ccp_pmpinda/pessoaFAdd.php',
        dataType:'json',
        type:'POST',
        data:{tipo: $("#txtcategoria1").val(),
			  nome: $("#txtnome1").val(),
		  cpf_cnpj: $("#txtcpfcnpj1").val(),
			   cnh: $("#txtnrcnh1").val(),
		     email: $("#txtemailpf").val(),
		  telefone: $("#txttelefone1").val(),
		       cep: $("#txtcep1").val(),
	      endereco: $("#txtlogradouro1").val(),
		    numero: $("#txtnumero1").val(), 
	   complemento: $("#txtcomplemento1").val(), 	
	        cidade: $("#txtcidade1").val(), 
	        estado: $("#txtestado1").val(), 
	        bairro: $("#txtbairro1").val(), 
             senha: $("#txtsenha1").val()}
			 
			 
	   });

localStorage.clear();
confirmaCadastropf();
	
}

function cadastraPessoaJuridica(){
	
	if($("#txtnome2").val()=="" || $("#txtcpfcnpj2").val()=="" || $("#txtemailpj").val()=="" || $("#txttelefone2").val()=="" || $("#txtcep2").val()=="" ||  $("#txtlogradouro2").val()=="" || $("#txtnumero2").val()=="" || $("#txtcidade2").val()=="" || $("#txtestado2").val()=="" || $("#txtbairro2").val()=="" || $("#txtsenha2").val()=="") {
        
        window.alert("Existem campos em branco. Verifique dados cadastrados!!");
				
		return false;
    };

$.ajax({
        url:'http://179.131.10.28/ccp_pmpinda/pessoaJAdd.php',
        dataType:'json',
        type:'POST',
        data:{tipo2: $("#txtcategoria2").val(),
			  nome2: $("#txtnome2").val(),
		  cpf_cnpj2: $("#txtcpfcnpj2").val(),
			   cnh2: $("#txtnrcnh2").val(),
		     email2: $("#txtemailpj").val(),
		  telefone2: $("#txttelefone2").val(),
		       cep2: $("#txtcep2").val(),
	      endereco2: $("#txtlogradouro2").val(),
		    numero2: $("#txtnumero2").val(), 
	   complemento2: $("#txtcomplemento2").val(), 	
	        cidade2: $("#txtcidade2").val(), 
	        estado2: $("#txtestado2").val(), 
	        bairro2: $("#txtbairro2").val(), 
             senha2: $("#txtsenha2").val(),
        nome_repres2: $("#txtrepresentante2").val(), 	   
		 cpf_repres2: $("#txtcpfrepres").val()}
			 
			 
	   });

localStorage.clear();
confirmaCadastropj();
	
}

function confirmaCadastropf(){
     $("#confirma_cadastro").show();
	 $("#selecionacategoria").hide();
	 $("#cadfisico").hide();
	 $("#btnspf").hide();
	 
	 localStorage.clear();
	 
	 
}
	
function confirmaCadastropj(){
     $("#confirma_cadastro").show();
	 $("#selecionacategoria").hide();
	 $("#cadjuridico").hide();
	 $("#btnspj").hide();

	 localStorage.clear();

}

function cadastro(){
    $("#logon").hide();
    $("#novocadastro").show();
}

function fechar(){
	
  localStorage.clear();

        $("#user").hide();
        $("#logon").show();	
		
		document.getElementById('usuario').value='';
		document.getElementById('senha').value='';

}

function cadastraVeiculo(){
	
	if (document.getElementById('txtlicpinda_0').checked==true) {
		var placadepinda = 'sim'

	} else {
		var placadepinda = 'nao'

	};

	if(($("#txtplaca").val()=="" || $("#txtmaxtoneladas").val()=="" || $("#foto_nome").val()=="" || $("#txtrenavan").val()=="" ||  $("#txtespecie").val()=="" || $("#txtanoFab").val()=="" || $("#txtmarcamod").val()=="" || (document.getElementById('RadioCategoria1').checked==false && document.getElementById('RadioCategoria2').checked==false))) {
        
        window.alert("Existem campos em branco. Verifique dados cadastrados!!");
		return false;
    };
		
	if (document.getElementById('RadioCategoria1').checked==true){
		document.getElementById('txtcategoria').value='Particular';
	}else{
		document.getElementById('txtcategoria').value='Aluguel';
	};

var Cod_Pessoa = localStorage.getItem('Cod');
   
$.ajax({
        url:'http://179.131.10.28/ccp_pmpinda/VeiculosAdd.php',
        dataType:'json',
        type:'POST',
        data:{idPessoa: Cod_Pessoa,
		      licPinda: $("#placapinda").val(),
		         placa: $("#txtplaca").val(),
	         toneladas: $("#txtmaxtoneladas").val(),
			 categoria: $("#txtcategoria").val(),
		       renavan: $("#txtrenavan").val(),
	           especie: $("#txtespecie").val(),
	             marca: $("#txtmarcamod").val(),
	               ano: $("#txtanoFab").val(), 
				  fotov:$("#foto_nome").val()}
	   });

   localStorage.setItem('Placa_Veiculo',$("#txtplaca").val());
   
confirmaCadastroVeiculo();

}

function confirmaCadastroVeiculo(){
     $("#confirma_cadastro_veiculo").show();
	 $("#btns_veiculos_sucesso").hide();
	 $("#conteudo").hide();
     $("#botaoenviarocrlv").show();
}

function formulario_foto(){
     $("#confirma_cadastro_veiculo").hide();
}

function cadastra_mais_veiculos(){
	 $("#confirma_cadastro_veiculo").hide();
	 $("#conteudo").show();

	 document.getElementById('txtplaca').value='';
	 document.getElementById('txtmaxtoneladas').value='';
	 document.getElementById('txtcategoria').value='';
	 document.getElementById('txtrenavan').value='';
	 document.getElementById('txtespecie').value='';
	 document.getElementById('txtmarcamod').value='';
	 document.getElementById('txtanoFab').value='';
	 document.getElementById('foto_nome').value='';
	 
}

function ativa_cpf(){
	$("#cadbranco").hide();
	$("#cadjuridico").hide();
	$("#btnspj").hide();
	$("#cadfisico").show();
	$("#btnspf").show();
	document.getElementById('hiddenField1').value='1';
	// window.alert("fisica");
}

function ativa_cnpj(){
	$("#cadbranco").hide();	
	$("#cadfisico").hide();
	$("#btnspf").hide();
	$("#cadjuridico").show();
	$("#btnspj").show();
	document.getElementById('hiddenField1').value='2';
	// window.alert("juridica");
}

function licpinda_sim() {
    $("#licforadepinda").show();
	$("#licempinda").show();
	$("#btnsv").show();
	document.getElementById('placapinda').value = 'sim' ;
}
function licpinda_nao() {
    $("#licforadepinda").show();
	$("#licempinda").show();
	$("#btnsv").show();
    document.getElementById('placapinda').value = 'nao' ;
	
}
 
function fazFotoClrv(){
    
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
	$("#fotoPerfil").html("<img src='" + foto + "' width=150px height=150px>");
    nomeFoto();
	
	$("#botaoenviarocrlv").show(); // aparece o botão Enviar Foto
	$("#btn33").html('Trocar Foto do CLRV');  // Muda o nome do botão
	$("#btn55").hide();
	$("#btnUpload").show();
		            
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
	
	$("#botaoenviarocrlv").show(); // aparece o botão Enviar Foto 
	$("#btn33").html('Trocar Foto do CLRV');  // Muda o nome do botão
	$("#btn55").hide();
	$("#btnUpload").show();
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
	document.getElementById('foto_nome').value=nomeFoto+'.jpg';
					}

function upload(){
 
 var foto = localStorage.getItem('foto');   
 var nomeFoto = localStorage.getItem('nomeFoto');
 var cod = localStorage.getItem('Cod');
    
 var options = new FileUploadOptions();
 options.fileKey = "file";
 options.fileName = nomeFoto;
 options.mimeType = "image/jpeg";
    
 var params = new Object();
 params.value1 = cod;
 params.value2 = "Foto DO CRLV";
 params.value3 = localStorage.getItem('Placa_Veiculo');
  
 options.params = params;
 options.chunkedMode = false;

var ft1 = new FileTransfer();
 ft1.upload(foto, "http://179.131.10.28/ccp_pmpinda/publica.php", function(){
     $("#foto").hide();

	 $("#btns_veiculos_sucesso").show();
	 $("#botaofotodocrlv").hide();
	 $("#botaoenviarocrlv").hide();
	 $("#msgsucesso02").hide();
	 $("#btnupload").hide();
	 
	 window.alert('Foto enviada com sucesso! Obrigado!');
	 
	 cadastraVeiculo();
	 
	 $("#btnsv2").show();
	 $("#btn333").show(); 
	 $("#btn33").hide();
	 
	 
	
	 
 }, function(){
 
     window.alert('Erro ao tentar publicar! Tente Novamente!');
            
 }, options);
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
        fazFotoClrv();
    }
	else if(r==1){
		abrirGaleria();
    }
}

function mailtestf() {								 
               
        if($("#txtemailpf").val() == "" || $("#txtemailpf").val().indexOf('@')==-1 || $("#txtemailpf").val().indexOf('.')==-1)
	{
		// window.alert(' * Por favor digite um e-mail válido!!');
		
		document.getElementById('txtemailpf').value='';
		$("#mensagem").html("<font color = '#FF0000'> * Por favor digite um e-mail válido!! </font>");
		$("#btn1").attr('disabled','disabled');
		
	} else{
                   
        $.ajax({
            url:'http://179.131.10.28/ccp_pmpinda/verificaEmail.php',
            dataType:'json',
            type:'POST',
            data:{email:$("#txtemailpf").val()},
            success: function(r){
                
                if (r.Resp==1) {
					// window.alert(" * E-mail já cadastrado!!!");
					document.getElementById('txtemailpf').value='';
                    $("#mensagem").html("<font color = '#FF0000'> * E-mail já cadastrado!!! </font>");
                    $("#btn1").attr('disabled','disabled');
                }
                else if(r.Resp==0) {
                    $("#mensagem").html("<font color = '#0000FF'> * E-mail disponível.  Prossiga com o cadastro! </font>");
                    $("#btn1").removeAttr('disabled');
                }
                
            },
            
            error:function(){
                window.alert('Erro de conexão com o banco de dados!!');
                $("#btn1").attr('disabled','disabled');
            }
        })
}

}
   
   
function mailtestj() {								 
               
        if($("#txtemailpj").val() == "" || $("#txtemailpj").val().indexOf('@')==-1 || $("#txtemailpj").val().indexOf('.')==-1)
	{
		// window.alert(' * Por favor digite um e-mail válido!!');
		
		document.getElementById('txtemailpj').value='';
		$("#mensagemj").html("<font color = '#FF0000'> * Por favor digite um e-mail válido!! </font>");
		$("#btn3").attr('disabled','disabled');
		
	} else{
                   
        $.ajax({
            url:'http://179.131.10.28/ccp_pmpinda/verificaEmail.php',
            dataType:'json',
            type:'POST',
            data:{email:$("#txtemailpj").val()},
            success: function(r){
                
                if (r.Resp==1) {
					// window.alert(" * E-mail já cadastrado!!!");
					document.getElementById('txtemailpj').value='';
                    $("#mensagemj").html("<font color = '#FF0000'> * E-mail já cadastrado!!! </font>");
					$("#btn3").attr('disabled','disabled');
					
                }
                
                else if(r.Resp==0) {
                    $("#mensagemj").html("<font color = '#0000FF'> * E-mail disponível.  Prossiga com o cadastro! </font>");
					$("#btn3").removeAttr('disabled');
                }
                
            },
            
            error:function(){
                window.alert('Erro de conexão com o banco de dados!!');
				$("#btn3").attr('disabled','disabled');
            }
        })
}

}
    
function maiuscula(z){
        v = z.value.toUpperCase();
        z.value = v;
    }

function mostra_decreto(){
	$("#decreto").show();
	$("#decreto").html("<iframe src='http://179.131.10.28/downloads/dec5635.zip' width='600' height='780' style='border: none;'></iframe>");
	
}

function fecha_decreto(){
    
 if (window.confirm("Você realmente quer fechar esta tela e voltar ao aplicativo?")) { 
  
       //  $("#user").hide();
       //  $("#logon").show();
		// document.getElementById('usuario').value='';
		// document.getElementById('senha').value='';
		// $("#botoes_usuario").hide();
		// $("#botoes_fiscal").hide();
		// $("#botoes_autoriza").hide();
        // $("#botao_botoes").hide();
		window.open("sair.html", "");
    
}

}
