import {
  BackofficeService
} from "./chunk-IYENB2SJ.js";
import {
  ChangeDetectionStrategy,
  Component,
  Router,
  RouterLink,
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
} from "./chunk-74DERVJA.js";

// src/app/features/backoffice/pages/admin-login/admin-login.component.ts
function AdminLoginComponent_Conditional_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21)(1, "span");
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
function AdminLoginComponent_Conditional_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 26);
    \u0275\u0275elementStart(1, "span");
    \u0275\u0275text(2, "Verificando credenciales...");
    \u0275\u0275elementEnd();
  }
}
function AdminLoginComponent_Conditional_42_Template(rf, ctx) {
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
  username = signal("Operador CBB", ...ngDevMode ? [{ debugName: "username" }] : (
    /* istanbul ignore next */
    []
  ));
  role = signal("Administrador RAG", ...ngDevMode ? [{ debugName: "role" }] : (
    /* istanbul ignore next */
    []
  ));
  areaDefault = signal("ADMISIONES", ...ngDevMode ? [{ debugName: "areaDefault" }] : (
    /* istanbul ignore next */
    []
  ));
  adminKey = signal("", ...ngDevMode ? [{ debugName: "adminKey" }] : (
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
  }
  onRoleChange(event) {
    const selectedRole = event.target.value;
    this.role.set(selectedRole);
    if (selectedRole.includes("Admisiones")) {
      this.areaDefault.set("ADMISIONES");
    } else if (selectedRole.includes("Secretar\xEDa")) {
      this.areaDefault.set("SECRETARIA");
    } else if (selectedRole.includes("Tesorer\xEDa")) {
      this.areaDefault.set("TESORERIA");
    } else {
      this.areaDefault.set("GENERAL");
    }
  }
  onKeyInput(event) {
    this.adminKey.set(event.target.value);
    if (this.errorMessage()) {
      this.errorMessage.set(null);
    }
  }
  togglePassword() {
    this.showPassword.update((v) => !v);
  }
  onSubmit(event) {
    event.preventDefault();
    if (!this.adminKey().trim() || this.isLoading())
      return;
    this.isLoading.set(true);
    this.errorMessage.set(null);
    this.backofficeService.login(this.username(), this.role(), this.areaDefault(), this.adminKey()).subscribe({
      next: () => {
        this.isLoading.set(false);
        this.router.navigate(["/backoffice"]);
      },
      error: (err) => {
        this.isLoading.set(false);
        this.errorMessage.set(err.message || "Credenciales inv\xE1lidas.");
      }
    });
  }
  static \u0275fac = function AdminLoginComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AdminLoginComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminLoginComponent, selectors: [["app-admin-login"]], decls: 47, vars: 8, consts: [[1, "min-h-screen", "bg-slate-50", "flex", "flex-col", "justify-center", "py-12", "sm:px-6", "lg:px-8", "relative", "overflow-hidden"], [1, "absolute", "-top-24", "-right-24", "w-96", "h-96", "rounded-full", "bg-red-100/50", "blur-3xl", "pointer-events-none"], [1, "absolute", "-bottom-24", "-left-24", "w-96", "h-96", "rounded-full", "bg-slate-200/60", "blur-3xl", "pointer-events-none"], [1, "sm:mx-auto", "sm:w-full", "sm:max-w-md", "relative", "z-10", "px-4"], [1, "text-center"], [1, "w-16", "h-16", "rounded-2xl", "bg-[#b00725]", "text-white", "flex", "items-center", "justify-center", "font-extrabold", "text-2xl", "mx-auto", "shadow-lg", "shadow-red-900/20"], [1, "mt-4", "text-2xl", "font-extrabold", "text-slate-900", "tracking-tight"], [1, "mt-1.5", "text-xs", "text-slate-500"], [1, "login-card", "mt-6", "bg-white", "py-8", "px-6", "shadow-xl", "rounded-3xl", "border", "border-slate-200/90", "sm:px-8"], [1, "space-y-4", 3, "submit"], [1, "block", "text-xs", "font-bold", "text-slate-700", "mb-1"], ["type", "text", "placeholder", "Ej: Mar\xEDa G\xF3mez", "required", "", 1, "w-full", "px-3.5", "py-2.5", "rounded-xl", "border", "border-slate-200", "text-sm", "text-slate-800", "focus:outline-hidden", "focus:border-[#b00725]", "focus:ring-2", "focus:ring-red-100", "transition-all", 3, "input", "value"], [1, "w-full", "px-3.5", "py-2.5", "rounded-xl", "border", "border-slate-200", "text-sm", "text-slate-800", "bg-white", "focus:outline-hidden", "focus:border-[#b00725]", "cursor-pointer", 3, "change", "value"], ["value", "Coord. de Admisiones"], ["value", "Secretar\xEDa Acad\xE9mica"], ["value", "Tesorer\xEDa y Pensiones"], ["value", "Administrador TI / RAG"], [1, "relative"], ["placeholder", "Ingresa la clave administrativa...", "required", "", 1, "w-full", "pl-3.5", "pr-16", "py-2.5", "rounded-xl", "border", "border-slate-200", "text-sm", "text-slate-800", "font-mono", "focus:outline-hidden", "focus:border-[#b00725]", "focus:ring-2", "focus:ring-red-100", "transition-all", 3, "input", "type", "value"], ["type", "button", 1, "absolute", "inset-y-0", "right-2", "px-2.5", "text-xs", "font-semibold", "text-slate-400", "hover:text-slate-700", "cursor-pointer", 3, "click"], [1, "text-[11px]", "text-slate-400", "mt-1"], [1, "p-3", "rounded-xl", "bg-red-50", "border", "border-red-200", "text-xs", "font-semibold", "text-red-700", "flex", "items-center", "gap-2"], [1, "pt-2"], ["type", "submit", 1, "w-full", "py-3", "px-4", "rounded-xl", "bg-[#b00725]", "hover:bg-[#92061e]", "text-white", "text-sm", "font-bold", "shadow-md", "shadow-red-900/20", "transition-all", "flex", "items-center", "justify-center", "gap-2", "cursor-pointer", "disabled:opacity-40", "disabled:cursor-not-allowed", 3, "disabled"], [1, "mt-6", "pt-5", "border-t", "border-slate-100", "text-center"], ["routerLink", "/", 1, "text-xs", "font-semibold", "text-slate-500", "hover:text-[#b00725]", "transition-colors", "inline-flex", "items-center", "gap-1"], [1, "w-4", "h-4", "border-2", "border-white", "border-t-transparent", "rounded-full", "animate-spin"]], template: function AdminLoginComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275element(1, "div", 1)(2, "div", 2);
      \u0275\u0275elementStart(3, "div", 3)(4, "div", 4)(5, "div", 5);
      \u0275\u0275text(6, " CBB ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "h1", 6);
      \u0275\u0275text(8, " Backoffice de Conocimiento ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "p", 7);
      \u0275\u0275text(10, " Administraci\xF3n del Asistente Virtual \u2014 Colegio Bertolt Brecht ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(11, "div", 8)(12, "form", 9);
      \u0275\u0275listener("submit", function AdminLoginComponent_Template_form_submit_12_listener($event) {
        return ctx.onSubmit($event);
      });
      \u0275\u0275elementStart(13, "div")(14, "label", 10);
      \u0275\u0275text(15, "Nombre del Operador / Usuario");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "input", 11);
      \u0275\u0275listener("input", function AdminLoginComponent_Template_input_input_16_listener($event) {
        return ctx.onUsernameInput($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(17, "div")(18, "label", 10);
      \u0275\u0275text(19, "Rol o \xC1rea de Gesti\xF3n");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "select", 12);
      \u0275\u0275listener("change", function AdminLoginComponent_Template_select_change_20_listener($event) {
        return ctx.onRoleChange($event);
      });
      \u0275\u0275elementStart(21, "option", 13);
      \u0275\u0275text(22, "Coord. de Admisiones (\xC1rea: ADMISIONES)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "option", 14);
      \u0275\u0275text(24, "Secretar\xEDa Acad\xE9mica (\xC1rea: SECRETARIA)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "option", 15);
      \u0275\u0275text(26, "Tesorer\xEDa y Pensiones (\xC1rea: TESORERIA)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "option", 16);
      \u0275\u0275text(28, "Administrador TI / RAG (\xC1rea: GENERAL)");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(29, "div")(30, "label", 10);
      \u0275\u0275text(31, "Clave de Seguridad (`X-Admin-Key`) *");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "div", 17)(33, "input", 18);
      \u0275\u0275listener("input", function AdminLoginComponent_Template_input_input_33_listener($event) {
        return ctx.onKeyInput($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "button", 19);
      \u0275\u0275listener("click", function AdminLoginComponent_Template_button_click_34_listener() {
        return ctx.togglePassword();
      });
      \u0275\u0275text(35);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(36, "p", 20);
      \u0275\u0275text(37, " Se valida contra el servidor RAG antes de autorizar la sesi\xF3n. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(38, AdminLoginComponent_Conditional_38_Template, 5, 1, "div", 21);
      \u0275\u0275elementStart(39, "div", 22)(40, "button", 23);
      \u0275\u0275conditionalCreate(41, AdminLoginComponent_Conditional_41_Template, 3, 0)(42, AdminLoginComponent_Conditional_42_Template, 4, 0);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(43, "div", 24)(44, "a", 25)(45, "span");
      \u0275\u0275text(46, "\u2190 Volver al portal web del colegio");
      \u0275\u0275elementEnd()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(16);
      \u0275\u0275property("value", ctx.username());
      \u0275\u0275advance(4);
      \u0275\u0275property("value", ctx.role());
      \u0275\u0275advance(13);
      \u0275\u0275property("type", ctx.showPassword() ? "text" : "password")("value", ctx.adminKey());
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.showPassword() ? "Ocultar" : "Mostrar", " ");
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.errorMessage() ? 38 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", !ctx.adminKey().trim() || ctx.isLoading());
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isLoading() ? 41 : 42);
    }
  }, dependencies: [RouterLink], styles: ["\n.login-card[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_fadeInUp 0.25s ease-out;\n}\n@keyframes _ngcontent-%COMP%_fadeInUp {\n  from {\n    opacity: 0;\n    transform: translateY(12px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n/*# sourceMappingURL=admin-login.component.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdminLoginComponent, [{
    type: Component,
    args: [{ selector: "app-admin-login", changeDetection: ChangeDetectionStrategy.OnPush, imports: [RouterLink], template: `<div class="min-h-screen bg-slate-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8 relative overflow-hidden">
  
  <!-- Decoraci\xF3n de fondo -->
  <div class="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-red-100/50 blur-3xl pointer-events-none"></div>
  <div class="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-slate-200/60 blur-3xl pointer-events-none"></div>

  <div class="sm:mx-auto sm:w-full sm:max-w-md relative z-10 px-4">
    
    <!-- Logo y T\xEDtulo -->
    <div class="text-center">
      <div class="w-16 h-16 rounded-2xl bg-[#b00725] text-white flex items-center justify-center font-extrabold text-2xl mx-auto shadow-lg shadow-red-900/20">
        CBB
      </div>
      <h1 class="mt-4 text-2xl font-extrabold text-slate-900 tracking-tight">
        Backoffice de Conocimiento
      </h1>
      <p class="mt-1.5 text-xs text-slate-500">
        Administraci\xF3n del Asistente Virtual \u2014 Colegio Bertolt Brecht
      </p>
    </div>

    <!-- Tarjeta de Login -->
    <div class="login-card mt-6 bg-white py-8 px-6 shadow-xl rounded-3xl border border-slate-200/90 sm:px-8">
      <form (submit)="onSubmit($event)" class="space-y-4">
        
        <!-- Nombre de Operador -->
        <div>
          <label class="block text-xs font-bold text-slate-700 mb-1">Nombre del Operador / Usuario</label>
          <input
            type="text"
            [value]="username()"
            (input)="onUsernameInput($event)"
            placeholder="Ej: Mar\xEDa G\xF3mez"
            required
            class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-800 focus:outline-hidden focus:border-[#b00725] focus:ring-2 focus:ring-red-100 transition-all"
          />
        </div>

        <!-- Rol / Unidad Organizacional -->
        <div>
          <label class="block text-xs font-bold text-slate-700 mb-1">Rol o \xC1rea de Gesti\xF3n</label>
          <select
            [value]="role()"
            (change)="onRoleChange($event)"
            class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-800 bg-white focus:outline-hidden focus:border-[#b00725] cursor-pointer">
            <option value="Coord. de Admisiones">Coord. de Admisiones (\xC1rea: ADMISIONES)</option>
            <option value="Secretar\xEDa Acad\xE9mica">Secretar\xEDa Acad\xE9mica (\xC1rea: SECRETARIA)</option>
            <option value="Tesorer\xEDa y Pensiones">Tesorer\xEDa y Pensiones (\xC1rea: TESORERIA)</option>
            <option value="Administrador TI / RAG">Administrador TI / RAG (\xC1rea: GENERAL)</option>
          </select>
        </div>

        <!-- Clave Administrativa (X-Admin-Key) -->
        <div>
          <label class="block text-xs font-bold text-slate-700 mb-1">Clave de Seguridad (\`X-Admin-Key\`) *</label>
          <div class="relative">
            <input
              [type]="showPassword() ? 'text' : 'password'"
              [value]="adminKey()"
              (input)="onKeyInput($event)"
              placeholder="Ingresa la clave administrativa..."
              required
              class="w-full pl-3.5 pr-16 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-800 font-mono focus:outline-hidden focus:border-[#b00725] focus:ring-2 focus:ring-red-100 transition-all"
            />
            <button
              type="button"
              (click)="togglePassword()"
              class="absolute inset-y-0 right-2 px-2.5 text-xs font-semibold text-slate-400 hover:text-slate-700 cursor-pointer">
              {{ showPassword() ? 'Ocultar' : 'Mostrar' }}
            </button>
          </div>
          <p class="text-[11px] text-slate-400 mt-1">
            Se valida contra el servidor RAG antes de autorizar la sesi\xF3n.
          </p>
        </div>

        <!-- Mensaje de Error -->
        @if (errorMessage()) {
          <div class="p-3 rounded-xl bg-red-50 border border-red-200 text-xs font-semibold text-red-700 flex items-center gap-2">
            <span>\u{1F6AB}</span>
            <span>{{ errorMessage() }}</span>
          </div>
        }

        <!-- Bot\xF3n Ingresar -->
        <div class="pt-2">
          <button
            type="submit"
            [disabled]="!adminKey().trim() || isLoading()"
            class="w-full py-3 px-4 rounded-xl bg-[#b00725] hover:bg-[#92061e] text-white text-sm font-bold shadow-md shadow-red-900/20 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed">
            @if (isLoading()) {
              <span class="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
              <span>Verificando credenciales...</span>
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
          class="text-xs font-semibold text-slate-500 hover:text-[#b00725] transition-colors inline-flex items-center gap-1">
          <span>\u2190 Volver al portal web del colegio</span>
        </a>
      </div>
    </div>

  </div>
</div>
`, styles: ["/* src/app/features/backoffice/pages/admin-login/admin-login.component.css */\n.login-card {\n  animation: fadeInUp 0.25s ease-out;\n}\n@keyframes fadeInUp {\n  from {\n    opacity: 0;\n    transform: translateY(12px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n/*# sourceMappingURL=admin-login.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminLoginComponent, { className: "AdminLoginComponent", filePath: "src/app/features/backoffice/pages/admin-login/admin-login.component.ts", lineNumber: 12 });
})();
export {
  AdminLoginComponent
};
//# sourceMappingURL=chunk-JZJZDD6N.js.map
