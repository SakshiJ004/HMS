import { useState } from 'react';

export interface Holiday {
    key: string;
    Name: string;
    Date: string;
    Days: string;
    Description?: string;
}

export const useHolidays = () => {
    const [holidays, setHolidays] = useState<Holiday[]>([
        {
            key: '1',
            Name: 'New Year',
            Date: '01-01-2026',
            Days: 'Wednesday',
            Description: 'Celebration of the new year'
        },
        {
            key: '2',
            Name: 'Republic Day',
            Date: '26-01-2026',
            Days: 'Monday',
            Description: 'Indian Republic Day'
        },
        // Add more initial holidays as needed
    ]);

    const addHoliday = (holiday: Omit<Holiday, 'key'>) => {
        const newHoliday: Holiday = {
            ...holiday,
            key: Date.now().toString(),
        };
        setHolidays([...holidays, newHoliday]);
    };

    const updateHoliday = (key: string, updatedHoliday: Omit<Holiday, 'key'>) => {
        setHolidays(holidays.map(holiday =>
            holiday.key === key ? { ...updatedHoliday, key } : holiday
        ));
    };

    const deleteHoliday = (key: string) => {
        setHolidays(holidays.filter(holiday => holiday.key !== key));
    };

    return {
        holidays,
        addHoliday,
        updateHoliday,
        deleteHoliday,
        totalHolidays: holidays.length
    };
};