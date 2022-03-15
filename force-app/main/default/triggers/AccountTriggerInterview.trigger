trigger AccountTriggerInterview on Account (before insert,before update) {
    switch on Trigger.operationType
    {
        when before_insert{
            AccountTriggerInterviewHandler.beforeInsert(trigger.new);

        }
        when before_update{
            AccountTriggerInterviewHandler.beforeUpdate(trigger.new);

        }
    }
    

}