import React from 'react';

const dummyData = [
  {
    id: 1,
    nameFi: "Kaivopuisto",
    nameSe: "Brunnsparken",
    city: "Helsinki",
    address: "Meritori 1",
    operator: "CityBike Finland",
    capacity: 30,
    longitude: 24.9502,
    latitude: 60.1552
  },
  {
    id: 2,
    nameFi: "Laivasillankatu",
    nameSe: "Skeppsbrogatan",
    city: "Helsinki",
    address: "Laivasillankatu 14",
    operator: "CityBike Finland",
    capacity: 12,
    longitude: 24.9565,
    latitude: 60.1609
  },
  {
    id: 3,
    nameFi: "Kanavaranta",
    nameSe: "Kanalkajen",
    city: "Helsinki",
    address: "Kanavaranta 1",
    operator: "CityBike Finland",
    capacity: 20,
    longitude: 24.9582,
    latitude: 60.1674
  },
  {
    id: 4,
    nameFi: "Ritarikatu",
    nameSe: "Riddargatan",
    city: "Helsinki",
    address: "Ritarikatu 3",
    operator: "CityBike Finland",
    capacity: 16,
    longitude: 24.9527,
    latitude: 60.1701
  },
  {
    id: 5,
    nameFi: "Unioninkatu",
    nameSe: "Unionsgatan",
    city: "Helsinki",
    address: "Unioninkatu 24",
    operator: "CityBike Finland",
    capacity: 24,
    longitude: 24.9507,
    latitude: 60.1721
  },
  {
    id: 6,
    nameFi: "Rautatientori",
    nameSe: "Järnvägstorget",
    city: "Helsinki",
    address: "Rautatientori 1",
    operator: "CityBike Finland",
    capacity: 40,
    longitude: 24.9410,
    latitude: 60.1718
  },
  {
    id: 7,
    nameFi: "Töölönlahdenkatu",
    nameSe: "Tölöviksgatan",
    city: "Helsinki",
    address: "Töölönlahdenkatu 4",
    operator: "CityBike Finland",
    capacity: 28,
    longitude: 24.9368,
    latitude: 60.1756
  },
  {
    id: 8,
    nameFi: "Kiasma",
    nameSe: "Kiasma",
    city: "Helsinki",
    address: "Mannerheiminaukio 2",
    operator: "CityBike Finland",
    capacity: 32,
    longitude: 24.9368,
    latitude: 60.1735
  },
  {
    id: 9,
    nameFi: "Kamppi",
    nameSe: "Kampen",
    city: "Helsinki",
    address: "Kampinkuja 1",
    operator: "CityBike Finland",
    capacity: 36,
    longitude: 24.9321,
    latitude: 60.1689
  },
  {
    id: 10,
    nameFi: "Baana",
    nameSe: "Banan",
    city: "Helsinki",
    address: "Baana 12",
    operator: "CityBike Finland",
    capacity: 26,
    longitude: 24.9252,
    latitude: 60.1646
  }
];

function StationsTable() {
  return (
    <div className="w-full overflow-x-auto px-10 md:px-20">
      <table className="min-w-full text-xs">
        <thead>
          <tr className="bg-gray-50">
            <th className="px-2 py-1 text-center font-semibold text-gray-600 text-xs"></th>
            <th className="px-2 py-1 text-center font-semibold text-gray-600 text-xs">Station</th>
            <th className="px-2 py-1 text-center font-semibold text-gray-600 text-xs">City</th>
            <th className="px-2 py-1 text-center font-semibold text-gray-600 text-xs">Address</th>
            <th className="px-2 py-1 text-center font-semibold text-gray-600 text-xs">Operator</th>
            <th className="px-2 py-1 text-center font-semibold text-gray-600 text-xs">Capacity</th>
            <th className="px-2 py-1 text-center font-semibold text-gray-600 text-xs">Longitude</th>
            <th className="px-2 py-1 text-center font-semibold text-gray-600 text-xs">Latitude</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-100">
          {dummyData.map((station) => (
            <tr key={station.id} className="hover:bg-blue-50 transition-colors">
              <td className="px-2 py-1 whitespace-nowrap text-center">
                <span className="text-blue-600 text-xs align-middle">•</span>
                <button
                  className="align-middle ml-1 cursor-pointer focus:outline-none"
                  onClick={() => alert(`Favourite clicked for ${station.nameFi}`)}
                  aria-label={`Favourite ${station.nameFi}`}
                >
                  <span className="material-icons text-gray-400 text-xs">star_outline</span>
                </button>
              </td>
              <td className="px-2 py-1 whitespace-nowrap text-center">
                <div>
                  <div className="font-semibold text-[11px]">{station.nameFi}</div>
                  <div className="text-[10px] text-gray-400 font-light">{station.nameSe}</div>
                </div>
              </td>
              <td className="px-2 py-1 whitespace-nowrap text-center text-xs text-gray-500">{station.city}</td>
              <td className="px-2 py-1 whitespace-nowrap text-center text-xs text-gray-500">{station.address}</td>
              <td className="px-2 py-1 whitespace-nowrap text-center text-xs text-gray-500">{station.operator}</td>
              <td className="px-2 py-1 whitespace-nowrap text-center text-xs text-gray-500">{station.capacity}</td>
              <td className="px-2 py-1 whitespace-nowrap text-center text-xs text-gray-500">{station.longitude}</td>
              <td className="px-2 py-1 whitespace-nowrap text-center text-xs text-gray-500">{station.latitude}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StationsTable; 