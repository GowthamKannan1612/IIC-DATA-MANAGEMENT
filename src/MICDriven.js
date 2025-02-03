import React, { useState } from 'react';
import Layout from './Layout';
import './Events.css';

function MicDriven() {
  const [events, setEvents] = useState([
    { id: 1, name: 'Mic Testing Workshop', incharge: 'John Doe', reviewer: 'Jane Smith', from: '2023-11-01', to: '2023-11-02', status: 'Approved' },
    { id: 2, name: 'Podcast Recording Session', incharge: 'Alice Brown', reviewer: 'Bob Martin', from: '2023-12-10', to: '2023-12-11', status: 'Pending' },
    // Add more events here
  ]);

  const [searchTerm, setSearchTerm] = useState('');

  const filteredEvents = events.filter(event =>
    event.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Layout>
      <div className="events-container">
        <h1 className="custom-title">Mic-Driven Events</h1>
        <div className="search-bar-container">
          <input
            type="text"
            className="search-bar small-width"
            placeholder="Search events..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <table className="events-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Event Name</th>
              <th>Incharge</th>
              <th>Reviewer</th>
              <th>From Date</th>
              <th>To Date</th>
              <th>Approval Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredEvents.map(event => (
              <tr key={event.id}>
                <td>{event.id}</td>
                <td>{event.name}</td>
                <td>{event.incharge}</td>
                <td>{event.reviewer}</td>
                <td>{event.from}</td>
                <td>{event.to}</td>
                <td>{event.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Layout>
  );
}

export default MicDriven;
