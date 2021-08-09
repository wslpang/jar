/*访问后台的代码*/
layui.define([], function(exports) {
    var api={
            updateHistoryProfit:function(form,callback){
                Lib.submitForm("/hbapp/historyProfit/edit.json",form,{},callback)
            },
            addHistoryProfit:function(form,callback){
                Lib.submitForm("/hbapp/historyProfit/add.json",form,{},callback)
            },
            del:function(ids,callback){
                Common.post("/hbapp/historyProfit/delete.json",{"ids":ids},function(){
                    callback();
                })
            }
		
    };
    exports('historyProfitApi',api);
});