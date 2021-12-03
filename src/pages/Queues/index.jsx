import React, { useState, useEffect } from 'react'
import Api from '../../service/Api'

export default function Queues() {
	const [ queues, setQueues ] = useState([])

	useEffect(() => {
		Api.get('/api/queues')
			.then(({data}) => {
				setQueues(data)
				console.log(data)
			})
			.catch(err => console.log(err))
	}, [])

	function testQueueContent () {
		alert(queues)
	}

	return (
		<div className="containerQueue">
			{queues ? queues
				.map((queue, id) => {
					return (
						<div key={id}>
							<p>{queue.name}</p>
						</div>
					)
				})
							:
							<div>
								<p>Hello world</p>
								<button onClick={() => testQueueContent()}>Click here</button>
							</div>
					}
			</div>
	)
}
