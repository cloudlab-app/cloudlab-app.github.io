import {
  BackofficeService,
  Router,
  RouterOutlet,
  provideRouter
} from "./chunk-Z7USECQD.js";
import {
  ChangeDetectionStrategy,
  Component,
  bootstrapApplication,
  inject,
  provideBrowserGlobalErrorListeners,
  provideHttpClient,
  setClassMetadata,
  withFetch,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵelement
} from "./chunk-GTRT2NL7.js";

// src/app/core/guards/admin-auth.guard.ts
var adminAuthGuard = () => {
  const backofficeService = inject(BackofficeService);
  const router = inject(Router);
  if (backofficeService.isAuthenticated()) {
    return true;
  }
  return router.createUrlTree(["/backoffice/login"]);
};

// src/app/app.routes.ts
var routes = [
  {
    path: "",
    loadComponent: () => import("./chunk-T6VKXRHD.js").then((m) => m.AssistantComponent)
  },
  {
    path: "backoffice/login",
    loadComponent: () => import("./chunk-4LCNHTRM.js").then(
      (m) => m.AdminLoginComponent
    )
  },
  {
    path: "backoffice",
    canActivate: [adminAuthGuard],
    loadComponent: () => import("./chunk-LDXSSHT3.js").then(
      (m) => m.AdminDashboardComponent
    )
  },
  {
    path: "**",
    redirectTo: ""
  }
];

// src/app/app.config.ts
var appConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideHttpClient(withFetch())
  ]
};

// src/app/app.ts
var App = class _App {
  static \u0275fac = function App_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _App)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _App, selectors: [["app-root"]], decls: 1, vars: 0, template: function App_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "router-outlet");
    }
  }, dependencies: [RouterOutlet], encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(App, [{
    type: Component,
    args: [{ selector: "app-root", changeDetection: ChangeDetectionStrategy.OnPush, imports: [RouterOutlet], template: "<router-outlet />\n" }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(App, { className: "App", filePath: "src/app/app.ts", lineNumber: 11 });
})();

// src/main.ts
bootstrapApplication(App, appConfig).catch((err) => console.error(err));
