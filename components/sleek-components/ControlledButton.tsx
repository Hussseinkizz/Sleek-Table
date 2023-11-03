// Smart Button handles routing, highlighting of active button and click and hover states

import { useStore } from '../hooks/useStore';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

type Props = {
  route: string;
  defaultSelect?: boolean;
  selectedIcon: JSX.Element;
  unselectedIcon: JSX.Element;
};

const ControlledButton = (props: Props) => {
  const [selected, setSelected] = useState<string>('');
  const [highlight, setHighlight] = useState(false);
  const { state, setState } = useStore();
  const router = useRouter();

  // set highlighted Item on component load
  useEffect(() => {
    setSelected(state.pageTitle);
    if (props.defaultSelect || selected === state.pageTitle) {
      setHighlight(true);
    }
  }, [state.pageTitle, props, selected]);

  // update state in client data layer (store)
  const updateTitleState = (value: string) => {
    setState({
      type: 'SET_TITLE',
      payload: value,
    });
  };

  const handleSelection = (target: string) => {
    if (target === selected) {
      return;
    }
    setSelected(target);
    updateTitleState(target);
    // handle tabs navigation
    if (target === 'home') {
      router.push('/');
    } else {
      router.push(`/${target}`);
    }
  };

  return (
    <button
      className={`flex gap-2 items-center justify-center p-2 transition-all ease-linear hover:bg-blue-100 hover:text-blue-600 rounded-lg capitalize ${
        highlight ? 'bg-blue-100 text-blue-600' : 'bg-red-100 text-red-600'
      }`}
      onClick={() => handleSelection(props.route)}>
      <span>{highlight ? props.selectedIcon : props.unselectedIcon}</span>
      <span>{props.route}</span>
    </button>
  );
};

export default ControlledButton;
