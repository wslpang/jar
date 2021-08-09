queryByCondition
===


    select 
    @pageTag(){
    t.*
    @}
    from user_coin_type t
    where 1=1  
    @if(!isEmpty(userId)){
        and  t.user_id =#userId#
    @}
    @if(!isEmpty(coinType)){
        and  t.coin_type =#coinType#
    @}
    
    
    

batchDelUserCoinTypeByIds
===

* 批量逻辑删除

    update user_coin_type set del_flag = 1 where id  in( #join(ids)#)
    
