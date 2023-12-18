


function App() {
  

  return (
    <>
      {/*Hero Section */}
      <section id="hero">
        {/*Hero Container */}
        <div id="container" className="mx-auto px-6 py-12 container">
          {/*Nav/Logo Container */}
          <nav className="flex items-center justify-between font-alata text-white">
            {/*Logo */}
            <img id="logo" src="logo-desktop.png" alt="" className="w-[200px] h-[80px]"/>
            {/*Menu */}
            <div className="hidden h-10 font-alata md:flex md:space-x-8 md:mr-8">
              <div className="group">
                <a href="#">ABOUT</a>
                <div className="mx-2 group-hover:border-b group-hover:border-blue-50 ">
                </div>
              </div>
              <div className="group">
                <a href="#">SKILLS</a>
                <div className="mx-2 group-hover:border-b group-hover:border-blue-50 ">
                </div>
              </div>
              <div className="group">
                <a href="#">PROJECTS</a>
                <div className="mx-2 group-hover:border-b group-hover:border-blue-50 ">
                </div>
              </div>
              <div className="group">
                <a href="#">CONTACT</a>
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
