queryByCondition
===


    select 
    @pageTag(){
    t.*
    @}
    from history_balance t
    where 1=1  
    @if(!isEmpty(userId)){
        and  t.user_id =#userId#
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
    from history_balance t
    where 1=1  
    @if(!isEmpty(userId)){
        and  t.user_id =#userId#
    @}
    @if(!isEmpty(timeIndex)){
        and  t.time_index =#timeIndex#
    @}
    @if(!isEmpty(timeDate)){
        and  t.time_date =#timeDate#
    @}
    and DATE_SUB(CURDATE(), INTERVAL 30 DAY) <= DATE(t.time_date)    
    

batchDelHistoryBalanceByIds
===

* 批量逻辑删除

    update history_balance set del_flag = 1 where id  in( #join(ids)#)
    
