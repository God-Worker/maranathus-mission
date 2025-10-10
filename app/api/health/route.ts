import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({ ok: true, service: 'maranathus-mission', ts: new Date().toISOString() })
}