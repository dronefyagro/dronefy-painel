import {NextResponse} from "next/server";
import {readOperationalData} from "../../../lib/google-sheets";
export const runtime="nodejs";
export const dynamic="force-dynamic";
export async function GET(){try{return NextResponse.json(await readOperationalData())}catch(error){return NextResponse.json({source:"demo",message:error instanceof Error?error.message:"Integração indisponível"},{status:503})}}
