import { type NextRequest } from "next/server";
import { draftMode } from "next/headers";
import { redirect } from "next/navigation";

export async function GET(request: NextRequest) {
  const dm = await draftMode();
  dm.disable();
  
  // Extract locale from URL path
  const locale = request.url.split("/")[3];
  
  // Redirect to home page of current locale
  redirect(`/${locale}`);
}
