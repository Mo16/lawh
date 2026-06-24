import { getLayout } from "@/lib/content";
import { EditorForm } from "@/components/admin/EditorForm";
import { SCHEMAS } from "@/lib/admin/schemas";

export const dynamic = "force-dynamic";

export default async function EditLayout() {
  const initial = await getLayout();
  const s = SCHEMAS.layout;
  return <EditorForm schemaKey={s.key} title={s.title} fields={s.fields} initial={initial} />;
}
