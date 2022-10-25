import Button from '../../common/Button';
import Input from '../../common/Input';
import TextArea from '../../common/TextArea';
import { toHoursAndMinutes } from '../../helpers/getCourceDuration';
import { filterAuthorList } from '../../helpers/useFilterList';
import AuthorItem from './AuthorItem';
import CreateCourseSection from './CreateCourseSection';
import { Author } from '../../types/Author';
import { mockedAuthorsList } from '../../constants';
import { useState, useEffect } from 'react';
import { Course } from '../../types/Course';

function CreateCource(props: { onCourseChanged?: (course: Course) => {} }) {
	const [selectedAuthors, setSelectedAuthors] = useState<Author[]>([]);
	const [authors, setAuthors] = useState<Author[]>(mockedAuthorsList);
	const [currentAuthor, setCurrentAuthor] = useState<string>('');

	const [course, setCourse] = useState<Course>({
		id: 'ID',
		title: '',
		description: '',
		creationDate: '10/12/2022',
		duration: 0,
		authors: [],
	});

	useEffect(() => {
		setCourse({ ...course, authors: selectedAuthors.map((a) => a?.id) });
	}, [selectedAuthors]);

	const handleSubmit = (event: any) => {
		event.preventDefault();

		props.onCourseChanged && props.onCourseChanged(course);
	};

	const onAuthorAdd = (autId: string) => {
		const { newAuthors, newSelectedAuthors } = filterAuthorList(
			authors,
			selectedAuthors,
			autId,
			'add'
		);

		setSelectedAuthors(newSelectedAuthors);
		setAuthors(newAuthors);
	};

	const onAuthorRemove = (autId: string) => {
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
						value={course.title}
						labelText='Title'
						onChange={(title: string) => setCourse({ ...course, title })}
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
				onChange={(description: string) =>
					setCourse({ ...course, description })
				}
			/>
			<div className='border border-gray-400 rounded p-5 my-10'>
				<div className='flex'>
					<CreateCourseSection title='Add Auther'>
						<Input
							labelText='Author Name'
							value={currentAuthor}
							placeholderText='Enter author name...'
							onChange={(value: string) => setCurrentAuthor(value)}
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
							onChange={(duration: string) =>
								setCourse({ ...course, duration: +duration })
							}
						/>
						<div className='my-5 text-2xl'>
							<span>Duration:</span>
							<span className='font-bold'>
								{toHoursAndMinutes(course.duration)}
							</span>
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
