import { projects } from "./projects";
import { ProjectGrid } from "@/components/ProjectGrid";

export default function Page() {
  return (
    <>
      <ProjectGrid projects={projects} />
    </>
  );
}
