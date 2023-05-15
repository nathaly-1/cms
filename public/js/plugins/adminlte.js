/*!
 * AdminLTE v3.2.0 (https://adminlte.io)
 * Derechos de autor 2014-2022 Colorlib <https://colorlib.com>
 * Con licencia del MIT (https://github.com/ColorlibHQ/AdminLTE/blob/master/LICENSE)
 */
(función (global, fábrica) {
    typeof export === 'objeto' && typeof module !== 'indefinido' ? fábrica (exportaciones, requieren ('jquery')) :
    typeof define === 'función' && define.amd ? define(['exportaciones', 'jquery'], fábrica) :
    (global = typeof globalThis !== 'indefinido' ? globalThis : global || self, factory(global.adminlte = {}, global.jQuery));
  })(esto, (función (exportaciones, $) { 'uso estricto';
  
    function _interopDefaultLegacy (e) { return e && typeof e === 'objeto' && 'predeterminado' en e ? e : { 'predeterminado': e }; }
  
    var $__predeterminado = /*#__PURE__*/_interopDefaultLegacy($);
  
    /**
     * --------------------------------------------
     * AdminLTE CardRefresh.js
     * Licencia MIT
     * --------------------------------------------
     */
    /**
     * Constantes
     * ================================================ ===
     */
  
    var NOMBRE$e = 'CardRefresh';
    var DATA_KEY$e = 'lte.cardrefresh';
    var EVENT_KEY$7 = "." + DATA_KEY$e;
    var JQUERY_NO_CONFLICT$e = $__default["default"].fn[NOMBRE$e];
    var EVENT_LOADED = "cargado" + EVENT_KEY$7;
    var EVENT_OVERLAY_ADDED = "overlay.agregado" + EVENT_KEY$7;
    var EVENT_OVERLAY_REMOVED = "overlay.removed" + EVENT_KEY$7;
    var CLASS_NAME_CARD$1 = 'tarjeta';
    var SELECTOR_CARD$1 = "." + NOMBRE_CLASE_TARJETA$1;
    var SELECTOR_DATA_REFRESH = '[widget-tarjeta-datos="actualizar-tarjeta"]';
    var Predeterminado$c = {
      fuente: '',
      selector de fuente: '',
      parámetros: {},
      desencadenar: SELECTOR_DATA_REFRESH,
      contenido: '.card-body',
      cargar en contenido: verdadero,
      loadOnInit: verdadero,
      loadErrorTemplate: verdadero,
      tipo de respuesta: '',
      plantilla superpuesta: '<div class="overlay"><i class="fas fa-2x fa-sync-alt fa-spin"></i></div>',
      errorTemplate: '<span class="text-danger"></span>',
      onLoadStart: función onLoadStart() {},
      onLoadDone: function onLoadDone(respuesta) {
        respuesta de retorno;
      },
      onLoadFail: función onLoadFail(_jqXHR, _textStatus, _errorThrown) {}
    };
  
    var CardRefresh = /*#__PURE__*/función () {
      function CardRefresh(elemento, configuración) {
        este._elemento = elemento;
        this._parent = elemento.parents(SELECTOR_CARD$1).first();
        this._settings = $__default["default"].extend({}, Default$c, settings);
        this._overlay = $__default["default"](this._settings.overlayTemplate);
  
        if (element.hasClass(CLASS_NAME_CARD$1)) {
          this._parent = elemento;
        }
  
        if (this._settings.source === '') {
          throw new Error('La URL de origen no se definió. Especifique una URL en su opción de fuente CardRefresh.');
        }
      }
  
      var _proto = CardRefresh.prototype;
  
      _proto.load = función cargar() {
        var _esto = esto;
  
        esto._addOverlay();
  
        this._settings.onLoadStart.call($__default["default"](this));
  
        $__default["predeterminado"].get(this._settings.source, this._settings.params, function (respuesta) {
          si (_this._settings.loadInContent) {
            if (_this._settings.sourceSelector !== '') {
              respuesta = $__predeterminado["predeterminado"](respuesta).find(_this._settings.sourceSelector).html();
            }
  
            _this._parent.find(_this._settings.content).html(respuesta);
          }
  
          _this._settings.onLoadDone.call($__default["default"](_this), respuesta);
  
          _this._removeOverlay();
        }, this._settings.responseType !== '' && this._settings.responseType).fail(function (jqXHR, textStatus, errorThrown) {
          _this._removeOverlay();
  
          si (_this._settings.loadErrorTemplate) {
            var msg = $__default["default"](_this._settings.errorTemplate).text(errorThrown);
  
            _this._parent.find(_this._settings.content).empty().append(msg);
          }
  
          _this._settings.onLoadFail.call($__default["default"](_this), jqXHR, textStatus, errorThrown);
        });
        $__default["default"](this._element).trigger($__default["default"].Event(EVENT_LOADED));
      };
  
      _proto._addOverlay = función _addOverlay() {
        this._parent.append(this._overlay);
  
        $__default["default"](this._element).trigger($__default["default"].Event(EVENT_OVERLAY_ADDED));
      };
  
      _proto._removeOverlay = función _removeOverlay() {
        this._parent.find(this._overlay).remove();
  
        $__default["default"](this._element).trigger($__default["default"].Event(EVENT_OVERLAY_REMOVED));
      } // Privado
      ;
  
      _proto._init = función _init() {
        var _esto2 = esto;
  
        $__default["default"](this).find(this._settings.trigger).on('click', function () {
          _this2.load();
        });
  
        si (this._settings.loadOnInit) {
          esto.load();
        }
      } // Estática
      ;
  
      CardRefresh._jQueryInterface = función _jQueryInterface(config) {
        var data = $__default["default"](this).data(DATA_KEY$e);
  
        var _options = $__default["default"].extend({}, Default$c, $__default["default"](this).data());
  
        si (!datos) {
          data = new CardRefresh($__default["default"](this), _options);
          $__default["default"](this).data(DATA_KEY$e, typeof config === 'string' ? data : config);
        }
  
        if (tipo de configuración === 'cadena' && /load/.test(config)) {
          datos[config]();
        } demás {
          datos._init($__predeterminado["predeterminado"](esto));
        }
      };
  
      devolver CardRefresh;
    }();
    /**
     * API de datos
     * ================================================ ===
     */
  
  
    $__default["predeterminado"](documento).on('clic', SELECTOR_DATA_REFRESH, función (evento) {
      si (evento) {
        event.preventDefault();
      }
  
      CardRefresh._jQueryInterface.call($__default["default"](this), 'load');
    });
    $__predeterminado["predeterminado"](función () {
      $__predeterminado["predeterminado"](SELECTOR_DATA_REFRESH).each(función () {
        CardRefresh._jQueryInterface.call($__default["default"](this));
      });
    });
    /**
     * API de jQuery
     * ================================================ ===
     */
  
    $__default["default"].fn[NOMBRE$e] = CardRefresh._jQueryInterface;
    $__default["default"].fn[NOMBRE$e].Constructor = CardRefresh;
  
    $__predeterminado["predeterminado"].fn[NOMBRE$e].noConflict = función () {
      $__default["default"].fn[NOMBRE$e] = JQUERY_NO_CONFLICT$e;
      devolver CardRefresh._jQueryInterface;
    };
  
    /**
     * --------------------------------------------
     * AdminLTE CardWidget.js
     * Licencia MIT
     * --------------------------------------------
     */
    /**
     * Constantes
     * ================================================ ===
     */
  
    var NOMBRE$d = 'TarjetaWidget';
    var DATA_KEY$d = 'lte.widget de tarjeta';
    var EVENT_KEY$6 = "." + DATA_KEY$d;
    var JQUERY_NO_CONFLICT$d = $__default["default"].fn[NOMBRE$d];
    var EVENT_EXPANDED$3 = "expandido" + EVENT_KEY$6;
    var EVENT_COLLAPSED$4 = "contraído" + EVENT_KEY$6;
    var EVENT_MAXIMIZED = "maximizado" + EVENT_KEY$6;
    var EVENT_MINIMIZED = "minimizado" + EVENT_KEY$6;
    var EVENT_REMOVED$1 = "eliminado" + EVENT_KEY$6;
    var CLASS_NAME_CARD = 'tarjeta';
    var CLASS_NAME_COLLAPSED$1 = 'tarjeta colapsada';
    var CLASS_NAME_COLLAPSING = 'tarjeta colapsada';
    var CLASS_NAME_EXPANDING = 'tarjeta-expandible';
    var CLASS_NAME_WAS_COLLAPSED = 'fue colapsado';
    var CLASS_NAME_MAXIMIZED = 'tarjeta-maximizada';
    var SELECTOR_DATA_REMOVE = '[widget-tarjeta-datos="eliminar"]';
    var SELECTOR_DATA_COLLAPSE = '[widget-tarjeta-datos="contraer"]';
    var SELECTOR_DATA_MAXIMIZE = '[widget-tarjeta-datos="maximizar"]';
    var SELECTOR_CARD = "." + NOMBRE_CLASE_TARJETA;
    var SELECTOR_CARD_HEADER = '.card-header';
    var SELECTOR_CARD_BODY = '.cuerpo-de-tarjeta';
    var SELECTOR_CARD_FOOTER = '.card-footer';
    var Predeterminado$b = {
      velocidad de animación: 'normal',
      Disparador de colapso: SELECTOR_DATA_COLLAPSE,
      removeTrigger: SELECTOR_DATA_REMOVE,
      maximizar Trigger: SELECTOR_DATA_MAXIMIZE,
      colapsoIcono: 'fa-menos',
      expandIcon: 'fa-más',
      maximizarIcono: 'fa-expandir',
      minimizarIcono: 'fa-comprimir'
    };
  
    var CardWidget = /*#__PURE__*/función () {
      function CardWidget(elemento, configuración) {
        este._elemento = elemento;
        this._parent = elemento.parents(SELECTOR_CARD).first();
  
        if (elemento.hasClass(NOMBRE_CLASE_TARJETA)) {
          this._parent = elemento;
        }
  
        this._settings = $__default["default"].extend({}, Default$b, settings);
      }
  
      var _proto = CardWidget.prototipo;
  
      _proto.collapse = función colapsar() {
        var _esto = esto;
  
        this._parent.addClass(CLASS_NAME_COLLAPSING).child(SELECTOR_CARD_BODY + ", " + SELECTOR_CARD_FOOTER).slideUp(this._settings.animationSpeed, function () {
          _this._parent.addClass(CLASS_NAME_COLLAPSED$1).removeClass(CLASS_NAME_COLLAPSING);
        });
  
        this._parent.find("> " + SELECTOR_CARD_HEADER + " " + this._settings.collapseTrigger + " ." + this._settings.collapseIcon).addClass(this._settings.expandIcon).removeClass(this._settings.collapseIcon);
  
        this._element.trigger($__default["default"].Event(EVENT_COLLAPSED$4), this._parent);
      };
  
      _proto.expand = función expandir() {
        var _esto2 = esto;
  
        this._parent.addClass(CLASS_NAME_EXPANDING).child(SELECTOR_CARD_BODY + ", " + SELECTOR_CARD_FOOTER).slideDown(this._settings.animationSpeed, function () {
          _this2._parent.removeClass(CLASS_NAME_COLLAPSED$1).removeClass(CLASS_NAME_EXPANDING);
        });
  
        this._parent.find("> " + SELECTOR_CARD_HEADER + " " + this._settings.collapseTrigger + " ." + this._settings.expandIcon).addClass(this._settings.collapseIcon).removeClass(this._settings.expandIcon);
  
        this._element.trigger($__default["default"].Event(EVENT_EXPANDED$3), this._parent);
      };
  
      _proto.remove = función remove() {
        this._parent.slideUp();
  
        this._element.trigger($__default["default"].Event(EVENT_REMOVED$1), this._parent);
      };
  
      _proto.alternar = función alternar() {
        if (this._parent.hasClass(CLASS_NAME_COLLAPSED$1)) {
          esto.expandir();
          devolver;
        }
  
        esto.collapse();
      };
  
      _proto.maximizar = función maximizar() {
        this._parent.find(this._settings.maximizeTrigger + " ." + this._settings.maximizeIcon).addClass(this._settings.minimizeIcon).removeClass(this._settings.maximizeIcon);
  
        esto._padre.css({
          altura: this._parent.height(),
          ancho: this._parent.width(),
          transición: 'todos .15s'
        }).retraso(150).cola(función() {
          var $elemento = $__predeterminado["predeterminado"](esto);
          $elemento.addClass(CLASS_NAME_MAXIMIZED);
          $__default["default"]('html').addClass(CLASS_NAME_MAXIMIZED);
  
          si ($elemento.hasClass(CLASS_NAME_COLLAPSED$1)) {
            $element.addClass(CLASS_NAME_WAS_COLLAPSED);
          }
  
          $elemento.dequeue();
        });
  
        this._element.trigger($__default["default"].Event(EVENT_MAXIMIZED), this._parent);
      };
  
      _proto.minimize = function minimizar() {
        this._parent.find(this._settings.maximizeTrigger + " ." + this._settings.minimizeIcon).addClass(this._settings.maximizeIcon).removeClass(this._settings.minimizeIcon);
  
        this._parent.css('cssText', "height: " + this._parent[0].style.height + " !important; ancho: " + this._parent[0].style.width + " !important; transición : todos .15s;").delay(10).queue(función () {
          var $elemento = $__predeterminado["predeterminado"](esto);
          $elemento.removeClass(CLASS_NAME_MAXIMIZED);
          $__default["default"]('html').removeClass(CLASS_NAME_MAXIMIZED);
          $elemento.css({
            altura: 'heredar',
            ancho: 'heredar'
          });
  
          si ($elemento.hasClass(CLASS_NAME_WAS_COLLAPSED)) {
            $element.removeClass(CLASS_NAME_WAS_COLLAPSED);
          }
  
          $elemento.dequeue();
        });
  
        this._element.trigger($__default["default"].Event(EVENT_MINIMIZED), this._parent);
      };
  
      _proto.toggleMaximize = función alternarMaximize() {
        if (this._parent.hasClass(CLASS_NAME_MAXIMIZED)) {
          esto.minimizar();
          devolver;
        }
  
        esto.maximizar();
      } // Privado
      ;
  
      _proto._init = función _init(tarjeta) {
        var _this3 = esto;
  
        this._parent = tarjeta;
        $__default["default"](this).find(this._settings.collapseTrigger).click(function () {
          _this3.toggle();
        });
        $__default["default"](this).find(this._settings.maximizeTrigger).click(function () {
          _this3.toggleMaximizar();
        });
        $__default["default"](this).find(this._settings.removeTrigger).click(function () {
          _this3.remove();
        });
      } // Estática
      ;
  
      CardWidget._jQueryInterface = función _jQueryInterface(config) {
        var data = $__default["default"](this).data(DATA_KEY$d);
  
        var _options = $__default["default"].extend({}, Default$b, $__default["default"](this).data());
  
        si (!datos) {
          data = new CardWidget($__default["default"](this), _options);
          $__default["default"](this).data(DATA_KEY$d, typeof config === 'string' ? data : config);
        }
  
        if (typeof config === 'string' && /collapse|expand|remove|toggle|maximize|minimize|toggleMaximize/.test(config)) {
          datos[config]();
        } else if (tipo de configuración === 'objeto') {
          datos._init($__predeterminado["predeterminado"](esto));
        }
      };
  
      devolver CardWidget;
    }();
    /**
     * API de datos
     * ================================================ ===
     */
  
  
    $__default["predeterminado"](documento).on('clic', SELECTOR_DATA_COLLAPSE, función (evento) {
      si (evento) {
        event.preventDefault();
      }
  
      CardWidget._jQueryInterface.call($__default["default"](this), 'toggle');
    });
    $__default["predeterminado"](documento).on('clic', SELECTOR_DATA_REMOVE, función (evento) {
      si (evento) {
        event.preventDefault();
      }
  
      CardWidget._jQueryInterface.call($__default["default"](this), 'remove');
    });
    $__default["predeterminado"](documento).on('clic', SELECTOR_DATA_MAXIMIZE, función (evento) {
      si (evento) {
        event.preventDefault();
      }
  
      CardWidget._jQueryInterface.call($__default["default"](this), 'toggleMaximize');
    });
    /**
     * API de jQuery
     * ================================================ ===
     */
  
    $__default["predeterminado"].fn[NOMBRE$d] = CardWidget._jQueryInterface;
    $__default["default"].fn[NOMBRE$d].Constructor = CardWidget;
  
    $__predeterminado["predeterminado"].fn[NOMBRE$d].noConflict = función () {
      $__default["default"].fn[NOMBRE$d] = JQUERY_NO_CONFLICT$d;
      devolver CardWidget._jQueryInterface;
    };
  
    /**
     * --------------------------------------------
     * AdminLTE ControlSidebar.js
     * Licencia MIT
     * --------------------------------------------
     */
    /**
     * Constantes
     * ================================================ ===
     */
  
    var NOMBRE$c = 'ControlSidebar';
    var DATA_KEY$c = 'lte.controlsidebar';
    var EVENT_KEY$5 = "." + DATA_KEY$c;
    var JQUERY_NO_CONFLICT$c = $__default["default"].fn[NOMBRE$c];
    var EVENT_COLLAPSED$3 = "contraído" + EVENT_KEY$5;
    var EVENT_COLLAPSED_DONE$1 = "contraído-hecho" + EVENT_KEY$5;
    var EVENT_EXPANDED$2 = "expandido" + EVENT_KEY$5;
    var SELECTOR_CONTROL_SIDEBAR = '.control-barra lateral';
    var SELECTOR_CONTROL_SIDEBAR_CONTENT$1 = '.control-sidebar-content';
    var SELECTOR_DATA_TOGGLE$4 = '[widget de datos="barra lateral de control"]';
    var SELECTOR_HEADER$1 = '.main-header';
    var SELECTOR_FOOTER$1 = '.pie de página principal';
    var CLASS_NAME_CONTROL_SIDEBAR_ANIMATE = 'control-barra-lateral-animar';
    var CLASS_NAME_CONTROL_SIDEBAR_OPEN$1 = 'control-sidebar-open';
    var CLASS_NAME_CONTROL_SIDEBAR_SLIDE = 'control-sidebar-slide-open';
    var CLASS_NAME_LAYOUT_FIXED$1 = 'diseño fijo';
    var CLASS_NAME_NAVBAR_FIXED = 'layout-navbar-fixed';
    var CLASS_NAME_NAVBAR_SM_FIXED = 'layout-sm-navbar-fixed';
    var CLASS_NAME_NAVBAR_MD_FIXED = 'layout-md-navbar-fixed';
    var CLASS_NAME_NAVBAR_LG_FIXED = 'layout-lg-navbar-fixed';
    var CLASS_NAME_NAVBAR_XL_FIXED = 'layout-xl-navbar-fixed';
    var CLASS_NAME_FOOTER_FIXED = 'layout-footer-fixed';
    var CLASS_NAME_FOOTER_SM_FIXED = 'layout-sm-footer-fixed';
    var CLASS_NAME_FOOTER_MD_FIXED = 'layout-md-footer-fixed';
    var CLASS_NAME_FOOTER_LG_FIXED = 'layout-lg-footer-fixed';
    var CLASS_NAME_FOOTER_XL_FIXED = 'layout-xl-footer-fixed';
    var Predeterminado$a = {
      controlsidebarSlide: verdadero,
      scrollbarTheme: 'os-tema-luz',
      barra de desplazamientoAutoOcultar: 'l',
      objetivo: SELECTOR_CONTROL_SIDEBAR,
      velocidad de animación: 300
    };
    /**
     * Definición de clase
     * ================================================ ===
     */
  
    var ControlSidebar = /*#__PURE__*/función () {
      función ControlSidebar(elemento, configuración) {
        este._elemento = elemento;
        esto._config = config;
      } // Público
  
  
      var _proto = ControlSidebar.prototype;
  
      _proto.collapse = función colapsar() {
        var _esto = esto;
  
        var $cuerpo = $__predeterminado["predeterminado"]('cuerpo');
        var $html = $__predeterminado["predeterminado"]('html'); // Mostrar la barra lateral de control
  
        si (esto._config.controlsidebarSlide) {
          $html.addClass(CLASS_NAME_CONTROL_SIDEBAR_ANIMATE);
          $body.removeClass(CLASS_NAME_CONTROL_SIDEBAR_SLIDE).delay(300).queue(función () {
            $__default["default"](SELECTOR_CONTROL_SIDEBAR).hide();
            $html.removeClass(CLASS_NAME_CONTROL_SIDEBAR_ANIMATE);
            $__predeterminado["predeterminado"](esto).dequeue();
          });
        } demás {
          $cuerpo.removeClass(CLASS_NAME_CONTROL_SIDEBAR_OPEN$1);
        }
  
        $__default["default"](this._element).trigger($__default["default"].Event(EVENT_COLLAPSED$3));
        establecerTiempo de espera (función () {
          $__default["default"](_this._element).trigger($__default["default"].Event(EVENT_COLLAPSED_DONE$1));
        }, this._config.animationSpeed);
      };
  
      _proto.show = función mostrar(alternar) {
        si (alternar === vacío 0) {
          alternar = falso;
        }
  
        var $cuerpo = $__predeterminado["predeterminado"]('cuerpo');
        var $html = $__predeterminado["predeterminado"]('html');
  
        si (alternar) {
          $__default["default"](SELECTOR_CONTROL_SIDEBAR).hide();
        } // Contraer la barra lateral de control
  
  
        si (esto._config.controlsidebarSlide) {
          $html.addClass(CLASS_NAME_CONTROL_SIDEBAR_ANIMATE);
          $__default["default"](this._config.target).show().delay(10).queue(function() {
            $body.addClass(CLASS_NAME_CONTROL_SIDEBAR_SLIDE).delay(300).queue(función () {
              $html.removeClass(CLASS_NAME_CONTROL_SIDEBAR_ANIMATE);
              $__predeterminado["predeterminado"](esto).dequeue();
            });
            $__predeterminado["predeterminado"](esto).dequeue();
          });
        } demás {
          $cuerpo.addClass(CLASS_NAME_CONTROL_SIDEBAR_OPEN$1);
        }
  
        this._fixHeight();
  
        this._fixScrollHeight();
  
        $__default["default"](this._element).trigger($__default["default"].Event(EVENT_EXPANDED$2));
      };
  
      _proto.alternar = función alternar() {
        var $cuerpo = $__predeterminado["predeterminado"]('cuerpo');
        var objetivo = this._config.target;
        var notVisible = !$__default["default"](target).is(':visible');
        var shouldClose = $body.hasClass(CLASS_NAME_CONTROL_SIDEBAR_OPEN$1) || $cuerpo.hasClass(CLASS_NAME_CONTROL_SIDEBAR_SLIDE);
        var shouldToggle = notVisible && ($body.hasClass(CLASS_NAME_CONTROL_SIDEBAR_OPEN$1) || $body.hasClass(CLASS_NAME_CONTROL_SIDEBAR_SLIDE));
  
        if (noVisible || deberíaToggle) {
          // Abre la barra lateral de control
          this.show(notVisible);
        } más si (debería cerrar) {
          // Cerrar la barra lateral de control
          esto.collapse();
        }
      } // Privado
      ;
  
      _proto._init = función _init() {
        var _esto2 = esto;
  
        var $cuerpo = $__predeterminado["predeterminado"]('cuerpo');
        var shouldNotHideAll = $body.hasClass(CLASS_NAME_CONTROL_SIDEBAR_OPEN$1) || $cuerpo.hasClass(CLASS_NAME_CONTROL_SIDEBAR_SLIDE);
  
        si (no debe ocultar todo) {
          $__default["default"](SELECTOR_CONTROL_SIDEBAR).not(this._config.target).hide();
          $__default["default"](this._config.target).css('display', 'block');
        } demás {
          $__default["default"](SELECTOR_CONTROL_SIDEBAR).hide();
        }
  
        this._fixHeight();
  
        this._fixScrollHeight();
  
        $__predeterminado["predeterminado"](ventana).redimensionar(función () {
          _this2._fixHeight();
  
          _this2._fixScrollHeight();
        });
        $__predeterminado["predeterminado"](ventana).scroll(función () {
          var $cuerpo = $__predeterminado["predeterminado"]('cuerpo');
          var shouldFixHeight = $body.hasClass(CLASS_NAME_CONTROL_SIDEBAR_OPEN$1) || $cuerpo.hasClass(CLASS_NAME_CONTROL_SIDEBAR_SLIDE);
  
          si (deberíaFixHeight) {
            _this2._fixScrollHeight();
          }
        });
      };
  
      _proto._isNavbarFixed = función _isNavbarFixed() {
        var $cuerpo = $__predeterminado["predeterminado"]('cuerpo');
        devuelve $body.hasClass(CLASS_NAME_NAVBAR_FIXED) || $cuerpo.hasClass(CLASS_NAME_NAVBAR_SM_FIXED) || $cuerpo.hasClass(CLASS_NAME_NAVBAR_MD_FIXED) || $cuerpo.hasClass(CLASS_NAME_NAVBAR_LG_FIXED) || $cuerpo.hasClass(CLASS_NAME_NAVBAR_XL_FIXED);
      };
  
      _proto._isFooterFixed = función _isFooterFixed() {
        var $cuerpo = $__predeterminado["predeterminado"]('cuerpo');
        devuelve $body.hasClass(CLASS_NAME_FOOTER_FIXED) || $cuerpo.hasClass(CLASS_NAME_FOOTER_SM_FIXED) || $cuerpo.hasClass(CLASS_NAME_FOOTER_MD_FIXED) || $cuerpo.hasClass(CLASS_NAME_FOOTER_LG_FIXED) || $body.hasClass(CLASS_NAME_FOOTER_XL_FIXED);
      };
  
      _proto._fixScrollHeight = función _fixScrollHeight() {
        var $cuerpo = $__predeterminado["predeterminado"]('cuerpo');
        var $controlSidebar = $__default["default"](this._config.target);
  
        if (!$body.hasClass(CLASS_NAME_LAYOUT_FIXED$1)) {
          devolver;
        }
  
        var alturas = {
          desplazamiento: $__predeterminado["predeterminado"](documento).altura(),
          ventana: $__predeterminado["predeterminado"](ventana).altura(),
          encabezado: $__predeterminado["predeterminado"](SELECTOR_HEADER$1).outerHeight(),
          pie de página: $__predeterminado["predeterminado"](SELECTOR_FOOTER$1).outerHeight()
        };
        var posiciones = {
          abajo: Math.abs(heights.window + $__default["default"](window).scrollTop() - heights.scroll),
          arriba: $__predeterminado["predeterminado"](ventana).scrollTop()
        };
        var navbarFixed = this._isNavbarFixed() && $__default["default"](SELECTOR_HEADER$1).css('position') === 'fixed';
        var footerFixed = this._isFooterFixed() && $__default["default"](SELECTOR_FOOTER$1).css('position') === 'fixed';
        var $controlsidebarContent = $__default["default"](this._config.target + ", " + this._config.target + " " + SELECTOR_CONTROL_SIDEBAR_CONTENT$1);
  
        if (posiciones.arriba === 0 && posiciones.abajo === 0) {
          $controlSidebar.css({
            abajo: alturas.pie de página,
            arriba: alturas.encabezado
          });
          $controlsidebarContent.css('altura', alturas.ventana - (alturas.encabezado + alturas.pie de página));
        } else if (posiciones.fondo <= alturas.pie de página) {
          if (pie de página fijo === falso) {
            var top = alturas.header - posiciones.top;
            $controlSidebar.css('inferior', alturas.pie de página - posiciones.inferior).css('superior', superior >= 0 ? superior : 0);
            $controlsidebarContent.css('altura', alturas.ventana - (alturas.pie de página - posiciones.parte inferior));
          } demás {
            $controlSidebar.css('abajo', alturas.pie de página);
          }
        } else if (posiciones.superior <= alturas.encabezado) {
          if (navbarFixed === false) {
            $controlSidebar.css('top', heights.header - posiciones.top);
            $controlsidebarContent.css('altura', alturas.ventana - (alturas.encabezado - posiciones.superior));
          } demás {
            $controlSidebar.css('superior', alturas.encabezado);
          }
        } más si (navbarFixed === false) {
          $controlSidebar.css('superior', 0);
          $controlsidebarContent.css('altura', alturas.ventana);
        } demás {
          $controlSidebar.css('superior', alturas.encabezado);
        }
  
        if (footerFixed && navbarFixed) {
          $controlsidebarContent.css('altura', '100%');
          $controlSidebar.css('altura', '');
        } else if (pie de página arreglado || barra de navegación arreglada) {
          $controlsidebarContent.css('altura', '100%');
          $controlsidebarContent.css('altura', '');
        }
      };
  
      _proto._fixHeight = función _fixHeight() {
        var $cuerpo = $__predeterminado["predeterminado"]('cuerpo');
        var $controlSidebar = $__default["default"](this._config.target + " " + SELECTOR_CONTROL_SIDEBAR_CONTENT$1);
  
        if (!$body.hasClass(CLASS_NAME_LAYOUT_FIXED$1)) {
          $controlSidebar.attr('estilo', '');
          devolver;
        }
  
        var alturas = {
          ventana: $__predeterminado["predeterminado"](ventana).altura(),
          encabezado: $__predeterminado["predeterminado"](SELECTOR_HEADER$1).outerHeight(),
          pie de página: $__predeterminado["predeterminado"](SELECTOR_FOOTER$1).outerHeight()
        };
        var sidebarHeight = alturas.ventana - alturas.encabezado;
  
        if (this._isFooterFixed() && $__default["default"](SELECTOR_FOOTER$1).css('posición') === 'fijo') {
          sidebarHeight = alturas.ventana - alturas.encabezado - alturas.pie de página;
        }
  
        $controlSidebar.css('altura', alturabarralateral);
  
        if (tipo de $__predeterminado["predeterminado"].fn.overlayScrollbars !== 'indefinido') {
          $controlSidebar.overlayScrollbars({
            nombre de clase: this._config.scrollbarTheme,
            tamañoAutoCapable: verdadero,
            barras de desplazamiento: {
              autoHide: this._config.scrollbarAutoHide,
              desplazamiento de clic: verdadero
            }
          });
        }
      } // Estática
      ;
  
      ControlSidebar._jQueryInterface = función _jQueryInterface(operación) {
        devuelve esto. cada uno (función () {
          var data = $__default["default"](this).data(DATA_KEY$c);
  
          var _options = $__default["default"].extend({}, Default$a, $__default["default"](this).data());
  
          si (!datos) {
            data = new ControlSidebar(this, _options);
            $__predeterminado["predeterminado"](esto).datos(DATA_KEY$c, datos);
          }
  
          if (datos[operación] === 'indefinido') {
            lanzar un nuevo error (operación + "no es una función");
          }
  
          datos[operación]();
        });
      };
  
      volver Barra lateral de control;
    }();
    /**
     *
     * Implementación de API de datos
     * ================================================ ===
     */
  
  
    $__default["predeterminado"](documento).on('clic', SELECTOR_DATA_TOGGLE$4, función (evento) {
      event.preventDefault();
  
      ControlSidebar._jQueryInterface.call($__default["default"](this), 'toggle');
    });
    $__predeterminado["predeterminado"](documento).listo(función () {
      ControlSidebar._jQueryInterface.call($__default["default"](SELECTOR_DATA_TOGGLE$4), '_init');
    });
    /**
     * API de jQuery
     * ================================================ ===
     */
  
    $__default["predeterminado"].fn[NOMBRE$c] = ControlSidebar._jQueryInterface;
    $__default["default"].fn[NOMBRE$c].Constructor = ControlSidebar;
  
    $__predeterminado["predeterminado"].fn[NOMBRE$c].noConflict = función () {
      $__predeterminado["predeterminado"].fn[NOMBRE$c] = JQUERY_NO_CONFLICT$c;
      devolver ControlSidebar._jQueryInterface;
    };
  
    /**
     * --------------------------------------------
     * AdminLTE DirectChat.js
     * Licencia MIT
     * --------------------------------------------
     */
    /**
     * Constantes
     * ================================================ ===
     */
  
    var NOMBRE$b = 'DirectChat';
    var DATA_KEY$b = 'lte.directchat';
    var EVENT_KEY$4 = "." + DATA_KEY$b;
    var JQUERY_NO_CONFLICT$b = $__default["default"].fn[NOMBRE$b];
    var EVENT_TOGGLED = "alternar" + EVENT_KEY$4;
    var SELECTOR_DATA_TOGGLE$3 = '[widget de datos="chat-pane-toggle"]';
    var SELECTOR_DIRECT_CHAT = '.direct-chat';
    var CLASS_NAME_DIRECT_CHAT_OPEN = 'direct-chat-contacts-open';
    /**
     * Definición de clase
     * ================================================ ===
     */
  
    var DirectChat = /*#__PURE__*/función () {
      función DirectChat (elemento) {
        este._elemento = elemento;
      }
  
      var _proto = DirectChat.prototipo;
  
      _proto.alternar = función alternar() {
        $__default["default"](this._element).parents(SELECTOR_DIRECT_CHAT).first().toggleClass(CLASS_NAME_DIRECT_CHAT_OPEN);
        $__default["default"](this._element).trigger($__default["default"].Event(EVENT_TOGGLED));
      } // Estática
      ;
  
      DirectChat._jQueryInterface = función _jQueryInterface(config) {
        devuelve esto. cada uno (función () {
          var data = $__default["default"](this).data(DATA_KEY$b);
  
          si (!datos) {
            data = new DirectChat($__default["default"](this));
            $__predeterminado["predeterminado"](esto).datos(DATA_KEY$b, datos);
          }
  
          datos[config]();
        });
      };
  
      devolver DirectChat;
    }();
    /**
     *
     * Implementación de API de datos
     * ================================================ ===
     */
  
  
    $__default["predeterminado"](documento).on('clic', SELECTOR_DATA_TOGGLE$3, función (evento) {
      si (evento) {
        event.preventDefault();
      }
  
      DirectChat._jQueryInterface.call($__default["default"](this), 'toggle');
    });
    /**
     * API de jQuery
     * ================================================ ===
     */
  
    $__default["predeterminado"].fn[NOMBRE$b] = DirectChat._jQueryInterface;
    $__predeterminado["predeterminado"].fn[NOMBRE$b].Constructor = DirectChat;
  
    $__predeterminado["predeterminado"].fn[NOMBRE$b].noConflict = función () {
      $__predeterminado["predeterminado"].fn[NOMBRE$b] = JQUERY_NO_CONFLICT$b;
      devolver DirectChat._jQueryInterface;
    };
  
    /**
     * --------------------------------------------
     * AdminLTE Dropdown.js
     * Licencia MIT
     * --------------------------------------------
     */
    /**
     * Constantes
     * ================================================ ===
     */
  
    var NOMBRE$a = 'Desplegable';
    var DATA_KEY$a = 'lte.desplegable';
    var JQUERY_NO_CONFLICT$a = $__default["default"].fn[NOMBRE$a];
    var SELECTOR_NAVBAR = '.barra de navegación';
    var SELECTOR_DROPDOWN_MENU = '.menú desplegable';
    var SELECTOR_DROPDOWN_MENU_ACTIVE = '.menú desplegable.mostrar';
    var SELECTOR_DROPDOWN_TOGGLE = '[toggle de datos="desplegable"]';
    var CLASS_NAME_DROPDOWN_RIGHT = 'menú-desplegable-derecha';
    var CLASS_NAME_DROPDOWN_SUBMENU = 'submenú desplegable'; // TODO: esto no se usa; debe eliminarse junto con la extensión?
  
    var Predeterminado$9 = {};
    /**
     * Definición de clase
     * ================================================ ===
     */
  
    var menú desplegable = /*#__PURE__*/función () {
      Función desplegable (elemento, configuración) {
        esto._config = config;
        este._elemento = elemento;
      } // Público
  
  
      var _proto = Dropdown.prototipo;
  
      _proto.toggleSubmenu = función alternarSubmenu() {
        this._element.siblings().show().toggleClass('show');
  
        if (!this._element.next().hasClass('mostrar')) {
          this._element.parents(SELECTOR_DROPDOWN_MENU).first().find('.show').removeClass('show').hide();
        }
  
        this._element.parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', función () {
          $__default["default"]('.dropdown-submenu .show').removeClass('show').hide();
        });
      };
  
      _proto.fixPosition = función fixPosition() {
        var $elemento = $__predeterminado["predeterminado"](SELECTOR_DROPDOWN_MENU_ACTIVE);
  
        if ($elemento.longitud === 0) {
          devolver;
        }
  
        si ($element.hasClass(CLASS_NAME_DROPDOWN_RIGHT)) {
          $elemento.css({
            izquierda: 'heredar',
            derecha: 0
          });
        } demás {
          $elemento.css({
            izquierda: 0,
            derecha: 'heredar'
          });
        }
  
        var desplazamiento = $elemento.desplazamiento();
        var ancho = $elemento.ancho();
        var visiblePart = $__default["default"](window).width() - offset.left;
  
        if (desplazamiento.izquierda < 0) {
          $elemento.css({
            izquierda: 'heredar',
            derecha: desplazamiento.izquierda - 5
          });
        } else if (partevisible < ancho) {
          $elemento.css({
            izquierda: 'heredar',
            derecha: 0
          });
        }
      } // Estática
      ;
  
      Dropdown._jQueryInterface = función _jQueryInterface(config) {
        devuelve esto. cada uno (función () {
          var data = $__default["default"](this).data(DATA_KEY$a);
  
          var _config = $__default["default"].extend({}, Default$9, $__default["default"](this).data());
  
          si (!datos) {
            data = new Dropdown($__default["default"](this), _config);
            $__predeterminado["predeterminado"](esto).datos(DATA_KEY$a, datos);
          }
  
          if (config === 'toggleSubmenu' || config === 'fixPosition') {
            datos[config]();
          }
        });
      };
  
      menú desplegable de retorno;
    }();
    /**
     * API de datos
     * ================================================ ===
     */
  
  
    $__default["predeterminado"](SELECTOR_DROPDOWN_MENU + " " + SELECTOR_DROPDOWN_TOGGLE).on('clic', función (evento) {
      event.preventDefault();
      event.stopPropagation();
  
      Dropdown._jQueryInterface.call($__default["default"](this), 'toggleSubmenu');
    });
    $__default["predeterminado"](SELECTOR_NAVBAR + " " + SELECTOR_DROPDOWN_TOGGLE).on('clic', función (evento) {
      event.preventDefault();
  
      if ($__default["default"](evento.objetivo).parent().hasClass(CLASS_NAME_DROPDOWN_SUBMENU)) {
        devolver;
      }
  
      establecerTiempo de espera (función () {
        Dropdown._jQueryInterface.call($__default["default"](this), 'fixPosition');
      }, 1);
    });
    /**
     * API de jQuery
     * ================================================ ===
     */
  
    $__default["default"].fn[NOMBRE$a] = Dropdown._jQueryInterface;
    $__default["default"].fn[NOMBRE$a].Constructor = Menú desplegable;
  
    $__predeterminado["predeterminado"].fn[NOMBRE$a].noConflict = función () {
      $__predeterminado["predeterminado"].fn[NOMBRE$a] = JQUERY_NO_CONFLICT$a;
      devolver Dropdown._jQueryInterface;
    };
  
    /**
     * --------------------------------------------
     * AdminLTE ExpandableTable.js
     * Licencia MIT
     * --------------------------------------------
     */
    /**
      * Constantes
      * ================================================ ===
      */
  
    var NOMBRE$9 = 'TablaExpandible';
    var DATA_KEY$9 = 'lte.expandableTable';
    var EVENT_KEY$3 = "." + DATA_KEY$9;
    var JQUERY_NO_CONFLICT$9 = $__predeterminado["predeterminado"].fn[NOMBRE$9];
    var EVENT_EXPANDED$1 = "expandido" + EVENT_KEY$3;
    var EVENT_COLLAPSED$2 = "contraído" + EVENT_KEY$3;
    var SELECTOR_TABLE = '.tabla-ampliable';
    var SELECTOR_EXPANDABLE_BODY = '.cuerpo-expandible';
    var SELECTOR_DATA_TOGGLE$2 = '[widget-de-datos="tabla-ampliable"]';
    var SELECTOR_ARIA_ATTR = 'aria-expandida';
    /**
      * Definición de clase
      * ================================================ ===
      */
  
    var TablaExpandible = /*#__PURE__*/función () {
      function ExpandableTable(elemento, opciones) {
        this._opciones = opciones;
        este._elemento = elemento;
      } // Público
  
  
      var _proto = TablaExpandible.prototipo;
  
      _proto.init = función init() {
        $__predeterminado["predeterminado"](SELECTOR_DATA_TOGGLE$2).each(función (_, $encabezado) {
          var $tipo = $__predeterminado["predeterminado"]($encabezado).attr(SELECTOR_ARIA_ATTR);
          var $cuerpo = $__predeterminado["predeterminado"]($encabezado).siguiente(SELECTOR_EXPANDABLE_BODY).niños().primero().niños();
  
          if ($tipo === 'verdadero') {
            $cuerpo.mostrar();
          } else if ($tipo === 'falso') {
            $cuerpo.hide();
            $cuerpo.parent().parent().addClass('d-none');
          }
        });
      };
  
      _proto.toggleRow = function alternarFila() {
        var $elemento = this._element;
  
        if ($elemento[0].NombreNodo !== 'TR') {
          $elemento = $elemento.padre();
  
          if ($elemento[0].NombreNodo !== 'TR') {
            $elemento = $elemento.padre();
          }
        }
  
        var tiempo = 500;
        var $tipo = $elemento.attr(SELECTOR_ARIA_ATTR);
        var $cuerpo = $elemento.siguiente(SELECTOR_EXPANDABLE_BODY).niños().primero().niños();
        $cuerpo.stop();
  
        if ($tipo === 'verdadero') {
          $cuerpo.slideUp(tiempo, función () {
            $element.next(SELECTOR_EXPANDABLE_BODY).addClass('d-none');
          });
          $elemento.attr(SELECTOR_ARIA_ATTR, 'falso');
          $element.trigger($__default["default"].Event(EVENT_COLLAPSED$2));
        } else if ($tipo === 'falso') {
          $element.next(SELECTOR_EXPANDABLE_BODY).removeClass('d-none');
          $cuerpo.slideDown(tiempo);
          $elemento.attr(SELECTOR_ARIA_ATTR, 'verdadero');
          $element.trigger($__default["default"].Event(EVENT_EXPANDED$1));
        }
      } // Estática
      ;
  
      TablaExpandible._jQueryInterface = función _jQueryInterface(operación) {
        devuelve esto. cada uno (función () {
          var data = $__default["default"](this).data(DATA_KEY$9);
  
          si (!datos) {
            data = new ExpandableTable($__default["default"](this));
            $__predeterminado["predeterminado"](esto).datos(DATA_KEY$9, datos);
          }
  
          if (tipo de operación === 'cadena' && /init|toggleRow/.test(operación)) {
            datos[operación]();
          }
        });
      };
  
      volver ExpandableTable;
    }();
    /**
      * API de datos
      * ================================================ ===
      */
  
  
    $__default["default"](SELECTOR_TABLE).ready(función () {
      ExpandableTable._jQueryInterface.call($__default["default"](this), 'init');
    });
    $__default["predeterminado"](documento).on('clic', SELECTOR_DATA_TOGGLE$2, función () {
      ExpandableTable._jQueryInterface.call($__default["default"](this), 'toggleRow');
    });
    /**
      * API de jQuery
      * ================================================ ===
      */
  
    $__default["predeterminado"].fn[NOMBRE$9] = ExpandableTable._jQueryInterface;
    $__default["predeterminado"].fn[NOMBRE$9].Constructor = TablaExpandible;
  
    $__predeterminado["predeterminado"].fn[NOMBRE$9].noConflict = función () {
      $__predeterminado["predeterminado"].fn[NOMBRE$9] = JQUERY_NO_CONFLICT$9;
      devuelve ExpandableTable._jQueryInterface;
    };
  
    /**
     * --------------------------------------------
     * AdminLTE Pantalla completa.js
     * Licencia MIT
     * --------------------------------------------
     */
    /**
     * Constantes
     * ================================================ ===
     */
  
    var NOMBRE$8 = 'Pantalla completa';
    var DATA_KEY$8 = 'lte.pantalla completa';
    var JQUERY_NO_CONFLICT$8 = $__predeterminado["predeterminado"].fn[NOMBRE$8];
    var SELECTOR_DATA_WIDGET$2 = '[widget de datos="pantalla completa"]';
    var SELECTOR_ICON = SELECTOR_DATA_WIDGET$2 + "i";
    var EVENT_FULLSCREEN_CHANGE = 'webkitfullscreenchange mozfullscreenchange fullscreenchange MSFullscreenChange';
    var Predeterminado$8 = {
      minimizarIcon: 'fa-comprimir-flechas-alt',
      maximizarIcon: 'fa-expand-flechas-alt'
    };
    /**
     * Definición de clase
     * ================================================ ===
     */
  
    var Pantalla completa = /*#__PURE__*/función () {
      función Pantalla completa (_elemento, _opciones) {
        este.elemento = _elemento;
        this.options = $__default["default"].extend({}, Default$8, _options);
      } // Público
  
  
      var _proto = Pantalla completa.prototipo;
  
      _proto.alternar = función alternar() {
        if (document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement) {
          esta.ventana();
        } demás {
          esto.pantalla completa();
        }
      };
  
      _proto.toggleIcon = función alternarIcon() {
        if (document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement) {
          $__default["predeterminado"](SELECTOR_ICON).removeClass(this.options.maximizeIcon).addClass(this.options.minimizeIcon);
        } demás {
          $__default["predeterminado"](SELECTOR_ICON).removeClass(this.options.minimizeIcon).addClass(this.options.maximizeIcon);
        }
      };
  
      _proto.pantalla completa = función pantalla completa() {
        if (document.documentElement.requestFullscreen) {
          documento.documentElement.requestFullscreen();
        } más si (document.documentElement.webkitRequestFullscreen) {
          documento.documentElement.webkitRequestFullscreen();
        } más si (document.documentElement.msRequestFullscreen) {
          documento.documentElement.msRequestFullscreen();
        }
      };
  
      _proto.windowed = función ventana() {
        if (documento.salirPantalla completa) {
          documento.exitFullscreen();
        } más si (document.webkitExitFullscreen) {
          documento.webkitExitFullscreen();
        } más si (document.msExitFullscreen) {
          documento.msExitFullscreen();
        }
      } // Estática
      ;
  
      Pantalla completa._jQueryInterface = función _jQueryInterface(config) {
        var data = $__default["default"](this).data(DATA_KEY$8);
  
        si (!datos) {
          datos = $__predeterminado["predeterminado"](esto).datos();
        }
  
        var _options = $__default["default"].extend({}, Default$8, typeof config === 'object' ? config : data);
  
        var plugin = new Fullscreen($__default["default"](this), _options);
        $__default["default"](this).data(DATA_KEY$8, typeof config === 'object' ? config : data);
  
        if (typeof config === 'string' && /toggle|toggleIcon|pantalla completa|ventana/.test(config)) {
          complemento[config]();
        } demás {
          plugin.init();
        }
      };
  
      volver Pantalla completa;
    }();
    /**
      * API de datos
      * ================================================ ===
      */
  
  
    $__default["predeterminado"](documento).on('clic', SELECTOR_DATA_WIDGET$2, función () {
      Pantalla completa._jQueryInterface.call($__default["default"](this), 'toggle');
    });
    $__default["default"](documento).on(EVENT_FULLSCREEN_CHANGE, función () {
      Pantalla completa._jQueryInterface.call($__default["default"](SELECTOR_DATA_WIDGET$2), 'toggleIcon');
    });
    /**
     * API de jQuery
     * ================================================ ===
     */
  
    $__default["predeterminado"].fn[NOMBRE$8] = Pantalla completa._jQueryInterface;
    $__default["predeterminado"].fn[NOMBRE$8].Constructor = Pantalla completa;
  
    $__predeterminado["predeterminado"].fn[NOMBRE$8].noConflict = función () {
      $__predeterminado["predeterminado"].fn[NOMBRE$8] = JQUERY_NO_CONFLICT$8;
      volver Pantalla completa._jQueryInterface;
    };
  
    /**
     * --------------------------------------------
     * AdminLTE IFrame.js
     * Licencia MIT
     * --------------------------------------------
     */
    /**
     * Constantes
     * ================================================ ===
     */
  
    var NOMBRE$7 = 'IFrame';
    var DATA_KEY$7 = 'lte.iframe';
    var JQUERY_NO_CONFLICT$7 = $__predeterminado["predeterminado"].fn[NOMBRE$7];
    var SELECTOR_DATA_TOGGLE$1 = '[widget de datos="iframe"]';
    var SELECTOR_DATA_TOGGLE_CLOSE = '[widget de datos="iframe-close"]';
    var SELECTOR_DATA_TOGGLE_SCROLL_LEFT = '[widget de datos="iframe-scrollleft"]';
    var SELECTOR_DATA_TOGGLE_SCROLL_RIGHT = '[widget de datos="iframe-scrollright"]';
    var SELECTOR_DATA_TOGGLE_FULLSCREEN = '[widget de datos="iframe-fullscreen"]';
    var SELECTOR_CONTENT_WRAPPER = '.content-wrapper';
    var SELECTOR_CONTENT_IFRAME = SELECTOR_CONTENT_WRAPPER + "iframe";
    var SELECTOR_TAB_NAV = SELECTOR_CONTENT_WRAPPER + ".iframe-mode .nav";
    var SELECTOR_TAB_NAVBAR_NAV = SELECTOR_CONTENT_WRAPPER + ".iframe-mode .navbar-nav";
    var SELECTOR_TAB_NAVBAR_NAV_ITEM = SELECTOR_TAB_NAVBAR_NAV + ".elemento de navegación";
    var SELECTOR_TAB_NAVBAR_NAV_LINK = SELECTOR_TAB_NAVBAR_NAV + ".nav-enlace";
    var SELECTOR_TAB_CONTENT = SELECTOR_CONTENT_WRAPPER + ".iframe-mode .tab-content";
    var SELECTOR_TAB_EMPTY = SELECTOR_TAB_CONTENT + ".tab-empty";
    var SELECTOR_TAB_LOADING = SELECTOR_TAB_CONTENT + ".tab-cargando";
    var SELECTOR_TAB_PANE = SELECTOR_TAB_CONTENT + " .tab-pane";
    var SELECTOR_SIDEBAR_MENU_ITEM = '.main-sidebar .nav-item > a.nav-link';
    var SELECTOR_SIDEBAR_SEARCH_ITEM = '.sidebar-search-results .list-group-item';
    var SELECTOR_HEADER_MENU_ITEM = '.main-header .nav-item a.nav-link';
    var SELECTOR_HEADER_DROPDOWN_ITEM = '.main-header a.dropdown-item';
    var CLASS_NAME_IFRAME_MODE$1 = 'modo-iframe';
    var CLASS_NAME_FULLSCREEN_MODE = 'iframe-mode-fullscreen';
    var Predeterminado$7 = {
      onTabClick: función onTabClick(elemento) {
        Devolver objeto;
      },
      onTabChanged: function onTabChanged(elemento) {
        Devolver objeto;
      },
      onTabCreated: función onTabCreated(elemento) {
        Devolver objeto;
      },
      autoIframeMode: verdadero,
      autoItemActive: verdadero,
      AutoShowNewTab: verdadero,
      modo oscuro automático: falso,
      permitir duplicados: falso,
      permitir recargar: verdadero,
      pantalla de carga: verdadero,
      useNavbarItems: verdadero,
      Desplazamiento de desplazamiento: 40,
      scrollBehaviorSwap: falso,
      iconMaximize: 'fa-expandir',
      iconMinimize: 'fa-comprimir'
    };
    /**
     * Definición de clase
     * ================================================ ===
     */
  
    var IFrame = /*#__PURE__*/función () {
      función IFrame (elemento, configuración) {
        esto._config = config;
        este._elemento = elemento;
  
        esto._init();
      } // Público
  
  
      var _proto = IFrame.prototipo;
  
      _proto.onTabClick = función onTabClick(elemento) {
        this._config.onTabClick(elemento);
      };
  
      _proto.onTabChanged = función enTabChanged(elemento) {
        this._config.onTabChanged(elemento);
      };
  
      _proto.onTabCreated = función onTabCreated(elemento) {
        this._config.onTabCreated(elemento);
      };
  
      _proto.createTab = function createTab(título, enlace, nombre único, apertura automática) {
        var _esto = esto;
  
        var tabId = "panel-" + nombreúnico;
        var navId = "tab-" + nombreúnico;
  
        si (this._config.allowDuplicates) {
          tabId += "-" + Math.floor(Math.random() * 1000);
          navId += "-" + Math.floor(Math.random() * 1000);
        }
  
        var newNavItem = "<li class=\"nav-item\" role=\"presentation\"><a href=\"#\" class=\"btn-iframe-close\" data-widget=\"iframe -close\" data-type=\"only-this\"><i class=\"fas fa-times\"></i></a><a class=\"nav-link\" data- alternar=\"fila\" id=\"" + navId + "\" href=\"#" ​​+ tabId + "\" role=\"tab\" aria-controls=\"" + tabId + "\" aria-selected=\"falso\">" + título + "</a></li>";
        $__default["predeterminado"](SELECTOR_TAB_NAVBAR_NAV).append(unescape(escape(newNavItem)));
        var newTabItem = "<div class=\"desvanecimiento del panel de pestañas\" id=\"" + tabId + "\" role=\"tabpanel\" aria-labelledby=\"" + navId + "\"><iframe src=\"" + enlace + "\"></iframe></div>";
        $__default["predeterminado"](SELECTOR_TAB_CONTENT).append(unescape(escape(newTabItem)));
  
        si (autoabrir) {
          si (this._config.loadingScreen) {
            var $loadingScreen = $__default["default"](SELECTOR_TAB_LOADING);
            $cargandoPantalla.fadeIn();
            $__default["default"](tabId + "iframe").ready(función () {
              if (tipo de _this._config.loadingScreen === 'número') {
                _this.switchTab("#" + ID de navegación);
  
                establecerTiempo de espera (función () {
                  $cargandoPantalla.fadeOut();
                }, _this._config.loadingScreen);
              } demás {
                _this.switchTab("#" + ID de navegación);
  
                $cargandoPantalla.fadeOut();
              }
            });
          } demás {
            this.switchTab("#" + ID de navegación);
          }
        }
  
        this.onTabCreated($__default["default"]("#" + navId));
      };
  
      _proto.openTabSidebar = función openTabSidebar(elemento, autoabrir) {
        si (autoabrir === vacío 0) {
          autoOpen = this._config.autoShowNewTab;
        }
  
        var $elemento = $__predeterminado["predeterminado"](elemento).clon();
  
        if ($elemento.attr('href') === indefinido) {
          $elemento = $__predeterminado["predeterminado"](elemento).parent('a').clone();
        }
  
        $item.find('.right, .search-path').remove();
        var titulo = $item.find('p').text();
  
        si (título === '') {
          título = $elemento.texto();
        }
  
        var enlace = $elemento.attr('href');
  
        if (enlace === '#' || enlace === '' || enlace === indefinido) {
          devolver;
        }
  
        var nombreÚnico = unescape(enlace).reemplazar('./', '').reemplazar(/["#&'./:=?[\]]/gi, '-').reemplazar(/(-- )/gi, '');
        var navId = "tab-" + nombreúnico;
  
        if (!this._config.allowDuplicates && $__default["default"]("#" + navId).longitud > 0) {
          devuelve this.switchTab("#" + navId, this._config.allowReload);
        }
  
        if (!this._config.allowDuplicates && $__default["default"]("#" + navId).longitud === 0 || this._config.allowDuplicates) {
          this.createTab(título, enlace, nombre único, apertura automática);
        }
      };
  
      _proto.switchTab = function switchTab(elemento, recargar) {
        var _esto2 = esto;
  
        si (recargar === anular 0) {
          recargar = falso;
        }
  
        var $elemento = $__predeterminado["predeterminado"](elemento);
        var tabId = $elemento.attr('href');
        $__predeterminado["predeterminado"](SELECTOR_TAB_EMPTY).hide();
  
        si (recargar) {
          var $loadingScreen = $__default["default"](SELECTOR_TAB_LOADING);
  
          si (this._config.loadingScreen) {
            $cargandoPantalla.show(0, función () {
              $__default["default"](tabId + " iframe").attr('src', $__default["default"](tabId + "iframe").attr('src')).ready(function () {
                si (_this2._config.loadingScreen) {
                  if (tipo de _this2._config.loadingScreen === 'número') {
                    establecerTiempo de espera (función () {
                      $cargandoPantalla.fadeOut();
                    }, _this2._config.loadingScreen);
                  } demás {
                    $cargandoPantalla.fadeOut();
                  }
                }
              });
            });
          } demás {
            $__default["default"](tabId + " iframe").attr('src', $__default["default"](tabId + " iframe").attr('src'));
          }
        }
  
        $__default["default"](SELECTOR_TAB_NAVBAR_NAV + " .active").tab('dispose').removeClass('active');
  
        this._fixHeight();
  
        $elemento.tab('mostrar');
        $elemento.parents('li').addClass('activo');
        this.onTabChanged($elemento);
  
        si (este._config.autoItemActive) {
          this._setItemActive($__default["default"](tabId + " iframe").attr('src'));
        }
      };
  
      _proto.removeActiveTab = función removeActiveTab(tipo, elemento) {
        si (escriba == 'todos') {
          $__predeterminado["predeterminado"](SELECTOR_TAB_NAVBAR_NAV_ITEM).remove();
          $__predeterminado["predeterminado"](SELECTOR_TAB_PANE).remove();
          $__predeterminado["predeterminado"](SELECTOR_TAB_EMPTY).show();
        } else if (escriba == 'todos los demás') {
          $__predeterminado["predeterminado"](SELECTOR_TAB_NAVBAR_NAV_ITEM + ":no(.activo)").remove();
          $__default["default"](SELECTOR_TAB_PANE + ":not(.active)").remove();
        } else if (escriba == 'solo-esto') {
          var $navClose = $__default["default"](elemento);
          var $navItem = $navClose.parent('.nav-item');
          var $navItemParent = $navItem.parent();
          var navItemIndex = $navItem.index();
          var tabId = $navClose.siblings('.nav-link').attr('aria-controls');
          $navItem.remove();
          $__predeterminado["predeterminado"]("#" + tabId).remove();
  
          if ($__predeterminado["predeterminado"](SELECTOR_TAB_CONTENT).niños().longitud == $__predeterminado["predeterminado"](SELECTOR_TAB_EMPTY + ", " + SELECTOR_TAB_LOADING).longitud) {
            $__predeterminado["predeterminado"](SELECTOR_TAB_EMPTY).show();
          } demás {
            var prevNavItemIndex = navItemIndex - 1;
            this.switchTab($navItemParent.children().eq(prevNavItemIndex).find('a.nav-link'));
          }
        } demás {
          var _$navItem = $__default["default"](SELECTOR_TAB_NAVBAR_NAV_ITEM + ".active");
  
          var _$navItemParent = _$navItem.parent();
  
          var _navItemIndex = _$navItem.index();
  
          _$navItem.remove();
  
          $__predeterminado["predeterminado"](SELECTOR_TAB_PANE + ".activo").remove();
  
          if ($__predeterminado["predeterminado"](SELECTOR_TAB_CONTENT).niños().longitud == $__predeterminado["predeterminado"](SELECTOR_TAB_EMPTY + ", " + SELECTOR_TAB_LOADING).longitud) {
            $__predeterminado["predeterminado"](SELECTOR_TAB_EMPTY).show();
          } demás {
            var _prevNavItemIndex = _navItemIndex - 1;
  
            this.switchTab(_$navItemParent.children().eq(_prevNavItemIndex).find('a.nav-link'));
          }
        }
      };
  
      _proto.toggleFullscreen = función alternarFullscreen() {
        if ($__default["default"]('cuerpo').hasClass(CLASS_NAME_FULLSCREEN_MODE)) {
          $__default["predeterminado"](SELECTOR_DATA_TOGGLE_FULLSCREEN + "i").removeClass(this._config.iconMinimize).addClass(this._config.iconMaximize);
          $__default["default"]('cuerpo').removeClass(CLASS_NAME_FULLSCREEN_MODE);
          $__default["default"](SELECTOR_TAB_EMPTY + ", " + SELECTOR_TAB_LOADING).height('100%');
          $__default["default"](SELECTOR_CONTENT_WRAPPER).height('100%');
          $__predeterminado["predeterminado"](SELECTOR_CONTENT_IFRAME).height('100%');
        } demás {
          $__default["predeterminado"](SELECTOR_DATA_TOGGLE_FULLSCREEN + "i").removeClass(this._config.iconMaximize).addClass(this._config.iconMinimize);
          $__default["default"]('cuerpo').addClass(CLASS_NAME_FULLSCREEN_MODE);
        }
  
        $__default["predeterminado"](ventana).trigger('redimensionar');
  
        esto._fixHeight(verdadero);
      } // Privado
      ;
  
      _proto._init = función _init() {
        var usandoDefTab = $__predeterminado["predeterminado"](SELECTOR_TAB_CONTENT).niños().longitud > 2;
  
        this._setupListeners();
  
        esto._fixHeight(verdadero);
  
        si (usandoDefTab) {
          var $el = $__default["default"]("" + SELECTOR_TAB_PANE).first(); // eslint-disable-next-line sin consola
  
          consola.log($el);
          var nombreÚnico = $el.attr('id').replace('panel-', '');
          var id de navegación = "#tab-" + nombreúnico;
          this.switchTab(navId, verdadero);
        }
      };
  
      _proto._initFrameElement = función _initFrameElement() {
        if (ventana.frameElement && this._config.autoIframeMode) {
          var $cuerpo = $__predeterminado["predeterminado"]('cuerpo');
          $cuerpo.addClass(CLASS_NAME_IFRAME_MODE$1);
  
          si (este._config.autoDarkMode) {
            $body.addClass('modo oscuro');
          }
        }
      };
  
      _proto._navScroll = función _navScroll(desplazamiento) {
        var posizq = $__predeterminado["predeterminado"](SELECTOR_TAB_NAVBAR_NAV).scrollLeft();
        $__predeterminado["predeterminado"](SELECTOR_TAB_NAVBAR_NAV).animar({
          scrollLeft: posición izquierda + desplazamiento
        }, 250, 'lineal');
      };
  
      _proto._setupListeners = función _setupListeners() {
        var _this3 = esto;
  
        $__predeterminado["predeterminado"](ventana).on('redimensionar', función () {
          establecerTiempo de espera (función () {
            _this3._fixHeight();
          }, 1);
        });
  
        if ($__default["default"](SELECTOR_CONTENT_WRAPPER).hasClass(CLASS_NAME_IFRAME_MODE$1)) {
          $__default["predeterminado"](documento).on('clic', SELECTOR_SIDEBAR_MENU_ITEM + ", " + SELECTOR_SIDEBAR_SEARCH_ITEM, función (e) {
            e.preventDefault();
  
            _this3.openTabSidebar(e.objetivo);
          });
  
          si (esto._config.useNavbarItems) {
            $__default["predeterminado"](documento).on('clic', SELECTOR_HEADER_MENU_ITEM + ", " + SELECTOR_HEADER_DROPDOWN_ITEM, función (e) {
              e.preventDefault();
  
              _this3.openTabSidebar(e.objetivo);
            });
          }
        }
  
        $__default["predeterminado"](documento).on('clic', SELECTOR_TAB_NAVBAR_NAV_LINK, función (e) {
          e.preventDefault();
  
          _this3.onTabClick(e.objetivo);
  
          _this3.switchTab(e.objetivo);
        });
        $__default["predeterminado"](documento).on('clic', SELECTOR_TAB_NAVBAR_NAV_LINK, función (e) {
          e.preventDefault();
  
          _this3.onTabClick(e.objetivo);
  
          _this3.switchTab(e.objetivo);
        });
        $__default["predeterminado"](documento).on('clic', SELECTOR_DATA_TOGGLE_CLOSE, función (e) {
          e.preventDefault();
          var objetivo = e.objetivo;
  
          if (objetivo.nombreNodo == 'I') {
            objetivo = e.objetivo.offsetParent;
          }
  
          _this3.removeActiveTab(target.attributes['data-type'] ? target.attributes['data-type'].nodeValue : null, target);
        });
        $__default["predeterminado"](documento).on('clic', SELECTOR_DATA_TOGGLE_FULLSCREEN, función (e) {
          e.preventDefault();
  
          _this3.toggleFullscreen();
        });
        var mousedown = falso;
        var mousedownInterval = null;
        $__default["default"](documento).on('mousedown', SELECTOR_DATA_TOGGLE_SCROLL_LEFT, function (e) {
          e.preventDefault();
          clearInterval(mousedownInterval);
          var scrollOffset = _this3._config.scrollOffset;
  
          si (!_this3._config.scrollBehaviorSwap) {
            desplazamientoDesplazamiento = -desplazamientoDesplazamiento;
          }
  
          ratón hacia abajo = verdadero;
  
          _this3._navScroll(DesplazamientoDesplazamiento);
  
          mousedownInterval = setInterval(función () {
            _this3._navScroll(DesplazamientoDesplazamiento);
          }, 250);
        });
        $__default["default"](documento).on('mousedown', SELECTOR_DATA_TOGGLE_SCROLL_RIGHT, function (e) {
          e.preventDefault();
          clearInterval(mousedownInterval);
          var scrollOffset = _this3._config.scrollOffset;
  
          si (_this3._config.scrollBehaviorSwap) {
            desplazamientoDesplazamiento = -desplazamientoDesplazamiento;
          }
  
          ratón hacia abajo = verdadero;
  
          _this3._navScroll(DesplazamientoDesplazamiento);
  
          mousedownInterval = setInterval(función () {
            _this3._navScroll(DesplazamientoDesplazamiento);
          }, 250);
        });
        $__default["default"](documento).on('mouseup', function () {
          si (ratón hacia abajo) {
            ratón hacia abajo = falso;
            clearInterval(mousedownInterval);
            mousedownInterval = nulo;
          }
        });
      };
  
      _proto._setItemActive = función _setItemActive(href) {
        $__default["predeterminado"](SELECTOR_SIDEBAR_MENU_ITEM + ", " + SELECTOR_HEADER_DROPDOWN_ITEM).removeClass('activo');
        $__predeterminado["predeterminado"](SELECTOR_HEADER_MENU_ITEM).parent().removeClass('activo');
        var $headerMenuItem = $__default["default"](SELECTOR_HEADER_MENU_ITEM + "[href$=\"" + href + "\"]");
        var $headerDropdownItem = $__default["default"](SELECTOR_HEADER_DROPDOWN_ITEM + "[href$=\"" + href + "\"]");
        var $sidebarMenuItem = $__default["default"](SELECTOR_SIDEBAR_MENU_ITEM + "[href$=\"" + href + "\"]");
        $headerMenuItem.each(función (i, e) {
          $__default["default"](e).parent().addClass('active');
        });
        $headerDropdownItem.each(función (i, e) {
          $__predeterminado["predeterminado"](e).addClass('activo');
        });
        $sidebarMenuItem.each(función (i, e) {
          $__predeterminado["predeterminado"](e).addClass('activo');
          $__default["default"](e).parents('.nav-treeview').prevAll('.nav-link').addClass('active');
        });
      };
  
      _proto._fixHeight = function _fixHeight(tabEmpty) {
        si (tabEmpty === vacío 0) {
          tabEmpty = falso;
        }
  
        if ($__default["default"]('cuerpo').hasClass(CLASS_NAME_FULLSCREEN_MODE)) {
          var windowHeight = $__default["default"](ventana).height();
          var navbarHeight = $__default["default"](SELECTOR_TAB_NAV).outerHeight();
          $__default["predeterminado"](SELECTOR_TAB_EMPTY + ", " + SELECTOR_TAB_LOADING + ", " + SELECTOR_CONTENT_IFRAME).height(windowHeight - navbarHeight);
          $__default["default"](SELECTOR_CONTENT_WRAPPER).height(windowHeight);
        } demás {
          var contentWrapperHeight = parseFloat($__default["default"](SELECTOR_CONTENT_WRAPPER).css('height'));
  
          var _navbarHeight = $__default["default"](SELECTOR_TAB_NAV).outerHeight();
  
          si (tabEmpty == verdadero) {
            establecerTiempo de espera (función () {
              $__default["default"](SELECTOR_TAB_EMPTY + ", " + SELECTOR_TAB_LOADING).height(contentWrapperHeight - _navbarHeight);
            }, 50);
          } demás {
            $__default["default"](SELECTOR_CONTENT_IFRAME).height(contentWrapperHeight - _navbarHeight);
          }
        }
      } // Estática
      ;
  
      IFrame._jQueryInterface = función _jQueryInterface(config) {
        si ($__predeterminado["predeterminado"](SELECTOR_DATA_TOGGLE$1).longitud > 0) {
          var data = $__default["default"](this).data(DATA_KEY$7);
  
          si (!datos) {
            datos = $__predeterminado["predeterminado"](esto).datos();
          }
  
          var _options = $__default["default"].extend({}, Default$7, typeof config === 'object' ? config : data);
  
          localStorage.setItem('AdminLTE:IFrame:Opciones', JSON.stringify(_opciones));
          var plugin = new IFrame($__default["default"](this), _options);
          $__default["default"](this).data(DATA_KEY$7, typeof config === 'object' ? config : data);
  
          if (typeof config === 'string' && /createTab|openTabSidebar|switchTab|removeActiveTab/.test(config)) {
            complemento[config]();
          }
        } demás {
          new IFrame($__default["default"](this), JSON.parse(localStorage.getItem('AdminLTE:IFrame:Options')))._initFrameElement();
        }
      };
  
      devolver IFrame;
    }();
    /**
     * API de datos
     * ================================================ ===
     */
  
  
    $__predeterminado["predeterminado"](ventana).on('cargar', función () {
      IFrame._jQueryInterface.call($__default["default"](SELECTOR_DATA_TOGGLE$1));
    });
    /**
     * API de jQuery
     * ================================================ ===
     */
  
    $__default["predeterminado"].fn[NOMBRE$7] = IFrame._jQueryInterface;
    $__default["predeterminado"].fn[NOMBRE$7].Constructor = IFrame;
  
    $__predeterminado["predeterminado"].fn[NOMBRE$7].noConflict = función () {
      $__predeterminado["predeterminado"].fn[NOMBRE$7] = JQUERY_NO_CONFLICT$7;
      devolver IFrame._jQueryInterface;
    };
  
    /**
     * --------------------------------------------
     * Diseño de AdminLTE.js
     * Licencia MIT
     * --------------------------------------------
     */
    /**
     * Constantes
     * ================================================ ===
     */
  
    var NOMBRE$6 = 'Diseño';
    var DATA_KEY$6 = 'lte.diseño';
    var JQUERY_NO_CONFLICT$6 = $__predeterminado["predeterminado"].fn[NOMBRE$6];
    var SELECTOR_HEADER = '.main-header';
    var SELECTOR_MAIN_SIDEBAR = '.main-sidebar';
    var SELECTOR_SIDEBAR$1 = '.main-sidebar .sidebar';
    var SELECTOR_CONTENT = '.content-wrapper';
    var SELECTOR_CONTROL_SIDEBAR_CONTENT = '.control-sidebar-content';
    var SELECTOR_CONTROL_SIDEBAR_BTN = '[widget de datos="barra lateral de control"]';
    var SELECTOR_FOOTER = '.pie de página principal';
    var SELECTOR_PUSHMENU_BTN = '[widget de datos="pushmenu"]';
    var SELECTOR_LOGIN_BOX = '.login-box';
    var SELECTOR_REGISTER_BOX = '.caja-de-registro';
    var SELECTOR_PRELOADER = '.precargador';
    var CLASS_NAME_SIDEBAR_COLLAPSED$1 = 'sidebar-collapse';
    var CLASS_NAME_SIDEBAR_FOCUSED = 'enfocado en la barra lateral';
    var CLASS_NAME_LAYOUT_FIXED = 'diseño fijo';
    var CLASS_NAME_CONTROL_SIDEBAR_SLIDE_OPEN = 'control-sidebar-slide-open';
    var CLASS_NAME_CONTROL_SIDEBAR_OPEN = 'control-sidebar-open';
    var CLASS_NAME_IFRAME_MODE = 'modo iframe';
    var Predeterminado$6 = {
      scrollbarTheme: 'os-tema-luz',
      barra de desplazamientoAutoOcultar: 'l',
      panelAutoHeight: verdadero,
      panelAutoHeightMode: 'altura mínima',
      precargaDuración: 200,
      loginRegisterAutoHeight: verdadero
    };
    /**
     * Definición de clase
     * ================================================ ===
     */
  
    var Diseño = /*#__PURE__*/función () {
      Diseño de función (elemento, configuración) {
        esto._config = config;
        este._elemento = elemento;
      } // Público
  
  
      var _proto = Diseño.prototipo;
  
      _proto.fixLayoutHeight = función fixLayoutHeight(extra) {
        si (extra === vacío 0) {
          adicional = nulo;
        }
  
        var $cuerpo = $__predeterminado["predeterminado"]('cuerpo');
        var controlSidebar = 0;
  
        if ($body.hasClass(CLASS_NAME_CONTROL_SIDEBAR_SLIDE_OPEN) || $body.hasClass(CLASS_NAME_CONTROL_SIDEBAR_OPEN) || extra === 'control_sidebar') {
          controlSidebar = $__default["default"](SELECTOR_CONTROL_SIDEBAR_CONTENT).outerHeight();
        }
  
        var alturas = {
          ventana: $__predeterminado["predeterminado"](ventana).altura(),
          encabezado: $__predeterminado["predeterminado"](SELECTOR_HEADER).longitud > 0 ? $__predeterminado["predeterminado"](SELECTOR_HEADER).outerHeight() : 0,
          pie de página: $__predeterminado["predeterminado"](SELECTOR_FOOTER).longitud > 0 ? $__predeterminado["predeterminado"](SELECTOR_FOOTER).outerHeight() : 0,
          barra lateral: $__default["default"](SELECTOR_SIDEBAR$1).longitud > 0 ? $__predeterminado["predeterminado"](SELECTOR_SIDEBAR$1).alto() : 0,
          barra lateral de control: barra lateral de control
        };
  
        var max = this._max(alturas);
  
        var desplazamiento = this._config.panelAutoHeight;
  
        si (desplazamiento === verdadero) {
          compensación = 0;
        }
  
        var $contentSelector = $__default["default"](SELECTOR_CONTENT);
  
        si (desplazamiento! == falso) {
          if (max === alturas.controlSidebar) {
            $contentSelector.css(this._config.panelAutoHeightMode, max + offset);
          } else if (max === alturas.ventana) {
            $contentSelector.css(this._config.panelAutoHeightMode, max + offset - heights.header - heights.footer);
          } demás {
            $contentSelector.css(this._config.panelAutoHeightMode, max + offset - heights.header);
          }
  
          si (this._isFooterFixed()) {
            $contentSelector.css(this._config.panelAutoHeightMode, parseFloat($contentSelector.css(this._config.panelAutoHeightMode)) + heights.footer);
          }
        }
  
        if (!$body.hasClass(CLASS_NAME_LAYOUT_FIXED)) {
          devolver;
        }
  
        if (tipo de $__predeterminado["predeterminado"].fn.overlayScrollbars !== 'indefinido') {
          $__predeterminado["predeterminado"](SELECTOR_SIDEBAR$1).overlayScrollbars({
            nombre de clase: this._config.scrollbarTheme,
            tamañoAutoCapable: verdadero,
            barras de desplazamiento: {
              autoHide: this._config.scrollbarAutoHide,
              desplazamiento de clic: verdadero
            }
          });
        } demás {
          $__default["default"](SELECTOR_SIDEBAR$1).css('overflow-y', 'auto');
        }
      };
  
      _proto.fixLoginRegisterHeight = función fixLoginRegisterHeight() {
        var $cuerpo = $__predeterminado["predeterminado"]('cuerpo');
        var $selector = $__predeterminado["predeterminado"](SELECTOR_LOGIN_BOX + ", " + SELECTOR_REGISTER_BOX);
  
        if ($cuerpo.hasClass(CLASS_NAME_IFRAME_MODE)) {
          $cuerpo.css('altura', '100%');
          $__default["default"]('.wrapper').css('altura', '100%');
          $__predeterminado["predeterminado"]('html').css('altura', '100%');
        } else if ($selector.longitud === 0) {
          $cuerpo.css('altura', 'auto');
          $__default["default"]('html').css('altura', 'auto');
        } demás {
          var boxHeight = $selector.height();
  
          if ($body.css(this._config.panelAutoHeightMode) !== boxHeight) {
            $cuerpo.css(this._config.panelAutoHeightMode, boxHeight);
          }
        }
      } // Privado
      ;
  
      _proto._init = función _init() {
        var _esto = esto;
  
        // Activar el observador de altura del diseño
        this.fixLayoutHeight();
  
        si (this._config.loginRegisterAutoHeight === verdadero) {
          this.fixLoginRegisterHeight();
        } else if (this._config.loginRegisterAutoHeight === parseInt(this._config.loginRegisterAutoHeight, 10)) {
          setInterval(this.fixLoginRegisterHeight, this._config.loginRegisterAutoHeight);
        }
  
        $__default["predeterminado"](SELECTOR_SIDEBAR$1).on('contraído.lte.treeview expandido.lte.treeview', función () {
          _this.fixLayoutHeight();
        });
        $__default["default"](SELECTOR_MAIN_SIDEBAR).on('mouseenter mouseleave', función () {
          if ($__default["default"]('cuerpo').hasClass(CLASS_NAME_SIDEBAR_COLLAPSED$1)) {
            _this.fixLayoutHeight();
          }
        });
        $__default["predeterminado"](SELECTOR_PUSHMENU_BTN).on('colapsado.lte.pushmenu mostrado.lte.pushmenu', función () {
          establecerTiempo de espera (función () {
            _this.fixLayoutHeight();
          }, 300);
        });
        $__default["default"](SELECTOR_CONTROL_SIDEBAR_BTN).on('collapsed.lte.controlsidebar', función () {
          _this.fixLayoutHeight();
        }).on('expandido.lte.controlsidebar', función () {
          _this.fixLayoutHeight('control_barra lateral');
        });
        $__predeterminado[" predeterminado"](ventana).cambiar tamaño(función () {
          _this.fixLayoutHeight();
        });
        establecerTiempo de espera (función () {
          $__default["default"]('body.hold-transition').removeClass('hold-transition');
        }, 50);
        establecerTiempo de espera (función () {
          var $preloader = $__default["default"](SELECTOR_PRELOADER);
  
          si ($ precargador) {
            $preloader.css('altura', 0);
            establecerTiempo de espera (función () {
              $precargador.niños().hide();
            }, 200);
          }
        }, this._config.preloadDuration);
      };
  
      _proto._max = función _max(números) {
        // Calcular el número máximo en una lista
        var máx = 0;
        Objeto.claves(números).forEach(función (clave) {
          if (números[clave] > max) {
            max = numeros[clave];
          }
        });
        retorno máximo;
      };
  
      _proto._isFooterFixed = función _isFooterFixed() {
        return $__predeterminado["predeterminado"](SELECTOR_FOOTER).css('posición') === 'fijo';
      } // Estática
      ;
  
      Diseño._jQueryInterface = función _jQueryInterface(config) {
        si (config === vacío 0) {
          configuración = '';
        }
  
        devuelve esto. cada uno (función () {
          var data = $__default["default"](this).data(DATA_KEY$6);
  
          var _options = $__default["default"].extend({}, Default$6, $__default["default"](this).data());
  
          si (!datos) {
            data = new Layout($__default["default"](this), _options);
            $__predeterminado["predeterminado"](esto).datos(DATA_KEY$6, datos);
          }
  
          if (config === 'init' || config === '') {
            datos._init();
          } else if (config === 'fixLayoutHeight' || config === 'fixLoginRegisterHeight') {
            datos[config]();
          }
        });
      };
  
      diseño de retorno;
    }();
    /**
     * API de datos
     * ================================================ ===
     */
  
  
    $__predeterminado["predeterminado"](ventana).on('cargar', función () {
      Layout._jQueryInterface.call($__default["default"]('cuerpo'));
    });
    $__default["default"](SELECTOR_SIDEBAR$1 + " a").on('focusin', function () {
      $__default["default"](SELECTOR_MAIN_SIDEBAR).addClass(CLASS_NAME_SIDEBAR_FOCUSED);
    }).on('enfoque', función () {
      $__predeterminado["predeterminado"](SELECTOR_MAIN_SIDEBAR).removeClass(CLASS_NAME_SIDEBAR_FOCUSED);
    });
    /**
     * API de jQuery
     * ================================================ ===
     */
  
    $__default["predeterminado"].fn[NOMBRE$6] = Diseño._jQueryInterface;
    $__default["predeterminado"].fn[NOMBRE$6].Constructor = Diseño;
  
    $__predeterminado["predeterminado"].fn[NOMBRE$6].noConflict = función () {
      $__predeterminado["predeterminado"].fn[NOMBRE$6] = JQUERY_NO_CONFLICT$6;
      volver Layout._jQueryInterface;
    };
  
    /**
     * --------------------------------------------
     * AdminLTE PushMenu.js
     * Licencia MIT
     * --------------------------------------------
     */
    /**
     * Constantes
     * ================================================ ===
     */
  
    var NOMBRE$5 = 'PushMenu';
    var DATA_KEY$5 = 'lte.pushmenu';
    var EVENT_KEY$2 = "." + DATA_KEY$5;
    var JQUERY_NO_CONFLICT$5 = $__predeterminado["predeterminado"].fn[NOMBRE$5];
    var EVENT_COLLAPSED$1 = "contraído" + EVENT_KEY$2;
    var EVENT_COLLAPSED_DONE = "contraído-hecho" + EVENT_KEY$2;
    var EVENT_SHOWN = "mostrado" + EVENT_KEY$2;
    var SELECTOR_TOGGLE_BUTTON$1 = '[widget de datos="pushmenu"]';
    var SELECTOR_BODY = 'cuerpo';
    var SELECTOR_OVERLAY = '#sidebar-overlay';
    var SELECTOR_WRAPPER = '.envoltorio';
    var CLASS_NAME_COLLAPSED = 'sidebar-collapse';
    var CLASS_NAME_OPEN$3 = 'sidebar-open';
    var CLASS_NAME_IS_OPENING$1 = 'sidebar-is-opening';
    var CLASS_NAME_CLOSED = 'sidebar-closed';
    var Predeterminado$5 = {
      AutoCollapseTamaño: 992,
      habilitarRecuerde: falso,
      noTransitionAfterReload: verdadero,
      velocidad de animación: 300
    };
    /**
     * Definición de clase
     * ================================================ ===
     */
  
    var PushMenu = /*#__PURE__*/función () {
      function PushMenu(elemento, opciones) {
        este._elemento = elemento;
        this._options = $__default["default"].extend({}, Default$5, options);
  
        if ($__predeterminado["predeterminado"](SELECTOR_OVERLAY).longitud === 0) {
          esto._addOverlay();
        }
  
        esto._init();
      } // Público
  
  
      var _proto = PushMenu.prototipo;
  
      _proto.expand = función expandir() {
        var $bodySelector = $__default["default"](SELECTOR_BODY);
  
        if (this._options.autoCollapseSize && $__default["default"](window).width() <= this._options.autoCollapseSize) {
          $bodySelector.addClass(CLASS_NAME_OPEN$3);
        }
  
        $bodySelector.addClass(CLASS_NAME_IS_OPENING$1).removeClass(CLASS_NAME_COLLAPSED + " " + CLASS_NAME_CLOSED).delay(50).queue(function ()
          $bodySelector.removeClass(CLASS_NAME_IS_OPENING$1);
          $__predeterminado["predeterminado"](esto).dequeue();
        });
  
        if (this._options.enableRemember) {
          localStorage.setItem("recordar" + EVENT_KEY$2, CLASS_NAME_OPEN$3);
        }
  
        $__default["default"](this._element).trigger($__default["default"].Event(EVENT_SHOWN));
      };
  
      _proto.collapse = función colapsar() {
        var _esto = esto;
  
        var $bodySelector = $__default["default"](SELECTOR_BODY);
  
        if (this._options.autoCollapseSize && $__default["default"](window).width() <= this._options.autoCollapseSize) {
          $bodySelector.removeClass(CLASS_NAME_OPEN$3).addClass(CLASS_NAME_CLOSED);
        }
  
        $bodySelector.addClass(CLASS_NAME_COLLAPSED);
  
        if (this._options.enableRemember) {
          localStorage.setItem("recordar" + EVENT_KEY$2, CLASS_NAME_COLLAPSED);
        }
  
        $__default["default"](this._element).trigger($__default["default"].Event(EVENT_COLLAPSED$1));
        establecerTiempo de espera (función () {
          $__default["default"](_this._element).trigger($__default["default"].Event(EVENT_COLLAPSED_DONE));
        }, this._options.animationSpeed);
      };
  
      _proto.alternar = función alternar() {
        if ($__default["default"](SELECTOR_BODY).hasClass(CLASS_NAME_COLLAPSED)) {
          esto.expandir();
        } demás {
          esto.collapse();
        }
      };
  
      _proto.autoCollapse = function autoCollapse(redimensionar) {
        if (redimensionar === void 0) {
          redimensionar = falso;
        }
  
        if (!this._options.autoCollapseSize) {
          devolver;
        }
  
        var $bodySelector = $__default["default"](SELECTOR_BODY);
  
        if ($__predeterminado["predeterminado"](ventana).width() <= this._options.autoCollapseSize) {
          if (!$bodySelector.hasClass(CLASS_NAME_OPEN$3)) {
            esto.collapse();
          }
        } else if (redimensionar === verdadero) {
          if ($bodySelector.hasClass(CLASS_NAME_OPEN$3)) {
            $bodySelector.removeClass(CLASS_NAME_OPEN$3);
          } else if ($bodySelector.hasClass(CLASS_NAME_CLOSED)) {
            esto.expandir();
          }
        }
      };
  
      _proto.recordar = función recordar() {
        if (!this._options.enableRemember) {
          devolver;
        }
  
        var $cuerpo = $__predeterminado["predeterminado"]('cuerpo');
        var toggleState = localStorage.getItem("recordar" + EVENT_KEY$2);
  
        if (toggleState === NOMBRE_CLASE_COLLAPSADO) {
          if (this._options.noTransitionAfterReload) {
            $body.addClass('hold-transition').addClass(CLASS_NAME_COLLAPSED).delay(50).queue(function() {
              $__default["default"](this).removeClass('hold-transition');
              $__predeterminado["predeterminado"](esto).dequeue();
            });
          } demás {
            $cuerpo.addClass(CLASS_NAME_COLLAPSED);
          }
        } más si (this._options.noTransitionAfterReload) {
          $body.addClass('hold-transition').removeClass(CLASS_NAME_COLLAPSED).delay(50).queue(function() {
            $__default["default"](this).removeClass('hold-transition');
            $__predeterminado["predeterminado"](esto).dequeue();
          });
        } demás {
          $cuerpo.removeClass(CLASS_NAME_COLLAPSED);
        }
      } // Privado
      ;
  
      _proto._init = función _init() {
        var _esto2 = esto;
  
        esto.recordar();
        this.autoCollapse();
        $__predeterminado["predeterminado"](ventana).redimensionar(función () {
          _this2.autoCollapse(verdadero);
        });
      };
  
      _proto._addOverlay = función _addOverlay() {
        var _this3 = esto;
  
        var overlay = $__default["default"]('<div />', {
          id: 'superposición de la barra lateral'
        });
        overlay.on('clic', función () {
          _this3.collapse();
        });
        $__predeterminado["predeterminado"](SELECTOR_WRAPPER).append(superposición);
      } // Estática
      ;
  
      PushMenu._jQueryInterface = función _jQueryInterface(operación) {
        devuelve esto. cada uno (función () {
          var data = $__default["default"](this).data(DATA_KEY$5);
  
          var _options = $__default["default"].extend({}, Default$5, $__default["default"](this).data());
  
          si (!datos) {
            datos = nuevo PushMenu(esto, _opciones);
            $__predeterminado["predeterminado"](esto).datos(DATA_KEY$5, datos);
          }
  
          if (tipo de operación === 'cadena' && /collapse|expand|alternar/.test(operación)) {
            datos[operación]();
          }
        });
      };
  
      volver PushMenu;
    }();
    /**
     * API de datos
     * ================================================ ===
     */
  
  
    $__default["predeterminado"](documento).on('clic', SELECTOR_TOGGLE_BUTTON$1, función (evento) {
      event.preventDefault();
      botón var = evento.objetivo actual;
  
      if ($__predeterminado["predeterminado"](botón).data('widget') !== 'pushmenu') {
        botón = $__predeterminado["predeterminado"](botón).más cercano(SELECTOR_TOGGLE_BUTTON$1);
      }
  
      PushMenu._jQueryInterface.call($__default["default"](botón), 'alternar');
    });
    $__predeterminado["predeterminado"](ventana).on('cargar', función () {
      PushMenu._jQueryInterface.call($__default["default"](SELECTOR_TOGGLE_BUTTON$1));
    });
    /**
     * API de jQuery
     * ================================================ ===
     */
  
    $__default["predeterminado"].fn[NOMBRE$5] = PushMenu._jQueryInterface;
    $__default["predeterminado"].fn[NOMBRE$5].Constructor = PushMenu;
  
    $__predeterminado["predeterminado"].fn[NOMBRE$5].noConflict = función () {
      $__predeterminado["predeterminado"].fn[NOMBRE$5] = JQUERY_NO_CONFLICT$5;
      devolver PushMenu._jQueryInterface;
    };
  
    /**
     * --------------------------------------------
     * AdminLTE SidebarSearch.js
     * Licencia MIT
     * --------------------------------------------
     */
    /**
     * Constantes
     * ================================================ ===
     */
  
    var NOMBRE$4 = 'SidebarSearch';
    var DATA_KEY$4 = 'lte.sidebar-search';
    var JQUERY_NO_CONFLICT$4 = $__predeterminado["predeterminado"].fn[NOMBRE$4];
    var CLASS_NAME_OPEN$2 = 'sidebar-search-open';
    var CLASS_NAME_ICON_SEARCH = 'fa-búsqueda';
    var CLASS_NAME_ICON_CLOSE = 'fa-times';
    var CLASS_NAME_HEADER = 'nav-header';
    var CLASS_NAME_SEARCH_RESULTS = 'sidebar-search-results';
    var CLASS_NAME_LIST_GROUP = 'lista-grupo';
    var SELECTOR_DATA_WIDGET$1 = '[widget de datos="barra-lateral-buscar"]';
    var SELECTOR_SIDEBAR = '.main-sidebar .nav-sidebar';
    var SELECTOR_NAV_LINK = '.nav-enlace';
    var SELECTOR_NAV_TREEVIEW = '.nav-treeview';
    var SELECTOR_SEARCH_INPUT$1 = SELECTOR_DATA_WIDGET$1 + " .form-control";
    var SELECTOR_SEARCH_BUTTON = SELECTOR_DATA_WIDGET$1 + " .btn";
    var SELECTOR_SEARCH_ICON = SELECTOR_SEARCH_BUTTON + "i";
    var SELECTOR_SEARCH_LIST_GROUP = "." + NOMBRE_CLASE_LISTA_GRUPO;
    var SELECTOR_SEARCH_RESULTS = "." + CLASS_NAME_SEARCH_RESULTS;
    var SELECTOR_SEARCH_RESULTS_GROUP = SELECTOR_SEARCH_RESULTS + " ." + NOMBRE_CLASE_LISTA_GRUPO;
    var Predeterminado$4 = {
      flechaSigno: '->',
      minLongitud: 3,
      resultados máximos: 7,
      nombre destacado: verdadero,
      ruta de resaltado: falso,
      HighlightClass: 'texto-luz',
      notFoundText: '¡No se encontró ningún elemento!'
    };
    var elementos de búsqueda = [];
    /**
     * Definición de clase
     * ================================================ ===
     */
  
    var SidebarSearch = /*#__PURE__*/función () {
      función SidebarSearch(_elemento, _opciones) {
        este.elemento = _elemento;
        this.options = $__default["default"].extend({}, Default$4, _options);
        this.items = [];
      } // Público
  
  
      var _proto = SidebarSearch.prototype;
  
      _proto.init = función init() {
        var _esto = esto;
  
        si ($__predeterminado["predeterminado"](SELECTOR_DATA_WIDGET$1).longitud === 0) {
          devolver;
        }
  
        if ($__predeterminado["predeterminado"](SELECTOR_DATA_WIDGET$1).next(SELECTOR_SEARCH_RESULTS).longitud === 0) {
          $__predeterminado["predeterminado"](SELECTOR_DATA_WIDGET$1).después($__predeterminado["predeterminado"]('<div />', {
            clase: CLASS_NAME_SEARCH_RESULTS
          }));
        }
  
        if ($__predeterminado["predeterminado"](SELECTOR_SEARCH_RESULTS).niños(SELECTOR_SEARCH_LIST_GROUP).longitud === 0) {
          $__default["default"](SELECTOR_SEARCH_RESULTS).append($__default["default"]('<div />', {
            clase: CLASS_NAME_LIST_GROUP
          }));
        }
  
        esto._addNotFound();
  
        $__predeterminado["predeterminado"](SELECTOR_BARRA LATERAL).niños().each(función (i, niño) {
          _this._parseItem(hijo);
        });
      };
  
      _proto.buscar = función buscar() {
        var _esto2 = esto;
  
        var searchValue = $__default["default"](SELECTOR_SEARCH_INPUT$1).val().toLowerCase();
  
        if (buscarValor.longitud < this.options.minLength) {
          $__predeterminado["predeterminado"](SELECTOR_SEARCH_RESULTS_GROUP).empty();
  
          esto._addNotFound();
  
          esto.cerrar();
          devolver;
        }
  
        var searchResults = SearchItems.filter(función (elemento) {
          devuelve item.name.toLowerCase().includes(searchValue);
        });
        var endResults = $__default["default"](searchResults.slice(0, this.options.maxResults));
        $__predeterminado["predeterminado"](SELECTOR_SEARCH_RESULTS_GROUP).empty();
  
        if (resultadosfinales.longitud === 0) {
          esto._addNotFound();
        } demás {
          endResults.each(función (i, resultado) {
            $__default["predeterminado"](SELECTOR_SEARCH_RESULTS_GROUP).append(_this2._renderItem(escape(result.name), encodeURI(result.link), result.path));
          });
        }
  
        esto.abrir();
      };
  
      _proto.open = función abrir() {
        $__predeterminado["predeterminado"](SELECTOR_DATA_WIDGET$1).parent().addClass(CLASS_NAME_OPEN$2);
        $__default["predeterminado"](SELECTOR_SEARCH_ICON).removeClass(CLASS_NAME_ICON_SEARCH).addClass(CLASS_NAME_ICON_CLOSE);
      };
  
      _proto.close = función cerrar() {
        $__predeterminado["predeterminado"](SELECTOR_DATA_WIDGET$1).parent().removeClass(CLASS_NAME_OPEN$2);
        $__default["predeterminado"](SELECTOR_SEARCH_ICON).removeClass(CLASS_NAME_ICON_CLOSE).addClass(CLASS_NAME_ICON_SEARCH);
      };
  
      _proto.alternar = función alternar() {
        if ($__predeterminado["predeterminado"](SELECTOR_DATA_WIDGET$1).parent().hasClass(CLASS_NAME_OPEN$2)) {
          esto.cerrar();
        } demás {
          esto.abrir();
        }
      } // Privado
      ;
  
      _proto._parseItem = función _parseItem(elemento, ruta) {
        var _this3 = esto;
  
        si (ruta === vacío 0) {
          camino = [];
        }
  
        if ($__default["default"](elemento).hasClass(CLASS_NAME_HEADER)) {
          devolver;
        }
  
        var itemObject = {};
        var navLink = $__default["default"](item).clone().find("> " + SELECTOR_NAV_LINK);
        var navTreeview = $__default["default"](item).clone().find("> " + SELECTOR_NAV_TREEVIEW);
        var enlace = navLink.attr('href');
        var nombre = navLink.find('p').niños().remove().end().text();
        itemObject.name = this._trimText(nombre);
        itemObject.enlace = enlace;
        elementoObjeto.ruta = ruta;
  
        if (navTreeview.longitud === 0) {
          BuscarItems.push(itemObject);
        } demás {
          var newPath = itemObject.path.concat([itemObject.name]);
          navTreeview.children().each(función (i, child) {
            _this3._parseItem(hijo, nuevaRuta);
          });
        }
      };
  
      _proto._trimText = función _trimText(texto) {
        return $.trim(text.replace(/(\r\n|\n|\r)/gm, ' '));
      };
  
      _proto._renderItem = function _renderItem(nombre, enlace, ruta) {
        var _this4 = esto;
  
        ruta = ruta.join(" " + this.options.arrowSign + " ");
        nombre = unescape(nombre);
        enlace = decodeURI(enlace);
  
        if (this.options.highlightName || this.options.highlightPath) {
          var searchValue = $__default["default"](SELECTOR_SEARCH_INPUT$1).val().toLowerCase();
          var regExp = new RegExp(buscarValor, 'gi');
  
          if (this.options.highlightName) {
            nombre = nombre.reemplazar(regExp, function (str) {
              return "<strong class=\"" + _this4.options.highlightClass + "\">" + str + "</strong>";
            });
          }
  
          if (this.options.highlightPath) {
            ruta = ruta.reemplazar(regExp, function (str) {
              return "<strong class=\"" + _this4.options.highlightClass + "\">" + str + "</strong>";
            });
          }
        }
  
        var groupItemElement = $__predeterminado["predeterminado"]('<a/>', {
          href: decodeURIComponent(enlace),
          clase: 'lista-grupo-elemento'
        });
        var searchTitleElement = $__default["default"]('<div/>', {
          clase: 'buscar-título'
        }).html(nombre);
        var searchPathElement = $__default["default"]('<div/>', {
          clase: 'ruta de búsqueda'
        }).html(ruta);
        groupItemElement.append(searchTitleElement).append(searchPathElement);
        volver groupItemElement;
      };
  
      _proto._addNotFound = función _addNotFound() {
        $__default["default"](SELECTOR_SEARCH_RESULTS_GROUP).append(this._renderItem(this.options.notFoundText, '#', []));
      } // Estática
      ;
  
      SidebarSearch._jQueryInterface = función _jQueryInterface(config) {
        var data = $__default["default"](this).data(DATA_KEY$4);
  
        si (!datos) {
          datos = $__predeterminado["predeterminado"](esto).datos();
        }
  
        var _options = $__default["default"].extend({}, Default$4, typeof config === 'object' ? config : data);
  
        var plugin = new SidebarSearch($__default["default"](this), _options);
        $__default["default"](this).data(DATA_KEY$4, typeof config === 'object' ? config : data);
  
        if (typeof config === 'string' && /init|toggle|close|open|search/.test(config)) {
          complemento[config]();
        } demás {
          plugin.init();
        }
      };
  
      volver SidebarSearch;
    }();
    /**
     * API de datos
     * ================================================ ===
     */
  
  
    $__default["predeterminado"](documento).on('clic', SELECTOR_SEARCH_BUTTON, función (evento) {
      event.preventDefault();
  
      SidebarSearch._jQueryInterface.call($__default["default"](SELECTOR_DATA_WIDGET$1), 'alternar');
    });
    $__default["default"](documento).on('keyup', SELECTOR_SEARCH_INPUT$1, función (evento) {
      if (evento.keyCode == 38) {
        event.preventDefault();
        $__default["default"](SELECTOR_SEARCH_RESULTS_GROUP).children().last().focus();
        devolver;
      }
  
      if (evento.keyCode == 40) {
        event.preventDefault();
        $__predeterminado["predeterminado"](SELECTOR_SEARCH_RESULTS_GROUP).niños().primero().focus();
        devolver;
      }
  
      establecerTiempo de espera (función () {
        SidebarSearch._jQueryInterface.call($__default["default"](SELECTOR_DATA_WIDGET$1), 'buscar');
      }, 100);
    });
    $__default["default"](documento).on('keydown', SELECTOR_SEARCH_RESULTS_GROUP, función (evento) {
      var $enfocado = $__default["default"](':focus');
  
      if (evento.keyCode == 38) {
        event.preventDefault();
  
        if ($focused.is(':primer-hijo')) {
          $enfocado.hermanos().último().focus();
        } demás {
          $enfocado.prev().focus();
        }
      }
  
      if (evento.keyCode == 40) {
        event.preventDefault();
  
        if ($enfocado.es(':último-hijo')) {
          $enfocado.hermanos().primero().focus();
        } demás {
          $enfocado.siguiente().focus();
        }
      }
    });
    $__predeterminado["predeterminado"](ventana).on('cargar', función () {
      SidebarSearch._jQueryInterface.call($__default["default"](SELECTOR_DATA_WIDGET$1), 'init');
    });
    /**
     * API de jQuery
     * ================================================ ===
     */
  
    $__default["predeterminado"].fn[NOMBRE$4] = SidebarSearch._jQueryInterface;
    $__default["default"].fn[NOMBRE$4].Constructor = SidebarSearch;
  
    $__predeterminado["predeterminado"].fn[NOMBRE$4].noConflict = función () {
      $__predeterminado["predeterminado"].fn[NOMBRE$4] = JQUERY_NO_CONFLICT$4;
      volver SidebarSearch._jQueryInterface;
    };
  
    /**
     * --------------------------------------------
     * AdminLTE NavbarSearch.js
     * Licencia MIT
     * --------------------------------------------
     */
    /**
     * Constantes
     * ================================================ ===
     */
  
    var NOMBRE$3 = 'NavbarSearch';
    var DATA_KEY$3 = 'lte.navbar-búsqueda';
    var JQUERY_NO_CONFLICT$3 = $__predeterminado["predeterminado"].fn[NOMBRE$3];
    var SELECTOR_TOGGLE_BUTTON = '[widget de datos="navbar-search"]';
    var SELECTOR_SEARCH_BLOCK = '.navbar-search-block';
    var SELECTOR_SEARCH_INPUT = '.form-control';
    var CLASS_NAME_OPEN$1 = 'navbar-search-open';
    var Predeterminado$3 = {
      resetOnClose: verdadero,
      objetivo: SELECTOR_SEARCH_BLOCK
    };
    /**
     * Definición de clase
     * ================================================ ===
     */
  
    var NavbarSearch = /*#__PURE__*/función () {
      función NavbarSearch(_elemento, _opciones) {
        este._elemento = _elemento;
        this._config = $__predeterminado["predeterminado"].extend({}, Predeterminado$3, _opciones);
      } // Público
  
  
      var _proto = NavbarSearch.prototype;
  
      _proto.open = función abrir() {
        $__default["default"](this._config.target).css('display', 'flex').hide().fadeIn().addClass(CLASS_NAME_OPEN$1);
        $__default["default"](this._config.target + " " + SELECTOR_SEARCH_INPUT).focus();
      };
  
      _proto.close = función cerrar() {
        $__default["default"](this._config.target).fadeOut().removeClass(CLASS_NAME_OPEN$1);
  
        si (this._config.resetOnClose) {
          $__default["default"](this._config.target + " " + SELECTOR_SEARCH_INPUT).val('');
        }
      };
  
      _proto.alternar = función alternar() {
        if ($__default["default"](this._config.target).hasClass(CLASS_NAME_OPEN$1)) {
          esto.cerrar();
        } demás {
          esto.abrir();
        }
      } // Estática
      ;
  
      NavbarSearch._jQueryInterface = función _jQueryInterface(opciones) {
        devuelve esto. cada uno (función () {
          var data = $__default["default"](this).data(DATA_KEY$3);
  
          var _options = $__default["default"].extend({}, Default$3, $__default["default"](this).data());
  
          si (!datos) {
            data = new NavbarSearch(this, _options);
            $__predeterminado["predeterminado"](esto).datos(DATA_KEY$3, datos);
          }
  
          if (!/alternar|cerrar|abrir/.test(opciones)) {
            throw new Error("Método indefinido" + opciones);
          }
  
          datos[opciones]();
        });
      };
  
      volver NavbarSearch;
    }();
    /**
     * API de datos
     * ================================================ ===
     */
  
  
    $__default["predeterminado"](documento).on('clic', SELECTOR_TOGGLE_BUTTON, función (evento) {
      event.preventDefault();
      botón var = $__predeterminado["predeterminado"](evento.objetivoactual);
  
      if (button.data('widget') !== 'navbar-search') {
        boton = boton.mas cercano(SELECTOR_TOGGLE_BUTTON);
      }
  
      NavbarSearch._jQueryInterface.call(botón, 'alternar');
    });
    /**
     * API de jQuery
     * ================================================ ===
     */
  
    $__default["predeterminado"].fn[NOMBRE$3] = NavbarSearch._jQueryInterface;
    $__default["predeterminado"].fn[NOMBRE$3].Constructor = NavbarSearch;
  
    $__predeterminado["predeterminado"].fn[NOMBRE$3].noConflict = función () {
      $__predeterminado["predeterminado"].fn[NOMBRE$3] = JQUERY_NO_CONFLICT$3;
      volver NavbarSearch._jQueryInterface;
    };
  
    /**
     * --------------------------------------------
     * AdminLTE Toast.js
     * Licencia MIT
     * --------------------------------------------
     */
    /**
     * Constantes
     * ================================================ ===
     */
  
    var NOMBRE$2 = 'Tostadas';
    var DATA_KEY$2 = 'lte.tostadas';
    var EVENT_KEY$1 = "." + DATA_KEY$2;
    var JQUERY_NO_CONFLICT$2 = $__default["default"].fn[NOMBRE$2];
    var EVENT_INIT = "inicio" + EVENT_KEY$1;
    var EVENT_CREATED = "creado" + EVENT_KEY$1;
    var EVENT_REMOVED = "eliminado" + EVENT_KEY$1;
    var SELECTOR_CONTAINER_TOP_RIGHT = '#toastsContainerTopRight';
    var SELECTOR_CONTAINER_TOP_LEFT = '#toastsContainerTopLeft';
    var SELECTOR_CONTAINER_BOTTOM_RIGHT = '#toastsContainerBottomRight';
    var SELECTOR_CONTAINER_BOTTOM_LEFT = '#toastsContainerBottomLeft';
    var CLASS_NAME_TOP_RIGHT = 'brindis-arriba-derecha';
    var CLASS_NAME_TOP_LEFT = 'tostadas-superior-izquierda';
    var CLASS_NAME_BOTTOM_RIGHT = 'brindis-abajo-derecha';
    var CLASS_NAME_BOTTOM_LEFT = 'tostadas-abajo-izquierda';
    var POSITION_TOP_RIGHT = 'arribaDerecha';
    var POSITION_TOP_LEFT = 'superior izquierda';
    var POSITION_BOTTOM_RIGHT = 'abajoDerecha';
    var POSITION_BOTTOM_LEFT = 'abajo a la izquierda';
    var Predeterminado$2 = {
      posición: POSITION_TOP_RIGHT,
      fijo: cierto,
      ocultar automáticamente: falso,
      eliminación automática: cierto,
      retraso: 1000,
      desvanecerse: cierto,
      icono: nulo,
      imagen: nula,
      imagenAlt: nulo,
      altura de la imagen: '25px',
      título: nulo,
      subtítulo: nulo,
      cerrar: cierto,
      cuerpo: nulo,
      clase: nulo
    };
    /**
     * Definición de clase
     * ================================================ ===
     */
  
    var Tostadas = /*#__PURE__*/función () {
      function Tostadas(elemento, config) {
        esto._config = config;
  
        this._prepareContainer();
  
        $__default["default"]('cuerpo').trigger($__default["default"].Event(EVENT_INIT));
      } // Público
  
  
      var _proto = Tostadas.prototipo;
  
      _proto.create = función crear() {
        var tostado = $__default["default"]('<div class="toast" role="alert" aria-live="asertive" aria-atomic="true"/>');
        brindis.datos('autohide', this._config.autohide);
        brindis.datos('animación', this._config.fade);
  
        si (esto._config.clase) {
          tostadas.addClass(this._config.class);
        }
  
        if (this._config.delay && this._config.delay != 500) {
          brindis.datos('retraso', this._config.retraso);
        }
  
        var toastHeader = $__default["default"]('<div class="toast-header">');
  
        if (this._config.image != null) {
          var toastImage = $__default["default"]('<img />').addClass('redondeado mr-2').attr('src', this._config.image).attr('alt', this. _config.imageAlt);
  
          if (this._config.imageHeight != null) {
            toastImage.height(this._config.imageHeight).width('auto');
          }
  
          brindisHeader.append(imagenbrindis);
        }
  
        if (this._config.icon != null) {
          toastHeader.append($__default["default"]('<i />').addClass('mr-2').addClass(this._config.icon));
        }
  
        if (this._config.title != null) {
          toastHeader.append($__default["default"]('<strong />').addClass('mr-auto').html(this._config.title));
        }
  
        if (this._config.subtitle != null) {
          toastHeader.append($__default["default"]('<pequeño />').html(this._config.subtitle));
        }
  
        si (this._config.close == verdadero) {
          var toastClose = $__default["default"]('<button data-dismiss="toast" />').attr('type', 'button').addClass('ml-2 mb-1 close'). attr('aria-label', 'Cerrar').append('<span aria-hidden="true">×</span>');
  
          if (this._config.title == nulo) {
            brindisCerrar.toggleClass('ml-2 ml-auto');
          }
  
          brindisHeader.append(brindisCerrar);
        }
  
        tostadas.append(toastHeader);
  
        if (this._config.body != null) {
          brindis.append($__default["default"]('<div class="toast-body" />').html(this._config.body));
        }
  
        $__default["default"](this._getContainerId()).prepend(toast);
        var $cuerpo = $__predeterminado["predeterminado"]('cuerpo');
        $body.trigger($__default["default"].Event(EVENT_CREATED));
        tostadas.tostadas('mostrar');
  
        si (esto._config.autoremove) {
          tostada.on('oculto.bs.tostada', función () {
            $__predeterminado["predeterminado"](esto).retraso(200).remove();
            $body.trigger($__default["default"].Event(EVENT_REMOVED));
          });
        }
      } // Estática
      ;
  
      _proto._getContainerId = función _getContainerId() {
        if (this._config.position == POSITION_TOP_RIGHT) {
          devuelve SELECTOR_CONTAINER_TOP_RIGHT;
        }
  
        if (this._config.position == POSITION_TOP_LEFT) {
          devuelve SELECTOR_CONTAINER_TOP_LEFT;
        }
  
        if (this._config.position == POSITION_BOTTOM_RIGHT) {
          devuelve SELECTOR_CONTAINER_BOTTOM_RIGHT;
        }
  
        if (this._config.position == POSITION_BOTTOM_LEFT) {
          devuelve SELECTOR_CONTAINER_BOTTOM_LEFT;
        }
      };
  
      _proto._prepareContainer = función _prepareContainer() {
        if ($__default["default"](this._getContainerId()).longitud === 0) {
          var container = $__default["default"]('<div />').attr('id', this._getContainerId().replace('#', ''));
  
          if (this._config.position == POSITION_TOP_RIGHT) {
            container.addClass(CLASS_NAME_TOP_RIGHT);
          } más si (this._config.position == POSITION_TOP_LEFT) {
            container.addClass(CLASS_NAME_TOP_LEFT);
          } más si (this._config.position == POSITION_BOTTOM_RIGHT) {
            container.addClass(CLASS_NAME_BOTTOM_RIGHT);
          } más si (this._config.position == POSITION_BOTTOM_LEFT) {
            container.addClass(CLASS_NAME_BOTTOM_LEFT);
          }
  
          $__default["default"]('cuerpo').append(contenedor);
        }
  
        si (this._config.fixed) {
          $__default["default"](this._getContainerId()).addClass('fixed');
        } demás {
          $__default["default"](this._getContainerId()).removeClass('fixed');
        }
      } // Estática
      ;
  
      Toasts._jQueryInterface = función _jQueryInterface(opción, configuración) {
        devuelve esto. cada uno (función () {
          var _options = $__default["default"].extend({}, Default$2, config);
  
          var brindis = new Toasts($__default["default"](this), _options);
  
          if (opción === 'crear') {
            brindis[opción]();
          }
        });
      };
  
      tostadas de vuelta;
    }();
    /**
     * API de jQuery
     * ================================================ ===
     */
  
  
    $__default["predeterminado"].fn[NOMBRE$2] = Toasts._jQueryInterface;
    $__default["default"].fn[NOMBRE$2].Constructor = Brindis;
  
    $__predeterminado["predeterminado"].fn[NOMBRE$2].noConflict = función () {
      $__predeterminado["predeterminado"].fn[NOMBRE$2] = JQUERY_NO_CONFLICT$2;
      devolver Tostadas._jQueryInterface;
    };
  
    /**
     * --------------------------------------------
     * AdminLTE TodoList.js
     * Licencia MIT
     * --------------------------------------------
     */
    /**
     * Constantes
     * ================================================ ===
     */
  
    var NOMBRE$1 = 'TodoLista';
    var DATA_KEY$1 = 'lte.todolist';
    var JQUERY_NO_CONFLICT$1 = $__predeterminado["predeterminado"].fn[NOMBRE$1];
    var SELECTOR_DATA_TOGGLE = '[widget de datos="lista-de-todo"]';
    var CLASS_NAME_TODO_LIST_DONE = 'hecho';
    var Predeterminado$1 = {
      onCheck: función onCheck(elemento) {
        Devolver objeto;
      },
      onUnCheck: función onUnCheck(item) {
        Devolver objeto;
      }
    };
    /**
     * Definición de clase
     * ================================================ ===
     */
  
    var TodoList = /*#__PURE__*/función () {
      función TodoList(elemento, configuración) {
        esto._config = config;
        este._elemento = elemento;
  
        esto._init();
      } // Público
  
  
      var _proto = TodoList.prototype;
  
      _proto.toggle = function alternar(elemento) {
        item.parents('li').toggleClass(CLASS_NAME_TODO_LIST_DONE);
  
        if (!$__default["predeterminado"](elemento).prop('marcado')) {
          this.unCheck($__default["default"](item));
          devolver;
        }
  
        this.check(elemento);
      };
  
      _proto.check = función check(item) {
        this._config.onCheck.call(elemento);
      };
  
      _proto.unCheck = función unCheck(item) {
        this._config.onUnCheck.call(elemento);
      } // Privado
      ;
  
      _proto._init = función _init() {
        var _esto = esto;
  
        var $toggleSelector = this._element;
        $toggleSelector.find('input:checkbox:checked').parents('li').toggleClass(CLASS_NAME_TODO_LIST_DONE);
        $toggleSelector.on('cambio', 'entrada:casilla de verificación', función (evento) {
          _this.toggle($__default["default"](event.target));
        });
      } // Estática
      ;
  
      TodoList._jQueryInterface = función _jQueryInterface(config) {
        devuelve esto. cada uno (función () {
          var data = $__default["default"](this).data(DATA_KEY$1);
  
          si (!datos) {
            datos = $__predeterminado["predeterminado"](esto).datos();
          }
  
          var _options = $__default["default"].extend({}, Default$1, typeof config === 'object' ? config : data);
  
          var plugin = new TodoList($__default["default"](this), _options);
          $__default["default"](this).data(DATA_KEY$1, typeof config === 'object' ? config : data);
  
          si (config === 'inicio') {
            complemento[config]();
          }
        });
      };
  
      volver TodoLista;
    }();
    /**
     * API de datos
     * ================================================ ===
     */
  
  
    $__predeterminado["predeterminado"](ventana).on('cargar', función () {
      TodoList._jQueryInterface.call($__default["default"](SELECTOR_DATA_TOGGLE));
    });
    /**
     * API de jQuery
     * ================================================ ===
     */
  
    $__default["predeterminado"].fn[NOMBRE$1] = TodoList._jQueryInterface;
    $__default["default"].fn[NOMBRE$1].Constructor = TodoList;
  
    $__predeterminado["predeterminado"].fn[NOMBRE$1].noConflict = función () {
      $__predeterminado["predeterminado"].fn[NOMBRE$1] = JQUERY_NO_CONFLICT$1;
      devolver TodoList._jQueryInterface;
    };
  
    /**
     * --------------------------------------------
     * AdminLTE Treeview.js
     * Licencia MIT
     * --------------------------------------------
     */
    /**
     * Constantes
     * ================================================ ===
     */
  
    var NOMBRE = 'Vista de árbol';
    var DATA_KEY = 'lte.treeview';
    var EVENT_KEY = "." + CLAVE_DATOS;
    var JQUERY_NO_CONFLICT = $__default["default"].fn[NOMBRE];
    var EVENT_EXPANDED = "expandido" + EVENT_KEY;
    var EVENT_COLLAPSED = "contraído" + EVENT_KEY;
    var EVENT_LOAD_DATA_API = "cargar" + EVENT_KEY;
    var SELECTOR_LI = '.elemento de navegación';
    var SELECTOR_LINK = '.nav-enlace';
    var SELECTOR_TREEVIEW_MENU = '.nav-treeview';
    var SELECTOR_OPEN = '.menu-abrir';
    var SELECTOR_DATA_WIDGET = '[widget de datos="treeview"]';
    var CLASS_NAME_OPEN = 'menú-abrir';
    var CLASS_NAME_IS_OPENING = 'menu-is-opening';
    var CLASS_NAME_SIDEBAR_COLLAPSED = 'colapso de la barra lateral';
    var Predeterminado = {
      disparador: SELECTOR_DATA_WIDGET + " " + SELECTOR_LINK,
      velocidad de animación: 300,
      acordeón: cierto,
      expandir barra lateral: falso,
      sidebarButtonSelector: '[widget de datos="pushmenu"]'
    };
    /**
     * Definición de clase
     * ================================================ ===
     */
  
    var Treeview = /*#__PURE__*/función () {
      función Vista de árbol (elemento, configuración) {
        esto._config = config;
        este._elemento = elemento;
      } // Público
  
  
      var _proto = Treeview.prototipo;
  
      _proto.init = función init() {
        $__default["default"]("" + SELECTOR_LI + SELECTOR_OPEN + " " + SELECTOR_TREEVIEW_MENU + SELECTOR_OPEN).css('display', 'block');
  
        this._setupListeners();
      };
  
      _proto.expand = función expandir(treeviewMenu, parentLi) {
        var _esto = esto;
  
        var expandEvent = $__default["default"].Event(EVENT_EXPANDED);
  
        si (esto._config.acordeón) {
          var openMenuLi = parentLi.siblings(SELECTOR_OPEN).first();
          var openTreeview = openMenuLi.find(SELECTOR_TREEVIEW_MENU).primero();
          this.collapse(openTreeview, openMenuLi);
        }
  
        parentLi.addClass(CLASS_NAME_IS_OPENING);
        treeviewMenu.stop().slideDown(this._config.animationSpeed, función () {
          parentLi.addClass(CLASS_NAME_OPEN);
          $__default["default"](_this._element).trigger(expandedEvent);
        });
  
        si (this._config.expandSidebar) {
          this._expandSidebar();
        }
      };
  
      _proto.collapse = colapso de la función (treeviewMenu, parentLi) {
        var _esto2 = esto;
  
        var evento colapsado = $__predeterminado["predeterminado"].Evento(EVENTO_COLLAPSADO);
        parentLi.removeClass(CLASS_NAME_IS_OPENING + " " + CLASS_NAME_OPEN);
        treeviewMenu.stop().slideUp(this._config.animationSpeed, función () {
          $__default["default"](_this2._element).trigger(collapsedEvent);
          treeviewMenu.find(SELECTOR_OPEN + " > " + SELECTOR_TREEVIEW_MENU).slideUp();
          treeviewMenu.find(SELECTOR_OPEN).removeClass(CLASS_NAME_IS_OPENING + " " + CLASS_NAME_OPEN);
        });
      };
  
      _proto.toggle = function alternar(evento) {
        var $objetivo relativo = $__predeterminado["predeterminado"](evento.objetivoactual);
        var $padre = $objetivo relativo.padre();
        var treeviewMenu = $parent.find("> " + SELECTOR_TREEVIEW_MENU);
  
        si (!treeviewMenu.is(SELECTOR_TREEVIEW_MENU)) {
          if (!$padre.es(SELECTOR_LI)) {
            treeviewMenu = $parent.parent().find("> " + SELECTOR_TREEVIEW_MENU);
          }
  
          si (!treeviewMenu.is(SELECTOR_TREEVIEW_MENU)) {
            devolver;
          }
        }
  
        event.preventDefault();
        var parentLi = $objetivo relativo.parents(SELECTOR_LI).primero();
        var isOpen = parentLi.hasClass(CLASS_NAME_OPEN);
  
        si (está abierto) {
          this.collapse($__default["default"](treeviewMenu), parentLi);
        } demás {
          this.expand($__default["default"](treeviewMenu), parentLi);
        }
      } // Privado
      ;
  
      _proto._setupListeners = función _setupListeners() {
        var _this3 = esto;
  
        var elementId = this._element.attr('id') !== indefinido ? "#" + this._element.attr('id') : '';
        $__default["default"](documento).on('clic', "" + elementId + this._config.trigger, función (evento) {
          _this3.toggle(evento);
        });
      };
  
      _proto._expandSidebar = función _expandSidebar() {
        if ($__default["default"]('cuerpo').hasClass(CLASS_NAME_SIDEBAR_COLLAPSED)) {
          $__default["default"](this._config.sidebarButtonSelector).PushMenu('expand');
        }
      } // Estática
      ;
  
      Treeview._jQueryInterface = función _jQueryInterface(config) {
        devuelve esto. cada uno (función () {
          var data = $__default["default"](this).data(DATA_KEY);
  
          var _options = $__default["default"].extend({}, Default, $__default["default"](this).data());
  
          si (!datos) {
            data = new Treeview($__default["default"](this), _options);
            $__predeterminado["predeterminado"](esto).datos(DATA_KEY, datos);
          }
  
          si (config === 'inicio') {
            datos[config]();
          }
        });
      };
  
      volver Vista de árbol;
    }();
    /**
     * API de datos
     * ================================================ ===
     */
  
  
    $__predeterminado["predeterminado"](ventana).on(EVENTO_LOAD_DATA_API, función () {
      $__predeterminado["predeterminado"](SELECTOR_DATA_WIDGET).each(función () {
        Treeview._jQueryInterface.call($__default["default"](this), 'init');
      });
    });
    /**
     * API de jQuery
     * ================================================ ===
     */
  
    $__default["predeterminado"].fn[NOMBRE] = Treeview._jQueryInterface;
    $__default["default"].fn[NOMBRE].Constructor = Treeview;
  
    $__predeterminado["predeterminado"].fn[NOMBRE].noConflict = función () {
      $__predeterminado["predeterminado"].fn[NOMBRE] = JQUERY_NO_CONFLICT;
      volver Treeview._jQueryInterface;
    };
  
    exportaciones.CardRefresh = CardRefresh;
    exportaciones.CardWidget = CardWidget;
    exportaciones.ControlSidebar = ControlSidebar;
    exportaciones.DirectChat = DirectChat;
    exportaciones.Dropdown = Desplegable;
    exportaciones.ExpandableTable = ExpandableTable;
    exportaciones.Fullscreen = Pantalla completa;
    exportaciones.IFrame = IFrame;
    exportaciones.Diseño = Diseño;
    exportaciones.NavbarSearch = NavbarSearch;
    exportaciones.PushMenu = PushMenu;
    exportaciones.SidebarSearch = SidebarSearch;
    exportaciones.Tostadas = Tostadas;
    exportaciones.TodoList = TodoList;
    exportaciones.Treeview = Treeview;
  
    Object.defineProperty(exportaciones, '__esModule', {valor: verdadero});
  
  }));
  //# sourceMappingURL=adminlte.js.map