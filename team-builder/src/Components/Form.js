import React from 'react';

function Form(props){
    const {values, onSubmit, onInputChange} = props

    return(
        <form className='characterForm' onSubmit={onSubmit}>
            <div>
                <h2>Add a Character</h2>
            </div>
            <div className='form'>
                <h2>Information:</h2>
                <label>Name:&nbsp;
                    <input
                    type='text'
                    name='name'
                    value={values.name}
                    onChange={onInputChange}
                    />
                </label>
                <label>From:&nbsp;
                    <select
                    name='from'
                    value={values.from}
                    onChange={onInputChange}
                    >
                        <option value=''>-- Please Select an Option</option>
                        <option value='Book'>Book</option>
                        <option value='Movie'>Movie</option>
                        <option value='Show'>Show</option>
                        <option value='Game'>Game</option>
                    </select>
                </label>
                <label>Title:&nbsp;
                    <input
                    type='text'
                    name='title'
                    value={values.title}
                    onChange={onInputChange}
                    />
                </label>
                <label>Species:&nbsp;
                    <input
                    type='text'
                    name='species'
                    value={values.species}
                    onChange={onInputChange}
                    />
                </label>
            </div>
            <div>
                <button>Submit</button>
            </div>
        </form>
    )
}

export default Form