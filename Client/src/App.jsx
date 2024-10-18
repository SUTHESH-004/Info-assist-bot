import React from "react";

const App = () => {
  return (
    <div className="App">
      {/* Navbar */}
      <nav className="bg-gray-800 p-4 fixed w-full z-10">
        <div className="container mx-auto">
          <h1 className="text-white text-2xl font-bold">
            Virat Kohli - Wikipedia
          </h1>
          <ul className="flex space-x-4 mt-2">
            <li>
              <a href="#biography" className="text-gray-300 hover:text-white">
                Biography
              </a>
            </li>
            <li>
              <a
                href="#career-stats"
                className="text-gray-300 hover:text-white"
              >
                Career Stats
              </a>
            </li>
            <li>
              <a
                href="#achievements"
                className="text-gray-300 hover:text-white"
              >
                Achievements
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Content Sections */}
      <div className="pt-16">
        {/* Biography Section */}
        <section id="biography" className="py-12 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-4">Biography</h2>
            <p className="text-lg text-gray-700">
              Virat Kohli (born 5 November 1988) is an Indian cricketer and
              former captain of the Indian national team. He is widely regarded
              as one of the greatest batsmen in the history of cricket. Kohli
              has received numerous awards and accolades for his remarkable
              performances on the field, including the ICC Cricketer of the
              Year, and has broken several records in international cricket.
            </p>
          </div>
        </section>

        {/* Career Stats Section */}
        <section id="career-stats" className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-4">Career Stats</h2>
            <table className="min-w-full bg-gray-100 border">
              <thead>
                <tr>
                  <th className="border px-4 py-2">Format</th>
                  <th className="border px-4 py-2">Matches</th>
                  <th className="border px-4 py-2">Runs</th>
                  <th className="border px-4 py-2">Average</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-4 py-2">Test</td>
                  <td className="border px-4 py-2">111</td>
                  <td className="border px-4 py-2">8500</td>
                  <td className="border px-4 py-2">53.0</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">ODI</td>
                  <td className="border px-4 py-2">254</td>
                  <td className="border px-4 py-2">12350</td>
                  <td className="border px-4 py-2">59.1</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">T20I</td>
                  <td className="border px-4 py-2">95</td>
                  <td className="border px-4 py-2">3159</td>
                  <td className="border px-4 py-2">52.7</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Achievements Section */}
        <section id="achievements" className="py-12 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-4">Achievements</h2>
            <ul className="list-disc ml-5 text-lg text-gray-700">
              <li className="mb-2">ICC Cricketer of the Year - 2017, 2018</li>
              <li className="mb-2">Fastest to 10,000 ODI runs</li>
              <li className="mb-2">Multiple ICC Player of the Month awards</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default App;
