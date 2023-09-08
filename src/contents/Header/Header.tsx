import React from "react";

type HeaderProps = {
  name: string;
}

const Header = ({name}: HeaderProps): JSX.Element => {
  return <div>{name}</div>
}

export default Header;