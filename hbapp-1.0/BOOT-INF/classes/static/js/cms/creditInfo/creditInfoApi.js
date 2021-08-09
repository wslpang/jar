/*访问后台的代码*/
layui.define([], function(exports) {
    var api={
            updateCreditInfo:function(form,callback){
                Lib.submitForm("/cms/creditInfo/edit.json",form,{},callback)
            },
            addCreditInfo:function(form,callback){
                Lib.submitForm("/cms/creditInfo/add.json",form,{},callback)
            },
            del:function(ids,callback){
                Common.post("/cms/creditInfo/delete.json",{"ids":ids},function(){
                    callback();
                })
            }
		
    };
    exports('creditInfoApi',api);
});