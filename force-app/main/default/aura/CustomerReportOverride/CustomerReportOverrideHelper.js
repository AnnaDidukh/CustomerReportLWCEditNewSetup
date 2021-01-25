({
    pageReference : function(component, event, helper) {
            var pageRef = component.get("v.pageReference");
            var state = pageRef.state;
            var base64Context = state.inContextOfRef;

            if (base64Context.startsWith("1\.")) {
                base64Context = base64Context.substring(2);
            }
            var addressableContext = JSON.parse(window.atob(base64Context));
            if(component.get("v.recordId") != null){
                component.set("v.recordId", component.get("v.recordId"));
            } else{
                component.set("v.recordId", addressableContext.attributes.recordId);

            }
    }
})