import { google } from 'googleapis'

type Row = (string | number)[]

export async function appendToSheet(values: Row) {
  const key = process.env.GOOGLE_SERVICE_ACCOUNT_KEY
  const sheetId = process.env.GOOGLE_SHEET_ID
  const sheetName = process.env.GOOGLE_SHEET_NAME || 'Sheet1'

  if (!key || !sheetId) {
    throw new Error('Missing Google Sheets credentials (set GOOGLE_SERVICE_ACCOUNT_KEY and GOOGLE_SHEET_ID)')
  }

  const credentials = JSON.parse(key)
  const clientEmail = credentials.client_email
  let privateKey: string = credentials.private_key
  if (typeof privateKey === 'string') {
    privateKey = privateKey.replace(/\\n/g, '\n')
  }

  const jwt = new google.auth.JWT({
    email: clientEmail,
    key: privateKey,
    scopes: ['https://www.googleapis.com/auth/spreadsheets']
  } as any)

  const sheets = google.sheets({ version: 'v4', auth: jwt })

  await sheets.spreadsheets.values.append({
    spreadsheetId: sheetId,
    range: `${sheetName}!A1`,
    valueInputOption: 'RAW',
    requestBody: { values: [values] }
  })
}
