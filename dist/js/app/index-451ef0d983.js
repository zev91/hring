!function t(e,n,r){function i(s,o){if(!n[s]){if(!e[s]){var c="function"==typeof require&&require;if(!o&&c)return c(s,!0);if(a)return a(s,!0);throw new Error("Cannot find module '"+s+"'")}var p=n[s]={exports:{}};e[s][0].call(p.exports,function(t){return i(e[s][1][t]||t)},p,p.exports,t,e,n,r)}return n[s].exports}for(var a="function"==typeof require&&require,s=0;s<r.length;s++)i(r[s]);return i}({1:[function(t,e,n){!function(){function t(t){var e=$(".bubble_ct .bubble");e.removeClass("active"),$(e[t]).addClass("active")}$.fn.prevAll=function(t){var e=[],n=this[0];if(!n)return $([]);for(;n.previousElementSibling;){var r=n.previousElementSibling;t?$(r).is(t)&&e.push(r):e.push(r),n=r}return $(e)},$.fn.nextAll=function(t){var e=[],n=this[0];if(!n)return $([]);for(;n.nextElementSibling;){var r=n.nextElementSibling;t?$(r).is(t)&&e.push(r):e.push(r),n=r}return $(e)},H5FullscreenPage.init({type:3,pageShow:function(t){},pageHide:function(t){}});var e=$(window).width(),n=$(window).height();.65>e/n>.57&&$(".item1 .qt_slogan").css("margin-top","3vw"),e/n>.65&&($(".item1 .qt_slogan").css("margin-top","3vw"),$(".item1 .qr_code ").css("margin-top","1.4vw"),$(".item1 .qt_logo ").css("top","3.2vw"),$(".item1 .qt_logo ").css("left","3.2vw"),$(".about .profile>p.align_left").css("margin","2.8vw 0"),$(".about .profile").css("padding-top","0"),$(".jobs .jobs_btn .btn ").css("margin-bottom","1.2vw"),$(".jobs .job_info p ").css("margin","1.2vw 0"),$(".jobs .eveirment_ct").css("height","103vw"));var r,i,a;$(".imagec_ct").bind("touchstart",function(t){var e=t.touches[0];r={x:e.pageX}}).bind("touchmove",function(t){var e=t.touches[0];i={x:e.pageX},a=i.x-r.x});var s=parseInt($(".eveirment_ct").width()),o=$(".imagec_ct").css("margin-left"),c=parseInt(o),p=0;t(p),$(".imagec_ct").swipeLeft(function(){$(".arrow_width").css("display","none"),Math.abs(a)>20&&(c==2*-s?(c=0,p=0):(c-=s,p+=1),$(".imagec_ct").css("margin-left",c+"px"),t(p))}),$(".imagec_ct").swipeRight(function(){$(".arrow_width").css("display","none"),Math.abs(a)>20&&(0==c?(c=2*-s,p=2):(c+=s,p-=1),$(".imagec_ct").css("margin-left",c+"px"),t(p))}),$("body").on("tap",".skip_to",function(t){t.preventDefault;var e=$(".item"),n=$(this).index()+4;e.removeAttr("state"),{prevSlide:function(t){t.css("-webkit-transform","translate3d(0,0,0)")}}.prevSlide($(e[n])),$(e[n]).prevAll().css("-webkit-transform","translate3d(0px, -100%, 0px)"),function(t){$(t).find(".part").forEach(function(t){var e=$(t).attr("data-delay")||100;setTimeout(function(){$(t).removeClass("hide")},e)})}(e[n]),$(e[n]).prev().length&&($(e[n]).prev().attr("state","prev"),$(e[n]).attr("state","next"))}),$(".back_menu").on("tap",function(){console.log("tap");var t=$(".item");t.removeAttr("state"),$(t[2]).attr("state","prev"),$(t[3]).attr("state","next"),$(t[3]).css("-webkit-transform","translate3d(0,0,0)"),$(t[3]).prevAll().css("-webkit-transform","translate3d(0px, -100%, 0px)")})}()},{}]},{},[1]);