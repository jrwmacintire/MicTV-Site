function lizardDown(e){$("#l"+e).css({display:"none"}),$("#l"+(e+1)).css({display:"block"})}function lizardUp(e){$("#l"+e).css({display:"block"}),$("#l"+(e+1)).css({display:"none"})}var knobAngle=0,w=0,pink=!0;$("#bgColor").on("click",function(){w=$(document).width(),pink?(pink=!1,$("body").css({background:"rgba(117, 216, 102, 0.32)"})):(pink=!0,$("body").css({background:"rgba(224, 172, 155, 0.25)"}))});var lizId,frames=document.getElementById("animation"),frameCount=7,i=1;$("div#animation").on("mousedown",function(){for(;i<4;)lizardDown(lizId=i),i++}).on("mouseup",function(){for(;i<=frameCount;)lizardUp(lizId=frameCount-(i-1)),i++;lizId=i=1});var validName,validEmail,validPhone,validMessage,test,form=document.getElementsByTagName("form")[0],fname=document.getElementById("name"),femail=document.getElementById("email"),fone=document.getElementById("phone"),fmessage=document.getElementById("message"),nameRegExp=/^[a-zA-Z0-9]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/,emailRegExp=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,phoneRegExp=/^[0-9]{3}-[0-9]{3}-[0-9]{4}/,simplePhoneRegExp=/^[0-9]{10}/;femail.addEventListener("input",function(){(test=emailRegExp.test(femail.value))&&(validEmail=!0,$("div.email i.success").css({display:"block"}),$("div.email i.failure").css({display:"none"}),$("#submit").click(!0)),test||(validEmail=!1,$("div.email i.success").css({display:"none"}))}),fname.addEventListener("input",function(e){(test=nameRegExp.test(fname.value))?(validName=!0,$("div.name i.success").css({display:"block"}),$("div.name i.failure").css({display:"none"}),$("#submit").click(!0)):(validName=!1,$("div.name i.success").css({display:"none"}))}),fone.addEventListener("input",function(e){test=phoneRegExp.test(fone.value);var i=simplePhoneRegExp.test(fone.value);test||i?(validPhone=!0,$("div.phone i.success").css({display:"block"}),$("div.phone i.failure").css({display:"none"}),$("#submit").click(!0)):(validPhone=!1,$("div.phone i.success").css({display:"none"}))}),fmessage.addEventListener("input",function(){fmessage.value.length>6?(validMessage=!0,$("div.message i.success").css({display:"block"}),$("div.message i.failure").css({display:"none"}),$("#submit").click(!0)):(validMessage=!1,$("div.message i.success").css({display:"none"}))}),$("#submit").on("click",function(){validName&&validEmail&&validPhone&&validMessage?($("div.submit button").css({display:"none"}),$("div.submit h3").css({display:"block"}),$("div.submit p").css({display:"block"})):$("div.submit button").css({display:"block"})});