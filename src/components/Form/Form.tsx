import { useState } from "react";
import type { SearchType } from "../../types";
import { countries } from "../../data/countries";
import styles from "./Form.module.css"

export default function Form() {

  const [search, setSearch] =useState<SearchType>({
    city : '',
    country : '',
  })
  return (
    <form className={styles.form}>
      <div className={styles.field}>
        <label htmlFor="city">City: </label>
        <input
            id="city" 
            type="text" 
            name="city"
            placeholder="City"
        />
      </div>

      <div className={styles.field}>
        <label htmlFor="country">County: </label>
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

      <input className={styles.submit} type="submit" value="Consultar Clima" />
    </form>
  )
}
