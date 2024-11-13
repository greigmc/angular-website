import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { appConfig } from './app.config';

const serverConfig: ApplicationConfig = {
  providers: [
    // Add any server-specific providers here
  ]
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
