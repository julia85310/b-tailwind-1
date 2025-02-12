export default function Table({header, rows}){
    return <table className="text-center rounded bg-blue-50t m-2 border-collapse border border-white">
        <tr>
            {header.map((element) => 
                <th className="border-4 border-white bg-green-300" key={element}>{element}</th>
            )}
        </tr>
        {rows.map((row) => 
            <tr key={row.nombre}>
                <td className="border-2 border-white p-1">{row.nombre}</td>
                <td className="border-2 border-white p-1">{row.investigador}</td>
                <td className="border-2 border-white p-1">{row.fecha}</td>
                <td className="border-2 border-white p-1">{row.area}</td>
                <td className="border-2 border-white p-1">{row.resultado}</td>
            </tr>
        )}
    </table>
}