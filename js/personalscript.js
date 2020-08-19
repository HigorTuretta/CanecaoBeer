
$(document).ready(function(){ 
	
	alert("Este site é destinado para maiores de 18 anos!");
	$("#excerveja").html(
		"<div class='offsetcervas' style='background-image: url(imagens/bg1.jpg); width:100%;'><div><img align='left' class='imgvariantes' src='imagens/cerva1.png'><h1 class='variantestitle'>CERVEJA LEVE E CLARA</h1><h4 class='variantesSubTitle'>4,5% vol</h4><br><p class='variantesDescription' align='justify'>A Pilsen é uma cerveja leve e refrescante, com aromas advindos do malte e dos lúpulos picantes/herbais e discretamente frutados, que harmonizam perfeitamente com o paladar levemente amargo, proporcionando um ótimo sabor e frescor. Ela é representada por Baldr: O Deus Nórdico da Luz.</p></div>"
		);

	$("#cerveja1").click(function(){
		$("#excerveja").html(
			"<div class='offsetcervas' style='background-image: url(imagens/bg1.jpg); width:100%;'><div><img align='left' class='imgvariantes' src='imagens/cerva1.png'><h1 class='variantestitle'>CERVEJA LEVE E CLARA</h1><h4 class='variantesSubTitle'>4,5% vol</h4><br><p class='variantesDescription' align='justify'>A Pilsen é uma cerveja leve e refrescante, com aromas advindos do malte e dos lúpulos picantes/herbais e discretamente frutados, que harmonizam perfeitamente com o paladar levemente amargo, proporcionando um ótimo sabor e frescor. Ela é representada por Baldr: O Deus Nórdico da Luz.</p></div>"
			);
	});
	$("#cerveja2").click(function(){
		$("#excerveja").html(
			"<div class='offsetcervas' style='background-image: url(imagens/bg2.jpg); width:100%;'><div><img align='left' class='imgvariantes' src='imagens/cerva2.png'><h1 class='variantestitle'>CERVEJA FORTE E CLARA</h1><h4 class='variantesSubTitle'>6,7% vol</h4><br><p class='variantesDescription' align='justify'>A Belgian IPA soma vários ingredientes especiais, meticulosamente selecionados que, em conjunto, trazem um incrível aroma cítrico, além de sabor picante, advindo da levedura belga, frutado adocicado e um corpo médio. Ela é representada por Thor: O Deus Nórdico do trovão, da guerra e da força.</p></div>"
			);
	});
	$("#cerveja3").click(function(){
		$("#excerveja").html(
			"<div class='offsetcervas' style='background-image: url(imagens/bg3.jpg); width:100%;'><div><img align='left' class='imgvariantes' src='imagens/cerva3.png'><h1 class='variantestitle'>CERVEJA EXTRA CLARA</h1><h4 class='variantesSubTitle'>5,3% vol</h4><br><p class='variantesDescription' align='justify'>A USAPA é uma nata representante do estilo American Pale Ale, com aromas equilibrados entre maltes e lúpulos, remetendo ao caramelo, às frutas doces e a um toque levemente cítrico. Ela é representada por Loki: Filho de gigantes mitológicos e agente do caos, que ao mesmo tempo é admirado por sua inteligência e imprevisibilidade e dono de uma personalidade avassaladora.</p></div>"
			);
	});
	$("#cerveja4").click(function(){
		$("#excerveja").html(
			"<div class='offsetcervas' style='background-image: url(imagens/bg4.jpg); width:100%;'><div><img align='left' class='imgvariantes' src='imagens/cerva4.png'><h1 class='variantestitle'>CERVEJA DE TRIGO LEVE COM ESPECIARIAS</h1><h4 class='variantesSubTitle'>5,2% vol</h4><br><p class='variantesDescription' align='justify'>A WitBier é produzida com malte de cevada, trigo em flocos, cascas de laranja e limão siciliano, além de especiarias, que fazem dela o melhor do seu estilo. Ela é representada por Odin: O Deus dos Deuses, da sabedoria e do equilíbrio. Admirado pelos mais importantes, respeitado por todos.</p></div>"
			);			
	});
	$('.input-cart-number').on('keyup change', function(){
		$t = $(this);

		if ($t.val().length > 3) {
			$t.next().focus();
		}

		var card_number = '';
		$('.input-cart-number').each(function(){
			card_number += $(this).val() + ' ';
			if ($(this).val().length == 4) {
				$(this).next().focus();
			}
		})

		$('.credit-card-box .number').html(card_number);
	});

	$('#card-holder').on('keyup change', function(){
		$t = $(this);
		$('.credit-card-box .card-holder div').html($t.val());
	});

	$('#card-holder').on('keyup change', function(){
		$t = $(this);
		$('.credit-card-box .card-holder div').html($t.val());
	});

	$('#card-expiration-month, #card-expiration-year').change(function(){
		m = $('#card-expiration-month option').index($('#card-expiration-month option:selected'));
		m = (m < 10) ? '0' + m : m;
		y = $('#card-expiration-year').val().substr(2,2);
		$('.card-expiration-date div').html(m + '/' + y);
	})

	$('#card-ccv').on('focus', function(){
		$('.credit-card-box').addClass('hover');
	}).on('blur', function(){
		$('.credit-card-box').removeClass('hover');
	}).on('keyup change', function(){
		$('.ccv div').html($(this).val());
	});

    var getCardType = function (number) {
        var cards = {
            visa: /^4[0-9]{12}(?:[0-9]{3})?$/,
            mastercard: /^5[1-5][0-9]{14}$/,
            amex: /^3[47][0-9]{13}$/,
            diners: /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/,
            discover: /^6(?:011|5[0-9]{2})[0-9]{12}$/,
            jcb: /^(?:2131|1800|35\d{3})\d{11}$/
        };
        for (var card in cards) {
            if (cards[card].test(number)) {
                return card;
            }
        }
    };

$('#card-number').change(function(){
  console.log(getCardType($(this).val()));
})

var inputs = $('input').on('keyup', verificarInputs);
function verificarInputs() {
    const preenchidos = inputs.get().every(({value}) => value)
    $('#botao').prop('disabled', !preenchidos);
}

});