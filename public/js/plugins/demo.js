/**
 * Menú de demostración AdminLTE
 * ------------------
 * No debe usar este archivo en producción.
 * Este archivo es solo para fines de demostración.
 */

/* eslint-disable camelcase */

(función ($) {
    'uso estricto'
  
    establecerTiempo de espera (función () {
      if (window.___browserSync___ === indefinido && Number(localStorage.getItem('AdminLTE:Demo:MessageShowed')) < Fecha.ahora()) {
        localStorage.setItem('AdminLTE:Demostración:Mensaje mostrado', (Fecha.ahora()) + (15 * 60 * 1000))
        // eslint-disable-next-line sin alerta
        alert('¡Cargas "demo.js" de AdminLTE\n, este archivo solo se crea con fines de prueba!')
      }
    }, 1000)
  
    función mayúsculaPrimeraLetra(cadena) {
      devuelve cadena.charAt(0).toUpperCase() + cadena.slice(1)
    }
  
    function createSkinBlock(colores, callback, noneSelected) {
      var $bloque = $('<seleccionar />', {
        clase: ningunoSeleccionado? 'custom-select mb-3 border-0' : 'custom-select mb-3 text-light border-0 ' + colores[0].replace(/accent-|navbar-/, 'bg-')
      })
  
      si (ninguno seleccionado) {
        var $predeterminado = $('<opción />', {
          texto: 'Ninguno seleccionado'
        })
  
        $block.append($predeterminado)
      }
  
      colores.forEach(función (color) {
        var $color = $('<opción />', {
          clase: (tipo de color === 'objeto' ? color.join(' ') : color).replace('navbar-', 'bg-').replace('accent-', 'bg-'),
          texto: capitalizeFirstLetter((typeof color === 'objeto' ? color.join(' ') : color).replace(/navbar-|accent-|bg-/, '').replace('-', ' ' ))
        })
  
        $bloque.append($color)
      })
      si (devolución de llamada) {
        $block.on('cambio', devolución de llamada)
      }
  
      devolver $ bloque
    }
  
    var $barra lateral = $('.control-barra lateral')
    var $contenedor = $('<div />', {
      clase: 'p-3 control-barra-lateral-contenido'
    })
  
    $sidebar.append($contenedor)
  
    // Casillas de verificación
  
    $contenedor.append(
      '<h5>Personalizar AdminLTE</h5><hr class="mb-2"/>'
    )
  
    var $modo_oscuro_casilla de verificación = $('<entrada />', {
      escriba: 'casilla de verificación',
      valor: 1,
      marcado: $('cuerpo').hasClass('modo oscuro'),
      clase: 'mr-1'
    }).on('clic', función () {
      if ($(esto).es(':marcado')) {
        $('cuerpo').addClass('modo oscuro')
      } demás {
        $('cuerpo').removeClass('modo oscuro')
      }
    })
    var $dark_mode_container = $('<div />', { class: 'mb-4' }).append($dark_mode_checkbox).append('<span>Modo oscuro</span>')
    $contenedor.append($dark_mode_container)
  
    $container.append('<h6>Opciones de encabezado</h6>')
    var $header_fixed_checkbox = $('<entrada />', {
      escriba: 'casilla de verificación',
      valor: 1,
      marcado: $('cuerpo').hasClass('layout-navbar-fixed'),
      clase: 'mr-1'
    }).on('clic', función () {
      if ($(esto).es(':marcado')) {
        $('cuerpo').addClass('layout-navbar-fixed')
      } demás {
        $('cuerpo').removeClass('layout-navbar-fixed')
      }
    })
    var $header_fixed_container = $('<div />', { class: 'mb-1' }).append($header_fixed_checkbox).append('<span>Fixed</span>')
    $container.append($header_fixed_container)
  
    var $dropdown_legacy_offset_checkbox = $('<entrada />', {
      escriba: 'casilla de verificación',
      valor: 1,
      marcado: $('.main-header').hasClass('dropdown-legacy'),
      clase: 'mr-1'
    }).on('clic', función () {
      if ($(esto).es(':marcado')) {
        $('.main-header').addClass('dropdown-legacy')
      } demás {
        $('.main-header').removeClass('dropdown-legacy')
      }
    })
    var $dropdown_legacy_offset_container = $('<div />', { class: 'mb-1' }).append($dropdown_legacy_offset_checkbox).append('<span>Dropdown Legacy Offset</span>')
    $contenedor.append($dropdown_legacy_offset_container)
  
    var $sin_border_checkbox = $('<entrada />', {
      escriba: 'casilla de verificación',
      valor: 1,
      marcado: $('.main-header').hasClass('border-bottom-0'),
      clase: 'mr-1'
    }).on('clic', función () {
      if ($(esto).es(':marcado')) {
        $('.main-header').addClass('border-bottom-0')
      } demás {
        $('.main-header').removeClass('border-bottom-0')
      }
    })
    var $sin_border_container = $('<div />', { class: 'mb-4' }).append($sin_border_checkbox).append('<span>Sin borde</span>')
    $contenedor.append($sin_border_contenedor)
  
    $container.append('<h6>Opciones de la barra lateral</h6>')
  
    var $sidebar_collapsed_checkbox = $('<entrada />', {
      escriba: 'casilla de verificación',
      valor: 1,
      marcado: $('cuerpo').hasClass('sidebar-collapse'),
      clase: 'mr-1'
    }).on('clic', función () {
      if ($(esto).es(':marcado')) {
        $('cuerpo').addClass('sidebar-collapse')
        $(ventana).trigger('redimensionar')
      } demás {
        $('cuerpo').removeClass('sidebar-collapse')
        $(ventana).trigger('redimensionar')
      }
    })
    var $sidebar_collapsed_container = $('<div />', { class: 'mb-1' }).append($sidebar_collapsed_checkbox).append('<span>Contraído</span>')
    $contenedor.append($sidebar_collapsed_container)
  
    $(documento).on('collapsed.lte.pushmenu', '[widget de datos="pushmenu"]', función () {
      $sidebar_collapsed_checkbox.prop('marcado', verdadero)
    })
    $(documento).on('shown.lte.pushmenu', '[widget de datos="pushmenu"]', función () {
      $sidebar_collapsed_checkbox.prop('marcado', falso)
    })
  
    var $sidebar_fixed_checkbox = $('<entrada />', {
      escriba: 'casilla de verificación',
      valor: 1,
      verificado: $('cuerpo').hasClass('diseño fijo'),
      clase: 'mr-1'
    }).on('clic', función () {
      if ($(esto).es(':marcado')) {
        $('cuerpo').addClass('diseño fijo')
        $(ventana).trigger('redimensionar')
      } demás {
        $('cuerpo').removeClass('diseño fijo')
        $(ventana).trigger('redimensionar')
      }
    })
    var $sidebar_fixed_container = $('<div />', { class: 'mb-1' }).append($sidebar_fixed_checkbox).append('<span>Fijo</span>')
    $container.append($sidebar_fixed_container)
  
    var $sidebar_mini_checkbox = $('<entrada />', {
      escriba: 'casilla de verificación',
      valor: 1,
      verificado: $('cuerpo').hasClass('sidebar-mini'),
      clase: 'mr-1'
    }).on('clic', función () {
      if ($(esto).es(':marcado')) {
        $('cuerpo').addClass('barra lateral-mini')
      } demás {
        $('cuerpo').removeClass('barra lateral-mini')
      }
    })
    var $sidebar_mini_container = $('<div />', { class: 'mb-1' }).append($sidebar_mini_checkbox).append('<span>Sidebar Mini</span>')
    $contenedor.append($sidebar_mini_container)
  
    var $sidebar_mini_md_checkbox = $('<entrada />', {
      escriba: 'casilla de verificación',
      valor: 1,
      marcado: $('cuerpo').hasClass('sidebar-mini-md'),
      clase: 'mr-1'
    }).on('clic', función () {
      if ($(esto).es(':marcado')) {
        $('cuerpo').addClass('barra lateral-mini-md')
      } demás {
        $('cuerpo').removeClass('barra-lateral-mini-md')
      }
    })
    var $sidebar_mini_md_container = $('<div />', { class: 'mb-1' }).append($sidebar_mini_md_checkbox).append('<span>Sidebar Mini MD</span>')
    $contenedor.append($sidebar_mini_md_container)
  
    var $sidebar_mini_xs_checkbox = $('<entrada />', {
      escriba: 'casilla de verificación',
      valor: 1,
      verificado: $('cuerpo').hasClass('sidebar-mini-xs'),
      clase: 'mr-1'
    }).on('clic', función () {
      if ($(esto).es(':marcado')) {
        $('cuerpo').addClass('barra lateral-mini-xs')
      } demás {
        $('cuerpo').removeClass('barra lateral-mini-xs')
      }
    })
    var $sidebar_mini_xs_container = $('<div />', { class: 'mb-1' }).append($sidebar_mini_xs_checkbox).append('<span>Sidebar Mini XS</span>')
    $contenedor.append($sidebar_mini_xs_container)
  
    var $flat_sidebar_checkbox = $('<entrada />', {
      escriba: 'casilla de verificación',
      valor: 1,
      marcado: $('.nav-sidebar').hasClass('nav-flat'),
      clase: 'mr-1'
    }).on('clic', función () {
      if ($(esto).es(':marcado')) {
        $('.nav-sidebar').addClass('nav-flat')
      } demás {
        $('.barra lateral de navegación').removeClass('barra lateral de navegación')
      }
    })
    var $flat_sidebar_container = $('<div />', { class: 'mb-1' }).append($flat_sidebar_checkbox).append('<span>Nav Flat Style</span>')
    $contenedor.append($flat_sidebar_container)
  
    var $legacy_sidebar_checkbox = $('<entrada />', {
      escriba: 'casilla de verificación',
      valor: 1,
      marcado: $('.nav-sidebar').hasClass('nav-legacy'),
      clase: 'mr-1'
    }).on('clic', función () {
      if ($(esto).es(':marcado')) {
        $('.barra lateral de navegación').addClass('heredado de navegación')
      } demás {
        $('.barra lateral de navegación').removeClass('heredado de navegación')
      }
    })
    var $legacy_sidebar_container = $('<div />', { class: 'mb-1' }).append($legacy_sidebar_checkbox).append('<span>Nav Legacy Style</span>')
    $contenedor.append($legacy_sidebar_container)
  
    var $compact_sidebar_checkbox = $('<entrada />', {
      escriba: 'casilla de verificación',
      valor: 1,
      marcado: $('.nav-sidebar').hasClass('nav-compact'),
      clase: 'mr-1'
    }).on('clic', función () {
      if ($(esto).es(':marcado')) {
        $('.barra lateral de navegación').addClass('compacto de navegación')
      } demás {
        $('.barra lateral de navegación').removeClass('compacto de navegación')
      }
    })
    var $compact_sidebar_container = $('<div />', { class: 'mb-1' }).append($compact_sidebar_checkbox).append('<span>Nav Compact</span>')
    $contenedor.append($compact_sidebar_container)
  
    var $child_indent_sidebar_checkbox = $('<entrada />', {
      escriba: 'casilla de verificación',
      valor: 1,
      marcado: $('.nav-sidebar').hasClass('nav-child-indent'),
      clase: 'mr-1'
    }).on('clic', función () {
      if ($(esto).es(':marcado')) {
        $('.nav-sidebar').addClass('nav-child-indent')
      } demás {
        $('.nav-sidebar').removeClass('nav-child-indent')
      }
    })
    var $child_indent_sidebar_container = $('<div />', { class: 'mb-1' }).append($child_indent_sidebar_checkbox).append('<span>Nav Child Indent</span>')
    $contenedor.append($child_indent_sidebar_container)
  
    var $child_hide_sidebar_checkbox = $('<entrada />', {
      escriba: 'casilla de verificación',
      valor: 1,
      marcado: $('.nav-sidebar').hasClass('nav-collapse-hide-child'),
      clase: 'mr-1'
    }).on('clic', función () {
      if ($(esto).es(':marcado')) {
        $('.nav-sidebar').addClass('nav-collapse-hide-child')
      } demás {
        $('.nav-sidebar').removeClass('nav-collapse-hide-child')
      }
    })
    var $child_hide_sidebar_container = $('<div />', { class: 'mb-1' }).append($child_hide_sidebar_checkbox).append('<span>Nav Child Hide on Collapse</span>')
    $contenedor.append($child_hide_sidebar_container)
  
    var $no_expand_sidebar_checkbox = $('<entrada />', {
      escriba: 'casilla de verificación',
      valor: 1,
      marcado: $('.main-sidebar').hasClass('sidebar-no-expand'),
      clase: 'mr-1'
    }).on('clic', función () {
      if ($(esto).es(':marcado')) {
        $('.main-sidebar').addClass('sidebar-no-expand')
      } demás {
        $('.main-sidebar').removeClass('sidebar-no-expand')
      }
    })
    var $no_expand_sidebar_container = $('<div />', { class: 'mb-4' }).append($no_expand_sidebar_checkbox).append('<span>Disable Hover/Focus Auto-Expand</span>')
    $contenedor.append($no_expand_sidebar_container)
  
    $container.append('<h6>Opciones de pie de página</h6>')
    var $footer_fixed_checkbox = $('<entrada />', {
      escriba: 'casilla de verificación',
      valor: 1,
      marcado: $('cuerpo').hasClass('layout-footer-fixed'),
      clase: 'mr-1'
    }).on('clic', función () {
      if ($(esto).es(':marcado')) {
        $('cuerpo').addClass('layout-footer-fixed')
      } demás {
        $('cuerpo').removeClass('layout-footer-fixed')
      }
    })
    var $footer_fixed_container = $('<div />', { class: 'mb-4' }).append($footer_fixed_checkbox).append('<span>Fixed</span>')
    $contenedor.append($footer_fixed_container)
  
    $container.append('<h6>Opciones de texto pequeño</h6>')
  
    var $text_sm_body_checkbox = $('<entrada />', {
      escriba: 'casilla de verificación',
      valor: 1,
      marcado: $('cuerpo').hasClass('text-sm'),
      clase: 'mr-1'
    }).on('clic', función () {
      if ($(esto).es(':marcado')) {
        $('cuerpo').addClass('texto-sm')
      } demás {
        $('cuerpo').removeClass('text-sm')
      }
    })
    var $text_sm_body_container = $('<div />', { class: 'mb-1' }).append($text_sm_body_checkbox).append('<span>Cuerpo</span>')
    $contenedor.append($text_sm_body_container)
  
    var $text_sm_header_checkbox = $('<entrada />', {
      escriba: 'casilla de verificación',
      valor: 1,
      marcado: $('.main-header').hasClass('text-sm'),
      clase: 'mr-1'
    }).on('clic', función () {
      if ($(esto).es(':marcado')) {
        $('.cabecera principal').addClass('texto-sm')
      } demás {
        $('.cabecera principal').removeClass('texto-sm')
      }
    })
    var $text_sm_header_container = $('<div />', { class: 'mb-1' }).append($text_sm_header_checkbox).append('<span>Navbar</span>')
    $contenedor.append($text_sm_header_container)
  
    var $text_sm_brand_checkbox = $('<entrada />', {
      escriba: 'casilla de verificación',
      valor: 1,
      marcado: $('.brand-link').hasClass('text-sm'),
      clase: 'mr-1'
    }).on('clic', función () {
      if ($(esto).es(':marcado')) {
        $('.brand-link').addClass('text-sm')
      } demás {
        $('.brand-link').removeClass('text-sm')
      }
    })
    var $text_sm_brand_container = $('<div />', { class: 'mb-1' }).append($text_sm_brand_checkbox).append('<span>Marca</span>')
    $contenedor.append($text_sm_brand_container)
  
    var $text_sm_sidebar_checkbox = $('<entrada />', {
      escriba: 'casilla de verificación',
      valor: 1,
      marcado: $('.nav-sidebar').hasClass('text-sm'),
      clase: 'mr-1'
    }).on('clic', función () {
      if ($(esto).es(':marcado')) {
        $('.barra lateral de navegación').addClass('texto-sm')
      } demás {
        $('.barra lateral de navegación').removeClass('texto-sm')
      }
    })
    var $text_sm_sidebar_container = $('<div />', { class: 'mb-1' }).append($text_sm_sidebar_checkbox).append('<span>Sidebar Nav</span>')
    $contenedor.append($text_sm_sidebar_container)
  
    var $text_sm_footer_checkbox = $('<entrada />', {
      escriba: 'casilla de verificación',
      valor: 1,
      marcado: $('.main-footer').hasClass('text-sm'),
      clase: 'mr-1'
    }).on('clic', función () {
      if ($(esto).es(':marcado')) {
        $('.pie de página principal').addClass('texto-sm')
      } demás {
        $('.pie de página principal').removeClass('texto-sm')
      }
    })
    var $text_sm_footer_container = $('<div />', { class: 'mb-4' }).append($text_sm_footer_checkbox).append('<span>Pie de página</span>')
    $contenedor.append($text_sm_footer_container)
  
    // Matrices de colores
  
    var navbar_dark_skins = [
      'navbar-principal',
      'barra de navegación secundaria',
      'información de la barra de navegación',
      'barra de navegación-éxito',
      'navbar-peligro',
      'navbar-índigo',
      'navbar-púrpura',
      'navbar-rosa',
      'navbar-marina',
      'barra de navegación-azul claro',
      'navbar-verde azulado',
      'navbar-cian',
      'navbar-oscuro',
      'navbar-gris-oscuro',
      'navbar-gris'
    ]
  
    var navbar_light_skins = [
      'luz de la barra de navegación',
      'advertencia de la barra de navegación',
      'navbar-blanco',
      'navbar-naranja'
    ]
  
    var sidebar_colors = [
      'bg-primario',
      'bg-advertencia',
      'bg-info',
      'bg-peligro',
      'bg-éxito',
      'bg-índigo',
      'bg-azul claro',
      'bg-marina',
      'bg-púrpura',
      'bg-fucsia',
      'bg-rosa',
      'bg-granate',
      'bg-naranja',
      'bg-lima',
      'bg-verde azulado',
      'bg-oliva'
    ]
  
    var acento_colores = [
      'acento-primario',
      'advertencia de acento',
      'información de acento',
      'acento-peligro',
      'acento-éxito',
      'acento-índigo',
      'acento-azul claro',
      'acento azul marino',
      'acento-púrpura',
      'acento-fucsia',
      'rosa acentuado',
      'acento granate',
      'acento naranja',
      'acento-lima',
      'acento verde azulado',
      'acento oliva'
    ]
  
    var sidebar_skins = [
      'barra lateral-oscura-primaria',
      'sidebar-dark-warning',
      'sidebar-dark-info',
      'sidebar-oscuro-peligro',
      'sidebar-oscuro-éxito',
      'sidebar-oscuro-índigo',
      'sidebar-oscuro-azul claro',
      'barra lateral-azul marino oscuro',
      'sidebar-morado-oscuro',
      'sidebar-oscuro-fucsia',
      'sidebar-oscuro-rosa',
      'sidebar-maroon-oscuro',
      'sidebar-oscuro-naranja',
      'sidebar-dark-lime',
      'sidebar-oscuro-verde azulado',
      'sidebar-oscuro-oliva',
      'sidebar-luz-principal',
      'sidebar-luz-advertencia',
      'sidebar-light-info',
      'sidebar-luz-peligro',
      'sidebar-light-éxito',
      'sidebar-luz-índigo',
      'sidebar-light-lightblue',
      'sidebar-luz-azul marino',
      'sidebar-light-purple',
      'sidebar-luz-fucsia',
      'barra lateral-rosa-claro',
      'barra lateral-granate claro',
      'sidebar-naranja-claro',
      'sidebar-luz-lima',
      'sidebar-claro-verde azulado',
      'sidebar-luz-oliva'
    ]
  
    // Variantes de la barra de navegación
  
    $container.append('<h6>Variantes de la barra de navegación</h6>')
  
    var $navbar_variants = $('<div />', {
      clase: 'd-flex'
    })
    var navbar_all_colors = navbar_dark_skins.concat(navbar_light_skins)
    var $navbar_variants_colors = createSkinBlock(navbar_all_colors, función () {
      var color = $(esto).find('opción:seleccionado').attr('clase')
      var $main_header = $('.main-header')
      $main_header.removeClass('barra de navegación oscura').removeClass('barra de navegación clara')
      navbar_all_colors.forEach(función (color) {
        $main_header.removeClass(color)
      })
  
      $(this).removeClass().addClass('custom-select mb-3 text-light border-0')
  
      si (navbar_dark_skins.indexOf(color) > -1) {
        $main_header.addClass('navbar-dark')
        $(esto).addClass(color).addClass('text-light')
      } demás {
        $main_header.addClass('barra-de-navegación')
        $(esto).addClass(color)
      }
  
      $main_header.addClass(color)
    })
  
    var active_navbar_color = nulo
    $('.main-header')[0].classList.forEach(función (className) {
      if (navbar_all_colors.indexOf(className) > -1 && active_navbar_color === nulo) {
        active_navbar_color = className.replace('navbar-', 'bg-')
      }
    })
  
    $navbar_variants_colors.find('opción' + active_navbar_color).prop('seleccionado', verdadero)
    $navbar_variants_colors.removeClass().addClass('custom-select mb-3 text-light border-0').addClass(active_navbar_color)
  
    $navbar_variants.append($navbar_variants_colores)
  
    $contenedor.append($navbar_variants)
  
    // Colores de la barra lateral
  
    $container.append('<h6>Variantes de colores acentuados</h6>')
    var $accent_variants = $('<div />', {
      clase: 'd-flex'
    })
    $contenedor.append($accent_variants)
    $container.append(createSkinBlock(accent_colors, function () {
      var color = $(esto).find('opción:seleccionado').attr('clase')
      var $cuerpo = $('cuerpo')
      acento_colores.forEach(función (piel) {
        $cuerpo.removeClass(máscara)
      })
  
      var clase_color_acento = color.replace('bg-', 'acento-')
  
      $cuerpo.addClass(accent_color_class)
    }, verdadero))
  
    var active_accent_color = nulo
    $('cuerpo')[0].classList.forEach(función (nombreClase) {
      if (accent_colors.indexOf(className) > -1 && active_accent_color === null) {
        active_accent_color = className.replace('navbar-', 'bg-')
      }
    })
  
    // $accent_variants.find('opción.' + active_accent_color).prop('seleccionado', verdadero)
    // $accent_variants.removeClass().addClass('custom-select mb-3 text-light border-0').addClass(active_accent_color)
  
    $container.append('<h6>Variantes de barra lateral oscura</h6>')
    var $sidebar_variants_dark = $('<div />', {
      clase: 'd-flex'
    })
    $container.append($sidebar_variants_dark)
    var $sidebar_dark_variants = createSkinBlock(sidebar_colors, función () {
      var color = $(esto).find('opción:seleccionado').attr('clase')
      var sidebar_class = 'sidebar-dark-' + color.replace('bg-', '')
      var $barra lateral = $('.barra lateral principal')
      sidebar_skins.forEach(función (máscara) {
        $sidebar.removeClass(máscara)
        $sidebar_light_variants.removeClass(skin.replace('sidebar-dark-', 'bg-')).removeClass('text-light')
      })
  
      $(this).removeClass().addClass('custom-select mb-3 text-light border-0').addClass(color)
  
      $sidebar_light_variants.find('opción').prop('seleccionado', falso)
      $sidebar.addClass(sidebar_class)
      $('.sidebar').removeClass('os-tema-oscuro').addClass('os-tema-claro')
    }, verdadero)
    $contenedor.append($sidebar_dark_variants)
  
    var active_sidebar_dark_color = nulo
    $('.main-sidebar')[0].classList.forEach(function (className) {
      var color = className.replace('sidebar-dark-', 'bg-')
      if (sidebar_colors.indexOf(color) > -1 && active_sidebar_dark_color === nulo) {
        active_sidebar_dark_color = color
      }
    })
  
    $sidebar_dark_variants.find('opción' + active_sidebar_dark_color).prop('seleccionado', verdadero)
    $sidebar_dark_variants.removeClass().addClass('custom-select mb-3 text-light border-0').addClass(active_sidebar_dark_color)
  
    $container.append('<h6>Variantes de la barra lateral ligera</h6>')
    var $sidebar_variants_light = $('<div />', {
      clase: 'd-flex'
    })
    $contenedor.append($sidebar_variants_light)
    var $sidebar_light_variants = createSkinBlock(sidebar_colors, función () {
      var color = $(esto).find('opción:seleccionado').attr('clase')
      var sidebar_class = 'sidebar-light-' + color.replace('bg-', '')
      var $barra lateral = $('.barra lateral principal')
      sidebar_skins.forEach(función (máscara) {
        $sidebar.removeClass(máscara)
        $sidebar_dark_variants.removeClass(skin.replace('sidebar-light-', 'bg-')).removeClass('text-light')
      })
  
      $(this).removeClass().addClass('custom-select mb-3 text-light border-0').addClass(color)
  
      $sidebar_dark_variants.find('opción').prop('seleccionado', falso)
      $sidebar.addClass(sidebar_class)
      $('.sidebar').removeClass('os-tema-claro').addClass('os-tema-oscuro')
    }, verdadero)
    $container.append($sidebar_light_variants)
  
    var active_sidebar_light_color = nulo
    $('.main-sidebar')[0].classList.forEach(function (className) {
      var color = className.replace('sidebar-light-', 'bg-')
      if (sidebar_colors.indexOf(color) > -1 && active_sidebar_light_color === nulo) {
        active_sidebar_light_color = color
      }
    })
  
    if (active_sidebar_light_color !== nulo) {
      $sidebar_light_variants.find('opción' + active_sidebar_light_color).prop('seleccionado', verdadero)
      $sidebar_light_variants.removeClass().addClass('custom-select mb-3 text-light border-0').addClass(active_sidebar_light_color)
    }
  
    var logo_skins = navbar_all_colors
    $container.append('<h6>Variantes del logotipo de la marca</h6>')
    var $variantes_logotipo = $('<div />', {
      clase: 'd-flex'
    })
    $contenedor.append($logo_variantes)
    var $clear_btn = $('<a />', {
      href: '#'
    }).text('borrar').on('hacer clic', función (e) {
      e.preventDefault()
      var $logo = $('.brand-link')
      logo_skins.forEach(función (máscara) {
        $logo.removeClass(máscara)
      })
    })
  
    var $variantes_de_marca = createSkinBlock(logo_skins, función () {
      var color = $(esto).find('opción:seleccionado').attr('clase')
      var $logo = $('.brand-link')
  
      if (color === 'barra de navegación-luz' || color === 'barra de navegación-blanco') {
        $logo.addClass('texto-negro')
      } demás {
        $logo.removeClass('texto-negro')
      }
  
      logo_skins.forEach(función (máscara) {
        $logo.removeClass(máscara)
      })
  
      si (color) {
        $(this).removeClass().addClass('custom-select mb-3 border-0').addClass(color).addClass(color !== 'navbar-light' && color !== 'navbar-white' ? 'texto-luz': '')
      } demás {
        $(this).removeClass().addClass('custom-select mb-3 border-0')
      }
  
      $logo.addClass(color)
    }, verdadero).append($clear_btn)
    $contenedor.append($marca_variantes)
  
    var active_brand_color = nulo
    $('.brand-link')[0].classList.forEach(función (className) {
      if (logo_skins.indexOf(className) > -1 && active_brand_color === null) {
        active_brand_color = className.replace('navbar-', 'bg-')
      }
    })
  
    si (activo_marca_color) {
      $brand_variants.find('opción' + active_brand_color).prop('seleccionado', verdadero)
      $brand_variants.removeClass().addClass('custom-select mb-3 text-light border-0').addClass(active_brand_color)
    }
  })(jQuery)