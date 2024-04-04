


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
    {/*About Section */}
    <section id="about" className="mt-10">
      {/*About Container */}
      <div className="max-w-lg  text-2xl ml-12 text-lightgreen font-sfmono">
        Hi, My name is
      </div>
      <div className="max-w-lg  text-2xl ml-12 mt-8 text-lightwhite">
        Zakaria Bhaibi.
      </div>
      <div className="max-w-lg  text-2xl ml-12 mt-2 mb-8 text-lightwhite2">
        I like building new things.
      </div>
      <p className=" px-12 text-lightwhite2 text-lg ">I’m a software engineer specializing in building exceptional digital experiences. Currently, I’m focused on being a Full Stack Web Developer.</p>
      <button className="text-lightgreen border-2 border-[#4357AD] text-center mt-12 uppercase text-xl py-4 px-24 mx-12 hover:bg-[#4357AD] hover:text-lightgreen">
        Check My resume
      </button>
      </section>

    


      
    </>
  )
}

export default App
