layui.define([ 'form', 'laydate', 'table' ], function(exports) {
    var form = layui.form;
    var laydate = layui.laydate;
    var table = layui.table;
    var userCoinTypeTable = null;
    var view ={
        init:function(){
            this.initTable();
            this.initSearchForm();
            this.initToolBar();
            window.dataReload = function(){
                Lib.doSearchForm($("#searchForm"),userCoinTypeTable)
            }
        },
        initTable:function(){
            userCoinTypeTable = table.render({
                elem : '#userCoinTypeTable',
                height : Lib.getTableHeight(1),
                cellMinWidth: 100,
                method : 'post',
                url : Common.ctxPath + '/hbapp/userCoinType/list.json' // 数据接口
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

                    field : 'coinType', 
                        title : '货币兑',
                },
                {

                    field : 'createTime', 
                        title : '创建时间',
                }

        ] ]

        });

            table.on('checkbox(userCoinTypeTable)', function(obj){
                var userCoinType = obj.data;
                if(obj.checked){
                    //按钮逻辑Lib.buttonEnable()
                }else{

                }
            })
        },

        initSearchForm:function(){
            Lib.initSearchForm( $("#searchForm"),userCoinTypeTable,form);
        },
        initToolBar:function(){
            toolbar = {
                add : function() { // 获取选中数据
                    var url = "/hbapp/userCoinType/add.do";
                    Common.openDlg(url,"UserCoinType管理>新增");
                },
                edit : function() { // 获取选中数目
                    var data = Common.getOneFromTable(table,"userCoinTypeTable");
                    if(data==null){
                        return ;
                    }
                    var url = "/hbapp/userCoinType/edit.do?id="+data.id;
                    Common.openDlg(url,"UserCoinType管理>"+data.id+">编辑");
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