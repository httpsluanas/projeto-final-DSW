import React, {useRef} from 'react'
import {interaction, layer, custom, control, Interactions, Overlays, Controls, Map, Layers, Overlay, Util} from 'react-openlayers'
import * as ol from 'openlayers';
import { fromLonLat } from 'ol/proj';

const iconFeature = new ol.Feature(new ol.geom.Point([0, 0]));
const source = new ol.source.Vector({features: [iconFeature]});
const marker = new custom.style.MarkerStyle( 'https://openlayers.org/en/v4.0.1/examples/data/icon.png')

const MapContainer = ({

}) => {

    return (
        <Map view={{center: [0,0],zoom:2}}>
            <Layers>
                <layer.Tile/>
            </Layers>
            <Controls attribution={false} zoom={true}>
                <control.Rotate />
                <control.ScaleLine />
                <control.FullScreen />
                <control.OverviewMap />
                <control.ZoomSlider />
                <control.ZoomToExtent />
                <control.Zoom />
            </Controls>
        </Map>
    )
}

export default MapContainer