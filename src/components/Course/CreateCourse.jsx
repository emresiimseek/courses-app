import React, { useEffect, useState } from 'react';
import Button from '../../common/Button';
import Input from '../../common/Input';
import TextArea from '../../common/TextArea';
import { toHoursAndMinutes } from '../../helpers/getCourceDuration';
import { filterAuthorList } from '../../helpers/useFilterList';
import AuthorItem from './AuthorItem';
import CreateCourseSection from './CreateCourseSection';

function CreateCource(props) {
	const [selectedAuthors, setSelectedAuthors] = useState([]);
	const [authors, setAuthors] = useState(props.authors);
	const [currentAuthor, setCurrentAuthor] = useState();

	const [course, setCourse] = useState({
		id: 'ID',
		title: '',
		description: '',
		creationDate: '10/12/2022',
		duration: '',
		authors: [],
	});

	useEffect(() => {
		setCourse({ ...course, authors: selectedAuthors.map((a) => a?.id) });
	}, [selectedAuthors]);

	const handleSubmit = (event) => {
		event.preventDefault();

		props.onCourseChanged(course);
	};

	const onAuthorAdd = (autId) => {
		const { newAuthors, newSelectedAuthors } = filterAuthorList(
			authors,
			selectedAuthors,
			autId,
			'add'
		);

		setSelectedAuthors(newSelectedAuthors);
		setAuthors(newAuthors);
	};

	const onAuthorRemove = (autId) => {
		const { newAuthors, newSelectedAuthors } = filterAuthorList(
			authors,
			selectedAuthors,
			autId
		);

		setAuthors(newAuthors);
		setSelectedAuthors(newSelectedAuthors);
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
					<CreateCourseSection title='Add Auther'>
						<Input
							labelText='Author Name'
							value={props.currentAuthor}
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
					</CreateCourseSection>
					<CreateCourseSection title='Add Auther'>
						<div className='flex flex-col gap-2 p-10'>
							{authors.map((aut) => (
								<AuthorItem
									key={aut.id}
									buttonText='Add author'
									author={aut}
									onAuthorChange={onAuthorAdd}
								/>
							))}
						</div>
					</CreateCourseSection>
				</div>
				<div className='flex'>
					<CreateCourseSection title='Add Auther'>
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
					</CreateCourseSection>
					<CreateCourseSection title='Add Auther'>
						{selectedAuthors.length ? (
							<div className='flex flex-col gap-2 p-10'>
								{selectedAuthors.map((aut) => (
									<AuthorItem
										key={aut.id}
										author={aut}
										buttonText='Remove author'
										onAuthorChange={onAuthorRemove}
									/>
								))}
							</div>
						) : (
							<div className='text-center text-sm'>Author list is empty</div>
						)}
					</CreateCourseSection>
				</div>
			</div>
		</form>
	);
}

export default CreateCource;
