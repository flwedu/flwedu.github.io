import { render } from "@testing-library/react";
import { ProjectCard } from "./ProjectCard";

describe("Project Card component tests", () => {
  test("Rendered component should match the snapshot", () => {
    const project = {
      title: "Test App",
      description: "Just a test app",
      tags: ["react"],
      imgUrl: "",
      applicationLink: null,
      githubLink: null,
    };

    const { container } = render(<ProjectCard project={project} />);

    expect(container.firstChild).toMatchSnapshot();
  });
});

export {};
