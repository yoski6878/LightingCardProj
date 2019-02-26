({
    doInit : function(component, event, helper) {
        var action = component.get("c.accountDetail");
        action.setCallback(this, function (response) {
            var state = response.getState();
            var responseValue = response.getReturnValue();
            console.log(response.getReturnValue());
            // This callback doesn’t reference cmp. If it did,
            // you should run an isValid() check
            //if (cmp.isValid() && state === "SUCCESS") {
            if (state === "SUCCESS") {
                // Alert the user with the value returned
                // from the server
                console.log('Response value', responseValue);
                component.set('v.accountList', responseValue);
                // do something
            }
            //else if (cmp.isValid() && state === "INCOMPLETE") {
            else if (state === "INCOMPLETE") {
                // do something
            }
            //else if (cmp.isValid() && state === "ERROR") {
            else if (state === "ERROR") {
                var errors = response.getError();
                if (errors) {
                    if (errors[0] && errors[0].message) {
                        console.log("Error message: " +
                            errors[0].message);
                    }
                } else {
                    console.log("Unknown error");
                }
            }
        });
        // step 3: adds the server-side controller action to the queue of actions to be executed
        $A.enqueueAction(action, false);

    }
})