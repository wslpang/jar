layui.define(['table', 'contractInfoApi'], function(exports) {
    var contractInfoApi = layui.contractInfoApi;
    var table=layui.table;
    var view = {
        init:function(){
        },
        delBatch:function(){
            var data = Common.getMoreDataFromTable(table,"contractInfoTable");
            if(data==null){
                return ;
            }
            Common.openConfirm("确认要删除这些ContractInfo?",function(){
            var ids =Common.concatBatchId(data,"id");
            contractInfoApi.del(ids,function(){
                Common.info("删除成功");
                    dataReload();
                })
            })
        }
    }
    exports('del',view);
	
});