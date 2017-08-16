/*设置鼠标移上去每一行分享的文件变色*/ 

	/*判断是否为最外面的元素被移出了*/
    function isWrapElement(e, thisElement) {
        $relatedElement = e.relatedTarget;
        if ($relatedElement == null) {
            return true;
        }
        var flag = thisElement.compareDocumentPosition($relatedElement);
        return !(flag == 0 || flag == 20);
    }
    /*注册鼠标移入移出样式*/
    function registerOverAndOut(selector,over,out){
    	$(selector).mouseover(function(e){
    		if(isWrapElement(e,this)){
    			if(typeof over=="object"){
    				$(this).css(over);
    			}
    			
    		}
    	});
    	$(selector).mouseout(function(e){
    		if(isWrapElement(e,this)){
    			if(typeof over=="object"){
    				$(this).css(out);
    			}
    		}
    	});
    }
    registerOverAndOut("tr",{"background":"#ffffff"},{"background":""})
    
    /*设置分享的文件,实现全选反选功能*/
    function allselect() {
        
        var ids = document.getElementsByName("ids");
        var all = document.getElementById("all");  
        
        for(var i=0;i<ids.length;i++){
            ids[i].checked=all.checked;
            
             if(all.checked){
                 ids[i].checked=true;
                 $("#change").text("已选中"+ids.length+"个文件/文件夹");
             }else{
                 ids[i].checked=false;
                 $("#change").text("分享文件");
        }
             
    }
    }
    
        $("table input").click(function(){
            var ids = document.getElementsByName("ids");
            var all = document.getElementById("all");
            var count =0;
            
            for(var j=0;j<ids.length;j++){
                
                if (ids[j].checked) {
                    count++;
                    
                    if (count==ids.length) {
                        all.checked=true;
                    }
                }
                
                if (count!=0) {
                    $("#change").text("已选中"+count+"个文件/文件夹");
                    
                }else {
                    all.checked=false;
                    $("#change").text("分享文件");
                    
                }
                
            }
            });
        
        //判断有多少个文件被删除
        $(function() {
            var ids = document.getElementsByName("ids");
            var recycleCount = ids.length;
            $("#recycle-count").text(recycleCount);
        
        })
        
        
       /* $("table input[type='checkbox']").click(function(){
		if($("table input[type='checkbox']:checked").length==1){
		//当复选框选中值大于0，触发一个效果
			 var recyclebtn="<button class='recyclebtn'>还原</button>";
             $("#change").after(recyclebtn);
		}else{
		//否则，效果消失。
			$(".recyclebtn").hide;
		}
		})*/
        /*
        //判断文件是否被选中，是则出现还原按钮，否消失
        $(function() {
        	$("table input[type='checkbox']").is(':checked'){
                 var recyclebtn="<button class='recyclebtn'>还原</button>";
                 $("#change").after(recyclebtn);
                 alert(123);
				}else{
					$(".recyclebtn").hide;
				}
               
        })*/
