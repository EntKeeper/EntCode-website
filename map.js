L_NO_TOUCH = false;
L_DISABLE_3D = false;

var map_bf5a399f89a2492897f8aee7c2f855e2 = L.map(
    "map_bf5a399f89a2492897f8aee7c2f855e2",
    {
        center: [45.815399, 15.966568],
        crs: L.CRS.EPSG3857,
        zoom: 12,
        zoomControl: true,
        preferCanvas: false,
    }
);


var tile_layer_5c8901ab1dc64f76a872a41d455d5d7e = L.tileLayer(
    "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    {"attribution": "Data by \u0026copy; \u003ca href=\"http://openstreetmap.org\"\u003eOpenStreetMap\u003c/a\u003e, under \u003ca href=\"http://www.openstreetmap.org/copyright\"\u003eODbL\u003c/a\u003e.", "detectRetina": false, "maxNativeZoom": 18, "maxZoom": 18, "minZoom": 0, "noWrap": false, "opacity": 1, "subdomains": "abc", "tms": false}
).addTo(map_bf5a399f89a2492897f8aee7c2f855e2);


var marker_fe797b111de34522a4ec24b0870b5a31 = L.marker(
    [45.815399, 15.966598],
    {}
).addTo(map_bf5a399f89a2492897f8aee7c2f855e2);


var icon_8299b23fe81a49a8b06819da8f051ddc = L.AwesomeMarkers.icon(
    {"extraClasses": "fa-rotate-0", "icon": "cloud", "iconColor": "white", "markerColor": "blue", "prefix": "glyphicon"}
);
marker_fe797b111de34522a4ec24b0870b5a31.setIcon(icon_8299b23fe81a49a8b06819da8f051ddc);


var popup_7571132014914f84b8c3f90227ae9285 = L.popup({"maxWidth": "100%"});


var html_8efdc492bad342f4b4a5162a2699c26a = $(`<div id="html_8efdc492bad342f4b4a5162a2699c26a" style="width: 100.0%; height: 100.0%;"><strong>Ent Code</strong></div>`)[0];
popup_7571132014914f84b8c3f90227ae9285.setContent(html_8efdc492bad342f4b4a5162a2699c26a);


marker_fe797b111de34522a4ec24b0870b5a31.bindPopup(popup_7571132014914f84b8c3f90227ae9285)
;




marker_fe797b111de34522a4ec24b0870b5a31.bindTooltip(
    `<div>
         EntCode
     </div>`,
    {"sticky": true}
);
