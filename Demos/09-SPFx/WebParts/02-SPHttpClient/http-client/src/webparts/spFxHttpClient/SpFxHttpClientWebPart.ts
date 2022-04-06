import * as React from "react";
import * as ReactDom from "react-dom";
import {
  Environment,
  EnvironmentType,
  Version,
} from "@microsoft/sp-core-library";
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField,
} from "@microsoft/sp-property-pane";
import { BaseClientSideWebPart } from "@microsoft/sp-webpart-base";

import * as strings from "SpFxHttpClientWebPartStrings";
import SpFxHttpClient from "./components/SpFxHttpClient";
import { ISpFxHttpClientProps } from "./components/ISpFxHttpClientProps";

import MockHttpClient from "./MockHttpClient";
import { SPList } from "./SPList";
import { SPHttpClient } from "@microsoft/sp-http";

export interface ISpFxHttpClientWebPartProps {
  description: string;
}

export default class SpFxHttpClientWebPart extends BaseClientSideWebPart<
  ISpFxHttpClientWebPartProps
> {
  public render(): void {
    this._getListData().then((lists) => {
      const element: React.ReactElement<ISpFxHttpClientProps> = React.createElement(
        SpFxHttpClient,
        {
          description: this.properties.description,
          lists: lists,
        }
      );

      ReactDom.render(element, this.domElement);
    });
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
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

  private _getMockListData(): Promise<SPList[]> {
    return MockHttpClient.get(this.context.pageContext.web.absoluteUrl).then(
      (data: SPList[]) => {
        return data;
      }
    );
  }

  private _getSharePointListData(): Promise<SPList[]> {
    const url: string =
      this.context.pageContext.web.absoluteUrl +
      `/_api/web/lists?$filter=Hidden eq false`;
    return this.context.spHttpClient
      .get(url, SPHttpClient.configurations.v1)
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        return json.value;
      }) as Promise<SPList[]>;
  }

  private _getListData(): Promise<SPList[]> {
    if (Environment.type === EnvironmentType.Local) {
      return this._getMockListData();
    } else {
      return this._getSharePointListData();
    }
  }
}
