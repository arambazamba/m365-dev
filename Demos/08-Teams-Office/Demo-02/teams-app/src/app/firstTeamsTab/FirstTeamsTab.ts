import { PreventIframe } from "express-msteams-host";

/**
 * Used as place holder for the decorators
 */
@PreventIframe("/firstTeamsTab/index.html")
@PreventIframe("/firstTeamsTab/config.html")
@PreventIframe("/firstTeamsTab/remove.html")
export class FirstTeamsTab {
}
