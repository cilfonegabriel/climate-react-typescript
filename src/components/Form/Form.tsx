import { countries } from "../../data/countries";

export default function Form() {
  return (
    <form>
      <div>
        <label htmlFor="city"></label>
        <input
            id="city" 
            type="text" 
            name="city"
            placeholder="City"
        />
      </div>

      <div>
        <label htmlFor="country"></label>
        <select>
            <option value="">-- Seleccione un País --</option>
                {countries.map(country => (
                    <option
                        value={country.code}
                        key={country.code}
                    >{country.name}</option>
                ))}
        </select>
      </div>

      <input type="submit" value="Consultar Clima" />
    </form>
  )
}
