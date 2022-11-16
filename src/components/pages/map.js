import React from 'react';
import { useState } from 'react'; 
import { GoogleMap, DirectionsRenderer,DirectionsService,Marker,LoadScript,useJsApiLoader } from '@react-google-maps/api';

const containerStyle = {
  width: '400px',
  height: '400px'
};

const center = {
  lat: -3.745,
  lng: -38.523
};

function SimpleMap() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyDA0d4e-jZWyNgpN-vJXeYEIhOspv5SIoQ"
  })

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={{height:'50vh'}}
        center={center}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
  ) : <></>
}

export default React.memo(SimpleMap)
// function SimpleMap (props) {
//   const [response, setResponse] = useState(null);
 
//   const hasTwoAddresses = (
//    props.pickUpAddress !== '' &&
//    props.dropOffAddress !== ''
//   );
 
//   const directionsCallback = (response) => {
//    if (response !== null && response.status === 'OK') {
//     setResponse(response);
//    }
//   };
 
//   return (
//    <LoadScript
//     googleMapsApiKey='AIzaSyAJYHr0VJxCC3QNEmAU5HXDTUP2W9nk5OU'
//    >
//     <GoogleMap
//      center={{
//       lat: 15.285,
//       lng:  73.973
//      }}
//      mapContainerStyle={{
//       width: '100%',
//       height: '300px',
//       'margin-bottom': '10px'
//      }}
//      zoom={props.zoom}
//     >
//      {
//       hasTwoAddresses && (
//        <DirectionsService
//         options={{
//          origin:'Om Sai Tution Classes, Unnamed Road, Swami Vivekanand Society, Borda, Margao, Goa' ,
//          destination: "Cabo Serai - Eco Resort, Canaguinim, Goa",
//          travelMode: 'DRIVING'
//         }}
//         callback={directionsCallback}
//        >
//        </DirectionsService>
//       )
//      }
//      {
//       hasTwoAddresses && response !== null && (
//        <DirectionsRenderer
//         options={{
//          directions: response
//         }}
//        />
//       )
//      }
//      {
//       !hasTwoAddresses && (
//        <Marker
//         label='A'
//         position={{
//          lat: 15.285,
//          lng: 73.973
//         }}
//        >
//        </Marker>
//       )
//      }
//     </GoogleMap>
//  </LoadScript>
//   ) ;
//  }

//  export default SimpleMap;

