import React from 'react'


const getRankColor = (rank) => {
    switch (rank) {
        case 1:
            return '';
        case 2:
            return '';
        case 3:
            return '';
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
        <div key={index} className="flex flex-row justify-between items-center w-full p-1">
            <div className="flex flex-row justify-between items-center gap-2">
                {
                    item.rank > 3 && (
                        <p className={`${badgeStyle.base} rounded-full w-7 text-center ${badgeStyle.rank}`}>{item.rank}</p>
                    )
                }
                {
                    item.rank === 1 && (
                        <img src="https://peepoyenetwork.com/wp-content/uploads/2024/01/gold.webp" alt="gold" className="w-7" />
                    )
                }
                {
                    item.rank === 2 && (
                        <img src="https://peepoyenetwork.com/wp-content/uploads/2024/01/silver.webp" alt="silver" className="w-7" />
                    )
                }
                {
                    item.rank === 3 && (
                        <img src="https://peepoyenetwork.com/wp-content/uploads/2024/01/bronze.webp" alt="bronze" className="w-7" />
                    )
                }
                <p className={`${badgeStyle.base} text-center md:text-left text-neutral-700 flex-1`}>{item.name}</p>
            </div>
            <p className={`${badgeStyle.base} text-center md:text-left text-neutral-700`}>{item.score}</p>
        </div>
    );
}
