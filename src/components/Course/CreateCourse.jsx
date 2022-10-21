import React, { useEffect, useState } from 'react';
import Button from '../../common/Button';
import Input from '../../common/Input';
import TextArea from '../../common/TextArea';
import { toHoursAndMinutes } from '../../helpers/getCourceDuration';
import AuthorItem from './AuthorItem';

function CreateCource(props) {
	const [selectedAuthors, setSelectedAuthors] = useState([]);
	const [authors, setAuthors] = useState(props.authors);
	const [currentAuthor, setCurrentAuthor] = useState();

	const [course, setCourse] = useState({
		id: 'ID',
		title: '',
		description: '',
		creationDate: '10/12/2022',
		duration: null,
		authors: [],
	});

	useEffect(() => {
		setCourse({ ...course, authors: selectedAuthors.map((a) => a?.id) });
	}, [course, selectedAuthors]);

	const handleSubmit = (event) => {
		event.preventDefault();

		props.onCourseChanged(course);
	};

	return (
		<form onSubmit={handleSubmit} className='mb-10'>
			<div className='inline-flex items-end justify-between w-full mb-5'>
				<div className='w-1/4'>
					<Input
						required
						minLength={2}
						labelText='Title'
						onChange={(title) => setCourse({ ...course, title })}
						placeholderText='Enter title...'
					/>
				</div>
				<Button text='Create Course' type='submit' />
			</div>
			<TextArea
				labelText='Description'
				required
				minLength={2}
				placeholderText='Enter Description'
				onChange={(description) => setCourse({ ...course, description })}
			/>
			<div className='border border-gray-400 rounded p-5 my-10'>
				<div className='flex'>
					<div className='flex-1'>
						<div className='flex flex-col gap-5'>
							<h1 className='text-center text-xl'>Add Auther</h1>
							<Input
								labelText='Author Name'
								value={currentAuthor}
								placeholderText='Enter author name...'
								onChange={(value) => setCurrentAuthor(value)}
							/>
							<div className='justify-center flex'>
								<Button
									text='Create Author'
									onClick={() => {
										setAuthors([
											...authors,
											{ id: currentAuthor, name: currentAuthor },
										]);
										setCurrentAuthor('');
									}}
								/>
							</div>
						</div>
					</div>
					<div className='flex-1'>
						<h1 className='text-center text-xl '>Authers</h1>
						<div className='flex flex-col gap-2 p-10'>
							{authors.map((aut) => (
								<AuthorItem
									key={aut.id}
									buttonText='Add author'
									author={aut}
									onAuthorChange={(autId) => {
										setSelectedAuthors([
											...selectedAuthors,
											authors.find((aut) => aut.id === autId),
										]);

										setAuthors(authors.filter((aut) => aut.id !== autId));
									}}
								/>
							))}
						</div>
					</div>
				</div>
				<div className='flex'>
					<div className='flex-1'>
						<h1 className='text-center text-xl my-5'>Duration</h1>
						<Input
							value={course.duration}
							labelText='Duration'
							placeholderText='Enter duration in minutes...'
							onChange={(duration) => setCourse({ ...course, duration })}
						/>
						<div className='my-5 text-2xl'>
							<span>Duration:</span>
							<spa className='font-bold'>
								{toHoursAndMinutes(course.duration)}
							</spa>
						</div>
					</div>
					<div className='flex-1'>
						<h1 className='text-center text-xl my-5'>Courses Authors</h1>
						{selectedAuthors.length ? (
							<div className='flex flex-col gap-2 p-10'>
								{selectedAuthors.map((aut) => (
									<AuthorItem
										key={aut.id}
										author={aut}
										buttonText='Remove author'
										onAuthorChange={(autId) => {
											setAuthors([
												...authors,
												props.authors.find((aut) => aut.id === autId),
											]);
											setSelectedAuthors(
												selectedAuthors.filter((aut) => aut.id !== autId)
											);
										}}
									/>
								))}
							</div>
						) : (
							<div className='text-center text-sm'>Author list is empty</div>
						)}
					</div>
				</div>
			</div>
		</form>
	);
}

export default CreateCource;
