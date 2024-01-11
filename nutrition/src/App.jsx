import React from 'react'
import './App.css'
import FoodBox from './components/FoodBox'
import FoodData from './resources/FoodData'

export default class App extends React.Component {
  constructor(){
    super()
    this.state={
      value:" ",
      newArr:FoodData
    }
    
  }
  render() {
    let {newArr}=this.state
    let handleChange=(e)=>{
      let filteredData=FoodData.filter((el)=>el.name.includes(e.target.value))
      this.setState({newArr:filteredData})
    }
    return (
      <>
      <div>
        <input type="text" onChange={handleChange} id='search' placeholder='Search Food Here' />
      </div>
      {newArr.map((el,i)=><FoodBox key={i} {...el}/>)}
      
      </>
    )
  }
}