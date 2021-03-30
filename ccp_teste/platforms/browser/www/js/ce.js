/* arquivo js com funções para o cadastro_edit.html
********************************************************
********** Autor: Gilmar Jesus dos Santos     **********
********** Url: http://www.gilmarjesus.com    **********
********** Email: gilmarjsantos@gmail.com     **********
********************************************************
*/

/*
Referencias:
                localStorage.setItem('Cod',r.Cod);
				localStorage.setItem('Tipo',r.Tipo);
                localStorage.setItem('Nome',r.Nome);
			    localStorage.setItem('Cpf_Cnpj',r.cpf_cnpj);
				localStorage.setItem('Cnh',r.cnh);
				localStorage.setItem('Email',r.email);
                localStorage.setItem('Telefone',r.telefone);
				localStorage.setItem('Cep',r.cep);
				localStorage.setItem('Endereco',r.logradouro);
				localStorage.setItem('Numero',r.nr);
				localStorage.setItem('Complemento',r.complemento);
				localStorage.setItem('Cidade',r.cidade);
				localStorage.setItem('Estado',r.estado);
				localStorage.setItem('Bairro',r.bairro);
				localStorage.setItem('Senha',r.senha);
				localStorage.setItem('Ativo',r.ativo);
				localStorage.setItem('Nome_Rep',r.nome_repres);
				localStorage.setItem('Cpf_Rep',r.cpf_repres);
*/
window.onload = function () {
	$("#confirma_cadastro").hide();
	$("#cadbranco").show();
	 var tipo_p = localStorage.getItem('Tipo');
	
// Se for pessoa fisica 	
	if (tipo_p == '1') {
	$("#cadfisico").show();
	$("#cadbranco").hide();
	$("#cadjuridico").hide();
	$("#btnspf").show();
	// Variaveis 
        		var nome = localStorage.getItem('Nome');
				var cpf = localStorage.getItem('Cpf_Cnpj');
				var cnh = localStorage.getItem('Cnh');
				var email = localStorage.getItem('Email');
				var telefone = localStorage.getItem('Telefone');
				var cep = localStorage.getItem('Cep');
				var logradouro = localStorage.getItem('Endereco');
				var numero = localStorage.getItem('Numero');
				var complemento = localStorage.getItem('Complemento');
				var cidade = localStorage.getItem('Cidade');
				var estado = localStorage.getItem('Estado');
				var bairro = localStorage.getItem('Bairro');
				var senha = localStorage.getItem('Senha');
                var nome_repres = localStorage.getItem('Nome_Repres');
				var cpf_repres = localStorage.getItem('Cpf_Repres');

	// Atribui valores			
				//  document.getElementById('txtnome1').value=nome;
				//  document.getElementById('txtcpfcnpj1').value=cpf;
				 document.getElementById('txtnrcnh1').value=cnh;
				//  document.getElementById('txtemailpf').value=email;
			     document.getElementById('txttelefone1').value=telefone;
				 document.getElementById('txtcep1').value=cep;
				 document.getElementById('txtlogradouro1').value=logradouro;
				 document.getElementById('txtnumero1').value=numero;
				 document.getElementById('txtcomplemento1').value=complemento;
				 document.getElementById('txtbairro1').value=bairro;
				 document.getElementById('txtcidade1').value=cidade;
				 document.getElementById('txtestado1').value=estado;
				//  document.getElementById('txtsenha1').value=senha;
				 
				 $("#tipodepessoa").html('Pessoa Física');
				
				$("#txtnome1").focus();
				
		};
	
	
	if (tipo_p == '2') {
	$("#cadfisico").hide();
	$("#cadbranco").hide();
	$("#cadjuridico").show();
	$("#btnspj").show();
		
	            var nome2 = localStorage.getItem('Nome');
				 var cpf2 = localStorage.getItem('Cpf_Cnpj');
				 var cnh2 = localStorage.getItem('Cnh');
				 var email2 = localStorage.getItem('Email');
				 var telefone2 = localStorage.getItem('Telefone');
				 var cep2 = localStorage.getItem('Cep');
				 var logradouro2 = localStorage.getItem('Endereco');
				 var numero2 = localStorage.getItem('Numero');
				 var complemento2 = localStorage.getItem('Complemento');
				 var bairro2 = localStorage.getItem('Bairro');
				 var cidade2 = localStorage.getItem('Cidade');
				 var estado2 = localStorage.getItem('Estado');
				 var senha2 = localStorage.getItem('Senha');
				 var nome_repres2 = localStorage.getItem('Nome_Repres');
				 var cpf_repres2 = localStorage.getItem('Cpf_Repres');
				 
				 // document.getElementById('txtnome2').value=nome2;
				 
				 // document.getElementById('txtcpfcnpj2').value=cpf2;
				 // $("#txtcpfcnpj2").focus();
				//  document.getElementById('txtnrcnh2').value=cnh2;  -  Pessoa Juridica não tem cnh
				//  document.getElementById('txtemailpj').value=email2;
			     document.getElementById('txttelefone2').value=telefone2;
				 $("#txttelefone2").focus();
				 document.getElementById('txtcep2').value=cep2;
				 $("#txtcep2").focus();
				 document.getElementById('txtlogradouro2').value=logradouro2;
				 document.getElementById('txtnumero2').value=numero2;
				 document.getElementById('txtcomplemento2').value=complemento2;
				 document.getElementById('txtbairro2').value=bairro2;
				 document.getElementById('txtcidade2').value=cidade2;
				 document.getElementById('txtestado2').value=estado2;
				 // document.getElementById('txtsenha2').value=senha2;
				 document.getElementById('txtrepresentante2').value=nome_repres2;
				 $("#txtcpfrepres").focus();
				 document.getElementById('txtcpfrepres').value=cpf_repres2;
				
				
				$("#tipodepessoa").html('Pessoa Jurídica');
				
				$("#txtrepresentante2").focus();
				
				
				
		};
	
	// mostrar o nome do usuario logado
	
 	var Nome = localStorage.getItem('Nome');
    var nome = "Nome: " + Nome + "<br>";
	var Codigo = localStorage.getItem('Cod');
    var codigo = "Código: " + Codigo + "<br>";
    
    $("#Nome").html(nome);
	$("#Codigo").html(codigo);
  

	// mostrar o nome do usuario logado
    
    
}

function bloqueia_campos(){
              //  var input1 = document.getElementById('txtnome1');
				//var input2 = document.getElementById('txtcpfcnpj1');
				var input3 = document.getElementById('txtnome2');
				var input4 = document.getElementById('txtcpfcnpj2');
				    
                
                 //   input1.readOnly = true;
				//	input2.readOnly = true;
					input3.readOnly = true;
					input4.readOnly = true;
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
function alterapf(){
    
    $.ajax({
        url:'http://179.131.10.28/ccp_pmpinda/cadastro_edit_PF.php',
        dataType:'json',
        type:'POST',
        data:{pessoa: $("#tipodepessoa").val(),
			cod: $("#codigo").val(),
			  tipo: $("#txtcategoria1").val(),
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
             senha: $("#txtsenha1").val()
	 }
    });
   atualizadopf(); 
}

function alterapj(){
    var codigo = localStorage.getItem('Cod');
    $.ajax({
        url:'http://179.131.10.28/ccp_pmpinda/cadastro_edit_PJ.php',
        dataType:'json',
        type:'POST',
        data:{telefone: $("#txttelefone2").val(),
		           cep: $("#txtcep2").val(),
	          endereco: $("#txtlogradouro2").val(),
		        numero: $("#txtnumero2").val(), 
	       complemento: $("#txtcomplemento2").val(), 	
	            cidade: $("#txtcidade2").val(), 
	            estado: $("#txtestado2").val(), 
	            bairro: $("#txtbairro2").val(), 
           nome_repres: $("#txtrepresentante2").val(), 	   
		    cpf_repres: $("#txtcpfrepres").val(),
			       cod: codigo}
			      //  cod: $("#Codigo").val()}			 
			
    })
    atualizadopj();
}

function atualizadopf(){
    $("#confirma_cadastro").show();
    $("#cadfisico").hide();
    }
function atualizadopj(){
    $("#confirma_cadastro").show();
    $("#cadjuridico").hide();
    }
	
