layui.define([ 'form', 'laydate', 'table' ], function(exports) {
    var form = layui.form;
    var laydate = layui.laydate;
    var table = layui.table;
    var contractInfoTable = null;
    var view ={
        init:function(){
            this.initTable();
            this.initSearchForm();
            this.initToolBar();
            window.dataReload = function(){
                Lib.doSearchForm($("#searchForm"),contractInfoTable)
            }
        },
        initTable:function(){
            contractInfoTable = table.render({
                elem : '#contractInfoTable',
                height : Lib.getTableHeight(1),
                cellMinWidth: 100,
                method : 'post',
                url : Common.ctxPath + '/hbapp/contractInfo/list.json' // 数据接口
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

                    field : 'contractCode', 
                        title : '货币兑',
                },
                {

                    field : 'contractSize', 
                        title : '对冲比例',
                },
                {

                    field : 'contractStatus', 
                        title : '状态',
                },
                {

                    field : 'createDate', 
                        title : '创建时间',
                },
                {

                    field : 'deliveryTime', 
                        title : 'deliveryTime',
                },
                {

                    field : 'priceTick', 
                        title : 'priceTick',
                },
                {

                    field : 'settlementDate', 
                        title : 'settlementDate',
                },
                {

                    field : 'supportMarginMode', 
                        title : 'supportMarginMode',
                },
                {

                    field : 'symbol', 
                        title : '币种',
                }

        ] ]

        });

            table.on('checkbox(contractInfoTable)', function(obj){
                var contractInfo = obj.data;
                if(obj.checked){
                    //按钮逻辑Lib.buttonEnable()
                }else{

                }
            })
        },

        initSearchForm:function(){
            Lib.initSearchForm( $("#searchForm"),contractInfoTable,form);
        },
        initToolBar:function(){
            toolbar = {
                add : function() { // 获取选中数据
                    var url = "/hbapp/contractInfo/add.do";
                    Common.openDlg(url,"ContractInfo管理>新增");
                },
                edit : function() { // 获取选中数目
                    var data = Common.getOneFromTable(table,"contractInfoTable");
                    if(data==null){
                        return ;
                    }
                    var url = "/hbapp/contractInfo/edit.do?id="+data.id;
                    Common.openDlg(url,"ContractInfo管理>"+data.id+">编辑");
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