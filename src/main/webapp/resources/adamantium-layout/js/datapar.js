$( document ).ready(function() {

// ---------- ESCONDE MENU ----------	
	
	var mainHeader = $('.cd-auto-hide-header'),
	secondaryNavigation = $('.cd-secondary-nav'),
	//this applies only if secondary nav is below intro section
	belowNavHeroContent = $('.sub-nav-hero'),
	headerHeight = mainHeader.height();

//set scrolling variables
var scrolling = false,
	previousTop = 0,
	currentTop = 0,
	scrollDelta = 10,
	scrollOffset = 150;

mainHeader.on('click', '.nav-trigger', function(event){
	// open primary navigation on mobile
	event.preventDefault();
	mainHeader.toggleClass('nav-open');
});

$(window).on('scroll', function(){
	if( !scrolling ) {
		scrolling = true;
		(!window.requestAnimationFrame)
			? setTimeout(autoHideHeader, 250)
			: requestAnimationFrame(autoHideHeader);
	}
});

$(window).on('resize', function(){
	headerHeight = mainHeader.height();
});

function autoHideHeader() {
	var currentTop = $(window).scrollTop();

	( belowNavHeroContent.length > 0 ) 
		? checkStickyNavigation(currentTop) // secondary navigation below intro
		: checkSimpleNavigation(currentTop);

   	previousTop = currentTop;
	scrolling = false;
}

function checkSimpleNavigation(currentTop) {
	//there's no secondary nav or secondary nav is below primary nav
    if (previousTop - currentTop > scrollDelta) {
    	//if scrolling up...
    	mainHeader.removeClass('is-hidden');
    } else if( currentTop - previousTop > scrollDelta && currentTop > scrollOffset) {
    	//if scrolling down...
    	mainHeader.addClass('is-hidden');
    }
}

function checkStickyNavigation(currentTop) {
	//secondary nav below intro section - sticky secondary nav
	var secondaryNavOffsetTop = belowNavHeroContent.offset().top - secondaryNavigation.height() - mainHeader.height();
	
	if (previousTop >= currentTop ) {
    	//if scrolling up... 
    	if( currentTop < secondaryNavOffsetTop ) {
    		//secondary nav is not fixed
    		mainHeader.removeClass('is-hidden');
    		secondaryNavigation.removeClass('fixed slide-up');
    		belowNavHeroContent.removeClass('secondary-nav-fixed');
    	} else if( previousTop - currentTop > scrollDelta ) {
    		//secondary nav is fixed
    		mainHeader.removeClass('is-hidden');
    		secondaryNavigation.removeClass('slide-up').addClass('fixed'); 
    		belowNavHeroContent.addClass('secondary-nav-fixed');
    	}
    	
    } else {
    	//if scrolling down...	
 	  	if( currentTop > secondaryNavOffsetTop + scrollOffset ) {
 	  		//hide primary nav
    		mainHeader.addClass('is-hidden');
    		secondaryNavigation.addClass('fixed slide-up');
    		belowNavHeroContent.addClass('secondary-nav-fixed');
    	} else if( currentTop > secondaryNavOffsetTop ) {
    		//once the secondary nav is fixed, do not hide primary nav if you haven't scrolled more than scrollOffset 
    		mainHeader.removeClass('is-hidden');
    		secondaryNavigation.addClass('fixed').removeClass('slide-up');
    		belowNavHeroContent.addClass('secondary-nav-fixed');
    	}

    }
}
	
	
	
// ---------- BOTÃO MAIS ----------

	  	$('.ui-stack > img').on('click', function(event) {
//	  		debugger
	  		var clicks = $(this).data('clicks');
	  		
	  		if (clicks) {
	  			$(this).addClass('botao-mais-fecha');
	  			$(this).removeClass('botao-mais-abre');
	  			$('.background-botao-mais').removeClass('background-botao-mais-aumenta');
	  			$('.background-botao-mais').addClass('background-botao-mais-diminui');
	  			
	  			
	  		} else {
	  			$(this).addClass('botao-mais-abre');
	  			$(this).removeClass('botao-mais-fecha');
	  			$('.background-botao-mais').addClass('background-botao-mais-aumenta');
	  			$('.background-botao-mais').removeClass('background-botao-mais-diminui');
	  		}
	  		$(this).data("clicks", !clicks);
	  	});
	  	
	  	
	  	$('.ui-stack li span').hide();
	  	
	  	$('.ui-stack li').mouseenter(function() {
	  		
	  		$("span", this).fadeIn('fast');
	  			
	  	});
	  	
	  	$('.ui-stack li').mouseleave(function() {
	  		
	  		$("span", this).fadeOut('fast');
	  			
	  	});
	  	
	  	
       $('.background-botao-mais').on('click', function(event){
    	   
           $('.ui-stack > img').trigger('click');

       });	  	
        

	   $('#principal\\:botaoMaisConsulta > img').trigger('click');
	 
	  	
	  	
// ---------- WIZARD ----------
 	
       	$('#principal\\:botaoDadosIniciais').on('click', function(event) {  	
            
       	    $('.clicado').addClass('nao-clicado');
       	    $('.clicado').removeClass('clicado');
       	    
       	    $(this).addClass('clicado');
       	    $(this).removeClass('nao-clicado');
       	    
       	    $('#spanDadosIniciais').addClass('span-visivel');
       	    $('#spanMercadorias').removeClass('span-visivel');
       	    $('#spanFinanceiro').removeClass('span-visivel');
       	    $('#spanComprovante').removeClass('span-visivel');
       	    
            $('#principal\\:dadosIniciais').show();    
            $('#principal\\:mercadorias').hide(); 
            $('#principal\\:financeiro').hide(); 
            $('#principal\\:comprovante').hide(); 

       	});
       	
       	
       	$('#principal\\:botaoMercadorias').on('click', function(event) {  	
            
       	    $('.clicado').addClass('nao-clicado');
       	    $('.clicado').removeClass('clicado');
       	    
       	    $(this).addClass('clicado');
       	    $(this).removeClass('nao-clicado');
       	    
       	    $('#spanDadosIniciais').removeClass('span-visivel');
       	    $('#spanMercadorias').addClass('span-visivel');
  
       	    $('#spanFinanceiro').removeClass('span-visivel');
       	    $('#spanComprovante').removeClass('span-visivel');       	    
       	    
            $('#principal\\:dadosIniciais').hide();    
            $('#principal\\:mercadorias').show(); 
 
            $('#principal\\:financeiro').hide(); 
            $('#principal\\:comprovante').hide();        	    

       	});
       	
     
       	
       	
       	$('#principal\\:botaoFinanceiro').on('click', function(event) {  	
            
       	    $('.clicado').addClass('nao-clicado');
       	    $('.clicado').removeClass('clicado');
       	    
       	    $(this).addClass('clicado');
       	    $(this).removeClass('nao-clicado');
       	    
       	    $('#spanDadosIniciais').removeClass('span-visivel');
       	    $('#spanMercadorias').removeClass('span-visivel');
       	    $('#spanFinanceiro').addClass('span-visivel');
       	    $('#spanComprovante').removeClass('span-visivel');       	    

            $('#principal\\:dadosIniciais').hide();    
            $('#principal\\:mercadorias').hide(); 
            $('#principal\\:financeiro').show(); 
            $('#principal\\:comprovante').hide();        	    

       	});
       	
       	$('#principal\\:botaoComprovante').on('click', function(event) {  	
            
       	    $('.clicado').addClass('nao-clicado');
       	    $('.clicado').removeClass('clicado');
       	    
       	    $(this).addClass('clicado');
       	    $(this).removeClass('nao-clicado');
       	    
       	    $('#spanDadosIniciais').removeClass('span-visivel');
       	    $('#spanMercadorias').removeClass('span-visivel');
       	    $('#spanFinanceiro').removeClass('span-visivel');
       	    $('#spanComprovante').addClass('span-visivel');       	    
       	    
            $('#principal\\:dadosIniciais').hide();    
            $('#principal\\:mercadorias').hide(); 
            $('#principal\\:financeiro').hide(); 
            $('#principal\\:comprovante').show();        	    
			
       	});    
       	
       	
		PrimeFaces.locales["es_PY"] = {
			   closeText: "Cerrar",
			   prevText: "Anterior",
			   nextText: "Siguiente",
			   monthNames: ["Enero","Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
			   monthNamesShort: ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"],
			   dayNames: ["Domingo", "Lunes", "Martes", "Mi�rcoles", "Jueves", "Viernes", "S�bado"],
			   dayNamesShort: ["Dom", "Lun", "Mar", "Mie", "Jue", "Vie", "Sab"],
			   dayNamesMin: ["Do", "Lu", "Ma", "Mi", "Ju", "Vi", "Sa"],
			   weekHeader: "Semana",
			   firstDay: 0,
			   isRTL: false,
			   showMonthAfterYear: false,
			   yearSuffix: "",
			   timeOnlyTitle: "Solo hora",
			   timeText: "Tiempo",
			   hourText: "Hora",
			   minuteText: "Minuto",
			   secondText: "Segundo",
			   currentText: "Fecha actual",
			   ampm: false,
			   month: "Mes",
			   week: "Semana",
			   day: "D�a",
			   allDayText : "Todo el d�a"
		};

	$(window).bind("load", function() {
		 //Which will run only after page is fully loaded in background.
		prepareHandlerByEnterKey()
	});
});







PrimeFaces.widget.AutoComplete.prototype.search = function(c) {
  if (!this.cfg.active || c === undefined || c === null) {
    return
  }
  if (this.cfg.cache && this.cache[c]) {
    this.panel.html(this.cache[c]);
    this.showSuggestions(c);
    return
  }
  if (!this.active) {
    return
  }
  this.querying = true;
  var d = this;
  if (this.cfg.itemtip) {
    this.itemtip.hide()
  }
  var b = {
    source: this.id,
    process: this.id,
    update: this.id,
    formId: this.cfg.formId,
    onsuccess: function(g, e, f) {
      PrimeFaces.ajax.Response.handle(g, e, f, {
        widget: d,
        handle: function(h) {
          this.panel.html(h);
          if (this.cfg.cache) {
            this.cache[c] = h
          }
          let items = this.panel.find(".ui-autocomplete-item");
          if(items.length == 1){
        	  //debugger
        	  let isSearchForId = this.input[0].value == items[0].dataset.itemValue;
        	  this.input[0].value = items[0].dataset.itemValue;
        	  this.hinput[0].value = items[0].dataset.itemValue;
        	  updatePrimefacesEl(this.id);
        	  //solo debe disparar cuando se busca por algo diferente al codigo, si es codigo ya dispara el evento change por si solo.
        	  if(!isSearchForId){
        		  //console.log('search diferente a id o codigo')
        		  $(this.input).trigger("change");
        	  }
        	  //console.log('search igual a id o codigo')
          }else{
        	  this.showSuggestions(c)
          }
        }
      });
      return true
    },
    oncomplete: function() {
      d.querying = false
    }
  };
  b.params = [{
    name: this.id + "_query",
    value: c
  }];
  if (this.hasBehavior("query")) {
    var a = this.cfg.behaviors.query;
    a.call(this, b)
  } else {
    PrimeFaces.ajax.AjaxRequest(b)
  }
}

/**
* Hará el bind del evento keydown de todos los componentes button, input y selecOneMenu solo
* si el key presionado es el "Enter". Si es así llamará la función goToNextValidElement().
*/
let selector = 'button, input:not(:hidden, :disabled)';
function prepareHandlerByEnterKey(){	
	$(document).on('keydown', selector, function(e) {
		if (e.keyCode == 13){
			goToNextValidElement(e.target);
		}
	});
	PrimeFaces.widget.SelectOneMenu.prototype.handleEnterKey = function(e) {
		if(this.panel.is(":visible")){
			this.selectItem(this.getActiveItem())
		}else{
			if (e.keyCode == 13){
				goToNextValidElement(e.target);
			}
		}
		e.preventDefault();
		e.stopPropagation();
	}
}
/**
* Hará focus al sgte. elemento en relación al elemento recibido.
* OBS: Solo funcionará con elementos contenidos por un panelGrid.
*/
function goToNextValidElement(el){
	//debugger
	var me = $(el)
	,nextElNear = $(me).next(selector)
	,currentElIsButton = $(me).is('button')
	,nearButton = !currentElIsButton ? $(me).parents('.ui-panelgrid-cell').find('button') : []
	,nextElInNextColumn = $(me).parents('.ui-panelgrid-cell').next('.ui-panelgrid-cell')
	,nextElInNextColumnIfNotDisable = nextElInNextColumn.length > 0 ? (nextElInNextColumn.find(selector).length > 0 ? nextElInNextColumn : []) : []
	,nextColumInCurrenRow = nextElInNextColumn[0]
	,currentRowChildren = $(me).parents('.ui-grid-row').children()
	,lastColumnInCurrentRow = $(currentRowChildren).last();

	if(nextElInNextColumnIfNotDisable.length == 0 && typeof(nextColumInCurrenRow) !== 'undefined' && nextColumInCurrenRow !== lastColumnInCurrentRow){
		var nextElInNextColumnIfNotDisable = currentRowChildren.filter(function(index, item){
			return $(nextColumInCurrenRow).index()+1 == index;
		})					
	}

	var nextRow = $(me).parents('.ui-grid-row').next('.ui-grid-row')
	,nextPanel = $(me).parents('.ui-panelgrid').next('.ui-panelgrid')
	,firstPanel = $(me).parents('.ui-panelgrid').parent().find('.ui-panelgrid').first()				
	,hasNext = nextElNear.length > 0 || nearButton.length > 0 || nextElInNextColumnIfNotDisable.length > 0 || nextRow.length > 0 || nextPanel.length > 0 || firstPanel.length > 0
	,next = nextElNear.length > 0 ? nextElNear : (nearButton.length > 0 ? nearButton : (nextElInNextColumnIfNotDisable.length > 0 ? nextElInNextColumnIfNotDisable : (nextRow.length > 0 ? nextRow : (nextPanel.length > 0 ? nextPanel : firstPanel))))
	,currentElIsSomeKindOfSelector = $(next[0]).is(selector)
	,searchForSomeKindOfSelector = $(next[0]).find(selector)
	,candidatesToFocus = hasNext ? (currentElIsSomeKindOfSelector ? $(next[0]): searchForSomeKindOfSelector) : undefined
	,toFocus = candidatesToFocus ? candidatesToFocus[0] : undefined;

	toFocus ? (currentElIsButton && !$(me).is('.inputButton, .ui-datepicker-trigger') ? $(me).trigger('click') : $(toFocus).focus()) :console.log('no next');
}

function fecharBotaoMais(){
	//Para cerrar y actualizar
	$('.ui-stack > img').addClass('botao-mais-fecha');
	$('.ui-stack > img').removeClass('botao-mais-abre');
	$('.background-botao-mais').removeClass('background-botao-mais-aumenta');
	$('.background-botao-mais').addClass('background-botao-mais-diminui');
	$('.ui-stack > img').data("clicks", false);
	
	//No se porque esta perdiendo el evento entonces es necesario re-hacer el bind 
	$('.ui-stack > img').on('click', function(event) {
  		var clicks = $(this).data('clicks');
  		
  		if (clicks) {
  			$(this).addClass('botao-mais-fecha');
  			$(this).removeClass('botao-mais-abre');
  			$('.background-botao-mais').removeClass('background-botao-mais-aumenta');
  			$('.background-botao-mais').addClass('background-botao-mais-diminui');
  			
  			
  		} else {
  			$(this).addClass('botao-mais-abre');
  			$(this).removeClass('botao-mais-fecha');
  			$('.background-botao-mais').addClass('background-botao-mais-aumenta');
  			$('.background-botao-mais').removeClass('background-botao-mais-diminui');
  		}
  		$(this).data("clicks", !clicks);
  	});
}

function updatePrimefacesEl(id){
	PrimeFaces.ab({s:id,u:id});
}

function focusEl(id){
	setTimeout(function(){
		$(PrimeFaces.escapeClientId(id)+' :focusable').focus();
	},100);
}

function selecionaTabFinanceiroPorCondicao(){
	const CONDICAO_A_VISTA = 1, CONDICAO_CHEQUE = 2, CONDICAO_CREDITO = 4;
	
	var condicao = $(PrimeFaces.escapeClientId('principal:condicaoFatura') +' option:selected' ).val();
	
	let tabIndex = 2;
	if(condicao == CONDICAO_A_VISTA){
		tabIndex = 0;
	}else if(condicao == CONDICAO_CHEQUE){
		tabIndex = 4;
	}
	
	PF('tabViewFinanceiro').select(tabIndex);
}

function imprimirModelosImpressaoFatura(args){
	if (args && !args.validationFailed){
		document.getElementById('principal:showReportFatura').click(); 
		setTimeout(function(){
			document.getElementById('principal:showReportFaturaInterna').click()
		},50); 
	}
}