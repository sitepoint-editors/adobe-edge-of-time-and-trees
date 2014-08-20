/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym, e) {
         /******************************************************
          * Initialize timeline triggers by setting their
          * numbers and ids.
          */
         var len = 8;
         for(var i=0; i<len; i++)
         {
         	// Set trigger state
         	sym.getSymbol("Trigger"+i).$("Text").html(i+1);
         	sym.getSymbol("Trigger"+i).setVariable("id", i);
         }
         
         /******************************************************
          * Sample data model to be visualized in the infographic
          * design. Each entry includes the year and a text snippet.
          */
         var dataModel;
         
         $.getJSON( "redwoods.json", function( json ){
         	dataModel = json;
         });
         
         /******************************************************
          * Handle rollovers and clicks from timeline triggers.
          * Processing events here allows us to handle the triggers
          * as a group.
          */
         var index = -1;
         
         function handleClickEvent( id ){
         
         	// Handle play button click
         	if( id == "play" ){
         
         		// Run the timer...
         		showDetail(0);
         		startTimer();
         	}
         	// Handle timeline trigger clicks
         	else{
         		// Show the detail
         		stopTimer();
         		showDetail( id );
         	}
         }
         // Expose to globally accessible scope
         sym.setVariable("handleClickEvent", handleClickEvent);
         
         /******************************************************
          * Timer support for slideshow playback.
          */
         var loop = false,
         	 timer = null,
         	 timerDelay = 8000,
         	 timeoutDelay = 500;
         
         function setState( id, state, animation, remove, removeAfter ){
         
         	var symbol = sym.getSymbol(id);
         	if( symbol ){
         		 symbol.play(animation);
         		 symbol.setVariable("selected", state);
         
         		if( remove ){
         			setTimeout(function(){
         				symbol.deleteSymbol();
         			}, removeAfter);
         		}
         	}
         }
         
         function showDetail( id ){
         
         	// Hide play button (if needed)
         	setState("PlayButton", true, "hide", true, 1000);
         
         	// Reset last timeline selection
         	setState("Trigger"+index, false, "rollout");
         
         	// Save new selection
         	index = id;
         
         	// Select next timeline trigger
         	setState("Trigger"+index, true, "rollover");
         
         	// Show details
         	var data = dataModel[index];
         	var anim = sym.getSymbol("DetailPanelAnimation");
         	var details = anim.getSymbol("DetailPanel");
         	if( details )
         	{
         		 // Transition out
         		 if( anim.getPosition() > 0 ){
         			  anim.play("hide");
         		 }
         		 // Transition in with new data...
         		 setTimeout(function()
         		 {
         			 details.$("Year").html(data.year+" AD");
         			 details.$("Caption").html(data.title);
         			 details.$("Details").html("<div style='width=600px'>"+data.text+"</div>");
         			 anim.play("show");
         		 }, 
         		 timeoutDelay);
         	}
         }
         
         function startTimer(){
         
         	if( timer == null ){
         		 timer = setInterval(function(){
         
         			 var id = index+1;
         			 if( id == dataModel.length ){
         				 if( loop ){
         					 id = 0;
         				 }else{
         				 	 stopTimer();
         					 return;
         				 }
         			 }
         			 showDetail(id);
         		 }, 
         		 timerDelay);
         	}
         }
         
         function stopTimer(){
         
         	if( timer ){
         		clearInterval(timer);
         		timer = null;
         	}
         }

      });
      //Edge binding end

      

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'PlayButton'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1750, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1750, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2750, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3750, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4750, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         function handleEvent( event ){
         
         	if(!sym.getVariable("selected") )
         	{
         		switch( event ){
         			case "mouseover":
         				sym.play("rollover");
         				break;
         			case "mouseout":
         				sym.play("rollout");
         				break;
         			case "click":
         				// Callback to controller function
         				var id = sym.getVariable("id");
         				var callback = sym.getComposition().
         										 getStage().
         										 getVariable("handleClickEvent");
         				callback( id );
         				break;
         		}
         	}
         }
         // Relay button events to handleEvent
         sym.$("Hitarea").on("mouseover mouseout click", function(e)
         {
         	handleEvent(e.type);
         });
         // Set variable defaults
         sym.setVariable("id", "play");

      });
      //Edge binding end

   })("PlayButton");
   //Edge symbol end:'PlayButton'

   //=========================================================
   
   //Edge symbol: 'TimelineTrigger'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2514, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         function handleEvent( event ){
         
         	if(!sym.getVariable("selected") )
         	{
         		switch( event ){
         			case "mouseover":
         				sym.play("rollover");
         				break;
         			case "mouseout":
         				sym.play("rollout");
         				break;
         			case "click":
         				// Callback to controller function
         				var id = sym.getVariable("id");
         				var callback = sym.getComposition().
         										 getStage().
         										 getVariable("handleClickEvent");
         				callback( id );
         				break;
         		}
         	}
         }
         // Relay trigger events to handleEvent
         sym.$("Hitarea").on("mouseover mouseout click", function(e)
         {
         	handleEvent(e.type);
         });
         // Set variable defaults
         sym.setVariable("id", null);

      });
      //Edge binding end

      

   })("TimelineTrigger");
   //Edge symbol end:'TimelineTrigger'

   //=========================================================
   
   //Edge symbol: 'DetailPanel'
   (function(symbolName) {   
   
   })("DetailPanel");
   //Edge symbol end:'DetailPanel'

   //=========================================================
   
   //Edge symbol: 'DetailPanelAnimation'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1750, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("DetailPanelAnimation");
   //Edge symbol end:'DetailPanelAnimation'

   //=========================================================
   
   //Edge symbol: 'GridText'
   (function(symbolName) {   
   
   })("GridText");
   //Edge symbol end:'GridText'

})(jQuery, AdobeEdge, "EDGE-264816188");