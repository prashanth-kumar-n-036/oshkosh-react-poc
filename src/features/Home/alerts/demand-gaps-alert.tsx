
import { useEffect, useMemo, useState } from "react";
import { typesOfAlerts } from "../constants";

interface DemandGapsAlertProps {
    value: number;
    label?: string;
    icon?: React.ReactNode;
    onClick?: (alertType: typeof typesOfAlerts[number]) => void;
    durationMs?: number;
}

const easeOutCubic = (t: number) =>
    1 - Math.pow(1 - t, 3);


interface SkeletonProps {
    showLabel?: boolean;
}

const Skeleton = ({ showLabel = true }: SkeletonProps) => (
    <div className="inline-flex flex-col items-center rounded-xl px-4 py-3">
        {/* Number placeholder */}
        <div className="h-10 w-20 animate-pulse rounded-md bg-slate-200" />

        {/* Label placeholder */}
        {showLabel && (
            <div className="mt-2 h-4 w-24 animate-pulse rounded-md bg-slate-200" />
        )}
    </div>
);

const DemandGapsAlert = ({
    value,
    label,
    icon,
    onClick,
    durationMs = 3000,
}: DemandGapsAlertProps) => {
    const isCountdown = value < 15;

    const startValue = useMemo(() => {
        return isCountdown ? value + 20 : Math.max(0, value - 20);
    }, [value, isCountdown]);

    const [displayValue, setDisplayValue] = useState(startValue);

    useEffect(() => {
        const startTime = performance.now();

        const animate = (now: number) => {
            const progress = Math.min(
                (now - startTime) / durationMs,
                1
            );
            const eased = easeOutCubic(progress);

            const current =
                startValue + (value - startValue) * eased;

            setDisplayValue(Math.round(current));

            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };

        requestAnimationFrame(animate);
    }, [value, startValue, durationMs]);

    return (
        <div
            onClick={() => onClick && onClick("demandGaps")}
            role={onClick ? "button" : undefined}
            tabIndex={onClick ? 0 : undefined}
            className={`
                inline-flex
                flex-col
                items-center
                justify-center
                rounded-xl
                w-full min-w-[20vw] h-[320px] bg-slate-50 rounded-xl
                cursor-pointer
                select-none
                transition
                duration-200
                ease-out
                hover:shadow-[0_0_0_4px_rgba(59,130,246,0.15),0_8px_24px_rgba(0,0,0,0.12)]
                active:scale-95
                focus-visible:outline
                focus-visible:outline-2
                focus-visible:outline-blue-500
            `}
        >
            {/* Number */}
            <div className="text-4xl font-bold leading-none">
                {displayValue}
            </div>

            {/* Icon + Label */}
            {(icon || label) && (
                <div className="mt-2 flex items-center gap-1 text-sm opacity-80">
                    {icon}
                    {label}
                </div>
            )}
        </div>
    );
};

export default DemandGapsAlert;