queryByCondition
===


    select 
    @pageTag(){
    t.*
    @}
    from contract_info t
    where 1=1  
    @if(!isEmpty(contractCode)){
        and  t.contract_code =#contractCode#
    @}
    @if(!isEmpty(symbol)){
        and  t.symbol =#symbol#
    @}
    
    
    

batchDelContractInfoByIds
===

* 批量逻辑删除

    update contract_info set del_flag = 1 where id  in( #join(ids)#)
    
