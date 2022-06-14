async function getReverseGeocodingData(lat, lng) {
    let latlng = new window.google.maps.LatLng(lat, lng);
    // This is making the Geocode request
    let geocoder = new window.google.maps.Geocoder();
    return await geocoder.geocode({ 'latLng': latlng }, function (results, status) {

        let pulledAddress;
        if (status !== window.google.maps.GeocoderStatus.OK) {
            alert(status);
        }
        // This is checking to see if the Geoeode Status is OK before proceeding
        if (status == window.google.maps.GeocoderStatus.OK) {
            pulledAddress = (results[0].formatted_address);
            //setAddress(pulledAddress)
            return pulledAddress
            
        }

        return pulledAddress
    });
}


export default getReverseGeocodingData