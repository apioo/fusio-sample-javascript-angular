import {Config} from "ngx-fusio-sdk/lib/config/config";

export class ConfigBuilder {

  public static build(): Config {
    return {
      baseUrl: 'https://demo.fusio-project.org/',
      logo: 'fusio_64px.png',
      appId: 1,
      homePath: '/',
      helpUrl: 'https://docs.fusio-project.org/docs/backend/',
      navigation: [{
        title: 'Demo',
        visible: true,
        children: [{
          title: 'Welcome',
          icon: 'bi-kanban-fill',
          path: '/welcome'
        }]
      }]
    }
  }

}
