import { useContext } from "react";
import { TextContext, TextContextType } from "../App";
import { ProfilePic } from "../components/ProfilePic";

export function AboutMe() {
  const { text } = useContext(TextContext) as TextContextType;
  const about = text.sections.about;

  return (
    <section id="about" className="max-h-screen">
      <h1>{about.h1}</h1>
      <div className="justify-items-center grid grid-cols-1 p-2  items-center md:grid-cols-2">
        <ProfilePic />
        <p className="text-center sm:text-left max-w-prose">{about.p}</p>
      </div>
    </section>
  );
}
