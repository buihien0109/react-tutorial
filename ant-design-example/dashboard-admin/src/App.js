import { Button, Menu } from 'antd';
import './App.css';

function App() {
  const items = [
    { label: 'item 1', key: 'item-1' }, // remember to pass the key prop
    { label: 'item 2', key: 'item-2' }, // which is required
    {
      label: 'sub menu',
      key: 'submenu',
      children: [{ label: 'item 3', key: 'submenu-item-1' }],
    },
  ];
  return (
    <>
      <Menu items={items} />
      <Button type="primary">Button</Button>
    </>
  );
}

export default App;
