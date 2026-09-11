import { NextRequest, NextResponse } from 'next/server'
import { get } from '@vercel/blob'
import { headers } from 'next/headers'
import { auth } from '@/lib/auth'
import { db } from '@/lib/db'
import { documents, downloadEvents } from '@/lib/db/schema'
import { eq, and } from 'drizzle-orm'
import { randomUUID } from 'crypto'
export async function GET(_request: NextRequest,{params}:{params:Promise<{id:string}>}){const session=await auth.api.getSession({headers:await headers()});if(!session?.user)return NextResponse.json({error:'Unauthorized'},{status:401});const {id}=await params;const rows=await db.select().from(documents).where(and(eq(documents.id,id),eq(documents.clientId,session.user.id)));const file=rows[0];if(!file)return NextResponse.json({error:'Not found'},{status:404});const result=await get(file.pathname,{access:'private'});if(!result)return NextResponse.json({error:'Not found'},{status:404});await db.insert(downloadEvents).values({id:randomUUID(),documentId:file.id,userId:session.user.id,status:'success'});return new NextResponse(result.stream,{headers:{'Content-Type':result.blob.contentType||file.mimeType,'Content-Disposition':`attachment; filename="${file.title.replaceAll('"','')}"`,'Cache-Control':'private, no-cache'}})}
