layui.define([ 'form', 'laydate', 'table' ], function(exports) {
    var form = layui.form;
    var laydate = layui.laydate;
    var table = layui.table;
    var hbappUserTable = null;
    var view ={
        init:function(){
            this.initTable();
            this.initSearchForm();
            this.initToolBar();
            window.dataReload = function(){
                Lib.doSearchForm($("#searchForm"),hbappUserTable)
            }
        },
        initTable:function(){
            hbappUserTable = table.render({
                elem : '#hbappUserTable',
                height : Lib.getTableHeight(1),
                cellMinWidth: 100,
                method : 'post',
                url : Common.ctxPath + '/cms/hbappUser/list.json' // 数据接口
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

                    field : 'userName', 
                        title : '用户名',
                },
                {

                    field : 'password', 
                        title : '密码',
                },
                {

                    field : 'apiKey', 
                        title : 'api_key',
                },
                {

                    field : 'secretKey', 
                        title : 'secret_key',
                },
                {
                    field : 'token',
                    title : '用户登录后的token',
                },
                {

                    field : 'name', 
                        title : '姓名或备注',
                },
                {

                    field : 'email',
                    title : '邮箱',
                },
                {

                    field : 'type',
                    title : '会员类型',
                    templet:function(d){
                        return d.type == 1 ? '火币': '币安';
                    }
                }

        ] ]

        });

            table.on('checkbox(hbappUserTable)', function(obj){
                var hbappUser = obj.data;
                if(obj.checked){
                    //按钮逻辑Lib.buttonEnable()
                }else{

                }
            })
        },

        initSearchForm:function(){
            Lib.initSearchForm( $("#searchForm"),hbappUserTable,form);
        },
        initToolBar:function(){
            toolbar = {
                add : function() { // 获取选中数据
                    var url = "/cms/hbappUser/add.do";
                    Common.openDlg(url,"HbappUser管理>新增");
                },
                edit : function() { // 获取选中数目
                    var data = Common.getOneFromTable(table,"hbappUserTable");
                    if(data==null){
                        return ;
                    }
                    var url = "/cms/hbappUser/edit.do?id="+data.id;
                    Common.openDlg(url,"HbappUser管理>"+data.id+">编辑");
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