function moveToSelected(e){if("next"==e)var s=$(".selected").next();else if("prev"==e)s=$(".selected").prev();else s=e;var l=$(s).next(),t=$(s).prev(),a=$(t).prev(),d=$(l).next();$(s).removeClass().addClass("selected"),$(t).removeClass().addClass("prev"),$(l).removeClass().addClass("next"),$(d).removeClass().addClass("nextRightSecond"),$(a).removeClass().addClass("prevLeftSecond"),$(d).nextAll().removeClass().addClass("hideRight"),$(a).prevAll().removeClass().addClass("hideLeft")}$(document).keydown(function(e){switch(e.which){case 37:moveToSelected("prev");break;case 39:moveToSelected("next");break;default:return}e.preventDefault()}),$("#carousel li").click(function(){moveToSelected($(this))}),$("#prev").click(function(){moveToSelected("prev")}),$("#next").click(function(){moveToSelected("next")});