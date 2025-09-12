// app/page.tsx
import { redirect } from "next/navigation";

export default function IndexPage() {
    redirect("/en"); // default locale
}
