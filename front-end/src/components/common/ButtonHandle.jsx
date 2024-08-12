const ButtonHandle = ({
  children,
  onClick,
  style,
  onKeyDown,
  type = 'button',
}) => {
  return (
    <button className={style} onClick={onClick} type={type}>
      {children}
    </button>
  );
};

export default ButtonHandle;
