import useCountries from "@/hooks/useCountries";
import { SafeListing, SafeUser } from "@/types"
import Heading from "../Heading";
import Image from "next/image";
import HeartButton from "../HeartButton";

interface Props {
  title: string;
  imageSrc: string;
  locationValue: string;
  id: string;
  currentUser?: SafeUser | null;
}

export default function ListingHead({
  title,
  imageSrc,
  locationValue,
  id,
  currentUser
}: Props): JSX.Element {
  const { getByValue } = useCountries();

  const location = getByValue(locationValue);

  return (
    <>
      <Heading
        title={title}
        subtitle={`${location?.region}, ${location?.label}`}
      />
      <div
        className="
          w-full
          h-[60vh]
          overflow-hidden
          rounded-xl
          relative
        "
      >
        <Image
          alt="Image"
          src={imageSrc}
          fill
          className="object-cover w-full"
        />
        <div className="absolute top-5 right-5">
          <HeartButton
            listingId={id}
            currentUser={currentUser}
          />
        </div>
      </div>
    </>
  )
}