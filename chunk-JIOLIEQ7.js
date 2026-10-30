import {
  BackofficeService,
  Router,
  RouterLink
} from "./chunk-A6GZHEZQ.js";
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-ZJRNLJ6C.js";

// src/app/features/backoffice/pages/admin-login/admin-login.component.ts
function AdminLoginComponent_Conditional_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27)(1, "span");
    \u0275\u0275text(2, "\u{1F6AB}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.errorMessage());
  }
}
function AdminLoginComponent_Conditional_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 33);
    \u0275\u0275elementStart(1, "span");
    \u0275\u0275text(2, "Iniciando sesi\xF3n...");
    \u0275\u0275elementEnd();
  }
}
function AdminLoginComponent_Conditional_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "\u{1F510}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "Ingresar al Panel");
    \u0275\u0275elementEnd();
  }
}
var AdminLoginComponent = class _AdminLoginComponent {
  backofficeService = inject(BackofficeService);
  router = inject(Router);
  username = signal("", ...ngDevMode ? [{ debugName: "username" }] : (
    /* istanbul ignore next */
    []
  ));
  password = signal("", ...ngDevMode ? [{ debugName: "password" }] : (
    /* istanbul ignore next */
    []
  ));
  showPassword = signal(false, ...ngDevMode ? [{ debugName: "showPassword" }] : (
    /* istanbul ignore next */
    []
  ));
  isLoading = signal(false, ...ngDevMode ? [{ debugName: "isLoading" }] : (
    /* istanbul ignore next */
    []
  ));
  errorMessage = signal(null, ...ngDevMode ? [{ debugName: "errorMessage" }] : (
    /* istanbul ignore next */
    []
  ));
  onUsernameInput(event) {
    this.username.set(event.target.value);
    if (this.errorMessage()) {
      this.errorMessage.set(null);
    }
  }
  onPasswordInput(event) {
    this.password.set(event.target.value);
    if (this.errorMessage()) {
      this.errorMessage.set(null);
    }
  }
  togglePassword() {
    this.showPassword.update((v) => !v);
  }
  onSubmit(event) {
    event.preventDefault();
    const u = this.username().trim();
    const p = this.password().trim();
    if (!u || !p || this.isLoading())
      return;
    this.isLoading.set(true);
    this.errorMessage.set(null);
    this.backofficeService.login({ username: u, password: p }).subscribe({
      next: () => {
        this.isLoading.set(false);
        this.router.navigate(["/backoffice"]);
      },
      error: (err) => {
        this.isLoading.set(false);
        this.errorMessage.set(err.message || "Usuario o contrase\xF1a incorrectos.");
      }
    });
  }
  static \u0275fac = function AdminLoginComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AdminLoginComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminLoginComponent, selectors: [["app-admin-login"]], decls: 57, vars: 7, consts: [[1, "min-h-dvh", "bg-white", "flex", "flex-col", "justify-between", "relative", "overflow-hidden"], [1, "w-full", "bg-[#0050A1]", "text-white", "border-b-4", "border-[#BE002E]", "shadow-md", "z-20"], [1, "w-full", "px-4", "sm:px-8", "h-16", "flex", "items-center", "justify-between"], [1, "flex", "items-center", "gap-3"], [1, "w-10", "h-10", "rounded-xl", "bg-white", "p-1.5", "flex", "items-center", "justify-center", "shadow-sm", "shrink-0"], ["src", "cropped-Favicon-3-1-32x32.png", "alt", "Logo CBB", 1, "w-full", "h-full", "object-contain"], [1, "flex", "items-center", "gap-2"], [1, "font-extrabold", "text-white", "text-sm", "sm:text-base", "tracking-tight"], [1, "hidden", "sm:inline-flex", "items-center", "px-2.5", "py-0.5", "rounded-full", "text-[10px]", "font-extrabold", "bg-[#BE002E]", "text-white", "uppercase", "tracking-wider"], [1, "text-[11px]", "text-blue-100"], ["routerLink", "/", 1, "inline-flex", "items-center", "gap-1.5", "px-3.5", "py-1.5", "rounded-xl", "bg-white/10", "hover:bg-white/20", "text-white", "text-xs", "font-bold", "transition-colors"], [1, "flex-1", "flex", "flex-col", "justify-center", "py-8", "sm:px-6", "lg:px-8", "relative", "z-10"], [1, "sm:mx-auto", "sm:w-full", "sm:max-w-md", "px-4"], [1, "text-center", "flex", "flex-col", "items-center"], [1, "w-20", "h-20", "rounded-3xl", "bg-white", "p-3", "flex", "items-center", "justify-center", "shadow-lg", "border-2", "border-[#0050A1]/15", "ring-4", "ring-[#BE002E]/10", "mb-4"], ["src", "cropped-Favicon-3-1-192x192.png", "alt", "Colegio Bertolt Brecht", 1, "w-full", "h-full", "object-contain"], [1, "inline-flex", "items-center", "px-3", "py-0.5", "rounded-full", "bg-[#BE002E]/10", "border", "border-[#BE002E]/25", "text-[#BE002E]", "text-[11px]", "font-extrabold", "uppercase", "tracking-wider", "mb-2"], [1, "text-2xl", "font-black", "text-[#0050A1]", "tracking-tight"], [1, "mt-1", "text-xs", "text-slate-500"], [1, "login-card", "mt-6", "bg-white", "py-7", "px-6", "shadow-xl", "rounded-3xl", "border", "border-slate-200", "border-t-4", "border-t-[#0050A1]", "sm:px-8"], [1, "space-y-4", 3, "submit"], [1, "block", "text-xs", "font-bold", "text-slate-700", "mb-1"], [1, "relative"], [1, "absolute", "inset-y-0", "left-0", "pl-3.5", "flex", "items-center", "text-slate-400", "pointer-events-none", "text-sm"], ["type", "text", "placeholder", "Ej: operadorcbb", "required", "", "autocomplete", "username", 1, "w-full", "pl-10", "pr-3.5", "py-2.5", "rounded-xl", "border", "border-slate-200", "text-sm", "text-slate-800", "focus:outline-hidden", "focus:border-[#0050A1]", "focus:ring-2", "focus:ring-[#0050A1]/15", "transition-all", 3, "input", "value"], ["placeholder", "Ingresa tu contrase\xF1a...", "required", "", "autocomplete", "current-password", 1, "w-full", "pl-10", "pr-20", "py-2.5", "rounded-xl", "border", "border-slate-200", "text-sm", "text-slate-800", "focus:outline-hidden", "focus:border-[#0050A1]", "focus:ring-2", "focus:ring-[#0050A1]/15", "transition-all", 3, "input", "type", "value"], ["type", "button", "tabindex", "-1", 1, "absolute", "inset-y-0", "right-2", "px-2.5", "text-xs", "font-bold", "text-[#0050A1]", "hover:text-[#BE002E]", "cursor-pointer", "select-none", 3, "click"], [1, "p-3", "rounded-xl", "bg-red-50", "border", "border-red-200", "border-l-4", "border-l-[#BE002E]", "text-xs", "font-semibold", "text-[#BE002E]", "flex", "items-center", "gap-2"], [1, "pt-2"], ["type", "submit", 1, "w-full", "py-3", "px-4", "rounded-xl", "bg-[#BE002E]", "hover:bg-[#9e0026]", "text-white", "text-sm", "font-bold", "shadow-md", "shadow-[#BE002E]/25", "transition-all", "flex", "items-center", "justify-center", "gap-2", "cursor-pointer", "disabled:opacity-40", "disabled:cursor-not-allowed", 3, "disabled"], [1, "mt-6", "pt-5", "border-t", "border-slate-100", "text-center"], ["routerLink", "/", 1, "text-xs", "font-bold", "text-[#0050A1]", "hover:text-[#BE002E]", "transition-colors", "inline-flex", "items-center", "gap-1"], [1, "py-3", "text-center", "border-t", "border-slate-100", "text-[11px]", "text-slate-400"], [1, "w-4", "h-4", "border-2", "border-white", "border-t-transparent", "rounded-full", "animate-spin"]], template: function AdminLoginComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "header", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4);
      \u0275\u0275element(5, "img", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "div")(7, "div", 6)(8, "span", 7);
      \u0275\u0275text(9, "Colegio Bertolt Brecht");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "span", 8);
      \u0275\u0275text(11, " Backoffice RAG ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(12, "p", 9);
      \u0275\u0275text(13, "Gesti\xF3n de Base de Conocimiento y Satisfacci\xF3n");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(14, "a", 10)(15, "span");
      \u0275\u0275text(16, "\u2190 Ir al Asistente Virtual");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(17, "div", 11)(18, "div", 12)(19, "div", 13)(20, "div", 14);
      \u0275\u0275element(21, "img", 15);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "span", 16);
      \u0275\u0275text(23, " Acceso al Sistema ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "h1", 17);
      \u0275\u0275text(25, " Backoffice de Conocimiento ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "p", 18);
      \u0275\u0275text(27, " Inicia sesi\xF3n para gestionar o consultar la base documental RAG ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(28, "div", 19)(29, "form", 20);
      \u0275\u0275listener("submit", function AdminLoginComponent_Template_form_submit_29_listener($event) {
        return ctx.onSubmit($event);
      });
      \u0275\u0275elementStart(30, "div")(31, "label", 21);
      \u0275\u0275text(32, "Usuario *");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "div", 22)(34, "span", 23);
      \u0275\u0275text(35, " \u{1F464} ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "input", 24);
      \u0275\u0275listener("input", function AdminLoginComponent_Template_input_input_36_listener($event) {
        return ctx.onUsernameInput($event);
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(37, "div")(38, "label", 21);
      \u0275\u0275text(39, "Contrase\xF1a *");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(40, "div", 22)(41, "span", 23);
      \u0275\u0275text(42, " \u{1F512} ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(43, "input", 25);
      \u0275\u0275listener("input", function AdminLoginComponent_Template_input_input_43_listener($event) {
        return ctx.onPasswordInput($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(44, "button", 26);
      \u0275\u0275listener("click", function AdminLoginComponent_Template_button_click_44_listener() {
        return ctx.togglePassword();
      });
      \u0275\u0275text(45);
      \u0275\u0275elementEnd()()();
      \u0275\u0275conditionalCreate(46, AdminLoginComponent_Conditional_46_Template, 5, 1, "div", 27);
      \u0275\u0275elementStart(47, "div", 28)(48, "button", 29);
      \u0275\u0275conditionalCreate(49, AdminLoginComponent_Conditional_49_Template, 3, 0)(50, AdminLoginComponent_Conditional_50_Template, 4, 0);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(51, "div", 30)(52, "a", 31)(53, "span");
      \u0275\u0275text(54, "\u2190 Volver al Asistente Virtual del Colegio");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(55, "footer", 32);
      \u0275\u0275text(56, " Colegio Bertolt Brecht \u2022 Sistema de Gesti\xF3n de Base de Conocimiento RAG ");
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(36);
      \u0275\u0275property("value", ctx.username());
      \u0275\u0275advance(7);
      \u0275\u0275property("type", ctx.showPassword() ? "text" : "password")("value", ctx.password());
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.showPassword() ? "Ocultar" : "Mostrar", " ");
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.errorMessage() ? 46 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", !ctx.username().trim() || !ctx.password().trim() || ctx.isLoading());
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isLoading() ? 49 : 50);
    }
  }, dependencies: [RouterLink], styles: ["\n.login-card[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_fadeInUp 0.25s ease-out;\n}\ninput[type=password][_ngcontent-%COMP%]::-ms-reveal, \ninput[type=password][_ngcontent-%COMP%]::-ms-clear, \ninput[_ngcontent-%COMP%]::-ms-reveal, \ninput[_ngcontent-%COMP%]::-ms-clear {\n  display: none !important;\n  width: 0 !important;\n  height: 0 !important;\n  pointer-events: none !important;\n}\ninput[_ngcontent-%COMP%]::-webkit-contacts-auto-fill-button, \ninput[_ngcontent-%COMP%]::-webkit-credentials-auto-fill-button {\n  visibility: hidden !important;\n  display: none !important;\n  pointer-events: none !important;\n  width: 0 !important;\n  height: 0 !important;\n}\n@keyframes _ngcontent-%COMP%_fadeInUp {\n  from {\n    opacity: 0;\n    transform: translateY(12px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdminLoginComponent, [{
    type: Component,
    args: [{ selector: "app-admin-login", changeDetection: ChangeDetectionStrategy.OnPush, imports: [RouterLink], template: `<div class="min-h-dvh bg-white flex flex-col justify-between relative overflow-hidden">

  <!-- Franja Institucional Superior (#0050A1 + #BE002E) -->
  <header class="w-full bg-[#0050A1] text-white border-b-4 border-[#BE002E] shadow-md z-20">
    <div class="w-full px-4 sm:px-8 h-16 flex items-center justify-between">
      <div class="flex items-center gap-3">
        <div class="w-10 h-10 rounded-xl bg-white p-1.5 flex items-center justify-center shadow-sm shrink-0">
          <img src="cropped-Favicon-3-1-32x32.png" alt="Logo CBB" class="w-full h-full object-contain" />
        </div>
        <div>
          <div class="flex items-center gap-2">
            <span class="font-extrabold text-white text-sm sm:text-base tracking-tight">Colegio Bertolt Brecht</span>
            <span class="hidden sm:inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-extrabold bg-[#BE002E] text-white uppercase tracking-wider">
              Backoffice RAG
            </span>
          </div>
          <p class="text-[11px] text-blue-100">Gesti\xF3n de Base de Conocimiento y Satisfacci\xF3n</p>
        </div>
      </div>

      <a
        routerLink="/"
        class="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold transition-colors">
        <span>\u2190 Ir al Asistente Virtual</span>
      </a>
    </div>
  </header>

  <!-- Contenedor Central de Login -->
  <div class="flex-1 flex flex-col justify-center py-8 sm:px-6 lg:px-8 relative z-10">
    <div class="sm:mx-auto sm:w-full sm:max-w-md px-4">

      <!-- Isotipo Oficial y T\xEDtulo -->
      <div class="text-center flex flex-col items-center">
        <div class="w-20 h-20 rounded-3xl bg-white p-3 flex items-center justify-center shadow-lg border-2 border-[#0050A1]/15 ring-4 ring-[#BE002E]/10 mb-4">
          <img src="cropped-Favicon-3-1-192x192.png" alt="Colegio Bertolt Brecht" class="w-full h-full object-contain" />
        </div>
        <span class="inline-flex items-center px-3 py-0.5 rounded-full bg-[#BE002E]/10 border border-[#BE002E]/25 text-[#BE002E] text-[11px] font-extrabold uppercase tracking-wider mb-2">
          Acceso al Sistema
        </span>
        <h1 class="text-2xl font-black text-[#0050A1] tracking-tight">
          Backoffice de Conocimiento
        </h1>
        <p class="mt-1 text-xs text-slate-500">
          Inicia sesi\xF3n para gestionar o consultar la base documental RAG
        </p>
      </div>

      <!-- Tarjeta de Login -->
      <div class="login-card mt-6 bg-white py-7 px-6 shadow-xl rounded-3xl border border-slate-200 border-t-4 border-t-[#0050A1] sm:px-8">
        <form (submit)="onSubmit($event)" class="space-y-4">

          <!-- Campo 1: Usuario -->
          <div>
            <label class="block text-xs font-bold text-slate-700 mb-1">Usuario *</label>
            <div class="relative">
              <span class="absolute inset-y-0 left-0 pl-3.5 flex items-center text-slate-400 pointer-events-none text-sm">
                \u{1F464}
              </span>
              <input
                type="text"
                [value]="username()"
                (input)="onUsernameInput($event)"
                placeholder="Ej: operadorcbb"
                required
                autocomplete="username"
                class="w-full pl-10 pr-3.5 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-800 focus:outline-hidden focus:border-[#0050A1] focus:ring-2 focus:ring-[#0050A1]/15 transition-all"
              />
            </div>
          </div>

          <!-- Campo 2: Contrase\xF1a -->
          <div>
            <label class="block text-xs font-bold text-slate-700 mb-1">Contrase\xF1a *</label>
            <div class="relative">
              <span class="absolute inset-y-0 left-0 pl-3.5 flex items-center text-slate-400 pointer-events-none text-sm">
                \u{1F512}
              </span>
              <input
                [type]="showPassword() ? 'text' : 'password'"
                [value]="password()"
                (input)="onPasswordInput($event)"
                placeholder="Ingresa tu contrase\xF1a..."
                required
                autocomplete="current-password"
                class="w-full pl-10 pr-20 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-800 focus:outline-hidden focus:border-[#0050A1] focus:ring-2 focus:ring-[#0050A1]/15 transition-all"
              />
              <button
                type="button"
                (click)="togglePassword()"
                tabindex="-1"
                class="absolute inset-y-0 right-2 px-2.5 text-xs font-bold text-[#0050A1] hover:text-[#BE002E] cursor-pointer select-none">
                {{ showPassword() ? 'Ocultar' : 'Mostrar' }}
              </button>
            </div>
          </div>

          <!-- Mensaje de Error -->
          @if (errorMessage()) {
            <div class="p-3 rounded-xl bg-red-50 border border-red-200 border-l-4 border-l-[#BE002E] text-xs font-semibold text-[#BE002E] flex items-center gap-2">
              <span>\u{1F6AB}</span>
              <span>{{ errorMessage() }}</span>
            </div>
          }

          <!-- Bot\xF3n Ingresar -->
          <div class="pt-2">
            <button
              type="submit"
              [disabled]="!username().trim() || !password().trim() || isLoading()"
              class="w-full py-3 px-4 rounded-xl bg-[#BE002E] hover:bg-[#9e0026] text-white text-sm font-bold shadow-md shadow-[#BE002E]/25 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed">
              @if (isLoading()) {
                <span class="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                <span>Iniciando sesi\xF3n...</span>
              } @else {
                <span>\u{1F510}</span>
                <span>Ingresar al Panel</span>
              }
            </button>
          </div>

        </form>

        <div class="mt-6 pt-5 border-t border-slate-100 text-center">
          <a
            routerLink="/"
            class="text-xs font-bold text-[#0050A1] hover:text-[#BE002E] transition-colors inline-flex items-center gap-1">
            <span>\u2190 Volver al Asistente Virtual del Colegio</span>
          </a>
        </div>
      </div>

    </div>
  </div>

  <!-- Pie Institucional -->
  <footer class="py-3 text-center border-t border-slate-100 text-[11px] text-slate-400">
    Colegio Bertolt Brecht \u2022 Sistema de Gesti\xF3n de Base de Conocimiento RAG
  </footer>

</div>
`, styles: ["/* src/app/features/backoffice/pages/admin-login/admin-login.component.css */\n.login-card {\n  animation: fadeInUp 0.25s ease-out;\n}\ninput[type=password]::-ms-reveal,\ninput[type=password]::-ms-clear,\ninput::-ms-reveal,\ninput::-ms-clear {\n  display: none !important;\n  width: 0 !important;\n  height: 0 !important;\n  pointer-events: none !important;\n}\ninput::-webkit-contacts-auto-fill-button,\ninput::-webkit-credentials-auto-fill-button {\n  visibility: hidden !important;\n  display: none !important;\n  pointer-events: none !important;\n  width: 0 !important;\n  height: 0 !important;\n}\n@keyframes fadeInUp {\n  from {\n    opacity: 0;\n    transform: translateY(12px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminLoginComponent, { className: "AdminLoginComponent", filePath: "src/app/features/backoffice/pages/admin-login/admin-login.component.ts", lineNumber: 12 });
})();
export {
  AdminLoginComponent
};
