var foco = "";
var msgstatus = "";

/*************************************************
	Fun��o que permitir digitar numeros 
**************************************************/
function EntradaNumerico(evt) {

    var key_code = evt.keyCode  ? evt.keyCode  :
                   evt.charCode ? evt.charCode :
                   evt.which    ? evt.which    : void 0;

                   
        // Habilita teclas <DEL>, <TAB>, <ENTER>, <ESC> e <BACKSPACE>
        if (key_code == 8  ||  key_code == 9  ||  key_code == 13  ||  key_code == 27  ||  key_code == 46) {
            return true;
        }
        // Habilita teclas <HOME>, <END>, mais as quatros setas de navega��o (cima, baixo, direta, esquerda)
        else if ((key_code >= 35)  &&  (key_code <= 40)) {
            return true
        }
        // Habilita n�meros de 0 a 9
        // 48 a 57 s�o os c�digos para n�meros
        else if ((key_code >= 48)  &&  (key_code <= 57)) {
            return true
        }
        return false;
}


function Alertar(strMsg) {
    window.alert(strMsg)
}

function aviso (campo, msg)
{   
    alert(msg);
    campo.focus();
    campo.select();
    return false;
}


//-------------------------------
function isDigit (c)
{     
   return ((c >= "0") && (c <= "9"))
}  

//-------------------------------
function isEmpty(s)
{
   return ((s == null) || (s.length == 0))
}

//Verifica se CPF � v�lido
function TestaCPF(strCPF) {
    var Soma;
    var Resto;
    Soma = 0;   
    //strCPF  = RetiraCaracteresInvalidos(strCPF,11);
    if (strCPF == "00000000000")
	return false;
    for (i=1; i<=9; i++)
	Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (11 - i); 
    Resto = (Soma * 10) % 11;
    if ((Resto == 10) || (Resto == 11)) 
	Resto = 0;
    if (Resto != parseInt(strCPF.substring(9, 10)) )
	return false;
	Soma = 0;
    for (i = 1; i <= 10; i++)
       Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (12 - i);
    Resto = (Soma * 10) % 11;
    if ((Resto == 10) || (Resto == 11)) 
	Resto = 0;
    if (Resto != parseInt(strCPF.substring(10, 11) ) )
        return false;
    return true;
}

// Recupera uma refer�ncia ao objeto com o id especificado
// Funciona primariamente com o DOM, mas tamb�m aceita document.all
function pegaObj( id ) {
	if ( typeof(document.getElementById) != 'undefined' )
		return document.getElementById( id );
	else if ( document.all ) {
		return document.all( id );
	}
}


// Fun��o chamada no evento onKeyDown para evitar que caracteres n�o num�ricos
// sejam inseridos no campo indicado.
// Par�metros:
// input: refer�ncia para o objeto <input> que recebeu o evento
// e: o objeto event
function ajustar_numero(input, e) {

	var k;

	// e.which: explorer, e.keyCode: mozilla
	if (e && e.which)
		k = e.which;
	else
		k = e.keyCode;
				
	// No IE n�o essa fun��o n�o consegue cancelar tabs, BS, DEL, etc, mas no mozilla sim,
	// por isso precisamos deixar passar as teclas de edi��o.
	// Somente aceita os caracteres 0-9, tab, enter, del e BS
	if ( ((k<48)||(k>57)) && k != 8 && k != 9 && k != 127 && k != 13 && !((k>34)&&(k<41)) && k != 46) {
        if(e.ctrlKey && (k == 118 ||k == 99)) {
            return true;
        }	
        else
        {
            e.returnValue = false;
		    return false;
        }	
	}

	return true;
}


// Fun��o espec�fica do IE, que busca as informa��es do evento
// e repassa para as rotina em si "ajustar_numero" e "pular_campo"
function ajustar_numeroie() {

	e = window.event;
	input = pegaObj( e.srcElement.id );

	return ajustar_numero( input, e );
	
}

function pular_campoie() {

	e = window.event;
	input = pegaObj( e.srcElement.id );

	return pular_campo( input, e );
	
}

// Fun��o que registra os inputs que precisam ser num�ricos e que t�m
// um tamanho fixo que, quando alcan�ado, muda para o pr�ximo campo.
// Par�metros:
// id: id do <input> que deve capturar os eventos de tecla
// tamanhoMaximo: o n�mero de d�gitos m�ximo para este campo
// proximoId: id do pr�ximo campo no formul�rio para o qual pularemos quando
//            o n�mero m�ximo de d�gitos for alcan�ado.
var inputList = new Array();
function registraInput( id, tamanhoMaximo, proximoId ) {

	inputList[id] = new Array();
	inputList[id]['tamanho'] = tamanhoMaximo;
	inputList[id]['proximo'] = proximoId;

	// No IE n�o funciona setar o atributo via DOM, e o evento n�o vem como par�metro
	// portanto precisamos setar uma fun��o diferente para ele
	pegaObj(id).onkeyup = pular_campoie;
	pegaObj(id).onkeypress = ajustar_numeroie;
	
	// O mozilla tamb�m aceita a linha anterior, mas aqui n�s passamos por cima e
	// chamamos a fun��o diretamente
	pegaObj(id).setAttribute( 'onKeyUp', 'pular_campo(this, event)');
	pegaObj(id).setAttribute( 'onKeyPress', 'return ajustar_numero(this,event)');

}


function validarCPF(cpf) {
	var form = pegaObj("theForm");
	if (pegaObj("id_cpf").value == "") {
	    alert("Por favor, preencha o cpf a ser consultado");	
		pegaObj("id_cpf").focus();
	    return;
	}
}

function RemoveMask(xElement) {
    var strValue = pegaObj(xElement).value;

	strValue = strValue.replace(".", "");
	strValue = strValue.replace(".", "");
	strValue = strValue.replace("-", "");
	strValue = strValue.replace("/", "");
	strValue = strValue.replace("/", "");

    pegaObj(xElement).value = strValue;
}

function FG_FormatarCPF(xElement) {

	var strValor = pegaObj(xElement).value;
    var strTemp;

    strTemp = strValor.replace(".", "");
    strTemp = strTemp.replace(".", "");
    strTemp = strTemp.replace(".", "");
    strTemp = strTemp.replace("-", "");
    strTemp = strTemp.replace("-", "");

    strValor = strTemp

    if (strValor.length > 9) {
        strValor = strValor.substr(0, 3) + '.' + strValor.substr(3, 3) + '.' + strValor.substr(6, 3) + '-' + strValor.substr(9, 2);
    }
    else if (strValor.length > 6) {
        strValor = strValor.substr(0, 3) + '.' + strValor.substr(3, 3) + '.' + strValor.substr(6, 3);
    }
    else if (strValor.length > 3) {
        strValor = strValor.substr(0, 3) + '.' + strValor.substr(3, 3);
    }

   pegaObj(xElement).value = strValor;
}

function FG_FormatarData(xElement) {
    var strValor = pegaObj(xElement).value;
	var strTemp

    strTemp = strValor.replace("/", "");
    strTemp = strTemp.replace("/", "");
    strValor = strTemp;

    if (isNaN(parseInt(strValor.substr(strValor.length - 1, 1)))) {
        strValor = strValor.substr(0, strValor.length - 1)
    }

    if (strValor.length > 5) {
        strValor = strValor.substr(0, 2) + '/' + strValor.substr(2, 2) + '/' + strValor.substr(4, 4);
    }
    else if (strValor.length > 2) {
        strValor = strValor.substr(0, 2) + '/' + strValor.substr(2, 2);
    }

    pegaObj(xElement).value = strValor;
}

function ValidarDados(){
	if (pegaObj("txtCPF").value.length  != 14) {
	    alert("Por favor, preencha o CPF a ser consultado somente com os 11 n�meros.");
		pegaObj("txtCPF").focus();
		return false;
	}
	
	if (pegaObj("txtDataNascimento").value.length != 10 || pegaObj("txtDataNascimento").value == "00/00/0000") {
	    alert("Informe a data de nascimento do titular do CPF a ser consultado, com dois d�gitos para o DIA e para o M�S e quatro d�gitos para o ANO. Formato: dd/mm/aaaa.");
		pegaObj("txtDataNascimento").focus();
		return false;
	}
	
	mostraEscondeAntirobo();
}


function mostraEscondeAntirobo() {
    if ($("#antirobo").css("display") == "block") {        
        $("#antirobo").css("display", "none");        
    }
    else {        
        $("#antirobo").css("display", "block");
        ReloadAntiRobo();
    }
}


function CancelarAntiRobo() {
    mostraEscondeAntirobo();
}

function Consultar() {   
    $("#tempTxtCPF").val($("#txtCPF").val());
    $("#tempTxtNascimento").val($("#txtDataNascimento").val());
    $("#temptxtToken_captcha_serpro_gov_br").val($("input[name*='Token_captcha_serpro_gov_br']").val());
    $("#temptxtTexto_captcha_serpro_gov_br").val($("input[name*='txtTexto_captcha_serpro_gov_br']").val());


    mostraEscondeAntirobo();
}

function ApagarCamposRobo(){
    $("#txtTexto_captcha_serpro_gov_br").val("");
    $("#tempTxtCPF").val("");
    $("#tempTxtNascimento").val("");
    $("#temptxtToken_captcha_serpro_gov_br").val("");
    $("#temptxtTexto_captcha_serpro_gov_br").val("");
}

function ReloadAntiRobo() {
    if ($("#antirobo").add("display") != "none") {
        $("#btnRecarregar_captcha_serpro_gov_br").click();
    }
}