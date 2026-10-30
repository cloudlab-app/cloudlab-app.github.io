import {
  BackofficeService,
  Router,
  RouterLink
} from "./chunk-Z7USECQD.js";
import {
  ChangeDetectionStrategy,
  Component,
  DatePipe,
  Input,
  Output,
  ViewChild,
  computed,
  effect,
  inject,
  input,
  output,
  setClassMetadata,
  signal,
  viewChild,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵdomProperty,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵqueryAdvance,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵviewQuerySignal
} from "./chunk-GTRT2NL7.js";

// src/app/features/backoffice/components/admin-navbar/admin-navbar.component.ts
function AdminNavbarComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 8);
    \u0275\u0275text(1, " Panel Administrador ");
    \u0275\u0275elementEnd();
  }
}
function AdminNavbarComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 9);
    \u0275\u0275text(1, " Modo Consulta (Solo Lectura) ");
    \u0275\u0275elementEnd();
  }
}
function AdminNavbarComponent_Conditional_19_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 18);
    \u0275\u0275text(1, "Admin");
    \u0275\u0275elementEnd();
  }
}
function AdminNavbarComponent_Conditional_19_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 19);
    \u0275\u0275text(1, "Consulta");
    \u0275\u0275elementEnd();
  }
}
function AdminNavbarComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 14)(1, "div", 15);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 16)(4, "div", 17)(5, "span");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(7, AdminNavbarComponent_Conditional_19_Conditional_7_Template, 2, 0, "span", 18)(8, AdminNavbarComponent_Conditional_19_Conditional_8_Template, 2, 0, "span", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 20);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "button", 21);
    \u0275\u0275listener("click", function AdminNavbarComponent_Conditional_19_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.logout.emit());
    });
    \u0275\u0275elementStart(12, "span");
    \u0275\u0275text(13, "Salir");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const user_r3 = ctx;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", user_r3.username.slice(0, 2).toUpperCase(), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(user_r3.nombre || user_r3.username);
    \u0275\u0275advance();
    \u0275\u0275conditional(user_r3.role === "admin" ? 7 : 8);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(user_r3.username);
  }
}
var AdminNavbarComponent = class _AdminNavbarComponent {
  session = input.required(...ngDevMode ? [{ debugName: "session" }] : (
    /* istanbul ignore next */
    []
  ));
  logout = output();
  static \u0275fac = function AdminNavbarComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AdminNavbarComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminNavbarComponent, selectors: [["app-admin-navbar"]], inputs: { session: [1, "session"] }, outputs: { logout: "logout" }, decls: 20, vars: 2, consts: [[1, "cbb-header", "shrink-0", "bg-[#0050A1]", "text-white", "selection:bg-white", "selection:text-[#0050A1]", "border-b-4", "border-[#BE002E]", "shadow-md", "sticky", "top-0", "z-30"], [1, "w-full", "px-4", "sm:px-6", "lg:px-10", "h-16", "sm:h-18", "flex", "items-center", "justify-between", "gap-4"], [1, "flex", "items-center", "gap-3.5", "min-w-0"], [1, "w-10", "h-10", "sm:w-11", "sm:h-11", "rounded-xl", "bg-white", "p-1.5", "flex", "items-center", "justify-center", "shadow-md", "shrink-0"], ["src", "cropped-Favicon-3-1-32x32.png", "alt", "Logo Colegio Bertolt Brecht", 1, "w-full", "h-full", "object-contain"], [1, "min-w-0"], [1, "flex", "items-center", "gap-2.5"], [1, "text-base", "sm:text-lg", "font-extrabold", "text-white", "tracking-tight", "truncate"], [1, "hidden", "md:inline-flex", "items-center", "px-2.5", "py-0.5", "text-[10px]", "font-extrabold", "uppercase", "tracking-wider", "bg-[#BE002E]", "text-white", "rounded-full", "shadow-2xs"], [1, "hidden", "md:inline-flex", "items-center", "px-2.5", "py-0.5", "text-[10px]", "font-extrabold", "uppercase", "tracking-wider", "bg-emerald-600", "text-white", "rounded-full", "shadow-2xs"], [1, "text-xs", "text-blue-100", "hidden", "sm:block", "truncate"], [1, "flex", "items-center", "gap-3", "sm:gap-4", "shrink-0"], ["routerLink", "/", 1, "text-xs", "font-bold", "text-white", "bg-white/15", "hover:bg-white/25", "px-3.5", "py-2", "rounded-xl", "transition-colors", "flex", "items-center", "gap-1.5"], [1, "hidden", "md:inline"], [1, "hidden", "sm:flex", "items-center", "gap-2.5", "pl-3", "border-l", "border-white/20"], [1, "w-8", "h-8", "rounded-full", "bg-white", "text-[#0050A1]", "flex", "items-center", "justify-center", "text-xs", "font-extrabold", "shadow-xs"], [1, "hidden", "md:block", "text-left"], [1, "text-xs", "font-bold", "text-white", "leading-none", "flex", "items-center", "gap-1.5"], [1, "px-1.5", "py-0.5", "rounded-full", "text-[9px]", "font-extrabold", "bg-[#BE002E]", "text-white", "uppercase", "tracking-wider"], [1, "px-1.5", "py-0.5", "rounded-full", "text-[9px]", "font-extrabold", "bg-emerald-500", "text-white", "uppercase", "tracking-wider"], [1, "text-[10px]", "text-blue-100", "mt-0.5"], ["type", "button", 1, "px-3.5", "py-2", "rounded-xl", "text-xs", "font-bold", "text-white", "bg-[#BE002E]", "hover:bg-[#9e0026]", "shadow-sm", "transition-colors", "cursor-pointer", "flex", "items-center", "gap-1", 3, "click"]], template: function AdminNavbarComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "header", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
      \u0275\u0275element(4, "img", 4);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div", 5)(6, "div", 6)(7, "h1", 7);
      \u0275\u0275text(8, " Backoffice RAG \u2014 Colegio Bertolt Brecht ");
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(9, AdminNavbarComponent_Conditional_9_Template, 2, 0, "span", 8)(10, AdminNavbarComponent_Conditional_10_Template, 2, 0, "span", 9);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "p", 10);
      \u0275\u0275text(12, " Gesti\xF3n de Base de Conocimiento y Satisfacci\xF3n del Usuario ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(13, "div", 11)(14, "a", 12)(15, "span");
      \u0275\u0275text(16, "\u{1F310}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "span", 13);
      \u0275\u0275text(18, "Ver Asistente P\xFAblico");
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(19, AdminNavbarComponent_Conditional_19_Template, 14, 4);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      let tmp_0_0;
      let tmp_1_0;
      \u0275\u0275advance(9);
      \u0275\u0275conditional(((tmp_0_0 = ctx.session()) == null ? null : tmp_0_0.role) === "admin" ? 9 : ((tmp_0_0 = ctx.session()) == null ? null : tmp_0_0.role) === "viewer" ? 10 : -1);
      \u0275\u0275advance(10);
      \u0275\u0275conditional((tmp_1_0 = ctx.session()) ? 19 : -1, tmp_1_0);
    }
  }, dependencies: [RouterLink], styles: ["\n.admin-navbar[_ngcontent-%COMP%] {\n  -webkit-backdrop-filter: blur(8px);\n  backdrop-filter: blur(8px);\n}"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdminNavbarComponent, [{
    type: Component,
    args: [{ selector: "app-admin-navbar", changeDetection: ChangeDetectionStrategy.OnPush, imports: [RouterLink], template: `<header class="cbb-header shrink-0 bg-[#0050A1] text-white selection:bg-white selection:text-[#0050A1] border-b-4 border-[#BE002E] shadow-md sticky top-0 z-30">
  <div class="w-full px-4 sm:px-6 lg:px-10 h-16 sm:h-18 flex items-center justify-between gap-4">
    
    <!-- Izquierda: \xCDcono Oficial CBB + Identidad del Backoffice -->
    <div class="flex items-center gap-3.5 min-w-0">
      <div class="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-white p-1.5 flex items-center justify-center shadow-md shrink-0">
        <img 
          src="cropped-Favicon-3-1-32x32.png" 
          alt="Logo Colegio Bertolt Brecht" 
          class="w-full h-full object-contain"
        />
      </div>

      <div class="min-w-0">
        <div class="flex items-center gap-2.5">
          <h1 class="text-base sm:text-lg font-extrabold text-white tracking-tight truncate">
            Backoffice RAG \u2014 Colegio Bertolt Brecht
          </h1>
          @if (session()?.role === 'admin') {
            <span class="hidden md:inline-flex items-center px-2.5 py-0.5 text-[10px] font-extrabold uppercase tracking-wider bg-[#BE002E] text-white rounded-full shadow-2xs">
              Panel Administrador
            </span>
          } @else if (session()?.role === 'viewer') {
            <span class="hidden md:inline-flex items-center px-2.5 py-0.5 text-[10px] font-extrabold uppercase tracking-wider bg-emerald-600 text-white rounded-full shadow-2xs">
              Modo Consulta (Solo Lectura)
            </span>
          }
        </div>
        <p class="text-xs text-blue-100 hidden sm:block truncate">
          Gesti\xF3n de Base de Conocimiento y Satisfacci\xF3n del Usuario
        </p>
      </div>
    </div>

    <!-- Derecha: Accesos R\xE1pidos y Operador Activo -->
    <div class="flex items-center gap-3 sm:gap-4 shrink-0">
      <a 
        routerLink="/" 
        class="text-xs font-bold text-white bg-white/15 hover:bg-white/25 px-3.5 py-2 rounded-xl transition-colors flex items-center gap-1.5">
        <span>\u{1F310}</span>
        <span class="hidden md:inline">Ver Asistente P\xFAblico</span>
      </a>

      @if (session(); as user) {
        <div class="hidden sm:flex items-center gap-2.5 pl-3 border-l border-white/20">
          <div class="w-8 h-8 rounded-full bg-white text-[#0050A1] flex items-center justify-center text-xs font-extrabold shadow-xs">
            {{ user.username.slice(0, 2).toUpperCase() }}
          </div>
          <div class="hidden md:block text-left">
            <div class="text-xs font-bold text-white leading-none flex items-center gap-1.5">
              <span>{{ user.nombre || user.username }}</span>
              @if (user.role === 'admin') {
                <span class="px-1.5 py-0.5 rounded-full text-[9px] font-extrabold bg-[#BE002E] text-white uppercase tracking-wider">Admin</span>
              } @else {
                <span class="px-1.5 py-0.5 rounded-full text-[9px] font-extrabold bg-emerald-500 text-white uppercase tracking-wider">Consulta</span>
              }
            </div>
            <div class="text-[10px] text-blue-100 mt-0.5">{{ user.username }}</div>
          </div>
        </div>

        <button
          type="button"
          (click)="logout.emit()"
          class="px-3.5 py-2 rounded-xl text-xs font-bold text-white bg-[#BE002E] hover:bg-[#9e0026] shadow-sm transition-colors cursor-pointer flex items-center gap-1">
          <span>Salir</span>
        </button>
      }
    </div>

  </div>
</header>
`, styles: ["/* src/app/features/backoffice/components/admin-navbar/admin-navbar.component.css */\n.admin-navbar {\n  -webkit-backdrop-filter: blur(8px);\n  backdrop-filter: blur(8px);\n}\n"] }]
  }], null, { session: [{ type: Input, args: [{ isSignal: true, alias: "session", required: true }] }], logout: [{ type: Output, args: ["logout"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminNavbarComponent, { className: "AdminNavbarComponent", filePath: "src/app/features/backoffice/components/admin-navbar/admin-navbar.component.ts", lineNumber: 12 });
})();

// src/app/features/backoffice/components/admin-stats/admin-stats.component.ts
function AdminStatsComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "button", 17);
    \u0275\u0275domListener("click", function AdminStatsComponent_Conditional_13_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openUpload.emit());
    });
    \u0275\u0275domElementStart(1, "span");
    \u0275\u0275text(2, "\u2795");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "span");
    \u0275\u0275text(4, "Ingestar Documento");
    \u0275\u0275domElementEnd()();
  }
}
var AdminStatsComponent = class _AdminStatsComponent {
  totalDocumentos = input(0, ...ngDevMode ? [{ debugName: "totalDocumentos" }] : (
    /* istanbul ignore next */
    []
  ));
  totalFragmentos = input(0, ...ngDevMode ? [{ debugName: "totalFragmentos" }] : (
    /* istanbul ignore next */
    []
  ));
  isLoading = input(false, ...ngDevMode ? [{ debugName: "isLoading" }] : (
    /* istanbul ignore next */
    []
  ));
  isAdmin = input(true, ...ngDevMode ? [{ debugName: "isAdmin" }] : (
    /* istanbul ignore next */
    []
  ));
  openUpload = output();
  refresh = output();
  static \u0275fac = function AdminStatsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AdminStatsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminStatsComponent, selectors: [["app-admin-stats"]], inputs: { totalDocumentos: [1, "totalDocumentos"], totalFragmentos: [1, "totalFragmentos"], isLoading: [1, "isLoading"], isAdmin: [1, "isAdmin"] }, outputs: { openUpload: "openUpload", refresh: "refresh" }, decls: 45, vars: 6, consts: [[1, "space-y-6"], [1, "flex", "flex-col", "sm:flex-row", "sm:items-center", "sm:justify-between", "gap-4", "bg-white", "p-6", "rounded-2xl", "border", "border-slate-200", "border-l-4", "border-l-[#0050A1]", "shadow-2xs"], [1, "text-xl", "font-extrabold", "text-[#0050A1]"], [1, "text-xs", "sm:text-sm", "text-slate-500", "mt-1"], [1, "flex", "items-center", "gap-3", "shrink-0"], ["type", "button", 1, "px-4", "py-2.5", "rounded-xl", "border", "border-slate-200", "bg-white", "hover:bg-slate-50", "text-[#0050A1]", "text-xs", "sm:text-sm", "font-bold", "transition-all", "flex", "items-center", "gap-2", "cursor-pointer", "disabled:opacity-50", 3, "click", "disabled"], ["type", "button", 1, "px-5", "py-2.5", "rounded-xl", "bg-[#BE002E]", "hover:bg-[#9e0026]", "text-white", "text-xs", "sm:text-sm", "font-bold", "shadow-md", "shadow-[#BE002E]/20", "transition-all", "flex", "items-center", "gap-2", "cursor-pointer", "active:scale-95"], [1, "grid", "grid-cols-1", "sm:grid-cols-3", "gap-4"], [1, "stat-card", "bg-white", "p-5", "rounded-2xl", "border", "border-slate-200", "border-t-4", "border-t-[#BE002E]", "shadow-2xs", "flex", "items-center", "gap-4"], [1, "w-12", "h-12", "rounded-2xl", "bg-[#BE002E]/10", "text-[#BE002E]", "flex", "items-center", "justify-center", "text-2xl", "shrink-0"], [1, "text-xs", "font-bold", "text-slate-500", "uppercase", "tracking-wider"], [1, "text-2xl", "font-black", "text-slate-900", "mt-0.5"], [1, "text-[11px]", "text-slate-400"], [1, "stat-card", "bg-white", "p-5", "rounded-2xl", "border", "border-slate-200", "border-t-4", "border-t-[#0050A1]", "shadow-2xs", "flex", "items-center", "justify-center", "sm:justify-start", "gap-4"], [1, "w-12", "h-12", "rounded-2xl", "bg-[#0050A1]/10", "text-[#0050A1]", "flex", "items-center", "justify-center", "text-2xl", "shrink-0"], [1, "stat-card", "bg-white", "p-5", "rounded-2xl", "border", "border-slate-200", "border-t-4", "border-t-emerald-500", "shadow-2xs", "flex", "items-center", "gap-4"], [1, "w-12", "h-12", "rounded-2xl", "bg-emerald-50", "text-emerald-600", "flex", "items-center", "justify-center", "text-2xl", "shrink-0"], ["type", "button", 1, "px-5", "py-2.5", "rounded-xl", "bg-[#BE002E]", "hover:bg-[#9e0026]", "text-white", "text-xs", "sm:text-sm", "font-bold", "shadow-md", "shadow-[#BE002E]/20", "transition-all", "flex", "items-center", "gap-2", "cursor-pointer", "active:scale-95", 3, "click"]], template: function AdminStatsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h2", 2);
      \u0275\u0275text(4, "Panel de Documentos Oficiales");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(5, "p", 3);
      \u0275\u0275text(6, " Administra los reglamentos, gu\xEDas y normativas que alimentan al Asistente Virtual del Colegio Bertolt Brecht. ");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(7, "div", 4)(8, "button", 5);
      \u0275\u0275domListener("click", function AdminStatsComponent_Template_button_click_8_listener() {
        return ctx.refresh.emit();
      });
      \u0275\u0275domElementStart(9, "span");
      \u0275\u0275text(10, "\u{1F504}");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(11, "span");
      \u0275\u0275text(12, "Actualizar");
      \u0275\u0275domElementEnd()();
      \u0275\u0275conditionalCreate(13, AdminStatsComponent_Conditional_13_Template, 5, 0, "button", 6);
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(14, "div", 7)(15, "div", 8)(16, "div", 9);
      \u0275\u0275text(17, " \u{1F4C4} ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(18, "div")(19, "div", 10);
      \u0275\u0275text(20, "Documentos Activos");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(21, "div", 11);
      \u0275\u0275text(22);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(23, "div", 12);
      \u0275\u0275text(24, "Archivos indexados en BD");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(25, "div", 13)(26, "div", 14);
      \u0275\u0275text(27, " \u{1F9E9} ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(28, "div")(29, "div", 10);
      \u0275\u0275text(30, "Fragmentos Vectoriales");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(31, "div", 11);
      \u0275\u0275text(32);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(33, "div", 12);
      \u0275\u0275text(34, "Chunks con embeddings generados");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(35, "div", 15)(36, "div", 16);
      \u0275\u0275text(37, " \u{1F3DB}\uFE0F ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(38, "div")(39, "div", 10);
      \u0275\u0275text(40, "\xC1reas Institucionales");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(41, "div", 11);
      \u0275\u0275text(42, "3 Sedes");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(43, "div", 12);
      \u0275\u0275text(44, "Colonial, SJL y Carabayllo");
      \u0275\u0275domElementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(8);
      \u0275\u0275domProperty("disabled", ctx.isLoading());
      \u0275\u0275advance();
      \u0275\u0275classMap(ctx.isLoading() ? "animate-spin" : "");
      \u0275\u0275advance(4);
      \u0275\u0275conditional(ctx.isAdmin() ? 13 : -1);
      \u0275\u0275advance(9);
      \u0275\u0275textInterpolate(ctx.totalDocumentos());
      \u0275\u0275advance(10);
      \u0275\u0275textInterpolate(ctx.totalFragmentos());
    }
  }, styles: ["\n.stat-card[_ngcontent-%COMP%] {\n  transition: transform 0.2s ease, box-shadow 0.2s ease;\n}\n.stat-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.05);\n}"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdminStatsComponent, [{
    type: Component,
    args: [{ selector: "app-admin-stats", changeDetection: ChangeDetectionStrategy.OnPush, template: `<div class="space-y-6">
  <!-- Cabecera de Bienvenida y Acci\xF3n Principal -->
  <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bg-white p-6 rounded-2xl border border-slate-200 border-l-4 border-l-[#0050A1] shadow-2xs">
    <div>
      <h2 class="text-xl font-extrabold text-[#0050A1]">Panel de Documentos Oficiales</h2>
      <p class="text-xs sm:text-sm text-slate-500 mt-1">
        Administra los reglamentos, gu\xEDas y normativas que alimentan al Asistente Virtual del Colegio Bertolt Brecht.
      </p>
    </div>

    <div class="flex items-center gap-3 shrink-0">
      <button
        type="button"
        (click)="refresh.emit()"
        [disabled]="isLoading()"
        class="px-4 py-2.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-[#0050A1] text-xs sm:text-sm font-bold transition-all flex items-center gap-2 cursor-pointer disabled:opacity-50">
        <span [class]="isLoading() ? 'animate-spin' : ''">\u{1F504}</span>
        <span>Actualizar</span>
      </button>

      @if (isAdmin()) {
        <button
          type="button"
          (click)="openUpload.emit()"
          class="px-5 py-2.5 rounded-xl bg-[#BE002E] hover:bg-[#9e0026] text-white text-xs sm:text-sm font-bold shadow-md shadow-[#BE002E]/20 transition-all flex items-center gap-2 cursor-pointer active:scale-95">
          <span>\u2795</span>
          <span>Ingestar Documento</span>
        </button>
      }
    </div>
  </div>

  <!-- Tarjetas de Indicadores (KPIs) -->
  <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
    
    <!-- KPI 1: Total Documentos -->
    <div class="stat-card bg-white p-5 rounded-2xl border border-slate-200 border-t-4 border-t-[#BE002E] shadow-2xs flex items-center gap-4">
      <div class="w-12 h-12 rounded-2xl bg-[#BE002E]/10 text-[#BE002E] flex items-center justify-center text-2xl shrink-0">
        \u{1F4C4}
      </div>
      <div>
        <div class="text-xs font-bold text-slate-500 uppercase tracking-wider">Documentos Activos</div>
        <div class="text-2xl font-black text-slate-900 mt-0.5">{{ totalDocumentos() }}</div>
        <div class="text-[11px] text-slate-400">Archivos indexados en BD</div>
      </div>
    </div>

    <!-- KPI 2: Total Fragmentos Vectoriales -->
    <div class="stat-card bg-white p-5 rounded-2xl border border-slate-200 border-t-4 border-t-[#0050A1] shadow-2xs flex items-center justify-center sm:justify-start gap-4">
      <div class="w-12 h-12 rounded-2xl bg-[#0050A1]/10 text-[#0050A1] flex items-center justify-center text-2xl shrink-0">
        \u{1F9E9}
      </div>
      <div>
        <div class="text-xs font-bold text-slate-500 uppercase tracking-wider">Fragmentos Vectoriales</div>
        <div class="text-2xl font-black text-slate-900 mt-0.5">{{ totalFragmentos() }}</div>
        <div class="text-[11px] text-slate-400">Chunks con embeddings generados</div>
      </div>
    </div>

    <!-- KPI 3: \xC1rea de Cobertura -->
    <div class="stat-card bg-white p-5 rounded-2xl border border-slate-200 border-t-4 border-t-emerald-500 shadow-2xs flex items-center gap-4">
      <div class="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center text-2xl shrink-0">
        \u{1F3DB}\uFE0F
      </div>
      <div>
        <div class="text-xs font-bold text-slate-500 uppercase tracking-wider">\xC1reas Institucionales</div>
        <div class="text-2xl font-black text-slate-900 mt-0.5">3 Sedes</div>
        <div class="text-[11px] text-slate-400">Colonial, SJL y Carabayllo</div>
      </div>
    </div>

  </div>
</div>
`, styles: ["/* src/app/features/backoffice/components/admin-stats/admin-stats.component.css */\n.stat-card {\n  transition: transform 0.2s ease, box-shadow 0.2s ease;\n}\n.stat-card:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.05);\n}\n"] }]
  }], null, { totalDocumentos: [{ type: Input, args: [{ isSignal: true, alias: "totalDocumentos", required: false }] }], totalFragmentos: [{ type: Input, args: [{ isSignal: true, alias: "totalFragmentos", required: false }] }], isLoading: [{ type: Input, args: [{ isSignal: true, alias: "isLoading", required: false }] }], isAdmin: [{ type: Input, args: [{ isSignal: true, alias: "isAdmin", required: false }] }], openUpload: [{ type: Output, args: ["openUpload"] }], refresh: [{ type: Output, args: ["refresh"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminStatsComponent, { className: "AdminStatsComponent", filePath: "src/app/features/backoffice/components/admin-stats/admin-stats.component.ts", lineNumber: 9 });
})();

// src/app/features/backoffice/components/document-table/document-table.component.ts
var _forTrack0 = ($index, $item) => $item.documento_id;
function DocumentTableComponent_For_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "option", 9);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const area_r1 = ctx.$implicit;
    \u0275\u0275domProperty("value", area_r1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(area_r1 === "TODOS" ? "Todas las \xE1reas" : area_r1);
  }
}
function DocumentTableComponent_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "button", 18);
    \u0275\u0275domListener("click", function DocumentTableComponent_Conditional_25_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.clearFilters());
    });
    \u0275\u0275text(1, " Limpiar filtros ");
    \u0275\u0275domElementEnd();
  }
}
function DocumentTableComponent_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 16);
    \u0275\u0275domElement(1, "div", 19);
    \u0275\u0275domElementStart(2, "div", 20);
    \u0275\u0275text(3, "Consultando base de datos vectorial...");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(4, "p", 21);
    \u0275\u0275text(5, "Sincronizando registros de PostgreSQL + pgvector");
    \u0275\u0275domElementEnd()();
  }
}
function DocumentTableComponent_Conditional_27_Conditional_3_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "button", 26);
    \u0275\u0275domListener("click", function DocumentTableComponent_Conditional_27_Conditional_3_Conditional_4_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.openUpload.emit());
    });
    \u0275\u0275text(1, " \u2795 Subir primer documento ");
    \u0275\u0275domElementEnd();
  }
}
function DocumentTableComponent_Conditional_27_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "h3", 23);
    \u0275\u0275text(1, "A\xFAn no hay documentos indexados");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(2, "p", 24);
    \u0275\u0275text(3, " Comienza subiendo reglamentos en PDF, Word o Markdown para que el Asistente Virtual pueda responder consultas oficiales. ");
    \u0275\u0275domElementEnd();
    \u0275\u0275conditionalCreate(4, DocumentTableComponent_Conditional_27_Conditional_3_Conditional_4_Template, 2, 0, "button", 25);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r2.isAdmin() ? 4 : -1);
  }
}
function DocumentTableComponent_Conditional_27_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "h3", 23);
    \u0275\u0275text(1, "Sin coincidencias para tu b\xFAsqueda");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(2, "p", 24);
    \u0275\u0275text(3);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(4, "button", 27);
    \u0275\u0275domListener("click", function DocumentTableComponent_Conditional_27_Conditional_4_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.clearFilters());
    });
    \u0275\u0275text(5, " Restablecer filtros ");
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(' No se encontraron documentos que coincidan con "', ctx_r2.searchQuery(), '" en el \xE1rea seleccionada. ');
  }
}
function DocumentTableComponent_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 17)(1, "div", 22);
    \u0275\u0275text(2, " \u{1F4C2} ");
    \u0275\u0275domElementEnd();
    \u0275\u0275conditionalCreate(3, DocumentTableComponent_Conditional_27_Conditional_3_Template, 5, 1)(4, DocumentTableComponent_Conditional_27_Conditional_4_Template, 6, 1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r2.documentos().length === 0 ? 3 : 4);
  }
}
function DocumentTableComponent_Conditional_28_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "th", 33);
    \u0275\u0275text(1, "Acciones");
    \u0275\u0275domElementEnd();
  }
}
function DocumentTableComponent_Conditional_28_For_17_Conditional_25_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElement(0, "span", 50);
    \u0275\u0275domElementStart(1, "span");
    \u0275\u0275text(2, "Eliminando...");
    \u0275\u0275domElementEnd();
  }
}
function DocumentTableComponent_Conditional_28_For_17_Conditional_25_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span");
    \u0275\u0275text(1, "\u{1F5D1}\uFE0F");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(2, "span");
    \u0275\u0275text(3, "Eliminar");
    \u0275\u0275domElementEnd();
  }
}
function DocumentTableComponent_Conditional_28_For_17_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "td", 33)(1, "button", 49);
    \u0275\u0275domListener("click", function DocumentTableComponent_Conditional_28_For_17_Conditional_25_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r6);
      const doc_r7 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.requestDelete.emit(doc_r7));
    });
    \u0275\u0275conditionalCreate(2, DocumentTableComponent_Conditional_28_For_17_Conditional_25_Conditional_2_Template, 3, 0)(3, DocumentTableComponent_Conditional_28_For_17_Conditional_25_Conditional_3_Template, 4, 0);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const doc_r7 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275domProperty("disabled", ctx_r2.deletingId() === doc_r7.documento_id);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.deletingId() === doc_r7.documento_id ? 2 : 3);
  }
}
function DocumentTableComponent_Conditional_28_For_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "tr", 35)(1, "td", 40)(2, "span", 41);
    \u0275\u0275text(3);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(4, "td", 31)(5, "div", 42)(6, "span", 43);
    \u0275\u0275text(7, "\u{1F4D8}");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(8, "div")(9, "div", 44);
    \u0275\u0275text(10);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(11, "div", 45);
    \u0275\u0275text(12, "Vectorizado con gemini-embedding-001");
    \u0275\u0275domElementEnd()()()();
    \u0275\u0275domElementStart(13, "td", 31)(14, "span", 46);
    \u0275\u0275text(15);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(16, "td", 32)(17, "span", 47)(18, "span");
    \u0275\u0275text(19, "\u{1F9E9}");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(20, "span");
    \u0275\u0275text(21);
    \u0275\u0275domElementEnd()()();
    \u0275\u0275domElementStart(22, "td", 48);
    \u0275\u0275text(23);
    \u0275\u0275pipe(24, "date");
    \u0275\u0275domElementEnd();
    \u0275\u0275conditionalCreate(25, DocumentTableComponent_Conditional_28_For_17_Conditional_25_Template, 4, 2, "td", 33);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const doc_r7 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", doc_r7.documento_id, " ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(doc_r7.fuente);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", doc_r7.area_origen, " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(doc_r7.fragmentos);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(24, 6, doc_r7.creado_en, "dd/MM/yyyy HH:mm"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.isAdmin() ? 25 : -1);
  }
}
function DocumentTableComponent_Conditional_28_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "div", 39)(1, "button", 51);
    \u0275\u0275domListener("click", function DocumentTableComponent_Conditional_28_Conditional_30_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.goToPage(ctx_r2.currentPage() - 1));
    });
    \u0275\u0275text(2, " \u2190 Anterior ");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "span", 52);
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(5, "button", 51);
    \u0275\u0275domListener("click", function DocumentTableComponent_Conditional_28_Conditional_30_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.goToPage(ctx_r2.currentPage() + 1));
    });
    \u0275\u0275text(6, " Siguiente \u2192 ");
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275domProperty("disabled", ctx_r2.currentPage() === 1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2(" P\xE1gina ", ctx_r2.currentPage(), " de ", ctx_r2.totalPages(), " ");
    \u0275\u0275advance();
    \u0275\u0275domProperty("disabled", ctx_r2.currentPage() === ctx_r2.totalPages());
  }
}
function DocumentTableComponent_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 28)(1, "table", 29)(2, "thead")(3, "tr", 30)(4, "th", 31);
    \u0275\u0275text(5, "ID Documento");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(6, "th", 31);
    \u0275\u0275text(7, "Fuente Oficial / T\xEDtulo");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(8, "th", 31);
    \u0275\u0275text(9, "\xC1rea Origen");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(10, "th", 32);
    \u0275\u0275text(11, "Fragmentos (Chunks)");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(12, "th", 31);
    \u0275\u0275text(13, "Fecha Indexaci\xF3n");
    \u0275\u0275domElementEnd();
    \u0275\u0275conditionalCreate(14, DocumentTableComponent_Conditional_28_Conditional_14_Template, 2, 0, "th", 33);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(15, "tbody", 34);
    \u0275\u0275repeaterCreate(16, DocumentTableComponent_Conditional_28_For_17_Template, 26, 9, "tr", 35, _forTrack0);
    \u0275\u0275domElementEnd()()();
    \u0275\u0275domElementStart(18, "div", 36)(19, "div", 37);
    \u0275\u0275text(20, " Mostrando ");
    \u0275\u0275domElementStart(21, "span", 38);
    \u0275\u0275text(22);
    \u0275\u0275domElementEnd();
    \u0275\u0275text(23, " a ");
    \u0275\u0275domElementStart(24, "span", 38);
    \u0275\u0275text(25);
    \u0275\u0275domElementEnd();
    \u0275\u0275text(26, " de ");
    \u0275\u0275domElementStart(27, "span", 38);
    \u0275\u0275text(28);
    \u0275\u0275domElementEnd();
    \u0275\u0275text(29, " registros ");
    \u0275\u0275domElementEnd();
    \u0275\u0275conditionalCreate(30, DocumentTableComponent_Conditional_28_Conditional_30_Template, 7, 4, "div", 39);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(14);
    \u0275\u0275conditional(ctx_r2.isAdmin() ? 14 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r2.paginatedDocuments());
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r2.startIndex());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.endIndex());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.filteredDocuments().length);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.totalPages() > 1 ? 30 : -1);
  }
}
var DocumentTableComponent = class _DocumentTableComponent {
  documentos = input.required(...ngDevMode ? [{ debugName: "documentos" }] : (
    /* istanbul ignore next */
    []
  ));
  isLoading = input(false, ...ngDevMode ? [{ debugName: "isLoading" }] : (
    /* istanbul ignore next */
    []
  ));
  deletingId = input(null, ...ngDevMode ? [{ debugName: "deletingId" }] : (
    /* istanbul ignore next */
    []
  ));
  isAdmin = input(true, ...ngDevMode ? [{ debugName: "isAdmin" }] : (
    /* istanbul ignore next */
    []
  ));
  requestDelete = output();
  openUpload = output();
  // Filtros reactivos
  searchQuery = signal("", ...ngDevMode ? [{ debugName: "searchQuery" }] : (
    /* istanbul ignore next */
    []
  ));
  selectedArea = signal("TODOS", ...ngDevMode ? [{ debugName: "selectedArea" }] : (
    /* istanbul ignore next */
    []
  ));
  pageSize = signal(5, ...ngDevMode ? [{ debugName: "pageSize" }] : (
    /* istanbul ignore next */
    []
  ));
  currentPage = signal(1, ...ngDevMode ? [{ debugName: "currentPage" }] : (
    /* istanbul ignore next */
    []
  ));
  areasDisponibles = computed(() => {
    const areas = /* @__PURE__ */ new Set(["GENERAL", "ADMISIONES", "SECRETARIA", "DIRECCION", "TESORERIA"]);
    for (const d of this.documentos()) {
      if (d.area_origen) {
        areas.add(d.area_origen.toUpperCase());
      }
    }
    return ["TODOS", ...Array.from(areas)];
  }, ...ngDevMode ? [{ debugName: "areasDisponibles" }] : (
    /* istanbul ignore next */
    []
  ));
  // Documentos filtrados por texto y área
  filteredDocuments = computed(() => {
    const query = this.searchQuery().trim().toLowerCase();
    const area = this.selectedArea();
    return this.documentos().filter((doc) => {
      const matchText = !query || doc.documento_id.toLowerCase().includes(query) || doc.fuente.toLowerCase().includes(query);
      const matchArea = area === "TODOS" || doc.area_origen.toUpperCase() === area;
      return matchText && matchArea;
    });
  }, ...ngDevMode ? [{ debugName: "filteredDocuments" }] : (
    /* istanbul ignore next */
    []
  ));
  // Paginación reactiva
  totalPages = computed(() => {
    const total = this.filteredDocuments().length;
    return Math.max(1, Math.ceil(total / this.pageSize()));
  }, ...ngDevMode ? [{ debugName: "totalPages" }] : (
    /* istanbul ignore next */
    []
  ));
  paginatedDocuments = computed(() => {
    const page = Math.min(this.currentPage(), this.totalPages());
    const size = this.pageSize();
    const start = (page - 1) * size;
    return this.filteredDocuments().slice(start, start + size);
  }, ...ngDevMode ? [{ debugName: "paginatedDocuments" }] : (
    /* istanbul ignore next */
    []
  ));
  startIndex = computed(() => {
    if (this.filteredDocuments().length === 0)
      return 0;
    return (this.currentPage() - 1) * this.pageSize() + 1;
  }, ...ngDevMode ? [{ debugName: "startIndex" }] : (
    /* istanbul ignore next */
    []
  ));
  endIndex = computed(() => {
    const calculated = this.currentPage() * this.pageSize();
    return Math.min(calculated, this.filteredDocuments().length);
  }, ...ngDevMode ? [{ debugName: "endIndex" }] : (
    /* istanbul ignore next */
    []
  ));
  onSearch(event) {
    const val = event.target.value;
    this.searchQuery.set(val);
    this.currentPage.set(1);
  }
  onAreaSelect(area) {
    this.selectedArea.set(area);
    this.currentPage.set(1);
  }
  onPageSizeChange(event) {
    const size = Number(event.target.value) || 5;
    this.pageSize.set(size);
    this.currentPage.set(1);
  }
  goToPage(page) {
    if (page >= 1 && page <= this.totalPages()) {
      this.currentPage.set(page);
    }
  }
  clearFilters() {
    this.searchQuery.set("");
    this.selectedArea.set("TODOS");
    this.currentPage.set(1);
  }
  static \u0275fac = function DocumentTableComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DocumentTableComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DocumentTableComponent, selectors: [["app-document-table"]], inputs: { documentos: [1, "documentos"], isLoading: [1, "isLoading"], deletingId: [1, "deletingId"], isAdmin: [1, "isAdmin"] }, outputs: { requestDelete: "requestDelete", openUpload: "openUpload" }, decls: 29, vars: 9, consts: [[1, "bg-white", "rounded-2xl", "border", "border-slate-200", "shadow-2xs", "overflow-hidden"], [1, "p-4", "sm:p-5", "border-b", "border-slate-200", "bg-slate-50/50", "flex", "flex-col", "md:flex-row", "md:items-center", "justify-between", "gap-3"], [1, "relative", "flex-1", "max-w-md"], [1, "absolute", "inset-y-0", "left-3", "flex", "items-center", "text-slate-400", "text-sm"], ["type", "text", "placeholder", "Buscar por ID, nombre de fuente o \xE1rea...", 1, "w-full", "pl-9", "pr-4", "py-2", "rounded-xl", "border", "border-slate-200", "bg-white", "text-sm", "text-slate-800", "placeholder-slate-400", "focus:outline-hidden", "focus:border-[#0050A1]", "focus:ring-2", "focus:ring-[#0050A1]/15", "transition-all", 3, "input", "value"], [1, "flex", "flex-wrap", "items-center", "gap-2.5"], [1, "flex", "items-center", "gap-2"], [1, "text-xs", "font-bold", "text-slate-600"], [1, "px-3", "py-2", "rounded-xl", "border", "border-slate-200", "bg-white", "text-xs", "font-bold", "text-slate-700", "focus:outline-hidden", "focus:border-[#0050A1]", "cursor-pointer", 3, "change", "value"], [3, "value"], [1, "px-2.5", "py-2", "rounded-xl", "border", "border-slate-200", "bg-white", "text-xs", "font-bold", "text-slate-700", "focus:outline-hidden", "focus:border-[#0050A1]", "cursor-pointer", 3, "change", "value"], ["value", "5", 3, "selected"], ["value", "10", 3, "selected"], ["value", "20", 3, "selected"], ["value", "50", 3, "selected"], ["type", "button", 1, "px-3", "py-2", "rounded-xl", "text-xs", "font-bold", "text-[#BE002E]", "hover:bg-red-50", "transition-colors", "cursor-pointer"], [1, "p-12", "flex", "flex-col", "items-center", "justify-center", "text-center", "space-y-3"], [1, "p-12", "flex", "flex-col", "items-center", "justify-center", "text-center"], ["type", "button", 1, "px-3", "py-2", "rounded-xl", "text-xs", "font-bold", "text-[#BE002E]", "hover:bg-red-50", "transition-colors", "cursor-pointer", 3, "click"], [1, "w-10", "h-10", "border-4", "border-blue-100", "border-t-[#0050A1]", "rounded-full", "animate-spin"], [1, "text-sm", "font-bold", "text-[#0050A1]"], [1, "text-xs", "text-slate-400"], [1, "w-14", "h-14", "rounded-2xl", "bg-[#0050A1]/10", "flex", "items-center", "justify-center", "text-2xl", "mb-3"], [1, "text-base", "font-extrabold", "text-slate-800"], [1, "text-xs", "text-slate-500", "max-w-sm", "mt-1", "mb-4"], ["type", "button", 1, "px-4", "py-2", "rounded-xl", "bg-[#BE002E]", "text-white", "text-xs", "font-bold", "hover:bg-[#9e0026]", "transition-colors", "cursor-pointer"], ["type", "button", 1, "px-4", "py-2", "rounded-xl", "bg-[#BE002E]", "text-white", "text-xs", "font-bold", "hover:bg-[#9e0026]", "transition-colors", "cursor-pointer", 3, "click"], ["type", "button", 1, "px-4", "py-2", "rounded-xl", "border", "border-slate-200", "text-[#0050A1]", "text-xs", "font-bold", "hover:bg-slate-50", "transition-colors", "cursor-pointer", 3, "click"], [1, "overflow-x-auto"], [1, "w-full", "text-left", "border-collapse"], [1, "bg-slate-50/80", "border-b", "border-slate-200", "text-[11px]", "font-extrabold", "text-[#0050A1]", "uppercase", "tracking-wider"], [1, "py-3.5", "px-4"], [1, "py-3.5", "px-4", "text-center"], [1, "py-3.5", "px-4", "text-right"], [1, "divide-y", "divide-slate-200/70", "text-sm"], [1, "doc-row", "hover:bg-slate-50/90", "transition-colors"], [1, "p-4", "border-t", "border-slate-200", "bg-slate-50/50", "flex", "flex-col", "sm:flex-row", "items-center", "justify-between", "gap-3"], [1, "text-xs", "text-slate-500"], [1, "font-bold", "text-slate-800"], [1, "flex", "items-center", "gap-1.5"], [1, "py-3.5", "px-4", "font-mono", "text-xs", "font-semibold", "text-slate-700"], [1, "px-2", "py-1", "rounded-md", "bg-slate-100", "border", "border-slate-200"], [1, "flex", "items-center", "gap-2.5"], [1, "text-base"], [1, "font-bold", "text-slate-900"], [1, "text-[11px]", "text-slate-400"], [1, "inline-flex", "items-center", "px-2.5", "py-0.5", "rounded-full", "text-xs", "font-bold", "bg-[#BE002E]/10", "text-[#BE002E]", "border", "border-[#BE002E]/25"], [1, "inline-flex", "items-center", "gap-1", "px-2.5", "py-1", "rounded-lg", "bg-[#0050A1]/10", "text-[#0050A1]", "font-extrabold", "text-xs", "border", "border-[#0050A1]/20"], [1, "py-3.5", "px-4", "text-xs", "text-slate-500", "font-medium"], ["type", "button", 1, "inline-flex", "items-center", "gap-1.5", "px-3", "py-1.5", "rounded-xl", "text-xs", "font-bold", "text-[#BE002E]", "hover:text-white", "hover:bg-[#BE002E]", "border", "border-[#BE002E]/30", "hover:border-[#BE002E]", "transition-all", "cursor-pointer", "disabled:opacity-50", 3, "click", "disabled"], [1, "w-3.5", "h-3.5", "border-2", "border-current", "border-t-transparent", "rounded-full", "animate-spin"], ["type", "button", 1, "px-3", "py-1.5", "rounded-lg", "border", "border-slate-200", "bg-white", "hover:bg-slate-100", "text-xs", "font-bold", "text-slate-700", "disabled:opacity-40", "disabled:cursor-not-allowed", "cursor-pointer", 3, "click", "disabled"], [1, "px-2", "text-xs", "font-bold", "text-slate-600"]], template: function DocumentTableComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "span", 3);
      \u0275\u0275text(4, "\u{1F50D}");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(5, "input", 4);
      \u0275\u0275domListener("input", function DocumentTableComponent_Template_input_input_5_listener($event) {
        return ctx.onSearch($event);
      });
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(6, "div", 5)(7, "div", 6)(8, "label", 7);
      \u0275\u0275text(9, "\xC1rea:");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(10, "select", 8);
      \u0275\u0275domListener("change", function DocumentTableComponent_Template_select_change_10_listener($event) {
        return ctx.onAreaSelect($event.target.value);
      });
      \u0275\u0275repeaterCreate(11, DocumentTableComponent_For_12_Template, 2, 2, "option", 9, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(13, "div", 6)(14, "label", 7);
      \u0275\u0275text(15, "Mostrar:");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(16, "select", 10);
      \u0275\u0275domListener("change", function DocumentTableComponent_Template_select_change_16_listener($event) {
        return ctx.onPageSizeChange($event);
      });
      \u0275\u0275domElementStart(17, "option", 11);
      \u0275\u0275text(18, "5 filas");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(19, "option", 12);
      \u0275\u0275text(20, "10 filas");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(21, "option", 13);
      \u0275\u0275text(22, "20 filas");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(23, "option", 14);
      \u0275\u0275text(24, "50 filas");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275conditionalCreate(25, DocumentTableComponent_Conditional_25_Template, 2, 0, "button", 15);
      \u0275\u0275domElementEnd()();
      \u0275\u0275conditionalCreate(26, DocumentTableComponent_Conditional_26_Template, 6, 0, "div", 16)(27, DocumentTableComponent_Conditional_27_Template, 5, 1, "div", 17)(28, DocumentTableComponent_Conditional_28_Template, 31, 5);
      \u0275\u0275domElementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(5);
      \u0275\u0275domProperty("value", ctx.searchQuery());
      \u0275\u0275advance(5);
      \u0275\u0275domProperty("value", ctx.selectedArea());
      \u0275\u0275advance();
      \u0275\u0275repeater(ctx.areasDisponibles());
      \u0275\u0275advance(5);
      \u0275\u0275domProperty("value", ctx.pageSize());
      \u0275\u0275advance();
      \u0275\u0275domProperty("selected", ctx.pageSize() === 5);
      \u0275\u0275advance(2);
      \u0275\u0275domProperty("selected", ctx.pageSize() === 10);
      \u0275\u0275advance(2);
      \u0275\u0275domProperty("selected", ctx.pageSize() === 20);
      \u0275\u0275advance(2);
      \u0275\u0275domProperty("selected", ctx.pageSize() === 50);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.searchQuery() || ctx.selectedArea() !== "TODOS" ? 25 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isLoading() ? 26 : ctx.filteredDocuments().length === 0 ? 27 : 28);
    }
  }, dependencies: [DatePipe], styles: ["\n.doc-row[_ngcontent-%COMP%] {\n  transition: background-color 0.15s ease;\n}"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DocumentTableComponent, [{
    type: Component,
    args: [{ selector: "app-document-table", changeDetection: ChangeDetectionStrategy.OnPush, imports: [DatePipe], template: `<div class="bg-white rounded-2xl border border-slate-200 shadow-2xs overflow-hidden">
  
  <!-- Barra de Filtros y B\xFAsqueda -->
  <div class="p-4 sm:p-5 border-b border-slate-200 bg-slate-50/50 flex flex-col md:flex-row md:items-center justify-between gap-3">
    
    <!-- Buscador -->
    <div class="relative flex-1 max-w-md">
      <span class="absolute inset-y-0 left-3 flex items-center text-slate-400 text-sm">\u{1F50D}</span>
      <input
        type="text"
        [value]="searchQuery()"
        (input)="onSearch($event)"
        placeholder="Buscar por ID, nombre de fuente o \xE1rea..."
        class="w-full pl-9 pr-4 py-2 rounded-xl border border-slate-200 bg-white text-sm text-slate-800 placeholder-slate-400 focus:outline-hidden focus:border-[#0050A1] focus:ring-2 focus:ring-[#0050A1]/15 transition-all"
      />
    </div>

    <!-- Filtros por \xC1rea y Tama\xF1o de P\xE1gina -->
    <div class="flex flex-wrap items-center gap-2.5">
      <div class="flex items-center gap-2">
        <label class="text-xs font-bold text-slate-600">\xC1rea:</label>
        <select
          [value]="selectedArea()"
          (change)="onAreaSelect($any($event.target).value)"
          class="px-3 py-2 rounded-xl border border-slate-200 bg-white text-xs font-bold text-slate-700 focus:outline-hidden focus:border-[#0050A1] cursor-pointer">
          @for (area of areasDisponibles(); track area) {
            <option [value]="area">{{ area === 'TODOS' ? 'Todas las \xE1reas' : area }}</option>
          }
        </select>
      </div>

      <div class="flex items-center gap-2">
        <label class="text-xs font-bold text-slate-600">Mostrar:</label>
        <select
          [value]="pageSize()"
          (change)="onPageSizeChange($event)"
          class="px-2.5 py-2 rounded-xl border border-slate-200 bg-white text-xs font-bold text-slate-700 focus:outline-hidden focus:border-[#0050A1] cursor-pointer">
          <option value="5" [selected]="pageSize() === 5">5 filas</option>
          <option value="10" [selected]="pageSize() === 10">10 filas</option>
          <option value="20" [selected]="pageSize() === 20">20 filas</option>
          <option value="50" [selected]="pageSize() === 50">50 filas</option>
        </select>
      </div>

      @if (searchQuery() || selectedArea() !== 'TODOS') {
        <button
          type="button"
          (click)="clearFilters()"
          class="px-3 py-2 rounded-xl text-xs font-bold text-[#BE002E] hover:bg-red-50 transition-colors cursor-pointer">
          Limpiar filtros
        </button>
      }
    </div>
  </div>

  <!-- Estado Cargando Tabla -->
  @if (isLoading()) {
    <div class="p-12 flex flex-col items-center justify-center text-center space-y-3">
      <div class="w-10 h-10 border-4 border-blue-100 border-t-[#0050A1] rounded-full animate-spin"></div>
      <div class="text-sm font-bold text-[#0050A1]">Consultando base de datos vectorial...</div>
      <p class="text-xs text-slate-400">Sincronizando registros de PostgreSQL + pgvector</p>
    </div>
  } @else if (filteredDocuments().length === 0) {
    <!-- Estado Vac\xEDo -->
    <div class="p-12 flex flex-col items-center justify-center text-center">
      <div class="w-14 h-14 rounded-2xl bg-[#0050A1]/10 flex items-center justify-center text-2xl mb-3">
        \u{1F4C2}
      </div>
      @if (documentos().length === 0) {
        <h3 class="text-base font-extrabold text-slate-800">A\xFAn no hay documentos indexados</h3>
        <p class="text-xs text-slate-500 max-w-sm mt-1 mb-4">
          Comienza subiendo reglamentos en PDF, Word o Markdown para que el Asistente Virtual pueda responder consultas oficiales.
        </p>
        @if (isAdmin()) {
          <button
            type="button"
            (click)="openUpload.emit()"
            class="px-4 py-2 rounded-xl bg-[#BE002E] text-white text-xs font-bold hover:bg-[#9e0026] transition-colors cursor-pointer">
            \u2795 Subir primer documento
          </button>
        }
      } @else {
        <h3 class="text-base font-extrabold text-slate-800">Sin coincidencias para tu b\xFAsqueda</h3>
        <p class="text-xs text-slate-500 max-w-sm mt-1 mb-4">
          No se encontraron documentos que coincidan con "{{ searchQuery() }}" en el \xE1rea seleccionada.
        </p>
        <button
          type="button"
          (click)="clearFilters()"
          class="px-4 py-2 rounded-xl border border-slate-200 text-[#0050A1] text-xs font-bold hover:bg-slate-50 transition-colors cursor-pointer">
          Restablecer filtros
        </button>
      }
    </div>
  } @else {
    <!-- Tabla de Documentos -->
    <div class="overflow-x-auto">
      <table class="w-full text-left border-collapse">
        <thead>
          <tr class="bg-slate-50/80 border-b border-slate-200 text-[11px] font-extrabold text-[#0050A1] uppercase tracking-wider">
            <th class="py-3.5 px-4">ID Documento</th>
            <th class="py-3.5 px-4">Fuente Oficial / T\xEDtulo</th>
            <th class="py-3.5 px-4">\xC1rea Origen</th>
            <th class="py-3.5 px-4 text-center">Fragmentos (Chunks)</th>
            <th class="py-3.5 px-4">Fecha Indexaci\xF3n</th>
            @if (isAdmin()) {
              <th class="py-3.5 px-4 text-right">Acciones</th>
            }
          </tr>
        </thead>
        <tbody class="divide-y divide-slate-200/70 text-sm">
          @for (doc of paginatedDocuments(); track doc.documento_id) {
            <tr class="doc-row hover:bg-slate-50/90 transition-colors">
              
              <!-- ID Documento -->
              <td class="py-3.5 px-4 font-mono text-xs font-semibold text-slate-700">
                <span class="px-2 py-1 rounded-md bg-slate-100 border border-slate-200">
                  {{ doc.documento_id }}
                </span>
              </td>

              <!-- Fuente -->
              <td class="py-3.5 px-4">
                <div class="flex items-center gap-2.5">
                  <span class="text-base">\u{1F4D8}</span>
                  <div>
                    <div class="font-bold text-slate-900">{{ doc.fuente }}</div>
                    <div class="text-[11px] text-slate-400">Vectorizado con gemini-embedding-001</div>
                  </div>
                </div>
              </td>

              <!-- \xC1rea -->
              <td class="py-3.5 px-4">
                <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-[#BE002E]/10 text-[#BE002E] border border-[#BE002E]/25">
                  {{ doc.area_origen }}
                </span>
              </td>

              <!-- Fragmentos -->
              <td class="py-3.5 px-4 text-center">
                <span class="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-[#0050A1]/10 text-[#0050A1] font-extrabold text-xs border border-[#0050A1]/20">
                  <span>\u{1F9E9}</span>
                  <span>{{ doc.fragmentos }}</span>
                </span>
              </td>

              <!-- Fecha -->
              <td class="py-3.5 px-4 text-xs text-slate-500 font-medium">
                {{ doc.creado_en | date:'dd/MM/yyyy HH:mm' }}
              </td>

              <!-- Acciones (Solo Admin) -->
              @if (isAdmin()) {
                <td class="py-3.5 px-4 text-right">
                  <button
                    type="button"
                    (click)="requestDelete.emit(doc)"
                    [disabled]="deletingId() === doc.documento_id"
                    class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold text-[#BE002E] hover:text-white hover:bg-[#BE002E] border border-[#BE002E]/30 hover:border-[#BE002E] transition-all cursor-pointer disabled:opacity-50">
                    @if (deletingId() === doc.documento_id) {
                      <span class="w-3.5 h-3.5 border-2 border-current border-t-transparent rounded-full animate-spin"></span>
                      <span>Eliminando...</span>
                    } @else {
                      <span>\u{1F5D1}\uFE0F</span>
                      <span>Eliminar</span>
                    }
                  </button>
                </td>
              }

            </tr>
          }
        </tbody>
      </table>
    </div>

    <!-- Pie de Tabla y Paginador -->
    <div class="p-4 border-t border-slate-200 bg-slate-50/50 flex flex-col sm:flex-row items-center justify-between gap-3">
      <div class="text-xs text-slate-500">
        Mostrando <span class="font-bold text-slate-800">{{ startIndex() }}</span> a
        <span class="font-bold text-slate-800">{{ endIndex() }}</span> de
        <span class="font-bold text-slate-800">{{ filteredDocuments().length }}</span> registros
      </div>

      @if (totalPages() > 1) {
        <div class="flex items-center gap-1.5">
          <button
            type="button"
            (click)="goToPage(currentPage() - 1)"
            [disabled]="currentPage() === 1"
            class="px-3 py-1.5 rounded-lg border border-slate-200 bg-white hover:bg-slate-100 text-xs font-bold text-slate-700 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer">
            \u2190 Anterior
          </button>

          <span class="px-2 text-xs font-bold text-slate-600">
            P\xE1gina {{ currentPage() }} de {{ totalPages() }}
          </span>

          <button
            type="button"
            (click)="goToPage(currentPage() + 1)"
            [disabled]="currentPage() === totalPages()"
            class="px-3 py-1.5 rounded-lg border border-slate-200 bg-white hover:bg-slate-100 text-xs font-bold text-slate-700 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer">
            Siguiente \u2192
          </button>
        </div>
      }
    </div>
  }

</div>
`, styles: ["/* src/app/features/backoffice/components/document-table/document-table.component.css */\n.doc-row {\n  transition: background-color 0.15s ease;\n}\n"] }]
  }], null, { documentos: [{ type: Input, args: [{ isSignal: true, alias: "documentos", required: true }] }], isLoading: [{ type: Input, args: [{ isSignal: true, alias: "isLoading", required: false }] }], deletingId: [{ type: Input, args: [{ isSignal: true, alias: "deletingId", required: false }] }], isAdmin: [{ type: Input, args: [{ isSignal: true, alias: "isAdmin", required: false }] }], requestDelete: [{ type: Output, args: ["requestDelete"] }], openUpload: [{ type: Output, args: ["openUpload"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DocumentTableComponent, { className: "DocumentTableComponent", filePath: "src/app/features/backoffice/components/document-table/document-table.component.ts", lineNumber: 12 });
})();

// src/app/features/backoffice/components/document-upload-modal/document-upload-modal.component.ts
function DocumentUploadModalComponent_Conditional_0_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "div", 28);
    \u0275\u0275domListener("dragover", function DocumentUploadModalComponent_Conditional_0_Conditional_14_Template_div_dragover_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onDragOver($event));
    })("dragleave", function DocumentUploadModalComponent_Conditional_0_Conditional_14_Template_div_dragleave_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onDragLeave($event));
    })("drop", function DocumentUploadModalComponent_Conditional_0_Conditional_14_Template_div_drop_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onDrop($event));
    });
    \u0275\u0275domElementStart(1, "input", 29);
    \u0275\u0275domListener("change", function DocumentUploadModalComponent_Conditional_0_Conditional_14_Template_input_change_1_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onFileSelected($event));
    });
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(2, "div", 30);
    \u0275\u0275text(3, " \u{1F4C4} ");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(4, "div", 31);
    \u0275\u0275text(5, " Arrastra tu archivo aqu\xED o ");
    \u0275\u0275domElementStart(6, "span", 32);
    \u0275\u0275text(7, "haz clic para explorar");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(8, "p", 33);
    \u0275\u0275text(9, " Soporta \xFAnicamente archivos PDF (.pdf), Word (.docx) y PowerPoint (.pptx) ");
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(ctx_r1.isDragging() ? "border-2 border-dashed border-[#0050A1] bg-[#0050A1]/5 rounded-2xl p-6 text-center transition-all cursor-pointer relative" : "border-2 border-dashed border-slate-300 hover:border-[#0050A1] rounded-2xl p-6 text-center transition-all cursor-pointer relative");
  }
}
function DocumentUploadModalComponent_Conditional_0_Conditional_15_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "button", 40);
    \u0275\u0275domListener("click", function DocumentUploadModalComponent_Conditional_0_Conditional_15_Conditional_9_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.removeFile());
    });
    \u0275\u0275text(1, " Cambiar ");
    \u0275\u0275domElementEnd();
  }
}
function DocumentUploadModalComponent_Conditional_0_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 10)(1, "div", 34)(2, "div", 35);
    \u0275\u0275text(3, " \u{1F4CE} ");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(4, "div", 36)(5, "div", 37);
    \u0275\u0275text(6);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(7, "div", 38);
    \u0275\u0275text(8);
    \u0275\u0275domElementEnd()()();
    \u0275\u0275conditionalCreate(9, DocumentUploadModalComponent_Conditional_0_Conditional_15_Conditional_9_Template, 2, 0, "button", 39);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.selectedFile().name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r1.formatFileSize(ctx_r1.selectedFile().size), " \u2022 Listo para indexar");
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r1.isUploading() ? 9 : -1);
  }
}
function DocumentUploadModalComponent_Conditional_0_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 11)(1, "span");
    \u0275\u0275text(2, "\u26A0\uFE0F");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.validationError());
  }
}
function DocumentUploadModalComponent_Conditional_0_Conditional_44_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Paso 1/3: Extrayendo texto y aplicando OCR si es escaneado... ");
  }
}
function DocumentUploadModalComponent_Conditional_0_Conditional_44_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Paso 2/3: Segmentando secciones y encabezados... ");
  }
}
function DocumentUploadModalComponent_Conditional_0_Conditional_44_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Paso 3/3: Calculando vectores (768 dim) con gemini-embedding-001... ");
  }
}
function DocumentUploadModalComponent_Conditional_0_Conditional_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 24)(1, "div", 41);
    \u0275\u0275domElement(2, "div", 42);
    \u0275\u0275domElementStart(3, "div", 43);
    \u0275\u0275conditionalCreate(4, DocumentUploadModalComponent_Conditional_0_Conditional_44_Conditional_4_Template, 1, 0)(5, DocumentUploadModalComponent_Conditional_0_Conditional_44_Conditional_5_Template, 1, 0)(6, DocumentUploadModalComponent_Conditional_0_Conditional_44_Conditional_6_Template, 1, 0);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(7, "div", 44);
    \u0275\u0275domElement(8, "div", 45);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(9, "p", 6);
    \u0275\u0275text(10, " Por favor espera unos segundos mientras se guarda transaccionalmente en PostgreSQL. ");
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r1.uploadStep() === 1 ? 4 : ctx_r1.uploadStep() === 2 ? 5 : 6);
    \u0275\u0275advance(4);
    \u0275\u0275styleProp("width", ctx_r1.uploadStep() === 1 ? "35%" : ctx_r1.uploadStep() === 2 ? "70%" : "95%");
  }
}
function DocumentUploadModalComponent_Conditional_0_Conditional_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElement(0, "span", 46);
    \u0275\u0275domElementStart(1, "span");
    \u0275\u0275text(2, "Procesando Ingesta...");
    \u0275\u0275domElementEnd();
  }
}
function DocumentUploadModalComponent_Conditional_0_Conditional_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span");
    \u0275\u0275text(1, "\u{1F680}");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(2, "span");
    \u0275\u0275text(3, "Iniciar Ingesta Vectorial");
    \u0275\u0275domElementEnd();
  }
}
function DocumentUploadModalComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "span", 4);
    \u0275\u0275text(5, "\u{1F4E4}");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(6, "div")(7, "h3", 5);
    \u0275\u0275text(8, "Ingestar Nuevo Documento");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(9, "p", 6);
    \u0275\u0275text(10, "Se procesar\xE1 con OCR, Sentence Window y Gemini Embeddings");
    \u0275\u0275domElementEnd()()();
    \u0275\u0275domElementStart(11, "button", 7);
    \u0275\u0275domListener("click", function DocumentUploadModalComponent_Conditional_0_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onClose());
    });
    \u0275\u0275text(12, " \u2715 ");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(13, "form", 8);
    \u0275\u0275domListener("submit", function DocumentUploadModalComponent_Conditional_0_Template_form_submit_13_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSubmit($event));
    });
    \u0275\u0275conditionalCreate(14, DocumentUploadModalComponent_Conditional_0_Conditional_14_Template, 10, 2, "div", 9)(15, DocumentUploadModalComponent_Conditional_0_Conditional_15_Template, 10, 3, "div", 10);
    \u0275\u0275conditionalCreate(16, DocumentUploadModalComponent_Conditional_0_Conditional_16_Template, 5, 1, "div", 11);
    \u0275\u0275domElementStart(17, "div", 12)(18, "div")(19, "label", 13);
    \u0275\u0275text(20, "ID \xDAnico del Documento *");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(21, "input", 14);
    \u0275\u0275domListener("input", function DocumentUploadModalComponent_Conditional_0_Template_input_input_21_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onDocumentoIdInput($event));
    });
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(22, "span", 15);
    \u0275\u0275text(23, "Si el ID ya existe, actualizar\xE1 sus fragmentos.");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(24, "div")(25, "label", 13);
    \u0275\u0275text(26, "\xC1rea Institucional *");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(27, "select", 16);
    \u0275\u0275domListener("change", function DocumentUploadModalComponent_Conditional_0_Template_select_change_27_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onAreaChange($event));
    });
    \u0275\u0275domElementStart(28, "option", 17);
    \u0275\u0275text(29, "GENERAL");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(30, "option", 18);
    \u0275\u0275text(31, "ADMISIONES");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(32, "option", 19);
    \u0275\u0275text(33, "SECRETAR\xCDA ACAD\xC9MICA");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(34, "option", 20);
    \u0275\u0275text(35, "TESORER\xCDA / PENSIONES");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(36, "option", 21);
    \u0275\u0275text(37, "DIRECCI\xD3N");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(38, "option", 22);
    \u0275\u0275text(39, "DPTO. PSICOL\xD3GICO");
    \u0275\u0275domElementEnd()()()();
    \u0275\u0275domElementStart(40, "div")(41, "label", 13);
    \u0275\u0275text(42, "Nombre de la Fuente / T\xEDtulo Oficial *");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(43, "input", 23);
    \u0275\u0275domListener("input", function DocumentUploadModalComponent_Conditional_0_Template_input_input_43_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onFuenteInput($event));
    });
    \u0275\u0275domElementEnd()();
    \u0275\u0275conditionalCreate(44, DocumentUploadModalComponent_Conditional_0_Conditional_44_Template, 11, 3, "div", 24);
    \u0275\u0275domElementStart(45, "div", 25)(46, "button", 26);
    \u0275\u0275domListener("click", function DocumentUploadModalComponent_Conditional_0_Template_button_click_46_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onClose());
    });
    \u0275\u0275text(47, " Cancelar ");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(48, "button", 27);
    \u0275\u0275conditionalCreate(49, DocumentUploadModalComponent_Conditional_0_Conditional_49_Template, 3, 0)(50, DocumentUploadModalComponent_Conditional_0_Conditional_50_Template, 4, 0);
    \u0275\u0275domElementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(11);
    \u0275\u0275domProperty("disabled", ctx_r1.isUploading());
    \u0275\u0275advance(3);
    \u0275\u0275conditional(!ctx_r1.selectedFile() ? 14 : 15);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.validationError() ? 16 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275domProperty("value", ctx_r1.documentoId())("disabled", ctx_r1.isUploading());
    \u0275\u0275advance(6);
    \u0275\u0275domProperty("value", ctx_r1.areaOrigen())("disabled", ctx_r1.isUploading());
    \u0275\u0275advance(16);
    \u0275\u0275domProperty("value", ctx_r1.fuente())("disabled", ctx_r1.isUploading());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isUploading() ? 44 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275domProperty("disabled", ctx_r1.isUploading());
    \u0275\u0275advance(2);
    \u0275\u0275domProperty("disabled", !ctx_r1.canSubmit());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isUploading() ? 49 : 50);
  }
}
var DocumentUploadModalComponent = class _DocumentUploadModalComponent {
  isOpen = input(false, ...ngDevMode ? [{ debugName: "isOpen" }] : (
    /* istanbul ignore next */
    []
  ));
  isUploading = input(false, ...ngDevMode ? [{ debugName: "isUploading" }] : (
    /* istanbul ignore next */
    []
  ));
  defaultArea = input("GENERAL", ...ngDevMode ? [{ debugName: "defaultArea" }] : (
    /* istanbul ignore next */
    []
  ));
  close = output();
  upload = output();
  selectedFile = signal(null, ...ngDevMode ? [{ debugName: "selectedFile" }] : (
    /* istanbul ignore next */
    []
  ));
  documentoId = signal("", ...ngDevMode ? [{ debugName: "documentoId" }] : (
    /* istanbul ignore next */
    []
  ));
  fuente = signal("", ...ngDevMode ? [{ debugName: "fuente" }] : (
    /* istanbul ignore next */
    []
  ));
  areaOrigen = signal("GENERAL", ...ngDevMode ? [{ debugName: "areaOrigen" }] : (
    /* istanbul ignore next */
    []
  ));
  clasificacionSensibilidad = signal("publico", ...ngDevMode ? [{ debugName: "clasificacionSensibilidad" }] : (
    /* istanbul ignore next */
    []
  ));
  isDragging = signal(false, ...ngDevMode ? [{ debugName: "isDragging" }] : (
    /* istanbul ignore next */
    []
  ));
  validationError = signal(null, ...ngDevMode ? [{ debugName: "validationError" }] : (
    /* istanbul ignore next */
    []
  ));
  uploadStep = signal(1, ...ngDevMode ? [{ debugName: "uploadStep" }] : (
    /* istanbul ignore next */
    []
  ));
  stepInterval = null;
  constructor() {
    effect(() => {
      if (this.isOpen()) {
        this.areaOrigen.set(this.defaultArea() || "GENERAL");
      }
    });
    effect(() => {
      if (this.isUploading()) {
        this.startProgressSimulation();
      } else {
        this.stopProgressSimulation();
      }
    });
  }
  onDragOver(event) {
    event.preventDefault();
    event.stopPropagation();
    if (!this.isUploading()) {
      this.isDragging.set(true);
    }
  }
  onDragLeave(event) {
    event.preventDefault();
    event.stopPropagation();
    this.isDragging.set(false);
  }
  onDrop(event) {
    event.preventDefault();
    event.stopPropagation();
    this.isDragging.set(false);
    if (this.isUploading())
      return;
    const files = event.dataTransfer?.files;
    if (files && files.length > 0) {
      this.handleFileSelection(files[0]);
    }
  }
  onFileSelected(event) {
    const input2 = event.target;
    if (input2.files && input2.files.length > 0) {
      this.handleFileSelection(input2.files[0]);
    }
  }
  handleFileSelection(file) {
    this.validationError.set(null);
    const allowedExtensions = [".pdf", ".docx", ".pptx"];
    const lowerName = file.name.toLowerCase();
    const isValidExt = allowedExtensions.some((ext) => lowerName.endsWith(ext));
    if (!isValidExt) {
      this.validationError.set("Formato no permitido. Solo se permiten archivos PDF (.pdf), Word (.docx) o PowerPoint (.pptx).");
      return;
    }
    const maxBytes = 10 * 1024 * 1024;
    if (file.size > maxBytes) {
      this.validationError.set("El archivo supera el l\xEDmite m\xE1ximo permitido de 10 MB.");
      return;
    }
    this.selectedFile.set(file);
    const baseName = file.name.replace(/\.[^/.]+$/, "");
    if (!this.fuente().trim()) {
      this.fuente.set(baseName.replace(/[-_]/g, " "));
    }
    if (!this.documentoId().trim()) {
      const slug = baseName.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, "_").replace(/^_|_$/g, "").slice(0, 24);
      const dateSuffix = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10).replace(/-/g, "");
      this.documentoId.set(`doc_${slug}_${dateSuffix}`);
    }
  }
  removeFile() {
    if (this.isUploading())
      return;
    this.selectedFile.set(null);
    this.validationError.set(null);
  }
  onDocumentoIdInput(event) {
    this.documentoId.set(event.target.value);
  }
  onFuenteInput(event) {
    this.fuente.set(event.target.value);
  }
  onAreaChange(event) {
    this.areaOrigen.set(event.target.value);
  }
  onSensibilidadChange(event) {
    this.clasificacionSensibilidad.set(event.target.value);
  }
  formatFileSize(bytes) {
    if (bytes < 1024)
      return `${bytes} B`;
    if (bytes < 1024 * 1024)
      return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
  }
  canSubmit() {
    return !!this.selectedFile() && this.documentoId().trim().length > 0 && this.fuente().trim().length > 0 && !this.isUploading();
  }
  onSubmit(event) {
    event.preventDefault();
    const file = this.selectedFile();
    if (!file || !this.canSubmit())
      return;
    this.upload.emit({
      archivo: file,
      documentoId: this.documentoId().trim(),
      fuente: this.fuente().trim(),
      areaOrigen: this.areaOrigen(),
      clasificacionSensibilidad: this.clasificacionSensibilidad()
    });
  }
  onClose() {
    if (this.isUploading())
      return;
    this.resetForm();
    this.close.emit();
  }
  resetForm() {
    this.selectedFile.set(null);
    this.documentoId.set("");
    this.fuente.set("");
    this.validationError.set(null);
    this.uploadStep.set(1);
  }
  startProgressSimulation() {
    this.uploadStep.set(1);
    this.stopProgressSimulation();
    this.stepInterval = setInterval(() => {
      this.uploadStep.update((step) => step < 3 ? step + 1 : 3);
    }, 1800);
  }
  stopProgressSimulation() {
    if (this.stepInterval) {
      clearInterval(this.stepInterval);
      this.stepInterval = null;
    }
  }
  static \u0275fac = function DocumentUploadModalComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DocumentUploadModalComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DocumentUploadModalComponent, selectors: [["app-document-upload-modal"]], inputs: { isOpen: [1, "isOpen"], isUploading: [1, "isUploading"], defaultArea: [1, "defaultArea"] }, outputs: { close: "close", upload: "upload" }, decls: 1, vars: 1, consts: [[1, "fixed", "inset-0", "z-50", "flex", "items-center", "justify-center", "p-4", "bg-slate-900/60", "backdrop-blur-xs", "animate-in", "fade-in", "duration-150"], [1, "modal-card", "bg-white", "w-full", "max-w-lg", "rounded-3xl", "shadow-2xl", "border", "border-slate-200", "overflow-hidden"], [1, "px-6", "py-4", "bg-[#0050A1]", "border-b-4", "border-[#BE002E]", "text-white", "flex", "items-center", "justify-between"], [1, "flex", "items-center", "gap-2.5"], [1, "text-xl"], [1, "text-base", "font-extrabold", "leading-tight"], [1, "text-[11px]", "text-blue-100"], ["type", "button", 1, "w-8", "h-8", "rounded-full", "bg-white/15", "hover:bg-white/25", "flex", "items-center", "justify-center", "text-white", "transition-colors", "cursor-pointer", "disabled:opacity-40", 3, "click", "disabled"], [1, "p-6", "space-y-4", 3, "submit"], [3, "class"], [1, "p-3.5", "rounded-2xl", "bg-slate-50", "border", "border-slate-200", "flex", "items-center", "justify-between", "gap-3"], [1, "p-3", "rounded-xl", "bg-red-50", "border", "border-red-200", "text-xs", "font-semibold", "text-[#BE002E]", "flex", "items-center", "gap-2"], [1, "grid", "grid-cols-1", "sm:grid-cols-2", "gap-3.5"], [1, "block", "text-xs", "font-bold", "text-slate-700", "mb-1"], ["type", "text", "placeholder", "Ej: doc_reglamento_2026", "required", "", 1, "w-full", "px-3.5", "py-2", "rounded-xl", "border", "border-slate-200", "text-sm", "text-slate-800", "font-mono", "focus:outline-hidden", "focus:border-[#0050A1]", "focus:ring-2", "focus:ring-[#0050A1]/15", "disabled:bg-slate-100", 3, "input", "value", "disabled"], [1, "text-[10px]", "text-slate-400"], [1, "w-full", "px-3.5", "py-2", "rounded-xl", "border", "border-slate-200", "text-sm", "text-slate-800", "bg-white", "focus:outline-hidden", "focus:border-[#0050A1]", "disabled:bg-slate-100", 3, "change", "value", "disabled"], ["value", "GENERAL"], ["value", "ADMISIONES"], ["value", "SECRETARIA"], ["value", "TESORERIA"], ["value", "DIRECCION"], ["value", "PSICOLOGIA"], ["type", "text", "placeholder", "Ej: Gu\xEDa Oficial de Matr\xEDcula y Pensiones 2027", "required", "", 1, "w-full", "px-3.5", "py-2", "rounded-xl", "border", "border-slate-200", "text-sm", "text-slate-800", "focus:outline-hidden", "focus:border-[#0050A1]", "focus:ring-2", "focus:ring-[#0050A1]/15", "disabled:bg-slate-100", 3, "input", "value", "disabled"], [1, "p-4", "rounded-2xl", "bg-[#0050A1]", "text-white", "space-y-3"], [1, "pt-2", "flex", "items-center", "justify-end", "gap-2.5", "border-t", "border-slate-100"], ["type", "button", 1, "px-4", "py-2.5", "rounded-xl", "border", "border-slate-200", "text-xs", "font-bold", "text-slate-600", "hover:bg-slate-50", "transition-colors", "cursor-pointer", "disabled:opacity-40", 3, "click", "disabled"], ["type", "submit", 1, "px-5", "py-2.5", "rounded-xl", "bg-[#BE002E]", "hover:bg-[#9e0026]", "text-white", "text-xs", "font-bold", "shadow-md", "shadow-[#BE002E]/20", "transition-all", "flex", "items-center", "gap-2", "cursor-pointer", "disabled:opacity-40", "disabled:cursor-not-allowed", 3, "disabled"], [3, "dragover", "dragleave", "drop"], ["type", "file", "accept", ".pdf,.docx,.pptx", 1, "absolute", "inset-0", "w-full", "h-full", "opacity-0", "cursor-pointer", 3, "change"], [1, "w-12", "h-12", "rounded-2xl", "bg-[#0050A1]/10", "text-[#0050A1]", "flex", "items-center", "justify-center", "text-2xl", "mx-auto", "mb-2.5"], [1, "text-sm", "font-bold", "text-slate-800"], [1, "text-[#BE002E]", "underline", "font-extrabold"], [1, "text-xs", "text-slate-400", "mt-1"], [1, "flex", "items-center", "gap-3", "min-w-0"], [1, "w-10", "h-10", "rounded-xl", "bg-[#0050A1]/10", "text-[#0050A1]", "flex", "items-center", "justify-center", "text-lg", "shrink-0"], [1, "min-w-0"], [1, "text-sm", "font-bold", "text-slate-800", "truncate"], [1, "text-xs", "text-slate-500"], ["type", "button", 1, "px-2.5", "py-1", "rounded-lg", "text-xs", "font-bold", "text-[#BE002E]", "hover:bg-red-50", "transition-colors", "cursor-pointer", "shrink-0"], ["type", "button", 1, "px-2.5", "py-1", "rounded-lg", "text-xs", "font-bold", "text-[#BE002E]", "hover:bg-red-50", "transition-colors", "cursor-pointer", "shrink-0", 3, "click"], [1, "flex", "items-center", "gap-3"], [1, "w-6", "h-6", "border-3", "border-white/30", "border-t-white", "rounded-full", "animate-spin", "shrink-0"], [1, "text-xs", "font-bold", "tracking-wide"], [1, "w-full", "h-1.5", "bg-white/20", "rounded-full", "overflow-hidden"], [1, "h-full", "bg-[#BE002E]", "transition-all", "duration-500"], [1, "w-4", "h-4", "border-2", "border-white", "border-t-transparent", "rounded-full", "animate-spin"]], template: function DocumentUploadModalComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, DocumentUploadModalComponent_Conditional_0_Template, 51, 13, "div", 0);
    }
    if (rf & 2) {
      \u0275\u0275conditional(ctx.isOpen() ? 0 : -1);
    }
  }, styles: ["\n.modal-card[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_modalAppear 0.2s cubic-bezier(0.16, 1, 0.3, 1);\n}\n@keyframes _ngcontent-%COMP%_modalAppear {\n  from {\n    opacity: 0;\n    transform: scale(0.96) translateY(8px);\n  }\n  to {\n    opacity: 1;\n    transform: scale(1) translateY(0);\n  }\n}"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DocumentUploadModalComponent, [{
    type: Component,
    args: [{ selector: "app-document-upload-modal", changeDetection: ChangeDetectionStrategy.OnPush, template: `@if (isOpen()) {
<div
  class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-150">

  <div class="modal-card bg-white w-full max-w-lg rounded-3xl shadow-2xl border border-slate-200 overflow-hidden">

    <!-- Cabecera del Modal (#0050A1 + #BE002E) -->
    <div class="px-6 py-4 bg-[#0050A1] border-b-4 border-[#BE002E] text-white flex items-center justify-between">
      <div class="flex items-center gap-2.5">
        <span class="text-xl">\u{1F4E4}</span>
        <div>
          <h3 class="text-base font-extrabold leading-tight">Ingestar Nuevo Documento</h3>
          <p class="text-[11px] text-blue-100">Se procesar\xE1 con OCR, Sentence Window y Gemini Embeddings</p>
        </div>
      </div>
      <button type="button" (click)="onClose()" [disabled]="isUploading()"
        class="w-8 h-8 rounded-full bg-white/15 hover:bg-white/25 flex items-center justify-center text-white transition-colors cursor-pointer disabled:opacity-40">
        \u2715
      </button>
    </div>

    <!-- Cuerpo del Modal -->
    <form (submit)="onSubmit($event)" class="p-6 space-y-4">

      <!-- Zona Drag & Drop -->
      @if (!selectedFile()) {
      <div (dragover)="onDragOver($event)" (dragleave)="onDragLeave($event)" (drop)="onDrop($event)"
        [class]="isDragging()
              ? 'border-2 border-dashed border-[#0050A1] bg-[#0050A1]/5 rounded-2xl p-6 text-center transition-all cursor-pointer relative'
              : 'border-2 border-dashed border-slate-300 hover:border-[#0050A1] rounded-2xl p-6 text-center transition-all cursor-pointer relative'">

        <input type="file" accept=".pdf,.docx,.pptx" (change)="onFileSelected($event)"
          class="absolute inset-0 w-full h-full opacity-0 cursor-pointer" />

        <div
          class="w-12 h-12 rounded-2xl bg-[#0050A1]/10 text-[#0050A1] flex items-center justify-center text-2xl mx-auto mb-2.5">
          \u{1F4C4}
        </div>
        <div class="text-sm font-bold text-slate-800">
          Arrastra tu archivo aqu\xED o <span class="text-[#BE002E] underline font-extrabold">haz clic para explorar</span>
        </div>
        <p class="text-xs text-slate-400 mt-1">
          Soporta \xFAnicamente archivos PDF (.pdf), Word (.docx) y PowerPoint (.pptx)
        </p>
      </div>
      } @else {
      <!-- Archivo Seleccionado -->
      <div class="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-between gap-3">
        <div class="flex items-center gap-3 min-w-0">
          <div
            class="w-10 h-10 rounded-xl bg-[#0050A1]/10 text-[#0050A1] flex items-center justify-center text-lg shrink-0">
            \u{1F4CE}
          </div>
          <div class="min-w-0">
            <div class="text-sm font-bold text-slate-800 truncate">{{ selectedFile()!.name }}</div>
            <div class="text-xs text-slate-500">{{ formatFileSize(selectedFile()!.size) }} \u2022 Listo para indexar</div>
          </div>
        </div>
        @if (!isUploading()) {
        <button type="button" (click)="removeFile()"
          class="px-2.5 py-1 rounded-lg text-xs font-bold text-[#BE002E] hover:bg-red-50 transition-colors cursor-pointer shrink-0">
          Cambiar
        </button>
        }
      </div>
      }

      @if (validationError()) {
      <div
        class="p-3 rounded-xl bg-red-50 border border-red-200 text-xs font-semibold text-[#BE002E] flex items-center gap-2">
        <span>\u26A0\uFE0F</span>
        <span>{{ validationError() }}</span>
      </div>
      }

      <!-- Metadatos del Documento -->
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
        <div>
          <label class="block text-xs font-bold text-slate-700 mb-1">ID \xDAnico del Documento *</label>
          <input type="text" [value]="documentoId()" (input)="onDocumentoIdInput($event)" [disabled]="isUploading()"
            placeholder="Ej: doc_reglamento_2026" required
            class="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-sm text-slate-800 font-mono focus:outline-hidden focus:border-[#0050A1] focus:ring-2 focus:ring-[#0050A1]/15 disabled:bg-slate-100" />
          <span class="text-[10px] text-slate-400">Si el ID ya existe, actualizar\xE1 sus fragmentos.</span>
        </div>

        <div>
          <label class="block text-xs font-bold text-slate-700 mb-1">\xC1rea Institucional *</label>
          <select [value]="areaOrigen()" (change)="onAreaChange($event)" [disabled]="isUploading()"
            class="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-sm text-slate-800 bg-white focus:outline-hidden focus:border-[#0050A1] disabled:bg-slate-100">
            <option value="GENERAL">GENERAL</option>
            <option value="ADMISIONES">ADMISIONES</option>
            <option value="SECRETARIA">SECRETAR\xCDA ACAD\xC9MICA</option>
            <option value="TESORERIA">TESORER\xCDA / PENSIONES</option>
            <option value="DIRECCION">DIRECCI\xD3N</option>
            <option value="PSICOLOGIA">DPTO. PSICOL\xD3GICO</option>
          </select>
        </div>
      </div>

      <div>
        <label class="block text-xs font-bold text-slate-700 mb-1">Nombre de la Fuente / T\xEDtulo Oficial *</label>
        <input type="text" [value]="fuente()" (input)="onFuenteInput($event)" [disabled]="isUploading()"
          placeholder="Ej: Gu\xEDa Oficial de Matr\xEDcula y Pensiones 2027" required
          class="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-sm text-slate-800 focus:outline-hidden focus:border-[#0050A1] focus:ring-2 focus:ring-[#0050A1]/15 disabled:bg-slate-100" />
      </div>

      <!-- Stepper de Progreso Inteligente mientras se procesa en Backend -->
      @if (isUploading()) {
      <div class="p-4 rounded-2xl bg-[#0050A1] text-white space-y-3">
        <div class="flex items-center gap-3">
          <div class="w-6 h-6 border-3 border-white/30 border-t-white rounded-full animate-spin shrink-0"></div>
          <div class="text-xs font-bold tracking-wide">
            @if (uploadStep() === 1) {
            Paso 1/3: Extrayendo texto y aplicando OCR si es escaneado...
            } @else if (uploadStep() === 2) {
            Paso 2/3: Segmentando secciones y encabezados...
            } @else {
            Paso 3/3: Calculando vectores (768 dim) con gemini-embedding-001...
            }
          </div>
        </div>

        <!-- Barra de progreso visual -->
        <div class="w-full h-1.5 bg-white/20 rounded-full overflow-hidden">
          <div class="h-full bg-[#BE002E] transition-all duration-500"
            [style.width]="uploadStep() === 1 ? '35%' : uploadStep() === 2 ? '70%' : '95%'">
          </div>
        </div>
        <p class="text-[11px] text-blue-100">
          Por favor espera unos segundos mientras se guarda transaccionalmente en PostgreSQL.
        </p>
      </div>
      }

      <!-- Botones de Acci\xF3n -->
      <div class="pt-2 flex items-center justify-end gap-2.5 border-t border-slate-100">
        <button type="button" (click)="onClose()" [disabled]="isUploading()"
          class="px-4 py-2.5 rounded-xl border border-slate-200 text-xs font-bold text-slate-600 hover:bg-slate-50 transition-colors cursor-pointer disabled:opacity-40">
          Cancelar
        </button>

        <button type="submit" [disabled]="!canSubmit()"
          class="px-5 py-2.5 rounded-xl bg-[#BE002E] hover:bg-[#9e0026] text-white text-xs font-bold shadow-md shadow-[#BE002E]/20 transition-all flex items-center gap-2 cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed">
          @if (isUploading()) {
          <span class="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
          <span>Procesando Ingesta...</span>
          } @else {
          <span>\u{1F680}</span>
          <span>Iniciar Ingesta Vectorial</span>
          }
        </button>
      </div>

    </form>

  </div>

</div>
}`, styles: ["/* src/app/features/backoffice/components/document-upload-modal/document-upload-modal.component.css */\n.modal-card {\n  animation: modalAppear 0.2s cubic-bezier(0.16, 1, 0.3, 1);\n}\n@keyframes modalAppear {\n  from {\n    opacity: 0;\n    transform: scale(0.96) translateY(8px);\n  }\n  to {\n    opacity: 1;\n    transform: scale(1) translateY(0);\n  }\n}\n"] }]
  }], () => [], { isOpen: [{ type: Input, args: [{ isSignal: true, alias: "isOpen", required: false }] }], isUploading: [{ type: Input, args: [{ isSignal: true, alias: "isUploading", required: false }] }], defaultArea: [{ type: Input, args: [{ isSignal: true, alias: "defaultArea", required: false }] }], close: [{ type: Output, args: ["close"] }], upload: [{ type: Output, args: ["upload"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DocumentUploadModalComponent, { className: "DocumentUploadModalComponent", filePath: "src/app/features/backoffice/components/document-upload-modal/document-upload-modal.component.ts", lineNumber: 9 });
})();

// src/app/features/backoffice/components/confirm-delete-modal/confirm-delete-modal.component.ts
function ConfirmDeleteModalComponent_Conditional_0_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElement(0, "span", 14);
    \u0275\u0275domElementStart(1, "span");
    \u0275\u0275text(2, "Eliminando...");
    \u0275\u0275domElementEnd();
  }
}
function ConfirmDeleteModalComponent_Conditional_0_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span");
    \u0275\u0275text(1, "\u{1F5D1}\uFE0F");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(2, "span");
    \u0275\u0275text(3, "S\xED, eliminar definitivamente");
    \u0275\u0275domElementEnd();
  }
}
function ConfirmDeleteModalComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
    \u0275\u0275text(4, " \u26A0\uFE0F ");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(5, "div")(6, "h3", 4);
    \u0275\u0275text(7, "\xBFEliminar documento indexado?");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(8, "p", 5);
    \u0275\u0275text(9, " Est\xE1s a punto de eliminar ");
    \u0275\u0275domElementStart(10, "strong", 6);
    \u0275\u0275text(11);
    \u0275\u0275domElementEnd();
    \u0275\u0275text(12, " (");
    \u0275\u0275domElementStart(13, "code", 7);
    \u0275\u0275text(14);
    \u0275\u0275domElementEnd();
    \u0275\u0275text(15, "). ");
    \u0275\u0275domElementEnd()()();
    \u0275\u0275domElementStart(16, "div", 8)(17, "div", 9);
    \u0275\u0275text(18, "Impacto en la base de conocimiento:");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(19, "p", 10);
    \u0275\u0275text(20, " Se eliminar\xE1n permanentemente sus ");
    \u0275\u0275domElementStart(21, "strong");
    \u0275\u0275text(22);
    \u0275\u0275domElementEnd();
    \u0275\u0275text(23, " de PostgreSQL y el Asistente Virtual dejar\xE1 de citar esta fuente. ");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(24, "div", 11)(25, "button", 12);
    \u0275\u0275domListener("click", function ConfirmDeleteModalComponent_Conditional_0_Template_button_click_25_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cancel.emit());
    });
    \u0275\u0275text(26, " Cancelar ");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(27, "button", 13);
    \u0275\u0275domListener("click", function ConfirmDeleteModalComponent_Conditional_0_Template_button_click_27_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onConfirm());
    });
    \u0275\u0275conditionalCreate(28, ConfirmDeleteModalComponent_Conditional_0_Conditional_28_Template, 3, 0)(29, ConfirmDeleteModalComponent_Conditional_0_Conditional_29_Template, 4, 0);
    \u0275\u0275domElementEnd()()()();
  }
  if (rf & 2) {
    const doc_r3 = ctx;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate1('"', doc_r3.fuente, '"');
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(doc_r3.documento_id);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1("", doc_r3.fragmentos, " fragmentos vectoriales");
    \u0275\u0275advance(3);
    \u0275\u0275domProperty("disabled", ctx_r1.isDeleting());
    \u0275\u0275advance(2);
    \u0275\u0275domProperty("disabled", ctx_r1.isDeleting());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isDeleting() ? 28 : 29);
  }
}
var ConfirmDeleteModalComponent = class _ConfirmDeleteModalComponent {
  documento = input(null, ...ngDevMode ? [{ debugName: "documento" }] : (
    /* istanbul ignore next */
    []
  ));
  isDeleting = input(false, ...ngDevMode ? [{ debugName: "isDeleting" }] : (
    /* istanbul ignore next */
    []
  ));
  cancel = output();
  confirm = output();
  onConfirm() {
    const doc = this.documento();
    if (doc && !this.isDeleting()) {
      this.confirm.emit(doc.documento_id);
    }
  }
  static \u0275fac = function ConfirmDeleteModalComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ConfirmDeleteModalComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ConfirmDeleteModalComponent, selectors: [["app-confirm-delete-modal"]], inputs: { documento: [1, "documento"], isDeleting: [1, "isDeleting"] }, outputs: { cancel: "cancel", confirm: "confirm" }, decls: 1, vars: 1, consts: [[1, "fixed", "inset-0", "z-50", "flex", "items-center", "justify-center", "p-4", "bg-slate-900/60", "backdrop-blur-xs"], [1, "delete-modal", "bg-white", "w-full", "max-w-md", "rounded-3xl", "shadow-2xl", "border", "border-slate-200", "border-t-4", "border-t-[#BE002E]", "p-6", "space-y-4"], [1, "flex", "items-start", "gap-3.5"], [1, "w-12", "h-12", "rounded-2xl", "bg-[#BE002E]/10", "text-[#BE002E]", "flex", "items-center", "justify-center", "text-2xl", "shrink-0"], [1, "text-base", "font-extrabold", "text-slate-900"], [1, "text-xs", "text-slate-500", "mt-1", "leading-relaxed"], [1, "text-slate-800"], [1, "text-[#BE002E]", "font-bold"], [1, "p-3", "rounded-xl", "bg-red-50/70", "border", "border-red-200/80", "text-xs", "text-[#BE002E]", "space-y-1"], [1, "font-bold"], [1, "text-[11px]", "text-slate-700"], [1, "flex", "items-center", "justify-end", "gap-2.5", "pt-2"], ["type", "button", 1, "px-4", "py-2", "rounded-xl", "border", "border-slate-200", "text-xs", "font-bold", "text-slate-700", "hover:bg-slate-50", "transition-colors", "cursor-pointer", "disabled:opacity-40", 3, "click", "disabled"], ["type", "button", 1, "px-4", "py-2", "rounded-xl", "bg-[#BE002E]", "hover:bg-[#9e0026]", "text-white", "text-xs", "font-bold", "shadow-sm", "transition-all", "flex", "items-center", "gap-1.5", "cursor-pointer", "disabled:opacity-50", 3, "click", "disabled"], [1, "w-3.5", "h-3.5", "border-2", "border-white", "border-t-transparent", "rounded-full", "animate-spin"]], template: function ConfirmDeleteModalComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, ConfirmDeleteModalComponent_Conditional_0_Template, 30, 6, "div", 0);
    }
    if (rf & 2) {
      let tmp_0_0;
      \u0275\u0275conditional((tmp_0_0 = ctx.documento()) ? 0 : -1, tmp_0_0);
    }
  }, styles: ["\n.delete-modal[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_popIn 0.18s ease-out;\n}\n@keyframes _ngcontent-%COMP%_popIn {\n  from {\n    opacity: 0;\n    transform: scale(0.95);\n  }\n  to {\n    opacity: 1;\n    transform: scale(1);\n  }\n}"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfirmDeleteModalComponent, [{
    type: Component,
    args: [{ selector: "app-confirm-delete-modal", changeDetection: ChangeDetectionStrategy.OnPush, template: '@if (documento(); as doc) {\n  <div class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs">\n    <div class="delete-modal bg-white w-full max-w-md rounded-3xl shadow-2xl border border-slate-200 border-t-4 border-t-[#BE002E] p-6 space-y-4">\n      \n      <div class="flex items-start gap-3.5">\n        <div class="w-12 h-12 rounded-2xl bg-[#BE002E]/10 text-[#BE002E] flex items-center justify-center text-2xl shrink-0">\n          \u26A0\uFE0F\n        </div>\n        <div>\n          <h3 class="text-base font-extrabold text-slate-900">\xBFEliminar documento indexado?</h3>\n          <p class="text-xs text-slate-500 mt-1 leading-relaxed">\n            Est\xE1s a punto de eliminar <strong class="text-slate-800">"{{ doc.fuente }}"</strong> (<code class="text-[#BE002E] font-bold">{{ doc.documento_id }}</code>).\n          </p>\n        </div>\n      </div>\n\n      <div class="p-3 rounded-xl bg-red-50/70 border border-red-200/80 text-xs text-[#BE002E] space-y-1">\n        <div class="font-bold">Impacto en la base de conocimiento:</div>\n        <p class="text-[11px] text-slate-700">\n          Se eliminar\xE1n permanentemente sus <strong>{{ doc.fragmentos }} fragmentos vectoriales</strong> de PostgreSQL y el Asistente Virtual dejar\xE1 de citar esta fuente.\n        </p>\n      </div>\n\n      <div class="flex items-center justify-end gap-2.5 pt-2">\n        <button\n          type="button"\n          (click)="cancel.emit()"\n          [disabled]="isDeleting()"\n          class="px-4 py-2 rounded-xl border border-slate-200 text-xs font-bold text-slate-700 hover:bg-slate-50 transition-colors cursor-pointer disabled:opacity-40">\n          Cancelar\n        </button>\n\n        <button\n          type="button"\n          (click)="onConfirm()"\n          [disabled]="isDeleting()"\n          class="px-4 py-2 rounded-xl bg-[#BE002E] hover:bg-[#9e0026] text-white text-xs font-bold shadow-sm transition-all flex items-center gap-1.5 cursor-pointer disabled:opacity-50">\n          @if (isDeleting()) {\n            <span class="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>\n            <span>Eliminando...</span>\n          } @else {\n            <span>\u{1F5D1}\uFE0F</span>\n            <span>S\xED, eliminar definitivamente</span>\n          }\n        </button>\n      </div>\n\n    </div>\n  </div>\n}\n', styles: ["/* src/app/features/backoffice/components/confirm-delete-modal/confirm-delete-modal.component.css */\n.delete-modal {\n  animation: popIn 0.18s ease-out;\n}\n@keyframes popIn {\n  from {\n    opacity: 0;\n    transform: scale(0.95);\n  }\n  to {\n    opacity: 1;\n    transform: scale(1);\n  }\n}\n"] }]
  }], null, { documento: [{ type: Input, args: [{ isSignal: true, alias: "documento", required: false }] }], isDeleting: [{ type: Input, args: [{ isSignal: true, alias: "isDeleting", required: false }] }], cancel: [{ type: Output, args: ["cancel"] }], confirm: [{ type: Output, args: ["confirm"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ConfirmDeleteModalComponent, { className: "ConfirmDeleteModalComponent", filePath: "src/app/features/backoffice/components/confirm-delete-modal/confirm-delete-modal.component.ts", lineNumber: 10 });
})();

// src/app/features/backoffice/components/feedback-panel/feedback-panel.component.ts
var _forTrack02 = ($index, $item) => $item.id_feedback;
function FeedbackPanelComponent_Conditional_60_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 22);
    \u0275\u0275text(1, " Cargando evaluaciones y comentarios... ");
    \u0275\u0275domElementEnd();
  }
}
function FeedbackPanelComponent_Conditional_61_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 23)(1, "div", 24);
    \u0275\u0275text(2, "\u{1F4AC}");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "p", 25);
    \u0275\u0275text(4, "No hay comentarios registrados en esta categor\xEDa");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(5, "p", 5);
    \u0275\u0275text(6, " Cuando los usuarios cierren su conversaci\xF3n y env\xEDen su opini\xF3n, aparecer\xE1 aqu\xED. ");
    \u0275\u0275domElementEnd()();
  }
}
function FeedbackPanelComponent_Conditional_62_For_14_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 34)(1, "span");
    \u0275\u0275text(2, "\u{1F60D}");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "span");
    \u0275\u0275text(4, "S\xED, totalmente");
    \u0275\u0275domElementEnd()();
  }
}
function FeedbackPanelComponent_Conditional_62_For_14_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 35)(1, "span");
    \u0275\u0275text(2, "\u{1F610}");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "span");
    \u0275\u0275text(4, "Parcialmente");
    \u0275\u0275domElementEnd()();
  }
}
function FeedbackPanelComponent_Conditional_62_For_14_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 36)(1, "span");
    \u0275\u0275text(2, "\u{1F61E}");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "span");
    \u0275\u0275text(4, "No resolvi\xF3");
    \u0275\u0275domElementEnd()();
  }
}
function FeedbackPanelComponent_Conditional_62_For_14_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "p", 38);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const item_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(' "', item_r1.ultima_pregunta, '" ');
  }
}
function FeedbackPanelComponent_Conditional_62_For_14_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 39);
    \u0275\u0275text(1, "Sin pregunta registrada");
    \u0275\u0275domElementEnd();
  }
}
function FeedbackPanelComponent_Conditional_62_For_14_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "p", 41);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const item_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r1.comentario);
  }
}
function FeedbackPanelComponent_Conditional_62_For_14_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 39);
    \u0275\u0275text(1, "El usuario no dej\xF3 comentario escrito");
    \u0275\u0275domElementEnd();
  }
}
function FeedbackPanelComponent_Conditional_62_For_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "tr", 31)(1, "td", 33);
    \u0275\u0275conditionalCreate(2, FeedbackPanelComponent_Conditional_62_For_14_Conditional_2_Template, 5, 0, "span", 34)(3, FeedbackPanelComponent_Conditional_62_For_14_Conditional_3_Template, 5, 0, "span", 35)(4, FeedbackPanelComponent_Conditional_62_For_14_Conditional_4_Template, 5, 0, "span", 36);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(5, "td", 37);
    \u0275\u0275conditionalCreate(6, FeedbackPanelComponent_Conditional_62_For_14_Conditional_6_Template, 2, 1, "p", 38)(7, FeedbackPanelComponent_Conditional_62_For_14_Conditional_7_Template, 2, 0, "span", 39);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(8, "td", 40);
    \u0275\u0275conditionalCreate(9, FeedbackPanelComponent_Conditional_62_For_14_Conditional_9_Template, 2, 1, "p", 41)(10, FeedbackPanelComponent_Conditional_62_For_14_Conditional_10_Template, 2, 0, "span", 39);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(11, "td", 42);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "date");
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275conditional(item_r1.resuelto === "SI" ? 2 : item_r1.resuelto === "PARCIAL" ? 3 : 4);
    \u0275\u0275advance(4);
    \u0275\u0275conditional(item_r1.ultima_pregunta ? 6 : 7);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(item_r1.comentario ? 9 : 10);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(13, 4, item_r1.creado_en, "dd/MM/yyyy HH:mm"), " ");
  }
}
function FeedbackPanelComponent_Conditional_62_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "div", 32)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "div", 43)(4, "button", 44);
    \u0275\u0275domListener("click", function FeedbackPanelComponent_Conditional_62_Conditional_15_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.prevPage());
    });
    \u0275\u0275text(5, " Anterior ");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(6, "button", 44);
    \u0275\u0275domListener("click", function FeedbackPanelComponent_Conditional_62_Conditional_15_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.nextPage());
    });
    \u0275\u0275text(7, " Siguiente ");
    \u0275\u0275domElementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("P\xE1gina ", ctx_r2.currentPage(), " de ", ctx_r2.totalPages());
    \u0275\u0275advance(2);
    \u0275\u0275domProperty("disabled", ctx_r2.currentPage() === 1);
    \u0275\u0275advance(2);
    \u0275\u0275domProperty("disabled", ctx_r2.currentPage() === ctx_r2.totalPages());
  }
}
function FeedbackPanelComponent_Conditional_62_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 26)(1, "table", 27)(2, "thead")(3, "tr", 28)(4, "th", 29);
    \u0275\u0275text(5, "Satisfacci\xF3n");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(6, "th", 29);
    \u0275\u0275text(7, "\xDAltima Consulta del Usuario (Contexto)");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(8, "th", 29);
    \u0275\u0275text(9, "Comentario / Observaci\xF3n");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(10, "th", 29);
    \u0275\u0275text(11, "Fecha");
    \u0275\u0275domElementEnd()()();
    \u0275\u0275domElementStart(12, "tbody", 30);
    \u0275\u0275repeaterCreate(13, FeedbackPanelComponent_Conditional_62_For_14_Template, 14, 7, "tr", 31, _forTrack02);
    \u0275\u0275domElementEnd()()();
    \u0275\u0275conditionalCreate(15, FeedbackPanelComponent_Conditional_62_Conditional_15_Template, 8, 4, "div", 32);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(13);
    \u0275\u0275repeater(ctx_r2.paginatedItems());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.totalPages() > 1 ? 15 : -1);
  }
}
var FeedbackPanelComponent = class _FeedbackPanelComponent {
  items = input([], ...ngDevMode ? [{ debugName: "items" }] : (
    /* istanbul ignore next */
    []
  ));
  totalFeedback = input(0, ...ngDevMode ? [{ debugName: "totalFeedback" }] : (
    /* istanbul ignore next */
    []
  ));
  totalSi = input(0, ...ngDevMode ? [{ debugName: "totalSi" }] : (
    /* istanbul ignore next */
    []
  ));
  totalParcial = input(0, ...ngDevMode ? [{ debugName: "totalParcial" }] : (
    /* istanbul ignore next */
    []
  ));
  totalNo = input(0, ...ngDevMode ? [{ debugName: "totalNo" }] : (
    /* istanbul ignore next */
    []
  ));
  porcentajeSatisfaccion = input(0, ...ngDevMode ? [{ debugName: "porcentajeSatisfaccion" }] : (
    /* istanbul ignore next */
    []
  ));
  isLoading = input(false, ...ngDevMode ? [{ debugName: "isLoading" }] : (
    /* istanbul ignore next */
    []
  ));
  refresh = output();
  selectedFilter = signal("TODOS", ...ngDevMode ? [{ debugName: "selectedFilter" }] : (
    /* istanbul ignore next */
    []
  ));
  currentPage = signal(1, ...ngDevMode ? [{ debugName: "currentPage" }] : (
    /* istanbul ignore next */
    []
  ));
  pageSize = 10;
  filteredItems = computed(() => {
    const f = this.selectedFilter();
    const all = this.items();
    if (f === "TODOS")
      return all;
    return all.filter((item) => item.resuelto === f);
  }, ...ngDevMode ? [{ debugName: "filteredItems" }] : (
    /* istanbul ignore next */
    []
  ));
  totalPages = computed(() => Math.max(1, Math.ceil(this.filteredItems().length / this.pageSize)), ...ngDevMode ? [{ debugName: "totalPages" }] : (
    /* istanbul ignore next */
    []
  ));
  paginatedItems = computed(() => {
    const start = (this.currentPage() - 1) * this.pageSize;
    return this.filteredItems().slice(start, start + this.pageSize);
  }, ...ngDevMode ? [{ debugName: "paginatedItems" }] : (
    /* istanbul ignore next */
    []
  ));
  setFilter(filter) {
    this.selectedFilter.set(filter);
    this.currentPage.set(1);
  }
  prevPage() {
    if (this.currentPage() > 1) {
      this.currentPage.update((p) => p - 1);
    }
  }
  nextPage() {
    if (this.currentPage() < this.totalPages()) {
      this.currentPage.update((p) => p + 1);
    }
  }
  static \u0275fac = function FeedbackPanelComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FeedbackPanelComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FeedbackPanelComponent, selectors: [["app-feedback-panel"]], inputs: { items: [1, "items"], totalFeedback: [1, "totalFeedback"], totalSi: [1, "totalSi"], totalParcial: [1, "totalParcial"], totalNo: [1, "totalNo"], porcentajeSatisfaccion: [1, "porcentajeSatisfaccion"], isLoading: [1, "isLoading"] }, outputs: { refresh: "refresh" }, decls: 63, vars: 19, consts: [[1, "space-y-6"], [1, "grid", "grid-cols-1", "sm:grid-cols-2", "lg:grid-cols-4", "gap-4"], [1, "bg-white", "rounded-2xl", "p-5", "border", "border-slate-200/90", "shadow-2xs", "flex", "items-center", "justify-between"], [1, "text-xs", "font-bold", "uppercase", "tracking-wider", "text-slate-400"], [1, "text-3xl", "font-black", "text-[#0050A1]", "mt-1"], [1, "text-xs", "text-slate-500", "mt-1"], [1, "w-12", "h-12", "rounded-2xl", "bg-[#0050A1]/10", "text-[#0050A1]", "flex", "items-center", "justify-center", "text-2xl"], [1, "text-xs", "font-bold", "uppercase", "tracking-wider", "text-emerald-600"], [1, "text-3xl", "font-black", "text-slate-900", "mt-1"], [1, "w-12", "h-12", "rounded-2xl", "bg-emerald-50", "text-emerald-600", "flex", "items-center", "justify-center", "text-2xl"], [1, "text-xs", "font-bold", "uppercase", "tracking-wider", "text-amber-600"], [1, "w-12", "h-12", "rounded-2xl", "bg-amber-50", "text-amber-600", "flex", "items-center", "justify-center", "text-2xl"], [1, "text-xs", "font-bold", "uppercase", "tracking-wider", "text-[#BE002E]"], [1, "text-3xl", "font-black", "text-[#BE002E]", "mt-1"], [1, "w-12", "h-12", "rounded-2xl", "bg-red-50", "text-[#BE002E]", "flex", "items-center", "justify-center", "text-2xl"], [1, "bg-white", "rounded-3xl", "border", "border-slate-200/90", "shadow-xs", "overflow-hidden"], [1, "p-5", "sm:p-6", "border-b", "border-slate-200", "flex", "flex-col", "lg:flex-row", "lg:items-center", "lg:justify-between", "gap-4"], [1, "text-lg", "font-extrabold", "text-[#0050A1]"], [1, "text-xs", "text-slate-500", "mt-0.5"], [1, "flex", "flex-wrap", "items-center", "gap-2"], ["type", "button", 3, "click"], ["type", "button", "title", "Actualizar comentarios", 1, "p-2", "rounded-xl", "border", "border-slate-200", "bg-slate-50", "hover:bg-slate-100", "text-slate-600", "text-xs", "font-bold", "transition-colors", "cursor-pointer", 3, "click", "disabled"], [1, "p-12", "text-center", "text-slate-500", "text-sm"], [1, "p-12", "text-center"], [1, "text-3xl", "mb-2"], [1, "text-sm", "font-bold", "text-slate-800"], [1, "overflow-x-auto"], [1, "w-full", "text-left", "border-collapse"], [1, "bg-slate-50/80", "border-b", "border-slate-200", "text-[11px]", "font-extrabold", "uppercase", "tracking-wider", "text-[#0050A1]"], [1, "py-3.5", "px-5"], [1, "divide-y", "divide-slate-200/70", "text-sm"], [1, "hover:bg-slate-50/70", "transition-colors"], [1, "px-6", "py-4", "bg-slate-50", "border-t", "border-slate-200", "flex", "items-center", "justify-between", "text-xs", "text-slate-600"], [1, "py-4", "px-5", "whitespace-nowrap", "align-top"], [1, "inline-flex", "items-center", "gap-1.5", "px-2.5", "py-1", "rounded-full", "text-xs", "font-bold", "bg-emerald-50", "text-emerald-700", "border", "border-emerald-200"], [1, "inline-flex", "items-center", "gap-1.5", "px-2.5", "py-1", "rounded-full", "text-xs", "font-bold", "bg-amber-50", "text-amber-700", "border", "border-amber-200"], [1, "inline-flex", "items-center", "gap-1.5", "px-2.5", "py-1", "rounded-full", "text-xs", "font-bold", "bg-red-50", "text-[#BE002E]", "border", "border-red-200"], [1, "py-4", "px-5", "max-w-xs", "align-top"], [1, "text-xs", "font-semibold", "text-[#0050A1]", "bg-blue-50/60", "border", "border-blue-100", "rounded-xl", "px-3", "py-2", "leading-relaxed"], [1, "text-xs", "text-slate-400", "italic"], [1, "py-4", "px-5", "max-w-md", "align-top"], [1, "text-xs", "sm:text-sm", "text-slate-800", "leading-relaxed", "whitespace-pre-wrap"], [1, "py-4", "px-5", "whitespace-nowrap", "text-xs", "text-slate-500", "align-top"], [1, "flex", "items-center", "gap-2"], ["type", "button", 1, "px-3", "py-1.5", "rounded-lg", "border", "border-slate-200", "bg-white", "hover:bg-slate-100", "disabled:opacity-40", "cursor-pointer", 3, "click", "disabled"]], template: function FeedbackPanelComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div")(4, "p", 3);
      \u0275\u0275text(5, "\xCDndice de Satisfacci\xF3n");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(6, "p", 4);
      \u0275\u0275text(7);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(8, "p", 5);
      \u0275\u0275text(9);
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(10, "div", 6);
      \u0275\u0275text(11, " \u{1F4CA} ");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(12, "div", 2)(13, "div")(14, "p", 7);
      \u0275\u0275text(15, "Resueltas (S\xED)");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(16, "p", 8);
      \u0275\u0275text(17);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(18, "p", 5);
      \u0275\u0275text(19, "Atenci\xF3n satisfactoria");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(20, "div", 9);
      \u0275\u0275text(21, " \u{1F60D} ");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(22, "div", 2)(23, "div")(24, "p", 10);
      \u0275\u0275text(25, "Parcialmente");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(26, "p", 8);
      \u0275\u0275text(27);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(28, "p", 5);
      \u0275\u0275text(29, "Informaci\xF3n incompleta");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(30, "div", 11);
      \u0275\u0275text(31, " \u{1F610} ");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(32, "div", 2)(33, "div")(34, "p", 12);
      \u0275\u0275text(35, "No Resueltas");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(36, "p", 13);
      \u0275\u0275text(37);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(38, "p", 5);
      \u0275\u0275text(39, "Requieren nuevos documentos");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(40, "div", 14);
      \u0275\u0275text(41, " \u{1F61E} ");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(42, "div", 15)(43, "div", 16)(44, "div")(45, "h2", 17);
      \u0275\u0275text(46, " Comentarios y Feedback de Usuarios ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(47, "p", 18);
      \u0275\u0275text(48, " Identifica qu\xE9 consultas no pudieron resolverse para alimentar la ingesta con nuevos documentos. ");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(49, "div", 19)(50, "button", 20);
      \u0275\u0275domListener("click", function FeedbackPanelComponent_Template_button_click_50_listener() {
        return ctx.setFilter("TODOS");
      });
      \u0275\u0275text(51);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(52, "button", 20);
      \u0275\u0275domListener("click", function FeedbackPanelComponent_Template_button_click_52_listener() {
        return ctx.setFilter("NO");
      });
      \u0275\u0275text(53);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(54, "button", 20);
      \u0275\u0275domListener("click", function FeedbackPanelComponent_Template_button_click_54_listener() {
        return ctx.setFilter("PARCIAL");
      });
      \u0275\u0275text(55);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(56, "button", 20);
      \u0275\u0275domListener("click", function FeedbackPanelComponent_Template_button_click_56_listener() {
        return ctx.setFilter("SI");
      });
      \u0275\u0275text(57);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(58, "button", 21);
      \u0275\u0275domListener("click", function FeedbackPanelComponent_Template_button_click_58_listener() {
        return ctx.refresh.emit();
      });
      \u0275\u0275text(59, " \u{1F504} ");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275conditionalCreate(60, FeedbackPanelComponent_Conditional_60_Template, 2, 0, "div", 22)(61, FeedbackPanelComponent_Conditional_61_Template, 7, 0, "div", 23)(62, FeedbackPanelComponent_Conditional_62_Template, 16, 1);
      \u0275\u0275domElementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate1("", ctx.porcentajeSatisfaccion(), "%");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1("Sobre ", ctx.totalFeedback(), " evaluaciones");
      \u0275\u0275advance(8);
      \u0275\u0275textInterpolate(ctx.totalSi());
      \u0275\u0275advance(10);
      \u0275\u0275textInterpolate(ctx.totalParcial());
      \u0275\u0275advance(10);
      \u0275\u0275textInterpolate(ctx.totalNo());
      \u0275\u0275advance(13);
      \u0275\u0275classMap(ctx.selectedFilter() === "TODOS" ? "px-3 py-1.5 rounded-xl text-xs font-bold border transition-all cursor-pointer bg-[#0050A1] text-white border-[#0050A1]" : "px-3 py-1.5 rounded-xl text-xs font-bold border transition-all cursor-pointer bg-white text-slate-600 border-slate-200");
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" Todos (", ctx.items().length, ") ");
      \u0275\u0275advance();
      \u0275\u0275classMap(ctx.selectedFilter() === "NO" ? "px-3 py-1.5 rounded-xl text-xs font-bold border transition-all cursor-pointer bg-[#BE002E] text-white border-[#BE002E]" : "px-3 py-1.5 rounded-xl text-xs font-bold border transition-all cursor-pointer bg-white text-slate-600 border-slate-200");
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" \u{1F61E} No resueltos (", ctx.totalNo(), ") ");
      \u0275\u0275advance();
      \u0275\u0275classMap(ctx.selectedFilter() === "PARCIAL" ? "px-3 py-1.5 rounded-xl text-xs font-bold border transition-all cursor-pointer bg-amber-500 text-white border-amber-500" : "px-3 py-1.5 rounded-xl text-xs font-bold border transition-all cursor-pointer bg-white text-slate-600 border-slate-200");
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" \u{1F610} Parciales (", ctx.totalParcial(), ") ");
      \u0275\u0275advance();
      \u0275\u0275classMap(ctx.selectedFilter() === "SI" ? "px-3 py-1.5 rounded-xl text-xs font-bold border transition-all cursor-pointer bg-emerald-600 text-white border-emerald-600" : "px-3 py-1.5 rounded-xl text-xs font-bold border transition-all cursor-pointer bg-white text-slate-600 border-slate-200");
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" \u{1F60D} Resueltos (", ctx.totalSi(), ") ");
      \u0275\u0275advance();
      \u0275\u0275domProperty("disabled", ctx.isLoading());
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.isLoading() ? 60 : ctx.filteredItems().length === 0 ? 61 : 62);
    }
  }, dependencies: [DatePipe], styles: ["\n[_nghost-%COMP%] {\n  display: block;\n}"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FeedbackPanelComponent, [{
    type: Component,
    args: [{ selector: "app-feedback-panel", changeDetection: ChangeDetectionStrategy.OnPush, imports: [DatePipe], template: `<div class="space-y-6">

  <!-- KPIs de Satisfacci\xF3n Ciudadana -->
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
    
    <!-- KPI 1: \xCDndice de Satisfacci\xF3n -->
    <div class="bg-white rounded-2xl p-5 border border-slate-200/90 shadow-2xs flex items-center justify-between">
      <div>
        <p class="text-xs font-bold uppercase tracking-wider text-slate-400">\xCDndice de Satisfacci\xF3n</p>
        <p class="text-3xl font-black text-[#0050A1] mt-1">{{ porcentajeSatisfaccion() }}%</p>
        <p class="text-xs text-slate-500 mt-1">Sobre {{ totalFeedback() }} evaluaciones</p>
      </div>
      <div class="w-12 h-12 rounded-2xl bg-[#0050A1]/10 text-[#0050A1] flex items-center justify-center text-2xl">
        \u{1F4CA}
      </div>
    </div>

    <!-- KPI 2: S\xED, totalmente -->
    <div class="bg-white rounded-2xl p-5 border border-slate-200/90 shadow-2xs flex items-center justify-between">
      <div>
        <p class="text-xs font-bold uppercase tracking-wider text-emerald-600">Resueltas (S\xED)</p>
        <p class="text-3xl font-black text-slate-900 mt-1">{{ totalSi() }}</p>
        <p class="text-xs text-slate-500 mt-1">Atenci\xF3n satisfactoria</p>
      </div>
      <div class="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center text-2xl">
        \u{1F60D}
      </div>
    </div>

    <!-- KPI 3: Parcialmente -->
    <div class="bg-white rounded-2xl p-5 border border-slate-200/90 shadow-2xs flex items-center justify-between">
      <div>
        <p class="text-xs font-bold uppercase tracking-wider text-amber-600">Parcialmente</p>
        <p class="text-3xl font-black text-slate-900 mt-1">{{ totalParcial() }}</p>
        <p class="text-xs text-slate-500 mt-1">Informaci\xF3n incompleta</p>
      </div>
      <div class="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center text-2xl">
        \u{1F610}
      </div>
    </div>

    <!-- KPI 4: No resueltas (Brechas de documentos) -->
    <div class="bg-white rounded-2xl p-5 border border-slate-200/90 shadow-2xs flex items-center justify-between">
      <div>
        <p class="text-xs font-bold uppercase tracking-wider text-[#BE002E]">No Resueltas</p>
        <p class="text-3xl font-black text-[#BE002E] mt-1">{{ totalNo() }}</p>
        <p class="text-xs text-slate-500 mt-1">Requieren nuevos documentos</p>
      </div>
      <div class="w-12 h-12 rounded-2xl bg-red-50 text-[#BE002E] flex items-center justify-center text-2xl">
        \u{1F61E}
      </div>
    </div>

  </div>

  <!-- Contenedor de Tabla y Filtros -->
  <div class="bg-white rounded-3xl border border-slate-200/90 shadow-xs overflow-hidden">
    
    <!-- Cabecera de Tabla y Controles -->
    <div class="p-5 sm:p-6 border-b border-slate-200 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
      <div>
        <h2 class="text-lg font-extrabold text-[#0050A1]">
          Comentarios y Feedback de Usuarios
        </h2>
        <p class="text-xs text-slate-500 mt-0.5">
          Identifica qu\xE9 consultas no pudieron resolverse para alimentar la ingesta con nuevos documentos.
        </p>
      </div>

      <div class="flex flex-wrap items-center gap-2">
        <!-- Filtros por Nivel de Resoluci\xF3n -->
        <button
          type="button"
          (click)="setFilter('TODOS')"
          [class]="selectedFilter() === 'TODOS'
            ? 'px-3 py-1.5 rounded-xl text-xs font-bold border transition-all cursor-pointer bg-[#0050A1] text-white border-[#0050A1]'
            : 'px-3 py-1.5 rounded-xl text-xs font-bold border transition-all cursor-pointer bg-white text-slate-600 border-slate-200'">
          Todos ({{ items().length }})
        </button>

        <button
          type="button"
          (click)="setFilter('NO')"
          [class]="selectedFilter() === 'NO'
            ? 'px-3 py-1.5 rounded-xl text-xs font-bold border transition-all cursor-pointer bg-[#BE002E] text-white border-[#BE002E]'
            : 'px-3 py-1.5 rounded-xl text-xs font-bold border transition-all cursor-pointer bg-white text-slate-600 border-slate-200'">
          \u{1F61E} No resueltos ({{ totalNo() }})
        </button>

        <button
          type="button"
          (click)="setFilter('PARCIAL')"
          [class]="selectedFilter() === 'PARCIAL'
            ? 'px-3 py-1.5 rounded-xl text-xs font-bold border transition-all cursor-pointer bg-amber-500 text-white border-amber-500'
            : 'px-3 py-1.5 rounded-xl text-xs font-bold border transition-all cursor-pointer bg-white text-slate-600 border-slate-200'">
          \u{1F610} Parciales ({{ totalParcial() }})
        </button>

        <button
          type="button"
          (click)="setFilter('SI')"
          [class]="selectedFilter() === 'SI'
            ? 'px-3 py-1.5 rounded-xl text-xs font-bold border transition-all cursor-pointer bg-emerald-600 text-white border-emerald-600'
            : 'px-3 py-1.5 rounded-xl text-xs font-bold border transition-all cursor-pointer bg-white text-slate-600 border-slate-200'">
          \u{1F60D} Resueltos ({{ totalSi() }})
        </button>

        <button
          type="button"
          (click)="refresh.emit()"
          [disabled]="isLoading()"
          title="Actualizar comentarios"
          class="p-2 rounded-xl border border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-600 text-xs font-bold transition-colors cursor-pointer">
          \u{1F504}
        </button>
      </div>
    </div>

    <!-- Estado Cargando -->
    @if (isLoading()) {
      <div class="p-12 text-center text-slate-500 text-sm">
        Cargando evaluaciones y comentarios...
      </div>
    } @else if (filteredItems().length === 0) {
      <!-- Estado Vac\xEDo -->
      <div class="p-12 text-center">
        <div class="text-3xl mb-2">\u{1F4AC}</div>
        <p class="text-sm font-bold text-slate-800">No hay comentarios registrados en esta categor\xEDa</p>
        <p class="text-xs text-slate-500 mt-1">
          Cuando los usuarios cierren su conversaci\xF3n y env\xEDen su opini\xF3n, aparecer\xE1 aqu\xED.
        </p>
      </div>
    } @else {
      <!-- Tabla de Feedback -->
      <div class="overflow-x-auto">
        <table class="w-full text-left border-collapse">
          <thead>
            <tr class="bg-slate-50/80 border-b border-slate-200 text-[11px] font-extrabold uppercase tracking-wider text-[#0050A1]">
              <th class="py-3.5 px-5">Satisfacci\xF3n</th>
              <th class="py-3.5 px-5">\xDAltima Consulta del Usuario (Contexto)</th>
              <th class="py-3.5 px-5">Comentario / Observaci\xF3n</th>
              <th class="py-3.5 px-5">Fecha</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-200/70 text-sm">
            @for (item of paginatedItems(); track item.id_feedback) {
              <tr class="hover:bg-slate-50/70 transition-colors">
                
                <!-- Columna 1: Nivel de Resoluci\xF3n -->
                <td class="py-4 px-5 whitespace-nowrap align-top">
                  @if (item.resuelto === 'SI') {
                    <span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                      <span>\u{1F60D}</span>
                      <span>S\xED, totalmente</span>
                    </span>
                  } @else if (item.resuelto === 'PARCIAL') {
                    <span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-amber-50 text-amber-700 border border-amber-200">
                      <span>\u{1F610}</span>
                      <span>Parcialmente</span>
                    </span>
                  } @else {
                    <span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-red-50 text-[#BE002E] border border-red-200">
                      <span>\u{1F61E}</span>
                      <span>No resolvi\xF3</span>
                    </span>
                  }
                </td>

                <!-- Columna 2: \xDAltima pregunta realizada -->
                <td class="py-4 px-5 max-w-xs align-top">
                  @if (item.ultima_pregunta) {
                    <p class="text-xs font-semibold text-[#0050A1] bg-blue-50/60 border border-blue-100 rounded-xl px-3 py-2 leading-relaxed">
                      "{{ item.ultima_pregunta }}"
                    </p>
                  } @else {
                    <span class="text-xs text-slate-400 italic">Sin pregunta registrada</span>
                  }
                </td>

                <!-- Columna 3: Comentario del usuario -->
                <td class="py-4 px-5 max-w-md align-top">
                  @if (item.comentario) {
                    <p class="text-xs sm:text-sm text-slate-800 leading-relaxed whitespace-pre-wrap">{{ item.comentario }}</p>
                  } @else {
                    <span class="text-xs text-slate-400 italic">El usuario no dej\xF3 comentario escrito</span>
                  }
                </td>

                <!-- Columna 4: Fecha -->
                <td class="py-4 px-5 whitespace-nowrap text-xs text-slate-500 align-top">
                  {{ item.creado_en | date:'dd/MM/yyyy HH:mm' }}
                </td>

              </tr>
            }
          </tbody>
        </table>
      </div>

      <!-- Paginaci\xF3n si supera 10 registros -->
      @if (totalPages() > 1) {
        <div class="px-6 py-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between text-xs text-slate-600">
          <span>P\xE1gina {{ currentPage() }} de {{ totalPages() }}</span>
          <div class="flex items-center gap-2">
            <button
              type="button"
              (click)="prevPage()"
              [disabled]="currentPage() === 1"
              class="px-3 py-1.5 rounded-lg border border-slate-200 bg-white hover:bg-slate-100 disabled:opacity-40 cursor-pointer">
              Anterior
            </button>
            <button
              type="button"
              (click)="nextPage()"
              [disabled]="currentPage() === totalPages()"
              class="px-3 py-1.5 rounded-lg border border-slate-200 bg-white hover:bg-slate-100 disabled:opacity-40 cursor-pointer">
              Siguiente
            </button>
          </div>
        </div>
      }
    }

  </div>

</div>
`, styles: ["/* src/app/features/backoffice/components/feedback-panel/feedback-panel.component.css */\n:host {\n  display: block;\n}\n"] }]
  }], null, { items: [{ type: Input, args: [{ isSignal: true, alias: "items", required: false }] }], totalFeedback: [{ type: Input, args: [{ isSignal: true, alias: "totalFeedback", required: false }] }], totalSi: [{ type: Input, args: [{ isSignal: true, alias: "totalSi", required: false }] }], totalParcial: [{ type: Input, args: [{ isSignal: true, alias: "totalParcial", required: false }] }], totalNo: [{ type: Input, args: [{ isSignal: true, alias: "totalNo", required: false }] }], porcentajeSatisfaccion: [{ type: Input, args: [{ isSignal: true, alias: "porcentajeSatisfaccion", required: false }] }], isLoading: [{ type: Input, args: [{ isSignal: true, alias: "isLoading", required: false }] }], refresh: [{ type: Output, args: ["refresh"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FeedbackPanelComponent, { className: "FeedbackPanelComponent", filePath: "src/app/features/backoffice/components/feedback-panel/feedback-panel.component.ts", lineNumber: 12 });
})();

// src/app/features/backoffice/pages/admin-dashboard/admin-dashboard.component.ts
var _c0 = ["uploadModal"];
var _forTrack03 = ($index, $item) => $item.id;
function AdminDashboardComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-admin-stats", 10);
    \u0275\u0275listener("openUpload", function AdminDashboardComponent_Conditional_19_Template_app_admin_stats_openUpload_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openUploadModal());
    })("refresh", function AdminDashboardComponent_Conditional_19_Template_app_admin_stats_refresh_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cargarDocumentos());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(1, "app-document-table", 11);
    \u0275\u0275listener("requestDelete", function AdminDashboardComponent_Conditional_19_Template_app_document_table_requestDelete_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onRequestDelete($event));
    })("openUpload", function AdminDashboardComponent_Conditional_19_Template_app_document_table_openUpload_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openUploadModal());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("totalDocumentos", ctx_r1.totalDocumentos())("totalFragmentos", ctx_r1.totalFragmentos())("isLoading", ctx_r1.isLoadingList())("isAdmin", ctx_r1.isAdmin());
    \u0275\u0275advance();
    \u0275\u0275property("documentos", ctx_r1.documentos())("isLoading", ctx_r1.isLoadingList())("deletingId", ctx_r1.deletingId())("isAdmin", ctx_r1.isAdmin());
  }
}
function AdminDashboardComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-feedback-panel", 12);
    \u0275\u0275listener("refresh", function AdminDashboardComponent_Conditional_20_Template_app_feedback_panel_refresh_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cargarFeedback());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("items", ctx_r1.feedbackItems())("totalFeedback", ctx_r1.totalFeedback())("totalSi", ctx_r1.totalSi())("totalParcial", ctx_r1.totalParcial())("totalNo", ctx_r1.totalNo())("porcentajeSatisfaccion", ctx_r1.porcentajeSatisfaccion())("isLoading", ctx_r1.isLoadingFeedback());
  }
}
function AdminDashboardComponent_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-document-upload-modal", 13, 0);
    \u0275\u0275listener("close", function AdminDashboardComponent_Conditional_21_Template_app_document_upload_modal_close_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeUploadModal());
    })("upload", function AdminDashboardComponent_Conditional_21_Template_app_document_upload_modal_upload_0_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onUploadDocument($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "app-confirm-delete-modal", 14);
    \u0275\u0275listener("close", function AdminDashboardComponent_Conditional_21_Template_app_confirm_delete_modal_close_2_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onCancelDelete());
    })("confirm", function AdminDashboardComponent_Conditional_21_Template_app_confirm_delete_modal_confirm_2_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onConfirmDelete());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_4_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("isOpen", ctx_r1.isUploadModalOpen())("isUploading", ctx_r1.isUploading())("defaultArea", ((tmp_4_0 = ctx_r1.session()) == null ? null : tmp_4_0.areaDefault) || "GENERAL");
    \u0275\u0275advance(2);
    \u0275\u0275property("documento", ctx_r1.docToDelete())("isDeleting", !!ctx_r1.deletingId());
  }
}
function AdminDashboardComponent_For_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 15)(1, "span", 16);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 17)(4, "div", 18);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 19);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "button", 20);
    \u0275\u0275listener("click", function AdminDashboardComponent_For_24_Template_button_click_8_listener() {
      const toast_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.removeToast(toast_r6.id));
    });
    \u0275\u0275text(9, " \u2715 ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const toast_r6 = ctx.$implicit;
    \u0275\u0275classMap(toast_r6.type === "success" ? "bg-emerald-50 border-emerald-200 text-emerald-900" : toast_r6.type === "error" ? "bg-red-50 border-red-200 text-[#BE002E]" : "bg-blue-50 border-blue-200 text-[#0050A1]");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", toast_r6.type === "success" ? "\u2705" : toast_r6.type === "error" ? "\u274C" : "\u2139\uFE0F", " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(toast_r6.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(toast_r6.message);
  }
}
var AdminDashboardComponent = class _AdminDashboardComponent {
  backofficeService = inject(BackofficeService);
  router = inject(Router);
  uploadModal = viewChild("uploadModal", ...ngDevMode ? [{ debugName: "uploadModal" }] : (
    /* istanbul ignore next */
    []
  ));
  session = this.backofficeService.currentSession;
  isAdmin = this.backofficeService.isAdmin;
  activeTab = signal("documentos", ...ngDevMode ? [{ debugName: "activeTab" }] : (
    /* istanbul ignore next */
    []
  ));
  documentos = signal([], ...ngDevMode ? [{ debugName: "documentos" }] : (
    /* istanbul ignore next */
    []
  ));
  totalDocumentos = signal(0, ...ngDevMode ? [{ debugName: "totalDocumentos" }] : (
    /* istanbul ignore next */
    []
  ));
  totalFragmentos = signal(0, ...ngDevMode ? [{ debugName: "totalFragmentos" }] : (
    /* istanbul ignore next */
    []
  ));
  feedbackItems = signal([], ...ngDevMode ? [{ debugName: "feedbackItems" }] : (
    /* istanbul ignore next */
    []
  ));
  totalFeedback = signal(0, ...ngDevMode ? [{ debugName: "totalFeedback" }] : (
    /* istanbul ignore next */
    []
  ));
  totalSi = signal(0, ...ngDevMode ? [{ debugName: "totalSi" }] : (
    /* istanbul ignore next */
    []
  ));
  totalParcial = signal(0, ...ngDevMode ? [{ debugName: "totalParcial" }] : (
    /* istanbul ignore next */
    []
  ));
  totalNo = signal(0, ...ngDevMode ? [{ debugName: "totalNo" }] : (
    /* istanbul ignore next */
    []
  ));
  porcentajeSatisfaccion = signal(0, ...ngDevMode ? [{ debugName: "porcentajeSatisfaccion" }] : (
    /* istanbul ignore next */
    []
  ));
  isLoadingList = signal(false, ...ngDevMode ? [{ debugName: "isLoadingList" }] : (
    /* istanbul ignore next */
    []
  ));
  isLoadingFeedback = signal(false, ...ngDevMode ? [{ debugName: "isLoadingFeedback" }] : (
    /* istanbul ignore next */
    []
  ));
  isUploadModalOpen = signal(false, ...ngDevMode ? [{ debugName: "isUploadModalOpen" }] : (
    /* istanbul ignore next */
    []
  ));
  isUploading = signal(false, ...ngDevMode ? [{ debugName: "isUploading" }] : (
    /* istanbul ignore next */
    []
  ));
  docToDelete = signal(null, ...ngDevMode ? [{ debugName: "docToDelete" }] : (
    /* istanbul ignore next */
    []
  ));
  deletingId = signal(null, ...ngDevMode ? [{ debugName: "deletingId" }] : (
    /* istanbul ignore next */
    []
  ));
  toasts = signal([], ...ngDevMode ? [{ debugName: "toasts" }] : (
    /* istanbul ignore next */
    []
  ));
  ngOnInit() {
    this.cargarDocumentos();
    this.cargarFeedback();
  }
  setTab(tab) {
    this.activeTab.set(tab);
  }
  cargarDocumentos() {
    this.isLoadingList.set(true);
    this.backofficeService.listarDocumentos().subscribe({
      next: (res) => {
        this.documentos.set(res.documentos);
        this.totalDocumentos.set(res.total_documentos);
        this.totalFragmentos.set(res.total_fragmentos);
        this.isLoadingList.set(false);
      },
      error: (err) => {
        this.isLoadingList.set(false);
        this.addToast("error", "Error al cargar documentos", err.message);
      }
    });
  }
  cargarFeedback() {
    this.isLoadingFeedback.set(true);
    this.backofficeService.listarFeedback().subscribe({
      next: (res) => {
        this.feedbackItems.set(res.items);
        this.totalFeedback.set(res.total_feedback);
        this.totalSi.set(res.total_si);
        this.totalParcial.set(res.total_parcial);
        this.totalNo.set(res.total_no);
        this.porcentajeSatisfaccion.set(res.porcentaje_satisfaccion);
        this.isLoadingFeedback.set(false);
      },
      error: (err) => {
        this.isLoadingFeedback.set(false);
        this.addToast("error", "Error al cargar feedback", err.message);
      }
    });
  }
  openUploadModal() {
    if (!this.isAdmin())
      return;
    this.isUploadModalOpen.set(true);
  }
  closeUploadModal() {
    this.isUploadModalOpen.set(false);
  }
  onUploadDocument(data) {
    if (!this.isAdmin())
      return;
    this.isUploading.set(true);
    this.backofficeService.indexarDocumento(data).subscribe({
      next: (res) => {
        this.isUploading.set(false);
        this.closeUploadModal();
        this.uploadModal()?.resetForm();
        this.addToast("success", "Documento indexado con \xE9xito", `Se generaron y almacenaron ${res.fragmentos_indexados} fragmentos vectoriales en PostgreSQL.`);
        this.cargarDocumentos();
      },
      error: (err) => {
        this.isUploading.set(false);
        this.addToast("error", "Fallo al procesar documento", err.message);
      }
    });
  }
  onRequestDelete(doc) {
    if (!this.isAdmin())
      return;
    this.docToDelete.set(doc);
  }
  onCancelDelete() {
    this.docToDelete.set(null);
  }
  onConfirmDelete() {
    if (!this.isAdmin())
      return;
    const doc = this.docToDelete();
    if (!doc)
      return;
    this.deletingId.set(doc.documento_id);
    this.docToDelete.set(null);
    this.backofficeService.eliminarDocumento(doc.documento_id).subscribe({
      next: () => {
        this.deletingId.set(null);
        this.addToast("success", "Documento eliminado", `El documento '${doc.fuente}' y sus fragmentos fueron eliminados.`);
        this.cargarDocumentos();
      },
      error: (err) => {
        this.deletingId.set(null);
        this.addToast("error", "Error al eliminar", err.message);
      }
    });
  }
  onLogout() {
    this.backofficeService.logout();
    this.router.navigate(["/backoffice/login"]);
  }
  addToast(type, title, message) {
    const id = `${Date.now()}-${Math.random().toString(36).slice(2, 6)}`;
    const toast = { id, type, title, message };
    this.toasts.update((current) => [...current, toast]);
    setTimeout(() => {
      this.removeToast(id);
    }, 4500);
  }
  removeToast(id) {
    this.toasts.update((current) => current.filter((t) => t.id !== id));
  }
  static \u0275fac = function AdminDashboardComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AdminDashboardComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminDashboardComponent, selectors: [["app-admin-dashboard"]], viewQuery: function AdminDashboardComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuerySignal(ctx.uploadModal, _c0, 5);
    }
    if (rf & 2) {
      \u0275\u0275queryAdvance();
    }
  }, decls: 25, vars: 14, consts: [["uploadModal", ""], [1, "min-h-dvh", "bg-white", "flex", "flex-col"], [3, "logout", "session"], [1, "flex-1", "w-full", "px-4", "sm:px-6", "lg:px-10", "py-6", "space-y-6", "bg-white"], [1, "flex", "flex-wrap", "items-center", "justify-between", "gap-4", "border-b", "border-slate-200", "pb-4"], [1, "inline-flex", "p-1.5", "rounded-2xl", "bg-slate-100", "border", "border-slate-200", "gap-1.5"], ["type", "button", 3, "click"], [3, "items", "totalFeedback", "totalSi", "totalParcial", "totalNo", "porcentajeSatisfaccion", "isLoading"], ["aria-label", "Notificaciones del sistema", 1, "fixed", "bottom-6", "right-6", "z-50", "flex", "flex-col", "gap-2.5", "max-w-sm", "pointer-events-none"], [1, "pointer-events-auto", "p-4", "rounded-2xl", "shadow-xl", "border", "flex", "items-start", "gap-3", "transform", "transition-all", "animate-in", "slide-in-from-bottom-2", "duration-200", 3, "class"], [3, "openUpload", "refresh", "totalDocumentos", "totalFragmentos", "isLoading", "isAdmin"], [3, "requestDelete", "openUpload", "documentos", "isLoading", "deletingId", "isAdmin"], [3, "refresh", "items", "totalFeedback", "totalSi", "totalParcial", "totalNo", "porcentajeSatisfaccion", "isLoading"], [3, "close", "upload", "isOpen", "isUploading", "defaultArea"], [3, "close", "confirm", "documento", "isDeleting"], [1, "pointer-events-auto", "p-4", "rounded-2xl", "shadow-xl", "border", "flex", "items-start", "gap-3", "transform", "transition-all", "animate-in", "slide-in-from-bottom-2", "duration-200"], [1, "text-base", "shrink-0"], [1, "flex-1", "min-w-0"], [1, "text-xs", "font-bold", "leading-tight"], [1, "text-[11px]", "opacity-90", "mt-0.5", "leading-snug"], ["type", "button", 1, "text-xs", "font-bold", "opacity-60", "hover:opacity-100", "transition-opacity", "shrink-0", "cursor-pointer", 3, "click"]], template: function AdminDashboardComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 1)(1, "app-admin-navbar", 2);
      \u0275\u0275listener("logout", function AdminDashboardComponent_Template_app_admin_navbar_logout_1_listener() {
        return ctx.onLogout();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2, "main", 3)(3, "div", 4)(4, "div", 5)(5, "button", 6);
      \u0275\u0275listener("click", function AdminDashboardComponent_Template_button_click_5_listener() {
        return ctx.setTab("documentos");
      });
      \u0275\u0275elementStart(6, "span");
      \u0275\u0275text(7, "\u{1F4DA}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "span");
      \u0275\u0275text(9, "Base de Conocimiento");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "span");
      \u0275\u0275text(11);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(12, "button", 6);
      \u0275\u0275listener("click", function AdminDashboardComponent_Template_button_click_12_listener() {
        return ctx.setTab("feedback");
      });
      \u0275\u0275elementStart(13, "span");
      \u0275\u0275text(14, "\u2B50");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "span");
      \u0275\u0275text(16, "Satisfacci\xF3n y Comentarios");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "span");
      \u0275\u0275text(18);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275conditionalCreate(19, AdminDashboardComponent_Conditional_19_Template, 2, 8);
      \u0275\u0275conditionalCreate(20, AdminDashboardComponent_Conditional_20_Template, 1, 7, "app-feedback-panel", 7);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(21, AdminDashboardComponent_Conditional_21_Template, 3, 5);
      \u0275\u0275elementStart(22, "aside", 8);
      \u0275\u0275repeaterCreate(23, AdminDashboardComponent_For_24_Template, 10, 5, "div", 9, _forTrack03);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("session", ctx.session());
      \u0275\u0275advance(4);
      \u0275\u0275classMap(ctx.activeTab() === "documentos" ? "inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold transition-all cursor-pointer bg-[#0050A1] text-white shadow-sm" : "inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer text-slate-600 hover:text-[#0050A1]");
      \u0275\u0275advance(5);
      \u0275\u0275classMap(ctx.activeTab() === "documentos" ? "px-2 py-0.5 rounded-full text-[11px] font-extrabold bg-white/20 text-white" : "px-2 py-0.5 rounded-full text-[11px] font-extrabold bg-slate-200 text-slate-700");
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.totalDocumentos(), " ");
      \u0275\u0275advance();
      \u0275\u0275classMap(ctx.activeTab() === "feedback" ? "inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold transition-all cursor-pointer bg-[#0050A1] text-white shadow-sm" : "inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer text-slate-600 hover:text-[#0050A1]");
      \u0275\u0275advance(5);
      \u0275\u0275classMap(ctx.activeTab() === "feedback" ? "px-2 py-0.5 rounded-full text-[11px] font-extrabold bg-white/20 text-white" : ctx.totalNo() > 0 ? "px-2 py-0.5 rounded-full text-[11px] font-extrabold bg-[#BE002E] text-white" : "px-2 py-0.5 rounded-full text-[11px] font-extrabold bg-slate-200 text-slate-700");
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.totalFeedback(), " ");
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.activeTab() === "documentos" ? 19 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.activeTab() === "feedback" ? 20 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isAdmin() ? 21 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275repeater(ctx.toasts());
    }
  }, dependencies: [
    AdminNavbarComponent,
    AdminStatsComponent,
    DocumentTableComponent,
    DocumentUploadModalComponent,
    ConfirmDeleteModalComponent,
    FeedbackPanelComponent
  ], styles: ["\n.toast-item[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_slideInRight 0.25s cubic-bezier(0.16, 1, 0.3, 1);\n}\n@keyframes _ngcontent-%COMP%_slideInRight {\n  from {\n    opacity: 0;\n    transform: translateX(20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateX(0);\n  }\n}"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdminDashboardComponent, [{
    type: Component,
    args: [{ selector: "app-admin-dashboard", changeDetection: ChangeDetectionStrategy.OnPush, imports: [
      AdminNavbarComponent,
      AdminStatsComponent,
      DocumentTableComponent,
      DocumentUploadModalComponent,
      ConfirmDeleteModalComponent,
      FeedbackPanelComponent
    ], template: `<div class="min-h-dvh bg-white flex flex-col">

  <!-- Barra de Navegaci\xF3n Superior Institucional (#0050A1 + #BE002E con el \xEDcono CBB siempre visible) -->
  <app-admin-navbar
    [session]="session()"
    (logout)="onLogout()"
  />

  <!-- Contenido Principal a Ancho Completo -->
  <main class="flex-1 w-full px-4 sm:px-6 lg:px-10 py-6 space-y-6 bg-white">

    <!-- Selector de M\xF3dulos de Gesti\xF3n en Pesta\xF1as (Tabs) -->
    <div class="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 pb-4">
      <div class="inline-flex p-1.5 rounded-2xl bg-slate-100 border border-slate-200 gap-1.5">

        <button
          type="button"
          (click)="setTab('documentos')"
          [class]="activeTab() === 'documentos'
            ? 'inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold transition-all cursor-pointer bg-[#0050A1] text-white shadow-sm'
            : 'inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer text-slate-600 hover:text-[#0050A1]'">
          <span>\u{1F4DA}</span>
          <span>Base de Conocimiento</span>
          <span
            [class]="activeTab() === 'documentos'
              ? 'px-2 py-0.5 rounded-full text-[11px] font-extrabold bg-white/20 text-white'
              : 'px-2 py-0.5 rounded-full text-[11px] font-extrabold bg-slate-200 text-slate-700'">
            {{ totalDocumentos() }}
          </span>
        </button>

        <button
          type="button"
          (click)="setTab('feedback')"
          [class]="activeTab() === 'feedback'
            ? 'inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold transition-all cursor-pointer bg-[#0050A1] text-white shadow-sm'
            : 'inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer text-slate-600 hover:text-[#0050A1]'">
          <span>\u2B50</span>
          <span>Satisfacci\xF3n y Comentarios</span>
          <span
            [class]="activeTab() === 'feedback'
              ? 'px-2 py-0.5 rounded-full text-[11px] font-extrabold bg-white/20 text-white'
              : (totalNo() > 0
                  ? 'px-2 py-0.5 rounded-full text-[11px] font-extrabold bg-[#BE002E] text-white'
                  : 'px-2 py-0.5 rounded-full text-[11px] font-extrabold bg-slate-200 text-slate-700')">
            {{ totalFeedback() }}
          </span>
        </button>

      </div>
    </div>

    <!-- M\xD3DULO 1: Base de Conocimiento (Documentos) -->
    @if (activeTab() === 'documentos') {
      <app-admin-stats
        [totalDocumentos]="totalDocumentos()"
        [totalFragmentos]="totalFragmentos()"
        [isLoading]="isLoadingList()"
        [isAdmin]="isAdmin()"
        (openUpload)="openUploadModal()"
        (refresh)="cargarDocumentos()"
      />

      <app-document-table
        [documentos]="documentos()"
        [isLoading]="isLoadingList()"
        [deletingId]="deletingId()"
        [isAdmin]="isAdmin()"
        (requestDelete)="onRequestDelete($event)"
        (openUpload)="openUploadModal()"
      />
    }

    <!-- M\xD3DULO 2: Satisfacci\xF3n y Comentarios de Usuarios -->
    @if (activeTab() === 'feedback') {
      <app-feedback-panel
        [items]="feedbackItems()"
        [totalFeedback]="totalFeedback()"
        [totalSi]="totalSi()"
        [totalParcial]="totalParcial()"
        [totalNo]="totalNo()"
        [porcentajeSatisfaccion]="porcentajeSatisfaccion()"
        [isLoading]="isLoadingFeedback()"
        (refresh)="cargarFeedback()"
      />
    }

  </main>

  <!-- Modal de Ingesta / Carga de Documentos (Solo Admin) -->
  @if (isAdmin()) {
    <app-document-upload-modal
      #uploadModal
      [isOpen]="isUploadModalOpen()"
      [isUploading]="isUploading()"
      [defaultArea]="session()?.areaDefault || 'GENERAL'"
      (close)="closeUploadModal()"
      (upload)="onUploadDocument($event)"
    />

    <!-- Modal de Confirmaci\xF3n de Eliminaci\xF3n -->
    <app-confirm-delete-modal
      [documento]="docToDelete()"
      [isDeleting]="!!deletingId()"
      (close)="onCancelDelete()"
      (confirm)="onConfirmDelete()"
    />
  }

  <!-- Contenedor Flotante de Toasts / Notificaciones -->
  <aside
    class="fixed bottom-6 right-6 z-50 flex flex-col gap-2.5 max-w-sm pointer-events-none"
    aria-label="Notificaciones del sistema">
    @for (toast of toasts(); track toast.id) {
      <div
        class="pointer-events-auto p-4 rounded-2xl shadow-xl border flex items-start gap-3 transform transition-all animate-in slide-in-from-bottom-2 duration-200"
        [class]="toast.type === 'success'
          ? 'bg-emerald-50 border-emerald-200 text-emerald-900'
          : (toast.type === 'error'
              ? 'bg-red-50 border-red-200 text-[#BE002E]'
              : 'bg-blue-50 border-blue-200 text-[#0050A1]')">
        
        <span class="text-base shrink-0">
          {{ toast.type === 'success' ? '\u2705' : (toast.type === 'error' ? '\u274C' : '\u2139\uFE0F') }}
        </span>

        <div class="flex-1 min-w-0">
          <div class="text-xs font-bold leading-tight">{{ toast.title }}</div>
          <div class="text-[11px] opacity-90 mt-0.5 leading-snug">{{ toast.message }}</div>
        </div>

        <button
          type="button"
          (click)="removeToast(toast.id)"
          class="text-xs font-bold opacity-60 hover:opacity-100 transition-opacity shrink-0 cursor-pointer">
          \u2715
        </button>
      </div>
    }
  </aside>

</div>
`, styles: ["/* src/app/features/backoffice/pages/admin-dashboard/admin-dashboard.component.css */\n.toast-item {\n  animation: slideInRight 0.25s cubic-bezier(0.16, 1, 0.3, 1);\n}\n@keyframes slideInRight {\n  from {\n    opacity: 0;\n    transform: translateX(20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateX(0);\n  }\n}\n"] }]
  }], null, { uploadModal: [{ type: ViewChild, args: ["uploadModal", { isSignal: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminDashboardComponent, { className: "AdminDashboardComponent", filePath: "src/app/features/backoffice/pages/admin-dashboard/admin-dashboard.component.ts", lineNumber: 26 });
})();
export {
  AdminDashboardComponent
};
