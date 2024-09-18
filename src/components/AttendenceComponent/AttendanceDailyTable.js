import React, { useState, useEffect } from 'react';
import axios from 'axios';
import dayjs from 'dayjs';

const HolidayChecker = () => {
  const [holidays, setHolidays] = useState([]);
  const [currentDate, setCurrentDate] = useState(dayjs().format('YYYY-MM-DD'));
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchHolidays = async () => {
      try {
        setLoading(true);
        // Replace with your actual API endpoint
        const response = await axios.get('https://example.com/api/holidays', {
          params: { country: 'PK', year: dayjs().year() }
        });
        setHolidays(response.data.holidays);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchHolidays();
  }, []);

  const isHolidayToday = holidays.some(holiday => holiday.date === currentDate);

  if (loading) return <p>Loading holidays...</p>;
  if (error) return <p>Error fetching holidays: {error}</p>;

  return (
    <div>
      <h1>Holiday Checker</h1>
      <h2>Holidays in Pakistan for {dayjs().year()}</h2>
      <ul>
        {holidays.map((holiday, index) => (
          <li key={index}>
            {holiday.date} - {holiday.name}
          </li>
        ))}
      </ul>
      <p>
        {isHolidayToday ? 'Today is a holiday!' : 'Today is not a holiday.'}
      </p>
    </div>
  );
};

export default HolidayChecker;
