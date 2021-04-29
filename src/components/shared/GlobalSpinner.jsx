import React, { useContext } from 'react';
import { GlobalSpinnerContext } from '../../GlobalSpinnerContext';

const spinnerStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.3)',
  fontSize: '30px',
  color: 'white',
  fontWeight: 'bold',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const GlobalSpinner = () => {
  const { isGlobalSpinnerOn } = useContext(GlobalSpinnerContext);

  return (
    <>
      {isGlobalSpinnerOn ? (
        <div className={spinnerStyle}>
          <p>Loading...</p>
        </div>
      ) : null}
    </>
  );
};

export default GlobalSpinner;
