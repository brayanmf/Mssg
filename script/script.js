/*llama  por id*/
$(document).ready(function(){
	//#usarlo $sucontenido
	$('#btnSend').click(function(){
		var E='';
		if($('#names').val()==''){//validando el nombre
			E=E+'<p>Escriba un Nombre</p>';
			$('#names').css("border-bottom-color","#F14B4B")
		}
		else{
			$('#names').css("border-bottom-color","#2c26a3")
		}


		if($('#email').val()==''){//validando el correo
			E=E+'<p>Escriba un Correo</p>';
			$('#email').css("border-bottom-color","#F14B4B")
		}
		else{
			$('#email').css("border-bottom-color","#2c26a3")

		}

		
		if($('#mensaje').val()==''){//validando el mensaje
			E=E+'<p>Escriba un Mensaje</p>';
			$('#mensaje').css("border-bottom-color","#F14B4B")
		}

		else{
			$('#mensaje').css("border-bottom-color","#2c26a3")

		}


		
		//mensaje

		if(!E==''){
			var mensaje='<div class="mensaje_salida">'+
			'<div class="mensaje_modal">'+
			'<h3>Errores Encontrados<h3>'+E+
			'<span id="btnclose">Cerrar</span>'+
			'</div>'+
			'</div>'
				$('body').append(mensaje);
		}
	
		
$('#btnclose').click(function(){
	$('.mensaje_salida').remove();

});
	});

});
	
