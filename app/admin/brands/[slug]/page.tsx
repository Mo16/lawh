import { notFound } from "next/navigation";
import { getBrands } from "@/lib/content";
import { CollectionItemEditor } from "@/components/admin/CollectionItemEditor";
import { COLLECTIONS } from "@/lib/admin/schemas";

export const dynamic = "force-dynamic";

export default async function EditBrand({ params }: { params: { slug: string } }) {
  const items: any[] = await getBrands();
  const index = items.findIndex((i: any) => i.slug === params.slug);
  if (index < 0) notFound();
  const col = COLLECTIONS.brands;
  return (
    <CollectionItemEditor
      collectionKey={col.key} title={`${col.title}: ${items[index][col.labelField]}`}
      fields={col.fields} all={items} index={index}
    />
  );
}
