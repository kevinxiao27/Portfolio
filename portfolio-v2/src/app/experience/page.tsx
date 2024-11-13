import { Experiences } from "@/components/Experience";
import { experience } from "./constants";

export default function Page() {
  return (
    <>
      <Experiences experience={experience} />
    </>
  );
}
