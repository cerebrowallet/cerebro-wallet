import React, { ReactText, useState, useRef } from 'react';
import { ChevronDown as ChevronDownIcon } from 'react-feather';
import { config, useTransition } from 'react-spring';

import { useOnClickOutside } from '../../../utils/hooks';

import { Container, Toggle, Menu, MenuItem } from './styled';

interface Props {
  selected: any;
  menuItems: { value: ReactText; label: string }[];
  onChange: (value: string | number) => void;
}

const WhiteDropDownMenu: React.FC<Props> = ({
  selected,
  menuItems,
  onChange,
}) => {
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);

  const transition = useTransition(showMenu, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: config.stiff,
  });

  useOnClickOutside(menuRef, () => setShowMenu(false));

  if (!selected) {
    return null;
  }

  return (
    <Container ref={menuRef}>
      <Toggle
        type="button"
        onClick={() => setShowMenu(!showMenu)}
        isMenuOpen={showMenu}
      >
        {selected}
        <ChevronDownIcon />
      </Toggle>
      {transition.map(
        ({ key, props, item }) =>
          item && (
            <Menu key={key} style={props}>
              {menuItems.map((menuItem, i) => (
                <MenuItem
                  type="button"
                  key={`${menuItem.value}-${i}`}
                  active={menuItem.value === selected}
                  onClick={() => {
                    onChange(menuItem.value);
                    setShowMenu(false);
                  }}
                >
                  {menuItem.label}
                </MenuItem>
              ))}
            </Menu>
          )
      )}
    </Container>
  );
};

export default WhiteDropDownMenu;
