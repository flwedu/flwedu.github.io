import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { User } from "lucide-react";
import { useTranslation } from "react-i18next";

export function AboutMe() {
	const { t } = useTranslation();

	return (
		<>
			<CardHeader>
				<CardTitle className="text-center text-2xl">
					{t("sections.about.h1")}
				</CardTitle>
			</CardHeader>
			<CardContent className="flex flex-col items-center gap-4">
				<Avatar className="w-40 h-40">
					<AvatarImage src="https://www.gravatar.com/avatar/061af413a7c2661473b4b595c6ef55e3?s=300" />
					<AvatarFallback>
						<User />
					</AvatarFallback>
				</Avatar>
				<p className="text-center sm:text-left max-w-prose">
					{t("sections.about.p")}
				</p>
			</CardContent>
		</>
	);
}
