import {
  HttpClient,
  HttpHeaders,
  Injectable,
  catchError,
  computed,
  environment,
  inject,
  map,
  setClassMetadata,
  signal,
  tap,
  throwError,
  ɵɵdefineInjectable
} from "./chunk-E3LVDSZH.js";

// src/app/core/services/backoffice.service.ts
var SESSION_STORAGE_KEY = "cbb_backoffice_session";
var BackofficeService = class _BackofficeService {
  http = inject(HttpClient);
  baseUrl = `${environment.apiUrl}/admin`;
  currentSession = signal(this.loadStoredSession(), ...ngDevMode ? [{ debugName: "currentSession" }] : (
    /* istanbul ignore next */
    []
  ));
  isAuthenticated = computed(() => !!this.currentSession()?.adminKey, ...ngDevMode ? [{ debugName: "isAuthenticated" }] : (
    /* istanbul ignore next */
    []
  ));
  loadStoredSession() {
    try {
      const raw = sessionStorage.getItem(SESSION_STORAGE_KEY);
      return raw ? JSON.parse(raw) : null;
    } catch {
      return null;
    }
  }
  getAdminHeaders(customKey) {
    const key = customKey || this.currentSession()?.adminKey || "";
    return new HttpHeaders({
      "X-Admin-Key": key
    });
  }
  /**
   * Valida la clave administrativa contra el backend y guarda la sesión del operador
   */
  login(username, role, areaDefault, adminKey) {
    const headers = this.getAdminHeaders(adminKey.trim());
    return this.http.get(`${this.baseUrl}/rag/documentos`, { headers }).pipe(tap(() => {
      const session = {
        username: username.trim() || "Administrador CBB",
        role,
        areaDefault,
        adminKey: adminKey.trim(),
        loginTime: (/* @__PURE__ */ new Date()).toISOString()
      };
      sessionStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify(session));
      this.currentSession.set(session);
    }), map(() => true), catchError((err) => this.handleError(err)));
  }
  logout() {
    sessionStorage.removeItem(SESSION_STORAGE_KEY);
    this.currentSession.set(null);
  }
  /**
   * Obtiene el listado completo de documentos indexados y totales
   */
  listarDocumentos() {
    return this.http.get(`${this.baseUrl}/rag/documentos`, {
      headers: this.getAdminHeaders()
    }).pipe(catchError((err) => this.handleError(err)));
  }
  /**
   * Sube e indexa un nuevo documento en la base vectorial
   */
  indexarDocumento(params) {
    const formData = new FormData();
    formData.append("archivo", params.archivo);
    formData.append("documento_id", params.documentoId.trim());
    formData.append("fuente", params.fuente.trim());
    formData.append("area_origen", params.areaOrigen);
    formData.append("clasificacion_sensibilidad", params.clasificacionSensibilidad || "publico");
    return this.http.post(`${this.baseUrl}/indexar-documento`, formData, {
      headers: this.getAdminHeaders()
    }).pipe(catchError((err) => this.handleError(err)));
  }
  /**
   * Elimina un documento y todos sus fragmentos vectoriales de PostgreSQL
   */
  eliminarDocumento(documentoId) {
    return this.http.delete(`${this.baseUrl}/rag/documentos/${encodeURIComponent(documentoId)}`, {
      headers: this.getAdminHeaders()
    }).pipe(catchError((err) => this.handleError(err)));
  }
  handleError(error) {
    let errorMessage = "No se pudo conectar con el servidor de administraci\xF3n.";
    if (error.status === 401) {
      errorMessage = "Clave administrativa (X-Admin-Key) inv\xE1lida o no autorizada.";
    } else if (error.status === 413) {
      errorMessage = "El archivo supera el l\xEDmite m\xE1ximo permitido de 25 MB.";
    } else if (error.status === 415) {
      errorMessage = error.error?.detail || "Formato de archivo no soportado.";
    } else if (error.error?.detail) {
      errorMessage = error.error.detail;
    }
    return throwError(() => new Error(errorMessage));
  }
  static \u0275fac = function BackofficeService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BackofficeService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _BackofficeService, factory: _BackofficeService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BackofficeService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

export {
  BackofficeService
};
