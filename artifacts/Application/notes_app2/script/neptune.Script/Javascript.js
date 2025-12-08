function submitFormDetails() {
    // Reset previous states
    title.setValueState("None");
    notearea.setValueState("None");

    // Read values
    var tit = title.getValue().trim();
    var area  = notearea.getValue().trim();

    // Validate First Name
    if (!tit) {
        title.setValueState("Error");
        sap.m.MessageToast.show("Please provide a Title");
        return;
    }

    // Validate Last Name
    if (!area) {
        notearea.setValueState("Error");
        sap.m.MessageToast.show("Please provide a Note");
        return;
    }

    // If everything is valid
    sap.m.MessageToast.show("Form successfully submitted");

    title.setValue("");
    notearea.setValue("");

    App.to(NoteView);

    // Optional: You can call another function here  
    // saveToTable(tit, area);
}

function updateNotes(){

    let final_data={};

    final_data.id=modelSimpleFormWizard.getData().id;
    
   // final_data.title = inSimpleFormWizardTITLE.getValue();
   // final_data.content = inSimpleFormWizardCONTENT.getValue();
    //final_data.createdat = inSimpleFormWizardCREATED_AT.getValue();
   // final_data.updatedat = inSimpleFormWizardUPDATED_AT.getValue();

   final_data.TITLE      = inSimpleFormWizardTITLE.getValue();
    final_data.CONTENT    = inSimpleFormWizardCONTENT.getValue();

    final_data.CREATED_AT = inSimpleFormWizardCREATED_AT.getValue();
    final_data.UPDATED_AT = inSimpleFormWizardUPDATED_AT.getValue();

    var options = {
        data: final_data
    };

    apiRestAPIUpdate(options);

}



function addNotes() {

    let final_data = {};

   final_data.NOTE_ID     = inSimpleFormNOTE_ID.getValue();
    final_data.TITLE      = inSimpleFormTITLE.getValue();
    final_data.CONTENT    = inSimpleFormCONTENT.getValue();
    final_data.CATEGORY = inSimpleFormCATEGORY.getValue();
    var options = {
        data: final_data
    };

    apiRestAPIAdd(options);
}

// function deleteNotes() {

//     let final_data = {};

//     // Only ID is required for deleting
//     final_data.id = modelSimpleFormWizard.getData().id;

//     var options = {
//         data: final_data
//     };

//     // Call your DELETE connector API
//     apiRestAPIDelete(options);
// }

function deleteNotes() {

    let uuid = modelSimpleFormWizard.getData().id; // MUST BE UUID

    var options = {
        parameters: {
            where: "id:eq:" + uuid
        }
    };

    apiRestAPIDelete(options);
}
