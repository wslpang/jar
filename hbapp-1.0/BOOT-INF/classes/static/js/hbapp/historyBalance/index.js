layui.define([ 'form', 'laydate', 'table' ], function(exports) {
    var form = layui.form;
    var laydate = layui.laydate;
    var table = layui.table;
    var historyBalanceTable = null;
    var view ={
        init:function(){
            this.initTable();
            this.initSearchForm();
            this.initToolBar();
            window.dataReload = function(){
                Lib.doSearchForm($("#searchForm"),historyBalanceTable)
            }
        },
        initTable:function(){
            historyBalanceTable = table.render({
                elem : '#historyBalanceTable',
                height : Lib.getTableHeight(1),
                cellMinWidth: 100,
                method : 'post',
                url : Common.ctxPath + '/hbapp/historyBalance/list.json' // 数据接口
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

                    field : 'balance', 
                        title : '当时净值',
                },
                {

                    field : 'asset', 
                        title : '货币单位',
                },
                {

                    field : 'createTime', 
                        title : '创建时间',
                },
                {

                    field : 'timeIndex', 
                        title : '添加整点：8，16，24',
                },
                {

                    field : 'timeDate', 
                        title : '收益的真实日期yyyy-MM-dd',
                }

        ] ]

        });

            table.on('checkbox(historyBalanceTable)', function(obj){
                var historyBalance = obj.data;
                if(obj.checked){
                    //按钮逻辑Lib.buttonEnable()
                }else{

                }
            })
        },

        initSearchForm:function(){
            Lib.initSearchForm( $("#searchForm"),historyBalanceTable,form);
        },
        initToolBar:function(){
            toolbar = {
                add : function() { // 获取选中数据
                    var url = "/hbapp/historyBalance/add.do";
                    Common.openDlg(url,"HistoryBalance管理>新增");
                },
                edit : function() { // 获取选中数目
                    var data = Common.getOneFromTable(table,"historyBalanceTable");
                    if(data==null){
                        return ;
                    }
                    var url = "/hbapp/historyBalance/edit.do?id="+data.id;
                    Common.openDlg(url,"HistoryBalance管理>"+data.id+">编辑");
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