//direttiva per tastiera virtuale
app.directive('ngVirtualKeyboard', function ($timeout, $parse) {
	return {
		require: 'ngModel',
		link: function ($scope, element, $attrs, ngModel) {
			return $timeout(function () {
				
				var isNum = $attrs.ngVirtualKeyboard.toLowerCase() != "text";
				var customKeyboard = [];
				if (isNum) {
					customKeyboard = [
						'{clear}',
						'7 8 9',
						'4 5 6',
						'1 2 3',
						'0 {a} {c}'
					]
				} else {
					customKeyboard = [
						'` 1 2 3 4 5 6 7 8 9 0 - = {bksp}',
						'q w e r t y u i o p [ ] \\',
						'a s d f g h j k l ; \' {a}',
						' z x c v b n m , . / ',
						'{space} {sp:.2} '
					]
				}

				$(element).keyboard({
					autoAccept: true,
					usePreview: true,
					stayOpen: true, //da abilitare solo se si vuole gestire apertura e chiusura manualmente. Nel caso, aggiungere $('#ID_KEYBOARD').getkeyboard().close() nel controller;
					change: function(event, keyboard, el) {
						//console.log('1.changes canceled, value restored to ', $(el).val());							
						ngModel.$setViewValue($(el).val());
					},
					layout: 'custom', //isNum?'num':'custom'
					display : {
						'bksp': '\u2190', // freccia destra 2190
						'enter':'\u21b5'
					},
					customLayout: {
						'normal': customKeyboard,
						'shift': [
							'~ ! @ # $ % ^ & * ( ) _ + {bksp}',
							'Q W E R T Y U I O P { } |',
							'A S D F G H J K L : " {enter}',
							'Z X C V B N M < > ?',
							'{space} {sp:.2}'
						]
					},
				});
			
			});
		}
	};
})