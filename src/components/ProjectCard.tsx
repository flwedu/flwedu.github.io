import { ImageIcon } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "./ui/card";

export type Project = {
	title: string;
	description: string;
	tags: string[];
	imgUrl: string;
	applicationLink: string | null;
	githubLink: string | null;
};

export function ProjectCard(props: { project: Project }) {
	const { project } = props;

	return (
		<Card className="dark:bg-neutral-700 w-full">
			<CardHeader className="flex flex-col items-center gap-2">
				<CardTitle>{project.title}</CardTitle>
				<CardDescription>{project.description}</CardDescription>
			</CardHeader>
			<CardContent className="flex flex-col items-center gap-2">
				<Avatar className="w-40 h-40">
					<AvatarImage src={project.imgUrl} />
					<AvatarFallback>
						<ImageIcon />
					</AvatarFallback>
				</Avatar>
			</CardContent>
			<CardFooter className="flex justify-center gap-2">
				{project.applicationLink && (
					<ProjectCardButton
						key="1"
						name="Visite App"
						url={project.applicationLink}
					/>
				)}
				{project.githubLink && (
					<ProjectCardButton key="2" name="Github" url={project.githubLink} />
				)}
			</CardFooter>
		</Card>
	);
}

function ProjectCardButton(props: { name: string; url: string }) {
	return (
		<a
			className="bg-purple-600 hover:bg-purple-500 dark:hover:bg-purple-600 px-1 py-2 rounded-md w-24 text-white text-center"
			href={props.url}
			target="_blank"
			rel="noreferrer"
		>
			{props.name}
		</a>
	);
}
