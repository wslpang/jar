queryByCondition
===


    select 
    @pageTag(){
    t.*
    @}
    from hbapp_user t
    where 1=1  
    @if(!isEmpty(userName)){
        and  t.user_name =#userName#
    @}
    @if(!isEmpty(name)){
        and  t.name =#name#
    @}
    @if(!isEmpty(email)){
        and  t.email =#email#
    @}
    @if(!isEmpty(type)){
        and  t.type =#type#
    @}
      and is_delete=0 
    
    
    

batchDelHbappUserByIds
===

* 批量逻辑删除

    update hbapp_user set is_delete=1 where id  in( #join(ids)#)
    
