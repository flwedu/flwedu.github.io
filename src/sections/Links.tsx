import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GithubLogo, LinkedinLogo, TwitterLogo } from "phosphor-react";

export function Links() {
	return (
		<>
			<CardHeader>
				<CardTitle className="text-2xl text-center"> Links </CardTitle>
			</CardHeader>
			<CardContent>
				<div className="my-8">
					<a href="https://github.com/flwedu" target="_blank" rel="noreferrer">
						<div className="flex items-center w-24">
							<GithubLogo /> GitHub
						</div>
					</a>
					<a
						href="https://twitter.com/emprestavel"
						target="_blank"
						rel="noreferrer"
					>
						<div className="flex items-center w-24">
							<TwitterLogo /> Twitter
						</div>
					</a>
					<a
						href="https://www.linkedin.com/in/edu-aquino/"
						target="_blank"
						rel="noreferrer"
					>
						<div className="flex items-center w-24">
							<LinkedinLogo /> Linkedin
						</div>
					</a>
				</div>
			</CardContent>
		</>
	);
}
