import { getSite } from "@/lib/content";
import { EditorForm } from "@/components/admin/EditorForm";
import { SCHEMAS } from "@/lib/admin/schemas";

export const dynamic = "force-dynamic";

export default async function EditSite() {
  const initial = await getSite();
  const s = SCHEMAS.site;
  return <EditorForm schemaKey={s.key} title={s.title} fields={s.fields} initial={initial} />;
}
