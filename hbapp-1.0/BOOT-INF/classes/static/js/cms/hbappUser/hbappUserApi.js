/*访问后台的代码*/
layui.define([], function(exports) {
    var api={
            updateHbappUser:function(form,callback){
                Lib.submitForm("/cms/hbappUser/edit.json",form,{},callback)
            },
            addHbappUser:function(form,callback){
                Lib.submitForm("/cms/hbappUser/add.json",form,{},callback)
            },
            del:function(ids,callback){
                Common.post("/cms/hbappUser/delete.json",{"ids":ids},function(){
                    callback();
                })
            }
		
    };
    exports('hbappUserApi',api);
});