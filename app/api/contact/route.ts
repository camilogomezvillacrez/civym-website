export async function POST(req: Request) {
  try {
    const body = await req.json()
    const name = (body.name || '').toString().trim()
    const email = (body.email || '').toString().trim()
    const message = (body.message || '').toString().trim()

    if (!name || !email || !message) {
      return new Response(JSON.stringify({ error: 'Faltan campos requeridos' }), { status: 400 })
    }

    const webhookUrl = process.env.FORM_WEBHOOK_URL
    if (!webhookUrl) {
      return new Response(JSON.stringify({ error: 'El formulario aún no está configurado' }), { status: 500 })
    }

    const webhookRes = await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, message, timestamp: new Date().toISOString() })
    })

    if (!webhookRes.ok) {
      throw new Error(`El flujo respondió con estado ${webhookRes.status}`)
    }

    return new Response(JSON.stringify({ ok: true }), { status: 200 })
  } catch (error) {
    return new Response(JSON.stringify({ error: String(error) }), { status: 500 })
  }
}
