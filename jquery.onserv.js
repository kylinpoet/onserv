/**
Name  :jQuery Onserv  1.0 
Team  :�߿տƼ� WwW.UaUc.Net  
Author:Yaseng  Yaseng@UAUC.NET  
Desc  :jQuery �ͷ�չʾ���
Url   :http://www.uauc.net/product/onsrev.html
Usage :$("#serv").onserv({
	 top:70,            // �߶�
	 left:-156          //����
	 fx:"linuer",       //������Ч  
	 speed:150,         //����ʱ��
	 opacity:0.9        //͸����
	 });
*/
(function($) {
$.fn.lastScrollY= 0;
	$.fn.onserv = function(o) {

		o = $.extend({
			top:80,
			left:-156,
			fx: "linear",
			speed: 150,
			opacity:0.9
		},
		o || {});
        $(this).show().addClass("onserv");
		return this.each(function() {
								  
		     
								  
       $(this).css("top",o.top+"px").css("left",o.left+"px").css("position",'absolute').css("opacity",o.opacity).
	   css("filter","alpha(opacity=" + parseInt(o.opacity * 100)  + ")");
			
			 window.onscroll = function(){
		 
             
             p= Math.max(document.documentElement.scrollTop,document.body.scrollTop) - $.fn.lastScrollY; 
			 p=(p > 0) ? Math.ceil(p) : Math.floor(p);
      
             
             $(".onserv").css("top", parseInt($(".onserv").css("top")) + p + "px");
	 
             $.fn.lastScrollY += p;
			
			
			 }
			  var state=0;   
				 
			 $(this).hover(function() {
				
			 
					
				if(state==0){
				$(this).animate({left:"-1px"},o.speed,o.fx,function(){ state=1;});
				}
			 
				 
            },function() {
      
              
	             if(state==1){
                $(this).animate({left:o.left+"px"},o.speed,o.fx,function(){ state=0;});
				 }
				

             });

		});

	}

})(jQuery);