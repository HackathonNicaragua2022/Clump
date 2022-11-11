import Card from "../Card";

import './Grid.css';

const Grid = ({ items }) => {

    const view = items.map( e => {
        return <Card 
            title={e.title}
            img={e.img}
        />;
    });

    return <div className="grid">
        {view}
    </div>;
};

export default Grid;