queryByCondition
===


    select 
    @pageTag(){
    t.*
    @}
    from credit_info t
    where 1=1  
    @if(!isEmpty(orderNo)){
        and  t.order_no =#orderNo#
    @}
    @if(!isEmpty(email)){
        and  t.email =#email#
    @}
    @if(!isEmpty(symbol)){
        and  t.symbol =#symbol#
    @}
    @if(!isEmpty(openingPrice)){
        and  t.opening_price =#openingPrice#
    @}
    @if(!isEmpty(pledgeRate)){
        and  t.pledge_rate =#pledgeRate#
    @}
    @if(!isEmpty(isDelete)){
        and  t.is_delete =#isDelete#
    @}
    @if(!isEmpty(gmtCreate)){
        and  t.gmt_create =#gmtCreate#
    @}
    
    
    

batchDelCreditInfoByIds
===

* 批量逻辑删除

    update credit_info set del_flag = 1 where id  in( #join(ids)#)
    
