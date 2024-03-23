type HeaderProps = {
  viewCart: boolean;
  setViewCart: React.Dispatch<React.SetStateAction<boolean>>;
};

const Nav = ({ viewCart, setViewCart }: HeaderProps) => {
  return (
    <nav className="nav">
      <button onClick={() => setViewCart((viewCart: boolean) => !viewCart)}>
        Show {viewCart ? "Products" : "Cart"}
      </button>
    </nav>
  );
};

export default Nav;
