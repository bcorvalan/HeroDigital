import React from 'react'
import ChevronIcon from '../components/icons/CheckIcon'
import { components } from "react-select";

export default function DropdownIndicator(props) {
    return (
        <components.DropdownIndicator {...props}>
        <ChevronIcon />
      </components.DropdownIndicator>
    )
}
