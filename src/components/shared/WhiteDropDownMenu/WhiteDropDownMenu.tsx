import React, { ReactText, useState, useRef } from 'react';
import { ChevronDown as ChevronDownIcon } from 'react-feather';
import { config, useTransition } from 'react-spring';

import { useOnClickOutside } from '../../../utils/hooks';

import { Container, Toggle, Menu, MenuItem } from './styled';

interface Props {
  selected: any;
  menuItems: { id: ReactText; name: string }[];
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

  const selectedMenuItem = menuItems.find((item) => item.id === selected);

  return (
    <Container ref={menuRef}>
      <Toggle
        type="button"
        onClick={() => setShowMenu(!showMenu)}
        isMenuOpen={showMenu}
      >
        {selectedMenuItem && selectedMenuItem.name}
        <ChevronDownIcon />
      </Toggle>
      {transition.map(
        ({ key, props, item }) =>
          item && (
            <Menu key={key} style={props}>
              {menuItems.map((menuItem, i) => (
                <MenuItem
                  type="button"
                  key={`${menuItem.id}-${i}`}
                  active={menuItem.id === selected}
                  onClick={() => {
                    onChange(menuItem.id);
                    setShowMenu(false);
                  }}
                >
                  {menuItem.name}
                </MenuItem>
              ))}
            </Menu>
          )
      )}
    </Container>
  );
};

export default WhiteDropDownMenu;
