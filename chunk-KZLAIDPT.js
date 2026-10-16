import {
  BackofficeService,
  Router,
  RouterLink
} from "./chunk-K2FKSCDE.js";
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
  ɵɵclassProp,
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
} from "./chunk-OMSE2WG5.js";

// src/app/features/backoffice/components/admin-navbar/admin-navbar.component.ts
function AdminNavbarComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275element(0, "div", 11);
    \u0275\u0275elementStart(1, "div", 12)(2, "div", 13);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 14)(5, "div", 15);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 16);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "button", 17);
    \u0275\u0275listener("click", function AdminNavbarComponent_Conditional_19_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.logout.emit());
    });
    \u0275\u0275elementStart(10, "span");
    \u0275\u0275text(11, "Salir");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const user_r3 = ctx;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", user_r3.username.slice(0, 2).toUpperCase(), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(user_r3.username);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", user_r3.role, " \u2022 \xC1rea: ", user_r3.areaDefault);
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
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminNavbarComponent, selectors: [["app-admin-navbar"]], inputs: { session: [1, "session"] }, outputs: { logout: "logout" }, decls: 20, vars: 1, consts: [[1, "admin-navbar", "bg-white", "border-b", "border-slate-200", "sticky", "top-0", "z-30", "shadow-2xs"], [1, "max-w-7xl", "mx-auto", "px-4", "sm:px-6", "lg:px-8", "h-16", "flex", "items-center", "justify-between", "gap-4"], [1, "flex", "items-center", "gap-3"], [1, "w-10", "h-10", "rounded-xl", "bg-[#b00725]", "text-white", "flex", "items-center", "justify-center", "font-bold", "text-lg", "shadow-sm"], [1, "flex", "items-center", "gap-2"], [1, "text-base", "font-bold", "text-slate-900", "tracking-tight"], [1, "px-2", "py-0.5", "text-[10px]", "font-bold", "uppercase", "tracking-wider", "bg-red-50", "text-[#b00725]", "border", "border-red-200", "rounded-full"], [1, "text-xs", "text-slate-500", "hidden", "sm:block"], [1, "flex", "items-center", "gap-3", "sm:gap-4"], ["routerLink", "/", 1, "text-xs", "font-medium", "text-slate-600", "hover:text-[#b00725]", "px-3", "py-1.5", "rounded-lg", "hover:bg-slate-100", "transition-colors", "flex", "items-center", "gap-1.5"], [1, "hidden", "md:inline"], [1, "h-6", "w-px", "bg-slate-200", "hidden", "sm:block"], [1, "flex", "items-center", "gap-2.5"], [1, "w-8", "h-8", "rounded-full", "bg-slate-100", "border", "border-slate-300", "flex", "items-center", "justify-center", "text-xs", "font-bold", "text-slate-700"], [1, "hidden", "sm:block", "text-left"], [1, "text-xs", "font-semibold", "text-slate-800", "leading-none"], [1, "text-[10px]", "text-slate-500", "mt-0.5"], ["type", "button", 1, "px-3", "py-1.5", "rounded-xl", "text-xs", "font-semibold", "text-red-700", "bg-red-50", "hover:bg-red-100", "border", "border-red-200", "transition-colors", "cursor-pointer", "flex", "items-center", "gap-1", 3, "click"]], template: function AdminNavbarComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "header", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
      \u0275\u0275text(4, " CBB ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div")(6, "div", 4)(7, "h1", 5);
      \u0275\u0275text(8, "Backoffice RAG");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "span", 6);
      \u0275\u0275text(10, " Admin ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(11, "p", 7);
      \u0275\u0275text(12, "Gesti\xF3n de Base de Conocimiento \u2014 Colegio Bertolt Brecht");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(13, "div", 8)(14, "a", 9)(15, "span");
      \u0275\u0275text(16, "\u{1F310}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "span", 10);
      \u0275\u0275text(18, "Ver Portal P\xFAblico");
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(19, AdminNavbarComponent_Conditional_19_Template, 12, 4);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      let tmp_0_0;
      \u0275\u0275advance(19);
      \u0275\u0275conditional((tmp_0_0 = ctx.session()) ? 19 : -1, tmp_0_0);
    }
  }, dependencies: [RouterLink], styles: ["\n.admin-navbar[_ngcontent-%COMP%] {\n  -webkit-backdrop-filter: blur(8px);\n  backdrop-filter: blur(8px);\n}"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdminNavbarComponent, [{
    type: Component,
    args: [{ selector: "app-admin-navbar", changeDetection: ChangeDetectionStrategy.OnPush, imports: [RouterLink], template: '<header class="admin-navbar bg-white border-b border-slate-200 sticky top-0 z-30 shadow-2xs">\n  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">\n    \n    <!-- Identidad Institucional -->\n    <div class="flex items-center gap-3">\n      <div class="w-10 h-10 rounded-xl bg-[#b00725] text-white flex items-center justify-center font-bold text-lg shadow-sm">\n        CBB\n      </div>\n      <div>\n        <div class="flex items-center gap-2">\n          <h1 class="text-base font-bold text-slate-900 tracking-tight">Backoffice RAG</h1>\n          <span class="px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-red-50 text-[#b00725] border border-red-200 rounded-full">\n            Admin\n          </span>\n        </div>\n        <p class="text-xs text-slate-500 hidden sm:block">Gesti\xF3n de Base de Conocimiento \u2014 Colegio Bertolt Brecht</p>\n      </div>\n    </div>\n\n    <!-- Usuario Activo y Acciones -->\n    <div class="flex items-center gap-3 sm:gap-4">\n      <a \n        routerLink="/" \n        class="text-xs font-medium text-slate-600 hover:text-[#b00725] px-3 py-1.5 rounded-lg hover:bg-slate-100 transition-colors flex items-center gap-1.5">\n        <span>\u{1F310}</span>\n        <span class="hidden md:inline">Ver Portal P\xFAblico</span>\n      </a>\n\n      @if (session(); as user) {\n        <div class="h-6 w-px bg-slate-200 hidden sm:block"></div>\n        \n        <div class="flex items-center gap-2.5">\n          <div class="w-8 h-8 rounded-full bg-slate-100 border border-slate-300 flex items-center justify-center text-xs font-bold text-slate-700">\n            {{ user.username.slice(0, 2).toUpperCase() }}\n          </div>\n          <div class="hidden sm:block text-left">\n            <div class="text-xs font-semibold text-slate-800 leading-none">{{ user.username }}</div>\n            <div class="text-[10px] text-slate-500 mt-0.5">{{ user.role }} \u2022 \xC1rea: {{ user.areaDefault }}</div>\n          </div>\n        </div>\n\n        <button\n          type="button"\n          (click)="logout.emit()"\n          class="px-3 py-1.5 rounded-xl text-xs font-semibold text-red-700 bg-red-50 hover:bg-red-100 border border-red-200 transition-colors cursor-pointer flex items-center gap-1">\n          <span>Salir</span>\n        </button>\n      }\n    </div>\n\n  </div>\n</header>\n', styles: ["/* src/app/features/backoffice/components/admin-navbar/admin-navbar.component.css */\n.admin-navbar {\n  -webkit-backdrop-filter: blur(8px);\n  backdrop-filter: blur(8px);\n}\n"] }]
  }], null, { session: [{ type: Input, args: [{ isSignal: true, alias: "session", required: true }] }], logout: [{ type: Output, args: ["logout"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminNavbarComponent, { className: "AdminNavbarComponent", filePath: "src/app/features/backoffice/components/admin-navbar/admin-navbar.component.ts", lineNumber: 12 });
})();

// src/app/features/backoffice/components/admin-stats/admin-stats.component.ts
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
  openUpload = output();
  refresh = output();
  static \u0275fac = function AdminStatsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AdminStatsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminStatsComponent, selectors: [["app-admin-stats"]], inputs: { totalDocumentos: [1, "totalDocumentos"], totalFragmentos: [1, "totalFragmentos"], isLoading: [1, "isLoading"] }, outputs: { openUpload: "openUpload", refresh: "refresh" }, decls: 51, vars: 5, consts: [[1, "space-y-6"], [1, "flex", "flex-col", "sm:flex-row", "sm:items-center", "sm:justify-between", "gap-4", "bg-white", "p-6", "rounded-2xl", "border", "border-slate-200", "shadow-2xs"], [1, "text-xl", "font-bold", "text-slate-900"], [1, "text-sm", "text-slate-500", "mt-1"], [1, "flex", "items-center", "gap-3", "shrink-0"], ["type", "button", 1, "px-4", "py-2.5", "rounded-xl", "border", "border-slate-200", "bg-white", "hover:bg-slate-50", "text-slate-700", "text-sm", "font-medium", "transition-all", "flex", "items-center", "gap-2", "cursor-pointer", "disabled:opacity-50", 3, "click", "disabled"], ["type", "button", 1, "px-5", "py-2.5", "rounded-xl", "bg-[#b00725]", "hover:bg-[#92061e]", "text-white", "text-sm", "font-semibold", "shadow-md", "shadow-red-900/15", "transition-all", "flex", "items-center", "gap-2", "cursor-pointer", "active:scale-95", 3, "click"], [1, "grid", "grid-cols-1", "sm:grid-cols-3", "gap-4"], [1, "stat-card", "bg-white", "p-5", "rounded-2xl", "border", "border-slate-200", "shadow-2xs", "flex", "items-center", "gap-4"], [1, "w-12", "h-12", "rounded-2xl", "bg-red-50", "border", "border-red-100", "text-[#b00725]", "flex", "items-center", "justify-center", "text-2xl", "shrink-0"], [1, "text-xs", "font-semibold", "text-slate-500", "uppercase", "tracking-wider"], [1, "text-2xl", "font-extrabold", "text-slate-900", "mt-0.5"], [1, "text-[11px]", "text-slate-400"], [1, "w-12", "h-12", "rounded-2xl", "bg-blue-50", "border", "border-blue-100", "text-blue-600", "flex", "items-center", "justify-center", "text-2xl", "shrink-0"], [1, "w-12", "h-12", "rounded-2xl", "bg-emerald-50", "border", "border-emerald-100", "text-emerald-600", "flex", "items-center", "justify-center", "text-2xl", "shrink-0"], [1, "text-base", "font-bold", "text-slate-900", "mt-1", "flex", "items-center", "gap-1.5"], [1, "w-2", "h-2", "rounded-full", "bg-emerald-500", "animate-pulse"]], template: function AdminStatsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h2", 2);
      \u0275\u0275text(4, "Panel de Documentos Oficiales");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(5, "p", 3);
      \u0275\u0275text(6, " Administra los reglamentos, gu\xEDas y normativas que alimentan al Asistente Virtual del colegio. ");
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
      \u0275\u0275domElementStart(13, "button", 6);
      \u0275\u0275domListener("click", function AdminStatsComponent_Template_button_click_13_listener() {
        return ctx.openUpload.emit();
      });
      \u0275\u0275domElementStart(14, "span");
      \u0275\u0275text(15, "\u2795");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(16, "span");
      \u0275\u0275text(17, "Ingestar Documento");
      \u0275\u0275domElementEnd()()()();
      \u0275\u0275domElementStart(18, "div", 7)(19, "div", 8)(20, "div", 9);
      \u0275\u0275text(21, " \u{1F4C4} ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(22, "div")(23, "div", 10);
      \u0275\u0275text(24, "Documentos Activos");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(25, "div", 11);
      \u0275\u0275text(26);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(27, "div", 12);
      \u0275\u0275text(28, "Archivos indexados en BD");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(29, "div", 8)(30, "div", 13);
      \u0275\u0275text(31, " \u{1F9E9} ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(32, "div")(33, "div", 10);
      \u0275\u0275text(34, "Fragmentos Vectoriales");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(35, "div", 11);
      \u0275\u0275text(36);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(37, "div", 12);
      \u0275\u0275text(38, "Chunks con Sentence Window (768 dim)");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(39, "div", 8)(40, "div", 14);
      \u0275\u0275text(41, " \u26A1 ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(42, "div")(43, "div", 10);
      \u0275\u0275text(44, "Motor IA Conectado");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(45, "div", 15);
      \u0275\u0275domElement(46, "span", 16);
      \u0275\u0275domElementStart(47, "span");
      \u0275\u0275text(48, "Gemini 3.8 Flash");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(49, "div", 12);
      \u0275\u0275text(50, "PostgreSQL pgvector + HNSW");
      \u0275\u0275domElementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(8);
      \u0275\u0275domProperty("disabled", ctx.isLoading());
      \u0275\u0275advance();
      \u0275\u0275classProp("animate-spin", ctx.isLoading());
      \u0275\u0275advance(17);
      \u0275\u0275textInterpolate(ctx.totalDocumentos());
      \u0275\u0275advance(10);
      \u0275\u0275textInterpolate(ctx.totalFragmentos());
    }
  }, styles: ["\n.stat-card[_ngcontent-%COMP%] {\n  transition: transform 0.2s ease, box-shadow 0.2s ease;\n}\n.stat-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.05);\n}"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdminStatsComponent, [{
    type: Component,
    args: [{ selector: "app-admin-stats", changeDetection: ChangeDetectionStrategy.OnPush, template: '<div class="space-y-6">\n  <!-- Cabecera de Bienvenida y Acci\xF3n Principal -->\n  <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs">\n    <div>\n      <h2 class="text-xl font-bold text-slate-900">Panel de Documentos Oficiales</h2>\n      <p class="text-sm text-slate-500 mt-1">\n        Administra los reglamentos, gu\xEDas y normativas que alimentan al Asistente Virtual del colegio.\n      </p>\n    </div>\n\n    <div class="flex items-center gap-3 shrink-0">\n      <button\n        type="button"\n        (click)="refresh.emit()"\n        [disabled]="isLoading()"\n        class="px-4 py-2.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 text-sm font-medium transition-all flex items-center gap-2 cursor-pointer disabled:opacity-50">\n        <span [class.animate-spin]="isLoading()">\u{1F504}</span>\n        <span>Actualizar</span>\n      </button>\n\n      <button\n        type="button"\n        (click)="openUpload.emit()"\n        class="px-5 py-2.5 rounded-xl bg-[#b00725] hover:bg-[#92061e] text-white text-sm font-semibold shadow-md shadow-red-900/15 transition-all flex items-center gap-2 cursor-pointer active:scale-95">\n        <span>\u2795</span>\n        <span>Ingestar Documento</span>\n      </button>\n    </div>\n  </div>\n\n  <!-- Tarjetas de Indicadores (KPIs) -->\n  <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">\n    \n    <!-- KPI 1: Total Documentos -->\n    <div class="stat-card bg-white p-5 rounded-2xl border border-slate-200 shadow-2xs flex items-center gap-4">\n      <div class="w-12 h-12 rounded-2xl bg-red-50 border border-red-100 text-[#b00725] flex items-center justify-center text-2xl shrink-0">\n        \u{1F4C4}\n      </div>\n      <div>\n        <div class="text-xs font-semibold text-slate-500 uppercase tracking-wider">Documentos Activos</div>\n        <div class="text-2xl font-extrabold text-slate-900 mt-0.5">{{ totalDocumentos() }}</div>\n        <div class="text-[11px] text-slate-400">Archivos indexados en BD</div>\n      </div>\n    </div>\n\n    <!-- KPI 2: Total Fragmentos Vectoriales -->\n    <div class="stat-card bg-white p-5 rounded-2xl border border-slate-200 shadow-2xs flex items-center gap-4">\n      <div class="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 text-blue-600 flex items-center justify-center text-2xl shrink-0">\n        \u{1F9E9}\n      </div>\n      <div>\n        <div class="text-xs font-semibold text-slate-500 uppercase tracking-wider">Fragmentos Vectoriales</div>\n        <div class="text-2xl font-extrabold text-slate-900 mt-0.5">{{ totalFragmentos() }}</div>\n        <div class="text-[11px] text-slate-400">Chunks con Sentence Window (768 dim)</div>\n      </div>\n    </div>\n\n    <!-- KPI 3: Estado del Motor RAG -->\n    <div class="stat-card bg-white p-5 rounded-2xl border border-slate-200 shadow-2xs flex items-center gap-4">\n      <div class="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-100 text-emerald-600 flex items-center justify-center text-2xl shrink-0">\n        \u26A1\n      </div>\n      <div>\n        <div class="text-xs font-semibold text-slate-500 uppercase tracking-wider">Motor IA Conectado</div>\n        <div class="text-base font-bold text-slate-900 mt-1 flex items-center gap-1.5">\n          <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>\n          <span>Gemini 3.8 Flash</span>\n        </div>\n        <div class="text-[11px] text-slate-400">PostgreSQL pgvector + HNSW</div>\n      </div>\n    </div>\n\n  </div>\n</div>\n', styles: ["/* src/app/features/backoffice/components/admin-stats/admin-stats.component.css */\n.stat-card {\n  transition: transform 0.2s ease, box-shadow 0.2s ease;\n}\n.stat-card:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.05);\n}\n"] }]
  }], null, { totalDocumentos: [{ type: Input, args: [{ isSignal: true, alias: "totalDocumentos", required: false }] }], totalFragmentos: [{ type: Input, args: [{ isSignal: true, alias: "totalFragmentos", required: false }] }], isLoading: [{ type: Input, args: [{ isSignal: true, alias: "isLoading", required: false }] }], openUpload: [{ type: Output, args: ["openUpload"] }], refresh: [{ type: Output, args: ["refresh"] }] });
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
    \u0275\u0275domElementStart(0, "button", 14);
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
    \u0275\u0275domElementStart(0, "div", 12);
    \u0275\u0275domElement(1, "div", 15);
    \u0275\u0275domElementStart(2, "div", 16);
    \u0275\u0275text(3, "Consultando base de datos vectorial...");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(4, "p", 17);
    \u0275\u0275text(5, "Sincronizando registros de PostgreSQL + pgvector");
    \u0275\u0275domElementEnd()();
  }
}
function DocumentTableComponent_Conditional_27_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "h3", 19);
    \u0275\u0275text(1, "A\xFAn no hay documentos indexados");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(2, "p", 20);
    \u0275\u0275text(3, " Comienza subiendo reglamentos en PDF o Word para que el Asistente Virtual pueda responder consultas oficiales. ");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(4, "button", 21);
    \u0275\u0275domListener("click", function DocumentTableComponent_Conditional_27_Conditional_3_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.openUpload.emit());
    });
    \u0275\u0275text(5, " \u2795 Subir primer documento ");
    \u0275\u0275domElementEnd();
  }
}
function DocumentTableComponent_Conditional_27_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "h3", 19);
    \u0275\u0275text(1, "Sin coincidencias para tu b\xFAsqueda");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(2, "p", 20);
    \u0275\u0275text(3);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(4, "button", 22);
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
    \u0275\u0275domElementStart(0, "div", 13)(1, "div", 18);
    \u0275\u0275text(2, " \u{1F4C2} ");
    \u0275\u0275domElementEnd();
    \u0275\u0275conditionalCreate(3, DocumentTableComponent_Conditional_27_Conditional_3_Template, 6, 0)(4, DocumentTableComponent_Conditional_27_Conditional_4_Template, 6, 1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r2.documentos().length === 0 ? 3 : 4);
  }
}
function DocumentTableComponent_Conditional_28_For_18_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElement(0, "span", 45);
    \u0275\u0275domElementStart(1, "span");
    \u0275\u0275text(2, "Eliminando...");
    \u0275\u0275domElementEnd();
  }
}
function DocumentTableComponent_Conditional_28_For_18_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span");
    \u0275\u0275text(1, "\u{1F5D1}\uFE0F");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(2, "span");
    \u0275\u0275text(3, "Eliminar");
    \u0275\u0275domElementEnd();
  }
}
function DocumentTableComponent_Conditional_28_For_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "tr", 30)(1, "td", 35)(2, "span", 36);
    \u0275\u0275text(3);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(4, "td", 26)(5, "div", 37)(6, "span", 38);
    \u0275\u0275text(7, "\u{1F4D8}");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(8, "div")(9, "div", 39);
    \u0275\u0275text(10);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(11, "div", 40);
    \u0275\u0275text(12, "Vectorizado con gemini-embedding-001");
    \u0275\u0275domElementEnd()()()();
    \u0275\u0275domElementStart(13, "td", 26)(14, "span", 41);
    \u0275\u0275text(15);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(16, "td", 27)(17, "span", 42)(18, "span");
    \u0275\u0275text(19, "\u{1F9E9}");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(20, "span");
    \u0275\u0275text(21);
    \u0275\u0275domElementEnd()()();
    \u0275\u0275domElementStart(22, "td", 43);
    \u0275\u0275text(23);
    \u0275\u0275pipe(24, "date");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(25, "td", 28)(26, "button", 44);
    \u0275\u0275domListener("click", function DocumentTableComponent_Conditional_28_For_18_Template_button_click_26_listener() {
      const doc_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.requestDelete.emit(doc_r7));
    });
    \u0275\u0275conditionalCreate(27, DocumentTableComponent_Conditional_28_For_18_Conditional_27_Template, 3, 0)(28, DocumentTableComponent_Conditional_28_For_18_Conditional_28_Template, 4, 0);
    \u0275\u0275domElementEnd()()();
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
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(24, 7, doc_r7.creado_en, "dd/MM/yyyy HH:mm"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275domProperty("disabled", ctx_r2.deletingId() === doc_r7.documento_id);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.deletingId() === doc_r7.documento_id ? 27 : 28);
  }
}
function DocumentTableComponent_Conditional_28_Conditional_31_For_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "button", 48);
    \u0275\u0275domListener("click", function DocumentTableComponent_Conditional_28_Conditional_31_For_4_Template_button_click_0_listener() {
      const page_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.goToPage(page_r10));
    });
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const page_r10 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("bg-[#b00725]", ctx_r2.currentPage() === page_r10)("text-white", ctx_r2.currentPage() === page_r10)("border-[#b00725]", ctx_r2.currentPage() === page_r10)("bg-white", ctx_r2.currentPage() !== page_r10)("text-slate-700", ctx_r2.currentPage() !== page_r10);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", page_r10, " ");
  }
}
function DocumentTableComponent_Conditional_28_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "div", 34)(1, "button", 46);
    \u0275\u0275domListener("click", function DocumentTableComponent_Conditional_28_Conditional_31_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.goToPage(ctx_r2.currentPage() - 1));
    });
    \u0275\u0275text(2, " \u2190 Anterior ");
    \u0275\u0275domElementEnd();
    \u0275\u0275repeaterCreate(3, DocumentTableComponent_Conditional_28_Conditional_31_For_4_Template, 2, 11, "button", 47, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275domElementStart(5, "button", 46);
    \u0275\u0275domListener("click", function DocumentTableComponent_Conditional_28_Conditional_31_Template_button_click_5_listener() {
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
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r2.pageNumbers());
    \u0275\u0275advance(2);
    \u0275\u0275domProperty("disabled", ctx_r2.currentPage() === ctx_r2.totalPages());
  }
}
function DocumentTableComponent_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 23)(1, "table", 24)(2, "thead")(3, "tr", 25)(4, "th", 26);
    \u0275\u0275text(5, "ID Documento");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(6, "th", 26);
    \u0275\u0275text(7, "Fuente Oficial / T\xEDtulo");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(8, "th", 26);
    \u0275\u0275text(9, "\xC1rea Origen");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(10, "th", 27);
    \u0275\u0275text(11, "Fragmentos (Chunks)");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(12, "th", 26);
    \u0275\u0275text(13, "Fecha Indexaci\xF3n");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(14, "th", 28);
    \u0275\u0275text(15, "Acciones");
    \u0275\u0275domElementEnd()()();
    \u0275\u0275domElementStart(16, "tbody", 29);
    \u0275\u0275repeaterCreate(17, DocumentTableComponent_Conditional_28_For_18_Template, 29, 10, "tr", 30, _forTrack0);
    \u0275\u0275domElementEnd()()();
    \u0275\u0275domElementStart(19, "div", 31)(20, "div", 32);
    \u0275\u0275text(21, " Mostrando ");
    \u0275\u0275domElementStart(22, "span", 33);
    \u0275\u0275text(23);
    \u0275\u0275domElementEnd();
    \u0275\u0275text(24, " a ");
    \u0275\u0275domElementStart(25, "span", 33);
    \u0275\u0275text(26);
    \u0275\u0275domElementEnd();
    \u0275\u0275text(27, " de ");
    \u0275\u0275domElementStart(28, "span", 33);
    \u0275\u0275text(29);
    \u0275\u0275domElementEnd();
    \u0275\u0275text(30, " registros ");
    \u0275\u0275domElementEnd();
    \u0275\u0275conditionalCreate(31, DocumentTableComponent_Conditional_28_Conditional_31_Template, 7, 2, "div", 34);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(17);
    \u0275\u0275repeater(ctx_r2.paginatedDocuments());
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r2.startIndex());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.endIndex());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.filteredDocuments().length);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.totalPages() > 1 ? 31 : -1);
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
  pageSize = signal(10, ...ngDevMode ? [{ debugName: "pageSize" }] : (
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
      const matchesArea = area === "TODOS" || doc.area_origen?.toUpperCase() === area;
      const matchesQuery = !query || doc.documento_id.toLowerCase().includes(query) || doc.fuente.toLowerCase().includes(query) || doc.area_origen.toLowerCase().includes(query);
      return matchesArea && matchesQuery;
    });
  }, ...ngDevMode ? [{ debugName: "filteredDocuments" }] : (
    /* istanbul ignore next */
    []
  ));
  // Total de páginas
  totalPages = computed(() => {
    const total = this.filteredDocuments().length;
    return Math.max(1, Math.ceil(total / this.pageSize()));
  }, ...ngDevMode ? [{ debugName: "totalPages" }] : (
    /* istanbul ignore next */
    []
  ));
  // Documentos de la página actual
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
    const page = Math.min(this.currentPage(), this.totalPages());
    return (page - 1) * this.pageSize() + 1;
  }, ...ngDevMode ? [{ debugName: "startIndex" }] : (
    /* istanbul ignore next */
    []
  ));
  endIndex = computed(() => {
    const total = this.filteredDocuments().length;
    if (total === 0)
      return 0;
    const page = Math.min(this.currentPage(), this.totalPages());
    return Math.min(page * this.pageSize(), total);
  }, ...ngDevMode ? [{ debugName: "endIndex" }] : (
    /* istanbul ignore next */
    []
  ));
  pageNumbers = computed(() => {
    const total = this.totalPages();
    return Array.from({ length: total }, (_, i) => i + 1);
  }, ...ngDevMode ? [{ debugName: "pageNumbers" }] : (
    /* istanbul ignore next */
    []
  ));
  onSearchChange(event) {
    const value = event.target.value;
    this.searchQuery.set(value);
    this.currentPage.set(1);
  }
  onAreaChange(event) {
    const value = event.target.value;
    this.selectedArea.set(value);
    this.currentPage.set(1);
  }
  onPageSizeChange(event) {
    const value = Number(event.target.value);
    this.pageSize.set(value);
    this.currentPage.set(1);
  }
  clearFilters() {
    this.searchQuery.set("");
    this.selectedArea.set("TODOS");
    this.currentPage.set(1);
  }
  goToPage(page) {
    if (page >= 1 && page <= this.totalPages()) {
      this.currentPage.set(page);
    }
  }
  static \u0275fac = function DocumentTableComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DocumentTableComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DocumentTableComponent, selectors: [["app-document-table"]], inputs: { documentos: [1, "documentos"], isLoading: [1, "isLoading"], deletingId: [1, "deletingId"] }, outputs: { requestDelete: "requestDelete", openUpload: "openUpload" }, decls: 29, vars: 9, consts: [[1, "bg-white", "rounded-2xl", "border", "border-slate-200", "shadow-2xs", "overflow-hidden"], [1, "p-4", "sm:p-5", "border-b", "border-slate-200", "bg-slate-50/50", "flex", "flex-col", "md:flex-row", "md:items-center", "justify-between", "gap-3"], [1, "relative", "flex-1", "max-w-md"], [1, "absolute", "inset-y-0", "left-3", "flex", "items-center", "text-slate-400", "text-sm"], ["type", "text", "placeholder", "Buscar por ID, nombre de fuente o \xE1rea...", 1, "w-full", "pl-9", "pr-4", "py-2", "rounded-xl", "border", "border-slate-200", "bg-white", "text-sm", "text-slate-800", "placeholder-slate-400", "focus:outline-hidden", "focus:border-[#b00725]", "focus:ring-2", "focus:ring-red-100", "transition-all", 3, "input", "value"], [1, "flex", "flex-wrap", "items-center", "gap-2.5"], [1, "flex", "items-center", "gap-2"], [1, "text-xs", "font-semibold", "text-slate-500"], [1, "px-3", "py-2", "rounded-xl", "border", "border-slate-200", "bg-white", "text-xs", "font-semibold", "text-slate-700", "focus:outline-hidden", "focus:border-[#b00725]", "cursor-pointer", 3, "change", "value"], [3, "value"], [1, "px-2.5", "py-2", "rounded-xl", "border", "border-slate-200", "bg-white", "text-xs", "font-semibold", "text-slate-700", "focus:outline-hidden", "focus:border-[#b00725]", "cursor-pointer", 3, "change", "value"], ["type", "button", 1, "px-3", "py-2", "rounded-xl", "text-xs", "font-semibold", "text-[#b00725]", "hover:bg-red-50", "transition-colors", "cursor-pointer"], [1, "p-12", "flex", "flex-col", "items-center", "justify-center", "text-center", "space-y-3"], [1, "p-12", "flex", "flex-col", "items-center", "justify-center", "text-center"], ["type", "button", 1, "px-3", "py-2", "rounded-xl", "text-xs", "font-semibold", "text-[#b00725]", "hover:bg-red-50", "transition-colors", "cursor-pointer", 3, "click"], [1, "w-10", "h-10", "border-4", "border-red-200", "border-t-[#b00725]", "rounded-full", "animate-spin"], [1, "text-sm", "font-semibold", "text-slate-700"], [1, "text-xs", "text-slate-400"], [1, "w-14", "h-14", "rounded-2xl", "bg-slate-100", "flex", "items-center", "justify-center", "text-2xl", "mb-3"], [1, "text-base", "font-bold", "text-slate-800"], [1, "text-xs", "text-slate-500", "max-w-sm", "mt-1", "mb-4"], ["type", "button", 1, "px-4", "py-2", "rounded-xl", "bg-[#b00725]", "text-white", "text-xs", "font-semibold", "hover:bg-[#92061e]", "transition-colors", "cursor-pointer", 3, "click"], ["type", "button", 1, "px-4", "py-2", "rounded-xl", "border", "border-slate-200", "text-slate-700", "text-xs", "font-semibold", "hover:bg-slate-50", "transition-colors", "cursor-pointer", 3, "click"], [1, "overflow-x-auto"], [1, "w-full", "text-left", "border-collapse"], [1, "bg-slate-50/80", "border-b", "border-slate-200", "text-[11px]", "font-bold", "text-slate-500", "uppercase", "tracking-wider"], [1, "py-3.5", "px-4"], [1, "py-3.5", "px-4", "text-center"], [1, "py-3.5", "px-4", "text-right"], [1, "divide-y", "divide-slate-200/70", "text-sm"], [1, "doc-row", "hover:bg-slate-50/90", "transition-colors"], [1, "p-4", "border-t", "border-slate-200", "bg-slate-50/50", "flex", "flex-col", "sm:flex-row", "items-center", "justify-between", "gap-3"], [1, "text-xs", "text-slate-500"], [1, "font-bold", "text-slate-800"], [1, "flex", "items-center", "gap-1.5"], [1, "py-3.5", "px-4", "font-mono", "text-xs", "font-semibold", "text-slate-700"], [1, "px-2", "py-1", "rounded-md", "bg-slate-100", "border", "border-slate-200"], [1, "flex", "items-center", "gap-2.5"], [1, "text-base"], [1, "font-semibold", "text-slate-900"], [1, "text-[11px]", "text-slate-400"], [1, "inline-flex", "items-center", "px-2.5", "py-0.5", "rounded-full", "text-xs", "font-semibold", "bg-red-50", "text-[#b00725]", "border", "border-red-200/70"], [1, "inline-flex", "items-center", "gap-1", "px-2.5", "py-1", "rounded-lg", "bg-blue-50", "text-blue-700", "font-bold", "text-xs", "border", "border-blue-200/60"], [1, "py-3.5", "px-4", "text-xs", "text-slate-500"], ["type", "button", 1, "inline-flex", "items-center", "gap-1.5", "px-3", "py-1.5", "rounded-xl", "text-xs", "font-semibold", "text-red-600", "hover:text-white", "hover:bg-red-600", "border", "border-red-200", "hover:border-red-600", "transition-all", "cursor-pointer", "disabled:opacity-50", 3, "click", "disabled"], [1, "w-3.5", "h-3.5", "border-2", "border-current", "border-t-transparent", "rounded-full", "animate-spin"], ["type", "button", 1, "px-3", "py-1.5", "rounded-lg", "border", "border-slate-200", "bg-white", "hover:bg-slate-100", "text-xs", "font-semibold", "text-slate-700", "disabled:opacity-40", "disabled:cursor-not-allowed", "cursor-pointer", 3, "click", "disabled"], ["type", "button", 1, "w-8", "h-8", "rounded-lg", "border", "border-slate-200", "text-xs", "font-bold", "transition-colors", "cursor-pointer", 3, "bg-[#b00725]", "text-white", "border-[#b00725]", "bg-white", "text-slate-700"], ["type", "button", 1, "w-8", "h-8", "rounded-lg", "border", "border-slate-200", "text-xs", "font-bold", "transition-colors", "cursor-pointer", 3, "click"]], template: function DocumentTableComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "span", 3);
      \u0275\u0275text(4, "\u{1F50D}");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(5, "input", 4);
      \u0275\u0275domListener("input", function DocumentTableComponent_Template_input_input_5_listener($event) {
        return ctx.onSearchChange($event);
      });
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(6, "div", 5)(7, "div", 6)(8, "label", 7);
      \u0275\u0275text(9, "\xC1rea:");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(10, "select", 8);
      \u0275\u0275domListener("change", function DocumentTableComponent_Template_select_change_10_listener($event) {
        return ctx.onAreaChange($event);
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
      \u0275\u0275domElementStart(17, "option", 9);
      \u0275\u0275text(18, "5 filas");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(19, "option", 9);
      \u0275\u0275text(20, "10 filas");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(21, "option", 9);
      \u0275\u0275text(22, "20 filas");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(23, "option", 9);
      \u0275\u0275text(24, "50 filas");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275conditionalCreate(25, DocumentTableComponent_Conditional_25_Template, 2, 0, "button", 11);
      \u0275\u0275domElementEnd()();
      \u0275\u0275conditionalCreate(26, DocumentTableComponent_Conditional_26_Template, 6, 0, "div", 12)(27, DocumentTableComponent_Conditional_27_Template, 5, 1, "div", 13)(28, DocumentTableComponent_Conditional_28_Template, 32, 4);
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
      \u0275\u0275domProperty("value", 5);
      \u0275\u0275advance(2);
      \u0275\u0275domProperty("value", 10);
      \u0275\u0275advance(2);
      \u0275\u0275domProperty("value", 20);
      \u0275\u0275advance(2);
      \u0275\u0275domProperty("value", 50);
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
        (input)="onSearchChange($event)"
        placeholder="Buscar por ID, nombre de fuente o \xE1rea..."
        class="w-full pl-9 pr-4 py-2 rounded-xl border border-slate-200 bg-white text-sm text-slate-800 placeholder-slate-400 focus:outline-hidden focus:border-[#b00725] focus:ring-2 focus:ring-red-100 transition-all"
      />
    </div>

    <!-- Filtros por \xC1rea y Tama\xF1o de P\xE1gina -->
    <div class="flex flex-wrap items-center gap-2.5">
      <div class="flex items-center gap-2">
        <label class="text-xs font-semibold text-slate-500">\xC1rea:</label>
        <select
          [value]="selectedArea()"
          (change)="onAreaChange($event)"
          class="px-3 py-2 rounded-xl border border-slate-200 bg-white text-xs font-semibold text-slate-700 focus:outline-hidden focus:border-[#b00725] cursor-pointer">
          @for (area of areasDisponibles(); track area) {
            <option [value]="area">{{ area === 'TODOS' ? 'Todas las \xE1reas' : area }}</option>
          }
        </select>
      </div>

      <div class="flex items-center gap-2">
        <label class="text-xs font-semibold text-slate-500">Mostrar:</label>
        <select
          [value]="pageSize()"
          (change)="onPageSizeChange($event)"
          class="px-2.5 py-2 rounded-xl border border-slate-200 bg-white text-xs font-semibold text-slate-700 focus:outline-hidden focus:border-[#b00725] cursor-pointer">
          <option [value]="5">5 filas</option>
          <option [value]="10">10 filas</option>
          <option [value]="20">20 filas</option>
          <option [value]="50">50 filas</option>
        </select>
      </div>

      @if (searchQuery() || selectedArea() !== 'TODOS') {
        <button
          type="button"
          (click)="clearFilters()"
          class="px-3 py-2 rounded-xl text-xs font-semibold text-[#b00725] hover:bg-red-50 transition-colors cursor-pointer">
          Limpiar filtros
        </button>
      }
    </div>
  </div>

  <!-- Estado Cargando Tabla -->
  @if (isLoading()) {
    <div class="p-12 flex flex-col items-center justify-center text-center space-y-3">
      <div class="w-10 h-10 border-4 border-red-200 border-t-[#b00725] rounded-full animate-spin"></div>
      <div class="text-sm font-semibold text-slate-700">Consultando base de datos vectorial...</div>
      <p class="text-xs text-slate-400">Sincronizando registros de PostgreSQL + pgvector</p>
    </div>
  } @else if (filteredDocuments().length === 0) {
    <!-- Estado Vac\xEDo -->
    <div class="p-12 flex flex-col items-center justify-center text-center">
      <div class="w-14 h-14 rounded-2xl bg-slate-100 flex items-center justify-center text-2xl mb-3">
        \u{1F4C2}
      </div>
      @if (documentos().length === 0) {
        <h3 class="text-base font-bold text-slate-800">A\xFAn no hay documentos indexados</h3>
        <p class="text-xs text-slate-500 max-w-sm mt-1 mb-4">
          Comienza subiendo reglamentos en PDF o Word para que el Asistente Virtual pueda responder consultas oficiales.
        </p>
        <button
          type="button"
          (click)="openUpload.emit()"
          class="px-4 py-2 rounded-xl bg-[#b00725] text-white text-xs font-semibold hover:bg-[#92061e] transition-colors cursor-pointer">
          \u2795 Subir primer documento
        </button>
      } @else {
        <h3 class="text-base font-bold text-slate-800">Sin coincidencias para tu b\xFAsqueda</h3>
        <p class="text-xs text-slate-500 max-w-sm mt-1 mb-4">
          No se encontraron documentos que coincidan con "{{ searchQuery() }}" en el \xE1rea seleccionada.
        </p>
        <button
          type="button"
          (click)="clearFilters()"
          class="px-4 py-2 rounded-xl border border-slate-200 text-slate-700 text-xs font-semibold hover:bg-slate-50 transition-colors cursor-pointer">
          Restablecer filtros
        </button>
      }
    </div>
  } @else {
    <!-- Tabla de Documentos -->
    <div class="overflow-x-auto">
      <table class="w-full text-left border-collapse">
        <thead>
          <tr class="bg-slate-50/80 border-b border-slate-200 text-[11px] font-bold text-slate-500 uppercase tracking-wider">
            <th class="py-3.5 px-4">ID Documento</th>
            <th class="py-3.5 px-4">Fuente Oficial / T\xEDtulo</th>
            <th class="py-3.5 px-4">\xC1rea Origen</th>
            <th class="py-3.5 px-4 text-center">Fragmentos (Chunks)</th>
            <th class="py-3.5 px-4">Fecha Indexaci\xF3n</th>
            <th class="py-3.5 px-4 text-right">Acciones</th>
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
                    <div class="font-semibold text-slate-900">{{ doc.fuente }}</div>
                    <div class="text-[11px] text-slate-400">Vectorizado con gemini-embedding-001</div>
                  </div>
                </div>
              </td>

              <!-- \xC1rea -->
              <td class="py-3.5 px-4">
                <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-red-50 text-[#b00725] border border-red-200/70">
                  {{ doc.area_origen }}
                </span>
              </td>

              <!-- Fragmentos -->
              <td class="py-3.5 px-4 text-center">
                <span class="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-blue-50 text-blue-700 font-bold text-xs border border-blue-200/60">
                  <span>\u{1F9E9}</span>
                  <span>{{ doc.fragmentos }}</span>
                </span>
              </td>

              <!-- Fecha -->
              <td class="py-3.5 px-4 text-xs text-slate-500">
                {{ doc.creado_en | date:'dd/MM/yyyy HH:mm' }}
              </td>

              <!-- Acciones -->
              <td class="py-3.5 px-4 text-right">
                <button
                  type="button"
                  (click)="requestDelete.emit(doc)"
                  [disabled]="deletingId() === doc.documento_id"
                  class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold text-red-600 hover:text-white hover:bg-red-600 border border-red-200 hover:border-red-600 transition-all cursor-pointer disabled:opacity-50">
                  @if (deletingId() === doc.documento_id) {
                    <span class="w-3.5 h-3.5 border-2 border-current border-t-transparent rounded-full animate-spin"></span>
                    <span>Eliminando...</span>
                  } @else {
                    <span>\u{1F5D1}\uFE0F</span>
                    <span>Eliminar</span>
                  }
                </button>
              </td>

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
            class="px-3 py-1.5 rounded-lg border border-slate-200 bg-white hover:bg-slate-100 text-xs font-semibold text-slate-700 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer">
            \u2190 Anterior
          </button>

          @for (page of pageNumbers(); track page) {
            <button
              type="button"
              (click)="goToPage(page)"
              [class.bg-[#b00725]]="currentPage() === page"
              [class.text-white]="currentPage() === page"
              [class.border-[#b00725]]="currentPage() === page"
              [class.bg-white]="currentPage() !== page"
              [class.text-slate-700]="currentPage() !== page"
              class="w-8 h-8 rounded-lg border border-slate-200 text-xs font-bold transition-colors cursor-pointer">
              {{ page }}
            </button>
          }

          <button
            type="button"
            (click)="goToPage(currentPage() + 1)"
            [disabled]="currentPage() === totalPages()"
            class="px-3 py-1.5 rounded-lg border border-slate-200 bg-white hover:bg-slate-100 text-xs font-semibold text-slate-700 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer">
            Siguiente \u2192
          </button>
        </div>
      }
    </div>
  }

</div>
`, styles: ["/* src/app/features/backoffice/components/document-table/document-table.component.css */\n.doc-row {\n  transition: background-color 0.15s ease;\n}\n"] }]
  }], null, { documentos: [{ type: Input, args: [{ isSignal: true, alias: "documentos", required: true }] }], isLoading: [{ type: Input, args: [{ isSignal: true, alias: "isLoading", required: false }] }], deletingId: [{ type: Input, args: [{ isSignal: true, alias: "deletingId", required: false }] }], requestDelete: [{ type: Output, args: ["requestDelete"] }], openUpload: [{ type: Output, args: ["openUpload"] }] });
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
    \u0275\u0275text(9, " Soporta PDF, Word (.docx), PowerPoint (.pptx), TXT, MD o CSV (M\xE1x. 25 MB) ");
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("border-[#b00725]", ctx_r1.isDragging())("bg-red-50/50", ctx_r1.isDragging());
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
    \u0275\u0275text(0, " Paso 2/3: Segmentando oraciones con SentenceWindowTextSplitter... ");
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
    \u0275\u0275domElementStart(9, "p", 46);
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
    \u0275\u0275domElement(0, "span", 47);
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
    \u0275\u0275conditionalCreate(14, DocumentUploadModalComponent_Conditional_0_Conditional_14_Template, 10, 4, "div", 9)(15, DocumentUploadModalComponent_Conditional_0_Conditional_15_Template, 10, 3, "div", 10);
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
    const allowedExtensions = [".pdf", ".docx", ".pptx", ".txt", ".md", ".csv"];
    const lowerName = file.name.toLowerCase();
    const isValidExt = allowedExtensions.some((ext) => lowerName.endsWith(ext));
    if (!isValidExt) {
      this.validationError.set("Formato no permitido. Sube archivos .pdf, .docx, .pptx, .txt, .md o .csv");
      return;
    }
    const maxBytes = 25 * 1024 * 1024;
    if (file.size > maxBytes) {
      this.validationError.set("El archivo supera el l\xEDmite m\xE1ximo permitido de 25 MB.");
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
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DocumentUploadModalComponent, selectors: [["app-document-upload-modal"]], inputs: { isOpen: [1, "isOpen"], isUploading: [1, "isUploading"], defaultArea: [1, "defaultArea"] }, outputs: { close: "close", upload: "upload" }, decls: 1, vars: 1, consts: [[1, "fixed", "inset-0", "z-50", "flex", "items-center", "justify-center", "p-4", "bg-slate-900/60", "backdrop-blur-xs", "animate-in", "fade-in", "duration-150"], [1, "modal-card", "bg-white", "w-full", "max-w-lg", "rounded-3xl", "shadow-2xl", "border", "border-slate-200", "overflow-hidden"], [1, "px-6", "py-4", "bg-[#b00725]", "text-white", "flex", "items-center", "justify-between"], [1, "flex", "items-center", "gap-2.5"], [1, "text-xl"], [1, "text-base", "font-bold", "leading-tight"], [1, "text-[11px]", "text-red-100"], ["type", "button", 1, "w-8", "h-8", "rounded-full", "bg-white/15", "hover:bg-white/25", "flex", "items-center", "justify-center", "text-white", "transition-colors", "cursor-pointer", "disabled:opacity-40", 3, "click", "disabled"], [1, "p-6", "space-y-4", 3, "submit"], [1, "border-2", "border-dashed", "border-slate-300", "hover:border-[#b00725]", "rounded-2xl", "p-6", "text-center", "transition-all", "cursor-pointer", "relative", 3, "border-[#b00725]", "bg-red-50/50"], [1, "p-3.5", "rounded-2xl", "bg-slate-50", "border", "border-slate-200", "flex", "items-center", "justify-between", "gap-3"], [1, "p-3", "rounded-xl", "bg-red-50", "border", "border-red-200", "text-xs", "font-medium", "text-red-700", "flex", "items-center", "gap-2"], [1, "grid", "grid-cols-1", "sm:grid-cols-2", "gap-3.5"], [1, "block", "text-xs", "font-bold", "text-slate-700", "mb-1"], ["type", "text", "placeholder", "Ej: doc_reglamento_2026", "required", "", 1, "w-full", "px-3.5", "py-2", "rounded-xl", "border", "border-slate-200", "text-sm", "text-slate-800", "font-mono", "focus:outline-hidden", "focus:border-[#b00725]", "focus:ring-2", "focus:ring-red-100", "disabled:bg-slate-100", 3, "input", "value", "disabled"], [1, "text-[10px]", "text-slate-400"], [1, "w-full", "px-3.5", "py-2", "rounded-xl", "border", "border-slate-200", "text-sm", "text-slate-800", "bg-white", "focus:outline-hidden", "focus:border-[#b00725]", "disabled:bg-slate-100", 3, "change", "value", "disabled"], ["value", "GENERAL"], ["value", "ADMISIONES"], ["value", "SECRETARIA"], ["value", "TESORERIA"], ["value", "DIRECCION"], ["value", "PSICOLOGIA"], ["type", "text", "placeholder", "Ej: Gu\xEDa Oficial de Matr\xEDcula y Pensiones 2026", "required", "", 1, "w-full", "px-3.5", "py-2", "rounded-xl", "border", "border-slate-200", "text-sm", "text-slate-800", "focus:outline-hidden", "focus:border-[#b00725]", "focus:ring-2", "focus:ring-red-100", "disabled:bg-slate-100", 3, "input", "value", "disabled"], [1, "p-4", "rounded-2xl", "bg-slate-900", "text-white", "space-y-3"], [1, "pt-2", "flex", "items-center", "justify-end", "gap-2.5", "border-t", "border-slate-100"], ["type", "button", 1, "px-4", "py-2.5", "rounded-xl", "border", "border-slate-200", "text-xs", "font-semibold", "text-slate-600", "hover:bg-slate-50", "transition-colors", "cursor-pointer", "disabled:opacity-40", 3, "click", "disabled"], ["type", "submit", 1, "px-5", "py-2.5", "rounded-xl", "bg-[#b00725]", "hover:bg-[#92061e]", "text-white", "text-xs", "font-bold", "shadow-md", "shadow-red-900/20", "transition-all", "flex", "items-center", "gap-2", "cursor-pointer", "disabled:opacity-40", "disabled:cursor-not-allowed", 3, "disabled"], [1, "border-2", "border-dashed", "border-slate-300", "hover:border-[#b00725]", "rounded-2xl", "p-6", "text-center", "transition-all", "cursor-pointer", "relative", 3, "dragover", "dragleave", "drop"], ["type", "file", "accept", ".pdf,.docx,.pptx,.txt,.md,.csv", 1, "absolute", "inset-0", "w-full", "h-full", "opacity-0", "cursor-pointer", 3, "change"], [1, "w-12", "h-12", "rounded-2xl", "bg-red-50", "text-[#b00725]", "flex", "items-center", "justify-center", "text-2xl", "mx-auto", "mb-2.5"], [1, "text-sm", "font-bold", "text-slate-800"], [1, "text-[#b00725]", "underline"], [1, "text-xs", "text-slate-400", "mt-1"], [1, "flex", "items-center", "gap-3", "min-w-0"], [1, "w-10", "h-10", "rounded-xl", "bg-red-100", "text-[#b00725]", "flex", "items-center", "justify-center", "text-lg", "shrink-0"], [1, "min-w-0"], [1, "text-sm", "font-bold", "text-slate-800", "truncate"], [1, "text-xs", "text-slate-500"], ["type", "button", 1, "px-2.5", "py-1", "rounded-lg", "text-xs", "font-semibold", "text-red-600", "hover:bg-red-50", "transition-colors", "cursor-pointer", "shrink-0"], ["type", "button", 1, "px-2.5", "py-1", "rounded-lg", "text-xs", "font-semibold", "text-red-600", "hover:bg-red-50", "transition-colors", "cursor-pointer", "shrink-0", 3, "click"], [1, "flex", "items-center", "gap-3"], [1, "w-6", "h-6", "border-3", "border-red-400", "border-t-white", "rounded-full", "animate-spin", "shrink-0"], [1, "text-xs", "font-bold", "tracking-wide"], [1, "w-full", "h-1.5", "bg-slate-700", "rounded-full", "overflow-hidden"], [1, "h-full", "bg-[#e11d48]", "transition-all", "duration-500"], [1, "text-[11px]", "text-slate-300"], [1, "w-4", "h-4", "border-2", "border-white", "border-t-transparent", "rounded-full", "animate-spin"]], template: function DocumentUploadModalComponent_Template(rf, ctx) {
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
  <div class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-150">
    
    <div class="modal-card bg-white w-full max-w-lg rounded-3xl shadow-2xl border border-slate-200 overflow-hidden">
      
      <!-- Cabecera del Modal -->
      <div class="px-6 py-4 bg-[#b00725] text-white flex items-center justify-between">
        <div class="flex items-center gap-2.5">
          <span class="text-xl">\u{1F4E4}</span>
          <div>
            <h3 class="text-base font-bold leading-tight">Ingestar Nuevo Documento</h3>
            <p class="text-[11px] text-red-100">Se procesar\xE1 con OCR, Sentence Window y Gemini Embeddings</p>
          </div>
        </div>
        <button
          type="button"
          (click)="onClose()"
          [disabled]="isUploading()"
          class="w-8 h-8 rounded-full bg-white/15 hover:bg-white/25 flex items-center justify-center text-white transition-colors cursor-pointer disabled:opacity-40">
          \u2715
        </button>
      </div>

      <!-- Cuerpo del Modal -->
      <form (submit)="onSubmit($event)" class="p-6 space-y-4">
        
        <!-- Zona Drag & Drop -->
        @if (!selectedFile()) {
          <div
            (dragover)="onDragOver($event)"
            (dragleave)="onDragLeave($event)"
            (drop)="onDrop($event)"
            [class.border-[#b00725]]="isDragging()"
            [class.bg-red-50/50]="isDragging()"
            class="border-2 border-dashed border-slate-300 hover:border-[#b00725] rounded-2xl p-6 text-center transition-all cursor-pointer relative">
            
            <input
              type="file"
              accept=".pdf,.docx,.pptx,.txt,.md,.csv"
              (change)="onFileSelected($event)"
              class="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            />
            
            <div class="w-12 h-12 rounded-2xl bg-red-50 text-[#b00725] flex items-center justify-center text-2xl mx-auto mb-2.5">
              \u{1F4C4}
            </div>
            <div class="text-sm font-bold text-slate-800">
              Arrastra tu archivo aqu\xED o <span class="text-[#b00725] underline">haz clic para explorar</span>
            </div>
            <p class="text-xs text-slate-400 mt-1">
              Soporta PDF, Word (.docx), PowerPoint (.pptx), TXT, MD o CSV (M\xE1x. 25 MB)
            </p>
          </div>
        } @else {
          <!-- Archivo Seleccionado -->
          <div class="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-between gap-3">
            <div class="flex items-center gap-3 min-w-0">
              <div class="w-10 h-10 rounded-xl bg-red-100 text-[#b00725] flex items-center justify-center text-lg shrink-0">
                \u{1F4CE}
              </div>
              <div class="min-w-0">
                <div class="text-sm font-bold text-slate-800 truncate">{{ selectedFile()!.name }}</div>
                <div class="text-xs text-slate-500">{{ formatFileSize(selectedFile()!.size) }} \u2022 Listo para indexar</div>
              </div>
            </div>
            @if (!isUploading()) {
              <button
                type="button"
                (click)="removeFile()"
                class="px-2.5 py-1 rounded-lg text-xs font-semibold text-red-600 hover:bg-red-50 transition-colors cursor-pointer shrink-0">
                Cambiar
              </button>
            }
          </div>
        }

        @if (validationError()) {
          <div class="p-3 rounded-xl bg-red-50 border border-red-200 text-xs font-medium text-red-700 flex items-center gap-2">
            <span>\u26A0\uFE0F</span>
            <span>{{ validationError() }}</span>
          </div>
        }

        <!-- Metadatos del Documento -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          <div>
            <label class="block text-xs font-bold text-slate-700 mb-1">ID \xDAnico del Documento *</label>
            <input
              type="text"
              [value]="documentoId()"
              (input)="onDocumentoIdInput($event)"
              [disabled]="isUploading()"
              placeholder="Ej: doc_reglamento_2026"
              required
              class="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-sm text-slate-800 font-mono focus:outline-hidden focus:border-[#b00725] focus:ring-2 focus:ring-red-100 disabled:bg-slate-100"
            />
            <span class="text-[10px] text-slate-400">Si el ID ya existe, actualizar\xE1 sus fragmentos.</span>
          </div>

          <div>
            <label class="block text-xs font-bold text-slate-700 mb-1">\xC1rea Institucional *</label>
            <select
              [value]="areaOrigen()"
              (change)="onAreaChange($event)"
              [disabled]="isUploading()"
              class="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-sm text-slate-800 bg-white focus:outline-hidden focus:border-[#b00725] disabled:bg-slate-100">
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
          <input
            type="text"
            [value]="fuente()"
            (input)="onFuenteInput($event)"
            [disabled]="isUploading()"
            placeholder="Ej: Gu\xEDa Oficial de Matr\xEDcula y Pensiones 2026"
            required
            class="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-sm text-slate-800 focus:outline-hidden focus:border-[#b00725] focus:ring-2 focus:ring-red-100 disabled:bg-slate-100"
          />
        </div>

        <!-- Stepper de Progreso Inteligente mientras se procesa en Backend -->
        @if (isUploading()) {
          <div class="p-4 rounded-2xl bg-slate-900 text-white space-y-3">
            <div class="flex items-center gap-3">
              <div class="w-6 h-6 border-3 border-red-400 border-t-white rounded-full animate-spin shrink-0"></div>
              <div class="text-xs font-bold tracking-wide">
                @if (uploadStep() === 1) {
                  Paso 1/3: Extrayendo texto y aplicando OCR si es escaneado...
                } @else if (uploadStep() === 2) {
                  Paso 2/3: Segmentando oraciones con SentenceWindowTextSplitter...
                } @else {
                  Paso 3/3: Calculando vectores (768 dim) con gemini-embedding-001...
                }
              </div>
            </div>

            <!-- Barra de progreso visual -->
            <div class="w-full h-1.5 bg-slate-700 rounded-full overflow-hidden">
              <div 
                class="h-full bg-[#e11d48] transition-all duration-500"
                [style.width]="uploadStep() === 1 ? '35%' : uploadStep() === 2 ? '70%' : '95%'">
              </div>
            </div>
            <p class="text-[11px] text-slate-300">
              Por favor espera unos segundos mientras se guarda transaccionalmente en PostgreSQL.
            </p>
          </div>
        }

        <!-- Botones de Acci\xF3n -->
        <div class="pt-2 flex items-center justify-end gap-2.5 border-t border-slate-100">
          <button
            type="button"
            (click)="onClose()"
            [disabled]="isUploading()"
            class="px-4 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold text-slate-600 hover:bg-slate-50 transition-colors cursor-pointer disabled:opacity-40">
            Cancelar
          </button>

          <button
            type="submit"
            [disabled]="!canSubmit()"
            class="px-5 py-2.5 rounded-xl bg-[#b00725] hover:bg-[#92061e] text-white text-xs font-bold shadow-md shadow-red-900/20 transition-all flex items-center gap-2 cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed">
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
}
`, styles: ["/* src/app/features/backoffice/components/document-upload-modal/document-upload-modal.component.css */\n.modal-card {\n  animation: modalAppear 0.2s cubic-bezier(0.16, 1, 0.3, 1);\n}\n@keyframes modalAppear {\n  from {\n    opacity: 0;\n    transform: scale(0.96) translateY(8px);\n  }\n  to {\n    opacity: 1;\n    transform: scale(1) translateY(0);\n  }\n}\n"] }]
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
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ConfirmDeleteModalComponent, selectors: [["app-confirm-delete-modal"]], inputs: { documento: [1, "documento"], isDeleting: [1, "isDeleting"] }, outputs: { cancel: "cancel", confirm: "confirm" }, decls: 1, vars: 1, consts: [[1, "fixed", "inset-0", "z-50", "flex", "items-center", "justify-center", "p-4", "bg-slate-900/60", "backdrop-blur-xs"], [1, "delete-modal", "bg-white", "w-full", "max-w-md", "rounded-3xl", "shadow-2xl", "border", "border-slate-200", "p-6", "space-y-4"], [1, "flex", "items-start", "gap-3.5"], [1, "w-12", "h-12", "rounded-2xl", "bg-red-100", "text-red-600", "flex", "items-center", "justify-center", "text-2xl", "shrink-0"], [1, "text-base", "font-bold", "text-slate-900"], [1, "text-xs", "text-slate-500", "mt-1", "leading-relaxed"], [1, "text-slate-800"], [1, "text-red-700"], [1, "p-3", "rounded-xl", "bg-red-50/70", "border", "border-red-200/80", "text-xs", "text-red-800", "space-y-1"], [1, "font-semibold"], [1, "text-[11px]"], [1, "flex", "items-center", "justify-end", "gap-2.5", "pt-2"], ["type", "button", 1, "px-4", "py-2", "rounded-xl", "border", "border-slate-200", "text-xs", "font-semibold", "text-slate-700", "hover:bg-slate-50", "transition-colors", "cursor-pointer", "disabled:opacity-40", 3, "click", "disabled"], ["type", "button", 1, "px-4", "py-2", "rounded-xl", "bg-red-600", "hover:bg-red-700", "text-white", "text-xs", "font-bold", "shadow-sm", "transition-all", "flex", "items-center", "gap-1.5", "cursor-pointer", "disabled:opacity-50", 3, "click", "disabled"], [1, "w-3.5", "h-3.5", "border-2", "border-white", "border-t-transparent", "rounded-full", "animate-spin"]], template: function ConfirmDeleteModalComponent_Template(rf, ctx) {
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
    args: [{ selector: "app-confirm-delete-modal", changeDetection: ChangeDetectionStrategy.OnPush, template: '@if (documento(); as doc) {\n  <div class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs">\n    <div class="delete-modal bg-white w-full max-w-md rounded-3xl shadow-2xl border border-slate-200 p-6 space-y-4">\n      \n      <div class="flex items-start gap-3.5">\n        <div class="w-12 h-12 rounded-2xl bg-red-100 text-red-600 flex items-center justify-center text-2xl shrink-0">\n          \u26A0\uFE0F\n        </div>\n        <div>\n          <h3 class="text-base font-bold text-slate-900">\xBFEliminar documento indexado?</h3>\n          <p class="text-xs text-slate-500 mt-1 leading-relaxed">\n            Est\xE1s a punto de eliminar <strong class="text-slate-800">"{{ doc.fuente }}"</strong> (<code class="text-red-700">{{ doc.documento_id }}</code>).\n          </p>\n        </div>\n      </div>\n\n      <div class="p-3 rounded-xl bg-red-50/70 border border-red-200/80 text-xs text-red-800 space-y-1">\n        <div class="font-semibold">Impacto en la base de conocimiento:</div>\n        <p class="text-[11px]">\n          Se eliminar\xE1n permanentemente sus <strong>{{ doc.fragmentos }} fragmentos vectoriales</strong> de PostgreSQL y el Asistente Virtual dejar\xE1 de citar esta fuente.\n        </p>\n      </div>\n\n      <div class="flex items-center justify-end gap-2.5 pt-2">\n        <button\n          type="button"\n          (click)="cancel.emit()"\n          [disabled]="isDeleting()"\n          class="px-4 py-2 rounded-xl border border-slate-200 text-xs font-semibold text-slate-700 hover:bg-slate-50 transition-colors cursor-pointer disabled:opacity-40">\n          Cancelar\n        </button>\n\n        <button\n          type="button"\n          (click)="onConfirm()"\n          [disabled]="isDeleting()"\n          class="px-4 py-2 rounded-xl bg-red-600 hover:bg-red-700 text-white text-xs font-bold shadow-sm transition-all flex items-center gap-1.5 cursor-pointer disabled:opacity-50">\n          @if (isDeleting()) {\n            <span class="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>\n            <span>Eliminando...</span>\n          } @else {\n            <span>\u{1F5D1}\uFE0F</span>\n            <span>S\xED, eliminar definitivamente</span>\n          }\n        </button>\n      </div>\n\n    </div>\n  </div>\n}\n', styles: ["/* src/app/features/backoffice/components/confirm-delete-modal/confirm-delete-modal.component.css */\n.delete-modal {\n  animation: popIn 0.18s ease-out;\n}\n@keyframes popIn {\n  from {\n    opacity: 0;\n    transform: scale(0.95);\n  }\n  to {\n    opacity: 1;\n    transform: scale(1);\n  }\n}\n"] }]
  }], null, { documento: [{ type: Input, args: [{ isSignal: true, alias: "documento", required: false }] }], isDeleting: [{ type: Input, args: [{ isSignal: true, alias: "isDeleting", required: false }] }], cancel: [{ type: Output, args: ["cancel"] }], confirm: [{ type: Output, args: ["confirm"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ConfirmDeleteModalComponent, { className: "ConfirmDeleteModalComponent", filePath: "src/app/features/backoffice/components/confirm-delete-modal/confirm-delete-modal.component.ts", lineNumber: 10 });
})();

// src/app/features/backoffice/pages/admin-dashboard/admin-dashboard.component.ts
var _c0 = ["uploadModal"];
var _forTrack02 = ($index, $item) => $item.id;
function AdminDashboardComponent_For_10_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " \u2705 ");
  }
}
function AdminDashboardComponent_For_10_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " \u274C ");
  }
}
function AdminDashboardComponent_For_10_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " \u2139\uFE0F ");
  }
}
function AdminDashboardComponent_For_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10)(1, "div", 11)(2, "span", 12);
    \u0275\u0275conditionalCreate(3, AdminDashboardComponent_For_10_Conditional_3_Template, 1, 0)(4, AdminDashboardComponent_For_10_Conditional_4_Template, 1, 0)(5, AdminDashboardComponent_For_10_Conditional_5_Template, 1, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div")(7, "div", 13);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 14);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "button", 15);
    \u0275\u0275listener("click", function AdminDashboardComponent_For_10_Template_button_click_11_listener() {
      const toast_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.dismissToast(toast_r2.id));
    });
    \u0275\u0275text(12, " \u2715 ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const toast_r2 = ctx.$implicit;
    \u0275\u0275classProp("border-emerald-200", toast_r2.type === "success")("border-red-200", toast_r2.type === "error")("border-blue-200", toast_r2.type === "info");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(toast_r2.type === "success" ? 3 : toast_r2.type === "error" ? 4 : 5);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(toast_r2.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(toast_r2.message);
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
  isLoadingList = signal(false, ...ngDevMode ? [{ debugName: "isLoadingList" }] : (
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
  }
  cargarDocumentos() {
    this.isLoadingList.set(true);
    this.backofficeService.listarDocumentos().subscribe({
      next: (res) => {
        this.documentos.set(res.documentos || []);
        this.totalDocumentos.set(res.total_documentos ?? res.documentos.length);
        this.totalFragmentos.set(res.total_fragmentos ?? 0);
        this.isLoadingList.set(false);
      },
      error: (err) => {
        this.isLoadingList.set(false);
        this.showToast("error", "Error al cargar documentos", err.message);
      }
    });
  }
  openUploadModal() {
    this.isUploadModalOpen.set(true);
  }
  closeUploadModal() {
    this.isUploadModalOpen.set(false);
  }
  onUploadDocument(payload) {
    this.isUploading.set(true);
    this.backofficeService.indexarDocumento(payload).subscribe({
      next: (res) => {
        this.isUploading.set(false);
        this.isUploadModalOpen.set(false);
        this.uploadModal()?.resetForm();
        this.showToast("success", "Documento indexado con \xE9xito", `Se guardaron ${res.fragmentos_indexados} fragmentos vectoriales para "${payload.fuente}".`);
        this.cargarDocumentos();
      },
      error: (err) => {
        this.isUploading.set(false);
        this.showToast("error", "Error en la ingesta", err.message);
      }
    });
  }
  onRequestDelete(doc) {
    this.docToDelete.set(doc);
  }
  onCancelDelete() {
    if (this.deletingId())
      return;
    this.docToDelete.set(null);
  }
  onConfirmDelete(documentoId) {
    this.deletingId.set(documentoId);
    const fuenteName = this.docToDelete()?.fuente || documentoId;
    this.backofficeService.eliminarDocumento(documentoId).subscribe({
      next: () => {
        this.deletingId.set(null);
        this.docToDelete.set(null);
        this.showToast("info", "Documento eliminado", `Se elimin\xF3 "${fuenteName}" y todos sus vectores de PostgreSQL.`);
        this.cargarDocumentos();
      },
      error: (err) => {
        this.deletingId.set(null);
        this.docToDelete.set(null);
        this.showToast("error", "No se pudo eliminar", err.message);
      }
    });
  }
  onLogout() {
    this.backofficeService.logout();
    this.router.navigate(["/backoffice/login"]);
  }
  showToast(type, title, message) {
    const id = "toast_" + Date.now();
    this.toasts.update((list) => [...list, { id, type, title, message }]);
    setTimeout(() => {
      this.dismissToast(id);
    }, 5e3);
  }
  dismissToast(id) {
    this.toasts.update((list) => list.filter((t) => t.id !== id));
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
  }, decls: 11, vars: 12, consts: [["uploadModal", ""], [1, "min-h-screen", "bg-slate-50", "flex", "flex-col"], [3, "logout", "session"], [1, "flex-1", "max-w-7xl", "w-full", "mx-auto", "px-4", "sm:px-6", "lg:px-8", "py-8", "space-y-6"], [3, "openUpload", "refresh", "totalDocumentos", "totalFragmentos", "isLoading"], [3, "requestDelete", "openUpload", "documentos", "isLoading", "deletingId"], [3, "close", "upload", "isOpen", "isUploading", "defaultArea"], [3, "cancel", "confirm", "documento", "isDeleting"], [1, "fixed", "bottom-5", "right-5", "z-50", "flex", "flex-col", "gap-2.5", "max-w-sm", "w-full", "pointer-events-none"], [1, "toast-item", "pointer-events-auto", "p-4", "rounded-2xl", "shadow-xl", "border", "flex", "items-start", "justify-between", "gap-3", "bg-white", 3, "border-emerald-200", "border-red-200", "border-blue-200"], [1, "toast-item", "pointer-events-auto", "p-4", "rounded-2xl", "shadow-xl", "border", "flex", "items-start", "justify-between", "gap-3", "bg-white"], [1, "flex", "items-start", "gap-2.5"], [1, "text-lg"], [1, "text-xs", "font-bold", "text-slate-900"], [1, "text-xs", "text-slate-600", "mt-0.5", "leading-relaxed"], ["type", "button", 1, "text-xs", "text-slate-400", "hover:text-slate-700", "cursor-pointer", 3, "click"]], template: function AdminDashboardComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 1)(1, "app-admin-navbar", 2);
      \u0275\u0275listener("logout", function AdminDashboardComponent_Template_app_admin_navbar_logout_1_listener() {
        return ctx.onLogout();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2, "main", 3)(3, "app-admin-stats", 4);
      \u0275\u0275listener("openUpload", function AdminDashboardComponent_Template_app_admin_stats_openUpload_3_listener() {
        return ctx.openUploadModal();
      })("refresh", function AdminDashboardComponent_Template_app_admin_stats_refresh_3_listener() {
        return ctx.cargarDocumentos();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "app-document-table", 5);
      \u0275\u0275listener("requestDelete", function AdminDashboardComponent_Template_app_document_table_requestDelete_4_listener($event) {
        return ctx.onRequestDelete($event);
      })("openUpload", function AdminDashboardComponent_Template_app_document_table_openUpload_4_listener() {
        return ctx.openUploadModal();
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(5, "app-document-upload-modal", 6, 0);
      \u0275\u0275listener("close", function AdminDashboardComponent_Template_app_document_upload_modal_close_5_listener() {
        return ctx.closeUploadModal();
      })("upload", function AdminDashboardComponent_Template_app_document_upload_modal_upload_5_listener($event) {
        return ctx.onUploadDocument($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "app-confirm-delete-modal", 7);
      \u0275\u0275listener("cancel", function AdminDashboardComponent_Template_app_confirm_delete_modal_cancel_7_listener() {
        return ctx.onCancelDelete();
      })("confirm", function AdminDashboardComponent_Template_app_confirm_delete_modal_confirm_7_listener($event) {
        return ctx.onConfirmDelete($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "div", 8);
      \u0275\u0275repeaterCreate(9, AdminDashboardComponent_For_10_Template, 13, 9, "div", 9, _forTrack02);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      let tmp_10_0;
      \u0275\u0275advance();
      \u0275\u0275property("session", ctx.session());
      \u0275\u0275advance(2);
      \u0275\u0275property("totalDocumentos", ctx.totalDocumentos())("totalFragmentos", ctx.totalFragmentos())("isLoading", ctx.isLoadingList());
      \u0275\u0275advance();
      \u0275\u0275property("documentos", ctx.documentos())("isLoading", ctx.isLoadingList())("deletingId", ctx.deletingId());
      \u0275\u0275advance();
      \u0275\u0275property("isOpen", ctx.isUploadModalOpen())("isUploading", ctx.isUploading())("defaultArea", ((tmp_10_0 = ctx.session()) == null ? null : tmp_10_0.areaDefault) || "GENERAL");
      \u0275\u0275advance(2);
      \u0275\u0275property("documento", ctx.docToDelete())("isDeleting", !!ctx.deletingId());
      \u0275\u0275advance(2);
      \u0275\u0275repeater(ctx.toasts());
    }
  }, dependencies: [
    AdminNavbarComponent,
    AdminStatsComponent,
    DocumentTableComponent,
    DocumentUploadModalComponent,
    ConfirmDeleteModalComponent
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
      ConfirmDeleteModalComponent
    ], template: `<div class="min-h-screen bg-slate-50 flex flex-col">
  
  <!-- Barra de Navegaci\xF3n Superior -->
  <app-admin-navbar 
    [session]="session()" 
    (logout)="onLogout()" 
  />

  <!-- Contenido Principal -->
  <main class="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
    
    <!-- KPIs y Acciones Principales -->
    <app-admin-stats
      [totalDocumentos]="totalDocumentos()"
      [totalFragmentos]="totalFragmentos()"
      [isLoading]="isLoadingList()"
      (openUpload)="openUploadModal()"
      (refresh)="cargarDocumentos()"
    />

    <!-- Tabla de Documentos con Filtros y Paginaci\xF3n (>10 registros) -->
    <app-document-table
      [documentos]="documentos()"
      [isLoading]="isLoadingList()"
      [deletingId]="deletingId()"
      (requestDelete)="onRequestDelete($event)"
      (openUpload)="openUploadModal()"
    />

  </main>

  <!-- Modal de Ingesta / Carga de Documentos -->
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
    (cancel)="onCancelDelete()"
    (confirm)="onConfirmDelete($event)"
  />

  <!-- Contenedor de Notificaciones Toast Flotantes -->
  <div class="fixed bottom-5 right-5 z-50 flex flex-col gap-2.5 max-w-sm w-full pointer-events-none">
    @for (toast of toasts(); track toast.id) {
      <div
        class="toast-item pointer-events-auto p-4 rounded-2xl shadow-xl border flex items-start justify-between gap-3 bg-white"
        [class.border-emerald-200]="toast.type === 'success'"
        [class.border-red-200]="toast.type === 'error'"
        [class.border-blue-200]="toast.type === 'info'">
        
        <div class="flex items-start gap-2.5">
          <span class="text-lg">
            @if (toast.type === 'success') { \u2705 }
            @else if (toast.type === 'error') { \u274C }
            @else { \u2139\uFE0F }
          </span>
          <div>
            <div class="text-xs font-bold text-slate-900">{{ toast.title }}</div>
            <div class="text-xs text-slate-600 mt-0.5 leading-relaxed">{{ toast.message }}</div>
          </div>
        </div>

        <button
          type="button"
          (click)="dismissToast(toast.id)"
          class="text-xs text-slate-400 hover:text-slate-700 cursor-pointer">
          \u2715
        </button>
      </div>
    }
  </div>

</div>
`, styles: ["/* src/app/features/backoffice/pages/admin-dashboard/admin-dashboard.component.css */\n.toast-item {\n  animation: slideInRight 0.25s cubic-bezier(0.16, 1, 0.3, 1);\n}\n@keyframes slideInRight {\n  from {\n    opacity: 0;\n    transform: translateX(20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateX(0);\n  }\n}\n"] }]
  }], null, { uploadModal: [{ type: ViewChild, args: ["uploadModal", { isSignal: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminDashboardComponent, { className: "AdminDashboardComponent", filePath: "src/app/features/backoffice/pages/admin-dashboard/admin-dashboard.component.ts", lineNumber: 24 });
})();
export {
  AdminDashboardComponent
};
