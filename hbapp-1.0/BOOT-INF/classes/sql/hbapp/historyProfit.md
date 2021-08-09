queryByCondition
===


    select 
    @pageTag(){
    t.*
    @}
    from history_profit t
    where 1=1  
    @if(!isEmpty(userId)){
        and  t.user_id =#userId#
    @}
    @if(!isEmpty(timeDate)){
        and  t.time_date =#timeDate#
    @}
    order by id desc
    
    
    

batchDelHistoryProfitByIds
===

* 批量逻辑删除

    update history_profit set del_flag = 1 where id  in( #join(ids)#)
    
