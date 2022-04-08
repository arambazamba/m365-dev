import { PreventIframe } from "express-msteams-host";

/**
 * Used as place holder for the decorators
 */
@PreventIframe("/basicTab/index.html")
@PreventIframe("/basicTab/config.html")
@PreventIframe("/basicTab/remove.html")
export class BasicTab {
}
