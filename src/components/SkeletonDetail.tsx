
import { DotSVG } from './icons/dot.icon';

export const SkeletonDetail = () => (
    <div className="flex flex-col md:flex-row md:justify-between gap-6 px-4 md:px-36">
        <div className="flex flex-col ">
            <div className="flex gap-3 items-center pb-2">
                <div className="h-4 w-16 bg-gray-300 rounded"></div>
                <DotSVG />
                <div className="h-4 w-24 bg-gray-300 rounded"></div>
            </div>
            <div className="w-full lg:w-[512px] h-[300px] lg:h-[512px] bg-gray-200 rounded-md shadow-md sm:shadow-none sm:rounded-none flex flex-wrap flex-col items-center mx-auto">
                <div className="h-full w-full bg-gray-300 rounded p-6"></div>
            </div>
        </div>
        <div className="flex flex-col gap-4 pb-6 lg:justify-center lg:w-1/3">
            <div className="flex justify-between">
                <div className="h-6 w-32 bg-gray-300 rounded"></div>
                <div className="h-8 w-8 bg-gray-300 rounded"></div>
            </div>
            <div>
                <p className="font-semibold">Habilidades</p>
                <ul>
                    <li className="h-4 bg-gray-300 rounded mb-2"></li>
                    <li className="h-4 bg-gray-300 rounded mb-2"></li>
                    <li className="h-4 bg-gray-300 rounded mb-2"></li>
                </ul>
            </div>
            <div className="flex justify-between gap-12">
                <div className="h-4 w-20 bg-gray-300 rounded"></div>
                <div className="h-4 w-20 bg-gray-300 rounded"></div>
            </div>
            <div className="flex justify-between">
                <div className="h-4 w-20 bg-gray-300 rounded"></div>
                <div className="h-4 w-20 bg-gray-300 rounded"></div>
            </div>
            <div className="flex justify-between">
                <div className="h-4 w-20 bg-gray-300 rounded"></div>
                <div className="flex gap-4">
                    <div className="h-4 w-20 bg-gray-300 rounded"></div>
                    <div className="h-4 w-20 bg-gray-300 rounded"></div>
                </div>
            </div>
        </div>
    </div>
);