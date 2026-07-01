import { appendToSheet } from '../../../lib/googleSheets'
import fs from 'fs/promises'
import path from 'path'

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const name = (body.name || '').toString().trim()
    const email = (body.email || '').toString().trim()
    const message = (body.message || '').toString().trim()

    if (!name || !email || !message) {
      return new Response(JSON.stringify({ error: 'Faltan campos requeridos' }), { status: 400 })
    }

    const timestamp = new Date().toISOString()
    const row = [timestamp, name, email, message]

    try {
      await appendToSheet(row)
      return new Response(JSON.stringify({ ok: true }), { status: 200 })
    } catch (err) {
      // Fallback: guardar localmente en data/submissions.json
      const dataPath = path.join(process.cwd(), 'data', 'submissions.json')
      await fs.mkdir(path.dirname(dataPath), { recursive: true })
      let existing: any[] = []
      try {
        const content = await fs.readFile(dataPath, 'utf8')
        existing = JSON.parse(content)
      } catch (e) {
        existing = []
      }
      existing.push({ timestamp, name, email, message })
      await fs.writeFile(dataPath, JSON.stringify(existing, null, 2), 'utf8')
      return new Response(JSON.stringify({ ok: true, fallback: true }), { status: 200 })
    }
  } catch (error) {
    return new Response(JSON.stringify({ error: String(error) }), { status: 500 })
  }
}
