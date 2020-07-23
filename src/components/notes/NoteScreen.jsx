import React from 'react'
import { NotesAppBar } from './NotesAppBar'

export const NoteScreen = () => {
	return (
		<div className='notes__main-content'>
			<NotesAppBar/>
			<div className='notes_content'>
				<input
					type="text"
					placeholder='Some awesome title'
					className='notes__title-input'
					autoComplete='off'
				/>
				<textarea
					placeholder='What happend today'
					className='notes_textarea'
				></textarea>
				<div className='notes_image'>
					<img
						src="https://como-funciona.com/wp-content/uploads/2019/02/anime-3-800x400.jpg"
						alt="naruto"
					/>
				</div>
			</div>
		</div>
	)
}
