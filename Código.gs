function doGet(e) {
  if (e && e.parameter && e.parameter.page == 'proyectos') {
    return HtmlService.createHtmlOutputFromFile('Proyectos');
  } else if (e && e.parameter && e.parameter.page == 'gobernanza') {
    return HtmlService.createHtmlOutputFromFile('Gobernanza');
  } else if (e && e.parameter && e.parameter.page == 'cultura') {
    return HtmlService.createHtmlOutputFromFile('Cultura');
  } else if (e && e.parameter && e.parameter.page == 'nom') {
    return HtmlService.createHtmlOutputFromFile('Nom');
  } else if (e && e.parameter && e.parameter.page == 'softskills') {
    return HtmlService.createHtmlOutputFromFile('Softskills');
  } else if (e && e.parameter && e.parameter.page == 'tecnico') {
    return HtmlService.createHtmlOutputFromFile('Tecnico');
  } else if (e && e.parameter && e.parameter.page == 'fabrica') {
    return HtmlService.createHtmlOutputFromFile('Fabrica');
  } 
  else {
    return HtmlService.createHtmlOutputFromFile('Index');
  }
}

function checkLogin(name, password) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Admin'); // Asegúrate de que el nombre de tu hoja sea correcto
  var data = sheet.getDataRange().getValues();
  for (var i = 1; i < data.length; i++) {
    if (data[i][1] == name && data[i][2] == password) {
      return true;
    }
  }
  return false;
}
/*------------------------------------------------------------------------------- */
/*------------ FUNCION PARA EXTRAER INFORMACION"PROYECTOS" HTML -----------------*/
/*------------------------------------------------------------------------------- */
function getProjects() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Proyectos');
  var data = sheet.getDataRange().getValues();
  var projects = [];
  
  // Salta la primera fila que contiene los encabezados
  for (var i = 1; i < data.length; i++) {
    var project = {
      nombre: data[i][0],
      liga: data[i][1],
      descripcion: data[i][2],
      responsable: data[i][3],
      imagen: data[i][4],
      fondo: data[i][5] // Nuevo campo "Fondo"
    };
    projects.push(project);
  }
  return projects;
}

/*------------------------------------------------------------------------------- */
/*------------ FUNCION PARA REGISTRAR INFORMACION "PROYECTOS" HTML ---------------*/
/*------------------------------------------------------------------------------- */

function addProject(project) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Proyectos');
  sheet.appendRow([project.nombre, project.liga, project.descripcion, project.responsable, project.imagen, project.fondo]); // Incluye el campo "Fondo"
}

/*------------------------------------------------------------------------------- */
/*------------ FUNCION PARA EXTRAER INFORMACION "GOBERNANZA" HTML ---------------*/
/*------------------------------------------------------------------------------- */
function getGobernanzaData() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Gobernanza');
  var data = sheet.getDataRange().getValues();
  var categories = [];
  
  for (var i = 1; i < data.length; i++) {
    var category = {
      categoria: data[i][0],
      imagen: data[i][1],
      descripcion: data[i][2],
      porcentaje: data[i][3],
      total: data[i][4],
      pagina: data[i][5]
    };
    categories.push(category);
  }
  
  return categories;
}
