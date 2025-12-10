function submitFormDetails() {
    
    title.setValueState("None");
    notearea.setValueState("None");


    var tit = title.getValue().trim();
    var area  = notearea.getValue().trim();


    if (!tit) {
        title.setValueState("Error");
        sap.m.MessageToast.show("Please provide a Title");
        return;
    }

    if (!area) {
        notearea.setValueState("Error");
        sap.m.MessageToast.show("Please provide a Note");
        return;
    }


    sap.m.MessageToast.show("Form successfully submitted");

    title.setValue("");
    notearea.setValue("");

    App.to(NoteView);

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



function deleteNotes() {

    let uuid = modelSimpleFormWizard.getData().id;

    var options = {
        parameters: {
           where: JSON.stringify ({"id" : `${uuid}` })
        }
    };

    apiRestAPIDelete(options);
    apiRestAPIGET();
     App.to(NoteList);
}

