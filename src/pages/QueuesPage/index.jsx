import React from 'react'

import HeaderComponent from '../../components/Header'
import Queues from '../../components/Queues'

export default function QueuesPage() {
	return (
		<div className="containerQueue">
			<HeaderComponent />
			<Queues />
		</div>
	)
}
