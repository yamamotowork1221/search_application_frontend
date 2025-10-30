interface SearchFeedProps {
    q?: string;
    p?: string;
};

export const SearchNav = ({ q, p }: SearchFeedProps) => {

    const pageNumber: number = isNaN(Number(p)) || Number(p) <= 0 ? 1 : Number(p);
    const nextPageNumber: number = pageNumber + 1;
    const buckPageNumber: number = pageNumber - 1;
    const buckButton = [];
    console.log('No', p);
    !pageNumber || pageNumber === 1 ? buckButton.push(
        <p key={pageNumber - 1} className='font-bold text-blue-200' >前へ</p>
    ) : buckButton.push(
        <form key={'buck' + String(pageNumber - 1)} className='' action="/search" method="get">
            <input type="hidden" name="q" value={q} />
            <input type="hidden" name="p" value={buckPageNumber} />
            <button className='font-bold text-blue-500 hover:cursor-pointer' type="submit">前へ</button>
        </form>
    );

    const navItems = [];
    if (pageNumber <= 6) {
        for (let i = 0; i < pageNumber - 1; i++) {
            navItems.push(
                <li key={'no' + String(i + 1)} className=''>
                    <form className='' action="/search" method="get">
                        <input type="hidden" name="q" value={q} />
                        <input type="hidden" name="p" value={i + 1} />
                        <button className='font-bold text-blue-500 hover:cursor-pointer' type="submit">{String(i + 1)}</button>
                    </form>
                </li >
            );
        };

        navItems.push(
            <li key={'no' + String(pageNumber)} className=''>
                <p className='font-bold text-blue-500 hover:cursor-pointer border-b-2 border-blue-500' >{String(pageNumber)}</p>

            </li >
        );

        for (let i = pageNumber + 1; i < 12; i++) {
            navItems.push(
                <li key={'no' + String(i)} className=''>
                    <form className='' action="/search" method="get">
                        <input type="hidden" name="q" value={q} />
                        <input type="hidden" name="p" value={i} />
                        <button className='font-bold text-blue-500 hover:cursor-pointer' type="submit">{String(i)}</button>
                    </form>
                </li >
            );
        };
    } else {
        for (let i = pageNumber - 5; i < pageNumber; i++) {
            navItems.push(
                <li key={'no' + String(i)} className=''>
                    <form className='' action="/search" method="get">
                        <input type="hidden" name="q" value={q} />
                        <input type="hidden" name="p" value={i} />
                        <button className='font-bold text-blue-500 hover:cursor-pointer' type="submit">{String(i)}</button>
                    </form>
                </li >
            );
        };

        navItems.push(
            <li key={'no' + String(pageNumber)} className=''>
                <p className='font-bold text-blue-500 hover:cursor-pointer border-b-2 border-blue-500' >{String(pageNumber)}</p>

            </li >
        );

        for (let i = pageNumber + 1; i < pageNumber + 6; i++) {
            navItems.push(
                <li key={'no' + String(i)} className=''>
                    <form className='' action="/search" method="get">
                        <input type="hidden" name="q" value={q} />
                        <input type="hidden" name="p" value={i} />
                        <button className='font-bold text-blue-500 hover:cursor-pointer' type="submit">{String(i)}</button>
                    </form>
                </li >
            );
        };
    };

    return (
        <div className='w-[80%] md:w-[50%] flex items-center justify-between' >
            {buckButton}
            <ul className='w-[70%] flex justify-between items-center'>
                {navItems}
            </ul>
            <form className='' action="/search" method="get">
                <input type="hidden" name="q" value={q} />
                <input type="hidden" name="p" value={nextPageNumber} />
                <button className='font-bold text-blue-500 hover:cursor-pointer' type="submit">次へ</button>
            </form>
        </div>
    );
};