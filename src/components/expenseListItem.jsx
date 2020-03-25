import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';



const ExpenseListItem = (props) => {
    const { description, amount, note, createdAt, id } = props
    console.log(props)

    return (
        <div>

            <Link to={`/edit/${id}`}>
                <h3>{description}</h3>
            </Link>
            <p>
                {numeral(amount / 100).format('$0.00')}
                -
             {moment(createdAt).format('MMMM Do YYYY')}
            </p>

        </div>
    );
}


export default ExpenseListItem;