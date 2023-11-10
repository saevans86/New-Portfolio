function ContactMe() {
	return (
		<>
			<div className='container-sm'>
				<h1>Questions, or comments? </h1>
				<div className='mb-3'>
					<label for='email' className='form-label'>
						Name
					</label>
					<input
						type='name'
						className='form-control'
						id='forminput0'
						placeholder='Your name'
					/>
					<label for='email' className='form-label'>
						Email address
					</label>
					<input
						type='email'
						className='form-control'
						id='forminput1'
						placeholder='name@example.com'
					/>
				</div>
				<div className='mb-3'>
					<label for='comments' className='form-label'>
						Comments/Messages
					</label>
					<textarea
						className='form-control'
						id='formcontrol1'
						rows='3'
					></textarea>
				</div>
			</div>
		</>
	);
}
export default ContactMe;
