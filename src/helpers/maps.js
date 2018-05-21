const generateGoogleMapsUrl = address => {
  // Google maps docs: https://developers.google.com/maps/documentation/urls/guide
  // expect address = {street, city, state}
  if (!address.street || !address.city || !address.state) {
    throw Error(
      `Missing parameter(s) in object ${address}. street, city, and state parameters are required.`
    );
  }
  const street = address.street.trim().replace(/\s+/g, "+");
  const city = address.city.trim().replace(/\s+/g, "+");
  const state = address.state.trim().replace(/\s+/g, "+");
  const zip_code = address.zip_code ? `+${address.zip_code}` : "";
  return `https://www.google.com/maps/dir/?api=1&destination=${street}+${city}+${state}${zip_code}`;
};

export default generateGoogleMapsUrl;
