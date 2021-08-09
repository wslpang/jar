layui.define(['table', 'hbappUserApi'], function(exports) {
    var hbappUserApi = layui.hbappUserApi;
    var table=layui.table;
    var view = {
        init:function(){
        },
        delBatch:function(){
            var data = Common.getMoreDataFromTable(table,"hbappUserTable");
            if(data==null){
                return ;
            }
            Common.openConfirm("确认要删除这些HbappUser?",function(){
            var ids =Common.concatBatchId(data,"id");
            hbappUserApi.del(ids,function(){
                Common.info("删除成功");
                    dataReload();
                })
            })
        }
    }
    exports('del',view);
	
});