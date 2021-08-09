/*访问后台的代码*/
layui.define([], function(exports) {
    var api={
            updateUserCoinType:function(form,callback){
                Lib.submitForm("/hbapp/userCoinType/edit.json",form,{},callback)
            },
            addUserCoinType:function(form,callback){
                Lib.submitForm("/hbapp/userCoinType/add.json",form,{},callback)
            },
            del:function(ids,callback){
                Common.post("/hbapp/userCoinType/delete.json",{"ids":ids},function(){
                    callback();
                })
            }
		
    };
    exports('userCoinTypeApi',api);
});