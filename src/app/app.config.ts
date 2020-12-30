import { InjectionToken } from "@angular/core";
import { AuthService } from "./services/authuser.service";
import { UserService } from "./services/user.service";

export interface AppConfig {
  enableConfig: boolean;
}

export const APP_CONFIG = new InjectionToken<AppConfig>('app.config', {
  providedIn: 'root',
  factory: () => ({
    enableConfig: true,
  }),
});

export function configServices(config: AppConfig) {
  return config.enableConfig ? new AuthService() : new UserService();
}
