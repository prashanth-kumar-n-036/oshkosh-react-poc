import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid,
    Tooltip, Legend, ResponsiveContainer, LabelList, BarStack, Cell, usePlotArea,
    type BarRectangleItem, type TooltipIndex,
} from 'recharts';
import { homeDashbaordData } from '../sample-data';
import { formatDateWithOmission } from '../../../utils/util-functions';
import { barColors as colors, typesOfAlerts } from '../constants';

export default function PfepRequiredAlert({onClick}: {onClick: (value: typeof typesOfAlerts[number]) => void}) {
    const data = homeDashbaordData.RequiredAlertGraphs;
    const plotArea = usePlotArea();
    console.log('Plot Area:', plotArea); // Debugging log for plot area dimensions
    const handleBarClick = (data: BarRectangleItem, index: number) => {
        onClick("pfepRequired");
    };


    // Transform data for stacked bar chart
    const transformedData: any[] = data.map(item => ({
        name: formatDateWithOmission(item.Week_Start_Date, ['year']),
        total: item.Total_Count,
        ...item.series.reduce((acc, curr) => ({ ...acc, [curr.name]: curr.value }), {}),
    }));


    const stackKeys = data[0]?.series.map(s => s.name) || [];


    return (
        <div className='w-full min-w-[20vw] h-[320px] bg-slate-50 rounded-xl'>
            <ResponsiveContainer>
                <BarChart data={transformedData} margin={{ top: 30, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#eee" />
                    <XAxis dataKey="name" axisLine={false} tickLine={false} interval={0} fontSize={8} />
                    <YAxis axisLine={false} tickLine={false} />
                    <Tooltip
                        cursor={{ fill: 'transparent' }}
                        contentStyle={{ borderRadius: '10px', border: 'none', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', fontSize: 12 }}
                    />
                   

                    <BarStack radius={3}>
                        {stackKeys.map((key, index) => (
                            <Bar
                                key={key}
                                dataKey={key}
                                stackId="a"
                                fill={colors[index]}
                                onClick={handleBarClick}
                                isAnimationActive={true}
                                animationDuration={2000} // Requirement #6: 2s Animation
                                animationEasing="ease-out"
                                minPointSize={0.01}
                            >

                                {/* Map through the data to apply unique Cell logic for each bar */}
                                {transformedData.map((entry, i) => (
                                    <Cell
                                        key={`cell-${i}`}
                                        className="cursor-pointer transition-opacity duration-300 hover:opacity-80"

                                    />
                                ))}
                                {key === stackKeys[stackKeys.length - 1] && (
                                    <LabelList
                                        dataKey="total"
                                        position="top"
                                        style={{ fill: '#333', fontWeight: 'bold', fontSize: 10 }}
                                    />
                                )}
                            </Bar>
                        ))}
                    </BarStack>
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}