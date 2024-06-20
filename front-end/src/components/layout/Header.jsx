import React from 'react';
import logoRachaConta from '../../assets/LogoRachaConta.svg';

const Header = () => {
  return (
    <>
      <div className="container flex justify-center items-center gap-3">
        <p className="text-textColor font-bold mt-6">
          Que tal dividir a conta?
        </p>
        <img src={logoRachaConta} alt="Logo Racha Conta" className="size-32" />
      </div>
    </>
  );
};

export default Header;
