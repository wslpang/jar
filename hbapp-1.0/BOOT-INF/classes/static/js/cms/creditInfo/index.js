layui.define([ 'form', 'laydate', 'table' ], function(exports) {
    var form = layui.form;
    var laydate = layui.laydate;
    var table = layui.table;
    var creditInfoTable = null;
    var view ={
        init:function(){
            this.initTable();
            this.initSearchForm();
            this.initToolBar();
            window.dataReload = function(){
                Lib.doSearchForm($("#searchForm"),creditInfoTable)
            }
        },
        initTable:function(){
            creditInfoTable = table.render({
                elem : '#creditInfoTable',
                height : Lib.getTableHeight(1),
                cellMinWidth: 100,
                method : 'post',
                url : Common.ctxPath + '/cms/creditInfo/list.json' // 数据接口
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

                    field : 'orderNo', 
                        title : '订单号',
                },
                {

                    field : 'email', 
                        title : '邮箱',
                },
                {

                    field : 'symbol', 
                        title : '抵押币种',
                },
                {

                    field : 'openingPrice', 
                        title : '开仓价（USDT）',
                },
                {

                    field : 'mortgage', 
                        title : '抵押数量',
                },
                {

                    field : 'actualLoanAmount',
                        title : '实际借贷金额（USDT）',
                },
                {

                    field : 'pledgeRate', 
                        title : '质押率',
                },
                {

                    field : 'warnPledgeRate', 
                        title : '预警质押率',
                },
                {

                    field : 'closePledgeRate', 
                        title : '平仓质押率',
                },
                {

                    field : 'gmtCreate', 
                        title : '创建时间',
                },
                {
                    field : 'isDelete',
                    title : '状态',
                    templet:function(d){
                        return d.isDelete == 1 ? '已停止': '借贷中';
                    }
                }

        ] ]

        });

            table.on('checkbox(creditInfoTable)', function(obj){
                var creditInfo = obj.data;
                if(obj.checked){
                    //按钮逻辑Lib.buttonEnable()
                }else{

                }
            })
        },

        initSearchForm:function(){
            Lib.initSearchForm( $("#searchForm"),creditInfoTable,form);
        },
        initToolBar:function(){
            toolbar = {
                add : function() { // 获取选中数据
                    var url = "/cms/creditInfo/add.do";
                    Common.openDlg(url,"CreditInfo管理>新增");
                },
                edit : function() { // 获取选中数目
                    var data = Common.getOneFromTable(table,"creditInfoTable");
                    if(data==null){
                        return ;
                    }
                    var url = "/cms/creditInfo/edit.do?id="+data.id;
                    Common.openDlg(url,"CreditInfo管理>"+data.id+">编辑");
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