import Image from "next/image";
import {
  getBookedDatesByCabinId,
  getCabin,
  getCabins,
  getSettings,
} from "@/app/_lib/data-service";
import { EyeSlashIcon, MapPinIcon, UsersIcon } from "@heroicons/react/24/solid";
import TextExpander from "@/app/_components/TextExpander";
import Reservation from "@/app/_components/Reservation";
import Spinner from "@/app/_components/Spinner";
import { Suspense } from "react";
import Cabin from "@/app/_components/Cabin";

/* export const metadata = {
  title: ""
} */

export async function generateMetadata({ params }) {
  const { name } = await getCabin(params.cabinId);

  return { title: `Cabin ${name}` };
}

export async function generateStaticParams() {
  const cabins = await getCabins();

  const ids = cabins.map((cabin) => ({ cabinId: String(cabin.id) }));

  console.log(ids);

  return ids;
}

export default async function Page({ params }) {
  /* const cabin = await getCabin(params.cabinId);
  const settings = await getSettings();
  const bookedDates = await getBookedDatesByCabinId(params.cabinId); */

  const cabin = await getCabin(params.cabinId);

  console.log(params);

  return (
    <div className="max-w-6xl mx-auto mt-4 sm:mt-8">
      <Cabin cabin={cabin} />
      <div>
        <h2 className="text-3xl sm:text-5xl font-semibold text-center mb-10 text-accent-400">
          Reserve {cabin.name} today. Pay on arrival.
        </h2>
        <Suspense fallback={<Spinner />}>
          <Reservation cabin={cabin} />
        </Suspense>
      </div>
    </div>
  );
}
