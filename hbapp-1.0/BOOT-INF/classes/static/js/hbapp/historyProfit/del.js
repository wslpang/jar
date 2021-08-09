layui.define(['table', 'historyProfitApi'], function(exports) {
    var historyProfitApi = layui.historyProfitApi;
    var table=layui.table;
    var view = {
        init:function(){
        },
        delBatch:function(){
            var data = Common.getMoreDataFromTable(table,"historyProfitTable");
            if(data==null){
                return ;
            }
            Common.openConfirm("确认要删除这些HistoryProfit?",function(){
            var ids =Common.concatBatchId(data,"id");
            historyProfitApi.del(ids,function(){
                Common.info("删除成功");
                    dataReload();
                })
            })
        }
    }
    exports('del',view);
	
});