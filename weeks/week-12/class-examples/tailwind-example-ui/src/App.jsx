
const App = () => {
  return (
    <>
      <section className="py-20">
        <div className="container px-4 mx-auto">
          <div className="flex flex-wrap items-center -mx-4">
            <div className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0">
              <div className="max-w-lg">
                <h2 className="mb-6 text-3xl leading-tight md:text-4xl md:leading-tight lg:text-5xl lg:leading-tight font-bold font-heading font-mono text-white">
                  Welcome to Technigo!
                </h2>
                <p className="leading-relaxed lg:text-xl lg:leading-relaxed text-indigo-50 font-nella">
                  Technigo is a new form of education, a fast paced tech
                  education formed to teach the latest technologies. For us,
                  technology is creative. It’s a tool that enables you to reach
                  and affect many people globally. Together with successful tech
                  companies we educate people to build future digital
                  experiences.
                </p>
              </div>
            </div>
            <div className="w-full lg:w-1/2 px-4">
              <div className="lg:max-w-md p-6 bg-gray-50 text-center rounded-lg">
                <form action="#">
                  <span className="text-sm text-gray-500 font-semibold uppercase">
                    Sign Up
                  </span>
                  <h3 className="mb-8 text-2xl font-bold font-heading">
                    Create new account
                  </h3>
                  <input
                    className="w-full py-3 pl-3 mb-4 bg-white rounded-lg"
                    type="email"
                    placeholder="E-mail address"
                  />
                  <input
                    className="w-full py-3 pl-3 mb-4 bg-white rounded-lg"
                    type="password"
                    placeholder="Password"
                  />
                  <input
                    className="w-full py-3 pl-3 mb-4 bg-white rounded-lg"
                    type="password"
                    placeholder="Repeat password"
                  />
                  <label className="inline-block mb-4">
                    <input
                      className="mr-1"
                      type="checkbox"
                      name="terms"
                      defaultValue={1}
                    />
                    <span className="text-sm text-gray-500">
                      By signing up, you agree to our
                      <a className="font-bold hover:underline" href="#">
                        Terms, Data Policy
                      </a>
                      and
                      <a className="font-bold hover:underline" href="#">
                        Cookies Policy
                      </a>
                      .
                    </span>
                  </label>
                  <button className="block w-full px-5 py-3 text-sm bg-orange-500 lg:bg-clifford md:bg-indigo-500 hover:bg-indigo-600 text-white font-semibold rounded transition duration-700 hover:-translate-y-1 hover:scale-105">
                    Get Started
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default App
