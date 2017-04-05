import React from 'react';
import IconChooser from '../../../Button/IconChooser';

class PopoverMenuBuilder extends React.Component {
  state = {
    menuItems: [
      {iconName: 'PenOutline', text: 'Edit'},
      {iconName: 'VisibilityHidden', text: 'Hide'},
      {iconName: 'Trash3', text: 'Delete'}
    ]
  };

  render() {
    const content = this.state.menuItems.map((menuItem, i) => <IconChooser key={i} selectedId={menuItem.iconName} onSelect={opt => console.log(opt)}/>);

    return (
      <div>
        {content}
      </div>
    );
  }
}

export default PopoverMenuBuilder;
