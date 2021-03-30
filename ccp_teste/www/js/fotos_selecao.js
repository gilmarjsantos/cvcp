// JavaScript Document
function selecfotos(){
	
	
$.ajax({
        url:'http://179.131.10.28/ccp_pmpinda/fotos_selecao.php',
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


confirmaCadastropf();
	
}