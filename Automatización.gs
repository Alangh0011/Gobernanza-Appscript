/**
 * Función activada automáticamente al editar una celda en la hoja de cálculo.
 * Dependiendo de la hoja y las celdas editadas, aplica una fórmula de cálculo en la columna T o G.
 * @param {Object} e - Objeto de evento que contiene información sobre la edición.
 */
function onEdit(e) {
  var sheet = e.source.getActiveSheet(); // Obtener la hoja activa donde se realizó la edición
  var sheetName = sheet.getName(); // Obtener el nombre de la hoja activa
  var range = e.range; // Obtener el rango de la celda editada
  var row = range.getRow(); // Obtener el número de fila de la celda editada
  var col = range.getColumn(); // Obtener el número de columna de la celda editada
  
  // Verificar si la edición está en la hoja específica "Gobernanza - Cultura"
  if (sheetName === "Gobernanza - Cultura") {
    // Verificar si la edición está dentro del rango C2:Q
    if (row >= 2 && col >= 3 && col <= 18) {
      // Fórmula para calcular el porcentaje de celdas no vacías en el rango C2:Q
      var formula = '=ARRAYFORMULA(SUMPRODUCT(--(LEN(C' + row + ':R' + row + ')>0))/16*100)';
      // Aplicar la fórmula en la columna T de la fila correspondiente
      sheet.getRange('T' + row).setFormula(formula);
    }
  }

  // Verificar si la edición está en la hoja específica "Gobernanza - Softskills"
  if (sheetName === "Gobernanza - Softskills") {
    // Verificar si la edición está dentro del rango C2:Q
    if (row >= 2 && col >= 3 && col <= 18) {
      // Fórmula para calcular el porcentaje de celdas no vacías en el rango C2:Q
      var formula = '=ARRAYFORMULA(SUMPRODUCT(--(LEN(C' + row + ':R' + row + ')>0))/16*100)';
      // Aplicar la fórmula en la columna T de la fila correspondiente
      sheet.getRange('T' + row).setFormula(formula);
    }
  }

  // Verificar si la edición está en la hoja específica "Gobernanza - Normativos"
  if (sheetName === "Gobernanza - Normativos") {
    // Verificar si la edición está dentro del rango C2:Q
    if (row >= 2 && col >= 3 && col <= 18) {
      // Fórmula para calcular el porcentaje de celdas no vacías en el rango C2:Q
      var formula = '=ARRAYFORMULA(SUMPRODUCT(--(LEN(C' + row + ':R' + row + ')>0))/16*100)';
      // Aplicar la fórmula en la columna T de la fila correspondiente
      sheet.getRange('T' + row).setFormula(formula);
    }
  }

  // Verificar si la edición está en la hoja específica "Gobernanza - Técnico"
  if (sheetName === "Gobernanza - Técnico") {
    // Verificar si la edición está dentro del rango C2:Q
    if (row >= 2 && col >= 3 && col <= 18) {
      // Fórmula para calcular el porcentaje de celdas no vacías en el rango C2:Q
      var formula = '=ARRAYFORMULA(SUMPRODUCT(--(LEN(C' + row + ':R' + row + ')>0))/16*100)';
      // Aplicar la fórmula en la columna T de la fila correspondiente
      sheet.getRange('T' + row).setFormula(formula);
    }
  }

  // Verificar si la edición está en la hoja específica "Gobernanza - FC"
  if (sheetName === "Gobernanza - FC") {
    // Verificar si la edición está dentro del rango C2:F
    if (row >= 2 && col >= 3 && col <= 6) {
      // Fórmula para calcular el porcentaje de celdas no vacías en el rango B2:F
      var formula = '=ARRAYFORMULA(SUMPRODUCT(--(LEN(B' + row + ':F' + row + ')>0))/5*100)';
      // Aplicar la fórmula en la columna G de la fila correspondiente
      sheet.getRange('G' + row).setFormula(formula);
    }
  }
}
