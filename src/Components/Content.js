import React from 'react';

const Content = () => {
    return (
        <div className=" grid grid-rows-3 gap-4 md:grid-flow-col">
        <div className="menu-card p-12">
            <img src="https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Zm9vZHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="mutton" className="h-full rounded mb-20 shadow " />
            <div className="center-content">
                <h2 className="text-2xl mb-2">Toast Platter</h2>
                <p className="mb-2">Yummy,delicious, and nutritious</p>
                <span>$16</span>
            </div>
        </div>

        <div className="menu-card p-12">
            <img src="https://images.unsplash.com/photo-1606787366850-de6330128bfc?ixid=MnwxMjA3fDF8MHxzZWFyY2h8OHx8Zm9vZHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="mutton" className="h-full rounded mb-20 shadow" />
            <div className="center-content">
                <h2 className="text-2xl mb-2">Fruits Salad</h2>
                <p className="mb-2">Delicious, and nutritious</p>
                <span>$20</span>
            </div>
        </div>

        <div className="menu-card p-12">
            <img src="https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGZvb2R8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="mutton" className="h-full rounded mb-20 shadow" />
            <div className="center-content">
                <h2 className="text-2xl mb-2">Salmon Platter</h2>
                <p className="mb-2">Delicious, and nutritious</p>
                <span>$12</span>
            </div>
        </div>

        <div className="menu-card p-12">
            <img src="https://images.unsplash.com/photo-1473093295043-cdd812d0e601?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGZvb2R8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="mutton" className="h-full rounded mb-20 shadow" />
            <div className="center-content">
                <h2 className="text-2xl mb-2"> Pasta Platter</h2>
                <p className="mb-2">Yummy, delicious, and nutritious</p>
                <span>$35</span>
            </div>
        </div>

        <div className="menu-card p-12">
            <img src="https://images.unsplash.com/photo-1529042410759-befb1204b468?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGZvb2R8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="mutton" className="h-full rounded mb-20 shadow" />
            <div className="center-content">
                <h2 className="text-2xl mb-2">Meat Ball Curry</h2>
                <p className="mb-2">Delicious, and nutritious</p>
                <span>$45</span>
            </div>
        </div>

        <div className="menu-card p-12">
            <img src="https://images.unsplash.com/photo-1497888329096-51c27beff665?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDN8fGZvb2R8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="mutton" className="h-full rounded mb-20 shadow" />
            <div className="center-content">
                <h2 className="text-2xl mb-2"> Mixed Fruit</h2>
                <p className="mb-2">Healthy, delicious, and nutritious</p>
                <span>$25</span>
            </div>
        </div>

        </div>
    );
};

export default Content;