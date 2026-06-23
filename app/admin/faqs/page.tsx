import { getFaqs } from "@/lib/content";
import { EditorForm } from "@/components/admin/EditorForm";
import { SCHEMAS } from "@/lib/admin/schemas";

export const dynamic = "force-dynamic";

export default async function EditFaqs() {
  const initial = await getFaqs();
  const s = SCHEMAS.faqs;
  return <EditorForm schemaKey={s.key} title={s.title} fields={s.fields} initial={initial} />;
}
