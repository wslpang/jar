layui.define(['table', 'historyBalanceApi'], function(exports) {
    var historyBalanceApi = layui.historyBalanceApi;
    var table=layui.table;
    var view = {
        init:function(){
        },
        delBatch:function(){
            var data = Common.getMoreDataFromTable(table,"historyBalanceTable");
            if(data==null){
                return ;
            }
            Common.openConfirm("确认要删除这些HistoryBalance?",function(){
            var ids =Common.concatBatchId(data,"id");
            historyBalanceApi.del(ids,function(){
                Common.info("删除成功");
                    dataReload();
                })
            })
        }
    }
    exports('del',view);
	
});