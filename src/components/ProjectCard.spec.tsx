import { it, expect, describe } from 'vitest'
import { render } from '../utils/test-utils'
import { ProjectCard } from "./ProjectCard";

describe("Project Card component tests", () => {
  it("Should render a component that matches the snapshot", () => {
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
