/*     Veiculos Edição 
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
        url:'http://179.131.10.28/ccp_pmpinda/consultaVeiculos.php',
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
	postagens+="<td width='20%'><div align='center'><span class='style17'>" + r[i].id_veiculo + "</span></div></td>";
    postagens+="<td width='24%'><div align='center'><span class='style17'>" + r[i].placa + "</span></div></td>";
    postagens+="<td width='19%'><div align='center'><span class='style17'>" + r[i].toneladas + "</span></div></td>";
	postagens+="<td width='20%'><div align='center'><a href='#' class='ui-btn ui-shadow ui-corner-all ui-icon-delete ui-btn-icon-notext' onclick=excluir(" + r[i].id_veiculo + ")>Delete</a></div></td>";
    postagens+="</tr>";
    postagens+="</table>";
          				
              $("#lista").html(postagens);
              $("#lista").show();
                        
            } 
        
    },
        error:function(e){
        window.alert('Houve um erro de conexão com o banco de dados!!')
    }
    })
}



