import React from 'react';
import styled from 'styled-components';
import { handleSubmit } from './handleSubmit';

const Form = ({setData}) => {
  return (
    <StyledWrapper>
      <form onSubmit={(e) => handleSubmit(e, setData)} className="form">
        <p className="title">House Price Prediction</p>
        <p className="message">Fill in the values below to predict your home price.</p>
        <label>
          <input className="input" name="address" type="text" placeholder required />
          <span>Address</span>
        </label>
        <label>
          <input className="input" name='area' type="number" placeholder required />
          <span>Area</span>
        </label>
        <label>
          <input className="input" name='frontage' type="number" placeholder required />
          <span>Frontage</span>
        </label>
        <label>
          <input className="input" name='accessRoad' type="number" placeholder required />
          <span>Access Road</span>
        </label>
        <label>
          <input className="input" name='houseDirection' type="text" placeholder required />
          <span>House direction</span>
        </label>
        <label>
          <input className="input" name='balconyDirection' type="text" placeholder required />
          <span>Balcony direction</span>
        </label>
        <label>
          <input className="input" name='floors' type="number" placeholder required />
          <span>Floors</span>
        </label>
        <label>
          <input className="input" name='bedrooms' type="number" placeholder required />
          <span>Bedrooms</span>
        </label>
        <label>
          <input className="input" name='bathrooms' type="number" placeholder required />
          <span>Bathrooms</span>
        </label>
        <label>
          <select className="input list-input" name='legalStatus' placeholder required>
            <option value="Have certificate">Have certificate</option>
            <option value="Sale contract">Sale contract</option>
          </select>
          <span>Legal status</span>
        </label>
        <label>
          <select className="input list-input" name='furnitureState' placeholder required>
            <option value="Full">Full</option>
            <option value="Basic">Basic</option>
          </select>
          <span>Furniture state</span>
        </label>
        <label>
          <input className="input" name='project' type="text" placeholder required />
          <span>Project</span>
        </label>
        <label>
          <input className="input" name='city' type="text" placeholder required />
          <span>City</span>
        </label>
        <label>
          <input className="input" name='ward' type="text" placeholder required />
          <span>Ward</span>
        </label>
        <label>
          <input className="input" name='district' type="text" placeholder required />
          <span>District</span>
        </label>
        <label>
          <input className="input" name='location' type="text" placeholder required />
          <span>Location</span>
        </label>
        <p className="signin">Review information carefully before submitting.</p>
        <button className="submit">Submit</button>
      </form>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .list-input {
    width: 95% !important;
  }

  .form {
    display: flex;
    flex-direction: column;
    gap: 10px;
    max-width: 350px;
    padding: 20px;
    border-radius: 20px;
    position: relative;
    background-color: #1a1a1a;
    color: #fff;
    border: 1px solid #333;
    margin-top: 15%;
  }

  .title {
    font-size: 28px;
    font-weight: 600;
    letter-spacing: -1px;
    position: relative;
    display: flex;
    align-items: center;
    padding-left: 30px;
    color: #00bfff;
  }

  .title::before {
    width: 18px;
    height: 18px;
  }

  .title::after {
    width: 18px;
    height: 18px;
    animation: pulse 1s linear infinite;
  }

  .title::before,
  .title::after {
    position: absolute;
    content: "";
    height: 16px;
    width: 16px;
    border-radius: 50%;
    left: 0px;
    background-color: #00bfff;
  }

  .message, 
  .signin {
    font-size: 14.5px;
    color: rgba(255, 255, 255, 0.7);
    margin-top: 0;
  }

  .signin {
    text-align: center;
  }

  .signin a:hover {
    text-decoration: underline royalblue;
  }

  .signin a {
    color: #00bfff;
  }

  .flex {
    display: flex;
    width: 100%;
    gap: 6px;
  }

  .form label {
    position: relative;
  }

  .form label .input {
    background-color: #333;
    color: #fff;
    width: 90%;
    padding: 20px 05px 05px 10px;
    outline: 0;
    border: 1px solid rgba(105, 105, 105, 0.397);
    border-radius: 10px;
  }

  .form label .input + span {
    color: rgba(255, 255, 255, 0.5);
    position: absolute;
    left: 7%;
    top: 25%;
    font-size: 0.5em;
    cursor: text;
    transition: 0.3s ease;
  }

  .form label .input:placeholder-shown + span {
    top: 12.5px;
    font-size: 0.9em;
  }

  .form label .input:focus + span,
  .form label .input:valid + span {
    color: #00bfff;
    top: 0px;
    font-size: 0.4em;
    font-weight: 600;
  }

  .input {
    font-size: medium;
  }

  .submit {
    border: none;
    outline: none;
    padding: 10px;
    border-radius: 10px;
    color: #fff;
    font-size: 16px;
    transform: .3s ease;
    background-color: #00bfff;
  }

  .submit:hover {
    background-color: #00bfff96;
  }

  @keyframes pulse {
    from {
      transform: scale(0.9);
      opacity: 1;
    }

    to {
      transform: scale(1.8);
      opacity: 0;
    }
  }`;

export default Form;
