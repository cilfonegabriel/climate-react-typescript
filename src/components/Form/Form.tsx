import { ChangeEvent, FormEvent, useState } from "react";
import type { SearchType } from "../../types";
import { countries } from "../../data/countries";
import styles from "./Form.module.css"

export default function Form() {

  const [search, setSearch] =useState<SearchType>({
    city : '',
    country : '',
  })

  const handleChange = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) => {
    setSearch({
      ...search,
      [e.target.name] : e.target.value
    })
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (Object.values(search).includes('')){
      console.log("Si hay campos vacios...")
    }
  }

  return (
    <form 
      className={styles.form}
      onSubmit={handleSubmit}
    >
      <div className={styles.field}>
        <label htmlFor="city">City: </label>
        <input
            id="city" 
            type="text" 
            name="city"
            placeholder="City"
            value={search.city}
            onChange={handleChange}
        />
      </div>

      <div className={styles.field}>
        <label htmlFor="country">Country: </label>
        <select
          id="country"
          value={search.country}
          name="country"
          onChange={handleChange}
        >
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
