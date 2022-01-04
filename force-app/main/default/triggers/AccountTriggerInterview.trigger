trigger AccountTriggerInterview on Account (before insert,before update) {
    switch on Trigger.operationType
    {
        when before_insert{
            AccountTriggerInterviewHandler.beforeInsert(trigger.old);

        }
        when before_update{
            AccountTriggerInterviewHandler.beforeUpdate(trigger.old);

        }
    }
    

}