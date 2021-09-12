import { FormControl, FormHelperText, InputLabel, NativeSelect } from '@material-ui/core';
import React, { ChangeEventHandler } from 'react'

interface ICountry {
    Country: string;
    Slug: string;
    ISO2: string
}

type Props = {
    value: string | '',
    onChange: React.MouseEventHandler<HTMLLabelElement>,
    countries: Array<ICountry>
}

const Country = ({ value, onChange, countries }: Props) => {

    return (
        <FormControl>
            <InputLabel onClick={onChange} htmlFor={`country_${value}`} shrink >Countries</InputLabel>
            <NativeSelect value={value} inputProps={{ id: `country_${value}` }}>
                {
                    countries.map((x) => <option value={x.ISO2}>{x.Country}</option>)
                }
            </NativeSelect>
            <FormHelperText>Choose your country</FormHelperText>
        </FormControl>
    )
}

export default Country;