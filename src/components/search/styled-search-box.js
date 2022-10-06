import styled, { css } from "styled-components"
import SearchBox from "./search-box"

const open = css`
  width: 10em;
  background: ${({ theme }) => theme.background};
  cursor: text;
  margin-left: -1.6em;
  padding-left: 1.6em;
`

const closed = css`
  width: 0;
  background: transparent;
  cursor: pointer;
  margin-left: -1em;
  padding-left: 1em;
`

export default styled(SearchBox)`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  margin-bottom: 0;

  .SearchInput {
    outline: none;
    border: ${({ hasFocus }) => (hasFocus ? "auto" : "none")};
    font-size: 14px;
    transition: 100ms;
    border-radius: 1px;
    padding: 8px;
    color: ${({ theme }) => theme.foreground};
    ::placeholder {
      color: ${({ theme }) => theme.faded};
    }
    ${({ hasFocus }) => (hasFocus ? open : closed)}
  }

  .SearchIcon {
    width: 24px;
    margin-left: 8px;
    color: ${({ theme }) => theme.foreground};
    pointer-events: none;
  }
`