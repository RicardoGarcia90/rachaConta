const ButtonClear = ({ children, onClick, style, onKeyDown }) => {
  return (
    <div className={style} onClick={onClick}>
      {children}
    </div>
  );
};

export default ButtonClear;
