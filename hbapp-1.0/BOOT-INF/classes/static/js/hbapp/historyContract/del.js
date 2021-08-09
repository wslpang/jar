layui.define(['table', 'historyContractApi'], function(exports) {
    var historyContractApi = layui.historyContractApi;
    var table=layui.table;
    var view = {
        init:function(){
        },
        delBatch:function(){
            var data = Common.getMoreDataFromTable(table,"historyContractTable");
            if(data==null){
                return ;
            }
            Common.openConfirm("确认要删除这些HistoryContract?",function(){
            var ids =Common.concatBatchId(data,"id");
            historyContractApi.del(ids,function(){
                Common.info("删除成功");
                    dataReload();
                })
            })
        }
    }
    exports('del',view);
	
});