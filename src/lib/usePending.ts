import { useState } from 'react';

interface Props {
  requestFunction: () => void
}

interface ReturnProps {
  isPending: boolean,
  pendingFunc: () => void
}

const usePending = ({ requestFunction } : Props) : ReturnProps => {
  const [isPending, togglePending] = useState(false);

  const pendingFunc = async () => {
    togglePending(true);
    
    await requestFunction();
    
    togglePending(false);

    window.scrollTo(0, 0);
  };

  return {isPending, pendingFunc};
};

export default usePending;
