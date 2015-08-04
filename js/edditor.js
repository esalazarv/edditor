// definición de la función
$.fn.edditor = function(customOptions){
	/**
	 * Opciones por defecto
	 * @type {Object}
	 */
	var defaults = {
 		enableAdvancedOptions: false,
 	};

 	/**
 	 * Opciones a utilizar
 	 * @type {Object}
 	 */
	var options = $.extend({}, defaults, customOptions);
	var fonts = [
 		 	{ _value:'Andale Mono',_text:'<font face="Andale Mono">Andale Mono</font>'},
 			{ _value:'Arial',_text:'<font face="Arial">Arial</font>'},
 			{ _value:'Century Gothic',_text:'<font face="Century Gothic">Century Gothic</font>'},
 			{ _value:'Comic Sans MS',_text:'<font face="Comic Sans MS">Comic Sans MS</font>'},
 			{ _value:'Courier New',_text:'<font face="Courier New">Courier New</font>'},
 			{ _value:'Georgia',_text:'<font face="Georgia">Georgia</font>'},
 			{ _value:'Impact',_text:'<font face="Impact">Impact</font>'},
 			{ _value:'Times New Roman',_text:'<font face="Times New Roman">Times New Roman</font>'},
 			{ _value:'Trebuchet MS',_text:'<font face="Trebuchet MS">Trebuchet MS</font>'},
 			{ _value:'Verdana',_text:'<font face="Verdana">Verdana</font>'}
 		];
 	var fontSizes = [
 			{ _value:'1',_text:'<font size="1">Texto</font>'},
 			{ _value:'2',_text:'<font size="2">Texto</font>'},
 			{ _value:'3',_text:'<font size="3">Texto</font>'},
 			{ _value:'4',_text:'<font size="4">Texto</font>'},
 			{ _value:'5',_text:'<font size="5">Texto</font>'},
 			{ _value:'6',_text:'<font size="6">Texto</font>'},
 			{ _value:'7',_text:'<font size="7">Texto</font>'},
 		];
 	var colors = [
				"#000000","#323232","#424242","#A4A4A4","#D8D8D8","#FFFFFF",
				"#610B0B","#8A0808","#B40404","#FF0000","#F5A9A9","#F6CECE",
				"#61380B","#8A4B08","#B45F04","#FF8000","#FAAC58","#F5D0A9",
				"#393B0B","#5E610B","#AEB404","#FFFF00","#F4FA58","#F2F5A9",
				"#0B3B0B","#0B610B","#298A08","#40FF00","#9FF781","#D8F6CE",
				"#0B243B","#0B3861","#045FB4","#0080FF","#00BFFF","#81DAF5",
				"#240B3B","#4B088A","#5F04B4","#7401DF","#9F81F7","#D8CEF6"
				];
 	var buttons = {
 		font:{
 			type:'dropdown',
 			isAdvancedOption:false,
 			buttons:fonts,
 			_class:{ trigger:'ed-btn fa fa-font', container:'ed-list', button:'ed-list-btn'},
 			actions:{ _default :{_command:'fontName'} },
 			callback:'list',
 		},
 		sizes:{
 			type:'dropdown',
 			isAdvancedOption:false,
 			buttons:fontSizes,
 			_class:{ trigger:'ed-btn fa fa-text-height', container:'ed-list', button:'ed-list-btn'},
 			actions:{
 				_default :{ _command:'fontSize' }
 			},
 			callback: 'list'
 		},
 		fontColor:{
 			type:'dropdown',
 			isAdvancedOption:false,
 			buttons:colors,
 			_class:{ trigger:'ed-btn fa fa-tint', container:'ed-color-picker', button:'ed-color-btn'},
 			actions:{
 				_default:{ _text:'texto',_command:'foreColor'},
 				_backColor:{ _text:'resaltar',_command:'backColor'}
 			},
 			callback: 'colorPicker'
 		},
 		bold:{
 			type:'button',
 			isAdvancedOption:false,
 			_class: 'ed-btn fa fa-bold',
 			_command: 'bold'
 		},
 		italic:{
 			type:'button',
 			isAdvancedOption:false,
 			_class: 'ed-btn fa fa-italic',
 			_command: 'italic'
 		},
 		underline:{
 			type:'button',
 			isAdvancedOption:false,
 			_class: 'ed-btn fa fa-underline',
 			_command: 'underline'
 		},
 		strikeThrough:{
 			type:'button',
 			isAdvancedOption:false,
 			_class: 'ed-btn fa fa-strikethrough',
 			_command: 'strikeThrough'
 		},
 		insertHorizontalRule:{
 			type:'button',
 			isAdvancedOption:false,
 			_class: 'ed-btn',
 			_command: 'insertHorizontalRule',
 			_text:'&minus;'
 		},
 		JustifyLeft:{
 			type:'button',
 			isAdvancedOption:false,
 			_class: 'ed-btn fa fa-align-left',
 			_command: 'JustifyLeft'
 		},
 		JustifyCenter:{
 			type:'button',
 			isAdvancedOption:false,
 			_class: 'ed-btn fa fa-align-center',
 			_command: 'JustifyCenter'
 		},
 		JustifyRight:{
 			type:'button',
 			isAdvancedOption:false,
 			_class: 'ed-btn fa fa-align-right',
 			_command: 'JustifyRight'
 		},
 		JustifyFull:{
 			type:'button',
 			isAdvancedOption:false,
 			_class: 'ed-btn fa fa-align-justify',
 			_command: 'JustifyFull'
 		},
 		JustifyFull:{
 			type:'button',
 			isAdvancedOption:false,
 			_class: 'ed-btn fa fa-align-justify',
 			_command: 'JustifyFull'
 		},
 		InsertOrderedList:{
 			type:'button',
 			isAdvancedOption:false,
 			_class: 'ed-btn fa fa-list-ol',
 			_command: 'InsertOrderedList'
 		},
 		InsertUnOrderedList:{
 			type:'button',
 			isAdvancedOption:false,
 			_class: 'ed-btn fa fa-list-ul',
 			_command: 'InsertUnOrderedList'
 		},
 		indent:{
 			type:'button',
 			isAdvancedOption:false,
 			_class: 'ed-btn fa fa-indent',
 			_command: 'indent'
 		},
 		oudent:{
 			type:'button',
 			isAdvancedOption:false,
 			_class: 'ed-btn fa fa-outdent',
 			_command: 'outdent'
 		},
 		undo:{
 			type:'button',
 			isAdvancedOption:false,
 			_class: 'ed-btn fa fa-undo',
 			_command: 'undo'
 		},
 		redo:{
 			type:'button',
 			isAdvancedOption:false,
 			_class: 'ed-btn fa fa-repeat',
 			_command: 'redo'
 		},
 		link:{
 			type:'popup',
 			isAdvancedOption:true,
 			_class:{ trigger:'ed-btn fa fa-chain', container:'ed-popup-content', button:'ed-submit-btn'},
 			actions:{
 				_default :{ _command:'createLink' }
 			},
 			callback: 'popUpForLink',
 			_title:'Insertar Link'
 		},
 		html:{
 			type:'button',
 			isAdvancedOption:true,
 			_class: 'ed-btn fa fa-code',
 			_command: 'toogleHTML'
 		}
 	};
	// para cada componente que puede contener el objeto jQuery que invoca a esta función
	this.each(function(){
		var self = $(this);
		self.edditor = null;
		self.toolbarContainer = null;

		var fn = {
				exec:function(sCommand,sValue){
					self.edditor.focus();
					if(document.queryCommandSupported(sCommand)){
						document.execCommand(sCommand, false, sValue);
					}else{
						edditorCommands[sCommand](sValue);
					}
					self.edditor.focus();
					self.cloneFromEdditor();
				},

				createDropDown:function(oList){
					var oDropdown = $('<div></div>');
					var oBtn = $('<button class="ed-btn"> <i class="fa fa-angle-down"></i></button>').addClass(oList._class.trigger);
					var oDropDownList = {};
					oBtn.click(function(event){
						event.preventDefault();
						$(this).parent().toggleClass('active');
					});

					oDropdown.attr('data-ed-type','ed-dropdown').addClass('ed-dropdown').append(oBtn);

					if(typeof fn[oList.callback] === 'function') {
						oDropdown.append(oDropDownList = fn[oList.callback](oList));
					}
					return oDropdown;
				},

				createPopUp:function(oPopUp){
					var oDropdown = $('<div></div>');
					var oBtn = $('<button class="ed-btn"></button>').addClass(oPopUp._class.trigger);
					var oDropDownList = {};
					oBtn.click(function(event){
						event.preventDefault();
						$(this).parent().toggleClass('active');
					});

					oDropdown.attr('data-ed-type','ed-popup').addClass('ed-popup').append(oBtn);

					if(typeof fn[oPopUp.callback] === 'function') {
						oDropdown.append(oDropDownList = fn[oPopUp.callback](oPopUp,oPopUp._title));
					}
					return oDropdown;
				},

				createButton:function(oButton,sType){
					var oBtn = $('<button></button>').attr({
							'data-ed-cmd':oButton._command,
							'data-ed-type': sType
						});
					if(typeof oButton._value !== 'undefined'){
						oBtn.attr('data-ed-value',oButton._value);
					}
					if(typeof oButton._class === 'string'){
						oBtn.addClass(oButton._class);
					}
					if(typeof oButton._text === 'string'){
						oBtn.html(oButton._text);
					}
					if(typeof oButton._style === 'string'){
						oBtn.attr('style',oButton._style);
					}
					oBtn.click(function(event){
						event.preventDefault();
						$('[data-ed-type="ed-dropdown"]').removeClass('active');
						var sCommand = $(this).attr('data-ed-cmd');
						var sValue = $(this).attr('data-ed-value');
						fn.exec(sCommand,sValue);
					});
					return oBtn;
				},

				list: function(oList){
					var oContainer = $('<div></div>');
					var oDropDownList = $('<ul></ul>');
					if(typeof oList._class.container === 'string'){
						oContainer.addClass(oList._class.container);
					}
					var aListOfButtons = oList.buttons;
					for(index in aListOfButtons){
						var oTmpBtn = {
				 			_class: (oList._class.button) ? oList._class.button : '',
				 			_command: (oList.actions._default._command) ? oList.actions._default._command : '',
				 		};
				 		var oCustomButton = $.extend({}, oTmpBtn, aListOfButtons[index]);
						var oButton = fn.createButton(oCustomButton,'ed-button');
						var oListItem = $('<li></li>').append(oButton);
						oDropDownList.append(oListItem);
					}
					oContainer.append(oDropDownList);
					return oContainer;
				},

				colorPicker: function(oList){
					var oContainerOfColors = $('<div></div>');
					var oContainerOfSelectors = $('<div></div>').addClass('ed-selector-buttons');
					var oColorList = $('<ul></ul>');
					var aColors = oList.buttons;
					var aComands = oList.actions;

					if(typeof oList._class.container === 'string'){
						oContainerOfColors.addClass(oList._class.container);
					}


					for(index in aColors){
						var oColorButton = {
				 			_class: (oList._class.button) ? oList._class.button : '',
				 			_command: (oList.actions._default._command) ? oList.actions._default._command : '',
				 			_style:'background:'+aColors[index],
				 			_value: aColors[index]
				 		};
						var oButton = fn.createButton(oColorButton,'ed-color-button');
						var oListItem = $('<li></li>').append(oButton);
						oColorList.append(oListItem);
					}
					for(index in aComands){
						var oSelector = $('<button></button>')
						.attr({
							'data-ed-type': 'ed-color-selector',
							'data-ed-value': aComands[index]._command,
						})
						.addClass('ed-color-selector')
						.html(aComands[index]._text);
						if(index=='_default'){
							oSelector.addClass('active');
						}

						oSelector.click(function(event){
							var sCommand = $(this).attr('data-ed-value');
							$('[data-ed-type="ed-color-selector"]').toggleClass('active');
							$('[data-ed-type="ed-color-button"]').attr('data-ed-cmd', sCommand);
						});
						oContainerOfSelectors.append(oSelector);
					}
					oContainerOfColors.append(oColorList);
					oContainerOfColors.append(oContainerOfSelectors);
					return oContainerOfColors;
				},

				popUpForLink:function(oPopUp,title){
					var oContainerPopUp = $('<div></div>');
					if(typeof oPopUp._class.container === 'string'){
						oContainerPopUp.addClass(oPopUp._class.container);
					}
					var oLineTitle = $('<div></div>').addClass('ed-line ed-title').append(title);
					var oLineLink = $('<div></div>').addClass('ed-line');
					var oLineText = $('<div></div>').addClass('ed-line');
					var oLineCheckbox = $('<div></div>').addClass('ed-line');

					var oInputForLink = $('<input>').attr({
						'type': 'text',
						'placeholder':'http://ejemplo.com',
						'data-ed-type':'ed-link'
					});
					var oInputForText = $('<input>').attr({
						'type': 'text',
						'placeholder':'ejemplo',
						'data-ed-type':'ed-text-link'
					});
					var oCheckbox = $('<input>').attr({
						'type': 'checkbox',
						'data-ed-type':'ed-target-link'
					});

					//oLineTitle.append(title);
					oLineLink.append('<label>Dirección URL</label>').append(oInputForLink);
					oLineText.append('<label>Texto a mostrar</label>').append(oInputForText);
					oLineCheckbox.append($('<label>').addClass('ed-checkbox').append(oCheckbox).append('abrir en otra pastaña'));


					oContainerPopUp.append(oLineLink);
					oContainerPopUp.append(oLineText);
					oContainerPopUp.append(oLineCheckbox);

					return oContainerPopUp;
				}
			};

		/** Custom commands **/

		/**
		 * Habilita o deshabilita la edición  por código HTML
		 * @return {void} [no retorna valor]
		 */
		var edditorCommands = {
			toogleHTML:function(){
				self.edditor.toggle();
				self.toggle();
			},
			createLink:function(value){
				alert(link);
			}
		};

		/* Public methods */

		/**
		 * Copia el contenido de el textarea y lo duplica en el editor
		 * @return {void} [no retorna valor]
		 */
		self.cloneFromTextarea = function (){
			self.edditor.html(self.val());
		}

		/**
		 * Copia el contenido del editor y lo duplica en el textarea
		 * @return {void} [no retorna valor]
		 */
		self.cloneFromEdditor = function (){
			self.val(self.edditor.html());
		}

		/**
		 * Crea la lista de botones en la barra de herramientas
		 * @return {void} [no retorna valor]
		 */
		self.createButtons = function(){
			for(i in buttons){
				if(!buttons[i].isAdvancedOption || options.enableAdvancedOptions){
				var button;
				switch(buttons[i].type){
					case 'dropdown':
						button = fn.createDropDown(buttons[i]);
						break;
					case 'button':
						button = fn.createButton(buttons[i]);
						break;
					case 'popup':
						button = fn.createPopUp(buttons[i]);
						break;
					default:;
				}
				self.toolbarContainer.append(button);
				}
			}
		};

		$(this).init(function(){
			var text = self.val();
			text = (text.length>0)?text:'<font size="2" face="Arial"><br></font>';
			self.val(text);
			self.val('<font size="2" face="Arial"><br></font>'+self.val());
			self.toolbarContainer = $('<div></div>').addClass('ed-toolbar');
			self.edditor = $('<div></div>').attr({contenteditable: 'true'}).addClass('edditor');
			$(self.toolbarContainer).insertBefore(self);
			$(self.edditor).insertBefore(self);
			self.addClass('ed-code').hide();
			self.createButtons();
			self.cloneFromTextarea();

			self.on('keyup',function(event){
				self.cloneFromTextarea();
			});
			self.edditor.on('keyup', function(event){
				self.cloneFromEdditor();
			});
			self.edditor.on('focus',function(event) {
				$('[data-ed-type="ed-dropdown"]').removeClass('active');
			});
		});
	});

};
