import React from 'react'

export const JournalEntry = () => {
	return (
		<div className='journal__entry pointer'>
			<div
				className='journal__entry-picture'
				style={{
					backgroundSize : 'cover',
					backgroundImage : 'url(https://as.com/meristation/imagenes/2019/01/08/reportajes/1546933662_826942_1546935400_noticia_normal.jpg)'
				}}
			>
			</div>
			<div className='journal__entry-body'>
				<p className='journal__entry-title'>Un nuevo dia</p>
				<p className='journal__entry-content'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio ipsa vel veniam. Obcaecati vero sunt facilis quibusdam dolorum repellendus consequuntur enim, atque sapiente est quas inventore sequi praesentium earum nihil?
				</p>
			</div>
			<div className='journal__entry-date-box'>
				<span>Monday</span>
				<h4>28</h4>
			</div>
		</div>
	)
}
