layui.define([ 'form', 'laydate', 'table' ], function(exports) {
    var form = layui.form;
    var laydate = layui.laydate;
    var table = layui.table;
    var historyProfitTable = null;
    var view ={
        init:function(){
            this.initTable();
            this.initSearchForm();
            this.initToolBar();
            window.dataReload = function(){
                Lib.doSearchForm($("#searchForm"),historyProfitTable)
            }
        },
        initTable:function(){
            historyProfitTable = table.render({
                elem : '#historyProfitTable',
                height : Lib.getTableHeight(1),
                cellMinWidth: 100,
                method : 'post',
                url : Common.ctxPath + '/hbapp/historyProfit/list.json' // 数据接口
                ,page : Lib.tablePage // 开启分页
                ,limit : 10,
                cols : [ [ // 表头
                    {
                        type : 'checkbox',
                        fixed:'left',
                    },
                {

                    field : 'id', 
                        title : '主键',
                    fixed:'left',
                        width : 60,
                },
                {

                    field : 'userId', 
                        title : '用户ID',
                },
                {

                    field : 'profit', 
                        title : '当时年化收益率',
                },
                {

                    field : 'createTime', 
                        title : '创建时间',
                },
                {

                    field : 'timeDate', 
                        title : '收益的真实日期yyyy-MM-dd',
                }

        ] ]

        });

            table.on('checkbox(historyProfitTable)', function(obj){
                var historyProfit = obj.data;
                if(obj.checked){
                    //按钮逻辑Lib.buttonEnable()
                }else{

                }
            })
        },

        initSearchForm:function(){
            Lib.initSearchForm( $("#searchForm"),historyProfitTable,form);
        },
        initToolBar:function(){
            toolbar = {
                add : function() { // 获取选中数据
                    var url = "/hbapp/historyProfit/add.do";
                    Common.openDlg(url,"HistoryProfit管理>新增");
                },
                edit : function() { // 获取选中数目
                    var data = Common.getOneFromTable(table,"historyProfitTable");
                    if(data==null){
                        return ;
                    }
                    var url = "/hbapp/historyProfit/edit.do?id="+data.id;
                    Common.openDlg(url,"HistoryProfit管理>"+data.id+">编辑");
                },
                del : function() {
                    layui.use(['del'], function(){
                        var delView = layui.del
                        delView.delBatch();
                    });
                }
        };
            $('.ext-toolbar').on('click', function() {
                var type = $(this).data('type');
                toolbar[type] ? toolbar[type].call(this) : '';
            });
        }
    }
    exports('index',view);

});