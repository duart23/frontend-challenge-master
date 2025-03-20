import React from 'react'
import './sort.css'

interface SortProps {
	onSortChange: (value: string) => void;
  }

const Sort: React.FC<SortProps> = (
	{onSortChange}
) => {
  return (
	<select className='sort' onChange={(e) => onSortChange(e.target.value)} defaultValue="">
	<option value="" disabled>Sort</option>
	<option value="highToLow">High to Low</option>
	<option value="lowToHigh">Low to High</option>
	<option value="alphabetical">A-Z</option>
	<option value="reversed">Z-A</option>
  </select>
)}

export default Sort;

