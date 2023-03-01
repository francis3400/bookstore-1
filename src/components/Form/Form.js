import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';

import { addBook } from '../../store/book/bookSlice';

const Form = () => {
  const [form, setForm] = useState({ title: '', author: '', category: '' });
  const dispatch = useDispatch();

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const itemId = nanoid();
    console.log(form);
    const data = { item_id: itemId, id: itemId, ...form };
    dispatch(addBook(data));
    setForm({ title: '', author: '', category: '' });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input required value={form.title} onChange={handleChange} name="title" placeholder="Title" />
        <input required value={form.author} onChange={handleChange} name="author" placeholder="Author" />
        <select name="category" required onChange={handleChange}>
          <option value="">Category</option>
          <option value="SI-FI">SI-FI</option>
          <option value="Action">Action</option>
          <option value="Mistery">Mistery</option>
          <option value="Thriller">Thriller</option>
          <option value="Documentary">Documentary</option>
        </select>
        <button type="submit">Add Book</button>
      </form>
    </>
  );
};

export default Form;
