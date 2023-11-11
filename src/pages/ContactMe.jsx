import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

function ContactMe() {
	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				'service_jlh8ou5',
				'template_yl0yrxg',
				form.current,
				'st6B4iGTKxAOR0QAN'
			)
			.then(
				(result) => {
					console.log(result.text);
					alert('Email sent successfully!');
				},
				(error) => {
					console.log(error.text);
				
					alert('Error sending email. Please try again.');
				}
			);

		form.current.reset();
	};

	return (
		<>
			<form ref={form} onSubmit={sendEmail}>
				<div className='container-sm'>
					<h1>Questions, or comments? </h1>
					<div className='mb-3'>
						<label htmlFor='forminput0' className='form-label'>
							Name
						</label>
						<input
							type='text'
							name='from_name' 
							className='form-control'
							id='forminput0'
							placeholder='Your name'
						/>
						<label htmlFor='forminput1' className='form-label'>
							Email address
						</label>
						<input
							type='email'
							name='from_email' 
							className='form-control'
							id='forminput1'
							placeholder='name@example.com'
						/>
					</div>
					<div className='mb-3'>
						<label htmlFor='formcontrol1' className='form-label'>
							Comments/Messages
						</label>
						<textarea
							name='message'
							className='form-control'
							id='formcontrol1'
							rows='3'
						></textarea>
						<button type='submit' className='button'>
							Submit
						</button>
					</div>
				</div>
			</form>
		</>
	);
}

export default ContactMe;
