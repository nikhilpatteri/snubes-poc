import "react-phone-number-input/style.css";
import Input, {
  getCountries,
  getCountryCallingCode,
} from "react-phone-number-input/input";
import en from "react-phone-number-input/locale/en.json";
import { E164Number } from "libphonenumber-js/types";
import { useEffect, useState } from "react";
import lookupCountry from "../FormContainer/lookupCountry";

const CountrySelect = ({
  value,
  onChange,
  labels,
  ...rest
}: {
  value: any;
  onChange: any;
  labels: any;
}) => (
  <select
    {...rest}
    value={value}
    onChange={(event) => onChange(event.target.value || undefined)}
  >
    <option value="">{labels.ZZ}</option>
    {getCountries().map((country) => (
      <option key={country} value={country}>
        {labels[country]} +{getCountryCallingCode(country)}
      </option>
    ))}
  </select>
);

const PhoneInput = (): JSX.Element => {
  const [phone, setPhone] = useState<E164Number>();
  const [country, setCountry] = useState();

  async function handleNavigator(pos: any) {
    const { latitude, longitude } = pos.coords;
    const userCountryCode = await lookupCountry({ latitude, longitude });
    setCountry(userCountryCode);
    console.log(userCountryCode)
  }

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(handleNavigator, () =>
      alert("unable to find the location")
    );
  }, []);

  const _handleChange = (e: E164Number): void => {
    setPhone(e);
    console.log(e);
  };

  return (
    <>
      <CountrySelect labels={en} onChange={() => {}} value={country} />
      <Input
        placeholder="Phone Number"
        onChange={_handleChange}
        value={phone}
      />
    </>
  );
};

export default PhoneInput;
