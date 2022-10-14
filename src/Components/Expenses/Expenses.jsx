import React,{useState} from 'react'
import Card from '../UI/Card'
import ExpensItem from './ExpensItem';
import '../Style.css';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';


const Expenses = (props) => {
  const[filteredYear, setFilteredYear]=useState(0);

  const filterHandler=(selectedYear)=>{
    setFilteredYear(selectedYear);
  }

  const filteredExpenses=props.items.filter((expense)=>{
     return expense.date.getFullYear().toString()===filteredYear;
  });


  return (
    <>
    
    <Card className="expenses">
        <ExpensesFilter 
          selected={filteredYear} 
          onChangeFilter={filterHandler}
        />
        <ExpensesChart expenses={filteredExpenses}/>
       <ExpensesList items={filteredExpenses}/>
    </Card>
    </>
  );
};

export default Expenses
