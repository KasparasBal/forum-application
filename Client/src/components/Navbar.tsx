const Navbar = () => {
  // const hamburger: string = (
  //   <svg
  //     xmlns="http://www.w3.org/2000/svg"
  //     width="24"
  //     height="24"
  //     viewBox="0 0 24 24"
  //   >
  //     <path d="M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z" />
  //   </svg>
  // );

  return (
    <div className="bg-sky-700 p-6 flex items-center justify-between">
      <div>icon</div>
      <div className="bg-sky-50 p-2 w-2/5">search</div>
      <div>menu</div>
    </div>
  );
};

export default Navbar;
