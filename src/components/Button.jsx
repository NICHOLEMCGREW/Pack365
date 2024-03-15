// Button.jsx
import React from 'react';

const Button = ({ children, buttonStyle }) => {
  const mainBlueColor = '#003f87';
  const yellowColor = '#ffb225';

  let buttonClasses = 'btn';

  if (buttonStyle === 'btn-outline') {
    buttonClasses += ' border border-white text-white hover:bg-white hover:text-' + yellowColor + ' py-2 px-4 rounded-md font-semibold';
  }

  return (
    <button className={buttonClasses} type="button">
      {children}
    </button>
  );
};

export default Button;
