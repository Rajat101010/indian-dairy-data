import { cookies } from "next/headers";
import { createHmac, timingSafeEqual } from "crypto";
import { db } from "@/lib/db";
const COOKIE="idc_admin_session";
function sign(value:string){return createHmac("sha256",process.env.SESSION_SECRET||"unsafe-development-secret").update(value).digest("hex");}
export function createSessionToken(email:string){const payload=Buffer.from(JSON.stringify({email,exp:Date.now()+1000*60*60*12})).toString("base64url");return `${payload}.${sign(payload)}`;}
export async function getSession(){
  const token=(await cookies()).get(COOKIE)?.value; if(!token)return null;
  const [payload,signature]=token.split("."); if(!payload||!signature)return null;
  const expected=sign(payload); try{if(!timingSafeEqual(Buffer.from(signature),Buffer.from(expected)))return null;}catch{return null;}
  try{const data=JSON.parse(Buffer.from(payload,"base64url").toString());if(data.exp<Date.now())return null;const user=await db.adminUser.findUnique({where:{email:data.email}});return user?{id:user.id,email:user.email,name:user.name,role:user.role}:null;}catch{return null;}
}
export { COOKIE };