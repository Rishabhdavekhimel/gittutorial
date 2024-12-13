import Image from "next/image";
import { Progress } from "@/components/ui/progress";
import { InfinityIcon, X } from "lucide-react";
import { useExitModal } from "@/store/use-exit-modal";
import { SWRConfig } from 'swr';
import useSWRInfinite from "swr/infinite";


type Props = {
    hearts: number;
    percentage: number; // Should be between 0 and 100
    hasActiveSubscription: boolean;
};

export const Header = ({
    hearts,
    percentage,
    hasActiveSubscription,
}: Props) => {
    const { open } = useExitModal();

    // Ensure percentage is clamped between 0 and 100
    const clampedPercentage = Math.min(100, Math.max(0, percentage));

    return (
        <header className="lg:pt-[50px] pt-[20px] px-10 flex gap-x-7 items-center justify-between max-w-[1140px] mx-auto w-full">
            {/* Exit Modal Icon */}
            <X
                onClick={open}
                aria-label="Close modal"
                className="text-slate-500 hover:opacity-75 transition cursor-pointer"
            />

            {/* Custom Progress */}
            <Progress value={clampedPercentage} className="flex-1" />

            {/* Hearts and Subscription Info */}
            <div className="text-rose-500 flex items-center font-bold">
                <Image
                    src="/heart.svg"
                    height={28}
                    width={28}
                    alt="Heart icon"
                    className="mr-2"
                />
                {hasActiveSubscription ? (
                    <InfinityIcon
                        className="h-6 w-6 stroke-[3] shrink-0"
                        aria-label="Unlimited hearts"
                    />
                ) : (
                    <span aria-label={`Hearts: ${hearts}`}>{hearts}</span>
                )}
            </div>
        </header>
    );
};
