import React from 'react';

function Form(props){
    const {values} = props

    return(
        <form>
            <div>
                <h2>Add a Character</h2>
            </div>
            <div>
                <h2>Information:</h2>
                <lable>Name:&nbsp;
                    <input
                    type='text'
                    name='name'
                    value={values.name}
                    />
                </lable>From:&nbsp;
                <lable>
                    <select
                    name='from'
                    value={values.from}
                    >
                        <option value=''>-- Please Select an Option</option>
                        <option value='Book'>Book</option>
                        <option value='Movie'>Movie</option>
                        <option value='Show'>Show</option>
                        <option value='Game'>Game</option>
                    </select>
                </lable>
                <lable>Title:&nbsp;
                    <input
                    type='text'
                    name='title'
                    value={values.title}
                    />
                </lable>
                <label>
                    <input
                    type='text'
                    name='species'
                    value={values.species}
                    />
                </label>
            </div>
        </form>
    )
}

export default Form