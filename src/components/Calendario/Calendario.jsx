import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';

import "react-big-calendar/lib/css/react-big-calendar.css";
import './Calendario.css';

const Calendario = (props) => {
    const events = [
        {
            title: "Big Meeting",
            allDay: true,
            start: new Date(2022, 6, 0),
            end: new Date(2022, 6, 0),
        },
        {
            title: "Vacation",
            start: new Date(2022, 6, 7),
            end: new Date(2022, 6, 10),
        },
        {
            title: "Conference",
            start: new Date(2022, 6, 20),
            end: new Date(2022, 6, 23),
        },
    ];

    const localizer = momentLocalizer(moment)
    return (
        <div className='calendario'>
            <form>
                <label htmlFor="title">Descripcion:</label>
                <input type="text" placeholder="Descripción" name='title' />
                <label htmlFor="start">Fecha de inicio:</label>
                <input type="date" name='start' />
                <label htmlFor="end">Fecha de fin:</label>
                <input type="date" name='end' />
                <button type="submit">Agregar</button>
            </form>
            <Calendar
                localizer={localizer}
                events={events}
                startAccessor="start"
                endAccessor="end"
                style={{ height: 500 }}
            />
        </div>
    );
};


export default Calendario; 