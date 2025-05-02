import { ConfigurationsButton } from "@/components/ConfigurationsButton";
import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export function NavHeader() {
	const { t } = useTranslation();

	return (
		<div className="container flex items-center justify-between mx-auto py-4 border-b border-gray-200 dark:border-gray-800">
			<NavigationMenu>
				<NavigationMenuList className="flex items-center justify-center gap-5">
					<NavigationMenuItem>
						<Link to="/">{t("navbar.home")}</Link>
					</NavigationMenuItem>
					<NavigationMenuItem>
						<Link to="/technologies">{t("navbar.technologies")}</Link>
					</NavigationMenuItem>
					<NavigationMenuItem>
						<Link to="/projects">{t("navbar.projects")}</Link>
					</NavigationMenuItem>
					<NavigationMenuItem>
						<Link to="/links">{t("navbar.links")}</Link>
					</NavigationMenuItem>
				</NavigationMenuList>
			</NavigationMenu>
			<div className="ml-auto">
				<ConfigurationsButton />
			</div>
		</div>
	);
}
