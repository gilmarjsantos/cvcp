/*  veiculos_autorizados.html
********************************************************
********** Autor: Gilmar Jesus dos Santos     **********
********** Url: http://www.gilmarjesus.com    **********
********** Email: gilmarjsantos@gmail.com     **********
********************************************************
*/
window.onload = function () {
//	$("#Nome").show();
//    $("#Codigo").show();
// 	$("#mostra_user").show();
//	$("#lista").show();
//    	
// 	var Nome = localStorage.getItem('Nome');
//   var nome = "Nome: " + Nome + "<br>";
//	var Codigo = localStorage.getItem('Cod');
//    var codigo = "Código: " + Codigo + "<br>";
//    
//    $("#Nome").html(nome);
//	$("#Codigo").html(codigo);
//
//  listagem();

verifica_versao();
}

function verifica_versao(){
   var codigo_da_versao='1';
    $.ajax({
        url:'http://179.131.10.28/ccp_pmpinda/versao.php',
        dataType:'json',
        type:'POST',
        data:{c_versao: codigo_da_versao},
        success:function(t){
           
				localStorage.setItem('Versao',t.versao);
				
				
                 		   
            },
        error:function(e){
          window.alert('Erro de conexão com o banco de dados!!');
        }
    })
	
	var ver = localgetItem("Versao");
	
	$("#versaoapp").html=(ver);
    
}


