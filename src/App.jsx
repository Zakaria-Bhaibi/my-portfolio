


function App() {
  

  return (
    <>
      {/*Hero Section */}
      <section id="hero">
        {/*Hero Container */}
        <div id="container" className="mx-auto px-6 py-12 container">
          {/*Nav/Logo Container */}
          <nav className="flex items-center justify-between font-bold text-white">
            {/*Logo */}
            <img id="logo" src="logo-desktop.png" alt="" className="w-[200px] h-[80px]"/>
            {/*Menu */}
            <div className="hidden h-10 font-alata md:flex md:space-x-8 md:mr-8">
              <div className="group">
                <a href="#">About</a>
                <div className="mx-2 group-hover:border-b group-hover:border-blue-50 ">
                </div>
              </div>
              <div className="group">
                <a href="#">Carrers</a>
                <div className="mx-2 group-hover:border-b group-hover:border-blue-50 ">
                </div>
              </div>
              <div className="group">
                <a href="#">Events</a>
                <div className="mx-2 group-hover:border-b group-hover:border-blue-50 ">
                </div>
              </div>
              <div className="group">
                <a href="#">Products</a>
                <div className="mx-2 group-hover:border-b group-hover:border-blue-50 ">
                </div>
              </div>
              <div className="group">
                <a href="#">Support</a>
                <div className="mx-2 group-hover:border-b group-hover:border-blue-50 ">
                </div>
              </div>
              <div className="group">
                <a href="#">Resume</a>
                <div className="mx-2 group-hover:border-b group-hover:border-blue-50 ">
                </div>
              </div>
            </div>
          </nav>
        </div>
      </section>

      
    </>
  )
}

export default App
