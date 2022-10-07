var wms_layers = [];


        var lyr_GoogleSatelliteHybrid_0 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_AMWSexpansion_upd_shape_area_1 = new ol.format.GeoJSON();
var features_AMWSexpansion_upd_shape_area_1 = format_AMWSexpansion_upd_shape_area_1.readFeatures(json_AMWSexpansion_upd_shape_area_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AMWSexpansion_upd_shape_area_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AMWSexpansion_upd_shape_area_1.addFeatures(features_AMWSexpansion_upd_shape_area_1);
var lyr_AMWSexpansion_upd_shape_area_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AMWSexpansion_upd_shape_area_1, 
                style: style_AMWSexpansion_upd_shape_area_1,
                interactive: true,
                title: '<img src="styles/legend/AMWSexpansion_upd_shape_area_1.png" /> AMWS expansion_upd_shape_area'
            });
var format_Bunawanbndry_inside_amws_2 = new ol.format.GeoJSON();
var features_Bunawanbndry_inside_amws_2 = format_Bunawanbndry_inside_amws_2.readFeatures(json_Bunawanbndry_inside_amws_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bunawanbndry_inside_amws_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bunawanbndry_inside_amws_2.addFeatures(features_Bunawanbndry_inside_amws_2);
var lyr_Bunawanbndry_inside_amws_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Bunawanbndry_inside_amws_2, 
                style: style_Bunawanbndry_inside_amws_2,
                interactive: true,
                title: '<img src="styles/legend/Bunawanbndry_inside_amws_2.png" /> Bunawan bndry_inside_amws'
            });
var format_LaPazbndry_inside_amwsdrawing_3 = new ol.format.GeoJSON();
var features_LaPazbndry_inside_amwsdrawing_3 = format_LaPazbndry_inside_amwsdrawing_3.readFeatures(json_LaPazbndry_inside_amwsdrawing_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LaPazbndry_inside_amwsdrawing_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LaPazbndry_inside_amwsdrawing_3.addFeatures(features_LaPazbndry_inside_amwsdrawing_3);
var lyr_LaPazbndry_inside_amwsdrawing_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LaPazbndry_inside_amwsdrawing_3, 
                style: style_LaPazbndry_inside_amwsdrawing_3,
                interactive: true,
                title: '<img src="styles/legend/LaPazbndry_inside_amwsdrawing_3.png" /> La Paz bndry_inside_amws drawing'
            });
var format_Loreto_shapefile_inside_amws_upd_4 = new ol.format.GeoJSON();
var features_Loreto_shapefile_inside_amws_upd_4 = format_Loreto_shapefile_inside_amws_upd_4.readFeatures(json_Loreto_shapefile_inside_amws_upd_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Loreto_shapefile_inside_amws_upd_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Loreto_shapefile_inside_amws_upd_4.addFeatures(features_Loreto_shapefile_inside_amws_upd_4);
var lyr_Loreto_shapefile_inside_amws_upd_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Loreto_shapefile_inside_amws_upd_4, 
                style: style_Loreto_shapefile_inside_amws_upd_4,
                interactive: true,
                title: '<img src="styles/legend/Loreto_shapefile_inside_amws_upd_4.png" /> Loreto_shapefile_inside_amws_upd'
            });
var format_Rosario_inside_amws_5 = new ol.format.GeoJSON();
var features_Rosario_inside_amws_5 = format_Rosario_inside_amws_5.readFeatures(json_Rosario_inside_amws_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rosario_inside_amws_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rosario_inside_amws_5.addFeatures(features_Rosario_inside_amws_5);
var lyr_Rosario_inside_amws_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Rosario_inside_amws_5, 
                style: style_Rosario_inside_amws_5,
                interactive: true,
                title: '<img src="styles/legend/Rosario_inside_amws_5.png" /> Rosario_inside_amws'
            });
var format_SanFranz_area_insideamws1_6 = new ol.format.GeoJSON();
var features_SanFranz_area_insideamws1_6 = format_SanFranz_area_insideamws1_6.readFeatures(json_SanFranz_area_insideamws1_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SanFranz_area_insideamws1_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SanFranz_area_insideamws1_6.addFeatures(features_SanFranz_area_insideamws1_6);
var lyr_SanFranz_area_insideamws1_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SanFranz_area_insideamws1_6, 
                style: style_SanFranz_area_insideamws1_6,
                interactive: true,
                title: '<img src="styles/legend/SanFranz_area_insideamws1_6.png" /> San Franz_area_inside amws1'
            });
var format_Talacogon_inside_amws_7 = new ol.format.GeoJSON();
var features_Talacogon_inside_amws_7 = format_Talacogon_inside_amws_7.readFeatures(json_Talacogon_inside_amws_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Talacogon_inside_amws_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Talacogon_inside_amws_7.addFeatures(features_Talacogon_inside_amws_7);
var lyr_Talacogon_inside_amws_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Talacogon_inside_amws_7, 
                style: style_Talacogon_inside_amws_7,
                interactive: true,
                title: '<img src="styles/legend/Talacogon_inside_amws_7.png" /> Talacogon_inside_amws'
            });
var format_Clipped_8 = new ol.format.GeoJSON();
var features_Clipped_8 = format_Clipped_8.readFeatures(json_Clipped_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Clipped_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Clipped_8.addFeatures(features_Clipped_8);
var lyr_Clipped_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Clipped_8, 
                style: style_Clipped_8,
                interactive: true,
                title: '<img src="styles/legend/Clipped_8.png" /> Clipped'
            });
var format_Geotag_9 = new ol.format.GeoJSON();
var features_Geotag_9 = format_Geotag_9.readFeatures(json_Geotag_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Geotag_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Geotag_9.addFeatures(features_Geotag_9);
var lyr_Geotag_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Geotag_9, 
                style: style_Geotag_9,
                interactive: true,
                title: '<img src="styles/legend/Geotag_9.png" /> Geotag'
            });

lyr_GoogleSatelliteHybrid_0.setVisible(true);lyr_AMWSexpansion_upd_shape_area_1.setVisible(true);lyr_Bunawanbndry_inside_amws_2.setVisible(true);lyr_LaPazbndry_inside_amwsdrawing_3.setVisible(true);lyr_Loreto_shapefile_inside_amws_upd_4.setVisible(true);lyr_Rosario_inside_amws_5.setVisible(true);lyr_SanFranz_area_insideamws1_6.setVisible(true);lyr_Talacogon_inside_amws_7.setVisible(true);lyr_Clipped_8.setVisible(true);lyr_Geotag_9.setVisible(true);
var layersList = [lyr_GoogleSatelliteHybrid_0,lyr_AMWSexpansion_upd_shape_area_1,lyr_Bunawanbndry_inside_amws_2,lyr_LaPazbndry_inside_amwsdrawing_3,lyr_Loreto_shapefile_inside_amws_upd_4,lyr_Rosario_inside_amws_5,lyr_SanFranz_area_insideamws1_6,lyr_Talacogon_inside_amws_7,lyr_Clipped_8,lyr_Geotag_9];
lyr_AMWSexpansion_upd_shape_area_1.set('fieldAliases', {'ID': 'ID', 'corner': 'corner', 'easting': 'easting', 'northing': 'northing', 'TypeI': 'TypeI', 'BranchesI': 'BranchesI', 'Coordinate': 'Coordinate', 'XI': 'XI', 'YI': 'YI', 'LongitudeI': 'LongitudeI', 'LatitudeI': 'LatitudeI', 'LengthI': 'LengthI', 'AreaI': 'AreaI', 'BearingI': 'BearingI', 'SelectionM': 'SelectionM', 'SelectionI': 'SelectionI', 'VersionI': 'VersionI', });
lyr_Bunawanbndry_inside_amws_2.set('fieldAliases', {'ID': 'ID', 'PROVINCE_': 'PROVINCE_', 'CITY_MUNI_': 'CITY_MUNI_', 'AREA_HA_': 'AREA_HA_', 'AREA__SQ_K': 'AREA__SQ_K', 'LAND_AREA_': 'LAND_AREA_', 'POP_2017': 'POP_2017', 'POP_DEN_17': 'POP_DEN_17', 'RANGE_17': 'RANGE_17', 'POP_2000': 'POP_2000', 'POP_DEN_00': 'POP_DEN_00', 'RANGE_00': 'RANGE_00', 'POP_2007': 'POP_2007', 'POP_DEN_07': 'POP_DEN_07', 'RANGE_07': 'RANGE_07', 'AREA__DILG': 'AREA__DILG', 'NEWFIELD1': 'NEWFIELD1', 'DISTRICT': 'DISTRICT', 'GROWTH_D': 'GROWTH_D', 'TypeI': 'TypeI', 'BranchesI': 'BranchesI', 'Coordinate': 'Coordinate', 'XI': 'XI', 'YI': 'YI', 'LongitudeI': 'LongitudeI', 'LatitudeI': 'LatitudeI', 'LengthI': 'LengthI', 'AreaI': 'AreaI', 'BearingI': 'BearingI', 'SelectionM': 'SelectionM', 'SelectionI': 'SelectionI', 'VersionI': 'VersionI', 'Name': 'Name', });
lyr_LaPazbndry_inside_amwsdrawing_3.set('fieldAliases', {'ID': 'ID', 'ID2': 'ID2', 'corner': 'corner', 'easting': 'easting', 'northing': 'northing', 'TypeI': 'TypeI', 'BranchesI': 'BranchesI', 'Coordinate': 'Coordinate', 'XI': 'XI', 'YI': 'YI', 'LongitudeI': 'LongitudeI', 'LatitudeI': 'LatitudeI', 'LengthI': 'LengthI', 'AreaI': 'AreaI', 'BearingI': 'BearingI', 'SelectionM': 'SelectionM', 'SelectionI': 'SelectionI', 'VersionI': 'VersionI', 'TypeI1': 'TypeI1', 'BranchesI1': 'BranchesI1', 'Coordinat1': 'Coordinat1', 'XI1': 'XI1', 'YI1': 'YI1', 'Longitude1': 'Longitude1', 'LatitudeI1': 'LatitudeI1', 'LengthI1': 'LengthI1', 'AreaI1': 'AreaI1', 'BearingI1': 'BearingI1', 'Selection1': 'Selection1', 'Selection2': 'Selection2', 'VersionI1': 'VersionI1', 'Name': 'Name', });
lyr_Loreto_shapefile_inside_amws_upd_4.set('fieldAliases', {'ID': 'ID', 'ID2': 'ID2', 'corner': 'corner', 'easting': 'easting', 'northing': 'northing', 'TypeI': 'TypeI', 'BranchesI': 'BranchesI', 'Coordinate': 'Coordinate', 'XI': 'XI', 'YI': 'YI', 'LongitudeI': 'LongitudeI', 'LatitudeI': 'LatitudeI', 'LengthI': 'LengthI', 'AreaI': 'AreaI', 'BearingI': 'BearingI', 'SelectionM': 'SelectionM', 'SelectionI': 'SelectionI', 'VersionI': 'VersionI', 'PROVINCE_': 'PROVINCE_', 'CITY_MUNI_': 'CITY_MUNI_', 'AREA_HA_': 'AREA_HA_', 'AREA__SQ_K': 'AREA__SQ_K', 'LAND_AREA_': 'LAND_AREA_', 'POP_2017': 'POP_2017', 'POP_DEN_17': 'POP_DEN_17', 'RANGE_17': 'RANGE_17', 'POP_2000': 'POP_2000', 'POP_DEN_00': 'POP_DEN_00', 'RANGE_00': 'RANGE_00', 'POP_2007': 'POP_2007', 'POP_DEN_07': 'POP_DEN_07', 'RANGE_07': 'RANGE_07', 'AREA__DILG': 'AREA__DILG', 'NEWFIELD1': 'NEWFIELD1', 'DISTRICT': 'DISTRICT', 'GROWTH_D': 'GROWTH_D', 'TypeI1': 'TypeI1', 'BranchesI1': 'BranchesI1', 'Coordinat1': 'Coordinat1', 'XI1': 'XI1', 'YI1': 'YI1', 'Longitude1': 'Longitude1', 'LatitudeI1': 'LatitudeI1', 'LengthI1': 'LengthI1', 'AreaI1': 'AreaI1', 'BearingI1': 'BearingI1', 'Selection1': 'Selection1', 'Selection2': 'Selection2', 'VersionI1': 'VersionI1', 'Name': 'Name', });
lyr_Rosario_inside_amws_5.set('fieldAliases', {'ID': 'ID', 'corner': 'corner', 'easting': 'easting', 'nothing': 'nothing', 'TypeI': 'TypeI', 'BranchesI': 'BranchesI', 'Coordinate': 'Coordinate', 'XI': 'XI', 'YI': 'YI', 'LongitudeI': 'LongitudeI', 'LatitudeI': 'LatitudeI', 'LengthI': 'LengthI', 'AreaI': 'AreaI', 'BearingI': 'BearingI', 'SelectionM': 'SelectionM', 'SelectionI': 'SelectionI', 'VersionI': 'VersionI', 'Name': 'Name', });
lyr_SanFranz_area_insideamws1_6.set('fieldAliases', {'ID': 'ID', 'ID2': 'ID2', 'corner': 'corner', 'easting': 'easting', 'northing': 'northing', 'TypeI': 'TypeI', 'BranchesI': 'BranchesI', 'Coordinate': 'Coordinate', 'XI': 'XI', 'YI': 'YI', 'LongitudeI': 'LongitudeI', 'LatitudeI': 'LatitudeI', 'LengthI': 'LengthI', 'AreaI': 'AreaI', 'TypeI1': 'TypeI1', 'BranchesI1': 'BranchesI1', 'Coordinat1': 'Coordinat1', 'XI1': 'XI1', 'YI1': 'YI1', 'Longitude1': 'Longitude1', 'LatitudeI1': 'LatitudeI1', 'LengthI1': 'LengthI1', 'AreaI1': 'AreaI1', 'BearingI': 'BearingI', 'SelectionM': 'SelectionM', 'SelectionI': 'SelectionI', 'VersionI': 'VersionI', 'Name': 'Name', });
lyr_Talacogon_inside_amws_7.set('fieldAliases', {'ID': 'ID', 'ID2': 'ID2', 'ID21': 'ID21', 'ID211': 'ID211', 'ID2111': 'ID2111', 'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'HECTARES': 'HECTARES', 'corner': 'corner', 'TypeI': 'TypeI', 'BranchesI': 'BranchesI', 'Coordinate': 'Coordinate', 'XI': 'XI', 'YI': 'YI', 'LongitudeI': 'LongitudeI', 'LatitudeI': 'LatitudeI', 'LengthI': 'LengthI', 'AreaI': 'AreaI', 'BearingI': 'BearingI', 'SelectionM': 'SelectionM', 'SelectionI': 'SelectionI', 'VersionI': 'VersionI', 'TypeI1': 'TypeI1', 'BranchesI1': 'BranchesI1', 'Coordinat1': 'Coordinat1', 'XI1': 'XI1', 'YI1': 'YI1', 'Longitude1': 'Longitude1', 'LatitudeI1': 'LatitudeI1', 'LengthI1': 'LengthI1', 'AreaI1': 'AreaI1', 'BearingI1': 'BearingI1', 'Selection1': 'Selection1', 'Selection2': 'Selection2', 'VersionI1': 'VersionI1', 'Name': 'Name', });
lyr_Clipped_8.set('fieldAliases', {'ID': 'ID', 'NAME': 'NAME', 'DESCRIPTIO': 'DESCRIPTIO', 'ID_NO_': 'ID_NO_', 'BRGY_NAME_': 'BRGY_NAME_', 'CITY_MUNI_': 'CITY_MUNI_', 'POP_2007': 'POP_2007', 'HH_CBMS09': 'HH_CBMS09', 'PI_2005': 'PI_2005', 'PI_2009': 'PI_2009', 'RANGE': 'RANGE', 'PROVINCE_': 'PROVINCE_', 'AREA_HA_': 'AREA_HA_', 'AREA': 'AREA', 'DISTRICT': 'DISTRICT', 'Status': 'Status', 'TypeI': 'TypeI', 'BranchesI': 'BranchesI', 'Coordinate': 'Coordinate', 'XI': 'XI', 'YI': 'YI', 'LongitudeI': 'LongitudeI', 'LatitudeI': 'LatitudeI', 'LengthI': 'LengthI', 'AreaI': 'AreaI', 'BearingI': 'BearingI', 'SelectionM': 'SelectionM', 'SelectionI': 'SelectionI', 'VersionI': 'VersionI', });
lyr_Geotag_9.set('fieldAliases', {'Name': 'Name', 'Folder': 'Folder', });
lyr_AMWSexpansion_upd_shape_area_1.set('fieldImages', {'ID': 'TextEdit', 'corner': 'TextEdit', 'easting': 'TextEdit', 'northing': 'TextEdit', 'TypeI': 'TextEdit', 'BranchesI': 'TextEdit', 'Coordinate': 'TextEdit', 'XI': 'TextEdit', 'YI': 'TextEdit', 'LongitudeI': 'TextEdit', 'LatitudeI': 'TextEdit', 'LengthI': 'TextEdit', 'AreaI': 'TextEdit', 'BearingI': 'TextEdit', 'SelectionM': 'TextEdit', 'SelectionI': 'TextEdit', 'VersionI': 'TextEdit', });
lyr_Bunawanbndry_inside_amws_2.set('fieldImages', {'ID': 'TextEdit', 'PROVINCE_': 'TextEdit', 'CITY_MUNI_': 'TextEdit', 'AREA_HA_': 'TextEdit', 'AREA__SQ_K': 'TextEdit', 'LAND_AREA_': 'TextEdit', 'POP_2017': 'TextEdit', 'POP_DEN_17': 'TextEdit', 'RANGE_17': 'TextEdit', 'POP_2000': 'TextEdit', 'POP_DEN_00': 'TextEdit', 'RANGE_00': 'TextEdit', 'POP_2007': 'TextEdit', 'POP_DEN_07': 'TextEdit', 'RANGE_07': 'TextEdit', 'AREA__DILG': 'TextEdit', 'NEWFIELD1': 'TextEdit', 'DISTRICT': 'TextEdit', 'GROWTH_D': 'TextEdit', 'TypeI': 'TextEdit', 'BranchesI': 'TextEdit', 'Coordinate': 'TextEdit', 'XI': 'TextEdit', 'YI': 'TextEdit', 'LongitudeI': 'TextEdit', 'LatitudeI': 'TextEdit', 'LengthI': 'TextEdit', 'AreaI': 'TextEdit', 'BearingI': 'TextEdit', 'SelectionM': 'TextEdit', 'SelectionI': 'TextEdit', 'VersionI': 'TextEdit', 'Name': 'TextEdit', });
lyr_LaPazbndry_inside_amwsdrawing_3.set('fieldImages', {'ID': 'TextEdit', 'ID2': 'TextEdit', 'corner': 'TextEdit', 'easting': 'TextEdit', 'northing': 'TextEdit', 'TypeI': 'TextEdit', 'BranchesI': 'TextEdit', 'Coordinate': 'TextEdit', 'XI': 'TextEdit', 'YI': 'TextEdit', 'LongitudeI': 'TextEdit', 'LatitudeI': 'TextEdit', 'LengthI': 'TextEdit', 'AreaI': 'TextEdit', 'BearingI': 'TextEdit', 'SelectionM': 'TextEdit', 'SelectionI': 'TextEdit', 'VersionI': 'TextEdit', 'TypeI1': 'TextEdit', 'BranchesI1': 'TextEdit', 'Coordinat1': 'TextEdit', 'XI1': 'TextEdit', 'YI1': 'TextEdit', 'Longitude1': 'TextEdit', 'LatitudeI1': 'TextEdit', 'LengthI1': 'TextEdit', 'AreaI1': 'TextEdit', 'BearingI1': 'TextEdit', 'Selection1': 'TextEdit', 'Selection2': 'TextEdit', 'VersionI1': 'TextEdit', 'Name': 'TextEdit', });
lyr_Loreto_shapefile_inside_amws_upd_4.set('fieldImages', {'ID': 'TextEdit', 'ID2': 'TextEdit', 'corner': 'TextEdit', 'easting': 'TextEdit', 'northing': 'TextEdit', 'TypeI': 'TextEdit', 'BranchesI': 'TextEdit', 'Coordinate': 'TextEdit', 'XI': 'TextEdit', 'YI': 'TextEdit', 'LongitudeI': 'TextEdit', 'LatitudeI': 'TextEdit', 'LengthI': 'TextEdit', 'AreaI': 'TextEdit', 'BearingI': 'TextEdit', 'SelectionM': 'TextEdit', 'SelectionI': 'TextEdit', 'VersionI': 'TextEdit', 'PROVINCE_': 'TextEdit', 'CITY_MUNI_': 'TextEdit', 'AREA_HA_': 'TextEdit', 'AREA__SQ_K': 'TextEdit', 'LAND_AREA_': 'TextEdit', 'POP_2017': 'TextEdit', 'POP_DEN_17': 'TextEdit', 'RANGE_17': 'TextEdit', 'POP_2000': 'TextEdit', 'POP_DEN_00': 'TextEdit', 'RANGE_00': 'TextEdit', 'POP_2007': 'TextEdit', 'POP_DEN_07': 'TextEdit', 'RANGE_07': 'TextEdit', 'AREA__DILG': 'TextEdit', 'NEWFIELD1': 'TextEdit', 'DISTRICT': 'TextEdit', 'GROWTH_D': 'TextEdit', 'TypeI1': 'TextEdit', 'BranchesI1': 'TextEdit', 'Coordinat1': 'TextEdit', 'XI1': 'TextEdit', 'YI1': 'TextEdit', 'Longitude1': 'TextEdit', 'LatitudeI1': 'TextEdit', 'LengthI1': 'TextEdit', 'AreaI1': 'TextEdit', 'BearingI1': 'TextEdit', 'Selection1': 'TextEdit', 'Selection2': 'TextEdit', 'VersionI1': 'TextEdit', 'Name': 'TextEdit', });
lyr_Rosario_inside_amws_5.set('fieldImages', {'ID': 'TextEdit', 'corner': 'TextEdit', 'easting': 'TextEdit', 'nothing': 'TextEdit', 'TypeI': 'TextEdit', 'BranchesI': 'TextEdit', 'Coordinate': 'TextEdit', 'XI': 'TextEdit', 'YI': 'TextEdit', 'LongitudeI': 'TextEdit', 'LatitudeI': 'TextEdit', 'LengthI': 'TextEdit', 'AreaI': 'TextEdit', 'BearingI': 'TextEdit', 'SelectionM': 'TextEdit', 'SelectionI': 'TextEdit', 'VersionI': 'TextEdit', 'Name': 'TextEdit', });
lyr_SanFranz_area_insideamws1_6.set('fieldImages', {'ID': 'TextEdit', 'ID2': 'TextEdit', 'corner': 'TextEdit', 'easting': 'TextEdit', 'northing': 'TextEdit', 'TypeI': 'TextEdit', 'BranchesI': 'TextEdit', 'Coordinate': 'TextEdit', 'XI': 'TextEdit', 'YI': 'TextEdit', 'LongitudeI': 'TextEdit', 'LatitudeI': 'TextEdit', 'LengthI': 'TextEdit', 'AreaI': 'TextEdit', 'TypeI1': 'TextEdit', 'BranchesI1': 'TextEdit', 'Coordinat1': 'TextEdit', 'XI1': 'TextEdit', 'YI1': 'TextEdit', 'Longitude1': 'TextEdit', 'LatitudeI1': 'TextEdit', 'LengthI1': 'TextEdit', 'AreaI1': 'TextEdit', 'BearingI': 'TextEdit', 'SelectionM': 'TextEdit', 'SelectionI': 'TextEdit', 'VersionI': 'TextEdit', 'Name': 'TextEdit', });
lyr_Talacogon_inside_amws_7.set('fieldImages', {'ID': 'TextEdit', 'ID2': 'TextEdit', 'ID21': 'TextEdit', 'ID211': 'TextEdit', 'ID2111': 'TextEdit', 'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', 'HECTARES': 'TextEdit', 'corner': 'TextEdit', 'TypeI': 'TextEdit', 'BranchesI': 'TextEdit', 'Coordinate': 'TextEdit', 'XI': 'TextEdit', 'YI': 'TextEdit', 'LongitudeI': 'TextEdit', 'LatitudeI': 'TextEdit', 'LengthI': 'TextEdit', 'AreaI': 'TextEdit', 'BearingI': 'TextEdit', 'SelectionM': 'TextEdit', 'SelectionI': 'TextEdit', 'VersionI': 'TextEdit', 'TypeI1': 'TextEdit', 'BranchesI1': 'TextEdit', 'Coordinat1': 'TextEdit', 'XI1': 'TextEdit', 'YI1': 'TextEdit', 'Longitude1': 'TextEdit', 'LatitudeI1': 'TextEdit', 'LengthI1': 'TextEdit', 'AreaI1': 'TextEdit', 'BearingI1': 'TextEdit', 'Selection1': 'TextEdit', 'Selection2': 'TextEdit', 'VersionI1': 'TextEdit', 'Name': 'TextEdit', });
lyr_Clipped_8.set('fieldImages', {'ID': 'TextEdit', 'NAME': 'TextEdit', 'DESCRIPTIO': 'TextEdit', 'ID_NO_': 'TextEdit', 'BRGY_NAME_': 'TextEdit', 'CITY_MUNI_': 'TextEdit', 'POP_2007': 'TextEdit', 'HH_CBMS09': 'TextEdit', 'PI_2005': 'TextEdit', 'PI_2009': 'TextEdit', 'RANGE': 'TextEdit', 'PROVINCE_': 'TextEdit', 'AREA_HA_': 'TextEdit', 'AREA': 'TextEdit', 'DISTRICT': 'TextEdit', 'Status': 'TextEdit', 'TypeI': 'TextEdit', 'BranchesI': 'TextEdit', 'Coordinate': 'TextEdit', 'XI': 'TextEdit', 'YI': 'TextEdit', 'LongitudeI': 'TextEdit', 'LatitudeI': 'TextEdit', 'LengthI': 'TextEdit', 'AreaI': 'TextEdit', 'BearingI': 'TextEdit', 'SelectionM': 'TextEdit', 'SelectionI': 'TextEdit', 'VersionI': 'TextEdit', });
lyr_Geotag_9.set('fieldImages', {'Name': 'TextEdit', 'Folder': 'ExternalResource', });
lyr_AMWSexpansion_upd_shape_area_1.set('fieldLabels', {'ID': 'no label', 'corner': 'no label', 'easting': 'no label', 'northing': 'no label', 'TypeI': 'no label', 'BranchesI': 'no label', 'Coordinate': 'no label', 'XI': 'no label', 'YI': 'no label', 'LongitudeI': 'no label', 'LatitudeI': 'no label', 'LengthI': 'no label', 'AreaI': 'no label', 'BearingI': 'no label', 'SelectionM': 'no label', 'SelectionI': 'no label', 'VersionI': 'no label', });
lyr_Bunawanbndry_inside_amws_2.set('fieldLabels', {'ID': 'no label', 'PROVINCE_': 'no label', 'CITY_MUNI_': 'no label', 'AREA_HA_': 'no label', 'AREA__SQ_K': 'no label', 'LAND_AREA_': 'no label', 'POP_2017': 'no label', 'POP_DEN_17': 'no label', 'RANGE_17': 'no label', 'POP_2000': 'no label', 'POP_DEN_00': 'no label', 'RANGE_00': 'no label', 'POP_2007': 'no label', 'POP_DEN_07': 'no label', 'RANGE_07': 'no label', 'AREA__DILG': 'no label', 'NEWFIELD1': 'no label', 'DISTRICT': 'no label', 'GROWTH_D': 'no label', 'TypeI': 'no label', 'BranchesI': 'no label', 'Coordinate': 'no label', 'XI': 'no label', 'YI': 'no label', 'LongitudeI': 'no label', 'LatitudeI': 'no label', 'LengthI': 'no label', 'AreaI': 'no label', 'BearingI': 'no label', 'SelectionM': 'no label', 'SelectionI': 'no label', 'VersionI': 'no label', 'Name': 'no label', });
lyr_LaPazbndry_inside_amwsdrawing_3.set('fieldLabels', {'ID': 'no label', 'ID2': 'no label', 'corner': 'no label', 'easting': 'no label', 'northing': 'no label', 'TypeI': 'no label', 'BranchesI': 'no label', 'Coordinate': 'no label', 'XI': 'no label', 'YI': 'no label', 'LongitudeI': 'no label', 'LatitudeI': 'no label', 'LengthI': 'no label', 'AreaI': 'no label', 'BearingI': 'no label', 'SelectionM': 'no label', 'SelectionI': 'no label', 'VersionI': 'no label', 'TypeI1': 'no label', 'BranchesI1': 'no label', 'Coordinat1': 'no label', 'XI1': 'no label', 'YI1': 'no label', 'Longitude1': 'no label', 'LatitudeI1': 'no label', 'LengthI1': 'no label', 'AreaI1': 'no label', 'BearingI1': 'no label', 'Selection1': 'no label', 'Selection2': 'no label', 'VersionI1': 'no label', 'Name': 'no label', });
lyr_Loreto_shapefile_inside_amws_upd_4.set('fieldLabels', {'ID': 'no label', 'ID2': 'no label', 'corner': 'no label', 'easting': 'no label', 'northing': 'no label', 'TypeI': 'no label', 'BranchesI': 'no label', 'Coordinate': 'no label', 'XI': 'no label', 'YI': 'no label', 'LongitudeI': 'no label', 'LatitudeI': 'no label', 'LengthI': 'no label', 'AreaI': 'no label', 'BearingI': 'no label', 'SelectionM': 'no label', 'SelectionI': 'no label', 'VersionI': 'no label', 'PROVINCE_': 'no label', 'CITY_MUNI_': 'no label', 'AREA_HA_': 'no label', 'AREA__SQ_K': 'no label', 'LAND_AREA_': 'no label', 'POP_2017': 'no label', 'POP_DEN_17': 'no label', 'RANGE_17': 'no label', 'POP_2000': 'no label', 'POP_DEN_00': 'no label', 'RANGE_00': 'no label', 'POP_2007': 'no label', 'POP_DEN_07': 'no label', 'RANGE_07': 'no label', 'AREA__DILG': 'no label', 'NEWFIELD1': 'no label', 'DISTRICT': 'no label', 'GROWTH_D': 'no label', 'TypeI1': 'no label', 'BranchesI1': 'no label', 'Coordinat1': 'no label', 'XI1': 'no label', 'YI1': 'no label', 'Longitude1': 'no label', 'LatitudeI1': 'no label', 'LengthI1': 'no label', 'AreaI1': 'no label', 'BearingI1': 'no label', 'Selection1': 'no label', 'Selection2': 'no label', 'VersionI1': 'no label', 'Name': 'no label', });
lyr_Rosario_inside_amws_5.set('fieldLabels', {'ID': 'no label', 'corner': 'no label', 'easting': 'no label', 'nothing': 'no label', 'TypeI': 'no label', 'BranchesI': 'no label', 'Coordinate': 'no label', 'XI': 'no label', 'YI': 'no label', 'LongitudeI': 'no label', 'LatitudeI': 'no label', 'LengthI': 'no label', 'AreaI': 'no label', 'BearingI': 'no label', 'SelectionM': 'no label', 'SelectionI': 'no label', 'VersionI': 'no label', 'Name': 'no label', });
lyr_SanFranz_area_insideamws1_6.set('fieldLabels', {'ID': 'no label', 'ID2': 'no label', 'corner': 'no label', 'easting': 'no label', 'northing': 'no label', 'TypeI': 'no label', 'BranchesI': 'no label', 'Coordinate': 'no label', 'XI': 'no label', 'YI': 'no label', 'LongitudeI': 'no label', 'LatitudeI': 'no label', 'LengthI': 'no label', 'AreaI': 'no label', 'TypeI1': 'no label', 'BranchesI1': 'no label', 'Coordinat1': 'no label', 'XI1': 'no label', 'YI1': 'no label', 'Longitude1': 'no label', 'LatitudeI1': 'no label', 'LengthI1': 'no label', 'AreaI1': 'no label', 'BearingI': 'no label', 'SelectionM': 'no label', 'SelectionI': 'no label', 'VersionI': 'no label', 'Name': 'no label', });
lyr_Talacogon_inside_amws_7.set('fieldLabels', {'ID': 'no label', 'ID2': 'no label', 'ID21': 'no label', 'ID211': 'no label', 'ID2111': 'no label', 'AREA': 'no label', 'PERIMETER': 'no label', 'HECTARES': 'no label', 'corner': 'no label', 'TypeI': 'no label', 'BranchesI': 'no label', 'Coordinate': 'no label', 'XI': 'no label', 'YI': 'no label', 'LongitudeI': 'no label', 'LatitudeI': 'no label', 'LengthI': 'no label', 'AreaI': 'no label', 'BearingI': 'no label', 'SelectionM': 'no label', 'SelectionI': 'no label', 'VersionI': 'no label', 'TypeI1': 'no label', 'BranchesI1': 'no label', 'Coordinat1': 'no label', 'XI1': 'no label', 'YI1': 'no label', 'Longitude1': 'no label', 'LatitudeI1': 'no label', 'LengthI1': 'no label', 'AreaI1': 'no label', 'BearingI1': 'no label', 'Selection1': 'no label', 'Selection2': 'no label', 'VersionI1': 'no label', 'Name': 'no label', });
lyr_Clipped_8.set('fieldLabels', {'ID': 'no label', 'NAME': 'no label', 'DESCRIPTIO': 'no label', 'ID_NO_': 'no label', 'BRGY_NAME_': 'no label', 'CITY_MUNI_': 'no label', 'POP_2007': 'no label', 'HH_CBMS09': 'no label', 'PI_2005': 'no label', 'PI_2009': 'no label', 'RANGE': 'no label', 'PROVINCE_': 'no label', 'AREA_HA_': 'no label', 'AREA': 'no label', 'DISTRICT': 'no label', 'Status': 'no label', 'TypeI': 'no label', 'BranchesI': 'no label', 'Coordinate': 'no label', 'XI': 'no label', 'YI': 'no label', 'LongitudeI': 'no label', 'LatitudeI': 'no label', 'LengthI': 'no label', 'AreaI': 'no label', 'BearingI': 'no label', 'SelectionM': 'no label', 'SelectionI': 'no label', 'VersionI': 'no label', });
lyr_Geotag_9.set('fieldLabels', {'Name': 'no label', 'Folder': 'no label', });
lyr_Geotag_9.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});