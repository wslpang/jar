/*访问后台的代码*/
layui.define([], function(exports) {
    var api={
            updateHistoryContract:function(form,callback){
                Lib.submitForm("/hbapp/historyContract/edit.json",form,{},callback)
            },
            addHistoryContract:function(form,callback){
                Lib.submitForm("/hbapp/historyContract/add.json",form,{},callback)
            },
            del:function(ids,callback){
                Common.post("/hbapp/historyContract/delete.json",{"ids":ids},function(){
                    callback();
                })
            }
		
    };
    exports('historyContractApi',api);
});