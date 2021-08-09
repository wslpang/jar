layui.define(['table', 'creditInfoApi'], function(exports) {
    var creditInfoApi = layui.creditInfoApi;
    var table=layui.table;
    var view = {
        init:function(){
        },
        delBatch:function(){
            var data = Common.getMoreDataFromTable(table,"creditInfoTable");
            if(data==null){
                return ;
            }
            Common.openConfirm("确认要删除这些CreditInfo?",function(){
            var ids =Common.concatBatchId(data,"id");
            creditInfoApi.del(ids,function(){
                Common.info("删除成功");
                    dataReload();
                })
            })
        }
    }
    exports('del',view);
	
});