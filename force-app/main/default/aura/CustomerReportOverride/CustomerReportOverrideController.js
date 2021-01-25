({
    doInit : function(component, event, helper) {
        helper.pageReference(component, event, helper);
    },
    reInit : function(component, event, helper) {
        $A.get('e.force:refreshView').fire();
    },
 
})