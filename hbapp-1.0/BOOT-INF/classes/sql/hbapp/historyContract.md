queryByCondition
===


    select 
    @pageTag(){
    t.*
    @}
    from history_contract t
    where 1=1  
    @if(!isEmpty(userId)){
        and  t.user_id =#userId#
    @}
    @if(!isEmpty(contractCode)){
        and  t.contract_code =#contractCode#
    @}
    @if(!isEmpty(timeIndex)){
        and  t.time_index =#timeIndex#
    @}
    @if(!isEmpty(timeDate)){
        and  t.time_date =#timeDate#
    @}
    
queryByConditionOneMonth
===
    
    
    select 
    @pageTag(){
    t.*
    @}
    from history_contract t
    where 1=1  
    @if(!isEmpty(userId)){
        and  t.user_id =#userId#
    @}
    @if(!isEmpty(contractCode)){
        and  t.contract_code =#contractCode#
    @}
    @if(!isEmpty(timeIndex)){
        and  t.time_index =#timeIndex#
    @}
    @if(!isEmpty(timeDate)){
        and  t.time_date =#timeDate#
    @}
    and DATE_SUB(CURDATE(), INTERVAL 30 DAY) <= DATE(t.time_date)
        
        
    

batchDelHistoryContractByIds
===

* 批量逻辑删除

    update history_contract set del_flag = 1 where id  in( #join(ids)#)
    
existIncome
===

* 查询是否存在

    select count(*) from history_contract where user_id=#userId# and tran_id=#tradeId#

getTotalAmount
===
    
* 查询累积收益

    select sum(amount) from history_contract where user_id=#userId#        
