import React from 'react';

const ReportCard = () => {
  const data = [
    { sno: 1, city: 'Jaipur', dec: '-', apr: '677', nov: '650', apr24: '527', oct: '430' },
    { sno: 2, city: 'Udaipur', dec: '-', apr: '521', nov: '-', apr24: '-', oct: '-' },
    { sno: 3, city: 'Kota', dec: '879', apr: '-', nov: '-', apr24: '-', oct: '3100' },
    { sno: 4, city: 'Jodhpur', dec: '-', apr: '-', nov: '419', apr24: '-', oct: '-' },
    { sno: 5, city: 'Delhi - 1', dec: '971', apr: '1900', nov: '1679', apr24: '1160', oct: '1028' },
    { sno: 6, city: 'Patna - 1', dec: '-', apr: '-', nov: '-', apr24: '480', oct: '807' },
    { sno: 7, city: 'Agra', dec: '453', apr: '810', nov: '580', apr24: '818', oct: '803' },
  ];

  return (
    <section id="report-card" className="max-w-7xl mx-auto my-16 px-8 scroll-mt-32">
      <div className="bg-[#6b1b1b] border-4 border-[#8b2323] p-4 rounded shadow-2xl">
        <div className="bg-yellow-400 text-center py-4 rounded-t mb-1 border-b-4 border-[#6b1b1b]">
          <h2 className="text-5xl font-extrabold text-[#333333] tracking-wider uppercase">
            Report Card
          </h2>
        </div>
        
        <div className="bg-yellow-300 text-center py-2 font-bold text-lg text-red-900 border-b-2 border-red-900 mb-0">
          Last Years Events Statistics <span className="text-black text-xl">Total Students Footfalls</span> in each City
        </div>
        
        <div className="overflow-x-auto bg-white rounded-b">
          <table className="w-full text-center border-collapse text-sm">
            <thead>
              <tr className="bg-[#cd853f] text-black font-semibold">
                <th className="border border-gray-400 py-2 px-2">S.No</th>
                <th className="border border-gray-400 py-2 px-4">City</th>
                <th className="border border-gray-400 py-2 px-2 text-xs leading-tight">Physical Students attained...<br/>(In Dec 2022 to Feb 2023)</th>
                <th className="border border-gray-400 py-2 px-2 text-xs leading-tight">Physical Students attained...<br/>(In April 2023 to July 2023)</th>
                <th className="border border-gray-400 py-2 px-2 text-xs leading-tight">Physical Students attained...<br/>(In Nov 2023 to Feb 2024)</th>
                <th className="border border-gray-400 py-2 px-2 text-xs leading-tight">Physical Students attained...<br/>(In April 2024 to July 2024)</th>
                <th className="border border-gray-400 py-2 px-2 text-xs leading-tight">Physical Students attained...<br/>(In Oct 2024 to Feb 2025)</th>
              </tr>
            </thead>
            <tbody>
              {data.map((row, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-[#e5d6cd]' : 'bg-[#d6c4ba]'}>
                  <td className="border border-gray-400 py-2 px-2">{row.sno}</td>
                  <td className="border border-gray-400 py-2 px-4 font-medium text-left">{row.city}</td>
                  <td className="border border-gray-400 py-2 px-2">{row.dec}</td>
                  <td className="border border-gray-400 py-2 px-2">{row.apr}</td>
                  <td className="border border-gray-400 py-2 px-2">{row.nov}</td>
                  <td className="border border-gray-400 py-2 px-2">{row.apr24}</td>
                  <td className="border border-gray-400 py-2 px-2">{row.oct}</td>
                </tr>
              ))}
              <tr className="bg-[#cd853f] font-bold text-black border-t-2 border-black">
                <td colSpan="2" className="border border-gray-400 py-2 px-4 text-center">Total</td>
                <td className="border border-gray-400 py-2 px-2">2303</td>
                <td className="border border-gray-400 py-2 px-2">3908</td>
                <td className="border border-gray-400 py-2 px-2">3328</td>
                <td className="border border-gray-400 py-2 px-2">2923</td>
                <td className="border border-gray-400 py-2 px-2">6168</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default ReportCard;
