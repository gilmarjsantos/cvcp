/*  AETC.html
********************************************************
********** Autor: Gilmar Jesus dos Santos     **********
********** Url: http://www.gilmarjesus.com    **********
********** Email: gilmarjsantos@gmail.com     **********
********************************************************
*/


function emite_aetc(){
	
    var cod_aetc = document.getElementById('id_aetc').value;
	
    
    $.ajax({
        url:'http://179.131.10.28/ccp_pmpinda/consulta_aetc.php',
        dataType:'json',
		type:'POST',
		data:{nr_aetc:cod_aetc},
		   
        success: function(a) {
        		var totala = a.length;
			if (totala != 0){
			
            var b = '' ;
            var aetc_txt = "";
            
            for(b=0;b<totala;b++){
                console.log(a[b].id_veiculo);
				// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
				aetc_txt+="<table width='98%' border='0' align='center'>";
                aetc_txt+="<tr>";
                aetc_txt+="<td><div align='center'>Secretaria Municipal de Segurança Pública </div></td>";
                aetc_txt+="</tr>";
                aetc_txt+="<tr>";
                aetc_txt+="<td>&nbsp;</td>";
                aetc_txt+="</tr>";
                aetc_txt+="<tr>";
                aetc_txt+="<td><div align='center'>AUTORIZAÇÃO ESPECIAL DE TRÂNSITO DE CARGA (AETC)</div></td>";
                aetc_txt+="</tr>";
                aetc_txt+="</table>";
                aetc_txt+="<div class='clear'></div>";
                aetc_txt+="</div>";
                aetc_txt+="<hr class='no-desktop'>";
                aetc_txt+="<div class='dados'>";
                aetc_txt+="<div class='row'>";
                aetc_txt+="    <div class='col-md-6'>";
                aetc_txt+="        <span style='font-size: 1em'><b>CPF/CNPJ:</b></span>";
                aetc_txt+="        085.118.738-21";
                aetc_txt+="        <br>";
                aetc_txt+="    </div>";
                aetc_txt+="    <div class='col-md-6'>";
                aetc_txt+="        <span style='font-size: 1em'><b>CNH:</b></span>";
                aetc_txt+="        02050040697<br>";
                aetc_txt+="    </div>";
                aetc_txt+="</div>";
                aetc_txt+="<div class='row'>";
                aetc_txt+="    <div class='col-md-12'>";
                aetc_txt+="        <span style='font-size: 1em'><b>Nome:</b></span>";
                aetc_txt+="        GILMAR JESUS DOS SANTOS<br>";
                aetc_txt+="    </div>";
                aetc_txt+="</div>";
                aetc_txt+="<div class='row'>";
                aetc_txt+="    <div class='col-md-6'>";
                aetc_txt+="Placa: ";
                aetc_txt+="DBA0869<br>";
                aetc_txt+="</div>";
                aetc_txt+="    <div class='col-md-6'>";
                aetc_txt+="        Peso máximo:";
                aetc_txt+="        15,00<br>";
                aetc_txt+="    </div>";
                aetc_txt+="</div>";
                aetc_txt+="<div class='row'>";
                aetc_txt+="    <div class='col-md-6'>";
                aetc_txt+="        RENAVAM:";
                aetc_txt+="       <br>";
                aetc_txt+="    </div>";
                aetc_txt+="    <div class='col-md-6'>";
                aetc_txt+="        ESPÉCIE/TIPO:";
                aetc_txt+="        <br>";
                aetc_txt+="    </div>";
                aetc_txt+="</div>";
                aetc_txt+="<div class='row'>";
                aetc_txt+="    <div class='col-md-6'>";
                aetc_txt+="        COMPOSIÇÃO:";
                aetc_txt+="        16 Toneladas <br>";
                aetc_txt+="    </div>";
                // aetc_txt+="    <div class='col-md-6'>";
                // aetc_txt+="        PRODUTO PERIGOSO:";
                // aetc_txt+="        Não<br>";
                // aetc_txt+="    </div>";
                aetc_txt+="</div>";
                aetc_txt+="</div>";
                aetc_txt+="<div class='atencao'>";
                aetc_txt+="O Veículo acima está <b>AUTORIZADO</b> a trafegar nas Zona de Restrição Máxima de Circulação (ZRMC) e";                aetc_txt+="Zona de Restrição Especial de Circulação (ZREC) conforme decreto 247/17, ";
                aetc_txt+="respeitando o Horário de Restrição de Tráfego das 7:00 às 9:00 horas e das 17:00 às 19:00 e também os limites";                aetc_txt+="estabelecidos pela sinalização de trânsito conforme CTB.";
                aetc_txt+="<br>";                
                aetc_txt+="</div>";
                aetc_txt+="<div class='row obs'>";
                aetc_txt+="<div class='col-md-12'>";
                aetc_txt+="OBSERVAÇÕES:";
                aetc_txt+="</div>";
                aetc_txt+="</div>";
                aetc_txt+="<div class='row validade'>";
                aetc_txt+="<div class='col-md-6'>";
                aetc_txt+="<b>Validade:</b>";
                aetc_txt+="    06/09/2019";
                aetc_txt+="</div>";
                aetc_txt+="</div>";
                aetc_txt+="<small class='atencao'>";
                aetc_txt+="<strong>TÍTULO PRECÁRIO</strong> - Pode ser revogado em caso de infração da autorização ou";                aetc_txt+="inveracidade dos dados informados.</small>";
                aetc_txt+="<div class='no-print no-mobile text-center'>";
                aetc_txt+="<table width='99%' border='0' align='center'>";
                aetc_txt+="  <tr>";
               // aetc_txt+="    <td><a onClick='window.print()' class='btn btn-warning'>Imprimir página</a></td>";
              //   aetc_txt+="    <td><button name='btn2' id='btn2' onClick='javascript:location.href='login.html''><span";                aetc_txt+="class='style13'>Voltar</span></button></td>";
                aetc_txt+="  </tr>";
                aetc_txt+="</table>";
                aetc_txt+="</div>";
                aetc_txt+="</div>";
				// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
          				
			$("#topo").hide();			
              $("#lista").html(aetc_txt);
              $("#lista").show();
                              };
			}
             if (totala == 0){ 				  
				window.alert('Não existe autorização para a placa pesquisada!');  
			  };

                          }, 
        error:function(e){
        window.alert('Houve um erro de conexão com o banco de dados!!')
    }
    })
}

