import { getReviews } from "@/lib/content";
import { ReviewsEditor } from "@/components/admin/ReviewsEditor";
export const dynamic = "force-dynamic";
export default async function EditReviews() {
  const initial = await getReviews();
  return <ReviewsEditor initial={initial} />;
}
