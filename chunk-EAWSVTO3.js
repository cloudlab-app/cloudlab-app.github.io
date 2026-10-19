import {
  ChangeDetectionStrategy,
  Component,
  DatePipe,
  DomSanitizer,
  HttpClient,
  Injectable,
  Input,
  Output,
  Pipe,
  ViewChild,
  __spreadProps,
  __spreadValues,
  catchError,
  computed,
  effect,
  environment,
  inject,
  input,
  map,
  output,
  setClassMetadata,
  signal,
  throwError,
  viewChild,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefinePipe,
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
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵqueryAdvance,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuerySignal
} from "./chunk-YAFNTJHC.js";

// src/app/core/services/session.service.ts
var SessionService = class _SessionService {
  SESSION_KEY = "cbb_assistant_session_id";
  getSessionId() {
    let sessionId = localStorage.getItem(this.SESSION_KEY);
    if (!sessionId) {
      sessionId = this.generateUUID();
      localStorage.setItem(this.SESSION_KEY, sessionId);
    }
    return sessionId;
  }
  resetSession() {
    const newSessionId = this.generateUUID();
    localStorage.setItem(this.SESSION_KEY, newSessionId);
    return newSessionId;
  }
  generateUUID() {
    if (typeof crypto !== "undefined" && crypto.randomUUID) {
      return crypto.randomUUID();
    }
    return "cbb_" + Date.now().toString(36) + "_" + Math.random().toString(36).substring(2, 9);
  }
  static \u0275fac = function SessionService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SessionService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _SessionService, factory: _SessionService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SessionService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// src/app/core/services/assistant.service.ts
var AssistantService = class _AssistantService {
  http = inject(HttpClient);
  sessionService = inject(SessionService);
  endpoint = `${environment.apiUrl}/rag`;
  askQuestion(pregunta) {
    const payload = {
      pregunta: pregunta.trim(),
      session_id: this.sessionService.getSessionId(),
      usuario_id: "padre_familia_cbb"
    };
    return this.http.post(this.endpoint, payload).pipe(map((response) => response), catchError((error) => {
      console.error("Error al conectar con el Asistente Virtual:", error);
      return throwError(() => new Error(error.status === 0 ? "No se pudo conectar con el servidor del asistente. Por favor, aseg\xFArate de que el backend est\xE9 activo en http://localhost:8000." : error.error?.detail || error.error?.mensaje_respuesta || "Ocurri\xF3 un error al procesar tu consulta."));
    }));
  }
  sendFeedback(params) {
    const payload = {
      session_id: this.sessionService.getSessionId(),
      resuelto: params.resuelto,
      comentario: params.comentario?.trim() || void 0,
      ultima_pregunta: params.ultimaPregunta?.trim() || void 0
    };
    return this.http.post(`${this.endpoint}/feedback`, payload).pipe(catchError((error) => {
      console.error("Error al enviar feedback:", error);
      return throwError(() => new Error("No se pudo registrar tu calificaci\xF3n en este momento."));
    }));
  }
  resetConversation() {
    this.sessionService.resetSession();
  }
  static \u0275fac = function AssistantService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AssistantService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AssistantService, factory: _AssistantService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AssistantService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// src/app/features/assistant/components/chat-header/chat-header.component.ts
function ChatHeaderComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "button", 16);
    \u0275\u0275domListener("click", function ChatHeaderComponent_Conditional_18_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeConversation.emit());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275domElementStart(1, "svg", 17);
    \u0275\u0275domElement(2, "path", 18);
    \u0275\u0275domElementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275domElementStart(3, "span");
    \u0275\u0275text(4, "Cerrar conversaci\xF3n");
    \u0275\u0275domElementEnd()();
  }
}
var ChatHeaderComponent = class _ChatHeaderComponent {
  hasMessages = input(false, ...ngDevMode ? [{ debugName: "hasMessages" }] : (
    /* istanbul ignore next */
    []
  ));
  closeConversation = output();
  static \u0275fac = function ChatHeaderComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ChatHeaderComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ChatHeaderComponent, selectors: [["app-chat-header"]], inputs: { hasMessages: [1, "hasMessages"] }, outputs: { closeConversation: "closeConversation" }, decls: 19, vars: 1, consts: [[1, "shrink-0", "bg-[#0050A1]", "text-white", "border-b-4", "border-[#BE002E]", "shadow-md", "z-20"], [1, "max-w-6xl", "mx-auto", "px-4", "sm:px-6", "h-16", "sm:h-18", "flex", "items-center", "justify-between", "gap-3"], [1, "flex", "items-center", "gap-3.5", "min-w-0"], [1, "w-10", "h-10", "sm:w-11", "sm:h-11", "rounded-xl", "bg-white", "p-1.5", "flex", "items-center", "justify-center", "shadow-md", "shrink-0"], ["src", "cropped-Favicon-3-1-32x32.png", "alt", "Logo Colegio Bertolt Brecht", 1, "w-full", "h-full", "object-contain"], [1, "min-w-0"], [1, "flex", "items-center", "gap-2.5"], [1, "font-extrabold", "text-white", "text-base", "sm:text-lg", "leading-tight", "tracking-tight", "truncate"], [1, "hidden", "md:inline-flex", "items-center", "px-2.5", "py-0.5", "rounded-full", "text-[10px]", "font-extrabold", "bg-[#BE002E]", "text-white", "uppercase", "tracking-wider", "shadow-2xs"], [1, "flex", "items-center", "gap-1.5", "mt-0.5"], [1, "relative", "flex", "h-2", "w-2"], [1, "animate-ping", "absolute", "inline-flex", "h-full", "w-full", "rounded-full", "bg-emerald-300", "opacity-75"], [1, "relative", "inline-flex", "rounded-full", "h-2", "w-2", "bg-emerald-400"], [1, "text-xs", "text-blue-100", "font-medium", "truncate"], [1, "flex", "items-center", "gap-2", "shrink-0"], ["type", "button", "title", "Finalizar y calificar conversaci\xF3n", 1, "inline-flex", "items-center", "gap-1.5", "px-3.5", "sm:px-4", "py-2", "rounded-xl", "bg-[#BE002E]", "hover:bg-[#9e0026]", "text-white", "text-xs", "font-bold", "shadow-sm", "transition-all", "transform", "active:scale-95", "cursor-pointer"], ["type", "button", "title", "Finalizar y calificar conversaci\xF3n", 1, "inline-flex", "items-center", "gap-1.5", "px-3.5", "sm:px-4", "py-2", "rounded-xl", "bg-[#BE002E]", "hover:bg-[#9e0026]", "text-white", "text-xs", "font-bold", "shadow-sm", "transition-all", "transform", "active:scale-95", "cursor-pointer", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2.5", "d", "M5 13l4 4L19 7"]], template: function ChatHeaderComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "header", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
      \u0275\u0275domElement(4, "img", 4);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(5, "div", 5)(6, "div", 6)(7, "h1", 7);
      \u0275\u0275text(8, " Colegio Bertolt Brecht ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(9, "span", 8);
      \u0275\u0275text(10, " Asistente Oficial ");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(11, "div", 9)(12, "span", 10);
      \u0275\u0275domElement(13, "span", 11)(14, "span", 12);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(15, "span", 13);
      \u0275\u0275text(16, " Atenci\xF3n en l\xEDnea 24/7 \u2022 Orientaci\xF3n al ciudadano ");
      \u0275\u0275domElementEnd()()()();
      \u0275\u0275domElementStart(17, "div", 14);
      \u0275\u0275conditionalCreate(18, ChatHeaderComponent_Conditional_18_Template, 5, 0, "button", 15);
      \u0275\u0275domElementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(18);
      \u0275\u0275conditional(ctx.hasMessages() ? 18 : -1);
    }
  }, styles: ["\n[_nghost-%COMP%] {\n  display: block;\n}"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ChatHeaderComponent, [{
    type: Component,
    args: [{ selector: "app-chat-header", changeDetection: ChangeDetectionStrategy.OnPush, template: '<header class="shrink-0 bg-[#0050A1] text-white border-b-4 border-[#BE002E] shadow-md z-20">\n  <div class="max-w-6xl mx-auto px-4 sm:px-6 h-16 sm:h-18 flex items-center justify-between gap-3">\n    \n    <!-- Identidad Institucional CBB -->\n    <div class="flex items-center gap-3.5 min-w-0">\n      <div class="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-white p-1.5 flex items-center justify-center shadow-md shrink-0">\n        <img \n          src="cropped-Favicon-3-1-32x32.png" \n          alt="Logo Colegio Bertolt Brecht" \n          class="w-full h-full object-contain"\n        />\n      </div>\n      <div class="min-w-0">\n        <div class="flex items-center gap-2.5">\n          <h1 class="font-extrabold text-white text-base sm:text-lg leading-tight tracking-tight truncate">\n            Colegio Bertolt Brecht\n          </h1>\n          <span class="hidden md:inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-extrabold bg-[#BE002E] text-white uppercase tracking-wider shadow-2xs">\n            Asistente Oficial\n          </span>\n        </div>\n        <div class="flex items-center gap-1.5 mt-0.5">\n          <span class="relative flex h-2 w-2">\n            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75"></span>\n            <span class="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>\n          </span>\n          <span class="text-xs text-blue-100 font-medium truncate">\n            Atenci\xF3n en l\xEDnea 24/7 \u2022 Orientaci\xF3n al ciudadano\n          </span>\n        </div>\n      </div>\n    </div>\n\n    <!-- Acciones de Cabecera -->\n    <div class="flex items-center gap-2 shrink-0">\n      @if (hasMessages()) {\n        <button\n          type="button"\n          (click)="closeConversation.emit()"\n          title="Finalizar y calificar conversaci\xF3n"\n          class="inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-2 rounded-xl bg-[#BE002E] hover:bg-[#9e0026] text-white text-xs font-bold shadow-sm transition-all transform active:scale-95 cursor-pointer">\n          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">\n            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7" />\n          </svg>\n          <span>Cerrar conversaci\xF3n</span>\n        </button>\n      }\n    </div>\n\n  </div>\n</header>\n', styles: ["/* src/app/features/assistant/components/chat-header/chat-header.component.css */\n:host {\n  display: block;\n}\n"] }]
  }], null, { hasMessages: [{ type: Input, args: [{ isSignal: true, alias: "hasMessages", required: false }] }], closeConversation: [{ type: Output, args: ["closeConversation"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ChatHeaderComponent, { className: "ChatHeaderComponent", filePath: "src/app/features/assistant/components/chat-header/chat-header.component.ts", lineNumber: 9 });
})();

// node_modules/marked/lib/marked.esm.js
function I() {
  return { async: false, breaks: false, extensions: null, gfm: true, hooks: null, pedantic: false, renderer: null, silent: false, tokenizer: null, walkTokens: null };
}
var P = I();
function W(l3) {
  P = l3;
}
var A = { exec: () => null };
function C(l3) {
  let e = [];
  return (t) => {
    let n = Math.max(0, Math.min(3, t - 1)), s = e[n];
    return s || (s = l3(n), e[n] = s), s;
  };
}
function h(l3, e = "") {
  let t = typeof l3 == "string" ? l3 : l3.source, n = { replace: (s, r) => {
    let o = typeof r == "string" ? r : r.source;
    return o = o.replace(x.caret, "$1"), t = t.replace(s, o), n;
  }, getRegex: () => new RegExp(t, e) };
  return n;
}
var _e = ((l3 = "") => {
  try {
    return !!new RegExp("(?<=1)(?<!1)" + l3);
  } catch {
    return false;
  }
})();
var x = { codeRemoveIndent: /^(?: {0,3}\t| {1,4})/gm, outputLinkReplace: /\\([\[\]])/g, indentCodeCompensation: /^(\s+)(?:```)/, beginningSpace: /^\s+/, endingHash: /#$/, startingSpaceChar: /^ /, endingSpaceChar: / $/, endingSpaceTabChar: /[ \t]$/, nonSpaceChar: /[^ ]/, newLineCharGlobal: /\n/g, tabCharGlobal: /\t/g, leadingSpaceTab: /^[ \t]+/, multipleSpaceGlobal: /\s+/g, blankLine: /^[ \t]*$/, doubleBlankLine: /\n[ \t]*\n[ \t]*$/, blockquoteStart: /^ {0,3}>/, blockquoteSetextReplace: /\n {0,3}((?:=+|-+) *)(?=\n|$)/g, blockquoteSetextReplace2: /^ {0,3}>[ \t]?/gm, listReplaceNesting: /^ {1,4}(?=( {4})*[^ ])/g, listIsTask: /^\[[ xX]\] +\S/, listReplaceTask: /^\[[ xX]\] +/, listTaskCheckbox: /\[[ xX]\]/, anyLine: /\n.*\n/, hrefBrackets: /^<(.*)>$/, tableDelimiter: /[:|]/, tableAlignChars: /^\||\| *$/g, tableRowBlankLine: /\n[ \t]*$/, tableAlignRight: /^ *-+: *$/, tableAlignCenter: /^ *:-+: *$/, tableAlignLeft: /^ *:-+ *$/, startATag: /^<a /i, endATag: /^<\/a>/i, startPreScriptTag: /^<(pre|code|kbd|script)(\s|>)/i, endPreScriptTag: /^<\/(pre|code|kbd|script)(\s|>)/i, startAngleBracket: /^</, endAngleBracket: />$/, pedanticHrefTitle: /^([^'"]*[^\s])\s+(['"])(.*)\2/, unicodeAlphaNumeric: /[\p{L}\p{N}]/u, numericCharacterReference: /&#(?:(\d{1,7})|[Xx]([A-Fa-f0-9]{1,6}));/g, escapeTest: /[&<>"']/, escapeReplace: /[&<>"']/g, escapeTestNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/, escapeReplaceNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g, caret: /(^|[^\[])\^/g, percentDecode: /%25/g, findPipe: /\|/g, splitPipe: / \|/, slashPipe: /\\\|/g, carriageReturn: /\r\n|\r/g, spaceLine: /^ +$/gm, notSpaceStart: /^\S*/, endingNewline: /\n$/, listItemRegex: (l3) => new RegExp(`^( {0,3}${l3})((?:[	 ][^\\n]*)?(?:\\n|$))`), nextBulletRegex: C((l3) => new RegExp(`^ {0,${l3}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`)), hrRegex: C((l3) => new RegExp(`^ {0,${l3}}((?:-[ 	]*){3,}|(?:_[ 	]*){3,}|(?:\\*[ 	]*){3,})(?:\\n+|$)`)), fencesBeginRegex: C((l3) => new RegExp(`^ {0,${l3}}(?:\`\`\`|~~~)`)), headingBeginRegex: C((l3) => new RegExp(`^ {0,${l3}}#`)), htmlBeginRegex: C((l3) => new RegExp(`^ {0,${l3}}(?:</?(?:${N})(?: +|$|/?>)|<(?:script|pre|style|textarea|!--))`, "i")), blockquoteBeginRegex: C((l3) => new RegExp(`^ {0,${l3}}>`)) };
var $e = /^(?:[ \t]*(?:\n|$))+/;
var Le = /^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/;
var ze = /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/;
var G = /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/;
var Ae = /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/;
var J = / {0,3}(?:[*+-]|\d{1,9}[.)])/;
var he = /^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |fences|blockquote|heading|hr|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/;
var de = h(he).replace(/bull/g, J).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}(?:\s|$)/).replace(/hr/g, / {0,3}(?:(?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/\|table/g, "").getRegex();
var Ee = h(he).replace(/bull/g, J).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}(?:\s|$)/).replace(/hr/g, / {0,3}(?:(?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/table/g, / {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex();
var V = /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table|[ \t]+\n)[^\n]+)*)/;
var Me = /^[^\n]+/;
var Y = /(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/;
var Ie = h(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label", Y).replace("title", /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex();
var Ce = h(/^(bull)([ \t][^\n]*?)?(?:\n|$)/).replace(/bull/g, J).getRegex();
var N = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul";
var ee = /<!--(?:-?>|[\s\S]*?(?:-->|$))/;
var Be = h("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n*|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>[^\\n]*\\n*|$)|<![A-Z][\\s\\S]*?(?:>[^\\n]*\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>[^\\n]*\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][a-z0-9-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][a-z0-9-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))", "i").replace("comment", ee).replace("tag", N).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex();
var ke = (l3) => h(V).replace("hr", G).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*(?:\\n|$))|~~~)[^\\n]*(?:\\n|$)").replace("list", l3).replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", N).getRegex();
var De = ke(/ {0,3}(?:[*+-]|1[.)])[ \t]+[^ \t\n]/);
var qe = ke(/ {0,3}(?:[*+-]|\d{1,9}[.)])(?:[ \t]|\n|$)/);
var ve = h(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph", qe).getRegex();
var te = { blockquote: ve, code: Le, def: Ie, fences: ze, heading: Ae, hr: G, html: Be, lheading: de, list: Ce, newline: $e, paragraph: De, table: A, text: Me };
var ue = h("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr", G).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("blockquote", " {0,3}>").replace("code", "(?: {4}| {0,3}	)[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*(?:\\n|$))|~~~)[^\\n]*(?:\\n|$)").replace("list", " {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", N).getRegex();
var Ze = __spreadProps(__spreadValues({}, te), { lheading: Ee, table: ue, paragraph: h(V).replace("hr", G).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("table", ue).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*(?:\\n|$))|~~~)[^\\n]*(?:\\n|$)").replace("list", " {0,3}(?:[*+-]|1[.)])[ \\t]+[^ \\t\\n]").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", N).getRegex() });
var He = __spreadProps(__spreadValues({}, te), { html: h(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment", ee).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(), def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/, heading: /^(#{1,6})(.*)(?:\n+|$)/, fences: A, lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/, paragraph: h(V).replace("hr", G).replace("heading", ` *#{1,6} *[^
]`).replace("lheading", de).replace("|table", "").replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").replace("|tag", "").getRegex() });
var Ge = /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/;
var Ne = /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/;
var ge = /^( {2,}|\\)\n(?!\s*$)[ \t]*/;
var Qe = /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/;
var $ = /[\p{P}\p{S}]/u;
var B = /[\s\p{P}\p{S}]/u;
var Q = /[^\s\p{P}\p{S}]/u;
var je = h(/^((?![*_])punctSpace)/, "u").replace(/punctSpace/g, B).getRegex();
var Fe = /[\p{Pi}\p{Ps}"']/u;
var fe = /(?!~)[\p{P}\p{S}]/u;
var Ue = /(?!~)[\s\p{P}\p{S}]/u;
var Ke = /(?:[^\s\p{P}\p{S}]|~)/u;
var We = h(/link|precode-code|html/, "g").replace("link", /\[(?:[^\[\]`]|(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/).replace("precode-", _e ? "(?<!`)()" : "(^^|[^`])").replace("code", /(?<b>`+)[^`]+\k<b>(?!`)/).replace("html", /<(?! )[^<>]*?>/).getRegex();
var me = /^(?:\*+(?:((?!\*)punct)|([^\s*]))?)|^_+(?:((?!_)punct)|([^\s_]))?/;
var Xe = h(me, "u").replace(/punct/g, $).getRegex();
var Je = h(me, "u").replace(/punct/g, fe).getRegex();
var Ve = /^(?:\*+(?:((?!\*)(?!openQuote)punct)|([^\s*]))?)|^_+(?:((?!_)(?!openQuote)punct)|([^\s_]))?/;
var Ye = h(Ve, "u").replace(/openQuote/g, Fe).replace(/punct/g, $).getRegex();
var xe = "^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)";
var et = h(xe, "gu").replace(/notPunctSpace/g, Q).replace(/punctSpace/g, B).replace(/punct/g, $).getRegex();
var tt = h(xe, "gu").replace(/notPunctSpace/g, Ke).replace(/punctSpace/g, Ue).replace(/punct/g, fe).getRegex();
var nt = "^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)[\\s](\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|(?:(?!\\*)punct|notPunctSpace)(\\*+)(?!\\*)(?=notPunctSpace)";
var rt = h(nt, "gu").replace(/notPunctSpace/g, Q).replace(/punctSpace/g, B).replace(/punct/g, $).getRegex();
var st = h("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)", "gu").replace(/notPunctSpace/g, Q).replace(/punctSpace/g, B).replace(/punct/g, $).getRegex();
var it = "^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)[\\s](_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)|(?:(?!_)punct|notPunctSpace)(_+)(?!_)(?=notPunctSpace)";
var ot = h(it, "gu").replace(/notPunctSpace/g, Q).replace(/punctSpace/g, B).replace(/punct/g, $).getRegex();
var at = h(/^~~?(?:((?!~)punct)|[^\s~])/, "u").replace(/punct/g, $).getRegex();
var lt = "^[^~]+(?=[^~])|(?!~)punct(~~?)(?=[\\s]|$)|notPunctSpace(~~?)(?!~)(?=punctSpace|$)|(?!~)punctSpace(~~?)(?=notPunctSpace)|[\\s](~~?)(?!~)(?=punct)|(?!~)punct(~~?)(?!~)(?=punct)|notPunctSpace(~~?)(?=notPunctSpace)";
var ut = h(lt, "gu").replace(/notPunctSpace/g, Q).replace(/punctSpace/g, B).replace(/punct/g, $).getRegex();
var pt = h(/\\(punct)/, "gu").replace(/punct/g, $).getRegex();
var ct = h(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme", /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email", /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex();
var ht = h(ee).replace("(?:-->|$)", "-->").getRegex();
var dt = h("^comment|^</[a-zA-Z][a-zA-Z0-9-]*\\s*>|^<[a-zA-Z][a-zA-Z0-9-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment", ht).replace("attribute", /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex();
var be = /\[(?:\\[\s\S]|[^\[\]\\])*\]/;
var U = h(/(?:\[(?:brackets|\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+(?!`)[^`]*?`+(?!`)|``+(?=\])|[^\[\]\\`])*?/).replace("brackets", be).getRegex();
var kt = h(/^!?\[(label)\]\([ \t\n]*(href)(?:(?:[ \t]+(?:\n[ \t]*)?|\n[ \t]*)(title))?[ \t\n]*\)/).replace("label", U).replace("href", /<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]+|(?=\))/).replace("title", /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex();
var gt = h(/^!?\[(label)\]\[(ref)\]/).replace("label", U).replace("ref", Y).getRegex();
var ft = h(/^!?\[(ref)\](?:\[\])?/).replace("ref", Y).getRegex();
var pe = /(?!\s*\])(?:\\[\s\S]|[^\[\]\\]){1,999}/;
var mt = h(/(?:[^\[\]\\`]*(?:\[(?:brackets|\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+(?!`)[^`]*?`+(?!`)|``+(?=\]))){0,999}?[^\[\]\\`]*?/).replace("brackets", be).getRegex();
var xt = h("reflink|nolink(?!\\()", "g").replace("reflink", h(/^!?\[(label)\]\[(ref)\]/).replace("label", mt).replace("ref", pe).getRegex()).replace("nolink", h(/^!?\[(ref)\](?:\[\])?/).replace("ref", pe).getRegex()).getRegex();
var ce = /[hH][tT][tT][pP][sS]?|[fF][tT][pP]/;
var bt = /[A-Za-z0-9._+-]+@[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![\w-])/;
var Rt = h(/(?:mailto:email|xmpp:email(?:\/[A-Za-z0-9@.]+)?)/).replace(/email/g, bt).getRegex();
var ne = { _backpedal: A, anyPunctuation: pt, autolink: ct, blockSkip: We, br: ge, code: Ne, del: A, delLDelim: A, delRDelim: A, emStrongLDelim: Xe, emStrongRDelimAst: et, emStrongRDelimUnd: st, escape: Ge, link: kt, nolink: ft, punctuation: je, reflink: gt, reflinkSearch: xt, tag: dt, text: Qe, url: A };
var Tt = __spreadProps(__spreadValues({}, ne), { emStrongLDelim: Ye, emStrongRDelimAst: rt, emStrongRDelimUnd: ot, link: h(/^!?\[(label)\]\((.*?)\)/).replace("label", U).getRegex(), reflink: h(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", U).getRegex() });
var X = __spreadProps(__spreadValues({}, ne), { emStrongRDelimAst: tt, emStrongLDelim: Je, delLDelim: at, delRDelim: ut, url: h(/^emailProtocol|^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace("emailProtocol", Rt).replace("protocol", ce).replace("email", /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![\w-])/).getRegex(), _backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/, del: /^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/, text: h(/^(?:[^a-zA-Z0-9](?=emailProtocol)|(`+|~+|[^`~])(?:(?=[`~])|(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9](?=emailProtocol)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@))))/).replace("protocol", ce).replace(/emailProtocol/g, /(?:mailto|xmpp):/).getRegex() });
var Ot = __spreadProps(__spreadValues({}, X), { br: h(ge).replace("{2,}", "*").getRegex(), text: h(X.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex() });
var j = { normal: te, gfm: Ze, pedantic: He };
var D = { normal: ne, gfm: X, breaks: Ot, pedantic: Tt };
var wt = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" };
var Re = (l3) => wt[l3];
function O(l3, e) {
  if (e) {
    if (x.escapeTest.test(l3)) return l3.replace(x.escapeReplace, Re);
  } else if (x.escapeTestNoEncode.test(l3)) return l3.replace(x.escapeReplaceNoEncode, Re);
  return l3;
}
function Te(l3) {
  return l3.replace(x.numericCharacterReference, (e, t, n) => {
    let s = t === void 0 ? Number.parseInt(n, 16) : Number.parseInt(t, 10);
    return s === 0 || s > 1114111 || s >= 55296 && s <= 57343 ? "\uFFFD" : String.fromCodePoint(s);
  });
}
function re(l3) {
  try {
    l3 = encodeURI(l3).replace(x.percentDecode, "%");
  } catch {
    return null;
  }
  return l3;
}
function se(l3, e) {
  let t = l3.replace(x.findPipe, (r, o, i) => {
    let u = false, a = o;
    for (; --a >= 0 && i[a] === "\\"; ) u = !u;
    return u ? "|" : " |";
  }), n = t.split(x.splitPipe), s = 0;
  if (n[0].trim() || n.shift(), n.length > 0 && !n.at(-1)?.trim() && n.pop(), e) if (n.length > e) n.splice(e);
  else for (; n.length < e; ) n.push("");
  for (; s < n.length; s++) n[s] = n[s].trim().replace(x.slashPipe, "|");
  return n;
}
function L(l3, e, t) {
  let n = l3.length;
  if (n === 0) return "";
  let s = 0;
  for (; s < n; ) {
    let r = l3.charAt(n - s - 1);
    if (r === e && !t) s++;
    else if (r !== e && t) s++;
    else break;
  }
  return l3.slice(0, n - s);
}
function ie(l3) {
  let e = l3.split(`
`), t = e.length - 1;
  for (; t >= 0 && x.blankLine.test(e[t]); ) t--;
  return e.length - t <= 2 ? l3 : e.slice(0, t + 1).join(`
`);
}
function q(l3) {
  return l3.trim().toLowerCase().toUpperCase().toLowerCase();
}
function oe(l3, e) {
  if (l3.indexOf(e[0]) === -1 && l3.indexOf(e[1]) === -1) return -1;
  let t = 0;
  for (let n = 0; n < l3.length; n++) if (l3[n] === "\\") n++;
  else if (l3[n] === e[0]) t++;
  else if (l3[n] === e[1] && (t--, t < 0)) return n;
  return t > 0 ? -2 : -1;
}
function ae(l3, e = 0) {
  let t = e, n = "";
  for (let s of l3) if (s === "	") {
    let r = 4 - t % 4;
    n += " ".repeat(r), t += r;
  } else n += s, t++;
  return n;
}
function Oe(l3, e, t, n, s) {
  let r = e.href, o = e.title || null, i = l3[1].replace(s.other.outputLinkReplace, "$1"), u = l3[0].charAt(0) === "!";
  n.state.inLink = true;
  let a = n.state.linkEmitted, p = n.state.inRawBlock;
  n.state.linkEmitted = false;
  let c = n.inlineTokens(i), d = n.state.linkEmitted;
  if (n.state.linkEmitted = a, n.state.inLink = false, !u) {
    if (d) {
      n.state.inRawBlock = p;
      return;
    }
    n.state.linkEmitted = true;
  }
  return { type: u ? "image" : "link", raw: t, href: r, title: o, text: i, tokens: c };
}
function Pt(l3, e, t) {
  let n = l3.match(t.other.indentCodeCompensation);
  if (n === null) return e;
  let s = n[1];
  return e.split(`
`).map((r) => {
    let o = r.match(t.other.beginningSpace);
    if (o === null) return r;
    let [i] = o;
    return r.slice(Math.min(i.length, s.length));
  }).join(`
`);
}
function we(l3, e, t, n) {
  if (!e.includes("<")) return false;
  for (let s = 0; s < e.length; s++) {
    if (e[s] === "\\") {
      s++;
      continue;
    }
    if (e[s] === "`") {
      let i = n.inline.code.exec(e.slice(s));
      if (i) {
        s += i[0].length - 1;
        continue;
      }
    }
    if (e[s] !== "<") continue;
    let r = l3.slice(t + s), o = n.inline.tag.exec(r) || n.inline.autolink.exec(r);
    if (o) {
      if (o[0].length > e.length - s) return true;
      s += o[0].length - 1;
    }
  }
  return false;
}
var y = class {
  options;
  rules;
  lexer;
  constructor(e) {
    this.options = e || P;
  }
  space(e) {
    let t = this.rules.block.newline.exec(e);
    if (t && t[0].length > 0) return { type: "space", raw: t[0] };
  }
  code(e) {
    let t = this.rules.block.code.exec(e);
    if (t) {
      let n = this.options.pedantic ? t[0] : ie(t[0]), s = n.replace(this.rules.other.codeRemoveIndent, "");
      return { type: "code", raw: n, codeBlockStyle: "indented", text: s };
    }
  }
  fences(e) {
    let t = this.rules.block.fences.exec(e);
    if (t) {
      let n = t[0], s = Pt(n, t[3] || "", this.rules);
      return { type: "code", raw: n, lang: t[2] ? t[2].trim().replace(this.rules.inline.anyPunctuation, "$1") : t[2], text: s };
    }
  }
  heading(e) {
    let t = this.rules.block.heading.exec(e);
    if (t) {
      let n = t[2].trim();
      if (this.rules.other.endingHash.test(n)) {
        let s = L(n, "#");
        (this.options.pedantic || !s || this.rules.other.endingSpaceTabChar.test(s)) && (n = s.trim());
      }
      return { type: "heading", raw: L(t[0], `
`), depth: t[1].length, text: n, tokens: this.lexer.inline(n) };
    }
  }
  hr(e) {
    let t = this.rules.block.hr.exec(e);
    if (t) return { type: "hr", raw: L(t[0], `
`) };
  }
  blockquote(e) {
    let t = this.rules.block.blockquote.exec(e);
    if (t) {
      let n = L(t[0], `
`).split(`
`), s = "", r = "", o = [];
      for (; n.length > 0; ) {
        let i = false, u = [], a;
        for (a = 0; a < n.length; a++) if (this.rules.other.blockquoteStart.test(n[a])) u.push(n[a]), i = true;
        else if (!i) u.push(n[a]);
        else break;
        n = n.slice(a);
        let p = u.join(`
`), c = p.replace(this.rules.other.blockquoteSetextReplace, `
    $1`).replace(this.rules.other.blockquoteSetextReplace2, "");
        s = s ? `${s}
${p}` : p, r = r ? `${r}
${c}` : c;
        let d = this.lexer.state.top;
        if (this.lexer.state.top = true, this.lexer.blockTokens(c, o, true), this.lexer.state.top = d, n.length === 0) break;
        let m = o.at(-1);
        if (m?.type === "code") break;
        if (m?.type === "blockquote") {
          let b = m, g = n.join(`
`), w = b.raw + `
` + g.replace(this.rules.other.blockquoteSetextReplace2, ""), f = this.blockquote(w);
          o[o.length - 1] = f;
          let M = w.substring(f.raw.length).replace(/^\n/, ""), v = M ? M.split(`
`).length : 0, Z = v ? n.slice(0, -v) : n;
          Z.length > 0 && (s = `${s}
${Z.join(`
`)}`), r = r.substring(0, r.length - b.text.length) + f.text;
          break;
        } else if (m?.type === "list") {
          let b = m, g = b.raw + `
` + n.join(`
`), w = this.list(g);
          o[o.length - 1] = w, s = s.substring(0, s.length - m.raw.length) + w.raw, r = r.substring(0, r.length - b.raw.length) + w.raw, n = g.substring(o.at(-1).raw.length).split(`
`);
          continue;
        }
      }
      return { type: "blockquote", raw: s, tokens: o, text: r };
    }
  }
  list(e) {
    let t = this.rules.block.list.exec(e);
    if (t) {
      let n = t[1].trim(), s = n.length > 1, r = { type: "list", raw: "", ordered: s, start: s ? +n.slice(0, -1) : "", loose: false, items: [] };
      n = s ? `\\d{1,9}\\${n.slice(-1)}` : `\\${n}`, this.options.pedantic && (n = s ? n : "[*+-]");
      let o = this.rules.other.listItemRegex(n), i = false;
      for (; e; ) {
        let a = false, p = "", c = "";
        if (!(t = o.exec(e)) || this.rules.block.hr.test(e)) break;
        p = t[0], e = e.substring(p.length);
        let d = t[2].split(`
`, 1)[0], m = t[1].length, b = this.options.pedantic ? ae(d, m) : d.replace(this.rules.other.leadingSpaceTab, (M) => ae(M, m)), g = e.split(`
`, 1)[0], w = !b.trim(), f = 0;
        if (this.options.pedantic ? (f = 2, c = b.trimStart()) : w ? f = m + 1 : (f = b.search(this.rules.other.nonSpaceChar), f = f > 4 ? 1 : f, c = b.slice(f), f += m), w && this.rules.other.blankLine.test(g) && (p += g + `
`, e = e.substring(g.length + 1), a = true), !a) {
          let M = this.rules.other.nextBulletRegex(f), v = this.rules.other.hrRegex(f), Z = this.rules.other.fencesBeginRegex(f), le = this.rules.other.headingBeginRegex(f), Pe = this.rules.other.htmlBeginRegex(f), ye = this.rules.other.blockquoteBeginRegex(f);
          for (; e; ) {
            let K = e.split(`
`, 1)[0], H;
            if (g = K, this.options.pedantic ? (g = g.replace(this.rules.other.listReplaceNesting, "  "), H = g) : H = g.replace(this.rules.other.leadingSpaceTab, (Se) => Se.replace(this.rules.other.tabCharGlobal, "    ")), Z.test(g) || le.test(g) || Pe.test(g) || ye.test(g) || M.test(g) || v.test(g)) break;
            if (H.search(this.rules.other.nonSpaceChar) >= f || !g.trim()) c += `
` + H.slice(f);
            else {
              if (w || b.replace(this.rules.other.tabCharGlobal, "    ").search(this.rules.other.nonSpaceChar) >= 4 || Z.test(b) || le.test(b) || v.test(b)) break;
              c += `
` + g;
            }
            w = !g.trim(), p += K + `
`, e = e.substring(K.length + 1), b = H.slice(f);
          }
        }
        r.loose || (i ? r.loose = true : this.rules.other.doubleBlankLine.test(p) && (i = true)), r.items.push({ type: "list_item", raw: p, task: !!this.options.gfm && this.rules.other.listIsTask.test(c), loose: false, text: c, tokens: [] }), r.raw += p;
      }
      let u = r.items.at(-1);
      if (u) u.raw = u.raw.trimEnd(), u.text = u.text.trimEnd();
      else return;
      r.raw = r.raw.trimEnd();
      for (let a of r.items) if (this.lexer.state.top = false, a.tokens = this.lexer.blockTokens(a.text, []), !r.loose) {
        let p = a.tokens.filter((d) => d.type === "space"), c = p.length > 0 && p.some((d) => this.rules.other.anyLine.test(d.raw));
        r.loose = c;
      }
      for (let a of r.items) {
        let p = a.tokens[0];
        if (a.task && (p?.type === "text" || p?.type === "paragraph")) {
          a.text = a.text.replace(this.rules.other.listReplaceTask, ""), p.raw = p.raw.replace(this.rules.other.listReplaceTask, ""), p.text = p.text.replace(this.rules.other.listReplaceTask, "");
          for (let d = this.lexer.inlineQueue.length - 1; d >= 0; d--) if (this.rules.other.listIsTask.test(this.lexer.inlineQueue[d].src)) {
            this.lexer.inlineQueue[d].src = this.lexer.inlineQueue[d].src.replace(this.rules.other.listReplaceTask, "");
            break;
          }
          let c = this.rules.other.listTaskCheckbox.exec(a.raw);
          if (c) {
            let d = { type: "checkbox", raw: c[0] + " ", checked: c[0] !== "[ ]" };
            a.checked = d.checked, r.loose ? a.tokens[0] && ["paragraph", "text"].includes(a.tokens[0].type) && "tokens" in a.tokens[0] && a.tokens[0].tokens ? (a.tokens[0].raw = d.raw + a.tokens[0].raw, a.tokens[0].text = d.raw + a.tokens[0].text, a.tokens[0].tokens.unshift(d)) : a.tokens.unshift({ type: "paragraph", raw: d.raw, text: d.raw, tokens: [d] }) : a.tokens.unshift(d);
          }
        } else a.task && (a.task = false);
      }
      if (r.loose) for (let a of r.items) {
        a.loose = true;
        for (let p of a.tokens) p.type === "text" && (p.type = "paragraph");
      }
      return r;
    }
  }
  html(e) {
    let t = this.rules.block.html.exec(e);
    if (t) {
      let n = ie(t[0]);
      return { type: "html", block: true, raw: n, pre: t[1] === "pre" || t[1] === "script" || t[1] === "style", text: n };
    }
  }
  def(e) {
    let t = this.rules.block.def.exec(e);
    if (t) {
      if (!this.rules.other.startAngleBracket.test(t[2]) && oe(t[2], "()") !== -1) return;
      let n = q(t[1]).replace(this.rules.other.multipleSpaceGlobal, " "), s = t[2] ? t[2].replace(this.rules.other.hrefBrackets, "$1").replace(this.rules.inline.anyPunctuation, "$1") : "", r = t[3] ? t[3].substring(1, t[3].length - 1).replace(this.rules.inline.anyPunctuation, "$1") : t[3];
      return { type: "def", tag: n, raw: L(t[0], `
`), href: s, title: r };
    }
  }
  table(e) {
    let t = this.rules.block.table.exec(e);
    if (!t || !this.rules.other.tableDelimiter.test(t[2])) return;
    let n = se(t[1]), s = t[2].replace(this.rules.other.tableAlignChars, "").split("|"), r = t[3]?.trim() ? t[3].replace(this.rules.other.tableRowBlankLine, "").split(`
`) : [], o = { type: "table", raw: L(t[0], `
`), header: [], align: [], rows: [] };
    if (n.length === s.length) {
      for (let i of s) this.rules.other.tableAlignRight.test(i) ? o.align.push("right") : this.rules.other.tableAlignCenter.test(i) ? o.align.push("center") : this.rules.other.tableAlignLeft.test(i) ? o.align.push("left") : o.align.push(null);
      for (let i = 0; i < n.length; i++) o.header.push({ text: n[i], tokens: this.lexer.inline(n[i]), header: true, align: o.align[i] });
      for (let i of r) o.rows.push(se(i, o.header.length).map((u, a) => ({ text: u, tokens: this.lexer.inline(u), header: false, align: o.align[a] })));
      return o;
    }
  }
  lheading(e) {
    let t = this.rules.block.lheading.exec(e);
    if (t) {
      let n = t[1].trim();
      return { type: "heading", raw: L(t[0], `
`), depth: t[2].charAt(0) === "=" ? 1 : 2, text: n, tokens: this.lexer.inline(n) };
    }
  }
  paragraph(e) {
    let t = this.rules.block.paragraph.exec(e);
    if (t) {
      let n = t[1].charAt(t[1].length - 1) === `
` ? t[1].slice(0, -1) : t[1];
      return { type: "paragraph", raw: t[0], text: n, tokens: this.lexer.inline(n) };
    }
  }
  text(e) {
    let t = this.rules.block.text.exec(e);
    if (t) return { type: "text", raw: t[0], text: t[0], tokens: this.lexer.inline(t[0]) };
  }
  escape(e) {
    let t = this.rules.inline.escape.exec(e);
    if (t) return { type: "escape", raw: t[0], text: t[1] };
  }
  tag(e) {
    let t = this.rules.inline.tag.exec(e);
    if (t) return !this.lexer.state.inLink && this.rules.other.startATag.test(t[0]) ? this.lexer.state.inLink = true : this.lexer.state.inLink && this.rules.other.endATag.test(t[0]) && (this.lexer.state.inLink = false), !this.lexer.state.inRawBlock && this.rules.other.startPreScriptTag.test(t[0]) ? this.lexer.state.inRawBlock = true : this.lexer.state.inRawBlock && this.rules.other.endPreScriptTag.test(t[0]) && (this.lexer.state.inRawBlock = false), { type: "html", raw: t[0], inLink: this.lexer.state.inLink, inRawBlock: this.lexer.state.inRawBlock, block: false, text: t[0] };
  }
  link(e) {
    if (this.lexer.state.linkParenPossible === false) return;
    let t = this.rules.inline.link.exec(e);
    if (t) {
      let n = t[0].charAt(0) === "!" ? 2 : 1;
      if (!this.options.pedantic && we(e, t[1], n, this.rules)) return;
      let s = t[2].trim();
      if (!this.options.pedantic && this.rules.other.startAngleBracket.test(s)) {
        if (!this.rules.other.endAngleBracket.test(s)) return;
        let i = L(s.slice(0, -1), "\\");
        if ((s.length - i.length) % 2 === 0) return;
      } else {
        let i = oe(t[2], "()");
        if (i === -2) return;
        if (i > -1) {
          let a = (t[0].indexOf("!") === 0 ? 5 : 4) + t[1].length + i;
          t[2] = t[2].substring(0, i), t[0] = t[0].substring(0, a).trim(), t[3] = "";
        }
      }
      let r = t[2], o = "";
      if (this.options.pedantic) {
        let i = this.rules.other.pedanticHrefTitle.exec(r);
        i && (r = i[1], o = i[3]);
      } else o = t[3] ? t[3].slice(1, -1) : "";
      return r = r.trim(), this.rules.other.startAngleBracket.test(r) && (this.options.pedantic && !this.rules.other.endAngleBracket.test(s) ? r = r.slice(1) : r = r.slice(1, -1)), Oe(t, { href: r && r.replace(this.rules.inline.anyPunctuation, "$1"), title: o && o.replace(this.rules.inline.anyPunctuation, "$1") }, t[0], this.lexer, this.rules);
    }
  }
  reflink(e, t) {
    let n;
    if ((n = this.rules.inline.reflink.exec(e)) || (n = this.rules.inline.nolink.exec(e))) {
      let s = n[0].charAt(0) === "!" ? 2 : 1;
      if (!this.options.pedantic && we(e, n[1], s, this.rules)) return;
      let r = (n[2] || n[1]).replace(this.rules.other.multipleSpaceGlobal, " "), o = t[q(r)];
      if (!o) {
        let i = n[0].charAt(0);
        return { type: "text", raw: i, text: i };
      }
      return Oe(n, o, n[0], this.lexer, this.rules);
    }
  }
  emStrong(e, t, n = "") {
    let s = this.rules.inline.emStrongLDelim.exec(e);
    if (!s || !s[1] && !s[2] && !s[3] && !s[4] || s[4] && n.match(this.rules.other.unicodeAlphaNumeric)) return;
    if (!(s[1] || s[3] || "") || !n || this.rules.inline.punctuation.exec(n)) {
      let o = [...s[0]].length - 1, i, u, a = o, p = 0, c = s[0][0], d = n === c, m = c === "*" ? this.rules.inline.emStrongRDelimAst : this.rules.inline.emStrongRDelimUnd;
      for (m.lastIndex = 0, t = t.slice(-1 * e.length + o); (s = m.exec(t)) !== null; ) {
        if (i = s[1] || s[2] || s[3] || s[4] || s[5] || s[6], !i) continue;
        if (u = [...i].length, s[3] || s[4]) {
          a += u;
          continue;
        } else if (s[5] || s[6]) {
          if (o % 3 && !((o + u) % 3)) {
            p += u;
            continue;
          }
          if (d) break;
        }
        if (a -= u, a > 0) continue;
        u = Math.min(u, u + a + p);
        let b = [...s[0]][0].length, g = e.slice(0, o + s.index + b + u);
        if (Math.min(o, u) % 2) {
          let f = g.slice(1, -1);
          return { type: "em", raw: g, text: f, tokens: this.lexer.inlineTokens(f) };
        }
        let w = g.slice(2, -2);
        return { type: "strong", raw: g, text: w, tokens: this.lexer.inlineTokens(w) };
      }
    }
  }
  codespan(e) {
    let t = this.rules.inline.code.exec(e);
    if (t) {
      let n = t[2].replace(this.rules.other.newLineCharGlobal, " "), s = this.rules.other.nonSpaceChar.test(n), r = this.rules.other.startingSpaceChar.test(n) && this.rules.other.endingSpaceChar.test(n);
      return s && r && (n = n.substring(1, n.length - 1)), { type: "codespan", raw: t[0], text: n };
    }
  }
  br(e) {
    let t = this.rules.inline.br.exec(e);
    if (t) return { type: "br", raw: t[0] };
  }
  del(e, t, n = "") {
    let s = this.rules.inline.delLDelim.exec(e);
    if (!s) return;
    if (!(s[1] || "") || !n || this.rules.inline.punctuation.exec(n)) {
      let o = [...s[0]].length - 1, i, u, a = o, p = this.rules.inline.delRDelim;
      for (p.lastIndex = 0, t = t.slice(-1 * e.length + o); (s = p.exec(t)) !== null; ) {
        if (i = s[1] || s[2] || s[3] || s[4] || s[5] || s[6], !i || (u = [...i].length, u !== o)) continue;
        if (s[3] || s[4]) {
          a += u;
          continue;
        }
        if (a -= u, a > 0) continue;
        u = Math.min(u, u + a);
        let c = [...s[0]][0].length, d = e.slice(0, o + s.index + c + u), m = d.slice(o, -o);
        return { type: "del", raw: d, text: m, tokens: this.lexer.inlineTokens(m) };
      }
    }
  }
  autolink(e) {
    let t = this.rules.inline.autolink.exec(e);
    if (t) {
      let n, s;
      return t[2] === "@" ? (n = t[1], s = "mailto:" + n) : (n = t[1], s = n), { type: "link", raw: t[0], text: n, href: s, autolink: true, tokens: [{ type: "text", raw: n, text: n }] };
    }
  }
  url(e) {
    let t;
    if (t = this.rules.inline.url.exec(e)) {
      let n, s;
      if (t[2] === "@") n = t[0], s = "mailto:" + n;
      else {
        let r;
        do
          r = t[0], t[0] = this.rules.inline._backpedal.exec(t[0])?.[0] ?? "";
        while (r !== t[0]);
        n = t[0], t[1] === "www." ? s = "http://" + t[0] : s = t[0];
      }
      return { type: "link", raw: t[0], text: n, href: s, autolink: true, tokens: [{ type: "text", raw: n, text: n }] };
    }
  }
  inlineText(e) {
    let t = this.rules.inline.text.exec(e);
    if (t) {
      let n = this.lexer.state.inRawBlock;
      return { type: "text", raw: t[0], text: n ? t[0] : Te(t[0]), escaped: n };
    }
  }
};
var R = class l {
  tokens;
  options;
  state;
  inlineQueue;
  tokenizer;
  constructor(e) {
    this.tokens = [], this.tokens.links = /* @__PURE__ */ Object.create(null), this.options = e || P, this.options.tokenizer = this.options.tokenizer || new y(), this.tokenizer = this.options.tokenizer, this.tokenizer.options = this.options, this.tokenizer.lexer = this, this.inlineQueue = [], this.state = { inLink: false, inRawBlock: false, linkEmitted: false, linkParenPossible: true, top: true };
    let t = { other: x, block: j.normal, inline: D.normal };
    this.options.pedantic ? (t.block = j.pedantic, t.inline = D.pedantic) : this.options.gfm && (t.block = j.gfm, this.options.breaks ? t.inline = D.breaks : t.inline = D.gfm), this.tokenizer.rules = t;
  }
  static get rules() {
    return { block: j, inline: D };
  }
  static lex(e, t) {
    return new l(t).lex(e);
  }
  static lexInline(e, t) {
    return new l(t).inlineTokens(e);
  }
  lex(e) {
    e = e.replace(x.carriageReturn, `
`), this.blockTokens(e, this.tokens);
    for (let t = 0; t < this.inlineQueue.length; t++) {
      let n = this.inlineQueue[t];
      this.inlineTokens(n.src, n.tokens);
    }
    return this.inlineQueue = [], this.tokens;
  }
  blockTokens(e, t = [], n = false) {
    this.tokenizer.lexer = this, this.options.pedantic && (e = e.replace(x.tabCharGlobal, "    ").replace(x.spaceLine, ""));
    let s = 1 / 0;
    for (; e; ) {
      if (e.length < s) s = e.length;
      else {
        this.infiniteLoopError(e.charCodeAt(0));
        break;
      }
      let r;
      if (this.options.extensions?.block?.some((i) => (r = i.call({ lexer: this }, e, t)) ? (e = e.substring(r.raw.length), t.push(r), true) : false)) continue;
      if (r = this.tokenizer.space(e)) {
        e = e.substring(r.raw.length);
        let i = t.at(-1);
        r.raw.length === 1 && i !== void 0 ? i.raw += `
` : t.push(r);
        continue;
      }
      if (r = this.tokenizer.code(e)) {
        e = e.substring(r.raw.length);
        let i = t.at(-1);
        i?.type === "paragraph" || i?.type === "text" ? (i.raw += (i.raw.endsWith(`
`) ? "" : `
`) + r.raw, i.text += `
` + r.text, this.inlineQueue.at(-1).src = i.text) : t.push(r);
        continue;
      }
      if (r = this.tokenizer.fences(e)) {
        e = e.substring(r.raw.length), t.push(r);
        continue;
      }
      if (r = this.tokenizer.heading(e)) {
        e = e.substring(r.raw.length), t.push(r);
        continue;
      }
      if (r = this.tokenizer.hr(e)) {
        e = e.substring(r.raw.length), t.push(r);
        continue;
      }
      if (r = this.tokenizer.blockquote(e)) {
        e = e.substring(r.raw.length), t.push(r);
        continue;
      }
      if (r = this.tokenizer.list(e)) {
        e = e.substring(r.raw.length), t.push(r);
        continue;
      }
      if (r = this.tokenizer.html(e)) {
        e = e.substring(r.raw.length), t.push(r);
        continue;
      }
      if (r = this.tokenizer.def(e)) {
        e = e.substring(r.raw.length);
        let i = t.at(-1);
        i?.type === "paragraph" || i?.type === "text" ? (i.raw += (i.raw.endsWith(`
`) ? "" : `
`) + r.raw, i.text += `
` + r.raw, this.inlineQueue.at(-1).src = i.text) : this.tokens.links[r.tag] || (this.tokens.links[r.tag] = { href: r.href, title: r.title }, t.push(r));
        continue;
      }
      if (r = this.tokenizer.table(e)) {
        e = e.substring(r.raw.length), t.push(r);
        continue;
      }
      if (r = this.tokenizer.lheading(e)) {
        e = e.substring(r.raw.length), t.push(r);
        continue;
      }
      let o = e;
      if (this.options.extensions?.startBlock) {
        let i = 1 / 0, u = e.slice(1), a;
        this.options.extensions.startBlock.forEach((p) => {
          a = p.call({ lexer: this }, u), typeof a == "number" && a >= 0 && (i = Math.min(i, a));
        }), i < 1 / 0 && i >= 0 && (o = e.substring(0, i + 1));
      }
      if (this.state.top && (r = this.tokenizer.paragraph(o))) {
        let i = t.at(-1);
        n && i?.type === "paragraph" ? (i.raw += (i.raw.endsWith(`
`) ? "" : `
`) + r.raw, i.text += `
` + r.text, this.inlineQueue.pop(), this.inlineQueue.at(-1).src = i.text) : t.push(r), n = o.length !== e.length, e = e.substring(r.raw.length);
        continue;
      }
      if (r = this.tokenizer.text(e)) {
        e = e.substring(r.raw.length);
        let i = t.at(-1);
        i?.type === "text" ? (i.raw += (i.raw.endsWith(`
`) ? "" : `
`) + r.raw, i.text += `
` + r.text, this.inlineQueue.pop(), this.inlineQueue.at(-1).src = i.text) : t.push(r);
        continue;
      }
      if (e) {
        this.infiniteLoopError(e.charCodeAt(0));
        break;
      }
    }
    return this.state.top = true, t;
  }
  inline(e, t = []) {
    return this.inlineQueue.push({ src: e, tokens: t }), t;
  }
  linkInText(e) {
    if (!e.includes("[")) return false;
    let t = this.tokenizer.rules.inline.link;
    for (let n of e.matchAll(this.tokenizer.rules.inline.blockSkip)) if (t.test(n[0]) && e.charAt(n.index - 1) !== "!") return true;
    for (let n of e.matchAll(this.tokenizer.rules.inline.reflinkSearch)) {
      let s = n[0], r = s.lastIndexOf("[");
      if (!(s.charAt(0) === "!" || !Object.hasOwn(this.tokens.links, q(s.slice(r + 1, -1)))) && !(r > 1 && this.linkInText(s.slice(1, r - 1)))) return true;
    }
    return false;
  }
  inlineTokens(e, t = []) {
    this.tokenizer.lexer = this;
    let n = this.state.linkParenPossible;
    this.state.linkParenPossible = n && e.includes(")");
    try {
      return this.#e(e, t);
    } finally {
      this.state.linkParenPossible = n;
    }
  }
  #e(e, t) {
    let n = e;
    if (this.tokens.links && e.includes("[")) {
      let i = this.tokenizer.rules.inline.reflinkSearch, u = (a) => {
        let p = a.lastIndexOf("[");
        if (!Object.hasOwn(this.tokens.links, q(a.slice(p + 1, -1)))) return a;
        if (p > 1 && a.charAt(0) !== "!") {
          let c = a.slice(1, p - 1);
          if (this.linkInText(c)) return "[" + c.replace(i, u) + "][" + "a".repeat(a.length - p - 2) + "]";
        }
        return "[" + "a".repeat(a.length - 2) + "]";
      };
      n = n.replace(i, u);
    }
    n = n.replace(this.tokenizer.rules.inline.anyPunctuation, (i) => "+".repeat(i.length)), n = n.replace(this.tokenizer.rules.inline.blockSkip, (i, u, a) => {
      let p = a ? a.length : 0;
      return i.slice(0, p) + "[" + "a".repeat(i.length - p - 2) + "]";
    }), n = this.options.hooks?.emStrongMask?.call({ lexer: this }, n) ?? n;
    let s = false, r = "", o = 1 / 0;
    for (; e; ) {
      if (e.length < o) o = e.length;
      else {
        this.infiniteLoopError(e.charCodeAt(0));
        break;
      }
      s || (r = ""), s = false;
      let i;
      if (this.options.extensions?.inline?.some((a) => (i = a.call({ lexer: this }, e, t)) ? (e = e.substring(i.raw.length), t.push(i), true) : false)) continue;
      if (i = this.tokenizer.escape(e)) {
        e = e.substring(i.raw.length), t.push(i);
        continue;
      }
      if (i = this.tokenizer.tag(e)) {
        e = e.substring(i.raw.length), t.push(i);
        continue;
      }
      if (i = this.tokenizer.link(e)) {
        e = e.substring(i.raw.length), t.push(i);
        continue;
      }
      if (i = this.tokenizer.reflink(e, this.tokens.links)) {
        e = e.substring(i.raw.length);
        let a = t.at(-1);
        i.type === "text" && a?.type === "text" ? (a.raw += i.raw, a.text += i.text) : t.push(i);
        continue;
      }
      if (i = this.tokenizer.emStrong(e, n, r)) {
        e = e.substring(i.raw.length), t.push(i);
        continue;
      }
      if (i = this.tokenizer.codespan(e)) {
        e = e.substring(i.raw.length), t.push(i);
        continue;
      }
      if (i = this.tokenizer.br(e)) {
        e = e.substring(i.raw.length), t.push(i);
        continue;
      }
      if (i = this.tokenizer.del(e, n, r)) {
        e = e.substring(i.raw.length), t.push(i);
        continue;
      }
      if (i = this.tokenizer.autolink(e)) {
        e = e.substring(i.raw.length), t.push(i);
        continue;
      }
      if (!this.state.inLink && (i = this.tokenizer.url(e))) {
        e = e.substring(i.raw.length), t.push(i);
        continue;
      }
      let u = e;
      if (this.options.extensions?.startInline) {
        let a = 1 / 0, p = e.slice(1), c;
        this.options.extensions.startInline.forEach((d) => {
          c = d.call({ lexer: this }, p), typeof c == "number" && c >= 0 && (a = Math.min(a, c));
        }), a < 1 / 0 && a >= 0 && (u = e.substring(0, a + 1));
      }
      if (i = this.tokenizer.inlineText(u)) {
        e = e.substring(i.raw.length), i.raw.slice(-1) !== "_" && (r = i.raw.slice(-1)), s = true;
        let a = t.at(-1);
        a?.type === "text" ? (a.raw += i.raw, a.text += i.text) : t.push(i);
        continue;
      }
      if (e) {
        this.infiniteLoopError(e.charCodeAt(0));
        break;
      }
    }
    return t;
  }
  infiniteLoopError(e) {
    let t = "Infinite loop on byte: " + e;
    if (this.options.silent) console.error(t);
    else throw new Error(t);
  }
};
var S = class {
  options;
  parser;
  constructor(e) {
    this.options = e || P;
  }
  space(e) {
    return "";
  }
  code({ text: e, lang: t, escaped: n }) {
    let s = (t || "").match(x.notSpaceStart)?.[0], r = e ? e.replace(x.endingNewline, "") + `
` : "";
    return s ? '<pre><code class="language-' + O(s) + '">' + (n ? r : O(r, true)) + `</code></pre>
` : "<pre><code>" + (n ? r : O(r, true)) + `</code></pre>
`;
  }
  blockquote({ tokens: e }) {
    return `<blockquote>
${this.parser.parse(e)}</blockquote>
`;
  }
  html({ text: e }) {
    return e;
  }
  def(e) {
    return "";
  }
  heading({ tokens: e, depth: t }) {
    return `<h${t}>${this.parser.parseInline(e)}</h${t}>
`;
  }
  hr(e) {
    return `<hr>
`;
  }
  list(e) {
    let t = e.ordered, n = e.start, s = "";
    for (let i = 0; i < e.items.length; i++) {
      let u = e.items[i];
      s += this.listitem(u);
    }
    let r = t ? "ol" : "ul", o = t && n !== 1 ? ' start="' + n + '"' : "";
    return "<" + r + o + `>
` + s + "</" + r + `>
`;
  }
  listitem(e) {
    return `<li>${this.parser.parse(e.tokens)}</li>
`;
  }
  checkbox({ checked: e }) {
    return "<input " + (e ? 'checked="" ' : "") + 'disabled="" type="checkbox"> ';
  }
  paragraph({ tokens: e }) {
    return `<p>${this.parser.parseInline(e)}</p>
`;
  }
  table(e) {
    let t = "", n = "";
    for (let r = 0; r < e.header.length; r++) n += this.tablecell(e.header[r]);
    t += this.tablerow({ text: n });
    let s = "";
    for (let r = 0; r < e.rows.length; r++) {
      let o = e.rows[r];
      n = "";
      for (let i = 0; i < o.length; i++) n += this.tablecell(o[i]);
      s += this.tablerow({ text: n });
    }
    return s && (s = `<tbody>${s}</tbody>`), `<table>
<thead>
` + t + `</thead>
` + s + `</table>
`;
  }
  tablerow({ text: e }) {
    return `<tr>
${e}</tr>
`;
  }
  tablecell(e) {
    let t = this.parser.parseInline(e.tokens), n = e.header ? "th" : "td";
    return (e.align ? `<${n} align="${e.align}">` : `<${n}>`) + t + `</${n}>
`;
  }
  strong({ tokens: e }) {
    return `<strong>${this.parser.parseInline(e)}</strong>`;
  }
  em({ tokens: e }) {
    return `<em>${this.parser.parseInline(e)}</em>`;
  }
  codespan({ text: e }) {
    return `<code>${O(e, true)}</code>`;
  }
  br(e) {
    return "<br>";
  }
  del({ tokens: e }) {
    return `<del>${this.parser.parseInline(e)}</del>`;
  }
  link({ href: e, title: t, text: n, tokens: s, autolink: r }) {
    let o = r ? O(n, true) : this.parser.parseInline(s), i = re(e);
    if (i === null) return o;
    e = O(i, r);
    let u = '<a href="' + e + '"';
    return t && (u += ' title="' + O(t) + '"'), u += ">" + o + "</a>", u;
  }
  image({ href: e, title: t, text: n, tokens: s }) {
    s && (n = this.parser.parseInline(s, this.parser.textRenderer));
    let r = re(e);
    if (r === null) return O(n);
    e = r;
    let o = `<img src="${O(e)}" alt="${O(n)}"`;
    return t && (o += ` title="${O(t)}"`), o += ">", o;
  }
  text(e) {
    return "tokens" in e && e.tokens ? this.parser.parseInline(e.tokens) : "escaped" in e && e.escaped ? e.text : O(e.text);
  }
};
var z = class {
  strong({ text: e }) {
    return e;
  }
  em({ text: e }) {
    return e;
  }
  codespan({ text: e }) {
    return e;
  }
  del({ text: e }) {
    return e;
  }
  html({ text: e }) {
    return e;
  }
  text({ text: e }) {
    return e;
  }
  link({ text: e }) {
    return "" + e;
  }
  image({ text: e }) {
    return "" + e;
  }
  br() {
    return "";
  }
  checkbox({ raw: e }) {
    return e;
  }
};
var T = class l2 {
  options;
  renderer;
  textRenderer;
  constructor(e) {
    this.options = e || P, this.options.renderer = this.options.renderer || new S(), this.renderer = this.options.renderer, this.renderer.options = this.options, this.renderer.parser = this, this.textRenderer = new z();
  }
  static parse(e, t) {
    return new l2(t).parse(e);
  }
  static parseInline(e, t) {
    return new l2(t).parseInline(e);
  }
  parse(e) {
    this.renderer.parser = this;
    let t = "";
    for (let n = 0; n < e.length; n++) {
      let s = e[n];
      if (this.options.extensions?.renderers?.[s.type]) {
        let o = s, i = this.options.extensions.renderers[o.type].call({ parser: this }, o);
        if (i !== false || !["space", "hr", "heading", "code", "table", "blockquote", "list", "checkbox", "html", "def", "paragraph", "text"].includes(o.type)) {
          t += i || "";
          continue;
        }
      }
      let r = s;
      switch (r.type) {
        case "space": {
          t += this.renderer.space(r);
          break;
        }
        case "hr": {
          t += this.renderer.hr(r);
          break;
        }
        case "heading": {
          t += this.renderer.heading(r);
          break;
        }
        case "code": {
          t += this.renderer.code(r);
          break;
        }
        case "table": {
          t += this.renderer.table(r);
          break;
        }
        case "blockquote": {
          t += this.renderer.blockquote(r);
          break;
        }
        case "list": {
          t += this.renderer.list(r);
          break;
        }
        case "checkbox": {
          t += this.renderer.checkbox(r);
          break;
        }
        case "html": {
          t += this.renderer.html(r);
          break;
        }
        case "def": {
          t += this.renderer.def(r);
          break;
        }
        case "paragraph": {
          t += this.renderer.paragraph(r);
          break;
        }
        case "text": {
          t += this.renderer.text(r);
          break;
        }
        default: {
          let o = 'Token with "' + r.type + '" type was not found.';
          if (this.options.silent) return console.error(o), "";
          throw new Error(o);
        }
      }
    }
    return t;
  }
  parseInline(e, t = this.renderer) {
    this.renderer.parser = this;
    let n = "";
    for (let s = 0; s < e.length; s++) {
      let r = e[s];
      if (this.options.extensions?.renderers?.[r.type]) {
        let i = this.options.extensions.renderers[r.type].call({ parser: this }, r);
        if (i !== false || !["escape", "html", "link", "image", "checkbox", "strong", "em", "codespan", "br", "del", "text"].includes(r.type)) {
          n += i || "";
          continue;
        }
      }
      let o = r;
      switch (o.type) {
        case "escape": {
          n += t.text(o);
          break;
        }
        case "html": {
          n += t.html(o);
          break;
        }
        case "link": {
          n += t.link(o);
          break;
        }
        case "image": {
          n += t.image(o);
          break;
        }
        case "checkbox": {
          n += t.checkbox(o);
          break;
        }
        case "strong": {
          n += t.strong(o);
          break;
        }
        case "em": {
          n += t.em(o);
          break;
        }
        case "codespan": {
          n += t.codespan(o);
          break;
        }
        case "br": {
          n += t.br(o);
          break;
        }
        case "del": {
          n += t.del(o);
          break;
        }
        case "text": {
          n += t.text(o);
          break;
        }
        default: {
          let i = 'Token with "' + o.type + '" type was not found.';
          if (this.options.silent) return console.error(i), "";
          throw new Error(i);
        }
      }
    }
    return n;
  }
};
var _ = class {
  options;
  block;
  constructor(e) {
    this.options = e || P;
  }
  static passThroughHooks = /* @__PURE__ */ new Set(["preprocess", "postprocess", "processAllTokens", "emStrongMask"]);
  static passThroughHooksRespectAsync = /* @__PURE__ */ new Set(["preprocess", "postprocess", "processAllTokens"]);
  preprocess(e) {
    return e;
  }
  postprocess(e) {
    return e;
  }
  processAllTokens(e) {
    return e;
  }
  emStrongMask(e) {
    return e;
  }
  provideLexer(e = this.block) {
    return e ? R.lex : R.lexInline;
  }
  provideParser(e = this.block) {
    return e ? T.parse : T.parseInline;
  }
};
var F = class {
  defaults = I();
  options = this.setOptions;
  parse = this.parseMarkdown(true);
  parseInline = this.parseMarkdown(false);
  Parser = T;
  Renderer = S;
  TextRenderer = z;
  Lexer = R;
  Tokenizer = y;
  Hooks = _;
  constructor(...e) {
    this.use(...e);
  }
  walkTokens(e, t) {
    let n = [];
    for (let s of e) switch (n = n.concat(t.call(this, s)), s.type) {
      case "table": {
        let r = s;
        for (let o of r.header) n = n.concat(this.walkTokens(o.tokens, t));
        for (let o of r.rows) for (let i of o) n = n.concat(this.walkTokens(i.tokens, t));
        break;
      }
      case "list": {
        let r = s;
        n = n.concat(this.walkTokens(r.items, t));
        break;
      }
      default: {
        let r = s;
        this.defaults.extensions?.childTokens?.[r.type] ? this.defaults.extensions.childTokens[r.type].forEach((o) => {
          let i = r[o].flat(1 / 0);
          n = n.concat(this.walkTokens(i, t));
        }) : r.tokens && (n = n.concat(this.walkTokens(r.tokens, t)));
      }
    }
    return n;
  }
  use(...e) {
    let t = this.defaults.extensions || { renderers: {}, childTokens: {} };
    return e.forEach((n) => {
      let s = __spreadValues({}, n);
      if (s.async = this.defaults.async || s.async || false, n.extensions && (n.extensions.forEach((r) => {
        if (!r.name) throw new Error("extension name required");
        if ("renderer" in r) {
          let o = t.renderers[r.name];
          o ? t.renderers[r.name] = function(...i) {
            let u = r.renderer.apply(this, i);
            return u === false && (u = o.apply(this, i)), u;
          } : t.renderers[r.name] = r.renderer;
        }
        if ("tokenizer" in r) {
          if (!r.level || r.level !== "block" && r.level !== "inline") throw new Error("extension level must be 'block' or 'inline'");
          let o = t[r.level];
          o ? o.unshift(r.tokenizer) : t[r.level] = [r.tokenizer], r.start && (r.level === "block" ? t.startBlock ? t.startBlock.push(r.start) : t.startBlock = [r.start] : r.level === "inline" && (t.startInline ? t.startInline.push(r.start) : t.startInline = [r.start]));
        }
        "childTokens" in r && r.childTokens && (t.childTokens[r.name] = r.childTokens);
      }), s.extensions = t), n.renderer) {
        let r = this.defaults.renderer || new S(this.defaults);
        for (let o in n.renderer) {
          if (!(o in r)) throw new Error(`renderer '${o}' does not exist`);
          if (["options", "parser"].includes(o)) continue;
          let i = o, u = n.renderer[i], a = r[i];
          r[i] = (...p) => {
            let c = u.apply(r, p);
            return c === false && (c = a.apply(r, p)), c || "";
          };
        }
        s.renderer = r;
      }
      if (n.tokenizer) {
        let r = this.defaults.tokenizer || new y(this.defaults);
        for (let o in n.tokenizer) {
          if (!(o in r)) throw new Error(`tokenizer '${o}' does not exist`);
          if (["options", "rules", "lexer"].includes(o)) continue;
          let i = o, u = n.tokenizer[i], a = r[i];
          r[i] = (...p) => {
            let c = u.apply(r, p);
            return c === false && (c = a.apply(r, p)), c;
          };
        }
        s.tokenizer = r;
      }
      if (n.hooks) {
        let r = this.defaults.hooks || new _();
        for (let o in n.hooks) {
          if (!(o in r)) throw new Error(`hook '${o}' does not exist`);
          if (["options", "block"].includes(o)) continue;
          let i = o, u = n.hooks[i], a = r[i];
          _.passThroughHooks.has(o) ? r[i] = (p) => {
            if (this.defaults.async && _.passThroughHooksRespectAsync.has(o)) return (async () => {
              let d = await u.call(r, p);
              return a.call(r, d);
            })();
            let c = u.call(r, p);
            return a.call(r, c);
          } : r[i] = (...p) => {
            if (this.defaults.async) return (async () => {
              let d = await u.apply(r, p);
              return d === false && (d = await a.apply(r, p)), d;
            })();
            let c = u.apply(r, p);
            return c === false && (c = a.apply(r, p)), c;
          };
        }
        s.hooks = r;
      }
      if (n.walkTokens) {
        let r = this.defaults.walkTokens, o = n.walkTokens;
        s.walkTokens = function(i) {
          let u = [];
          return u.push(o.call(this, i)), r && (u = u.concat(r.call(this, i))), u;
        };
      }
      this.defaults = __spreadValues(__spreadValues({}, this.defaults), s);
    }), this;
  }
  setOptions(e) {
    return this.defaults = __spreadValues(__spreadValues({}, this.defaults), e), this;
  }
  lexer(e, t) {
    return R.lex(e, t ?? this.defaults);
  }
  parser(e, t) {
    return T.parse(e, t ?? this.defaults);
  }
  parseMarkdown(e) {
    return (n, s) => {
      let r = __spreadValues({}, s), o = __spreadValues(__spreadValues({}, this.defaults), r), i = this.onError(!!o.silent, !!o.async);
      if (this.defaults.async === true && r.async === false) return i(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));
      if (typeof n > "u" || n === null) return i(new Error("marked(): input parameter is undefined or null"));
      if (typeof n != "string") return i(new Error("marked(): input parameter is of type " + Object.prototype.toString.call(n) + ", string expected"));
      if (o.hooks && (o.hooks.options = o, o.hooks.block = e), o.async) return (async () => {
        let u = o.hooks ? await o.hooks.preprocess(n) : n, p = await (o.hooks ? await o.hooks.provideLexer(e) : e ? R.lex : R.lexInline)(u, o), c = o.hooks ? await o.hooks.processAllTokens(p) : p;
        o.walkTokens && await Promise.all(this.walkTokens(c, o.walkTokens));
        let m = await (o.hooks ? await o.hooks.provideParser(e) : e ? T.parse : T.parseInline)(c, o);
        return o.hooks ? await o.hooks.postprocess(m) : m;
      })().catch(i);
      try {
        o.hooks && (n = o.hooks.preprocess(n));
        let a = (o.hooks ? o.hooks.provideLexer(e) : e ? R.lex : R.lexInline)(n, o);
        o.hooks && (a = o.hooks.processAllTokens(a)), o.walkTokens && this.walkTokens(a, o.walkTokens);
        let c = (o.hooks ? o.hooks.provideParser(e) : e ? T.parse : T.parseInline)(a, o);
        return o.hooks && (c = o.hooks.postprocess(c)), c;
      } catch (u) {
        return i(u);
      }
    };
  }
  onError(e, t) {
    return (n) => {
      if (n.message += `
Please report this to https://github.com/markedjs/marked.`, e) {
        let s = "<p>An error occurred:</p><pre>" + O(n.message + "", true) + "</pre>";
        return t ? Promise.resolve(s) : s;
      }
      if (t) return Promise.reject(n);
      throw n;
    };
  }
};
var E = new F();
function k(l3, e) {
  return E.parse(l3, e);
}
k.options = k.setOptions = function(l3) {
  return E.setOptions(l3), k.defaults = E.defaults, W(k.defaults), k;
};
k.getDefaults = I;
k.defaults = P;
function yt(...l3) {
  return E.use(...l3), k.defaults = E.defaults, W(k.defaults), k;
}
k.use = yt;
k.walkTokens = function(l3, e) {
  return E.walkTokens(l3, e);
};
k.parseInline = E.parseInline;
k.Parser = T;
k.parser = T.parse;
k.Renderer = S;
k.TextRenderer = z;
k.Lexer = R;
k.lexer = R.lex;
k.Tokenizer = y;
k.Hooks = _;
k.parse = k;
var gn = k.options;
var fn = k.setOptions;
var mn = k.walkTokens;
var xn = k.parseInline;
var Rn = T.parse;
var Tn = R.lex;

// node_modules/dompurify/dist/purify.es.mjs
function _OverloadYield(e, d) {
  this.v = e, this.k = d;
}
function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
function _arrayWithHoles(r) {
  if (Array.isArray(r)) return r;
}
function _iterableToArrayLimit(r, l3) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e, n, i, u, a = [], f = true, o = false;
    try {
      if (i = (t = t.call(r)).next, 0 === l3) {
        if (Object(t) !== t) return;
        f = false;
      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l3); f = true) ;
    } catch (r2) {
      o = true, n = r2;
    } finally {
      try {
        if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _slicedToArray(r, e) {
  return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest();
}
function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
  }
}
function AsyncGenerator(e) {
  var t, n;
  function resume(t2, n2) {
    try {
      var r = e[t2](n2), o = r.value, u = o instanceof _OverloadYield;
      Promise.resolve(u ? o.v : o).then(function(n3) {
        if (u) {
          var i = "return" === t2 && o.k ? t2 : "next";
          if (!o.k || n3.done) return resume(i, n3);
          n3 = e[i](n3).value;
        }
        settle(!!r.done, n3);
      }, function(e2) {
        resume("throw", e2);
      });
    } catch (e2) {
      settle(2, e2);
    }
  }
  function settle(e2, r) {
    2 === e2 ? t.reject(r) : t.resolve({
      value: r,
      done: e2
    }), (t = t.next) ? resume(t.key, t.arg) : n = null;
  }
  this._invoke = function(e2, r) {
    return new Promise(function(o, u) {
      var i = {
        key: e2,
        arg: r,
        resolve: o,
        reject: u,
        next: null
      };
      n ? n = n.next = i : (t = n = i, resume(e2, r));
    });
  }, "function" != typeof e.return && (this.return = void 0);
}
AsyncGenerator.prototype["function" == typeof Symbol && Symbol.asyncIterator || "@@asyncIterator"] = function() {
  return this;
}, AsyncGenerator.prototype.next = function(e) {
  return this._invoke("next", e);
}, AsyncGenerator.prototype.throw = function(e) {
  return this._invoke("throw", e);
}, AsyncGenerator.prototype.return = function(e) {
  return this._invoke("return", e);
};
var entries = Object.entries;
var setPrototypeOf = Object.setPrototypeOf;
var isFrozen = Object.isFrozen;
var getPrototypeOf = Object.getPrototypeOf;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var freeze = Object.freeze;
var seal = Object.seal;
var create = Object.create;
var _ref = typeof Reflect !== "undefined" && Reflect;
var apply = _ref.apply;
var construct = _ref.construct;
if (!freeze) freeze = function freeze2(x2) {
  return x2;
};
if (!seal) seal = function seal2(x2) {
  return x2;
};
if (!apply) apply = function apply2(func, thisArg) {
  for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) args[_key - 2] = arguments[_key];
  return func.apply(thisArg, args);
};
if (!construct) construct = function construct2(Func) {
  for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) args[_key2 - 1] = arguments[_key2];
  return new Func(...args);
};
var arrayForEach = unapply(Array.prototype.forEach);
Array.prototype.indexOf;
var arrayLastIndexOf = unapply(Array.prototype.lastIndexOf);
var arrayPop = unapply(Array.prototype.pop);
var arrayPush = unapply(Array.prototype.push);
Array.prototype.slice;
var arraySplice = unapply(Array.prototype.splice);
var arrayIsArray = Array.isArray;
var stringToLowerCase = unapply(String.prototype.toLowerCase);
var stringToString = unapply(String.prototype.toString);
var stringMatch = unapply(String.prototype.match);
var stringReplace = unapply(String.prototype.replace);
var stringIndexOf = unapply(String.prototype.indexOf);
var stringTrim = unapply(String.prototype.trim);
var numberToString = unapply(Number.prototype.toString);
var booleanToString = unapply(Boolean.prototype.toString);
var bigintToString = typeof BigInt === "undefined" ? null : unapply(BigInt.prototype.toString);
var symbolToString = typeof Symbol === "undefined" ? null : unapply(Symbol.prototype.toString);
var objectHasOwnProperty = unapply(Object.prototype.hasOwnProperty);
var objectToString = unapply(Object.prototype.toString);
var regExpTest = unapply(RegExp.prototype.test);
var typeErrorCreate = unconstruct(TypeError);
function unapply(func) {
  return function(thisArg) {
    if (thisArg instanceof RegExp) thisArg.lastIndex = 0;
    for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) args[_key3 - 1] = arguments[_key3];
    return apply(func, thisArg, args);
  };
}
function unconstruct(Func) {
  return function() {
    for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) args[_key4] = arguments[_key4];
    return construct(Func, args);
  };
}
function addToSet(set, array) {
  let transformCaseFunc = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : stringToLowerCase;
  if (setPrototypeOf) setPrototypeOf(set, null);
  if (!arrayIsArray(array)) return set;
  let l3 = array.length;
  while (l3--) {
    let element = array[l3];
    if (typeof element === "string") {
      const lcElement = transformCaseFunc(element);
      if (lcElement !== element) {
        if (!isFrozen(array)) array[l3] = lcElement;
        element = lcElement;
      }
    }
    set[element] = true;
  }
  return set;
}
function cleanArray(array) {
  for (let index = 0; index < array.length; index++) if (!objectHasOwnProperty(array, index)) array[index] = null;
  return array;
}
function clone(object) {
  const newObject = create(null);
  for (const _ref2 of entries(object)) {
    var _ref3 = _slicedToArray(_ref2, 2);
    const property = _ref3[0];
    const value = _ref3[1];
    if (objectHasOwnProperty(object, property)) {
      if (arrayIsArray(value)) newObject[property] = cleanArray(value);
      else if (value && typeof value === "object" && value.constructor === Object) newObject[property] = clone(value);
      else newObject[property] = value;
    }
  }
  return newObject;
}
function stringifyValue(value) {
  switch (typeof value) {
    case "string":
      return value;
    case "number":
      return numberToString(value);
    case "boolean":
      return booleanToString(value);
    case "bigint":
      return bigintToString ? bigintToString(value) : "0";
    case "symbol":
      return symbolToString ? symbolToString(value) : "Symbol()";
    case "undefined":
      return objectToString(value);
    case "function":
    case "object": {
      if (value === null) return objectToString(value);
      const valueAsRecord = value;
      const valueToString = lookupGetter(valueAsRecord, "toString");
      if (typeof valueToString === "function") {
        const stringified = valueToString(valueAsRecord);
        return typeof stringified === "string" ? stringified : objectToString(stringified);
      }
      return objectToString(value);
    }
    default:
      return objectToString(value);
  }
}
function lookupGetter(object, prop) {
  while (object !== null) {
    const desc = getOwnPropertyDescriptor(object, prop);
    if (desc) {
      if (desc.get) return unapply(desc.get);
      if (typeof desc.value === "function") return unapply(desc.value);
    }
    object = getPrototypeOf(object);
  }
  function fallbackValue() {
    return null;
  }
  return fallbackValue;
}
function isRegex(value) {
  try {
    regExpTest(value, "");
    return true;
  } catch (_unused) {
    return false;
  }
}
var html$1 = freeze([
  "a",
  "abbr",
  "acronym",
  "address",
  "area",
  "article",
  "aside",
  "audio",
  "b",
  "bdi",
  "bdo",
  "big",
  "blink",
  "blockquote",
  "body",
  "br",
  "button",
  "canvas",
  "caption",
  "center",
  "cite",
  "code",
  "col",
  "colgroup",
  "content",
  "data",
  "datalist",
  "dd",
  "decorator",
  "del",
  "details",
  "dfn",
  "dialog",
  "dir",
  "div",
  "dl",
  "dt",
  "element",
  "em",
  "fieldset",
  "figcaption",
  "figure",
  "font",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hgroup",
  "hr",
  "html",
  "i",
  "img",
  "input",
  "ins",
  "kbd",
  "label",
  "legend",
  "li",
  "main",
  "map",
  "mark",
  "marquee",
  "menu",
  "menuitem",
  "meter",
  "nav",
  "nobr",
  "ol",
  "optgroup",
  "option",
  "output",
  "p",
  "picture",
  "pre",
  "progress",
  "q",
  "rp",
  "rt",
  "ruby",
  "s",
  "samp",
  "search",
  "section",
  "select",
  "shadow",
  "slot",
  "small",
  "source",
  "spacer",
  "span",
  "strike",
  "strong",
  "style",
  "sub",
  "summary",
  "sup",
  "table",
  "tbody",
  "td",
  "template",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "tr",
  "track",
  "tt",
  "u",
  "ul",
  "var",
  "video",
  "wbr"
]);
var svg$1 = freeze([
  "svg",
  "a",
  "altglyph",
  "altglyphdef",
  "altglyphitem",
  "animatecolor",
  "animatemotion",
  "animatetransform",
  "circle",
  "clippath",
  "defs",
  "desc",
  "ellipse",
  "enterkeyhint",
  "exportparts",
  "filter",
  "font",
  "g",
  "glyph",
  "glyphref",
  "hkern",
  "image",
  "inputmode",
  "line",
  "lineargradient",
  "marker",
  "mask",
  "metadata",
  "mpath",
  "part",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "radialgradient",
  "rect",
  "stop",
  "style",
  "switch",
  "symbol",
  "text",
  "textpath",
  "title",
  "tref",
  "tspan",
  "view",
  "vkern"
]);
var svgFilters = freeze([
  "feBlend",
  "feColorMatrix",
  "feComponentTransfer",
  "feComposite",
  "feConvolveMatrix",
  "feDiffuseLighting",
  "feDisplacementMap",
  "feDistantLight",
  "feDropShadow",
  "feFlood",
  "feFuncA",
  "feFuncB",
  "feFuncG",
  "feFuncR",
  "feGaussianBlur",
  "feImage",
  "feMerge",
  "feMergeNode",
  "feMorphology",
  "feOffset",
  "fePointLight",
  "feSpecularLighting",
  "feSpotLight",
  "feTile",
  "feTurbulence"
]);
var svgDisallowed = freeze([
  "animate",
  "color-profile",
  "cursor",
  "discard",
  "font-face",
  "font-face-format",
  "font-face-name",
  "font-face-src",
  "font-face-uri",
  "foreignobject",
  "hatch",
  "hatchpath",
  "mesh",
  "meshgradient",
  "meshpatch",
  "meshrow",
  "missing-glyph",
  "script",
  "set",
  "solidcolor",
  "unknown",
  "use"
]);
var mathMl$1 = freeze([
  "math",
  "menclose",
  "merror",
  "mfenced",
  "mfrac",
  "mglyph",
  "mi",
  "mlabeledtr",
  "mmultiscripts",
  "mn",
  "mo",
  "mover",
  "mpadded",
  "mphantom",
  "mroot",
  "mrow",
  "ms",
  "mspace",
  "msqrt",
  "mstyle",
  "msub",
  "msup",
  "msubsup",
  "mtable",
  "mtd",
  "mtext",
  "mtr",
  "munder",
  "munderover",
  "mprescripts"
]);
var mathMlDisallowed = freeze([
  "maction",
  "maligngroup",
  "malignmark",
  "mlongdiv",
  "mscarries",
  "mscarry",
  "msgroup",
  "mstack",
  "msline",
  "msrow",
  "semantics",
  "annotation",
  "annotation-xml",
  "mprescripts",
  "none"
]);
var text = freeze(["#text"]);
var html = freeze([
  "accept",
  "action",
  "align",
  "alt",
  "autocapitalize",
  "autocomplete",
  "autopictureinpicture",
  "autoplay",
  "background",
  "bgcolor",
  "border",
  "capture",
  "cellpadding",
  "cellspacing",
  "checked",
  "cite",
  "class",
  "clear",
  "color",
  "cols",
  "colspan",
  "command",
  "commandfor",
  "controls",
  "controlslist",
  "coords",
  "crossorigin",
  "datetime",
  "decoding",
  "default",
  "dir",
  "disabled",
  "disablepictureinpicture",
  "disableremoteplayback",
  "download",
  "draggable",
  "enctype",
  "enterkeyhint",
  "exportparts",
  "face",
  "for",
  "headers",
  "height",
  "hidden",
  "high",
  "href",
  "hreflang",
  "id",
  "inert",
  "inputmode",
  "integrity",
  "ismap",
  "kind",
  "label",
  "lang",
  "list",
  "loading",
  "loop",
  "low",
  "max",
  "maxlength",
  "media",
  "method",
  "min",
  "minlength",
  "multiple",
  "muted",
  "name",
  "nonce",
  "noshade",
  "novalidate",
  "nowrap",
  "open",
  "optimum",
  "part",
  "pattern",
  "placeholder",
  "playsinline",
  "popover",
  "popovertarget",
  "popovertargetaction",
  "poster",
  "preload",
  "pubdate",
  "radiogroup",
  "readonly",
  "rel",
  "required",
  "rev",
  "reversed",
  "role",
  "rows",
  "rowspan",
  "spellcheck",
  "scope",
  "selected",
  "shape",
  "size",
  "sizes",
  "slot",
  "span",
  "srclang",
  "start",
  "src",
  "srcset",
  "step",
  "style",
  "summary",
  "tabindex",
  "title",
  "translate",
  "type",
  "usemap",
  "valign",
  "value",
  "width",
  "wrap",
  "xmlns"
]);
var svg = freeze([
  "accent-height",
  "accumulate",
  "additive",
  "alignment-baseline",
  "amplitude",
  "ascent",
  "attributename",
  "attributetype",
  "azimuth",
  "basefrequency",
  "baseline-shift",
  "begin",
  "bias",
  "by",
  "class",
  "clip",
  "clippathunits",
  "clip-path",
  "clip-rule",
  "color",
  "color-interpolation",
  "color-interpolation-filters",
  "color-profile",
  "color-rendering",
  "cx",
  "cy",
  "d",
  "dx",
  "dy",
  "diffuseconstant",
  "direction",
  "display",
  "divisor",
  "dominant-baseline",
  "dur",
  "edgemode",
  "elevation",
  "end",
  "exponent",
  "fill",
  "fill-opacity",
  "fill-rule",
  "filter",
  "filterunits",
  "flood-color",
  "flood-opacity",
  "font-family",
  "font-size",
  "font-size-adjust",
  "font-stretch",
  "font-style",
  "font-variant",
  "font-weight",
  "fx",
  "fy",
  "g1",
  "g2",
  "glyph-name",
  "glyphref",
  "gradientunits",
  "gradienttransform",
  "height",
  "href",
  "id",
  "image-rendering",
  "in",
  "in2",
  "intercept",
  "k",
  "k1",
  "k2",
  "k3",
  "k4",
  "kerning",
  "keypoints",
  "keysplines",
  "keytimes",
  "lang",
  "lengthadjust",
  "letter-spacing",
  "kernelmatrix",
  "kernelunitlength",
  "lighting-color",
  "local",
  "marker-end",
  "marker-mid",
  "marker-start",
  "markerheight",
  "markerunits",
  "markerwidth",
  "maskcontentunits",
  "maskunits",
  "max",
  "mask",
  "mask-type",
  "media",
  "method",
  "mode",
  "min",
  "name",
  "numoctaves",
  "offset",
  "operator",
  "opacity",
  "order",
  "orient",
  "orientation",
  "origin",
  "overflow",
  "paint-order",
  "path",
  "pathlength",
  "patterncontentunits",
  "patterntransform",
  "patternunits",
  "pointer-events",
  "points",
  "preservealpha",
  "preserveaspectratio",
  "primitiveunits",
  "r",
  "rx",
  "ry",
  "radius",
  "refx",
  "refy",
  "repeatcount",
  "repeatdur",
  "restart",
  "result",
  "rotate",
  "scale",
  "seed",
  "shape-rendering",
  "slope",
  "specularconstant",
  "specularexponent",
  "spreadmethod",
  "startoffset",
  "stddeviation",
  "stitchtiles",
  "stop-color",
  "stop-opacity",
  "stroke-dasharray",
  "stroke-dashoffset",
  "stroke-linecap",
  "stroke-linejoin",
  "stroke-miterlimit",
  "stroke-opacity",
  "stroke",
  "stroke-width",
  "style",
  "surfacescale",
  "systemlanguage",
  "tabindex",
  "tablevalues",
  "targetx",
  "targety",
  "transform",
  "transform-origin",
  "text-anchor",
  "text-decoration",
  "text-orientation",
  "text-rendering",
  "textlength",
  "type",
  "u1",
  "u2",
  "unicode",
  "values",
  "vector-effect",
  "viewbox",
  "visibility",
  "version",
  "vert-adv-y",
  "vert-origin-x",
  "vert-origin-y",
  "width",
  "word-spacing",
  "wrap",
  "writing-mode",
  "xchannelselector",
  "ychannelselector",
  "x",
  "x1",
  "x2",
  "xmlns",
  "y",
  "y1",
  "y2",
  "z",
  "zoomandpan"
]);
var mathMl = freeze([
  "accent",
  "accentunder",
  "align",
  "bevelled",
  "close",
  "columnalign",
  "columnlines",
  "columnspacing",
  "columnspan",
  "denomalign",
  "depth",
  "dir",
  "display",
  "displaystyle",
  "encoding",
  "fence",
  "frame",
  "height",
  "href",
  "id",
  "largeop",
  "length",
  "linethickness",
  "lquote",
  "lspace",
  "mathbackground",
  "mathcolor",
  "mathsize",
  "mathvariant",
  "maxsize",
  "minsize",
  "movablelimits",
  "notation",
  "numalign",
  "open",
  "rowalign",
  "rowlines",
  "rowspacing",
  "rowspan",
  "rspace",
  "rquote",
  "scriptlevel",
  "scriptminsize",
  "scriptsizemultiplier",
  "selection",
  "separator",
  "separators",
  "stretchy",
  "subscriptshift",
  "supscriptshift",
  "symmetric",
  "voffset",
  "width",
  "xmlns"
]);
var xml = freeze([
  "xlink:href",
  "xml:id",
  "xlink:title",
  "xml:space",
  "xmlns:xlink"
]);
var MUSTACHE_EXPR = seal(/{{[\w\W]*|^[\w\W]*}}/g);
var ERB_EXPR = seal(/<%[\w\W]*|^[\w\W]*%>/g);
var TMPLIT_EXPR = seal(/\${[\w\W]*/g);
var DATA_ATTR = seal(/^data-[\-\w.\u00B7-\uFFFF]+$/);
var ARIA_ATTR = seal(/^aria-[\-\w]+$/);
var IS_ALLOWED_URI = seal(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i);
var IS_SCRIPT_OR_DATA = seal(/^(?:\w+script|data):/i);
var ATTR_WHITESPACE = seal(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g);
var DOCTYPE_NAME = seal(/^html$/i);
var CUSTOM_ELEMENT = seal(/^[a-z][.\w]*(-[.\w]+)+$/i);
var ELEMENT_MARKUP_PROBE = seal(/<[/\w!]/g);
var COMMENT_MARKUP_PROBE = seal(/<[/\w]/g);
var FALLBACK_TAG_CLOSE = seal(/<\/no(script|embed|frames)/i);
var SELF_CLOSING_TAG = seal(/\/>/i);
var NODE_TYPE = {
  element: 1,
  attribute: 2,
  text: 3,
  cdataSection: 4,
  entityReference: 5,
  entityNode: 6,
  processingInstruction: 7,
  comment: 8,
  document: 9,
  documentType: 10,
  documentFragment: 11,
  notation: 12
};
var LITERAL_TEXT_ELEMENT_NAMES = [
  "style",
  "script",
  "xmp",
  "iframe",
  "noembed",
  "noframes",
  "plaintext",
  "noscript"
];
var LITERAL_TEXT_ELEMENTS = freeze(addToSet({}, LITERAL_TEXT_ELEMENT_NAMES));
var LITERAL_TEXT_CLOSE = (function() {
  const map2 = {};
  arrayForEach(LITERAL_TEXT_ELEMENT_NAMES, (name) => {
    map2[name] = seal(new RegExp("</" + name + "(?=[\\t\\n\\f\\r />])", "i"));
  });
  return freeze(map2);
})();
var getGlobal = function getGlobal2() {
  return typeof window === "undefined" ? null : window;
};
var _createTrustedTypesPolicy = function _createTrustedTypesPolicy2(trustedTypes, purifyHostElement) {
  if (typeof trustedTypes !== "object" || typeof trustedTypes.createPolicy !== "function") return null;
  let suffix = null;
  const ATTR_NAME = "data-tt-policy-suffix";
  if (purifyHostElement && purifyHostElement.hasAttribute(ATTR_NAME)) suffix = purifyHostElement.getAttribute(ATTR_NAME);
  const policyName = "dompurify" + (suffix ? "#" + suffix : "");
  try {
    return trustedTypes.createPolicy(policyName, {
      createHTML(html2) {
        return html2;
      },
      createScriptURL(scriptUrl) {
        return scriptUrl;
      }
    });
  } catch (_2) {
    console.warn("TrustedTypes policy " + policyName + " could not be created.");
    return null;
  }
};
var _createHooksMap = function _createHooksMap2() {
  return {
    afterSanitizeAttributes: [],
    afterSanitizeElements: [],
    afterSanitizeShadowDOM: [],
    beforeSanitizeAttributes: [],
    beforeSanitizeElements: [],
    beforeSanitizeShadowDOM: [],
    uponSanitizeAttribute: [],
    uponSanitizeElement: [],
    uponSanitizeShadowNode: []
  };
};
var _resolveSetOption = function _resolveSetOption2(cfg, key, fallback, options) {
  return objectHasOwnProperty(cfg, key) && arrayIsArray(cfg[key]) ? addToSet(options.base ? clone(options.base) : {}, cfg[key], options.transform) : fallback;
};
var _resolveObjectOption = function _resolveObjectOption2(cfg, key, makeFallback) {
  const value = objectHasOwnProperty(cfg, key) ? cfg[key] : void 0;
  return value && typeof value === "object" ? clone(value) : makeFallback();
};
function createDOMPurify() {
  let window2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : getGlobal();
  const DOMPurify = (root) => createDOMPurify(root);
  DOMPurify.version = "3.4.16";
  DOMPurify.removed = [];
  if (!window2 || !window2.document || window2.document.nodeType !== NODE_TYPE.document || !window2.Element) {
    DOMPurify.isSupported = false;
    return DOMPurify;
  }
  let document = window2.document;
  const originalDocument = document;
  const currentScript = originalDocument.currentScript;
  window2.DocumentFragment;
  const HTMLTemplateElement = window2.HTMLTemplateElement, Node = window2.Node, Element = window2.Element, NodeFilter = window2.NodeFilter;
  window2.NamedNodeMap === void 0 && (window2.NamedNodeMap || window2.MozNamedAttrMap);
  window2.HTMLFormElement;
  const DOMParser = window2.DOMParser, trustedTypes = window2.trustedTypes;
  const ElementPrototype = Element.prototype;
  const cloneNode = lookupGetter(ElementPrototype, "cloneNode");
  const remove = lookupGetter(ElementPrototype, "remove");
  const removeAttributeNode = lookupGetter(ElementPrototype, "removeAttributeNode");
  const getNextSibling = lookupGetter(ElementPrototype, "nextSibling");
  const getChildNodes = lookupGetter(ElementPrototype, "childNodes");
  const getParentNode = lookupGetter(ElementPrototype, "parentNode");
  const getShadowRoot = lookupGetter(ElementPrototype, "shadowRoot");
  const getAttributes = lookupGetter(ElementPrototype, "attributes");
  const getNodeType = Node && Node.prototype ? lookupGetter(Node.prototype, "nodeType") : null;
  const getNodeName = Node && Node.prototype ? lookupGetter(Node.prototype, "nodeName") : null;
  const getOwnerDocument = Node && Node.prototype ? lookupGetter(Node.prototype, "ownerDocument") : null;
  const _readNodeType = function _readNodeType2(node) {
    return getNodeType ? getNodeType(node) : node.nodeType;
  };
  const _readNodeName = function _readNodeName2(node) {
    return getNodeName ? getNodeName(node) : node.nodeName;
  };
  if (typeof HTMLTemplateElement === "function") {
    const template = document.createElement("template");
    if (template.content && template.content.ownerDocument) document = template.content.ownerDocument;
  }
  let trustedTypesPolicy;
  let emptyHTML = "";
  let defaultTrustedTypesPolicy;
  let defaultTrustedTypesPolicyResolved = false;
  let IN_TRUSTED_TYPES_POLICY = 0;
  const _assertNotInTrustedTypesPolicy = function _assertNotInTrustedTypesPolicy2() {
    if (IN_TRUSTED_TYPES_POLICY > 0) throw typeErrorCreate('A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the "DOMPurify and Trusted Types" section of the README.');
  };
  const _createTrustedHTML = function _createTrustedHTML2(html2) {
    _assertNotInTrustedTypesPolicy();
    IN_TRUSTED_TYPES_POLICY++;
    try {
      return trustedTypesPolicy.createHTML(html2);
    } finally {
      IN_TRUSTED_TYPES_POLICY--;
    }
  };
  const _createTrustedScriptURL = function _createTrustedScriptURL2(scriptUrl) {
    _assertNotInTrustedTypesPolicy();
    IN_TRUSTED_TYPES_POLICY++;
    try {
      return trustedTypesPolicy.createScriptURL(scriptUrl);
    } finally {
      IN_TRUSTED_TYPES_POLICY--;
    }
  };
  const _getDefaultTrustedTypesPolicy = function _getDefaultTrustedTypesPolicy2() {
    if (!defaultTrustedTypesPolicyResolved) {
      defaultTrustedTypesPolicy = _createTrustedTypesPolicy(trustedTypes, currentScript);
      defaultTrustedTypesPolicyResolved = true;
    }
    return defaultTrustedTypesPolicy;
  };
  const _document = document, implementation = _document.implementation, createNodeIterator = _document.createNodeIterator, createDocumentFragment = _document.createDocumentFragment, getElementsByTagName = _document.getElementsByTagName;
  const importNode = originalDocument.importNode;
  let hooks = _createHooksMap();
  DOMPurify.isSupported = typeof entries === "function" && typeof getParentNode === "function" && implementation && implementation.createHTMLDocument !== void 0;
  const MUSTACHE_EXPR$1 = MUSTACHE_EXPR, ERB_EXPR$1 = ERB_EXPR, TMPLIT_EXPR$1 = TMPLIT_EXPR, DATA_ATTR$1 = DATA_ATTR, ARIA_ATTR$1 = ARIA_ATTR, IS_SCRIPT_OR_DATA$1 = IS_SCRIPT_OR_DATA, ATTR_WHITESPACE$1 = ATTR_WHITESPACE, CUSTOM_ELEMENT$1 = CUSTOM_ELEMENT;
  let IS_ALLOWED_URI$1 = IS_ALLOWED_URI;
  let ALLOWED_TAGS = null;
  const DEFAULT_ALLOWED_TAGS = addToSet({}, [
    ...html$1,
    ...svg$1,
    ...svgFilters,
    ...mathMl$1,
    ...text
  ]);
  let ALLOWED_ATTR = null;
  const DEFAULT_ALLOWED_ATTR = addToSet({}, [
    ...html,
    ...svg,
    ...mathMl,
    ...xml
  ]);
  let CUSTOM_ELEMENT_HANDLING = Object.seal(create(null, {
    tagNameCheck: {
      writable: true,
      configurable: false,
      enumerable: true,
      value: null
    },
    attributeNameCheck: {
      writable: true,
      configurable: false,
      enumerable: true,
      value: null
    },
    allowCustomizedBuiltInElements: {
      writable: true,
      configurable: false,
      enumerable: true,
      value: false
    }
  }));
  let FORBID_TAGS = null;
  let FORBID_ATTR = null;
  const EXTRA_ELEMENT_HANDLING = Object.seal(create(null, {
    tagCheck: {
      writable: true,
      configurable: false,
      enumerable: true,
      value: null
    },
    attributeCheck: {
      writable: true,
      configurable: false,
      enumerable: true,
      value: null
    }
  }));
  let ALLOW_ARIA_ATTR = true;
  let ALLOW_DATA_ATTR = true;
  let ALLOW_UNKNOWN_PROTOCOLS = false;
  let ALLOW_SELF_CLOSE_IN_ATTR = true;
  let SAFE_FOR_TEMPLATES = false;
  let SAFE_FOR_XML = true;
  let WHOLE_DOCUMENT = false;
  let SET_CONFIG = false;
  let SET_CONFIG_ALLOWED_TAGS = null;
  let SET_CONFIG_ALLOWED_ATTR = null;
  let FORCE_BODY = false;
  let RETURN_DOM = false;
  let RETURN_DOM_FRAGMENT = false;
  let RETURN_TRUSTED_TYPE = false;
  let SANITIZE_DOM = true;
  let SANITIZE_NAMED_PROPS = false;
  const SANITIZE_NAMED_PROPS_PREFIX = "user-content-";
  let KEEP_CONTENT = true;
  let IN_PLACE = false;
  let USE_PROFILES = {};
  let FORBID_CONTENTS = null;
  const DEFAULT_FORBID_CONTENTS = addToSet({}, [
    "annotation-xml",
    "audio",
    "colgroup",
    "desc",
    "foreignobject",
    "head",
    "iframe",
    "math",
    "mi",
    "mn",
    "mo",
    "ms",
    "mtext",
    "noembed",
    "noframes",
    "noscript",
    "plaintext",
    "script",
    "selectedcontent",
    "style",
    "svg",
    "template",
    "thead",
    "title",
    "video",
    "xmp"
  ]);
  let DATA_URI_TAGS = null;
  const DEFAULT_DATA_URI_TAGS = addToSet({}, [
    "audio",
    "video",
    "img",
    "source",
    "image",
    "track"
  ]);
  let URI_SAFE_ATTRIBUTES = null;
  const DEFAULT_URI_SAFE_ATTRIBUTES = addToSet({}, [
    "alt",
    "class",
    "for",
    "id",
    "label",
    "name",
    "pattern",
    "placeholder",
    "role",
    "summary",
    "title",
    "value",
    "style",
    "xmlns"
  ]);
  const MATHML_NAMESPACE = "http://www.w3.org/1998/Math/MathML";
  const SVG_NAMESPACE = "http://www.w3.org/2000/svg";
  const HTML_NAMESPACE = "http://www.w3.org/1999/xhtml";
  let NAMESPACE = HTML_NAMESPACE;
  let IS_EMPTY_INPUT = false;
  let ALLOWED_NAMESPACES = null;
  const DEFAULT_ALLOWED_NAMESPACES = addToSet({}, [
    MATHML_NAMESPACE,
    SVG_NAMESPACE,
    HTML_NAMESPACE
  ], stringToString);
  const DEFAULT_MATHML_TEXT_INTEGRATION_POINTS = freeze([
    "mi",
    "mo",
    "mn",
    "ms",
    "mtext"
  ]);
  let MATHML_TEXT_INTEGRATION_POINTS = addToSet({}, DEFAULT_MATHML_TEXT_INTEGRATION_POINTS);
  const DEFAULT_HTML_INTEGRATION_POINTS = freeze(["annotation-xml"]);
  let HTML_INTEGRATION_POINTS = addToSet({}, DEFAULT_HTML_INTEGRATION_POINTS);
  const COMMON_SVG_AND_HTML_ELEMENTS = addToSet({}, [
    "title",
    "style",
    "font",
    "a",
    "script"
  ]);
  let PARSER_MEDIA_TYPE = null;
  const SUPPORTED_PARSER_MEDIA_TYPES = ["application/xhtml+xml", "text/html"];
  const DEFAULT_PARSER_MEDIA_TYPE = "text/html";
  let transformCaseFunc = null;
  let CONFIG = null;
  const formElement = document.createElement("form");
  const isRegexOrFunction = function isRegexOrFunction2(testValue) {
    return testValue instanceof RegExp || testValue instanceof Function;
  };
  const _parseConfig = function _parseConfig2() {
    let cfg = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (CONFIG && CONFIG === cfg) return;
    if (!cfg || typeof cfg !== "object") cfg = {};
    cfg = clone(cfg);
    PARSER_MEDIA_TYPE = SUPPORTED_PARSER_MEDIA_TYPES.indexOf(cfg.PARSER_MEDIA_TYPE) === -1 ? DEFAULT_PARSER_MEDIA_TYPE : cfg.PARSER_MEDIA_TYPE;
    transformCaseFunc = PARSER_MEDIA_TYPE === "application/xhtml+xml" ? stringToString : stringToLowerCase;
    ALLOWED_TAGS = _resolveSetOption(cfg, "ALLOWED_TAGS", DEFAULT_ALLOWED_TAGS, { transform: transformCaseFunc });
    ALLOWED_ATTR = _resolveSetOption(cfg, "ALLOWED_ATTR", DEFAULT_ALLOWED_ATTR, { transform: transformCaseFunc });
    ALLOWED_NAMESPACES = _resolveSetOption(cfg, "ALLOWED_NAMESPACES", DEFAULT_ALLOWED_NAMESPACES, { transform: stringToString });
    URI_SAFE_ATTRIBUTES = _resolveSetOption(cfg, "ADD_URI_SAFE_ATTR", DEFAULT_URI_SAFE_ATTRIBUTES, {
      transform: transformCaseFunc,
      base: DEFAULT_URI_SAFE_ATTRIBUTES
    });
    DATA_URI_TAGS = _resolveSetOption(cfg, "ADD_DATA_URI_TAGS", DEFAULT_DATA_URI_TAGS, {
      transform: transformCaseFunc,
      base: DEFAULT_DATA_URI_TAGS
    });
    FORBID_CONTENTS = _resolveSetOption(cfg, "FORBID_CONTENTS", DEFAULT_FORBID_CONTENTS, { transform: transformCaseFunc });
    FORBID_TAGS = _resolveSetOption(cfg, "FORBID_TAGS", clone({}), { transform: transformCaseFunc });
    FORBID_ATTR = _resolveSetOption(cfg, "FORBID_ATTR", clone({}), { transform: transformCaseFunc });
    USE_PROFILES = objectHasOwnProperty(cfg, "USE_PROFILES") ? cfg.USE_PROFILES && typeof cfg.USE_PROFILES === "object" ? clone(cfg.USE_PROFILES) : cfg.USE_PROFILES : false;
    ALLOW_ARIA_ATTR = cfg.ALLOW_ARIA_ATTR !== false;
    ALLOW_DATA_ATTR = cfg.ALLOW_DATA_ATTR !== false;
    ALLOW_UNKNOWN_PROTOCOLS = cfg.ALLOW_UNKNOWN_PROTOCOLS || false;
    ALLOW_SELF_CLOSE_IN_ATTR = cfg.ALLOW_SELF_CLOSE_IN_ATTR !== false;
    SAFE_FOR_TEMPLATES = cfg.SAFE_FOR_TEMPLATES || false;
    SAFE_FOR_XML = cfg.SAFE_FOR_XML !== false;
    WHOLE_DOCUMENT = cfg.WHOLE_DOCUMENT || false;
    RETURN_DOM = cfg.RETURN_DOM || false;
    RETURN_DOM_FRAGMENT = cfg.RETURN_DOM_FRAGMENT || false;
    RETURN_TRUSTED_TYPE = cfg.RETURN_TRUSTED_TYPE || false;
    FORCE_BODY = cfg.FORCE_BODY || false;
    SANITIZE_DOM = cfg.SANITIZE_DOM !== false;
    SANITIZE_NAMED_PROPS = cfg.SANITIZE_NAMED_PROPS || false;
    KEEP_CONTENT = cfg.KEEP_CONTENT !== false;
    IN_PLACE = cfg.IN_PLACE || false;
    IS_ALLOWED_URI$1 = isRegex(cfg.ALLOWED_URI_REGEXP) ? cfg.ALLOWED_URI_REGEXP : IS_ALLOWED_URI;
    NAMESPACE = typeof cfg.NAMESPACE === "string" ? cfg.NAMESPACE : HTML_NAMESPACE;
    MATHML_TEXT_INTEGRATION_POINTS = _resolveObjectOption(cfg, "MATHML_TEXT_INTEGRATION_POINTS", () => addToSet({}, DEFAULT_MATHML_TEXT_INTEGRATION_POINTS));
    HTML_INTEGRATION_POINTS = _resolveObjectOption(cfg, "HTML_INTEGRATION_POINTS", () => addToSet({}, DEFAULT_HTML_INTEGRATION_POINTS));
    const customElementHandling = _resolveObjectOption(cfg, "CUSTOM_ELEMENT_HANDLING", () => create(null));
    CUSTOM_ELEMENT_HANDLING = create(null);
    if (objectHasOwnProperty(customElementHandling, "tagNameCheck") && isRegexOrFunction(customElementHandling.tagNameCheck)) CUSTOM_ELEMENT_HANDLING.tagNameCheck = customElementHandling.tagNameCheck;
    if (objectHasOwnProperty(customElementHandling, "attributeNameCheck") && isRegexOrFunction(customElementHandling.attributeNameCheck)) CUSTOM_ELEMENT_HANDLING.attributeNameCheck = customElementHandling.attributeNameCheck;
    if (objectHasOwnProperty(customElementHandling, "allowCustomizedBuiltInElements") && typeof customElementHandling.allowCustomizedBuiltInElements === "boolean") CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements = customElementHandling.allowCustomizedBuiltInElements;
    seal(CUSTOM_ELEMENT_HANDLING);
    if (SAFE_FOR_TEMPLATES) ALLOW_DATA_ATTR = false;
    if (RETURN_DOM_FRAGMENT) RETURN_DOM = true;
    if (USE_PROFILES) {
      ALLOWED_TAGS = addToSet({}, text);
      ALLOWED_ATTR = create(null);
      if (USE_PROFILES.html === true) {
        addToSet(ALLOWED_TAGS, html$1);
        addToSet(ALLOWED_ATTR, html);
      }
      if (USE_PROFILES.svg === true) {
        addToSet(ALLOWED_TAGS, svg$1);
        addToSet(ALLOWED_ATTR, svg);
        addToSet(ALLOWED_ATTR, xml);
      }
      if (USE_PROFILES.svgFilters === true) {
        addToSet(ALLOWED_TAGS, svgFilters);
        addToSet(ALLOWED_ATTR, svg);
        addToSet(ALLOWED_ATTR, xml);
      }
      if (USE_PROFILES.mathMl === true) {
        addToSet(ALLOWED_TAGS, mathMl$1);
        addToSet(ALLOWED_ATTR, mathMl);
        addToSet(ALLOWED_ATTR, xml);
      }
    }
    EXTRA_ELEMENT_HANDLING.tagCheck = null;
    EXTRA_ELEMENT_HANDLING.attributeCheck = null;
    if (objectHasOwnProperty(cfg, "ADD_TAGS")) {
      if (typeof cfg.ADD_TAGS === "function") EXTRA_ELEMENT_HANDLING.tagCheck = cfg.ADD_TAGS;
      else if (arrayIsArray(cfg.ADD_TAGS)) {
        if (ALLOWED_TAGS === DEFAULT_ALLOWED_TAGS) ALLOWED_TAGS = clone(ALLOWED_TAGS);
        addToSet(ALLOWED_TAGS, cfg.ADD_TAGS, transformCaseFunc);
      }
    }
    if (objectHasOwnProperty(cfg, "ADD_ATTR")) {
      if (typeof cfg.ADD_ATTR === "function") EXTRA_ELEMENT_HANDLING.attributeCheck = cfg.ADD_ATTR;
      else if (arrayIsArray(cfg.ADD_ATTR)) {
        if (ALLOWED_ATTR === DEFAULT_ALLOWED_ATTR) ALLOWED_ATTR = clone(ALLOWED_ATTR);
        addToSet(ALLOWED_ATTR, cfg.ADD_ATTR, transformCaseFunc);
      }
    }
    if (objectHasOwnProperty(cfg, "ADD_FORBID_CONTENTS") && arrayIsArray(cfg.ADD_FORBID_CONTENTS)) {
      if (FORBID_CONTENTS === DEFAULT_FORBID_CONTENTS) FORBID_CONTENTS = clone(FORBID_CONTENTS);
      addToSet(FORBID_CONTENTS, cfg.ADD_FORBID_CONTENTS, transformCaseFunc);
    }
    if (KEEP_CONTENT) ALLOWED_TAGS["#text"] = true;
    if (WHOLE_DOCUMENT) addToSet(ALLOWED_TAGS, [
      "html",
      "head",
      "body"
    ]);
    if (ALLOWED_TAGS.table) {
      addToSet(ALLOWED_TAGS, ["tbody"]);
      delete FORBID_TAGS.tbody;
    }
    if (cfg.TRUSTED_TYPES_POLICY) {
      if (typeof cfg.TRUSTED_TYPES_POLICY.createHTML !== "function") throw typeErrorCreate('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
      if (typeof cfg.TRUSTED_TYPES_POLICY.createScriptURL !== "function") throw typeErrorCreate('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
      const previousTrustedTypesPolicy = trustedTypesPolicy;
      trustedTypesPolicy = cfg.TRUSTED_TYPES_POLICY;
      try {
        emptyHTML = _createTrustedHTML("");
      } catch (error) {
        trustedTypesPolicy = previousTrustedTypesPolicy;
        throw error;
      }
    } else if (cfg.TRUSTED_TYPES_POLICY === null) {
      trustedTypesPolicy = void 0;
      emptyHTML = "";
    } else {
      if (trustedTypesPolicy === void 0) trustedTypesPolicy = _getDefaultTrustedTypesPolicy();
      if (trustedTypesPolicy && typeof emptyHTML === "string") emptyHTML = _createTrustedHTML("");
    }
    if (freeze) freeze(cfg);
    CONFIG = cfg;
  };
  const ALL_SVG_TAGS = addToSet({}, [
    ...svg$1,
    ...svgFilters,
    ...svgDisallowed
  ]);
  const ALL_MATHML_TAGS = addToSet({}, [...mathMl$1, ...mathMlDisallowed]);
  const _checkSvgNamespace = function _checkSvgNamespace2(tagName, parent, parentTagName) {
    if (parent.namespaceURI === HTML_NAMESPACE) return tagName === "svg";
    if (parent.namespaceURI === MATHML_NAMESPACE) return tagName === "svg" && (parentTagName === "annotation-xml" || MATHML_TEXT_INTEGRATION_POINTS[parentTagName]);
    return Boolean(ALL_SVG_TAGS[tagName]);
  };
  const _checkMathMlNamespace = function _checkMathMlNamespace2(tagName, parent, parentTagName) {
    if (parent.namespaceURI === HTML_NAMESPACE) return tagName === "math";
    if (parent.namespaceURI === SVG_NAMESPACE) return tagName === "math" && HTML_INTEGRATION_POINTS[parentTagName];
    return Boolean(ALL_MATHML_TAGS[tagName]);
  };
  const _checkHtmlNamespace = function _checkHtmlNamespace2(tagName, parent, parentTagName) {
    if (parent.namespaceURI === SVG_NAMESPACE && !HTML_INTEGRATION_POINTS[parentTagName]) return false;
    if (parent.namespaceURI === MATHML_NAMESPACE && !MATHML_TEXT_INTEGRATION_POINTS[parentTagName]) return false;
    return !ALL_MATHML_TAGS[tagName] && (COMMON_SVG_AND_HTML_ELEMENTS[tagName] || !ALL_SVG_TAGS[tagName]);
  };
  const _checkValidNamespace = function _checkValidNamespace2(element) {
    let parent = getParentNode(element);
    if (!parent || !parent.tagName) parent = {
      namespaceURI: NAMESPACE,
      tagName: "template"
    };
    const tagName = stringToLowerCase(element.tagName);
    const parentTagName = stringToLowerCase(parent.tagName);
    if (!ALLOWED_NAMESPACES[element.namespaceURI]) return false;
    if (element.namespaceURI === SVG_NAMESPACE) return _checkSvgNamespace(tagName, parent, parentTagName);
    if (element.namespaceURI === MATHML_NAMESPACE) return _checkMathMlNamespace(tagName, parent, parentTagName);
    if (element.namespaceURI === HTML_NAMESPACE) return _checkHtmlNamespace(tagName, parent, parentTagName);
    if (PARSER_MEDIA_TYPE === "application/xhtml+xml" && ALLOWED_NAMESPACES[element.namespaceURI]) return true;
    return false;
  };
  const _forceRemove = function _forceRemove2(node) {
    arrayPush(DOMPurify.removed, { element: node });
    try {
      getParentNode(node).removeChild(node);
    } catch (_2) {
      remove(node);
      if (!getParentNode(node)) throw typeErrorCreate("a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place");
    }
  };
  const _stripAttributeNode = function _stripAttributeNode2(element, attribute, name) {
    try {
      removeAttributeNode(element, attribute);
    } catch (_2) {
      try {
        element.removeAttribute(name);
      } catch (_3) {
      }
    }
  };
  const _neutralizeRoot = function _neutralizeRoot2(root) {
    _neutralizeSubtree(root);
    const childNodes = getChildNodes(root);
    if (childNodes) {
      const snapshot = [];
      arrayForEach(childNodes, (child) => {
        arrayPush(snapshot, child);
      });
      arrayForEach(snapshot, (child) => {
        try {
          remove(child);
        } catch (_2) {
        }
      });
    }
    const attributes = getAttributes(root);
    if (attributes) for (let i = attributes.length - 1; i >= 0; --i) {
      const attribute = attributes[i];
      const name = attribute && attribute.name;
      if (typeof name === "string") _stripAttributeNode(root, attribute, name);
    }
  };
  const _removeAttribute = function _removeAttribute2(name, element, attr) {
    if (!attr) try {
      attr = element.getAttributeNode(name);
    } catch (_2) {
      attr = null;
    }
    arrayPush(DOMPurify.removed, {
      attribute: attr || null,
      from: element
    });
    try {
      if (attr) removeAttributeNode(element, attr);
      else element.removeAttribute(name);
    } catch (_2) {
      try {
        element.removeAttribute(name);
      } catch (_3) {
      }
    }
    if (name === "is") {
      if (RETURN_DOM || RETURN_DOM_FRAGMENT) try {
        _forceRemove(element);
      } catch (_2) {
      }
      else try {
        element.setAttribute(name, "");
      } catch (_2) {
      }
    }
  };
  const _stripDisallowedAttributes = function _stripDisallowedAttributes2(element) {
    const attributes = getAttributes(element);
    if (!attributes) return;
    for (let i = attributes.length - 1; i >= 0; --i) {
      const attribute = attributes[i];
      const name = attribute && attribute.name;
      if (typeof name !== "string" || ALLOWED_ATTR[transformCaseFunc(name)]) continue;
      _stripAttributeNode(element, attribute, name);
    }
  };
  const _neutralizeSubtree = function _neutralizeSubtree2(root) {
    const stack = [root];
    while (stack.length > 0) {
      const node = stack.pop();
      if (_readNodeType(node) === NODE_TYPE.element) _stripDisallowedAttributes(node);
      const childNodes = getChildNodes(node);
      if (childNodes) for (let i = childNodes.length - 1; i >= 0; --i) stack.push(childNodes[i]);
    }
  };
  const _isPatchLinkageAttribute = function _isPatchLinkageAttribute2(lcName, lcTag) {
    if (!SAFE_FOR_XML) return false;
    if (lcName === "patchsrc") return true;
    return lcName === "for" && lcTag !== "label" && lcTag !== "output";
  };
  const _neutralizePatchLinkage = function _neutralizePatchLinkage2(root) {
    if (!SAFE_FOR_XML) return;
    const stack = [root];
    while (stack.length > 0) {
      const node = stack.pop();
      const nodeType = _readNodeType(node);
      if (nodeType === NODE_TYPE.processingInstruction || nodeType === NODE_TYPE.comment && regExpTest(COMMENT_MARKUP_PROBE, node.data)) {
        try {
          remove(node);
        } catch (_2) {
        }
        continue;
      }
      if (nodeType === NODE_TYPE.element) {
        const element = node;
        const lcTag = transformCaseFunc(_readNodeName(node));
        try {
          if (element.hasAttribute && element.hasAttribute("patchsrc")) element.removeAttribute("patchsrc");
          if (element.hasAttribute && element.hasAttribute("for") && _isPatchLinkageAttribute("for", lcTag)) element.removeAttribute("for");
        } catch (_2) {
        }
      }
      const childNodes = getChildNodes(node);
      if (childNodes) for (let i = childNodes.length - 1; i >= 0; --i) stack.push(childNodes[i]);
    }
  };
  const _initDocument = function _initDocument2(dirty) {
    let doc = null;
    let leadingWhitespace = null;
    if (FORCE_BODY) dirty = "<remove></remove>" + dirty;
    else {
      const matches = stringMatch(dirty, /^[\r\n\t ]+/);
      leadingWhitespace = matches && matches[0];
    }
    if (PARSER_MEDIA_TYPE === "application/xhtml+xml" && NAMESPACE === HTML_NAMESPACE) dirty = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + dirty + "</body></html>";
    const dirtyPayload = trustedTypesPolicy ? _createTrustedHTML(dirty) : dirty;
    if (NAMESPACE === HTML_NAMESPACE) try {
      doc = new DOMParser().parseFromString(dirtyPayload, PARSER_MEDIA_TYPE);
    } catch (_2) {
    }
    if (!doc || !doc.documentElement) {
      doc = implementation.createDocument(NAMESPACE, "template", null);
      try {
        doc.documentElement.innerHTML = IS_EMPTY_INPUT ? emptyHTML : dirtyPayload;
      } catch (_2) {
      }
    }
    const body = doc.body || doc.documentElement;
    if (dirty && leadingWhitespace) body.insertBefore(document.createTextNode(leadingWhitespace), body.childNodes[0] || null);
    if (NAMESPACE === HTML_NAMESPACE) return getElementsByTagName.call(doc, WHOLE_DOCUMENT ? "html" : "body")[0];
    return WHOLE_DOCUMENT ? doc.documentElement : body;
  };
  const _createNodeIterator = function _createNodeIterator2(root) {
    const doc = getOwnerDocument ? getOwnerDocument(root) : root.ownerDocument;
    return createNodeIterator.call(doc || root, root, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_COMMENT | NodeFilter.SHOW_TEXT | NodeFilter.SHOW_PROCESSING_INSTRUCTION | NodeFilter.SHOW_CDATA_SECTION, null);
  };
  const _stripTemplateExpressions = function _stripTemplateExpressions2(value) {
    value = stringReplace(value, MUSTACHE_EXPR$1, " ");
    value = stringReplace(value, ERB_EXPR$1, " ");
    value = stringReplace(value, TMPLIT_EXPR$1, " ");
    return value;
  };
  const _scrubTemplateExpressions2 = function _scrubTemplateExpressions(node) {
    var _node$querySelectorAl;
    node.normalize();
    const doc = getOwnerDocument ? getOwnerDocument(node) : node.ownerDocument;
    const walker = createNodeIterator.call(doc || node, node, NodeFilter.SHOW_TEXT | NodeFilter.SHOW_COMMENT | NodeFilter.SHOW_CDATA_SECTION | NodeFilter.SHOW_PROCESSING_INSTRUCTION, null);
    let currentNode = walker.nextNode();
    while (currentNode) {
      currentNode.data = _stripTemplateExpressions(currentNode.data);
      currentNode = walker.nextNode();
    }
    const templates = (_node$querySelectorAl = node.querySelectorAll) === null || _node$querySelectorAl === void 0 ? void 0 : _node$querySelectorAl.call(node, "template");
    if (templates) arrayForEach(templates, (tmpl) => {
      if (_isDocumentFragment(tmpl.content)) _scrubTemplateExpressions2(tmpl.content);
    });
  };
  const _isClobbered = function _isClobbered2(element) {
    const realTagName = getNodeName ? getNodeName(element) : null;
    if (typeof realTagName !== "string") return false;
    if (transformCaseFunc(realTagName) !== "form") return false;
    return typeof element.nodeName !== "string" || typeof element.textContent !== "string" || typeof element.removeChild !== "function" || element.attributes !== getAttributes(element) || typeof element.removeAttribute !== "function" || typeof element.removeAttributeNode !== "function" || typeof element.getAttributeNode !== "function" || typeof element.setAttribute !== "function" || typeof element.namespaceURI !== "string" || typeof element.insertBefore !== "function" || typeof element.hasChildNodes !== "function" || element.nodeType !== getNodeType(element) || element.childNodes !== getChildNodes(element);
  };
  const _isDocumentFragment = function _isDocumentFragment2(value) {
    if (!getNodeType || typeof value !== "object" || value === null) return false;
    try {
      return getNodeType(value) === NODE_TYPE.documentFragment;
    } catch (_2) {
      return false;
    }
  };
  const _isNode = function _isNode2(value) {
    if (!getNodeType || typeof value !== "object" || value === null) return false;
    try {
      return typeof getNodeType(value) === "number";
    } catch (_2) {
      return false;
    }
  };
  function _executeHooks(hooks2, currentNode, data) {
    if (hooks2.length === 0) return;
    arrayForEach(hooks2, (hook) => {
      hook.call(DOMPurify, currentNode, data, CONFIG);
    });
  }
  const _isUnsafeNode = function _isUnsafeNode2(currentNode, tagName) {
    if (SAFE_FOR_XML && currentNode.hasChildNodes() && !_isNode(currentNode.firstElementChild) && regExpTest(ELEMENT_MARKUP_PROBE, currentNode.textContent) && regExpTest(ELEMENT_MARKUP_PROBE, currentNode.innerHTML)) return true;
    if (SAFE_FOR_XML && currentNode.namespaceURI === HTML_NAMESPACE && LITERAL_TEXT_ELEMENTS[tagName] && (_isNode(currentNode.firstElementChild) || typeof currentNode.textContent === "string" && regExpTest(LITERAL_TEXT_CLOSE[tagName], currentNode.textContent))) return true;
    if (currentNode.nodeType === NODE_TYPE.processingInstruction) return true;
    if (SAFE_FOR_XML && currentNode.nodeType === NODE_TYPE.comment && regExpTest(COMMENT_MARKUP_PROBE, currentNode.data)) return true;
    return false;
  };
  const _matchesNameCheck = function _matchesNameCheck2(check, name) {
    if (check instanceof RegExp) return regExpTest(check, name);
    if (check instanceof Function) {
      for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) args[_key - 2] = arguments[_key];
      return Boolean(check(name, ...args));
    }
    return false;
  };
  const _sanitizeDisallowedNode = function _sanitizeDisallowedNode2(currentNode, tagName, root) {
    if (!FORBID_TAGS[tagName] && _isBasicCustomElement(tagName) && _matchesNameCheck(CUSTOM_ELEMENT_HANDLING.tagNameCheck, tagName)) return false;
    if (KEEP_CONTENT && !FORBID_CONTENTS[tagName]) {
      const parentNode = getParentNode(currentNode);
      const childNodes = getChildNodes(currentNode);
      if (childNodes && parentNode) {
        const childCount = childNodes.length;
        for (let i = childCount - 1; i >= 0; --i) {
          const hoisted = currentNode === root ? cloneNode(childNodes[i], true) : childNodes[i];
          parentNode.insertBefore(hoisted, getNextSibling(currentNode));
        }
      }
    }
    _forceRemove(currentNode);
    return true;
  };
  const _forkSharedAllowlist = function _forkSharedAllowlist2(hookList, set, defaultSet, setConfigSet) {
    if (hookList.length === 0) return set;
    return set === defaultSet || set === setConfigSet ? clone(set) : set;
  };
  const _handleHookDetachedNode = function _handleHookDetachedNode2(currentNode, root) {
    if (currentNode === root || getParentNode(currentNode) !== null) return false;
    if (IN_PLACE) _neutralizeSubtree(currentNode);
    return true;
  };
  const _sanitizeElements = function _sanitizeElements2(currentNode, root) {
    _executeHooks(hooks.beforeSanitizeElements, currentNode, null);
    if (_handleHookDetachedNode(currentNode, root)) return true;
    if (_isClobbered(currentNode)) {
      _forceRemove(currentNode);
      return true;
    }
    const tagName = transformCaseFunc(_readNodeName(currentNode));
    ALLOWED_TAGS = _forkSharedAllowlist(hooks.uponSanitizeElement, ALLOWED_TAGS, DEFAULT_ALLOWED_TAGS, SET_CONFIG_ALLOWED_TAGS);
    _executeHooks(hooks.uponSanitizeElement, currentNode, {
      tagName,
      allowedTags: ALLOWED_TAGS
    });
    if (_handleHookDetachedNode(currentNode, root)) return true;
    if (_isUnsafeNode(currentNode, tagName)) {
      _forceRemove(currentNode);
      return true;
    }
    if (FORBID_TAGS[tagName] || !(EXTRA_ELEMENT_HANDLING.tagCheck instanceof Function && EXTRA_ELEMENT_HANDLING.tagCheck(tagName)) && !ALLOWED_TAGS[tagName]) {
      const removed = _sanitizeDisallowedNode(currentNode, tagName, root);
      if (removed === false) {
        _executeHooks(hooks.afterSanitizeElements, currentNode, null);
        if (_handleHookDetachedNode(currentNode, root)) return true;
      }
      return removed;
    }
    if (_readNodeType(currentNode) === NODE_TYPE.element && !_checkValidNamespace(currentNode)) {
      _forceRemove(currentNode);
      return true;
    }
    if ((tagName === "noscript" || tagName === "noembed" || tagName === "noframes") && regExpTest(FALLBACK_TAG_CLOSE, currentNode.innerHTML)) {
      _forceRemove(currentNode);
      return true;
    }
    if (SAFE_FOR_TEMPLATES && currentNode.nodeType === NODE_TYPE.text) {
      const content = _stripTemplateExpressions(currentNode.textContent);
      if (currentNode.textContent !== content) {
        arrayPush(DOMPurify.removed, { element: currentNode.cloneNode() });
        currentNode.textContent = content;
      }
    }
    _executeHooks(hooks.afterSanitizeElements, currentNode, null);
    return _handleHookDetachedNode(currentNode, root);
  };
  const _isValidAttribute = function _isValidAttribute2(lcTag, lcName, value) {
    if (FORBID_ATTR[lcName]) return false;
    if (_isPatchLinkageAttribute(lcName, lcTag)) return false;
    if (SANITIZE_DOM && (lcName === "id" || lcName === "name") && (value in document || value in formElement)) return false;
    const nameIsPermitted = ALLOWED_ATTR[lcName] || EXTRA_ELEMENT_HANDLING.attributeCheck instanceof Function && EXTRA_ELEMENT_HANDLING.attributeCheck(lcName, lcTag);
    if (ALLOW_DATA_ATTR && regExpTest(DATA_ATTR$1, lcName)) return true;
    if (ALLOW_ARIA_ATTR && regExpTest(ARIA_ATTR$1, lcName)) return true;
    if (!nameIsPermitted) return _isBasicCustomElement(lcTag) && _matchesNameCheck(CUSTOM_ELEMENT_HANDLING.tagNameCheck, lcTag) && _matchesNameCheck(CUSTOM_ELEMENT_HANDLING.attributeNameCheck, lcName, lcTag) || lcName === "is" && CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements && _matchesNameCheck(CUSTOM_ELEMENT_HANDLING.tagNameCheck, value);
    if (URI_SAFE_ATTRIBUTES[lcName]) return true;
    if (regExpTest(IS_ALLOWED_URI$1, stringReplace(value, ATTR_WHITESPACE$1, ""))) return true;
    if ((lcName === "src" || lcName === "xlink:href" || lcName === "href") && lcTag !== "script" && stringIndexOf(value, "data:") === 0 && DATA_URI_TAGS[lcTag]) return true;
    if (ALLOW_UNKNOWN_PROTOCOLS && !regExpTest(IS_SCRIPT_OR_DATA$1, stringReplace(value, ATTR_WHITESPACE$1, ""))) return true;
    return !value;
  };
  const RESERVED_CUSTOM_ELEMENT_NAMES = addToSet({}, [
    "annotation-xml",
    "color-profile",
    "font-face",
    "font-face-format",
    "font-face-name",
    "font-face-src",
    "font-face-uri",
    "missing-glyph"
  ]);
  const _isBasicCustomElement = function _isBasicCustomElement2(tagName) {
    return !RESERVED_CUSTOM_ELEMENT_NAMES[stringToLowerCase(tagName)] && regExpTest(CUSTOM_ELEMENT$1, tagName);
  };
  const _applyTrustedTypesToAttribute = function _applyTrustedTypesToAttribute2(lcTag, lcName, namespaceURI, value) {
    if (trustedTypesPolicy && typeof trustedTypes === "object" && typeof trustedTypes.getAttributeType === "function" && !namespaceURI) switch (trustedTypes.getAttributeType(lcTag, lcName)) {
      case "TrustedHTML":
        return _createTrustedHTML(value);
      case "TrustedScriptURL":
        return _createTrustedScriptURL(value);
    }
    return value;
  };
  const _setAttributeValue = function _setAttributeValue2(currentNode, name, namespaceURI, value) {
    try {
      if (namespaceURI) currentNode.setAttributeNS(namespaceURI, name, value);
      else currentNode.setAttribute(name, value);
      if (_isClobbered(currentNode)) {
        _forceRemove(currentNode);
        return false;
      }
      return true;
    } catch (_2) {
      _removeAttribute(name, currentNode);
      return false;
    }
  };
  const _sanitizeAttributes = function _sanitizeAttributes2(currentNode, root) {
    _executeHooks(hooks.beforeSanitizeAttributes, currentNode, null);
    if (_handleHookDetachedNode(currentNode, root)) return;
    const attributes = currentNode.attributes;
    if (!attributes || _isClobbered(currentNode)) return;
    ALLOWED_ATTR = _forkSharedAllowlist(hooks.uponSanitizeAttribute, ALLOWED_ATTR, DEFAULT_ALLOWED_ATTR, SET_CONFIG_ALLOWED_ATTR);
    const hookEvent = {
      attrName: "",
      attrValue: "",
      keepAttr: true,
      allowedAttributes: ALLOWED_ATTR,
      forceKeepAttr: void 0
    };
    let l3 = attributes.length;
    const lcTag = transformCaseFunc(currentNode.nodeName);
    while (l3--) {
      const attr = attributes[l3];
      const name = attr.name, namespaceURI = attr.namespaceURI, attrValue = attr.value;
      const lcName = transformCaseFunc(name);
      const initValue = attrValue;
      let value = name === "value" ? initValue : stringTrim(initValue);
      let recreatedNamedProp = false;
      hookEvent.attrName = lcName;
      hookEvent.attrValue = value;
      hookEvent.keepAttr = true;
      hookEvent.forceKeepAttr = void 0;
      _executeHooks(hooks.uponSanitizeAttribute, currentNode, hookEvent);
      value = hookEvent.attrValue;
      if (SANITIZE_NAMED_PROPS && (lcName === "id" || lcName === "name") && stringIndexOf(value, SANITIZE_NAMED_PROPS_PREFIX) !== 0) {
        _removeAttribute(name, currentNode, attr);
        value = SANITIZE_NAMED_PROPS_PREFIX + value;
        recreatedNamedProp = true;
      }
      if (SAFE_FOR_XML && regExpTest(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, value)) {
        _removeAttribute(name, currentNode, attr);
        continue;
      }
      if (lcName === "attributename" && stringMatch(value, "href")) {
        _removeAttribute(name, currentNode, attr);
        continue;
      }
      if (hookEvent.forceKeepAttr) continue;
      if (!hookEvent.keepAttr) {
        _removeAttribute(name, currentNode, attr);
        continue;
      }
      if (!ALLOW_SELF_CLOSE_IN_ATTR && regExpTest(SELF_CLOSING_TAG, value)) {
        _removeAttribute(name, currentNode, attr);
        continue;
      }
      if (SAFE_FOR_TEMPLATES) value = _stripTemplateExpressions(value);
      if (!_isValidAttribute(lcTag, lcName, value)) {
        _removeAttribute(name, currentNode, attr);
        continue;
      }
      value = _applyTrustedTypesToAttribute(lcTag, lcName, namespaceURI, value);
      if (value !== initValue) {
        if (_setAttributeValue(currentNode, name, namespaceURI, value) && recreatedNamedProp) arrayPop(DOMPurify.removed);
      }
    }
    _executeHooks(hooks.afterSanitizeAttributes, currentNode, null);
    _handleHookDetachedNode(currentNode, root);
  };
  const _sanitizeShadowDOM2 = function _sanitizeShadowDOM(fragment) {
    let shadowNode = null;
    const shadowIterator = _createNodeIterator(fragment);
    _executeHooks(hooks.beforeSanitizeShadowDOM, fragment, null);
    while (shadowNode = shadowIterator.nextNode()) {
      _executeHooks(hooks.uponSanitizeShadowNode, shadowNode, null);
      _sanitizeElements(shadowNode, fragment);
      _sanitizeAttributes(shadowNode, fragment);
      if (_isDocumentFragment(shadowNode.content)) _sanitizeShadowDOM2(shadowNode.content);
      if (_readNodeType(shadowNode) === NODE_TYPE.element) {
        const innerSr = getShadowRoot(shadowNode);
        if (_isDocumentFragment(innerSr)) {
          _sanitizeAttachedShadowRoots(innerSr);
          _sanitizeShadowDOM2(innerSr);
        }
      }
    }
    _executeHooks(hooks.afterSanitizeShadowDOM, fragment, null);
  };
  const _sanitizeAttachedShadowRoots = function _sanitizeAttachedShadowRoots2(root) {
    const stack = [{
      node: root,
      shadow: null
    }];
    while (stack.length > 0) {
      const item = stack.pop();
      if (item.shadow) {
        _sanitizeShadowDOM2(item.shadow);
        continue;
      }
      const node = item.node;
      const isElement = _readNodeType(node) === NODE_TYPE.element;
      const childNodes = getChildNodes(node);
      if (childNodes) for (let i = childNodes.length - 1; i >= 0; --i) stack.push({
        node: childNodes[i],
        shadow: null
      });
      if (isElement) {
        const rootName = getNodeName ? getNodeName(node) : null;
        if (typeof rootName === "string" && transformCaseFunc(rootName) === "template") {
          const content = node.content;
          if (_isDocumentFragment(content)) stack.push({
            node: content,
            shadow: null
          });
        }
      }
      if (isElement) {
        const sr = getShadowRoot(node);
        if (_isDocumentFragment(sr)) stack.push({
          node: null,
          shadow: sr
        }, {
          node: sr,
          shadow: null
        });
      }
    }
  };
  DOMPurify.sanitize = function(dirty) {
    let cfg = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    let body = null;
    let importedNode = null;
    let currentNode = null;
    let returnNode = null;
    IS_EMPTY_INPUT = !dirty;
    if (IS_EMPTY_INPUT) dirty = "<!-->";
    if (typeof dirty !== "string" && !_isNode(dirty)) {
      dirty = stringifyValue(dirty);
      if (typeof dirty !== "string") throw typeErrorCreate("dirty is not a string, aborting");
    }
    if (!DOMPurify.isSupported) return dirty;
    if (SET_CONFIG) {
      ALLOWED_TAGS = SET_CONFIG_ALLOWED_TAGS;
      ALLOWED_ATTR = SET_CONFIG_ALLOWED_ATTR;
    } else _parseConfig(cfg);
    if (hooks.uponSanitizeElement.length > 0 || hooks.uponSanitizeAttribute.length > 0) ALLOWED_TAGS = clone(ALLOWED_TAGS);
    if (hooks.uponSanitizeAttribute.length > 0) ALLOWED_ATTR = clone(ALLOWED_ATTR);
    DOMPurify.removed = [];
    const inPlace = IN_PLACE && typeof dirty !== "string" && _isNode(dirty);
    if (inPlace) {
      _neutralizePatchLinkage(dirty);
      const nn = _readNodeName(dirty);
      if (typeof nn === "string") {
        const tagName = transformCaseFunc(nn);
        if (!ALLOWED_TAGS[tagName] || FORBID_TAGS[tagName]) {
          _neutralizeRoot(dirty);
          throw typeErrorCreate("root node is forbidden and cannot be sanitized in-place");
        }
      }
      if (_isClobbered(dirty)) {
        _neutralizeRoot(dirty);
        throw typeErrorCreate("root node is clobbered and cannot be sanitized in-place");
      }
      try {
        _sanitizeAttachedShadowRoots(dirty);
      } catch (error) {
        _neutralizeRoot(dirty);
        throw error;
      }
    } else if (_isNode(dirty)) {
      body = _initDocument("<!---->");
      importedNode = body.ownerDocument.importNode(dirty, true);
      if (importedNode.nodeType === NODE_TYPE.element && importedNode.nodeName === "BODY") body = importedNode;
      else if (importedNode.nodeName === "HTML") body = importedNode;
      else body.appendChild(importedNode);
      _sanitizeAttachedShadowRoots(body);
    } else {
      if (!RETURN_DOM && !SAFE_FOR_TEMPLATES && !WHOLE_DOCUMENT && dirty.indexOf("<") === -1) return trustedTypesPolicy && RETURN_TRUSTED_TYPE ? _createTrustedHTML(dirty) : dirty;
      body = _initDocument(dirty);
      if (!body) return RETURN_DOM ? null : RETURN_TRUSTED_TYPE ? emptyHTML : "";
    }
    if (body && FORCE_BODY) _forceRemove(body.firstChild);
    const walkRoot = inPlace ? dirty : body;
    try {
      const nodeIterator = _createNodeIterator(walkRoot);
      while (currentNode = nodeIterator.nextNode()) {
        _sanitizeElements(currentNode, walkRoot);
        _sanitizeAttributes(currentNode, walkRoot);
        if (_isDocumentFragment(currentNode.content)) _sanitizeShadowDOM2(currentNode.content);
      }
    } catch (error) {
      if (inPlace) {
        _neutralizeRoot(dirty);
        arrayForEach(DOMPurify.removed, (entry) => {
          if (entry.element) _neutralizeSubtree(entry.element);
        });
      }
      throw error;
    }
    if (inPlace) {
      let rootWasRemoved = false;
      arrayForEach(DOMPurify.removed, (entry) => {
        if (entry.element) {
          if (entry.element === dirty) rootWasRemoved = true;
          _neutralizeSubtree(entry.element);
        }
      });
      if (rootWasRemoved) throw typeErrorCreate("a node selected for removal could not be safely returned; refusing to sanitize in place");
      if (SAFE_FOR_TEMPLATES) _scrubTemplateExpressions2(dirty);
      return dirty;
    }
    if (RETURN_DOM) {
      if (SAFE_FOR_TEMPLATES) _scrubTemplateExpressions2(body);
      if (RETURN_DOM_FRAGMENT) {
        returnNode = createDocumentFragment.call(body.ownerDocument);
        while (body.firstChild) returnNode.appendChild(body.firstChild);
      } else returnNode = body;
      if (ALLOWED_ATTR.shadowroot || ALLOWED_ATTR.shadowrootmode) returnNode = importNode.call(originalDocument, returnNode, true);
      return returnNode;
    }
    let serializedHTML = WHOLE_DOCUMENT ? body.outerHTML : body.innerHTML;
    if (WHOLE_DOCUMENT && ALLOWED_TAGS["!doctype"] && body.ownerDocument && body.ownerDocument.doctype && body.ownerDocument.doctype.name && regExpTest(DOCTYPE_NAME, body.ownerDocument.doctype.name)) serializedHTML = "<!DOCTYPE " + body.ownerDocument.doctype.name + ">\n" + serializedHTML;
    if (SAFE_FOR_TEMPLATES) serializedHTML = _stripTemplateExpressions(serializedHTML);
    return trustedTypesPolicy && RETURN_TRUSTED_TYPE ? _createTrustedHTML(serializedHTML) : serializedHTML;
  };
  DOMPurify.setConfig = function() {
    let cfg = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    _parseConfig(cfg);
    SET_CONFIG = true;
    SET_CONFIG_ALLOWED_TAGS = ALLOWED_TAGS;
    SET_CONFIG_ALLOWED_ATTR = ALLOWED_ATTR;
  };
  DOMPurify.clearConfig = function() {
    CONFIG = null;
    SET_CONFIG = false;
    SET_CONFIG_ALLOWED_TAGS = null;
    SET_CONFIG_ALLOWED_ATTR = null;
    trustedTypesPolicy = defaultTrustedTypesPolicy;
    emptyHTML = "";
  };
  DOMPurify.isValidAttribute = function(tag, attr, value) {
    if (!CONFIG) _parseConfig({});
    const lcTag = transformCaseFunc(tag);
    const lcName = transformCaseFunc(attr);
    return _isValidAttribute(lcTag, lcName, value);
  };
  DOMPurify.addHook = function(entryPoint, hookFunction) {
    if (typeof hookFunction !== "function") return;
    if (!objectHasOwnProperty(hooks, entryPoint)) return;
    arrayPush(hooks[entryPoint], hookFunction);
  };
  DOMPurify.removeHook = function(entryPoint, hookFunction) {
    if (!objectHasOwnProperty(hooks, entryPoint)) return;
    if (hookFunction !== void 0) {
      const index = arrayLastIndexOf(hooks[entryPoint], hookFunction);
      return index === -1 ? void 0 : arraySplice(hooks[entryPoint], index, 1)[0];
    }
    return arrayPop(hooks[entryPoint]);
  };
  DOMPurify.removeHooks = function(entryPoint) {
    if (!objectHasOwnProperty(hooks, entryPoint)) return;
    hooks[entryPoint] = [];
  };
  DOMPurify.removeAllHooks = function() {
    hooks = _createHooksMap();
  };
  return DOMPurify;
}
var purify_default = createDOMPurify();

// src/app/shared/pipes/markdown.pipe.ts
var MarkdownPipe = class _MarkdownPipe {
  sanitizer = inject(DomSanitizer);
  constructor() {
    k.setOptions({
      gfm: true,
      breaks: true
    });
  }
  transform(value) {
    if (!value)
      return "";
    const normalizedText = value.replace(/\$(\d+)\^\\circ\$/g, "$1.\xB0").replace(/\$(\d+)\^\\text\{([^}]+)\}\$/g, "$1.$2");
    const parsedHtml = k.parse(normalizedText);
    const cleanHtml = purify_default.sanitize(parsedHtml);
    return this.sanitizer.bypassSecurityTrustHtml(cleanHtml);
  }
  static \u0275fac = function MarkdownPipe_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MarkdownPipe)();
  };
  static \u0275pipe = /* @__PURE__ */ \u0275\u0275definePipe({ name: "markdown", type: _MarkdownPipe, pure: true });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MarkdownPipe, [{
    type: Pipe,
    args: [{
      name: "markdown",
      standalone: true
    }]
  }], () => [], null);
})();

// src/app/features/assistant/components/chat-message-item/chat-message-item.component.ts
function ChatMessageItemComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 0)(1, "div", 2)(2, "p", 3);
    \u0275\u0275text(3);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(4, "div", 4);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "date");
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.message().text);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" T\xFA \u2022 ", \u0275\u0275pipeBind2(6, 2, ctx_r0.message().timestamp, "shortTime"), " ");
  }
}
function ChatMessageItemComponent_Conditional_2_Conditional_11_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 13);
    \u0275\u0275text(1, "\u2713 Copiado");
    \u0275\u0275domElementEnd();
  }
}
function ChatMessageItemComponent_Conditional_2_Conditional_11_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275domElementStart(0, "svg", 14);
    \u0275\u0275domElement(1, "path", 15);
    \u0275\u0275domElementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275domElementStart(2, "span");
    \u0275\u0275text(3, "Copiar");
    \u0275\u0275domElementEnd();
  }
}
function ChatMessageItemComponent_Conditional_2_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "button", 12);
    \u0275\u0275domListener("click", function ChatMessageItemComponent_Conditional_2_Conditional_11_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.copyToClipboard());
    });
    \u0275\u0275conditionalCreate(1, ChatMessageItemComponent_Conditional_2_Conditional_11_Conditional_1_Template, 2, 0, "span", 13)(2, ChatMessageItemComponent_Conditional_2_Conditional_11_Conditional_2_Template, 4, 0);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.copied() ? 1 : 2);
  }
}
function ChatMessageItemComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 1)(1, "div", 5);
    \u0275\u0275domElement(2, "img", 6);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "div", 7)(4, "div");
    \u0275\u0275domElement(5, "div", 8);
    \u0275\u0275pipe(6, "markdown");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(7, "div", 9)(8, "span", 10);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "date");
    \u0275\u0275domElementEnd();
    \u0275\u0275conditionalCreate(11, ChatMessageItemComponent_Conditional_2_Conditional_11_Template, 3, 1, "button", 11);
    \u0275\u0275domElementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275classMap(ctx_r0.message().isError ? "px-5 py-4 rounded-2xl rounded-tl-xs border border-red-300 bg-red-50/60 border-l-4 border-l-[#BE002E] text-slate-800 text-sm sm:text-[15px] leading-relaxed shadow-xs break-words" : "px-5 py-4 rounded-2xl rounded-tl-xs bg-white border border-slate-200 border-l-4 border-l-[#BE002E] text-slate-800 text-sm sm:text-[15px] leading-relaxed shadow-xs break-words");
    \u0275\u0275advance();
    \u0275\u0275domProperty("innerHTML", \u0275\u0275pipeBind1(6, 5, ctx_r0.message().text), \u0275\u0275sanitizeHtml);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" Asistente CBB \u2022 ", \u0275\u0275pipeBind2(10, 7, ctx_r0.message().timestamp, "shortTime"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx_r0.message().isError ? 11 : -1);
  }
}
var ChatMessageItemComponent = class _ChatMessageItemComponent {
  message = input.required(...ngDevMode ? [{ debugName: "message" }] : (
    /* istanbul ignore next */
    []
  ));
  copied = signal(false, ...ngDevMode ? [{ debugName: "copied" }] : (
    /* istanbul ignore next */
    []
  ));
  copyToClipboard() {
    navigator.clipboard.writeText(this.message().text).then(() => {
      this.copied.set(true);
      setTimeout(() => this.copied.set(false), 2e3);
    });
  }
  static \u0275fac = function ChatMessageItemComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ChatMessageItemComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ChatMessageItemComponent, selectors: [["app-chat-message-item"]], inputs: { message: [1, "message"] }, decls: 3, vars: 4, consts: [[1, "max-w-[85%]", "sm:max-w-[75%]", "space-y-1.5"], [1, "flex", "items-start", "gap-3", "sm:gap-4", "w-full", "max-w-[95%]", "sm:max-w-[90%]"], [1, "px-5", "py-3.5", "rounded-2xl", "rounded-tr-xs", "bg-[#0050A1]", "text-white", "text-sm", "sm:text-[15px]", "leading-relaxed", "shadow-sm"], [1, "whitespace-pre-wrap"], [1, "text-[11px]", "text-slate-400", "text-right", "pr-1", "font-medium"], [1, "w-9", "h-9", "rounded-xl", "bg-white", "border", "border-slate-200", "p-1.5", "flex", "items-center", "justify-center", "shrink-0", "shadow-xs", "mt-0.5"], ["src", "cropped-Favicon-3-1-32x32.png", "alt", "CBB", 1, "w-full", "h-full", "object-contain"], [1, "space-y-1.5", "flex-1", "min-w-0"], [1, "chat-markdown", "break-words", 3, "innerHTML"], [1, "flex", "items-center", "justify-between", "px-1"], [1, "text-[11px]", "text-slate-400", "font-medium"], ["type", "button", 1, "inline-flex", "items-center", "gap-1", "text-[11px]", "text-slate-400", "hover:text-[#0050A1]", "transition-colors", "cursor-pointer", "py-0.5", "px-1.5", "rounded-md", "hover:bg-slate-100"], ["type", "button", 1, "inline-flex", "items-center", "gap-1", "text-[11px]", "text-slate-400", "hover:text-[#0050A1]", "transition-colors", "cursor-pointer", "py-0.5", "px-1.5", "rounded-md", "hover:bg-slate-100", 3, "click"], [1, "text-emerald-600", "font-semibold"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-3.5", "h-3.5"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"]], template: function ChatMessageItemComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div");
      \u0275\u0275conditionalCreate(1, ChatMessageItemComponent_Conditional_1_Template, 7, 5, "div", 0);
      \u0275\u0275conditionalCreate(2, ChatMessageItemComponent_Conditional_2_Template, 12, 10, "div", 1);
      \u0275\u0275domElementEnd();
    }
    if (rf & 2) {
      \u0275\u0275classMap(ctx.message().sender === "user" ? "flex w-full mb-6 animate-in fade-in slide-in-from-bottom-2 duration-200 justify-end" : "flex w-full mb-6 animate-in fade-in slide-in-from-bottom-2 duration-200 justify-start");
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.message().sender === "user" ? 1 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.message().sender === "assistant" ? 2 : -1);
    }
  }, dependencies: [DatePipe, MarkdownPipe], styles: ["\n[_nghost-%COMP%] {\n  display: block;\n}"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ChatMessageItemComponent, [{
    type: Component,
    args: [{ selector: "app-chat-message-item", changeDetection: ChangeDetectionStrategy.OnPush, imports: [DatePipe, MarkdownPipe], template: `<div 
  [class]="message().sender === 'user'
    ? 'flex w-full mb-6 animate-in fade-in slide-in-from-bottom-2 duration-200 justify-end'
    : 'flex w-full mb-6 animate-in fade-in slide-in-from-bottom-2 duration-200 justify-start'">
  
  <!-- Mensaje del Usuario (Secci\xF3n Azul Institucional #0050A1) -->
  @if (message().sender === 'user') {
    <div class="max-w-[85%] sm:max-w-[75%] space-y-1.5">
      <div class="px-5 py-3.5 rounded-2xl rounded-tr-xs bg-[#0050A1] text-white text-sm sm:text-[15px] leading-relaxed shadow-sm">
        <p class="whitespace-pre-wrap">{{ message().text }}</p>
      </div>
      <div class="text-[11px] text-slate-400 text-right pr-1 font-medium">
        T\xFA \u2022 {{ message().timestamp | date:'shortTime' }}
      </div>
    </div>
  }

  <!-- Mensaje del Asistente (Contenido Blanco con acentos #BE002E y #0050A1) -->
  @if (message().sender === 'assistant') {
    <div class="flex items-start gap-3 sm:gap-4 w-full max-w-[95%] sm:max-w-[90%]">
      
      <!-- Avatar con \xCDcono Oficial CBB -->
      <div class="w-9 h-9 rounded-xl bg-white border border-slate-200 p-1.5 flex items-center justify-center shrink-0 shadow-xs mt-0.5">
        <img src="cropped-Favicon-3-1-32x32.png" alt="CBB" class="w-full h-full object-contain" />
      </div>

      <div class="space-y-1.5 flex-1 min-w-0">
        <div 
          [class]="message().isError
            ? 'px-5 py-4 rounded-2xl rounded-tl-xs border border-red-300 bg-red-50/60 border-l-4 border-l-[#BE002E] text-slate-800 text-sm sm:text-[15px] leading-relaxed shadow-xs break-words'
            : 'px-5 py-4 rounded-2xl rounded-tl-xs bg-white border border-slate-200 border-l-4 border-l-[#BE002E] text-slate-800 text-sm sm:text-[15px] leading-relaxed shadow-xs break-words'">
          
          <!-- Contenido con Markdown Limpio -->
          <div 
            class="chat-markdown break-words"
            [innerHTML]="message().text | markdown">
          </div>

        </div>

        <!-- Barra inferior del mensaje (Hora + Copiar) -->
        <div class="flex items-center justify-between px-1">
          <span class="text-[11px] text-slate-400 font-medium">
            Asistente CBB \u2022 {{ message().timestamp | date:'shortTime' }}
          </span>

          @if (!message().isError) {
            <button
              type="button"
              (click)="copyToClipboard()"
              class="inline-flex items-center gap-1 text-[11px] text-slate-400 hover:text-[#0050A1] transition-colors cursor-pointer py-0.5 px-1.5 rounded-md hover:bg-slate-100">
              @if (copied()) {
                <span class="text-emerald-600 font-semibold">\u2713 Copiado</span>
              } @else {
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                <span>Copiar</span>
              }
            </button>
          }
        </div>

      </div>
    </div>
  }

</div>
`, styles: ["/* src/app/features/assistant/components/chat-message-item/chat-message-item.component.css */\n:host {\n  display: block;\n}\n"] }]
  }], null, { message: [{ type: Input, args: [{ isSignal: true, alias: "message", required: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ChatMessageItemComponent, { className: "ChatMessageItemComponent", filePath: "src/app/features/assistant/components/chat-message-item/chat-message-item.component.ts", lineNumber: 13 });
})();

// src/app/features/assistant/components/chat-messages/chat-messages.component.ts
var _c0 = ["scrollContainer"];
var _forTrack0 = ($index, $item) => $item.title;
var _forTrack1 = ($index, $item) => $item.id;
function ChatMessagesComponent_Conditional_3_For_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 12);
    \u0275\u0275listener("click", function ChatMessagesComponent_Conditional_3_For_12_Template_button_click_0_listener() {
      const card_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.selectPrompt.emit(card_r2.prompt));
    });
    \u0275\u0275element(1, "div");
    \u0275\u0275elementStart(2, "div", 13)(3, "div", 14)(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "h3");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "p", 15);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div")(13, "span");
    \u0275\u0275text(14, "Consultar ahora");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span");
    \u0275\u0275text(16, "\u2192");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const card_r2 = ctx.$implicit;
    \u0275\u0275classMap(card_r2.accent === "red" ? "group relative p-4 rounded-2xl bg-white border border-slate-200 hover:border-[#BE002E] hover:shadow-md transition-all flex flex-col justify-between gap-2 cursor-pointer text-left overflow-hidden" : "group relative p-4 rounded-2xl bg-white border border-slate-200 hover:border-[#0050A1] hover:shadow-md transition-all flex flex-col justify-between gap-2 cursor-pointer text-left overflow-hidden");
    \u0275\u0275advance();
    \u0275\u0275classMap(card_r2.accent === "red" ? "absolute top-0 left-0 right-0 h-1 transition-all bg-[#BE002E]" : "absolute top-0 left-0 right-0 h-1 transition-all bg-[#0050A1]");
    \u0275\u0275advance(3);
    \u0275\u0275classMap(card_r2.accent === "red" ? "w-9 h-9 rounded-xl flex items-center justify-center text-lg transition-colors bg-[#BE002E]/10" : "w-9 h-9 rounded-xl flex items-center justify-center text-lg transition-colors bg-[#0050A1]/10");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", card_r2.icon, " ");
    \u0275\u0275advance();
    \u0275\u0275classMap(card_r2.accent === "red" ? "text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full transition-colors bg-[#BE002E]/10 text-[#BE002E]" : "text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full transition-colors bg-[#0050A1]/10 text-[#0050A1]");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", card_r2.badge, " ");
    \u0275\u0275advance();
    \u0275\u0275classMap(card_r2.accent === "red" ? "font-bold text-slate-900 text-sm transition-colors group-hover:text-[#BE002E]" : "font-bold text-slate-900 text-sm transition-colors group-hover:text-[#0050A1]");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", card_r2.title, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", card_r2.description, " ");
    \u0275\u0275advance();
    \u0275\u0275classMap(card_r2.accent === "red" ? "flex items-center gap-1 text-[11px] font-bold opacity-0 group-hover:opacity-100 transition-opacity pt-1 text-[#BE002E]" : "flex items-center gap-1 text-[11px] font-bold opacity-0 group-hover:opacity-100 transition-opacity pt-1 text-[#0050A1]");
  }
}
function ChatMessagesComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "div", 5);
    \u0275\u0275element(2, "img", 6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 7)(4, "span");
    \u0275\u0275text(5, "Asistente Virtual Oficial \u2022 Colegio Bertolt Brecht");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "h2", 8);
    \u0275\u0275text(7, " \xBFEn qu\xE9 podemos orientarte hoy? ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 9);
    \u0275\u0275text(9, " Resuelve tus dudas al instante sobre matr\xEDculas, pensiones, tr\xE1mites de secretar\xEDa, talleres y sedes con informaci\xF3n oficial vigente. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 10);
    \u0275\u0275repeaterCreate(11, ChatMessagesComponent_Conditional_3_For_12_Template, 17, 16, "button", 11, _forTrack0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(11);
    \u0275\u0275repeater(ctx_r2.welcomeCards);
  }
}
function ChatMessagesComponent_Conditional_4_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-chat-message-item", 16);
  }
  if (rf & 2) {
    const msg_r4 = ctx.$implicit;
    \u0275\u0275property("message", msg_r4);
  }
}
function ChatMessagesComponent_Conditional_4_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17)(1, "div", 18);
    \u0275\u0275element(2, "img", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 20)(4, "div", 21);
    \u0275\u0275element(5, "span", 22)(6, "span", 23)(7, "span", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 25);
    \u0275\u0275text(9, "Consultando...");
    \u0275\u0275elementEnd()()();
  }
}
function ChatMessagesComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275repeaterCreate(1, ChatMessagesComponent_Conditional_4_For_2_Template, 1, 1, "app-chat-message-item", 16, _forTrack1);
    \u0275\u0275conditionalCreate(3, ChatMessagesComponent_Conditional_4_Conditional_3_Template, 10, 0, "div", 17);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.messages());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.isLoading() ? 3 : -1);
  }
}
var ChatMessagesComponent = class _ChatMessagesComponent {
  messages = input.required(...ngDevMode ? [{ debugName: "messages" }] : (
    /* istanbul ignore next */
    []
  ));
  isLoading = input(false, ...ngDevMode ? [{ debugName: "isLoading" }] : (
    /* istanbul ignore next */
    []
  ));
  selectPrompt = output();
  scrollContainer = viewChild("scrollContainer", ...ngDevMode ? [{ debugName: "scrollContainer" }] : (
    /* istanbul ignore next */
    []
  ));
  welcomeCards = [
    {
      icon: "\u{1F393}",
      title: "Matr\xEDcula 2026",
      description: "Requisitos, cronograma, edades y proceso para estudiantes nuevos o traslados.",
      prompt: "\xBFCu\xE1les son los requisitos y pasos para el proceso de matr\xEDcula 2026?",
      badge: "Admisi\xF3n",
      accent: "red"
    },
    {
      icon: "\u{1F4B3}",
      title: "Pensiones y Pagos",
      description: "Cronograma de vencimientos, bancos autorizados y medios de pago digitales.",
      prompt: "\xBFCu\xE1les son los canales autorizados y fechas de pago de pensiones?",
      badge: "Tesorer\xEDa",
      accent: "blue"
    },
    {
      icon: "\u{1F4C4}",
      title: "Certificados y Tr\xE1mites",
      description: "Solicitud de constancias de estudios, certificados oficiales y FUT.",
      prompt: "\xBFC\xF3mo solicito una constancia de estudios o certificado oficial?",
      badge: "Secretar\xEDa",
      accent: "red"
    },
    {
      icon: "\u{1F3A8}",
      title: "Talleres y Deportes",
      description: "Disciplinas art\xEDsticas, deportivas y horarios de actividades extracurriculares.",
      prompt: "\xBFQu\xE9 talleres extracurriculares y deportes ofrece el colegio?",
      badge: "Formativo",
      accent: "blue"
    },
    {
      icon: "\u{1F4CD}",
      title: "Sedes y Horarios",
      description: "Direcciones, tel\xE9fonos de secretar\xEDa y horarios de atenci\xF3n presencial.",
      prompt: "\xBFCu\xE1les son las sedes del colegio y sus horarios de atenci\xF3n?",
      badge: "Sedes",
      accent: "red"
    },
    {
      icon: "\u{1F4BB}",
      title: "Plataformas Escolares",
      description: "Orientaci\xF3n sobre el uso de Intranet, aula virtual y canales de soporte.",
      prompt: "\xBFC\xF3mo accedo a las plataformas virtuales e intranet del colegio?",
      badge: "Digital",
      accent: "blue"
    }
  ];
  constructor() {
    effect(() => {
      this.messages();
      this.isLoading();
      this.scrollToBottom();
    });
  }
  scrollToBottom() {
    setTimeout(() => {
      const container = this.scrollContainer()?.nativeElement;
      if (container && this.messages().length > 0) {
        container.scrollTo({
          top: container.scrollHeight,
          behavior: "smooth"
        });
      }
    }, 100);
  }
  static \u0275fac = function ChatMessagesComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ChatMessagesComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ChatMessagesComponent, selectors: [["app-chat-messages"]], viewQuery: function ChatMessagesComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuerySignal(ctx.scrollContainer, _c0, 5);
    }
    if (rf & 2) {
      \u0275\u0275queryAdvance();
    }
  }, inputs: { messages: [1, "messages"], isLoading: [1, "isLoading"] }, outputs: { selectPrompt: "selectPrompt" }, decls: 5, vars: 1, consts: [["scrollContainer", ""], [1, "flex-1", "min-h-0", "overflow-y-auto", "chat-scroll", "px-4", "sm:px-6", "py-6", "sm:py-8", "bg-white"], [1, "max-w-3xl", "mx-auto", "w-full", "h-full", "flex", "flex-col"], [1, "my-auto", "py-4", "sm:py-8", "flex", "flex-col", "items-center", "text-center", "animate-in", "fade-in", "duration-300"], [1, "flex-1", "space-y-2", "pb-4"], [1, "w-18", "h-18", "sm:w-22", "sm:h-22", "rounded-3xl", "bg-white", "p-3", "flex", "items-center", "justify-center", "shadow-lg", "border-2", "border-[#0050A1]/15", "ring-4", "ring-[#BE002E]/10", "mb-5"], ["src", "cropped-Favicon-3-1-32x32.png", "alt", "Colegio Bertolt Brecht", 1, "w-full", "h-full", "object-contain"], [1, "inline-flex", "items-center", "gap-2", "px-3.5", "py-1", "rounded-full", "bg-[#BE002E]/10", "border", "border-[#BE002E]/25", "text-[#BE002E]", "text-xs", "font-extrabold", "uppercase", "tracking-wide", "mb-3"], [1, "text-2xl", "sm:text-3xl", "md:text-4xl", "font-black", "text-[#0050A1]", "tracking-tight", "mb-3"], [1, "text-slate-600", "text-sm", "sm:text-base", "max-w-xl", "mb-8", "leading-relaxed"], [1, "grid", "grid-cols-1", "sm:grid-cols-2", "lg:grid-cols-3", "gap-3.5", "w-full", "text-left"], ["type", "button", 3, "class"], ["type", "button", 3, "click"], [1, "pt-1"], [1, "flex", "items-center", "justify-between", "mb-2.5"], [1, "text-xs", "text-slate-500", "mt-1", "line-clamp-2", "leading-relaxed"], [3, "message"], [1, "flex", "items-start", "gap-3", "sm:gap-4", "max-w-[85%]", "mb-4", "animate-in", "fade-in", "duration-150"], [1, "w-9", "h-9", "rounded-xl", "bg-white", "border", "border-slate-200", "p-1.5", "flex", "items-center", "justify-center", "shrink-0", "shadow-xs"], ["src", "cropped-Favicon-3-1-32x32.png", "alt", "CBB", 1, "w-full", "h-full", "object-contain"], [1, "px-5", "py-4", "rounded-2xl", "rounded-tl-xs", "bg-white", "border", "border-slate-200", "shadow-2xs", "flex", "items-center", "gap-2.5"], [1, "flex", "items-center", "gap-1.5"], [1, "w-2", "h-2", "rounded-full", "bg-[#BE002E]", "animate-bounce", "[animation-delay:-0.3s]"], [1, "w-2", "h-2", "rounded-full", "bg-[#0050A1]", "animate-bounce", "[animation-delay:-0.15s]"], [1, "w-2", "h-2", "rounded-full", "bg-[#BE002E]", "animate-bounce"], [1, "text-xs", "text-[#0050A1]", "font-semibold"]], template: function ChatMessagesComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 1, 0)(2, "div", 2);
      \u0275\u0275conditionalCreate(3, ChatMessagesComponent_Conditional_3_Template, 13, 0, "div", 3)(4, ChatMessagesComponent_Conditional_4_Template, 4, 1, "div", 4);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.messages().length === 0 ? 3 : 4);
    }
  }, dependencies: [ChatMessageItemComponent], styles: ["\n[_nghost-%COMP%] {\n  flex: 1 1 0%;\n  min-height: 0;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  background-color: #ffffff;\n}"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ChatMessagesComponent, [{
    type: Component,
    args: [{ selector: "app-chat-messages", changeDetection: ChangeDetectionStrategy.OnPush, imports: [ChatMessageItemComponent], template: `<div #scrollContainer class="flex-1 min-h-0 overflow-y-auto chat-scroll px-4 sm:px-6 py-6 sm:py-8 bg-white">

  <div class="max-w-3xl mx-auto w-full h-full flex flex-col">

    <!-- ESTADO INICIAL: Pantalla de Bienvenida Institucional -->
    @if (messages().length === 0) {
    <div class="my-auto py-4 sm:py-8 flex flex-col items-center text-center animate-in fade-in duration-300">

      <!-- \xCDcono Oficial del Colegio -->
      <div
        class="w-18 h-18 sm:w-22 sm:h-22 rounded-3xl bg-white p-3 flex items-center justify-center shadow-lg border-2 border-[#0050A1]/15 ring-4 ring-[#BE002E]/10 mb-5">
        <img src="cropped-Favicon-3-1-32x32.png" alt="Colegio Bertolt Brecht" class="w-full h-full object-contain" />
      </div>

      <div
        class="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#BE002E]/10 border border-[#BE002E]/25 text-[#BE002E] text-xs font-extrabold uppercase tracking-wide mb-3">
        <span>Asistente Virtual Oficial \u2022 Colegio Bertolt Brecht</span>
      </div>

      <h2 class="text-2xl sm:text-3xl md:text-4xl font-black text-[#0050A1] tracking-tight mb-3">
        \xBFEn qu\xE9 podemos orientarte hoy?
      </h2>

      <p class="text-slate-600 text-sm sm:text-base max-w-xl mb-8 leading-relaxed">
        Resuelve tus dudas al instante sobre matr\xEDculas, pensiones, tr\xE1mites de secretar\xEDa, talleres y sedes con
        informaci\xF3n oficial vigente.
      </p>

      <!-- Grid de Tarjetas de Consulta R\xE1pida (Alternando secciones #BE002E y #0050A1 sobre fondo blanco) -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 w-full text-left">
        @for (card of welcomeCards; track card.title) {
        <button type="button" (click)="selectPrompt.emit(card.prompt)"
          [class]="card.accent === 'red'
                ? 'group relative p-4 rounded-2xl bg-white border border-slate-200 hover:border-[#BE002E] hover:shadow-md transition-all flex flex-col justify-between gap-2 cursor-pointer text-left overflow-hidden'
                : 'group relative p-4 rounded-2xl bg-white border border-slate-200 hover:border-[#0050A1] hover:shadow-md transition-all flex flex-col justify-between gap-2 cursor-pointer text-left overflow-hidden'">

          <!-- Franja superior de color institucional -->
          <div [class]="card.accent === 'red'
                  ? 'absolute top-0 left-0 right-0 h-1 transition-all bg-[#BE002E]'
                  : 'absolute top-0 left-0 right-0 h-1 transition-all bg-[#0050A1]'">
          </div>

          <div class="pt-1">
            <div class="flex items-center justify-between mb-2.5">
              <span
                [class]="card.accent === 'red'
                      ? 'w-9 h-9 rounded-xl flex items-center justify-center text-lg transition-colors bg-[#BE002E]/10'
                      : 'w-9 h-9 rounded-xl flex items-center justify-center text-lg transition-colors bg-[#0050A1]/10'">
                {{ card.icon }}
              </span>
              <span
                [class]="card.accent === 'red'
                      ? 'text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full transition-colors bg-[#BE002E]/10 text-[#BE002E]'
                      : 'text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full transition-colors bg-[#0050A1]/10 text-[#0050A1]'">
                {{ card.badge }}
              </span>
            </div>
            <h3 [class]="card.accent === 'red'
                    ? 'font-bold text-slate-900 text-sm transition-colors group-hover:text-[#BE002E]'
                    : 'font-bold text-slate-900 text-sm transition-colors group-hover:text-[#0050A1]'">
              {{ card.title }}
            </h3>
            <p class="text-xs text-slate-500 mt-1 line-clamp-2 leading-relaxed">
              {{ card.description }}
            </p>
          </div>

          <div
            [class]="card.accent === 'red'
                  ? 'flex items-center gap-1 text-[11px] font-bold opacity-0 group-hover:opacity-100 transition-opacity pt-1 text-[#BE002E]'
                  : 'flex items-center gap-1 text-[11px] font-bold opacity-0 group-hover:opacity-100 transition-opacity pt-1 text-[#0050A1]'">
            <span>Consultar ahora</span>
            <span>\u2192</span>
          </div>
        </button>
        }
      </div>

    </div>
    } @else {
    <!-- HILO DE CONVERSACI\xD3N ACTIVA -->
    <div class="flex-1 space-y-2 pb-4">
      @for (msg of messages(); track msg.id) {
      <app-chat-message-item [message]="msg" />
      }

      <!-- Indicador de "Escribiendo..." / Typing dots -->
      @if (isLoading()) {
      <div class="flex items-start gap-3 sm:gap-4 max-w-[85%] mb-4 animate-in fade-in duration-150">
        <div
          class="w-9 h-9 rounded-xl bg-white border border-slate-200 p-1.5 flex items-center justify-center shrink-0 shadow-xs">
          <img src="cropped-Favicon-3-1-32x32.png" alt="CBB" class="w-full h-full object-contain" />
        </div>
        <div
          class="px-5 py-4 rounded-2xl rounded-tl-xs bg-white border border-slate-200 shadow-2xs flex items-center gap-2.5">
          <div class="flex items-center gap-1.5">
            <span class="w-2 h-2 rounded-full bg-[#BE002E] animate-bounce [animation-delay:-0.3s]"></span>
            <span class="w-2 h-2 rounded-full bg-[#0050A1] animate-bounce [animation-delay:-0.15s]"></span>
            <span class="w-2 h-2 rounded-full bg-[#BE002E] animate-bounce"></span>
          </div>
          <span class="text-xs text-[#0050A1] font-semibold">Consultando...</span>
        </div>
      </div>
      }
    </div>
    }

  </div>

</div>`, styles: ["/* src/app/features/assistant/components/chat-messages/chat-messages.component.css */\n:host {\n  flex: 1 1 0%;\n  min-height: 0;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  background-color: #ffffff;\n}\n"] }]
  }], () => [], { messages: [{ type: Input, args: [{ isSignal: true, alias: "messages", required: true }] }], isLoading: [{ type: Input, args: [{ isSignal: true, alias: "isLoading", required: false }] }], selectPrompt: [{ type: Output, args: ["selectPrompt"] }], scrollContainer: [{ type: ViewChild, args: ["scrollContainer", { isSignal: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ChatMessagesComponent, { className: "ChatMessagesComponent", filePath: "src/app/features/assistant/components/chat-messages/chat-messages.component.ts", lineNumber: 21 });
})();

// src/app/features/assistant/components/chat-suggestions/chat-suggestions.component.ts
var _forTrack02 = ($index, $item) => $item.prompt;
function ChatSuggestionsComponent_For_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "button", 4);
    \u0275\u0275domListener("click", function ChatSuggestionsComponent_For_5_Template_button_click_0_listener() {
      const item_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.selectSuggestion.emit(item_r2.prompt));
    });
    \u0275\u0275domElementStart(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r2.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r2.label);
  }
}
var ChatSuggestionsComponent = class _ChatSuggestionsComponent {
  selectSuggestion = output();
  suggestions = [
    {
      icon: "\u{1F393}",
      label: "Matr\xEDcula 2026",
      prompt: "\xBFCu\xE1les son los requisitos para la matr\xEDcula 2026?",
      category: "matricula"
    },
    {
      icon: "\u{1F4B3}",
      label: "Pago de pensiones",
      prompt: "\xBFCu\xE1les son los canales y fechas de pago de pensiones?",
      category: "pagos"
    },
    {
      icon: "\u{1F4C4}",
      label: "Certificados y tr\xE1mites",
      prompt: "\xBFC\xF3mo solicito una constancia de estudios o certificado?",
      category: "tramites"
    },
    {
      icon: "\u{1F3A8}",
      label: "Talleres y deportes",
      prompt: "\xBFQu\xE9 talleres extracurriculares y deportes ofrecen?",
      category: "talleres"
    },
    {
      icon: "\u{1F4CD}",
      label: "Horarios y sedes",
      prompt: "\xBFCu\xE1les son los horarios de atenci\xF3n y d\xF3nde quedan las sedes?",
      category: "horarios"
    }
  ];
  static \u0275fac = function ChatSuggestionsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ChatSuggestionsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ChatSuggestionsComponent, selectors: [["app-chat-suggestions"]], outputs: { selectSuggestion: "selectSuggestion" }, decls: 6, vars: 0, consts: [[1, "w-full", "px-4", "sm:px-6", "pt-2", "pb-1", "bg-white"], [1, "max-w-3xl", "mx-auto", "flex", "items-center", "gap-2", "overflow-x-auto", "pb-1", "scrollbar-thin"], [1, "text-[11px]", "font-extrabold", "text-[#0050A1]", "uppercase", "tracking-wider", "shrink-0"], ["type", "button", 1, "shrink-0", "inline-flex", "items-center", "gap-1.5", "px-3", "py-1.5", "rounded-full", "bg-white", "hover:bg-[#BE002E]/10", "text-slate-700", "hover:text-[#BE002E]", "text-xs", "font-semibold", "border", "border-slate-200", "hover:border-[#BE002E]/40", "transition-all", "shadow-2xs", "cursor-pointer"], ["type", "button", 1, "shrink-0", "inline-flex", "items-center", "gap-1.5", "px-3", "py-1.5", "rounded-full", "bg-white", "hover:bg-[#BE002E]/10", "text-slate-700", "hover:text-[#BE002E]", "text-xs", "font-semibold", "border", "border-slate-200", "hover:border-[#BE002E]/40", "transition-all", "shadow-2xs", "cursor-pointer", 3, "click"]], template: function ChatSuggestionsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0)(1, "div", 1)(2, "span", 2);
      \u0275\u0275text(3, " Consultas r\xE1pidas: ");
      \u0275\u0275domElementEnd();
      \u0275\u0275repeaterCreate(4, ChatSuggestionsComponent_For_5_Template, 5, 2, "button", 3, _forTrack02);
      \u0275\u0275domElementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(4);
      \u0275\u0275repeater(ctx.suggestions);
    }
  }, styles: ["\n[_nghost-%COMP%] {\n  display: block;\n}"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ChatSuggestionsComponent, [{
    type: Component,
    args: [{ selector: "app-chat-suggestions", changeDetection: ChangeDetectionStrategy.OnPush, template: '<div class="w-full px-4 sm:px-6 pt-2 pb-1 bg-white">\n  <div class="max-w-3xl mx-auto flex items-center gap-2 overflow-x-auto pb-1 scrollbar-thin">\n    <span class="text-[11px] font-extrabold text-[#0050A1] uppercase tracking-wider shrink-0">\n      Consultas r\xE1pidas:\n    </span>\n    @for (item of suggestions; track item.prompt) {\n      <button\n        type="button"\n        (click)="selectSuggestion.emit(item.prompt)"\n        class="shrink-0 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white hover:bg-[#BE002E]/10 text-slate-700 hover:text-[#BE002E] text-xs font-semibold border border-slate-200 hover:border-[#BE002E]/40 transition-all shadow-2xs cursor-pointer">\n        <span>{{ item.icon }}</span>\n        <span>{{ item.label }}</span>\n      </button>\n    }\n  </div>\n</div>\n', styles: ["/* src/app/features/assistant/components/chat-suggestions/chat-suggestions.component.css */\n:host {\n  display: block;\n}\n"] }]
  }], null, { selectSuggestion: [{ type: Output, args: ["selectSuggestion"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ChatSuggestionsComponent, { className: "ChatSuggestionsComponent", filePath: "src/app/features/assistant/components/chat-suggestions/chat-suggestions.component.ts", lineNumber: 10 });
})();

// src/app/features/assistant/components/chat-input/chat-input.component.ts
function ChatInputComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275domElementStart(0, "svg", 9);
    \u0275\u0275domElement(1, "circle", 10)(2, "path", 11);
    \u0275\u0275domElementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275domElementStart(3, "span", 12);
    \u0275\u0275text(4, "Enviando");
    \u0275\u0275domElementEnd();
  }
}
function ChatInputComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 12);
    \u0275\u0275text(1, "Enviar");
    \u0275\u0275domElementEnd();
    \u0275\u0275namespaceSVG();
    \u0275\u0275domElementStart(2, "svg", 13);
    \u0275\u0275domElement(3, "path", 14);
    \u0275\u0275domElementEnd();
  }
}
var ChatInputComponent = class _ChatInputComponent {
  disabled = input(false, ...ngDevMode ? [{ debugName: "disabled" }] : (
    /* istanbul ignore next */
    []
  ));
  send = output();
  promptText = signal("", ...ngDevMode ? [{ debugName: "promptText" }] : (
    /* istanbul ignore next */
    []
  ));
  onInput(event) {
    const target = event.target;
    this.promptText.set(target.value);
  }
  onKeydown(event) {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      this.submitMessage();
    }
  }
  onSubmit(event) {
    event.preventDefault();
    this.submitMessage();
  }
  canSend() {
    return this.promptText().trim().length > 0 && !this.disabled();
  }
  submitMessage() {
    const text2 = this.promptText().trim();
    if (!text2 || this.disabled())
      return;
    this.send.emit(text2);
    this.promptText.set("");
  }
  static \u0275fac = function ChatInputComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ChatInputComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ChatInputComponent, selectors: [["app-chat-input"]], inputs: { disabled: [1, "disabled"] }, outputs: { send: "send" }, decls: 15, vars: 5, consts: [[1, "w-full", "px-4", "sm:px-6", "pb-4", "pt-2", "bg-white", "border-t", "border-slate-100"], [1, "max-w-3xl", "mx-auto"], [1, "flex", "items-end", "gap-2", "p-2", "rounded-2xl", "bg-white", "border-2", "border-slate-200", "shadow-md", "shadow-slate-900/5", "focus-within:border-[#0050A1]", "focus-within:ring-3", "focus-within:ring-[#0050A1]/15", "transition-all", 3, "submit"], [1, "relative", "flex-1"], ["placeholder", "Escribe tu consulta sobre matr\xEDculas, pensiones, tr\xE1mites o sedes...", "rows", "1", 1, "w-full", "resize-none", "bg-transparent", "text-slate-800", "placeholder-slate-400", "text-sm", "sm:text-[15px]", "px-3", "py-2.5", "focus:outline-hidden", "max-h-36", "min-h-[44px]", "disabled:opacity-60", "disabled:cursor-not-allowed", 3, "input", "keydown", "value", "disabled"], ["type", "submit", 1, "h-11", "px-4", "sm:px-5", "rounded-xl", "bg-[#BE002E]", "hover:bg-[#9e0026]", "text-white", "font-bold", "text-sm", "flex", "items-center", "justify-center", "gap-2", "shrink-0", "shadow-sm", "shadow-[#BE002E]/25", "disabled:opacity-40", "disabled:cursor-not-allowed", "transition-all", "transform", "active:scale-95", "cursor-pointer", 3, "disabled"], [1, "text-center", "mt-2.5", "px-2"], [1, "text-[11px]", "text-slate-400"], [1, "font-semibold", "text-[#0050A1]"], ["fill", "none", "viewBox", "0 0 24 24", 1, "animate-spin", "h-4", "w-4", "text-white"], ["cx", "12", "cy", "12", "r", "10", "stroke", "currentColor", "stroke-width", "4", 1, "opacity-25"], ["fill", "currentColor", "d", "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z", 1, "opacity-75"], [1, "hidden", "sm:inline"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4", "translate-x-0.5"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2.5", "d", "M12 19l9 2-9-18-9 18 9-2zm0 0v-8"]], template: function ChatInputComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0)(1, "div", 1)(2, "form", 2);
      \u0275\u0275domListener("submit", function ChatInputComponent_Template_form_submit_2_listener($event) {
        return ctx.onSubmit($event);
      });
      \u0275\u0275domElementStart(3, "div", 3)(4, "textarea", 4);
      \u0275\u0275domListener("input", function ChatInputComponent_Template_textarea_input_4_listener($event) {
        return ctx.onInput($event);
      })("keydown", function ChatInputComponent_Template_textarea_keydown_4_listener($event) {
        return ctx.onKeydown($event);
      });
      \u0275\u0275text(5, "        ");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(6, "button", 5);
      \u0275\u0275conditionalCreate(7, ChatInputComponent_Conditional_7_Template, 5, 0)(8, ChatInputComponent_Conditional_8_Template, 4, 0);
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(9, "div", 6)(10, "p", 7);
      \u0275\u0275text(11, " Orientaci\xF3n oficial basada en reglamentos vigentes del ");
      \u0275\u0275domElementStart(12, "span", 8);
      \u0275\u0275text(13, "Colegio Bertolt Brecht");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(14, " \u2022 Protecci\xF3n de datos personales (Ley N.\xB0 29733) \u2022 Central: (01) 315-7000 ");
      \u0275\u0275domElementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(4);
      \u0275\u0275domProperty("value", ctx.promptText())("disabled", ctx.disabled());
      \u0275\u0275advance(2);
      \u0275\u0275domProperty("disabled", !ctx.canSend());
      \u0275\u0275attribute("aria-label", "Enviar mensaje");
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.disabled() ? 7 : 8);
    }
  }, styles: ["\n[_nghost-%COMP%] {\n  display: block;\n}"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ChatInputComponent, [{
    type: Component,
    args: [{ selector: "app-chat-input", changeDetection: ChangeDetectionStrategy.OnPush, template: `<div class="w-full px-4 sm:px-6 pb-4 pt-2 bg-white border-t border-slate-100">
  <div class="max-w-3xl mx-auto">
    
    <form 
      (submit)="onSubmit($event)" 
      class="flex items-end gap-2 p-2 rounded-2xl bg-white border-2 border-slate-200 shadow-md shadow-slate-900/5 focus-within:border-[#0050A1] focus-within:ring-3 focus-within:ring-[#0050A1]/15 transition-all">
      
      <div class="relative flex-1">
        <textarea
          [value]="promptText()"
          (input)="onInput($event)"
          (keydown)="onKeydown($event)"
          [disabled]="disabled()"
          placeholder="Escribe tu consulta sobre matr\xEDculas, pensiones, tr\xE1mites o sedes..."
          rows="1"
          class="w-full resize-none bg-transparent text-slate-800 placeholder-slate-400 text-sm sm:text-[15px] px-3 py-2.5 focus:outline-hidden max-h-36 min-h-[44px] disabled:opacity-60 disabled:cursor-not-allowed">
        </textarea>
      </div>

      <button
        type="submit"
        [disabled]="!canSend()"
        [attr.aria-label]="'Enviar mensaje'"
        class="h-11 px-4 sm:px-5 rounded-xl bg-[#BE002E] hover:bg-[#9e0026] text-white font-bold text-sm flex items-center justify-center gap-2 shrink-0 shadow-sm shadow-[#BE002E]/25 disabled:opacity-40 disabled:cursor-not-allowed transition-all transform active:scale-95 cursor-pointer">
        
        @if (disabled()) {
          <svg class="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          <span class="hidden sm:inline">Enviando</span>
        } @else {
          <span class="hidden sm:inline">Enviar</span>
          <svg class="w-4 h-4 translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
          </svg>
        }

      </button>

    </form>

    <!-- Nota institucional y protecci\xF3n de datos -->
    <div class="text-center mt-2.5 px-2">
      <p class="text-[11px] text-slate-400">
        Orientaci\xF3n oficial basada en reglamentos vigentes del <span class="font-semibold text-[#0050A1]">Colegio Bertolt Brecht</span> \u2022 Protecci\xF3n de datos personales (Ley N.\xB0 29733) \u2022 Central: (01) 315-7000
      </p>
    </div>

  </div>
</div>
`, styles: ["/* src/app/features/assistant/components/chat-input/chat-input.component.css */\n:host {\n  display: block;\n}\n"] }]
  }], null, { disabled: [{ type: Input, args: [{ isSignal: true, alias: "disabled", required: false }] }], send: [{ type: Output, args: ["send"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ChatInputComponent, { className: "ChatInputComponent", filePath: "src/app/features/assistant/components/chat-input/chat-input.component.ts", lineNumber: 9 });
})();

// src/app/features/assistant/components/chat-feedback-modal/chat-feedback-modal.component.ts
function ChatFeedbackModalComponent_Conditional_0_Conditional_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span");
    \u0275\u0275text(1, "Enviando...");
    \u0275\u0275domElementEnd();
  }
}
function ChatFeedbackModalComponent_Conditional_0_Conditional_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span");
    \u0275\u0275text(1, "Enviar y finalizar");
    \u0275\u0275domElementEnd();
  }
}
function ChatFeedbackModalComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "div", 0)(1, "div", 1);
    \u0275\u0275domElement(2, "div", 2);
    \u0275\u0275domElementStart(3, "button", 3);
    \u0275\u0275domListener("click", function ChatFeedbackModalComponent_Conditional_0_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onCancel());
    });
    \u0275\u0275text(4, " \u2715 ");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(5, "div", 4)(6, "div", 5)(7, "div", 6);
    \u0275\u0275domElement(8, "img", 7);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(9, "h3", 8);
    \u0275\u0275text(10, " \xBFCumplimos con responder a su consulta? ");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(11, "p", 9);
    \u0275\u0275text(12, " Su opini\xF3n nos ayuda a mejorar la informaci\xF3n de nuestro asistente virtual. ");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(13, "div", 10)(14, "button", 11);
    \u0275\u0275domListener("click", function ChatFeedbackModalComponent_Conditional_0_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.selectResolucion("SI"));
    });
    \u0275\u0275domElementStart(15, "span", 12);
    \u0275\u0275text(16, "\u{1F60D}");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(17, "span", 13);
    \u0275\u0275text(18, "S\xED, totalmente");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(19, "button", 11);
    \u0275\u0275domListener("click", function ChatFeedbackModalComponent_Conditional_0_Template_button_click_19_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.selectResolucion("PARCIAL"));
    });
    \u0275\u0275domElementStart(20, "span", 12);
    \u0275\u0275text(21, "\u{1F610}");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(22, "span", 13);
    \u0275\u0275text(23, "Parcialmente");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(24, "button", 11);
    \u0275\u0275domListener("click", function ChatFeedbackModalComponent_Conditional_0_Template_button_click_24_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.selectResolucion("NO"));
    });
    \u0275\u0275domElementStart(25, "span", 12);
    \u0275\u0275text(26, "\u{1F61E}");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(27, "span", 13);
    \u0275\u0275text(28, "No resolvi\xF3 mi duda");
    \u0275\u0275domElementEnd()()();
    \u0275\u0275domElementStart(29, "div", 14)(30, "label", 15);
    \u0275\u0275text(31, " Comentarios o sugerencias ");
    \u0275\u0275domElementStart(32, "span", 16);
    \u0275\u0275text(33, "(opcional)");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(34, "textarea", 17);
    \u0275\u0275domListener("input", function ChatFeedbackModalComponent_Conditional_0_Template_textarea_input_34_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onCommentInput($event));
    });
    \u0275\u0275text(35, "          ");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(36, "div", 18)(37, "button", 19);
    \u0275\u0275domListener("click", function ChatFeedbackModalComponent_Conditional_0_Template_button_click_37_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSkip());
    });
    \u0275\u0275text(38, " Omitir y salir ");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(39, "button", 20);
    \u0275\u0275domListener("click", function ChatFeedbackModalComponent_Conditional_0_Template_button_click_39_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSubmit());
    });
    \u0275\u0275conditionalCreate(40, ChatFeedbackModalComponent_Conditional_0_Conditional_40_Template, 2, 0, "span")(41, ChatFeedbackModalComponent_Conditional_0_Conditional_41_Template, 2, 0, "span");
    \u0275\u0275domElementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275domProperty("disabled", ctx_r1.isSubmitting());
    \u0275\u0275advance(11);
    \u0275\u0275classMap(ctx_r1.selectedResolucion() === "SI" ? "flex flex-col items-center justify-center gap-1.5 p-3 rounded-2xl border-2 transition-all cursor-pointer text-center border-emerald-500 bg-emerald-50/70" : "flex flex-col items-center justify-center gap-1.5 p-3 rounded-2xl border-2 transition-all cursor-pointer text-center border-slate-200 hover:border-emerald-300");
    \u0275\u0275domProperty("disabled", ctx_r1.isSubmitting());
    \u0275\u0275advance(5);
    \u0275\u0275classMap(ctx_r1.selectedResolucion() === "PARCIAL" ? "flex flex-col items-center justify-center gap-1.5 p-3 rounded-2xl border-2 transition-all cursor-pointer text-center border-amber-500 bg-amber-50/70" : "flex flex-col items-center justify-center gap-1.5 p-3 rounded-2xl border-2 transition-all cursor-pointer text-center border-slate-200 hover:border-amber-300");
    \u0275\u0275domProperty("disabled", ctx_r1.isSubmitting());
    \u0275\u0275advance(5);
    \u0275\u0275classMap(ctx_r1.selectedResolucion() === "NO" ? "flex flex-col items-center justify-center gap-1.5 p-3 rounded-2xl border-2 transition-all cursor-pointer text-center border-[#BE002E] bg-red-50/70" : "flex flex-col items-center justify-center gap-1.5 p-3 rounded-2xl border-2 transition-all cursor-pointer text-center border-slate-200 hover:border-red-300");
    \u0275\u0275domProperty("disabled", ctx_r1.isSubmitting());
    \u0275\u0275advance(10);
    \u0275\u0275domProperty("value", ctx_r1.comentario())("disabled", ctx_r1.isSubmitting());
    \u0275\u0275advance(3);
    \u0275\u0275domProperty("disabled", ctx_r1.isSubmitting());
    \u0275\u0275advance(2);
    \u0275\u0275domProperty("disabled", !ctx_r1.selectedResolucion() || ctx_r1.isSubmitting());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isSubmitting() ? 40 : 41);
  }
}
var ChatFeedbackModalComponent = class _ChatFeedbackModalComponent {
  isOpen = input(false, ...ngDevMode ? [{ debugName: "isOpen" }] : (
    /* istanbul ignore next */
    []
  ));
  isSubmitting = input(false, ...ngDevMode ? [{ debugName: "isSubmitting" }] : (
    /* istanbul ignore next */
    []
  ));
  cancel = output();
  skipAndClose = output();
  submitFeedback = output();
  selectedResolucion = signal(null, ...ngDevMode ? [{ debugName: "selectedResolucion" }] : (
    /* istanbul ignore next */
    []
  ));
  comentario = signal("", ...ngDevMode ? [{ debugName: "comentario" }] : (
    /* istanbul ignore next */
    []
  ));
  selectResolucion(val) {
    this.selectedResolucion.set(val);
  }
  onCommentInput(event) {
    const target = event.target;
    this.comentario.set(target.value);
  }
  onCancel() {
    this.cancel.emit();
  }
  onSkip() {
    this.resetState();
    this.skipAndClose.emit();
  }
  onSubmit() {
    const resuelto = this.selectedResolucion();
    if (!resuelto || this.isSubmitting())
      return;
    this.submitFeedback.emit({
      resuelto,
      comentario: this.comentario().trim()
    });
  }
  resetState() {
    this.selectedResolucion.set(null);
    this.comentario.set("");
  }
  static \u0275fac = function ChatFeedbackModalComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ChatFeedbackModalComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ChatFeedbackModalComponent, selectors: [["app-chat-feedback-modal"]], inputs: { isOpen: [1, "isOpen"], isSubmitting: [1, "isSubmitting"] }, outputs: { cancel: "cancel", skipAndClose: "skipAndClose", submitFeedback: "submitFeedback" }, decls: 1, vars: 1, consts: [[1, "fixed", "inset-0", "z-50", "flex", "items-center", "justify-center", "p-4", "bg-slate-900/60", "backdrop-blur-xs", "animate-in", "fade-in", "duration-150"], [1, "relative", "w-full", "max-w-md", "rounded-3xl", "bg-white", "border", "border-slate-200", "shadow-2xl", "overflow-hidden", "animate-in", "zoom-in-95", "duration-200"], [1, "h-2", "bg-gradient-to-r", "from-[#0050A1]", "via-[#0050A1]", "to-[#BE002E]"], ["type", "button", "title", "Volver a la conversaci\xF3n", 1, "absolute", "top-4", "right-4", "w-8", "h-8", "rounded-full", "bg-slate-100", "hover:bg-slate-200", "text-slate-500", "hover:text-slate-800", "flex", "items-center", "justify-center", "text-sm", "transition-colors", "cursor-pointer", 3, "click", "disabled"], [1, "p-6", "sm:p-7"], [1, "flex", "flex-col", "items-center", "text-center", "mb-5"], [1, "w-12", "h-12", "rounded-2xl", "bg-white", "border", "border-slate-200", "p-2", "flex", "items-center", "justify-center", "shadow-xs", "mb-3"], ["src", "cropped-Favicon-3-1-32x32.png", "alt", "CBB", 1, "w-full", "h-full", "object-contain"], [1, "text-lg", "sm:text-xl", "font-extrabold", "text-[#0050A1]", "leading-snug"], [1, "text-xs", "sm:text-sm", "text-slate-500", "mt-1"], [1, "grid", "grid-cols-3", "gap-2.5", "mb-5"], ["type", "button", 3, "click", "disabled"], [1, "text-2xl"], [1, "text-xs", "font-bold", "text-slate-800", "leading-tight"], [1, "mb-5"], [1, "block", "text-xs", "font-bold", "text-slate-700", "mb-1.5"], [1, "text-slate-400", "font-normal"], ["rows", "3", "maxlength", "1000", "placeholder", "Cu\xE9ntenos qu\xE9 informaci\xF3n adicional le hubiera gustado encontrar...", 1, "w-full", "resize-none", "rounded-2xl", "border", "border-slate-200", "focus:border-[#0050A1]", "focus:ring-2", "focus:ring-[#0050A1]/15", "p-3", "text-xs", "sm:text-sm", "text-slate-800", "placeholder-slate-400", "focus:outline-hidden", "transition-all", 3, "input", "value", "disabled"], [1, "flex", "items-center", "justify-end", "gap-2.5"], ["type", "button", 1, "px-4", "py-2.5", "rounded-xl", "border", "border-slate-200", "bg-slate-50", "hover:bg-slate-100", "text-slate-600", "text-xs", "font-bold", "transition-colors", "cursor-pointer", 3, "click", "disabled"], ["type", "button", 1, "px-5", "py-2.5", "rounded-xl", "bg-[#BE002E]", "hover:bg-[#9e0026]", "text-white", "text-xs", "sm:text-sm", "font-bold", "shadow-md", "shadow-[#BE002E]/20", "disabled:opacity-40", "disabled:cursor-not-allowed", "transition-all", "cursor-pointer", "flex", "items-center", "gap-2", 3, "click", "disabled"]], template: function ChatFeedbackModalComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, ChatFeedbackModalComponent_Conditional_0_Template, 42, 15, "div", 0);
    }
    if (rf & 2) {
      \u0275\u0275conditional(ctx.isOpen() ? 0 : -1);
    }
  }, styles: ["\n[_nghost-%COMP%] {\n  display: contents;\n}"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ChatFeedbackModalComponent, [{
    type: Component,
    args: [{ selector: "app-chat-feedback-modal", changeDetection: ChangeDetectionStrategy.OnPush, template: `@if (isOpen()) {
  <div class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-150">
    
    <div class="relative w-full max-w-md rounded-3xl bg-white border border-slate-200 shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200">
      
      <!-- Franja institucional superior -->
      <div class="h-2 bg-gradient-to-r from-[#0050A1] via-[#0050A1] to-[#BE002E]"></div>

      <!-- Bot\xF3n cerrar (X) para cancelar y volver al chat -->
      <button
        type="button"
        (click)="onCancel()"
        [disabled]="isSubmitting()"
        title="Volver a la conversaci\xF3n"
        class="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-800 flex items-center justify-center text-sm transition-colors cursor-pointer">
        \u2715
      </button>

      <div class="p-6 sm:p-7">
        
        <!-- Encabezado del Popup -->
        <div class="flex flex-col items-center text-center mb-5">
          <div class="w-12 h-12 rounded-2xl bg-white border border-slate-200 p-2 flex items-center justify-center shadow-xs mb-3">
            <img src="cropped-Favicon-3-1-32x32.png" alt="CBB" class="w-full h-full object-contain" />
          </div>
          <h3 class="text-lg sm:text-xl font-extrabold text-[#0050A1] leading-snug">
            \xBFCumplimos con responder a su consulta?
          </h3>
          <p class="text-xs sm:text-sm text-slate-500 mt-1">
            Su opini\xF3n nos ayuda a mejorar la informaci\xF3n de nuestro asistente virtual.
          </p>
        </div>

        <!-- Sem\xE1foro de 3 opciones de resoluci\xF3n -->
        <div class="grid grid-cols-3 gap-2.5 mb-5">
          
          <!-- Opci\xF3n 1: SI -->
          <button
            type="button"
            (click)="selectResolucion('SI')"
            [disabled]="isSubmitting()"
            [class]="selectedResolucion() === 'SI'
              ? 'flex flex-col items-center justify-center gap-1.5 p-3 rounded-2xl border-2 transition-all cursor-pointer text-center border-emerald-500 bg-emerald-50/70'
              : 'flex flex-col items-center justify-center gap-1.5 p-3 rounded-2xl border-2 transition-all cursor-pointer text-center border-slate-200 hover:border-emerald-300'">
            <span class="text-2xl">\u{1F60D}</span>
            <span class="text-xs font-bold text-slate-800 leading-tight">S\xED, totalmente</span>
          </button>

          <!-- Opci\xF3n 2: PARCIAL -->
          <button
            type="button"
            (click)="selectResolucion('PARCIAL')"
            [disabled]="isSubmitting()"
            [class]="selectedResolucion() === 'PARCIAL'
              ? 'flex flex-col items-center justify-center gap-1.5 p-3 rounded-2xl border-2 transition-all cursor-pointer text-center border-amber-500 bg-amber-50/70'
              : 'flex flex-col items-center justify-center gap-1.5 p-3 rounded-2xl border-2 transition-all cursor-pointer text-center border-slate-200 hover:border-amber-300'">
            <span class="text-2xl">\u{1F610}</span>
            <span class="text-xs font-bold text-slate-800 leading-tight">Parcialmente</span>
          </button>

          <!-- Opci\xF3n 3: NO -->
          <button
            type="button"
            (click)="selectResolucion('NO')"
            [disabled]="isSubmitting()"
            [class]="selectedResolucion() === 'NO'
              ? 'flex flex-col items-center justify-center gap-1.5 p-3 rounded-2xl border-2 transition-all cursor-pointer text-center border-[#BE002E] bg-red-50/70'
              : 'flex flex-col items-center justify-center gap-1.5 p-3 rounded-2xl border-2 transition-all cursor-pointer text-center border-slate-200 hover:border-red-300'">
            <span class="text-2xl">\u{1F61E}</span>
            <span class="text-xs font-bold text-slate-800 leading-tight">No resolvi\xF3 mi duda</span>
          </button>

        </div>

        <!-- Campo de Comentarios -->
        <div class="mb-5">
          <label class="block text-xs font-bold text-slate-700 mb-1.5">
            Comentarios o sugerencias <span class="text-slate-400 font-normal">(opcional)</span>
          </label>
          <textarea
            [value]="comentario()"
            (input)="onCommentInput($event)"
            [disabled]="isSubmitting()"
            rows="3"
            maxlength="1000"
            placeholder="Cu\xE9ntenos qu\xE9 informaci\xF3n adicional le hubiera gustado encontrar..."
            class="w-full resize-none rounded-2xl border border-slate-200 focus:border-[#0050A1] focus:ring-2 focus:ring-[#0050A1]/15 p-3 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-hidden transition-all">
          </textarea>
        </div>

        <!-- Botones de Acci\xF3n -->
        <div class="flex items-center justify-end gap-2.5">
          <button
            type="button"
            (click)="onSkip()"
            [disabled]="isSubmitting()"
            class="px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-600 text-xs font-bold transition-colors cursor-pointer">
            Omitir y salir
          </button>

          <button
            type="button"
            (click)="onSubmit()"
            [disabled]="!selectedResolucion() || isSubmitting()"
            class="px-5 py-2.5 rounded-xl bg-[#BE002E] hover:bg-[#9e0026] text-white text-xs sm:text-sm font-bold shadow-md shadow-[#BE002E]/20 disabled:opacity-40 disabled:cursor-not-allowed transition-all cursor-pointer flex items-center gap-2">
            @if (isSubmitting()) {
              <span>Enviando...</span>
            } @else {
              <span>Enviar y finalizar</span>
            }
          </button>
        </div>

      </div>

    </div>

  </div>
}
`, styles: ["/* src/app/features/assistant/components/chat-feedback-modal/chat-feedback-modal.component.css */\n:host {\n  display: contents;\n}\n"] }]
  }], null, { isOpen: [{ type: Input, args: [{ isSignal: true, alias: "isOpen", required: false }] }], isSubmitting: [{ type: Input, args: [{ isSignal: true, alias: "isSubmitting", required: false }] }], cancel: [{ type: Output, args: ["cancel"] }], skipAndClose: [{ type: Output, args: ["skipAndClose"] }], submitFeedback: [{ type: Output, args: ["submitFeedback"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ChatFeedbackModalComponent, { className: "ChatFeedbackModalComponent", filePath: "src/app/features/assistant/components/chat-feedback-modal/chat-feedback-modal.component.ts", lineNumber: 10 });
})();

// src/app/features/assistant/assistant.component.ts
var _c02 = ["feedbackModal"];
function AssistantComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-chat-suggestions", 7);
    \u0275\u0275listener("selectSuggestion", function AssistantComponent_Conditional_3_Template_app_chat_suggestions_selectSuggestion_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.sendMessage($event));
    });
    \u0275\u0275elementEnd();
  }
}
var AssistantComponent = class _AssistantComponent {
  assistantService = inject(AssistantService);
  feedbackModal = viewChild("feedbackModal", ...ngDevMode ? [{ debugName: "feedbackModal" }] : (
    /* istanbul ignore next */
    []
  ));
  isLoading = signal(false, ...ngDevMode ? [{ debugName: "isLoading" }] : (
    /* istanbul ignore next */
    []
  ));
  messages = signal([], ...ngDevMode ? [{ debugName: "messages" }] : (
    /* istanbul ignore next */
    []
  ));
  hasMessages = computed(() => this.messages().length > 0, ...ngDevMode ? [{ debugName: "hasMessages" }] : (
    /* istanbul ignore next */
    []
  ));
  isFeedbackModalOpen = signal(false, ...ngDevMode ? [{ debugName: "isFeedbackModalOpen" }] : (
    /* istanbul ignore next */
    []
  ));
  isSubmittingFeedback = signal(false, ...ngDevMode ? [{ debugName: "isSubmittingFeedback" }] : (
    /* istanbul ignore next */
    []
  ));
  sendMessage(text2) {
    if (!text2.trim() || this.isLoading())
      return;
    const userMsg = {
      id: "usr_" + Date.now(),
      sender: "user",
      text: text2.trim(),
      timestamp: /* @__PURE__ */ new Date()
    };
    this.messages.update((msgs) => [...msgs, userMsg]);
    this.isLoading.set(true);
    this.assistantService.askQuestion(text2).subscribe({
      next: (response) => {
        const assistantMsg = {
          id: "asst_" + Date.now(),
          sender: "assistant",
          text: response.texto_generado,
          timestamp: /* @__PURE__ */ new Date(),
          fuentes: response.fuentes
        };
        this.messages.update((msgs) => [...msgs, assistantMsg]);
        this.isLoading.set(false);
      },
      error: (error) => {
        const errorMsg = {
          id: "err_" + Date.now(),
          sender: "assistant",
          text: error.message || "Lo sentimos, ocurri\xF3 un problema al conectar con el servidor. Por favor, reintenta en unos instantes.",
          timestamp: /* @__PURE__ */ new Date(),
          isError: true
        };
        this.messages.update((msgs) => [...msgs, errorMsg]);
        this.isLoading.set(false);
      }
    });
  }
  openFeedbackModal() {
    this.isFeedbackModalOpen.set(true);
  }
  closeFeedbackModal() {
    if (this.isSubmittingFeedback())
      return;
    this.isFeedbackModalOpen.set(false);
  }
  onSubmitFeedback(data) {
    this.isSubmittingFeedback.set(true);
    const userMessages = this.messages().filter((m) => m.sender === "user");
    const ultimaPregunta = userMessages.length > 0 ? userMessages[userMessages.length - 1].text : void 0;
    this.assistantService.sendFeedback({
      resuelto: data.resuelto,
      comentario: data.comentario,
      ultimaPregunta
    }).subscribe({
      next: () => {
        this.isSubmittingFeedback.set(false);
        this.feedbackModal()?.resetState();
        this.finalizeSession();
      },
      error: () => {
        this.isSubmittingFeedback.set(false);
        this.feedbackModal()?.resetState();
        this.finalizeSession();
      }
    });
  }
  finalizeSession() {
    this.isFeedbackModalOpen.set(false);
    this.assistantService.resetConversation();
    this.messages.set([]);
  }
  static \u0275fac = function AssistantComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AssistantComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AssistantComponent, selectors: [["app-assistant"]], viewQuery: function AssistantComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuerySignal(ctx.feedbackModal, _c02, 5);
    }
    if (rf & 2) {
      \u0275\u0275queryAdvance();
    }
  }, decls: 7, vars: 7, consts: [["feedbackModal", ""], [1, "w-full", "h-dvh", "flex", "flex-col", "bg-white", "overflow-hidden"], [1, "shrink-0", 3, "closeConversation", "hasMessages"], [1, "flex-1", "min-h-0", "flex", "flex-col", "overflow-hidden", 3, "selectPrompt", "messages", "isLoading"], [1, "shrink-0"], [1, "shrink-0", 3, "send", "disabled"], [3, "cancel", "skipAndClose", "submitFeedback", "isOpen", "isSubmitting"], [1, "shrink-0", 3, "selectSuggestion"]], template: function AssistantComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 1)(1, "app-chat-header", 2);
      \u0275\u0275listener("closeConversation", function AssistantComponent_Template_app_chat_header_closeConversation_1_listener() {
        return ctx.openFeedbackModal();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2, "app-chat-messages", 3);
      \u0275\u0275listener("selectPrompt", function AssistantComponent_Template_app_chat_messages_selectPrompt_2_listener($event) {
        return ctx.sendMessage($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(3, AssistantComponent_Conditional_3_Template, 1, 0, "app-chat-suggestions", 4);
      \u0275\u0275elementStart(4, "app-chat-input", 5);
      \u0275\u0275listener("send", function AssistantComponent_Template_app_chat_input_send_4_listener($event) {
        return ctx.sendMessage($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "app-chat-feedback-modal", 6, 0);
      \u0275\u0275listener("cancel", function AssistantComponent_Template_app_chat_feedback_modal_cancel_5_listener() {
        return ctx.closeFeedbackModal();
      })("skipAndClose", function AssistantComponent_Template_app_chat_feedback_modal_skipAndClose_5_listener() {
        return ctx.finalizeSession();
      })("submitFeedback", function AssistantComponent_Template_app_chat_feedback_modal_submitFeedback_5_listener($event) {
        return ctx.onSubmitFeedback($event);
      });
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("hasMessages", ctx.hasMessages());
      \u0275\u0275advance();
      \u0275\u0275property("messages", ctx.messages())("isLoading", ctx.isLoading());
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.hasMessages() ? 3 : -1);
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.isLoading());
      \u0275\u0275advance();
      \u0275\u0275property("isOpen", ctx.isFeedbackModalOpen())("isSubmitting", ctx.isSubmittingFeedback());
    }
  }, dependencies: [
    ChatHeaderComponent,
    ChatMessagesComponent,
    ChatSuggestionsComponent,
    ChatInputComponent,
    ChatFeedbackModalComponent
  ], styles: ["\n[_nghost-%COMP%] {\n  display: block;\n}"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AssistantComponent, [{
    type: Component,
    args: [{ selector: "app-assistant", changeDetection: ChangeDetectionStrategy.OnPush, imports: [
      ChatHeaderComponent,
      ChatMessagesComponent,
      ChatSuggestionsComponent,
      ChatInputComponent,
      ChatFeedbackModalComponent
    ], template: '<div class="w-full h-dvh flex flex-col bg-white overflow-hidden">\n  \n  <!-- Cabecera Superior Institucional (#0050A1 + #BE002E) -->\n  <app-chat-header \n    class="shrink-0"\n    [hasMessages]="hasMessages()"\n    (closeConversation)="openFeedbackModal()" \n  />\n\n  <!-- \xC1rea Principal sobre Blanco (Pantalla de Bienvenida + Hilo de Conversaci\xF3n) -->\n  <app-chat-messages \n    class="flex-1 min-h-0 flex flex-col overflow-hidden"\n    [messages]="messages()" \n    [isLoading]="isLoading()"\n    (selectPrompt)="sendMessage($event)"\n  />\n\n  <!-- Chips de Sugerencias R\xE1pidas (visibles durante la conversaci\xF3n) -->\n  @if (hasMessages()) {\n    <app-chat-suggestions \n      class="shrink-0"\n      (selectSuggestion)="sendMessage($event)" \n    />\n  }\n\n  <!-- Barra de Entrada Inferior -->\n  <app-chat-input \n    class="shrink-0"\n    [disabled]="isLoading()" \n    (send)="sendMessage($event)" \n  />\n\n  <!-- Popup de Satisfacci\xF3n al Cerrar Conversaci\xF3n -->\n  <app-chat-feedback-modal\n    #feedbackModal\n    [isOpen]="isFeedbackModalOpen()"\n    [isSubmitting]="isSubmittingFeedback()"\n    (cancel)="closeFeedbackModal()"\n    (skipAndClose)="finalizeSession()"\n    (submitFeedback)="onSubmitFeedback($event)"\n  />\n\n</div>\n', styles: ["/* src/app/features/assistant/assistant.component.css */\n:host {\n  display: block;\n}\n"] }]
  }], null, { feedbackModal: [{ type: ViewChild, args: ["feedbackModal", { isSignal: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AssistantComponent, { className: "AssistantComponent", filePath: "src/app/features/assistant/assistant.component.ts", lineNumber: 23 });
})();
export {
  AssistantComponent
};
