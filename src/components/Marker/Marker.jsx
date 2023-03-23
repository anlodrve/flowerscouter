import { useState } from "react";
import { useSelector } from "react-redux";

//google maps imports
import { MarkerF, InfoWindowF} from "@react-google-maps/api"

import peony from './palepink.png'
import lilac from './palepurple.png'
import rose from './red.png'
import sunflower from './yellow.png'
import iris from './darkpurple.png'
import tulip from './brightpink.png'


function Marker({spotObject}) {

    //boolean to show or hide infoWindow
    const [infoWindowOpen, setInfoWindowOpen] = useState(false);

    return(
        <>

        
                    <MarkerF 
                        id={spotObject.id}
                        position={({lat: spotObject.location.x, lng: spotObject.location.y})}
                        onClick={() => setInfoWindowOpen(true)}
                        icon={{url:(`${
                            spotObject.category == 1 ? lilac :
                            spotObject.category == 2 ? peony :
                            spotObject.category == 3 ? tulip :
                            spotObject.category == 4 ? rose :
                            spotObject.category == 5 ? iris :
                            spotObject.category == 6 ? sunflower :
                            ''
                        }`)}}
                        >
                            {infoWindowOpen && (
                                <InfoWindowF 
                                    onCloseClick={() => setInfoWindowOpen(false)}
                                    position={({lat: spotObject?.location?.x, lng: spotObject?.location?.y})}
                                >
                                    <>
                                        <h3>{spotObject.name}</h3>
                                        <p>{spotObject.location.x}, {spotObject.location.y}</p>
                                        <p>{spotObject.description}</p>
                                    </>
                                </InfoWindowF>
                             )}
                    </MarkerF>
        </>
    )
}

export default Marker; 