import { notFound } from "next/navigation";
import { getLocations } from "@/lib/content";
import { CollectionItemEditor } from "@/components/admin/CollectionItemEditor";
import { COLLECTIONS } from "@/lib/admin/schemas";

export const dynamic = "force-dynamic";

export default async function EditLocation({ params }: { params: { slug: string } }) {
  const items: any[] = await getLocations();
  const index = items.findIndex((i: any) => i.slug === params.slug);
  if (index < 0) notFound();
  const col = COLLECTIONS.locations;
  return (
    <CollectionItemEditor
      collectionKey={col.key} title={`${col.title}: ${items[index][col.labelField]}`}
      fields={col.fields} all={items} index={index}
    />
  );
}
