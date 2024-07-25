import React from 'react';

const SizeChart: React.FC = () => {
  return (
    <div className="absolute inset-0 w-[150%] h-[130%] bg-cover bg-center" style={{ backgroundImage: "url('src/assets/silk-4916174_1280.jpg')" }}>
      <div className="flex items-center justify-center w-full h-full pt-8 pr-80">
        <div className="max-w-4xl w-full z-10 p-8 font-sans text-gray-700 bg-white bg-opacity-60 backdrop-filter backdrop-blur-lg mx-4 my-8 rounded-lg shadow-lg transform -translate-x-40">
          <h1 className="text-4xl font-normal mb-4 text-center">Size chart</h1>
          <p className="mb-8 text-center">Select the size that most closely matches your body measurements.</p>
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse">
              <thead>
                <tr>
                  <th className="px-4 py-2 border-b bg-white bg-opacity-60">Sizes</th>
                  <th className="px-4 py-2 border-b bg-white bg-opacity-60">XS</th>
                  <th className="px-4 py-2 border-b bg-white bg-opacity-60">S</th>
                  <th className="px-4 py-2 border-b bg-white bg-opacity-60">M</th>
                  <th className="px-4 py-2 border-b bg-white bg-opacity-60">L</th>
                  <th className="px-4 py-2 border-b bg-white bg-opacity-60">XL</th>
                  <th className="px-4 py-2 border-b bg-white bg-opacity-60">2XL</th>
                  <th className="px-4 py-2 border-b bg-white bg-opacity-60">3XL</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-4 py-2 border-b bg-white bg-opacity-60">Size UK</td>
                  <td className="px-4 py-2 border-b bg-white bg-opacity-60">6-8</td>
                  <td className="px-4 py-2 border-b bg-white bg-opacity-60">8-10</td>
                  <td className="px-4 py-2 border-b bg-white bg-opacity-60">10-12</td>
                  <td className="px-4 py-2 border-b bg-white bg-opacity-60">12-14</td>
                  <td className="px-4 py-2 border-b bg-white bg-opacity-60">14-16</td>
                  <td className="px-4 py-2 border-b bg-white bg-opacity-60">18-20</td>
                  <td className="px-4 py-2 border-b bg-white bg-opacity-60">20-22</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border-b bg-white bg-opacity-60">Bust (in)</td>
                  <td className="px-4 py-2 border-b bg-white bg-opacity-60">29"-31"</td>
                  <td className="px-4 py-2 border-b bg-white bg-opacity-60">32"-34"</td>
                  <td className="px-4 py-2 border-b bg-white bg-opacity-60">35"-37"</td>
                  <td className="px-4 py-2 border-b bg-white bg-opacity-60">38"-40"</td>
                  <td className="px-4 py-2 border-b bg-white bg-opacity-60">41"-43"</td>
                  <td className="px-4 py-2 border-b bg-white bg-opacity-60">44"-46"</td>
                  <td className="px-4 py-2 border-b bg-white bg-opacity-60">47"-50"</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border-b bg-white bg-opacity-60">Waist (in)</td>
                  <td className="px-4 py-2 border-b bg-white bg-opacity-60">24"-26"</td>
                  <td className="px-4 py-2 border-b bg-white bg-opacity-60">27"-29"</td>
                  <td className="px-4 py-2 border-b bg-white bg-opacity-60">30"-32"</td>
                  <td className="px-4 py-2 border-b bg-white bg-opacity-60">33"-35"</td>
                  <td className="px-4 py-2 border-b bg-white bg-opacity-60">36"-38"</td>
                  <td className="px-4 py-2 border-b bg-white bg-opacity-60">39"-41"</td>
                  <td className="px-4 py-2 border-b bg-white bg-opacity-60">42"-43"</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border-b bg-white bg-opacity-60">Hips (in)</td>
                  <td className="px-4 py-2 border-b bg-white bg-opacity-60">34"-36"</td>
                  <td className="px-4 py-2 border-b bg-white bg-opacity-60">37"-39"</td>
                  <td className="px-4 py-2 border-b bg-white bg-opacity-60">40"-42"</td>
                  <td className="px-4 py-2 border-b bg-white bg-opacity-60">43"-45"</td>
                  <td className="px-4 py-2 border-b bg-white bg-opacity-60">46"-48"</td>
                  <td className="px-4 py-2 border-b bg-white bg-opacity-60">49"-51"</td>
                  <td className="px-4 py-2 border-b bg-white bg-opacity-60">52"-54"</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SizeChart;
