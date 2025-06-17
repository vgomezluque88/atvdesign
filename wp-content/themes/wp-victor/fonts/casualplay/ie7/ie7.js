/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'casualplay\'">' + entity + '</span>' + html;
	}
	var icons = {
		'icon-call': '&#xe91e;',
		'icon-info': '&#xe91f;',
		'icon-question': '&#xe920;',
		'icon-speak': '&#xe921;',
		'icon-search': '&#xe91d;',
		'icon-download': '&#xe91c;',
		'icon-youtube': '&#xe91b;',
		'icon-cart': '&#xe919;',
		'icon-user': '&#xe91a;',
		'icon-filter-icon': '&#xe917;',
		'icon-cart-icon': '&#xe909;',
		'icon-fast-shipping-icn': '&#xe90a;',
		'icon-heart-icon': '&#xe90b;',
		'icon-link-external-icon': '&#xe90c;',
		'icon-play-icon': '&#xe90d;',
		'icon-profile-icon': '&#xe90e;',
		'icon-tick-icon': '&#xe90f;',
		'icon-truck-icn': '&#xe910;',
		'icon-cart-idioma': '&#xe918;',
		'icon-burger': '&#xe900;',
		'icon-close': '&#xe901;',
		'icon-arrow-next': '&#xe902;',
		'icon-arrow-prev': '&#xe903;',
		'icon-plus': '&#xe908;',
		'icon-less': '&#xe911;',
		'icon-arrow': '&#xe912;',
		'icon-email': '&#xe904;',
		'icon-facebook': '&#xe905;',
		'icon-twitter': '&#xe906;',
		'icon-whatsaap': '&#xe907;',
		'icon-pinterest': '&#xe913;',
		'icon-linkedin': '&#xe916;',
		'icon-instagram': '&#xe914;',
		'icon-share': '&#xe915;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
