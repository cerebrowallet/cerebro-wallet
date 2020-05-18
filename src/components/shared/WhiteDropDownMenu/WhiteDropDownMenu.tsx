import React, { useState, useRef } from 'react';
import { ChevronDown as ChevronDownIcon } from 'react-feather';
import { config, useTransition } from 'react-spring';

import { useOnClickOutside } from '../../../utils/hooks';

import { Container, Toggle, Menu, MenuItem } from './styled';

export interface Option {
  id: string | number;
  name: string;
}

interface Props {
  selected: any;
  menuItems: Option[];
  onChange: (value: any) => void;
  valueRenderer?: (value: Option) => React.ReactElement;
  position?: 'right' | 'left';
}

const WhiteDropDownMenu: React.FC<Props> = ({
  selected,
  menuItems,
  onChange,
  valueRenderer,
  position,
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
        position={position}
      >
        {selectedMenuItem && (
          <>
            {valueRenderer
              ? valueRenderer(selectedMenuItem)
              : selectedMenuItem.name}
          </>
        )}
        <ChevronDownIcon />
      </Toggle>
      {transition.map(
        ({ key, props, item }) =>
          item && (
            <Menu key={key} style={props} position={position}>
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
