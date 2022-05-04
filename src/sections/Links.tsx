import { GithubLogo, LinkedinLogo, TwitterLogo } from "phosphor-react";

export function Links() {
  return (
    <section id="links">
      <h1> Links </h1>
      <a href="https://github.com/flwedu" target="_blank">
        <div className="flex w-24 items-center">
          <GithubLogo /> GitHub
        </div>
      </a>
      <a href="https://twitter.com/emprestavel" target="_blank">
        <div className="flex w-24 items-center">
          <TwitterLogo /> Twitter
        </div>
      </a>
      <a href="https://www.linkedin.com/in/edu-aquino/" target="_blank">
        <div className="flex w-24 items-center">
          <LinkedinLogo /> Linkedin
        </div>
      </a>
    </section>
  );
}
