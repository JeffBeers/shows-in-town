import React, { useState, useEffect } from 'react';
import Event from './Event';

const Timeline = () => {
	const [data, setData] = useState(null)

	useEffect(() => {
		fetch('http://localhost:500')
			.then(res => res.json())
			.then(res => setData(res))
	}, [])

	return (
		<>
			{data && data.map((event, index) => {
				return (
					<Event data={event} key={index} />
				)
			})}
		</>
	)
}

export default Timeline;