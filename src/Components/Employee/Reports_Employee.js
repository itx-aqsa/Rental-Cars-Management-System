import React from 'react'
import Button from '@mui/material/Button'
import '../../Reports.css'

const Reports_Employee = () => {
  const dropdownFunction = (event) => {
    alert(event.target.value)
  }

  return (
    <div>
        <h2 style={{ marginLeft: "4%", textAlign: 'center', marginBottom: '80px' }}>Reports</h2>
      <form action="">
          <div className="Name_Field">
            <h4 className="report_label">Select Report</h4>
            <select
            // value={this.state.selectedOption}
            onChange={dropdownFunction}
            className="name_input"
          >
            <option value="" disabled selected>Select the Report Type</option>
            <option value="Option 1">Option 1</option>
            <option value="Option 2">Option 2</option>
            <option value="Option 3">Option 3</option>
          </select>
          </div>
          <div className="button" style={{marginTop: '100px'}}>
          <Button type="submit" variant="contained"style={{backgroundColor: 'red', fontWeight: 'bold', paddingLeft: '6%', paddingRight: '6%', borderRadius: '5px', textTransform: 'uppercase'}}>Cancel</Button>
          <Button type="submit" variant="contained"style={{backgroundColor: 'red', fontWeight: 'bold', paddingLeft: '4%', paddingRight: '4%', borderRadius: '5px', textTransform: 'uppercase'}}>Generate Report</Button>
          </div>
        </form>
    </div>
  )
}

export default Reports_Employee
