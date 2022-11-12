import Card from "../Card";

import './Grid.css';

const Grid = ({ items, ...props }) => {

    const view = items.map( e => {
        return <Card 
            title={e.title}
            img={e.img}
        />;
    });

    return <div className="grid" {...props}>
        {view}
    </div>;
};

export default Grid;