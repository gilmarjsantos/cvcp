// JavaScript Document



function galeriaSucesso(){
	var foto = document.getElementById('arquivo').value;
    $("#foto").show();
    $("#exibeFoto").attr('src',foto);
    
    localStorage.setItem('foto',foto);
    nomeFoto();	
	            
}

function nomeFoto() {
    var letras = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz';
    var nomeFoto = '';
    for (var i = 0; i < 55; i++) {
        var rnum = Math.floor(Math.random() * letras.length);
        nomeFoto += letras.substring(rnum, rnum + 1);
    }

    localStorage.setItem('nomeFoto',nomeFoto+'.jpg');
	document.getElementById('foto_nome').value='nomeFoto',nomeFoto+'.jpg';
}

function mandar() {
    var formData = document.getElementById('arquivo').value;

    var options = new FileUploadOptions();
 options.fileKey = "file";
 options.fileName = formData;
 options.mimeType = "image/jpeg";
    
 var params = new Object();
 params.value1 = formData;
 
 
 options.params = params;
 options.chunkedMode = false;

var ft1 = new FileTransfer();
 ft1.upload(foto, "http://179.131.10.28/ccp_pmpinda/upload.php", function(){
    //  $("#foto").hide();
	 
	  window.alert('Foto enviada com sucesso! Obrigado!');
	 
 }, function(){
 
     window.alert('Erro ao tentar publicar! Tente Novamente!');
            
 }, options);
}

