import React from "react";

declare type HeaderProps = {
  name: string;
}

type State = {
  id: number;
  open: boolean;
}

const Header = ({name}: HeaderProps): JSX.Element => {
  const [state, setState] = React.useState<State>({id: 0, open: true});

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) : void => {
    setState({
      ...state,
      open: !state.open,
    });
  }

  return (
    <div>
      {state.open && (<div>{name}</div>)}
      <button onClick={handleClick}>Button</button>
    </div>
  );
}

export default Header;