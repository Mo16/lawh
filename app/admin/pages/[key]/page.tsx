import { notFound } from "next/navigation";
import { getPage } from "@/lib/content";
import { EditorForm } from "@/components/admin/EditorForm";
import { SCHEMAS } from "@/lib/admin/schemas";

export const dynamic = "force-dynamic";

export default async function EditPage({ params }: { params: { key: string } }) {
  const schema = SCHEMAS[`pages/${params.key}`];
  if (!schema) notFound();
  const initial = await getPage(params.key);
  return <EditorForm schemaKey={schema.key} title={schema.title} fields={schema.fields} initial={initial} />;
}
