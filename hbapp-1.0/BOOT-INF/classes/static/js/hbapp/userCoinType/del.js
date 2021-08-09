layui.define(['table', 'userCoinTypeApi'], function(exports) {
    var userCoinTypeApi = layui.userCoinTypeApi;
    var table=layui.table;
    var view = {
        init:function(){
        },
        delBatch:function(){
            var data = Common.getMoreDataFromTable(table,"userCoinTypeTable");
            if(data==null){
                return ;
            }
            Common.openConfirm("确认要删除这些UserCoinType?",function(){
            var ids =Common.concatBatchId(data,"id");
            userCoinTypeApi.del(ids,function(){
                Common.info("删除成功");
                    dataReload();
                })
            })
        }
    }
    exports('del',view);
	
});