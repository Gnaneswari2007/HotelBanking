import './App.css';

function App() {
  const rooms = [
    { id: 101, type: 'Single Room', price: 1500, occupancy: 'Available' },
    { id: 102, type: 'Double Room', price: 2500, occupancy: 'Occupied' },
    { id: 103, type: 'Deluxe Room', price: 3500, occupancy: 'Available' },
    { id: 104, type: 'Family Room', price: 4500, occupancy: 'Occupied' },
    { id: 105, type: 'Suite Room', price: 6000, occupancy: 'Available' }
  ];

  return (
    <div className="container">
      <h1>Hotel Room Booking System</h1>
      <p>Room details, prices and occupancy status</p>

      <table>
        <thead>
          <tr>
            <th>Room No.</th>
            <th>Room Type</th>
            <th>Price / Night</th>
            <th>Occupancy</th>
          </tr>
        </thead>

        <tbody>
          {rooms.map((room) => (
            <tr key={room.id}>
              <td>{room.id}</td>
              <td>{room.type}</td>
              <td>₹{room.price}</td>
              <td>
                <span className={
                  room.occupancy === 'Available'
                    ? 'available'
                    : 'occupied'
                }>
                  {room.occupancy}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h3>Total Rooms: {rooms.length}</h3>
    </div>
  );
}

export default App;