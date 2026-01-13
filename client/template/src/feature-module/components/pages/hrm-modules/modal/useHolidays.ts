import { useState, useEffect } from 'react';
import { getAllHolidays, addHoliday as addHolidayAPI, updateHoliday as updateHolidayAPI, deleteHoliday as deleteHolidayAPI } from '../../../../../api/holidaysService';

export interface Holiday {
    key: string;
    Name: string;
    Date: string;
    Days: string;
    Description?: string;
}

export const useHolidays = () => {
    const [holidays, setHolidays] = useState<Holiday[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    // Fetch holidays from backend on component mount
    useEffect(() => {
        fetchHolidays();
    }, []);

    const fetchHolidays = async () => {
        try {
            setLoading(true);
            setError(null);
            const data = await getAllHolidays();

            // Convert backend data to frontend format
            const formattedHolidays: Holiday[] = data.map((holiday) => ({
                key: holiday._id || '',
                Name: holiday.name,
                Date: holiday.date,
                Days: holiday.day,
                Description: holiday.description
            }));

            setHolidays(formattedHolidays);
        } catch (err) {
            setError('Failed to fetch holidays');
            console.error('Error fetching holidays:', err);
        } finally {
            setLoading(false);
        }
    };

    const addHoliday = async (holiday: Omit<Holiday, 'key'>) => {
        try {
            setLoading(true);
            setError(null);

            // Call backend API
            const newHoliday = await addHolidayAPI({
                name: holiday.Name,
                description: holiday.Description,
                date: holiday.Date,
                day: holiday.Days
            });

            // Add to local state
            const formattedHoliday: Holiday = {
                key: newHoliday._id || '',
                Name: newHoliday.name,
                Date: newHoliday.date,
                Days: newHoliday.day,
                Description: newHoliday.description
            };

            setHolidays([...holidays, formattedHoliday]);
            return formattedHoliday;
        } catch (err) {
            setError('Failed to add holiday');
            console.error('Error adding holiday:', err);
            throw err;
        } finally {
            setLoading(false);
        }
    };

    const updateHoliday = async (key: string, updatedHoliday: Omit<Holiday, 'key'>) => {
        try {
            setLoading(true);
            setError(null);

            // Call backend API
            const updated = await updateHolidayAPI(key, {
                name: updatedHoliday.Name,
                description: updatedHoliday.Description,
                date: updatedHoliday.Date,
                day: updatedHoliday.Days
            });

            // Update local state
            setHolidays(holidays.map(holiday =>
                holiday.key === key ? {
                    key: updated._id || key,
                    Name: updated.name,
                    Date: updated.date,
                    Days: updated.day,
                    Description: updated.description
                } : holiday
            ));
        } catch (err) {
            setError('Failed to update holiday');
            console.error('Error updating holiday:', err);
            throw err;
        } finally {
            setLoading(false);
        }
    };

    const deleteHoliday = async (key: string) => {
        try {
            setLoading(true);
            setError(null);

            // Call backend API
            await deleteHolidayAPI(key);

            // Update local state
            setHolidays(holidays.filter(holiday => holiday.key !== key));
        } catch (err) {
            setError('Failed to delete holiday');
            console.error('Error deleting holiday:', err);
            throw err;
        } finally {
            setLoading(false);
        }
    };

    return {
        holidays,
        addHoliday,
        updateHoliday,
        deleteHoliday,
        totalHolidays: holidays.length,
        loading,
        error,
        refetch: fetchHolidays
    };
};