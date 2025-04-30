import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';

// Updated Destination Costs
const DESTINATION_COSTS = {
  singapore: 38800,
  thailand: 54200,
  paris: 45500,
  "new zealand": 24100,
  "bora bora": 95400,
  london: 50200,
};

// Styled Components (same as before — no changes needed)
const Container = styled.div`
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  max-width: 1200px;
  margin: 2rem auto;
  padding: 2rem;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
`;

const Title = styled.h1`
  color: #2c3e50;
  text-align: center;
  margin-bottom: 2rem;
  font-weight: 600;
  font-size: 2.2rem;
`;

const FormContainer = styled.div`
  background: #f8f9fa;
  padding: 2rem;
  border-radius: 8px;
  margin-bottom: 2rem;
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: #495057;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ced4da;
  border-radius: 6px;
  font-size: 1rem;
  &:focus {
    border-color: #3498db;
    box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.2);
    outline: none;
  }
`;

const Select = styled.select`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ced4da;
  border-radius: 6px;
  font-size: 1rem;
  &:focus {
    border-color: #3498db;
    box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.2);
    outline: none;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ced4da;
  border-radius: 6px;
  min-height: 100px;
  font-size: 1rem;
  &:focus {
    border-color: #3498db;
    box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.2);
    outline: none;
  }
`;

const SubmitButton = styled.button`
  background: #3498db;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 6px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  width: 100%;
  &:hover {
    background: #2980b9;
  }
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 1rem;
`;

const TableHeader = styled.thead`
  background: #f1f3f5;
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background: #f8f9fa;
  }
`;

const TableHeaderCell = styled.th`
  padding: 1rem;
  text-align: left;
  font-weight: 600;
  color: #495057;
`;

const TableCell = styled.td`
  padding: 1rem;
  border-bottom: 1px solid #dee2e6;
`;

const StatusBadge = styled.span`
  display: inline-block;
  padding: 0.35rem 0.75rem;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 500;
  background-color: ${props =>
    props.status === 'paid' ? '#2ecc71' :
    props.status === 'cancelled' ? '#e74c3c' : '#f39c12'};
  color: white;
`;

const ActionButton = styled.button`
  padding: 0.5rem 0.75rem;
  margin-right: 0.5rem;
  border: none;
  border-radius: 4px;
  font-size: 0.85rem;
  cursor: pointer;
  color: white;
  background-color: ${props =>
    props.variant === 'primary' ? '#3498db' :
    props.variant === 'danger' ? '#e74c3c' :
    '#f39c12'};
`;

const BookingTracker = () => {
  const [bookings, setBookings] = useState([]);
  const [formData, setFormData] = useState({
    customerName: '',
    destination: '',
    travelDate: '',
    numberOfPeople: 1,
    paymentMethod: 'credit_card',
    specialRequests: '',
  });

  useEffect(() => {
    const saved = localStorage.getItem('travelBookings');
    if (saved) setBookings(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem('travelBookings', JSON.stringify(bookings));
  }, [bookings]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === 'numberOfPeople' ? Number(value) : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const destinationKey = formData.destination.toLowerCase();
    const cost = DESTINATION_COSTS[destinationKey];
    if (!formData.customerName || !formData.destination || !formData.travelDate) {
      alert("Please fill all required fields.");
      return;
    }
    if (!cost) {
      alert("Destination not available.");
      return;
    }

    const newBooking = {
      id: uuidv4(),
      ...formData,
      paymentAmount: cost * formData.numberOfPeople,
      paymentStatus: 'pending',
      bookingDate: new Date().toISOString(),
    };

    setBookings([...bookings, newBooking]);
    setFormData({
      customerName: '',
      destination: '',
      travelDate: '',
      numberOfPeople: 1,
      paymentMethod: 'credit_card',
      specialRequests: '',
    });
  };

  const handleMarkAsPaid = (id) => {
    setBookings(bookings.map(b => b.id === id ? { ...b, paymentStatus: 'paid' } : b));
  };

  const handleCancelBooking = (id) => {
    setBookings(bookings.map(b => b.id === id ? { ...b, paymentStatus: 'cancelled' } : b));
  };

  const handleDeleteBooking = (id) => {
    if (window.confirm("Delete this booking?")) {
      setBookings(bookings.filter(b => b.id !== id));
    }
  };

  return (
    <Container>
      <Title>Travel Booking Tracker</Title>
      <FormContainer>
        <h2>Create New Booking</h2>
        <form onSubmit={handleSubmit}>
          <FormGroup>
            <Label>Customer Name *</Label>
            <Input name="customerName" value={formData.customerName} onChange={handleInputChange} required />
          </FormGroup>
          <FormGroup>
            <Label>Destination *</Label>
            <Select name="destination" value={formData.destination} onChange={handleInputChange} required>
              <option value="">-- Select --</option>
              <option value="singapore">Singapore (₹38,800)</option>
              <option value="thailand">Thailand (₹54,200)</option>
              <option value="paris">Paris (₹45,500)</option>
              <option value="new zealand">New Zealand (₹24,100)</option>
              <option value="bora bora">Bora Bora (₹95,400)</option>
              <option value="london">London (₹50,200)</option>
            </Select>
          </FormGroup>
          <FormGroup>
            <Label>Travel Date *</Label>
            <Input type="date" name="travelDate" value={formData.travelDate} onChange={handleInputChange} required />
          </FormGroup>
          <FormGroup>
            <Label>Number of People</Label>
            <Input type="number" name="numberOfPeople" min="1" value={formData.numberOfPeople} onChange={handleInputChange} />
          </FormGroup>
          <FormGroup>
            <Label>Payment Method</Label>
            <Select name="paymentMethod" value={formData.paymentMethod} onChange={handleInputChange}>
              <option value="credit_card">Credit Card</option>
              <option value="paypal">PayPal</option>
              <option value="bank_transfer">Bank Transfer</option>
              <option value="crypto">Cryptocurrency</option>
            </Select>
          </FormGroup>
          <FormGroup>
            <Label>Special Requests</Label>
            <TextArea name="specialRequests" value={formData.specialRequests} onChange={handleInputChange} />
          </FormGroup>
          <SubmitButton type="submit">Create Booking</SubmitButton>
        </form>
      </FormContainer>

      <h2>Booking History</h2>
      {bookings.length === 0 ? (
        <p>No bookings yet.</p>
      ) : (
        <Table>
          <TableHeader>
            <TableRow>
              <TableHeaderCell>Customer</TableHeaderCell>
              <TableHeaderCell>Destination</TableHeaderCell>
              <TableHeaderCell>Date</TableHeaderCell>
              <TableHeaderCell>People</TableHeaderCell>
              <TableHeaderCell>Amount</TableHeaderCell>
              <TableHeaderCell>Status</TableHeaderCell>
              <TableHeaderCell>Actions</TableHeaderCell>
            </TableRow>
          </TableHeader>
          <tbody>
            {bookings.map(b => (
              <TableRow key={b.id}>
                <TableCell>{b.customerName}</TableCell>
                <TableCell>{b.destination}</TableCell>
                <TableCell>{new Date(b.travelDate).toLocaleDateString()}</TableCell>
                <TableCell>{b.numberOfPeople}</TableCell>
                <TableCell>₹{b.paymentAmount.toLocaleString()}</TableCell>
                <TableCell><StatusBadge status={b.paymentStatus}>{b.paymentStatus}</StatusBadge></TableCell>
                <TableCell>
                  {b.paymentStatus === 'pending' && (
                    <>
                      <ActionButton variant="primary" onClick={() => handleMarkAsPaid(b.id)}>Mark Paid</ActionButton>
                      <ActionButton variant="warning" onClick={() => handleCancelBooking(b.id)}>Cancel</ActionButton>
                    </>
                  )}
                  <ActionButton variant="danger" onClick={() => handleDeleteBooking(b.id)}>Delete</ActionButton>
                </TableCell>
              </TableRow>
            ))}
          </tbody>
        </Table>
      )}
    </Container>
  );
};

export default BookingTracker;