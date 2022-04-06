import { Version } from "@microsoft/sp-core-library";
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField,
} from "@microsoft/sp-property-pane";
import { BaseClientSideWebPart } from "@microsoft/sp-webpart-base";
import { escape } from "@microsoft/sp-lodash-subset";

import styles from "./PnPjsWebPart.module.scss";
import * as strings from "PnPjsWebPartStrings";

import { sp, Web } from "@pnp/sp/presets/all";

export interface IPnPjsWebPartProps {
  description: string;
}

export default class PnPjsWebPart extends BaseClientSideWebPart<
  IPnPjsWebPartProps
> {
  public onInit(): Promise<void> {
    return super.onInit().then((_) => {
      sp.setup({
        spfxContext: this.context,
      });
    });
  }

  public render(): void {
    this.domElement.innerHTML = `
      <div class="${styles.pnPjs}">
        <div class="${styles.container}">
          <div class="${styles.row}">
            <div class="${styles.column}">
              <span class="${styles.title}">Welcome to SharePoint!</span>
              <p class="${
                styles.subTitle
              }">Customize SharePoint experiences using Web Parts.</p>
              <p class="${styles.description}">${escape(
      this.properties.description
    )}</p>
              <div id="response"></div>  
            </div>
          </div>
        </div>
      </div>`;

    this.getTitle();
  }

  protected get dataVersion(): Version {
    return Version.parse("1.0");
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription,
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField("description", {
                  label: strings.DescriptionFieldLabel,
                }),
              ],
            },
          ],
        },
      ],
    };
  }

  protected getTitle(): void {
    sp.web
      .select("Title")
      .get<{ Title: string }>()
      .then((w) => {
        this.domElement.querySelector(
          "#response"
        ).innerHTML = `Web Title: ${w.Title}`;
      });
  }
}
