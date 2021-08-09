/*访问后台的代码*/
layui.define([], function(exports) {
    var api={
            updateContractInfo:function(form,callback){
                Lib.submitForm("/hbapp/contractInfo/edit.json",form,{},callback)
            },
            addContractInfo:function(form,callback){
                Lib.submitForm("/hbapp/contractInfo/add.json",form,{},callback)
            },
            del:function(ids,callback){
                Common.post("/hbapp/contractInfo/delete.json",{"ids":ids},function(){
                    callback();
                })
            }
		
    };
    exports('contractInfoApi',api);
});