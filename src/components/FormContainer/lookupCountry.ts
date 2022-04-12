async function lookupCountry({
  latitude,
  longitude,
}: {
  latitude: any;
  longitude: any;
}) {
  const API_KEY = 'AIzaSyCW_pamlPE-2QmCulmwz-ik8stRA9tsi-E';
  const URL = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${API_KEY}`;

  const locationData = await fetch(URL).then((res) => res.json());

  const [{ address_components }] = locationData.results.filter(
    ({ types }: { types: any }) => types.includes("country")
  );

  const [{ short_name }] = address_components;

  return short_name;
}
export default lookupCountry;
