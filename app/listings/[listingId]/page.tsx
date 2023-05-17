import getCurrentUser from "@/actions/getCurrentUser";
import getListingById from "@/actions/getListingById";
import EmptyState from "@/components/EmptyState";
import ListingClient from "./ListingClient";

interface ListingPageProps {
  params: {
    listingId?: string
  };
}

export default async function LisingPage({
  params
}: ListingPageProps) {
  const listing = await getListingById(params);
  const currentUser = await getCurrentUser();

  if (!listing) {
    return (
      <>
        <EmptyState />
      </>
    )
  };

  return (
    <div>
      <ListingClient
        listing={listing}
        currentUser={currentUser}
      />
    </div>
  );
}