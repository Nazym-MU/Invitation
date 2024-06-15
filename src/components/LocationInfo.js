import React from 'react';
import MapLink from './MapLink';

function LocationInfo() {
    return (
        <div className="location">
            <div className="header">
                <h2>Here‘s my address:</h2>
            </div>
            <div className="map-links">
                <MapLink 
                    href="https://maps.app.goo.gl/xgRK2bBDmQV9F9EP6"
                    src="/images/Google.png"
                    alt="Google Maps"
                    logoText="Google Maps"
                />
                <MapLink 
                    href="https://2gis.kz/almaty/geo/70030076356099813/76.620195%2C43.166911?m=76.619657%2C43.167138%2F17.81"
                    src="/images/2gis.png"
                    alt="2GIS"
                    logoText="2GIS"
                />
                <MapLink 
                    href="https://maps.apple.com/?address=Almaty,%20Kazakhstan&auid=12690480143916179738&ll=43.166778,76.620084&lsp=7618&q=Dropped%20Pin"
                    src="/images/Apple.png"
                    alt="Apple Maps"
                    logoText="Apple Maps"
                />
            </div>
            <div className="header">
                <h2>By continuing, you agree to the following terms and conditions:</h2>
                <ul> 
                    <li>You understand that the house is in the middle of nowhere (Kaskelen) and getting there might be daunting.</li>
                    <li>You understand that Nazym is not going to kick her family (5 people besides her) out of the house.</li>
                    <li>You understand that it's 23 grad outside and we will be at home, so it's better not to wear uncomfortable clothes.</li>
                </ul>
            </div>
        </div>
    );
}

export default LocationInfo;