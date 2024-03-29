var wms_layers = [];


        var lyr_GoogleRoads_0 = new ol.layer.Tile({
            'title': 'Google Roads',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_Zones_Porsche_1 = new ol.format.GeoJSON();
var features_Zones_Porsche_1 = format_Zones_Porsche_1.readFeatures(json_Zones_Porsche_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Zones_Porsche_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zones_Porsche_1.addFeatures(features_Zones_Porsche_1);
var lyr_Zones_Porsche_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Zones_Porsche_1, 
                style: style_Zones_Porsche_1,
                interactive: true,
                title: '<img src="styles/legend/Zones_Porsche_1.png" /> Zones_Porsche'
            });
var format_Volvo_2 = new ol.format.GeoJSON();
var features_Volvo_2 = format_Volvo_2.readFeatures(json_Volvo_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Volvo_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Volvo_2.addFeatures(features_Volvo_2);
var lyr_Volvo_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Volvo_2, 
                style: style_Volvo_2,
                interactive: true,
                title: '<img src="styles/legend/Volvo_2.png" /> Volvo'
            });
var format_Tesla_3 = new ol.format.GeoJSON();
var features_Tesla_3 = format_Tesla_3.readFeatures(json_Tesla_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Tesla_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tesla_3.addFeatures(features_Tesla_3);
var lyr_Tesla_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Tesla_3, 
                style: style_Tesla_3,
                interactive: true,
                title: '<img src="styles/legend/Tesla_3.png" /> Tesla'
            });
var format_MercedesBenz_4 = new ol.format.GeoJSON();
var features_MercedesBenz_4 = format_MercedesBenz_4.readFeatures(json_MercedesBenz_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MercedesBenz_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MercedesBenz_4.addFeatures(features_MercedesBenz_4);
var lyr_MercedesBenz_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MercedesBenz_4, 
                style: style_MercedesBenz_4,
                interactive: true,
                title: '<img src="styles/legend/MercedesBenz_4.png" /> Mercedes-Benz'
            });
var format_Maserati_5 = new ol.format.GeoJSON();
var features_Maserati_5 = format_Maserati_5.readFeatures(json_Maserati_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Maserati_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Maserati_5.addFeatures(features_Maserati_5);
var lyr_Maserati_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Maserati_5, 
                style: style_Maserati_5,
                interactive: true,
                title: '<img src="styles/legend/Maserati_5.png" /> Maserati'
            });
var format_Lexus_6 = new ol.format.GeoJSON();
var features_Lexus_6 = format_Lexus_6.readFeatures(json_Lexus_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lexus_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lexus_6.addFeatures(features_Lexus_6);
var lyr_Lexus_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Lexus_6, 
                style: style_Lexus_6,
                interactive: true,
                title: '<img src="styles/legend/Lexus_6.png" /> Lexus'
            });
var format_Landrover_7 = new ol.format.GeoJSON();
var features_Landrover_7 = format_Landrover_7.readFeatures(json_Landrover_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Landrover_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Landrover_7.addFeatures(features_Landrover_7);
var lyr_Landrover_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Landrover_7, 
                style: style_Landrover_7,
                interactive: true,
                title: '<img src="styles/legend/Landrover_7.png" /> Landrover'
            });
var format_Jaguar_8 = new ol.format.GeoJSON();
var features_Jaguar_8 = format_Jaguar_8.readFeatures(json_Jaguar_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Jaguar_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jaguar_8.addFeatures(features_Jaguar_8);
var lyr_Jaguar_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Jaguar_8,
maxResolution:28004.466152261964,
 
                style: style_Jaguar_8,
                interactive: true,
                title: '<img src="styles/legend/Jaguar_8.png" /> Jaguar'
            });
var format_BMW_9 = new ol.format.GeoJSON();
var features_BMW_9 = format_BMW_9.readFeatures(json_BMW_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BMW_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BMW_9.addFeatures(features_BMW_9);
var lyr_BMW_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BMW_9,
maxResolution:28004.466152261964,
 
                style: style_BMW_9,
                interactive: true,
                title: '<img src="styles/legend/BMW_9.png" /> BMW'
            });
var format_Audi_10 = new ol.format.GeoJSON();
var features_Audi_10 = format_Audi_10.readFeatures(json_Audi_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Audi_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Audi_10.addFeatures(features_Audi_10);
var lyr_Audi_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Audi_10,
maxResolution:28004.466152261964,
 
                style: style_Audi_10,
                interactive: true,
                title: '<img src="styles/legend/Audi_10.png" /> Audi'
            });
var format_PorscheVN_VO_11 = new ol.format.GeoJSON();
var features_PorscheVN_VO_11 = format_PorscheVN_VO_11.readFeatures(json_PorscheVN_VO_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PorscheVN_VO_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PorscheVN_VO_11.addFeatures(features_PorscheVN_VO_11);
var lyr_PorscheVN_VO_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PorscheVN_VO_11,
maxResolution:28004.466152261964,
 
                style: style_PorscheVN_VO_11,
                interactive: true,
                title: '<img src="styles/legend/PorscheVN_VO_11.png" /> Porsche VN_VO'
            });

lyr_GoogleRoads_0.setVisible(true);lyr_Zones_Porsche_1.setVisible(true);lyr_Volvo_2.setVisible(true);lyr_Tesla_3.setVisible(true);lyr_MercedesBenz_4.setVisible(true);lyr_Maserati_5.setVisible(true);lyr_Lexus_6.setVisible(true);lyr_Landrover_7.setVisible(true);lyr_Jaguar_8.setVisible(true);lyr_BMW_9.setVisible(true);lyr_Audi_10.setVisible(true);lyr_PorscheVN_VO_11.setVisible(true);
var layersList = [lyr_GoogleRoads_0,lyr_Zones_Porsche_1,lyr_Volvo_2,lyr_Tesla_3,lyr_MercedesBenz_4,lyr_Maserati_5,lyr_Lexus_6,lyr_Landrover_7,lyr_Jaguar_8,lyr_BMW_9,lyr_Audi_10,lyr_PorscheVN_VO_11];
lyr_Zones_Porsche_1.set('fieldAliases', {'GU': 'GU', 'GU_DSC': 'GU_DSC', 'GU_DEPT': 'GU_DEPT', 'DEPT_DSC': 'DEPT_DSC', 'X': 'X', 'Y': 'Y', 'COUNTRY_GU': 'COUNTRY_GU', 'COUNTRY': 'COUNTRY', 'TA Porsche': 'TA Porsche', 'TA Porsc_1': 'TA Porsc_1', 'TA Porsc_2': 'TA Porsc_2', 'TA Porsc_3': 'TA Porsc_3', });
lyr_Volvo_2.set('fieldAliases', {'Make': 'Make', 'City': 'City', });
lyr_Tesla_3.set('fieldAliases', {'Make': 'Make', 'City': 'City', });
lyr_MercedesBenz_4.set('fieldAliases', {'Make': 'Make', 'City': 'City', });
lyr_Maserati_5.set('fieldAliases', {'Make': 'Make', 'City': 'City', });
lyr_Lexus_6.set('fieldAliases', {'Make': 'Make', 'City': 'City', });
lyr_Landrover_7.set('fieldAliases', {'Make': 'Make', 'City': 'City', });
lyr_Jaguar_8.set('fieldAliases', {'Make': 'Make', 'City': 'City', });
lyr_BMW_9.set('fieldAliases', {'Make': 'Make', 'City': 'City', });
lyr_Audi_10.set('fieldAliases', {'Make': 'Make', 'City': 'City', });
lyr_PorscheVN_VO_11.set('fieldAliases', {'LEVEL4CODE': 'LEVEL4CODE', 'LEVEL4NAME': 'LEVEL4NAME', });
lyr_Zones_Porsche_1.set('fieldImages', {'GU': 'TextEdit', 'GU_DSC': 'TextEdit', 'GU_DEPT': 'TextEdit', 'DEPT_DSC': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'COUNTRY_GU': 'TextEdit', 'COUNTRY': 'TextEdit', 'TA Porsche': 'TextEdit', 'TA Porsc_1': 'TextEdit', 'TA Porsc_2': 'TextEdit', 'TA Porsc_3': 'TextEdit', });
lyr_Volvo_2.set('fieldImages', {'Make': 'TextEdit', 'City': 'TextEdit', });
lyr_Tesla_3.set('fieldImages', {'Make': 'TextEdit', 'City': 'TextEdit', });
lyr_MercedesBenz_4.set('fieldImages', {'Make': 'TextEdit', 'City': 'TextEdit', });
lyr_Maserati_5.set('fieldImages', {'Make': 'TextEdit', 'City': 'TextEdit', });
lyr_Lexus_6.set('fieldImages', {'Make': 'TextEdit', 'City': 'TextEdit', });
lyr_Landrover_7.set('fieldImages', {'Make': 'TextEdit', 'City': 'TextEdit', });
lyr_Jaguar_8.set('fieldImages', {'Make': 'TextEdit', 'City': 'TextEdit', });
lyr_BMW_9.set('fieldImages', {'Make': 'TextEdit', 'City': 'TextEdit', });
lyr_Audi_10.set('fieldImages', {'Make': 'TextEdit', 'City': 'TextEdit', });
lyr_PorscheVN_VO_11.set('fieldImages', {'LEVEL4CODE': 'TextEdit', 'LEVEL4NAME': 'TextEdit', });
lyr_Zones_Porsche_1.set('fieldLabels', {'GU': 'no label', 'GU_DSC': 'no label', 'GU_DEPT': 'no label', 'DEPT_DSC': 'no label', 'X': 'no label', 'Y': 'no label', 'COUNTRY_GU': 'no label', 'COUNTRY': 'no label', 'TA Porsche': 'no label', 'TA Porsc_1': 'no label', 'TA Porsc_2': 'no label', 'TA Porsc_3': 'no label', });
lyr_Volvo_2.set('fieldLabels', {'Make': 'no label', 'City': 'no label', });
lyr_Tesla_3.set('fieldLabels', {'Make': 'no label', 'City': 'no label', });
lyr_MercedesBenz_4.set('fieldLabels', {'Make': 'no label', 'City': 'no label', });
lyr_Maserati_5.set('fieldLabels', {'Make': 'no label', 'City': 'no label', });
lyr_Lexus_6.set('fieldLabels', {'Make': 'no label', 'City': 'no label', });
lyr_Landrover_7.set('fieldLabels', {'Make': 'no label', 'City': 'no label', });
lyr_Jaguar_8.set('fieldLabels', {'Make': 'no label', 'City': 'no label', });
lyr_BMW_9.set('fieldLabels', {'Make': 'no label', 'City': 'no label', });
lyr_Audi_10.set('fieldLabels', {'Make': 'no label', 'City': 'no label', });
lyr_PorscheVN_VO_11.set('fieldLabels', {'LEVEL4CODE': 'no label', 'LEVEL4NAME': 'no label', });
lyr_PorscheVN_VO_11.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});