/*访问后台的代码*/
layui.define([], function(exports) {
    var api={
            updateHistoryBalance:function(form,callback){
                Lib.submitForm("/hbapp/historyBalance/edit.json",form,{},callback)
            },
            addHistoryBalance:function(form,callback){
                Lib.submitForm("/hbapp/historyBalance/add.json",form,{},callback)
            },
            del:function(ids,callback){
                Common.post("/hbapp/historyBalance/delete.json",{"ids":ids},function(){
                    callback();
                })
            }
		
    };
    exports('historyBalanceApi',api);
});