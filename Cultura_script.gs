
/*------------------------------------------------------------------------------- */
/*------------ FUNCION PARA REGISTRAR INFORMACION "CULTURA" HTML ---------------*/
/*------------------------------------------------------------------------------- */

// Function to get data from "Gobernanza - Cultura" sheet
function getGovernanceCultureData() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Gobernanza - Cultura');
  var data = sheet.getDataRange().getValues();
  var jsonData = [];

  for (var i = 1; i < data.length; i++) {
    var row = data[i];
    jsonData.push({
      id: row[0],
      nombreProyecto: row[1],
      desarrolloInternoExterno: row[2], // Nuevo campo
      responsable: row[3],               // Ajustado según nueva estructura
      objetivosAlcances: row[4],
      estrategia: row[5],
      logisticaPT: row[6],
      logisticaCalendario: row[7],
      logisticaInvitaciones: row[8],
      logisticaAppsheetID: row[9],
      diseno: row[10],
      implementacionListaParticipantes: row[11],
      implementacionContratos: row[12],
      implementacionSolicitudPago: row[13],
      monitoreoEncuestaSatisfaccion: row[14],
      monitoreoEvaluacionConocimientos: row[15],
      cierreReporteFinal: row[16],
      cierreComprobantePago: row[17],
      comentarios: row[18],              // Nuevo campo
      porcentaje: row[19]                // Ajustado a la nueva columna
    });
  }
  return jsonData;
}


/*------------------------------------------------------------------------------- */
/*------------ FUNCION PARA MODIFICAR INFORMACION "CULTURA" HTML ---------------*/
/*------------------------------------------------------------------------------- */

// Function to update data in "Gobernanza - Cultura" sheet
function updateGovernanceCultureData(updatedData) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Gobernanza - Cultura');
  var data = sheet.getDataRange().getValues();

  for (var i = 1; i < data.length; i++) {
    if (data[i][0] == updatedData.id) {
      sheet.getRange(i + 1, 2).setValue(updatedData.nombreProyecto);
      sheet.getRange(i + 1, 3).setValue(updatedData.desarrolloInternoExterno); // Nuevo campo
      sheet.getRange(i + 1, 4).setValue(updatedData.responsable);
      sheet.getRange(i + 1, 5).setValue(updatedData.objetivosAlcances);
      sheet.getRange(i + 1, 6).setValue(updatedData.estrategia);
      sheet.getRange(i + 1, 7).setValue(updatedData.logisticaPT);
      sheet.getRange(i + 1, 8).setValue(updatedData.logisticaCalendario);
      sheet.getRange(i + 1, 9).setValue(updatedData.logisticaInvitaciones);
      sheet.getRange(i + 1, 10).setValue(updatedData.logisticaAppsheetID);
      sheet.getRange(i + 1, 11).setValue(updatedData.diseno);
      sheet.getRange(i + 1, 12).setValue(updatedData.implementacionListaParticipantes);
      sheet.getRange(i + 1, 13).setValue(updatedData.implementacionContratos);
      sheet.getRange(i + 1, 14).setValue(updatedData.implementacionSolicitudPago);
      sheet.getRange(i + 1, 15).setValue(updatedData.monitoreoEncuestaSatisfaccion);
      sheet.getRange(i + 1, 16).setValue(updatedData.monitoreoEvaluacionConocimientos);
      sheet.getRange(i + 1, 17).setValue(updatedData.cierreReporteFinal);
      sheet.getRange(i + 1, 18).setValue(updatedData.cierreComprobantePago);
      sheet.getRange(i + 1, 19).setValue(updatedData.comentarios);              // Nuevo campo
      sheet.getRange(i + 1, 20).setFormula('=ARRAYFORMULA(SUMPRODUCT(--(LEN(C' + (i + 1) + ':R' + (i + 1) + ')>0))/16*100)'); // Ajustado para incluir nuevas columnas
      break;
    }
  }
}



/*------------------------------------------------------------------------------- */
/*------------ FUNCION PARA AGREGAR INFORMACION "CULTURA" HTML ---------------*/
/*------------------------------------------------------------------------------- */

// Function to add new data to "Gobernanza - Cultura" sheet
function addGovernanceCultureData(newData) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Gobernanza - Cultura');
  var lastRow = sheet.getLastRow() + 1; // Obtener la siguiente fila disponible

  sheet.appendRow([
    lastRow, // Assuming ID is the row number
    newData.nombreProyecto,
    newData.desarrolloInternoExterno, // Nuevo campo
    newData.responsable,
    newData.objetivosAlcances,
    newData.estrategia,
    newData.logisticaPT,
    newData.logisticaCalendario,
    newData.logisticaInvitaciones,
    newData.logisticaAppsheetID,
    newData.diseno,
    newData.implementacionListaParticipantes,
    newData.implementacionContratos,
    newData.implementacionSolicitudPago,
    newData.monitoreoEncuestaSatisfaccion,
    newData.monitoreoEvaluacionConocimientos,
    newData.cierreReporteFinal,
    newData.cierreComprobantePago,
    newData.comentarios,               // Nuevo campo
    0 // Initially set percentage to 0
  ]);

  // Apply the formula for the percentage
  sheet.getRange('T' + lastRow).setFormula('=ARRAYFORMULA(SUMPRODUCT(--(LEN(C' + lastRow + ':R' + lastRow + ')>0))/16*100)'); // Ajustado para incluir nuevas columnas
}


/*------------------------------------------------------------------------------- */
/*------------ FUNCION PARA OBTENER INFORMACION "CULTURA" HTML DE LA GRAFICA ---------------*/
/*------------------------------------------------------------------------------- */

// Function to get percentage from "Gobernanza - Cultura"
function getCulturePercentage() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Gobernanza');
  var percentage = sheet.getRange('D2').getValue(); // Make sure this is the correct cell for the percentage
  return percentage;
}


/*------------------------------------------------------------------------------- */
/*------------ FUNCION PARA BORRAR INFORMACION "CULTURA" HTML ---------------*/
/*------------------------------------------------------------------------------- */

// Function to delete data in "Gobernanza - Cultura" sheet
function deleteGovernanceCultureData(id) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Gobernanza - Cultura');
  var data = sheet.getDataRange().getValues();

  for (var i = 1; i < data.length; i++) {
    if (data[i][0] == id) {
      sheet.deleteRow(i + 1);
      break;
    }
  }
}

/*------------------------------------------------------------------------------- */
/*------------ FUNCION PARA LLAMAR FUNCIONES DE "CULTURA" HTML ---------------*/
/*------------------------------------------------------------------------------- */


// Function to get data and send to client side
function getGovernanceCultureDataForClient() {
  return getGovernanceCultureData();
}

// Function to handle updating data from client side
function handleUpdate(updatedData) {
  updateGovernanceCultureData(updatedData);
}

// Function to handle adding new data from client side
function handleAdd(newData) {
  addGovernanceCultureData(newData);
}

// Function to handle deleting data from client side
function handleDelete(id) {
  deleteGovernanceCultureData(id);
}

// Function to get the culture percentage
function getCulturePercentageForClient() {
  return getCulturePercentage();
}
