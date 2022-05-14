import { useContext } from "react";
import { TextContext, TextContextType } from "../App";

export function Technologies() {
  const { text } = useContext(TextContext) as TextContextType;
  const technologies = text.sections.technologies;

  return (
    <section id="technologies" className="">
      <h1>{technologies.h1}</h1>
      <p>{technologies.p}</p>
      <div className="grid text-center mt-2 text-xl sm:grid-cols-2 text-mainPurple-500 dark:text-slate-300">
        <ul>
          <li>Javascript</li>
          <li>Node.js</li>
          <li>Typescript</li>
          <li>React.js</li>
          <li>HTML</li>
          <li>CSS</li>
        </ul>
        <ul>
          <li>Java & Spring</li>
          <li>GIT & Github</li>
          <li>Maven & Gradle</li>
          <li>JUnit</li>
          <li>GraphQL</li>
          <li>API Rest</li>
        </ul>
      </div>
    </section>
  );
}
