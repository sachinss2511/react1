import './ExpenseForm.css'
const ExpenseForm = () =>{
  
  function handleChange(event) {
    console.log(event.target.value);
  }


  return (  <form>
       
      <div className='new-expense__controls'>
           <div className='new-expense__control'>
              <label>Title</label>
              <input onChange={handleChange} type ='text'></input>
           </div>
         <div className='new-expense__control'>
              <label>Amount</label>
              <input onChange={handleChange} type ='number' min="0.01" step="0.01" placeholder='type here'/>
          </div>
          <div className='new-expense__control'>
              <label>Date</label>
              <input onChange={handleChange} type ='date' min = '2019-01-01' max ="2022-12-31"/>
          </div>
      </div>
      <div className='new-expense__actions'>
          <button type = 'submit'>Add Expense</button>
      </div>
    </form>
  )
}

export default ExpenseForm;