// Pega este código en script.google.com (Extensiones → Apps Script desde tu hoja)

const SHEET_NAME = 'Cotizaciones'
const NOTIFICATION_EMAIL = 'civymingenieria@outlook.com'

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents)
    const name = (data.name || '').toString().trim()
    const email = (data.email || '').toString().trim()
    const message = (data.message || '').toString().trim()
    const timestamp = data.timestamp || new Date().toISOString()

    if (!name || !email || !message) {
      return respond({ ok: false, error: 'Faltan campos requeridos' })
    }

    const sheet = getOrCreateSheet()
    sheet.appendRow([timestamp, name, email, message])

    MailApp.sendEmail({
      to: NOTIFICATION_EMAIL,
      replyTo: email,
      subject: 'Nueva solicitud de cotización de ' + name,
      htmlBody:
        '<h2>Nueva solicitud de cotización</h2>' +
        '<p><strong>Nombre:</strong> ' + name + '</p>' +
        '<p><strong>Correo:</strong> ' + email + '</p>' +
        '<p><strong>Mensaje:</strong></p>' +
        '<p>' + message.replace(/\n/g, '<br>') + '</p>'
    })

    return respond({ ok: true })
  } catch (err) {
    return respond({ ok: false, error: err.toString() })
  }
}

function getOrCreateSheet() {
  const ss = SpreadsheetApp.getActiveSpreadsheet()
  let sheet = ss.getSheetByName(SHEET_NAME)
  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME)
    sheet.appendRow(['Fecha', 'Nombre', 'Correo', 'Mensaje'])
    applySheetFormat(sheet)
  }
  return sheet
}

// Le da formato bonito al encabezado y a las columnas.
function applySheetFormat(sheet) {
  const headerRange = sheet.getRange(1, 1, 1, 4)
  headerRange.setBackground('#1F1F1F')
  headerRange.setFontColor('#FFFFFF')
  headerRange.setFontWeight('bold')
  headerRange.setFontSize(11)
  headerRange.setVerticalAlignment('middle')
  headerRange.setHorizontalAlignment('center')

  sheet.setFrozenRows(1)
  sheet.setColumnWidth(1, 160) // Fecha
  sheet.setColumnWidth(2, 160) // Nombre
  sheet.setColumnWidth(3, 220) // Correo
  sheet.setColumnWidth(4, 420) // Mensaje

  const dataRange = sheet.getRange(2, 1, Math.max(sheet.getMaxRows() - 1, 1), 4)
  dataRange.setWrap(true)
  dataRange.setVerticalAlignment('top')

  const banding = sheet.getRange(1, 1, sheet.getMaxRows(), 4)
  const existing = sheet.getBandings()
  existing.forEach(b => b.remove())
  banding.applyRowBanding(SpreadsheetApp.BandingTheme.LIGHT_GREY, true, false)
}

// Ejecuta esta función UNA VEZ manualmente (botón "Ejecutar" arriba, eligiendo
// "aplicarFormatoExistente" en el menú) para aplicar el mismo formato a la
// pestaña "Cotizaciones" que ya tiene datos.
function aplicarFormatoExistente() {
  const ss = SpreadsheetApp.getActiveSpreadsheet()
  const sheet = ss.getSheetByName(SHEET_NAME)
  if (!sheet) {
    throw new Error('No se encontró la pestaña "' + SHEET_NAME + '"')
  }
  applySheetFormat(sheet)
}

function respond(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON)
}
