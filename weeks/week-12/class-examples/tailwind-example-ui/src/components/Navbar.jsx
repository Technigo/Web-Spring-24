import logo from "/logo.svg"

export const NavBar = () => {
  return (
    <nav className="bg-technigoBlue p-6">
      <div className="container mx-auto">
        <img src={logo} className="h-10" />
      </div>
    </nav>
  )
}
