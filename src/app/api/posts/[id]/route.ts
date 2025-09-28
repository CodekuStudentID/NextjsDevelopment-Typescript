import { NextResponse } from 'next/server';

export async function DELETE(
  request: Request, 
  { params }: { params: { id: string } }
) {
  const id = params.id;

  if (!id) {
    return NextResponse.json({ error: 'ID post diperlukan' }, { status: 400 });
  }

  if (id === '999') {
    return NextResponse.json({ error: `Post ID ${id} tidak ditemukan.` }, { status: 404 });
  }
  
  return NextResponse.json({ message: `Post ID ${id} berhasil dihapus` }, { status: 200 });
}