!function t(e,n,r){function i(o,a){if(!n[o]){if(!e[o]){var f="function"==typeof require&&require;if(!a&&f)return f(o,!0);if(s)return s(o,!0);throw new Error("Cannot find module '"+o+"'")}var u=n[o]={exports:{}};e[o][0].call(u.exports,function(t){return i(e[o][1][t]||t)},u,u.exports,t,e,n,r)}return n[o].exports}for(var s="function"==typeof require&&require,o=0;o<r.length;o++)i(r[o]);return i}({1:[function(t,e,n){!function(){$.fn.prevAll=function(t){var e=[],n=this[0];if(!n)return $([]);for(;n.previousElementSibling;){var r=n.previousElementSibling;t?$(r).is(t)&&e.push(r):e.push(r),n=r}return $(e)},$.fn.nextAll=function(t){var e=[],n=this[0];if(!n)return $([]);for(;n.nextElementSibling;){var r=n.nextElementSibling;t?$(r).is(t)&&e.push(r):e.push(r),n=r}return $(e)},H5FullscreenPage.init({type:2,pageShow:function(t){},pageHide:function(t){}});var t=$(window).width(),e=$(window).height(),n=t/e>.597?.597/(t/e)*75:750;$("html").css("font-size",n+"px"),$("body").on("tap",".skip_to",function(t){t.preventDefault;var e={upDrag:function(t){t.css("-webkit-transform","scale(1)"),t.next().css("-webkit-transform","translate3d(0,100%,0)")},downDrag:function(t){t.css("-webkit-transform","translate3d(0,100%,0)"),t.prev().css("-webkit-transform","scale(1)")},nextSlide:function(t){t.css("-webkit-transform","scale(.8)"),t.next().css("-webkit-transform","translate3d(0,0,0)")},prevSlide:function(t){t.prev().css("-webkit-transform","scale(1)"),t.css("-webkit-transform","translate3d(0,100%,0)")},showSlide:function(t){t.css("-webkit-transform","scale(1)"),t.next().css("-webkit-transform","translate3d(0,100%,0)")}},n=$(".item"),r=$(this).index()+3;n.removeAttr("state"),e.upDrag($(n[r])),e.downDrag($(n[r])),e.nextSlide($(n[r])),e.prevSlide($(n[r])),e.showSlide($(n[r])),$(n[r]).prevAll().css("-webkit-transform","scale(.8)"),function(t){$(t).find(".part").forEach(function(t){var e=$(t).attr("data-delay")||100;setTimeout(function(){$(t).removeClass("hide")},e)})}(n[r]),$(n[r]).prev().length&&($(n[r]).prev().attr("state","prev"),$(n[r]).attr("state","next"))})}()},{}]},{},[1]);