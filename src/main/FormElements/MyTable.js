import React from "react";

function MyTable({ TH, TD }) {
  function objectDist(d) {
    let data = [];
    for (var [d, k] of Object.entries(d)) {
      data.push(k);
    }
    return data;
  }
  return (
    <div>
      <table>
        <thead>
          <tr >
            {TH.map((d, i) => (
              <th className="p-5 border" key={i}>{d}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {TD.map((d, i) => (
            <tr key={i}>
              {objectDist(d).map((r, j) => (
                <td className="px-5 py-2 text-center" key={j}>{r}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MyTable;
