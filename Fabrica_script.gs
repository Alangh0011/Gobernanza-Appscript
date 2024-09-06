/*------------------------------------------------------------------------------- */
/*------------ FUNCION PARA REGISTRAR INFORMACION "Gobernanza - FC" ---------------*/
/*------------------------------------------------------------------------------- */
function getGovernanceFCData() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Gobernanza - FC');
  var data = sheet.getDataRange().getValues();
  var jsonData = [];

  for (var i = 1; i < data.length; i++) {  // Empieza en 1 para saltar el encabezado
    var row = data[i];
    jsonData.push({
      id: row[0],
      mes: row[1],
      contratos: row[2],
      facturas: row[3],
      pagos: row[4],
      proyectos: row[5],
      porcentaje: row[6]
    });
  }

  Logger.log(jsonData);  // Registra los datos para depuración
  return jsonData;
}

/*------------------------------------------------------------------------------- */
/*------------ FUNCION PARA MODIFICAR INFORMACION "Gobernanza - FC" ---------------*/
/*------------------------------------------------------------------------------- */
function updateGovernanceFCData(updatedData) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Gobernanza - FC');
  var data = sheet.getDataRange().getValues();

  for (var i = 1; i < data.length; i++) {
    if (data[i][0] == updatedData.id) {  // Busca por Id
      sheet.getRange(i + 1, 2).setValue(updatedData.mes);  // Mes
      sheet.getRange(i + 1, 3).setValue(updatedData.contratos);  // Contratos
      sheet.getRange(i + 1, 4).setValue(updatedData.facturas);  // Facturas
      sheet.getRange(i + 1, 5).setValue(updatedData.pagos);  // Pagos
      sheet.getRange(i + 1, 6).setValue(updatedData.proyectos);  // Proyectos
      sheet.getRange(i + 1, 7).setFormula('=ARRAYFORMULA(SUMPRODUCT(--(LEN(B' + (i + 1) + ':F' + (i + 1) + ')>0))/5*100)');
      break;
    }
  }
}

/*------------------------------------------------------------------------------- */
/*------------ FUNCION PARA AGREGAR INFORMACION "Gobernanza - FC" ---------------*/
/*------------------------------------------------------------------------------- */
function addGovernanceFCData(newData) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Gobernanza - FC');
  var lastRow = sheet.getLastRow() + 1;  // Obtener la siguiente fila disponible

  sheet.appendRow([
    newData.id,  // ID
    newData.mes,  // Mes
    newData.contratos,  // Contratos
    newData.facturas,  // Facturas
    newData.pagos,  // Pagos
    newData.proyectos,  // Proyectos
    newData.porcentaje  // Porcentaje
  ]);

   sheet.getRange('G' + lastRow).setFormula('=ARRAYFORMULA(SUMPRODUCT(--(LEN(B' + lastRow + ':F' + lastRow + ')>0))/5*100)');
}

/*------------------------------------------------------------------------------- */
/*------------ FUNCION PARA OBTENER EL PORCENTAJE "Gobernanza - FC" ---------------*/
/*------------------------------------------------------------------------------- */
function getFCPercentage() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Gobernanza');
  var percentage = sheet.getRange('D6').getValue();  // Obtener el porcentaje de la primera fila de datos
  return percentage;
}

/*------------------------------------------------------------------------------- */
/*------------ FUNCION PARA BORRAR INFORMACION "Gobernanza - FC" ---------------*/
/*------------------------------------------------------------------------------- */
function deleteGovernanceFCData(id) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Gobernanza - FC');
  var data = sheet.getDataRange().getValues();

  for (var i = 1; i < data.length; i++) {
    if (data[i][0] == id) {  // Busca por Id
      sheet.deleteRow(i + 1);  // Borra la fila correspondiente
      break;
    }
  }
}

/*------------------------------------------------------------------------------- */
/*------------ FUNCION PARA LLAMAR FUNCIONES DESDE EL CLIENTE "Gobernanza - FC" ---------------*/
/*------------------------------------------------------------------------------- */
function getGovernanceFCDataForClient() {
  return getGovernanceFCData();
}

function handleUpdateFC(updatedData) {
  updateGovernanceFCData(updatedData);
}

function handleAddFC(newData) {
  addGovernanceFCData(newData);
}

function handleDeleteFC(id) {
  deleteGovernanceFCData(id);
}

function getFCPercentageForClient() {
  return getFCPercentage();
}
