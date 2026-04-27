import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid,
    Tooltip, Legend, ResponsiveContainer, LabelList, BarStack, Cell,
    type BarRectangleItem
} from 'recharts';
import { homeDashbaordData } from '../sample-data';
import { formatDateWithOmission } from '../../../utils/util-functions';
import { barColors as colors, typesOfAlerts } from '../constants';

export default function ERPAlert({ onClick }: { onClick: (value: typeof typesOfAlerts[number]) => void }) {
    const data = homeDashbaordData.ERPAlertGraphs;
    const handleBarClick = (data: BarRectangleItem, index: number) => {
        onClick("erp");
    };


    // Transform data for stacked bar chart
    const transformedData: any[] = data.map(item => ({
        name: formatDateWithOmission(item.Name, ['year']),
        total: item.Total_Count,
        ...item.series.reduce((acc, curr) => ({ ...acc, [curr.name]: curr.value }), {}),
    }));


    const stackKeys = data[0]?.series.map(s => s.name) || [];


    return (
        <div className='w-full min-w-[15vw] h-[200px] bg-slate-50 rounded-xl'>
            <ResponsiveContainer width="100%">
                <BarChart data={transformedData} margin={{ top: 20, right: 0, left: 0, bottom: 5 }} barCategoryGap={4}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#eee" />
                    <XAxis
                        dataKey="name"
                        axisLine={false} 
                        tickLine={false} 
                        interval={0} 
                        fontSize={8} 
                        padding={{ left: 0, right: 0 }}
                        height={40}
                        tick={({x,y, payload}) => {
                            const words = payload.value.split(' ');
                            const maxWordsPerLine = 1;
                            
                            return (
                                <text x={x} y={y} textAnchor="middle" fontSize={8} className="fill-slate-600">
                                    <tspan x={x} dy="2">{words.slice(0, maxWordsPerLine).join(" ")}</tspan>
                                    {words.length > maxWordsPerLine && <tspan x={x} dy="14">{words.slice(maxWordsPerLine, 2 * maxWordsPerLine).join(" ")}</tspan>}
                                    {words.length > 2 * maxWordsPerLine && <tspan x={x} dy="14">{words.slice(2 * maxWordsPerLine, 3 * maxWordsPerLine).join(" ")}</tspan>}
                                    </text>
                            )
                        }} />
                    <YAxis axisLine={false} tickLine={false} fontSize={12} />
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