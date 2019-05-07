import React from 'react'
import styled from 'styled-components'
import Select from 'react-select'

import { TOKEN_SYMBOLS } from '../utils'

const SelectMenu = styled(Select)`
  display: block;
  font-size: 16px;
  border-radius: 24px;
  margin: 1rem;
  font-family: sans-serif;
  font-weight: 700;
  padding: 0.6em 1.4em 0.5em 0.8em;
  width: 100%;
  height: 48px;
  max-width: 100%;
  box-sizing: border-box;
  margin: 0;
  appearance: none;
  background-color: #fff;
`

const options = Object.keys(TOKEN_SYMBOLS)
  .filter(s => s !== 'SOCKS')
  .map(s => ({ value: s, label: s }))

export default function SelectToken({ selectedTokenSymbol, setSelectedTokenSymbol }) {
  return (
    <SelectMenu
      value={{ value: selectedTokenSymbol, label: selectedTokenSymbol }}
      onChange={({ value }) => {
        setSelectedTokenSymbol(value)
      }}
      options={options}
    />
  )
}