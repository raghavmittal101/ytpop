var vdURL = $(location).attr('href'); //will get page URL
var wrapper = Popcorn.HTMLYouTubeVideoElement( "#video" );
 
     wrapper.src = "https://www.youtube.com/watch?v=-6dpincZ7Ec";
 
     var pop = Popcorn( wrapper );
    
     var notes = []; 
    pop.play();
     for(i=0; i<notes.length; i++){
    pop.footnote(notes[i]);}
     
    var jsonarr;
     var func = function(){
         var t = pop.currentTime();
         var user = document.getElementById("username").value;
         var text = document.getElementById("annotation").value;
         var header = document.getElementById("header").value;
         var postData = '<li id="myls"><user>&nbsp;by&nbsp;'+user+'</user><header><a class="header" href="#" onclick=pop.currentTime('+t+')>'+header+'</a></header><content>'+text+'</content><time>&nbsp;at '+Math.floor(t)+'&nbsp;sec</time></li>'
         
         notes.push({
         start:t,
         text:postData,
         target:'footnote-div',});
         jsonarr = JSON.stringify(notes);
         console.log('@'+user+':'+header+':'+text+':'+t);
         $(postData).hide().prependTo("#footnote-div").slideDown("fast");
         
 document.getElementById("username").value = ''
 document.getElementById("annotation").value = ''
 document.getElementById("header").value = ''
    // $("#footnote-div").prepend('<li id="myls"><user>@'+user+'</user><header>'+header+'<header><br><content>'+text+'</content><time>at '+Math.floor(t)+' sec</time></li>');
     }
