import React from 'react'


const getRankColor = (rank) => {
    switch (rank) {
        case 1:
            return 'bg-yellow-500 text-white';
        case 2:
            return 'bg-gray-500 text-white';
        case 3:
            return 'bg-yellow-700 text-white';
        default:
            return 'text-neutral-700';
    }
};

export default function Badge({item, index}) {
    const badgeStyle = {
        base: 'text-base md:text-lg font-normal',
        rank: getRankColor(item.rank),
    };

    return (
        <div key={index} className="flex flex-row justify-between items-center w-full border-[4px] border-neutral-200 rounded-lg shadow-inner p-1">
            <div className="flex flex-row justify-between items-center gap-2">
                <p className={`${badgeStyle.base} rounded-full w-7 text-center ${badgeStyle.rank}`}>{item.rank}</p>
                <p className={`${badgeStyle.base} text-center md:text-left text-neutral-700 flex-1`}>{item.name}</p>
            </div>
            <p className={`${badgeStyle.base} text-center md:text-left text-neutral-700`}>{item.score}</p>
        </div>
    );
}
