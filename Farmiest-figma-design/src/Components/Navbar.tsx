function Navbar() {
  return (
    <div className="h-10">
      <div className="flex flex-row">
        <p className="text-2xl font-bold mr-5">Farmiest!</p>

        <div className="flex flex-row">
          <ul className="flex flex-row text-xl font-semibold space-x-4">
            <li>Home</li>
            <li>Store</li>
            <li>Contact</li>
            <li>About</li>
          </ul>
        </div>
      </div>
      <div></div>
      <div></div>
    </div>
  );
}

export default Navbar;
