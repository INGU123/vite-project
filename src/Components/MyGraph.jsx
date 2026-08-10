import { Bar, BarChart,Pie,PieChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from "recharts"


export default function MyGraph(){
    // States:
    const data=[
        {mois:"Janvier", ventes:400},
        {mois:"Fevrier", ventes:600},
        {mois:"Mars", ventes:450},
        {mois:"Avril", ventes:550},
    ];
    // Manipulation:
    // Return:
    return(
        <>
        <div className="">
            <h1 className="w-30 flex justify-center m-4 bg-secondary">The BarChart:</h1>
            <BarChart  width={300} height={200} data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="mois" />
                <YAxis/>
                <Tooltip/>
                <Bar dataKey="ventes"/>
            </BarChart>

            <h1 className="w-30 flex justify-center m-4 bg-secondary">The CircleChart:</h1>
            <PieChart >
                <Tooltip/>
                <Legend/>
            </PieChart>
        </div>
        </>
    )
}