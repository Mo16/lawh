import { getSections } from "@/lib/content";
import { EditorForm } from "@/components/admin/EditorForm";
import { SCHEMAS } from "@/lib/admin/schemas";

export const dynamic = "force-dynamic";

export default async function EditSections() {
  const initial = await getSections();
  const s = SCHEMAS.sections;
  return <EditorForm schemaKey={s.key} title={s.title} fields={s.fields} initial={initial} />;
}
